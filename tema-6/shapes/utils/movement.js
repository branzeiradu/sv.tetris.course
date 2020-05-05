import { Validator } from "./validator.js";

export class Movement {
    constructor(shape, cells,gameOverCallback) {
        this.gameOver=gameOverCallback;
        this.shape = shape;
        this.cells = cells;
        this.validator = new Validator(this.shape, this.cells);
        this.canMove =  !this.validator.checkNext(this.shape.row, this.shape.column);
        if(!this.canMove){
            gameOverCallback();
        }
    }

    up() {
        this.shape.row--;
    }

    down() {
        const { row, column } = this.shape;
        this.shape.clear();
        const nextNotAvailable = this.validator.checkNext(row + 1, column);
        if (nextNotAvailable) {
           
            this.shape.draw();
            if(row === 0) {
                this.gameOver();
            }
            this.canMove = false;
            return ;
        }

        this.shape.row++;
        this.shape.draw();
    }

    left() {
        const { row, column } = this.shape;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column - 1);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }

        this.shape.column--;
        this.shape.draw();
    }

    right() {
        const { row, column } = this.shape;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column + 1);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }

        this.shape.column++;
        this.shape.draw();
    }

    rotate() {
        const { row, column } = this.shape;

        this.shape.clear();
        const nextTemplate = this.shape.getTemplate(this.shape.templateIndex + 1);
        const nextNotAvailable = this.validator.checkNext(row, column, nextTemplate);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }

        this.shape.rotate();
    }
}