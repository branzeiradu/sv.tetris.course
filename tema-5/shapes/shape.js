export class Shape {
    constructor(row, column, cells, color) {
        this.row = row;
        this.column = column;
        this.cells = cells;
        this.color = color;
        this.templateIndex = 0;
    };

    draw() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    this.cells[this.row + row][this.column + column].draw(this.color);
                    this.cells[this.row + row][this.column + column].isEmpty = false;
                }
            }
        }
    }

    clear() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    this.cells[this.row + row][this.column + column].draw('#7facf5');
                    this.cells[this.row + row][this.column + column].isEmpty = true;
                }
            }
        }
    }

    getNextTemplate() {
        const length = this.getTemplates().length;
        const crntTemplateIndx = this.templateIndex + 1;
        const next= this.getTemplates()[crntTemplateIndx % length];
        
        return next ;
    }

    incrementTemplate(){
        this.templateIndex++;
    }

    rotate() {

        this.clear()
        this.template = this.getNextTemplate();
        this.incrementTemplate();
        this.draw();
    }
}