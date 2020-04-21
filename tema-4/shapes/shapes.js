import { L } from './l-shape.js';
import { O } from './o-shape.js';
import { S } from './s-shape.js';
import { I } from './i-shape.js';
import { Z } from './z-shape.js';
import { J } from './j-shape.js';
import { T } from './t-shape.js';
import { Random } from '../random.js';

export class Shapes {
    constructor(grid) {
        this.grid = grid;
        this.shapes = [L, O, S, I, Z, J, T];
    }
    /*
    randomShape(){
        const shapePoz=Random.int(0, this.shapes.length - 1);

       
        const s = new this.shapes[shapePoz](0, column, this.grid.cells);

        const template=this.shapes[shapePoz].template;
        const maxColumn=template[0].length;
        const column = Random.int(grid.column , grid.column );


       
    }*/

    newShape(row, column) {
        const shapePoz = Random.int(0, this.shapes.length - 1);
        const s = new this.shapes[shapePoz](row, column, this.grid.cells);
        return s;
    }

}