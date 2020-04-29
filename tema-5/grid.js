import { Cell } from './cell.js';

export class Grid {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.cells = [];
        this.backgroundColor='#7facf5';
    }

    create() {
        for (let row = 0; row < this.rows; row++) {
            this.cells[row] = [];
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column] = new Cell(row, column, this.backgroundColor );
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

    getMatches() {
        const matches = [];

        for (let row = this.rows - 1; row >= 0; row--) {
            /*let count = 0;
            for (let column = 0; column < this.columns; column++) {
                if (!this.cells[row][column].isEmpty) {
                    count++;
                }
            }*/

            const filledColumns=this.cells[row].filter( cell => { 
              return  cell.isEmpty == false;
            });
            if(filledColumns.length == this.columns){
                matches.push(row);
            }

            /*
            if (count == this.columns) {
              matches.push(row);
            }
            */
        }

        return matches;
    }
    clearRow(poz){
        const rowCells=this.cells[poz];
        rowCells.forEach(cell => {
            cell.isEmpty=true;
            cell.color=this.backgroundColor;
            cell.draw();
            
        });
    }

    collapse(poz) {

        this.clearRow(poz);

        for (let row = poz - 1; row >= 0; row--) {
            for (let column = 0; column < this.columns; column++) {
                const crntCell=this.cells[row][column];
                const empty=crntCell.isEmpty;
                const color=crntCell.color;

                const nxtCell=this.cells[row + 1][column];
                nxtCell.isEmpty=empty;
                nxtCell.color=color;
                nxtCell.draw();
                
                
            }
        }
        


    }



}