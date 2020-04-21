import { Shape } from "./shape.js";
import { Random } from "../random.js";
export class T extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, [//relative coordinatest to rows and columns
            [1, 1, 1],
            [0, 1, 0]
        ]);

        this.color = 'purple';
    }

    changeColor() {
        this.color = Random.color();
    }
}

