const CP1251_EXTRA_CHARS = {
  'Ђ': 0x80, 'Ѓ': 0x81, '‚': 0x82, 'ѓ': 0x83, '„': 0x84, '…': 0x85, '†': 0x86, '‡': 0x87,
  '€': 0x88, '‰': 0x89, 'Љ': 0x8a, '‹': 0x8b, 'Њ': 0x8c, 'Ќ': 0x8d, 'Ў': 0x8e, 'Џ': 0x8f,
  'ђ': 0x90, '‘': 0x91, '’': 0x92, '“': 0x93, '”': 0x94, '•': 0x95, '–': 0x96, '—': 0x97,
  '™': 0x99, 'љ': 0x9a, '›': 0x9b, 'њ': 0x9c, 'ќ': 0x9d, 'ў': 0x9e, 'џ': 0x9f,
  'Ё': 0xa8, 'ё': 0xb8, '№': 0xb9
};

function percentEncodeByte(byte) {
  return `%${byte.toString(16).padStart(2, '0').toUpperCase()}`;
}

export function encodeCp1251(value) {
  return String(value).split('').map(char => {
    const code = char.charCodeAt(0);

    if (
      (code >= 0x30 && code <= 0x39) ||
      (code >= 0x41 && code <= 0x5a) ||
      (code >= 0x61 && code <= 0x7a) ||
      char === '-' ||
      char === '_' ||
      char === '.' ||
      char === '~'
    ) {
      return char;
    }

    if (code >= 0x410 && code <= 0x44f) {
      return percentEncodeByte(code - 0x350);
    }

    const extraByte = CP1251_EXTRA_CHARS[char];
    if (extraByte !== undefined) {
      return percentEncodeByte(extraByte);
    }

    return encodeURIComponent(char);
  }).join('');
}

export function decodeCp1251(buffer) {
  return new TextDecoder('windows-1251').decode(buffer);
}

export async function decodeCp1251Response(response) {
  return decodeCp1251(await response.arrayBuffer());
}
