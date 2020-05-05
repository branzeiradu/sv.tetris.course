export class Cell {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.canvas = document.getElementById('canvasId');
        this.context = this.canvas.getContext("2d");
        this.width = Cell.SIZE;
        this.height = Cell.SIZE;
        this.isEmpty = true;
    }

    draw() {
        const {y, height, x,  width, color, context } = this;

        context.beginPath();
        context.fillStyle = color;
        context.rect( y * height, x * width, width, height);
        context.fill();
        context.closePath();
    }
    static SIZE = 30;
}