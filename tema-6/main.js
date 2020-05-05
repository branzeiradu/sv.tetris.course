import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { ShapeGenerator, getRandomInt } from './shapes/utils/shape-generator.js';
import { NextShape } from './shapes/utils/next-shape.js';

const rows = 20;
const columns = 10;
let tetrisScore = 0;


const startBtn = document.getElementById('startGame');
const scoreLabel = document.getElementById('score');
const nextShapeLabel = document.getElementById('nextShapeLabel');
const linesLabel = document.getElementById('linesCount');
const title = document.getElementById("title");

const nextShape = new NextShape(nextShapeLabel);
let grid = new Grid(rows, columns);
grid.create();
grid.draw();
let generator = new ShapeGenerator(grid.cells);
let intervalId;

const gameOverCallback = () => {
    startBtn.disabled = false;
    clearInterval(intervalId);
    alert("Game over!");
    document.removeEventListener("keydown", keyListener);
}



let shape = generator.newShape();
let movement = new Movement(shape, grid.cells, gameOverCallback);

const newGame = () => {
    startBtn.disabled = true;
    grid = new Grid(rows, columns);
    grid.create();
    grid.draw();
    generator = new ShapeGenerator(grid.cells);
    intervalId = setInterval(animate, 500);
    scoreLabel.innerText = 0;
    linesLabel.innerText = grid.linesCount;
    document.addEventListener("keydown", keyListener);
}
const startListener = () => {
    console.log("new game !")
    newGame();
    //shape = generateNewShape(grid.cells);
    const {cells} = grid;
    shape = generator.newShape(cells);
    const {color} =shape;
    nextShape.drawNext(generator.next);
    //document.body.style.background = `radial-gradient(${shape.color}, transparent)`;
    title.style.color = color;
    title.style.borderColor = color;

    movement = new Movement(shape, cells, gameOverCallback);
}
startBtn.addEventListener('click', startListener);

const keyListener = () => {
    const {key}= event;
    switch (key) {
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
            const {length} = colors
            console.log(getRandomInt( length - 1));
            shape.color = colors[getRandomInt( length - 1)];
            shape.draw();
            break;
    }

}



const animate = () => {
    const {canMove} = movement;
    if (canMove) {
        movement.down();
        console.log('Moving');
    } else {
        console.log('Stopped');
        //clearInterval(intervalId);

        //Score
        let score = grid.score();
        if (score > 0) {
            tetrisScore += score;
            scoreLabel.innerText = tetrisScore;
            linesLabel.innerText = grid.linesCount;
            grid.draw();
        }

        const {cells} = grid;
        //shape = generateNewShape(grid.cells);
        shape = generator.newShape(cells);
        
        const {color} =shape;
        nextShape.drawNext(generator.next);
        //document.body.style.background = `radial-gradient(${shape.color}, transparent)`;
        title.style.color = color;
        title.style.borderColor = color;
        movement = new Movement(shape, cells, gameOverCallback);

    }
}




