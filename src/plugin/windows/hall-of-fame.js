import { decodeCp1251Response, encodeCp1251 } from '../utils/cp1251.js';

const FANTASYLAND_BASE_URL = 'https://www.fantasyland.ru';

async function fetchFantasylandPage(path, login) {
  const response = await fetch(`${FANTASYLAND_BASE_URL}${path}?login=${encodeCp1251(login)}`);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`);
  }

  return decodeCp1251Response(response);
}

function parseHtml(text) {
  return new DOMParser().parseFromString(text, 'text/html');
}

function normalizeText(value) {
  return (value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
}

function parseNumber(value) {
  const match = String(value || '').replace(/\s+/g, '').match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function parseBattleInfo(html) {
  const doc = parseHtml(html);
  const mobs = [];

  Array.from(doc.querySelectorAll('tr')).forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));

    for (let index = 0; index < cells.length - 1; index += 2) {
      const mobCell = cells[index];
      const resultCell = cells[index + 1];
      const mobText = normalizeText(mobCell.textContent);
      const resultText = normalizeText(resultCell.textContent);

      if (!mobText.includes('[Lvl:') || !resultText.includes('/')) {
        continue;
      }

      const levelMatch = mobText.match(/\[Lvl:\s*(\d+)\]/i);
      const resultMatch = resultText.match(/([\d\s]+)\s*\/\s*([\d\s]+)/);
      const name = normalizeText(mobCell.querySelector('i')?.textContent || mobText.replace(/\[Lvl:\s*\d+\]/i, ''));

      mobs.push({
        name,
        level: levelMatch ? Number(levelMatch[1]) : null,
        killed: resultMatch ? parseNumber(resultMatch[1]) : 0,
        losses: resultMatch ? parseNumber(resultMatch[2]) : 0
      });
    }
  });

  return {
    mobs,
    totalKilled: mobs.reduce((sum, mob) => sum + mob.killed, 0)
  };
}

function splitShowRankArgs(argsText) {
  const args = [];
  let current = '';
  let quote = null;
  let escaped = false;

  for (const char of argsText) {
    if (escaped) {
      current += char;
      escaped = false;
      continue;
    }

    if (char === '\\') {
      current += char;
      escaped = true;
      continue;
    }

    if (quote) {
      current += char;
      if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === "'" || char === '"') {
      current += char;
      quote = char;
      continue;
    }

    if (char === ',') {
      args.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  if (current.trim()) {
    args.push(current.trim());
  }

  return args;
}

function unquoteJsString(value) {
  const trimmed = String(value || '').trim();
  const unquoted = trimmed.replace(/^['"]|['"]$/g, '');
  return unquoted
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\r')
    .replace(/\\t/g, '\t')
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

function parseMedalDescription(tooltip) {
  const lines = tooltip.split('\n').map(normalizeText).filter(Boolean);
  const firstLine = lines[0] || '';
  const titleParts = firstLine.split(':');
  const title = normalizeText(titleParts.shift() || firstLine);
  const firstDescription = normalizeText(titleParts.join(':'));
  const descriptionLines = firstDescription ? [firstDescription, ...lines.slice(1)] : lines.slice(1);
  const progress = [];

  descriptionLines.forEach(line => {
    const progressMatch = line.match(/^\(?(.+?):\s*([\d\s]+)\)?$/);
    if (progressMatch) {
      progress.push({
        label: normalizeText(progressMatch[1]),
        value: parseNumber(progressMatch[2])
      });
    }
  });

  return {
    title,
    description: descriptionLines.join('\n'),
    progress
  };
}

function parseMedals(html) {
  const awardsIndex = html.indexOf("GetBlockTitle('Награды')");
  const awardsHtml = awardsIndex >= 0 ? html.slice(awardsIndex) : html;
  const showRankPattern = /ShowRank\(([\s\S]*?)\);/g;
  const medals = [];
  let match;

  while ((match = showRankPattern.exec(awardsHtml))) {
    const args = splitShowRankArgs(match[1]);
    if (args.length < 5) {
      continue;
    }

    const image = unquoteJsString(args[0]);
    const tooltip = unquoteJsString(args[3]);
    const parsed = parseMedalDescription(tooltip);

    medals.push({
      id: parseNumber(args[4]),
      image: `${FANTASYLAND_BASE_URL}/images/medals/${image}`,
      title: parsed.title,
      description: parsed.description,
      progress: parsed.progress
    });
  }

  return medals;
}

async function gatherData(login) {
  const [battleHtml, playerHtml] = await Promise.all([
    fetchFantasylandPage('/cgi/battle_info.php', login),
    fetchFantasylandPage('/cgi/pl_info.php', login)
  ]);
  const battle = parseBattleInfo(battleHtml);
  const medals = parseMedals(playerHtml);

  return {
    login,
    mobs: battle.mobs,
    totalKilled: battle.totalKilled,
    medals
  };
}

function setStatus(message, isError = false) {
  const status = document.getElementById('status');
  status.textContent = message;
  status.classList.toggle('error', isError);
}

function renderMobs(mobs) {
  const body = document.getElementById('mobsBody');
  body.innerHTML = '';

  mobs.forEach(mob => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const levelCell = document.createElement('td');
    const killedCell = document.createElement('td');
    const lossesCell = document.createElement('td');

    nameCell.textContent = mob.name;
    levelCell.textContent = mob.level ?? '';
    killedCell.textContent = mob.killed;
    lossesCell.textContent = mob.losses;

    levelCell.className = 'number';
    killedCell.className = 'number';
    lossesCell.className = 'number';

    row.append(nameCell, levelCell, killedCell, lossesCell);
    body.appendChild(row);
  });
}

function renderMedals(medals) {
  const body = document.getElementById('medalsBody');
  body.innerHTML = '';

  medals.forEach(medal => {
    const progressText = medal.progress.length
      ? medal.progress.map(item => `${item.label}: ${item.value}`).join(', ')
      : '';
    const row = document.createElement('tr');
    const imageCell = document.createElement('td');
    const titleCell = document.createElement('td');
    const progressCell = document.createElement('td');
    const image = document.createElement('img');

    image.className = 'medal-img';
    image.src = medal.image;
    image.alt = '';
    titleCell.textContent = medal.title;
    progressCell.textContent = progressText;
    row.title = medal.description;
    imageCell.appendChild(image);
    row.append(imageCell, titleCell, progressCell);
    body.appendChild(row);
  });
}

function renderData(data) {
  document.getElementById('totalKills').textContent = data.totalKilled;
  document.getElementById('medalsCount').textContent = data.medals.length;
  document.getElementById('summary').hidden = false;
  document.getElementById('results').hidden = false;
  renderMobs(data.mobs);
  renderMedals(data.medals);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const input = document.getElementById('loginInput');
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const login = input.value.trim();
    if (!login) {
      setStatus('Введите логин.', true);
      return;
    }

    submitButton.disabled = true;
    setStatus('Загружаю данные...');

    try {
      const data = await gatherData(login);
      renderData(data);
      setStatus(`Данные загружены для ${data.login}.`);
    } catch (error) {
      console.error(error);
      setStatus(error.message || 'Не удалось загрузить данные.', true);
    } finally {
      submitButton.disabled = false;
    }
  });

  form.requestSubmit();
});

window.gatherData = gatherData;
window.parseBattleInfo = parseBattleInfo;
window.parseMedals = parseMedals;
