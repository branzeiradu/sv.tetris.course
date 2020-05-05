import { Cell } from './cell.js';

export class Grid {
    static DEFAULT_COLOR ="cyan";
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.cells = [];
        this.totalLines=0;
    }

    create() {
        for (let row = 0; row < this.rows; row++) {
            this.cells[row] = [];
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column] = new Cell(row, column, Grid.DEFAULT_COLOR );//'#7facf5'
            }
        }
    }

    recreate() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                const {isEmpty,color} = this.cells[row][column];
                this.cells[row][column] = new Cell(row, column, color);
                this.cells[row][column].isEmpty = isEmpty
            }
        }
    }

    draw() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column].draw();
            }
        }
    }

    score() {
        //1. Get full rows
        let fullRows = [];
        for (let row = 0; row < this.rows; row++) {
            if (this.isFullRow(row)) {
                fullRows.push(row);
            }
        }
        //2. if we have full rows
        const {length} = fullRows;
        if (length) { // if 0 -> false
            this.totalLines+=length;
            //delete full rows
            for (let row = 0; row < length; row++) {
                this.deleteRow(fullRows[row]);
            }
            //3. add empty rows on top of the grid
            this.cells = this.attachGridRows(length);

            //4. redraw/recreate grid
            this.recreate(); //TODO - last session

            //5. return score;
            return length * 10;
        }

        return 0;
    }
    get linesCount(){
        return this.totalLines;
    }

    isFullRow(rowIndex) {
        return this.cells[rowIndex].every(cell => !cell.isEmpty);
    }

    deleteRow(rowIndex) {
        this.cells.splice(rowIndex, 1);
    }

    attachGridRows(rowsNumber) {
        const newRows = this.generateNewRows(rowsNumber);
        for (let row = 0; row < newRows.length; row++) {
            this.cells.unshift(newRows[row]);
        }

        return this.cells;
    }

    generateNewRows(rowsNumber) {
        const newRows = [];
        for (let row = 0; row < rowsNumber; row++) {
            newRows[row] = [];
            for (let column = 0; column < this.columns; column++) {
                newRows[row][column] = new Cell(row, column, Grid.DEFAULT_COLOR);   //'#7facf5'
            }
        }
        return newRows;
    }

}