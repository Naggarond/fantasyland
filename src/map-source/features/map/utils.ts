export const cellId = (x: number, y: number, z = 0) => ((15*20+Math.abs(z))*125+x)*125+y;

export const walls = (val: number) => ({
  top: Math.floor(val / 10) % 10,
  left: Math.floor(val / 1000) % 10,
  right: Math.floor( val / 100000 ) % 10,
  bottom: Math.floor( val / 10000000 ) % 10,
});