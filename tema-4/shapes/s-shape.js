import { Shape } from "./shape.js";
import { Random } from "../random.js";
export class S extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, [
            [0, 1, 1],
            [1, 1, 0]
        ]);
       
        this.color = 'red';
    }

    changeColor() {
        this.color = Random.color();
    }
}



