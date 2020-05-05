import { Cell } from '../../cell.js';

export class NextShape {
    constructor(element) {
        this.container = element;
        //this.container.innerText = "Next Shape color here";        
    }
    drawNext(shape) {
        const render = this.render(shape);
        this.container.innerHTML=render;
    }

    render(shape) {
        console.log(shape);
        const {template} = shape;
        const {color} = shape;
        const {SIZE} = Cell;
        const style=`background-color:${color}; width: ${SIZE}px; height: ${SIZE}px; `;

        let render = "";

        template.forEach(arr => {
           let renderedRow="";
            arr.forEach((item) => {
                const filled = `<div style='${style}' class='filled'></div>`;
                const empty = `<div style='${style}'  class='empty'></div>`
                const box=(item == 1) ? filled : empty;
                renderedRow += box;
            });
           
          
           render += renderedRow + "<br>";

        });

        return render;
    }

}