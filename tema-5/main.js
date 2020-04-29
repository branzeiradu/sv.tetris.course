import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, getRandomInt } from './shapes/utils/shape-generator.js';
import {Score} from './score.js'

const rows = 20;
const columns = 10;

const score= new Score(document.body);
const grid = new Grid(rows, columns);
grid.create();
grid.draw();

let shape = generateNewShape(grid.cells);
let movement = new Movement(shape, grid.cells);

document.addEventListener("keydown", event => {
    console.log(event.key);
    switch (event.key) {
        case 'ArrowUp':
            movement.rotate();
            break;
        case 'ArrowDown':
            movement.down();
            break;
        case 'ArrowLeft':
            movement.left();
            console.log('left');
            break;
        case 'ArrowRight':
            movement.right();
            console.log('right');
            break;
        case 'Enter':
            const colors = ['blue', 'green', 'red'];
            const p=getRandomInt(0,colors.length - 1);
            shape.color = colors[getRandomInt(0, p)];
            break;
    }
});

let speed=500;
const animate = () => {

    if (movement.canMove) {
        movement.down();
        return;
    }

    const lines = grid.getMatches();
    const total = lines.length;
    lines.forEach((item, index) => {
        grid.collapse(item + index );
        score.add(10);
        speed-=50;
    })


    shape = generateNewShape(grid.cells);
    movement = new Movement(shape, grid.cells);
    clearInterval(intervalId);
    intervalId = setInterval(animate, speed);
}

let intervalId = setInterval(animate, speed);




