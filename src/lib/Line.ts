export default class Line {
  sx: number;
  sy: number;
  private ex: number;
  private ey: number;
  constructor(sx: number, sy: number, ex: number, ey: number) {
    this.sx = sx;
    this.sy = sy;
    this.ex = ex;
    this.ey = ey;
  }

  info(): void {
    console.log(`(${this.sx}, ${this.sy}) - (${this.ex}, ${this.ey})`);
  }

}