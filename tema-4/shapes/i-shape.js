import { Shape } from "./shape.js";
import { Random } from "../random.js";
export class I extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, [
            [1],
            [1],
            [1],
            [1]
        ]);     

       
        this.color = 'lightblue';
    }

    changeColor() {
        this.color = Random.randomColor();
    }
}
