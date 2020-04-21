export class Movement {
    constructor(shape) {
        this.shape = shape;
        this.keyHandler=(event) => {
            switch (event.key) {
                case 'ArrowUp':
                    this.moveUp();
                    break;
                case 'ArrowDown':
                    this.moveDown();
                    break;
                case 'ArrowLeft':
                    this.moveLeft();
                    break;
                case 'ArrowRight':
                    this.moveRight();
                    break;
                case 'Enter':
                    this.changeColor();
                    break;

            }
        }


    }
    moveUp() {
        this.shape.row--;

    }

    moveDown() {
        this.shape.row++;

    }

    moveLeft() {
        this.shape.column--;

    }

    moveRight() {
        this.shape.column++;

    }
    changeColor() {
        this.shape.changeColor();

    }


    get handler() {
        return this.keyHandler;
    }


}
