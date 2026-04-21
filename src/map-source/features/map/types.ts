
interface Cell {
  trap?: boolean;
  mobs?: string;
  objs?: string;
  npcs?: string;
  value: number;
}

type Map = Record<number, Cell>;