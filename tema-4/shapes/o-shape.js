import { Shape } from "./shape.js";
import { Random } from "../random.js";
export class O extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, [
            [1, 1],
            [1, 1]
        ]);
       
        this.color = 'yellow';
    }

    changeColor() {
        this.color = Random.color();
    }
}

