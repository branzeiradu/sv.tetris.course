import { Movement } from './movement.js';
export class Shape {
    constructor(row, column, cells, template) {
        this.row = row;
        this.column = column;
        this.cells = cells;
        this.template = template;
        this.movement = new Movement(this);
    }

    draw() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {

                const cellRow = this.row + row;
                const cellColumn = this.column + column;
                if ( cellRow >= this.cells.length
                        || cellColumn >= this.cells[cellRow][cellColumn]) {
                            return;
                }
                if (this.template[row][column] === 1) {
                    this.cells[this.row + row][this.column + column].draw(this.color);
                }


            }
        }
    }
}

