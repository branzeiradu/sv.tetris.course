import { Shape } from "./shape.js";
import { Random } from "../random.js";
export class L extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, [//relative coordinatest to rows and columns
            [1, 0],
            [1, 0],
            [1, 1]
        ]);
        
        this.color = 'orange';
    }

    changeColor() {
        this.color = Random.color();
    }

}
