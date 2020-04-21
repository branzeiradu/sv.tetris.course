import { Grid } from './grid.js';
import { Shapes } from './shapes/shapes.js';
import { Random } from './random.js';



const rows = 20;
const columns = 10;


const grid = new Grid(rows, columns);
grid.create();
grid.draw();

const factory=new Shapes(grid);

let shape=factory.newShape(0,3) ;

document.addEventListener("keydown",shape.movement.handler );
const render=()=>{
    grid.draw();
    shape.draw();
    shape.movement.moveDown();
   
    
}
setInterval(render, 500);




