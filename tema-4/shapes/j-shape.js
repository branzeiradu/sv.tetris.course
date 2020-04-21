import { Shape } from "./shape.js";
import { Random } from "../random.js";
export class J extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, [//relative coordinatest to rows and columns
            [0, 1],
            [0, 1],
            [1, 1]
        ]);
       
        this.color = '#FFB3DE';
    }

    changeColor() {
        this.color = Random.randomColor();
    }
}

