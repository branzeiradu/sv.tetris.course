import { Shape } from "./shape.js";
import { Random } from "../random.js";
export class Z extends Shape {
  constructor(row, column, cells) {
    super(row, column, cells, [
      [1, 1, 0],
      [0, 1, 1]
    ]);
    this.color = 'darkgreen';
  }
  
  changeColor() {
    this.color = Random.color();
  }
}




