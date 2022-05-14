type Cell = {
    x : number,
    y : number,
    color : number
}

let FPS: number = 3;
let gridWidth: number = 6;

var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var canvasSize: number;
var cellSize: number;

let figures = [
    [
        [[0, 1], [1, 1], [2, 1], [3, 1]],
        [[2, 0], [2, 1], [2, 2], [2, 3]],
        [[0, 2], [1, 2], [2, 2], [3, 2]],
        [[1, 0], [1, 1], [1, 2], [1, 3]]
    ],
    [
        [[0, 0], [0, 1], [1, 1], [2, 1]],
        [[2, 0], [1, 0], [1, 1], [1, 2]],
        [[0, 1], [1, 1], [2, 1], [2, 2]],
        [[1, 0], [1, 1], [1, 2], [0, 2]]
    ],
    [
        [[0, 1], [1, 1], [2, 1], [2, 0]],
        [[1, 0], [1, 1], [1, 2], [2, 2]],
        [[0, 2], [0, 1], [1, 1], [2, 1]],
        [[0, 0], [1, 0], [1, 1], [1, 2]]
    ],
    [
        [[1, 0], [2, 0], [1, 1], [2, 1]]
    ],
    [
        [[0, 1], [1, 1], [1, 0], [2, 0]],
        [[1, 0], [1, 1], [2, 1], [2, 2]],
        [[0, 2], [1, 2], [1, 1], [2, 1]],
        [[0, 0], [0, 1], [1, 1], [1, 2]]
    ],
    [
        [[0, 1], [1, 1], [2, 1], [1, 0]],
        [[1, 0], [1, 1], [1, 2], [2, 1]],
        [[0, 1], [1, 1], [2, 1], [1, 2]],
        [[1, 0], [1, 1], [1, 2], [0, 1]]
    ],
    [
        [[0, 0], [1, 0], [1, 1], [2, 1]],
        [[2, 0], [2, 1], [1, 1], [1, 2]],
        [[0, 1], [1, 1], [1, 2], [2, 2]],
        [[1, 0], [1, 1], [0, 1], [0, 2]]
    ]
]

let colors: Array<string> = ["#00ffff", "blue", "orange", "yellow", "green", "purple", "red"];

function drawGrid(): void {
    for (let i=1;i<gridWidth;i++) {
        ctx.fillStyle = "gray";
        ctx.fillRect(i*cellSize, 0, 1, canvasSize);
        ctx.fillRect(0, i*cellSize, canvasSize, 1);
    }
}

function drawBlock(cell: Cell): void {
    ctx.fillStyle = colors[cell.color];
    ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
}

function runAnimationLoop(): void {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasSize, canvasSize);
    drawGrid();
    drawBlock({x : 1, y : 1, color : 1});
    drawBlock({x : 1, y : 2, color : 2});
    drawBlock({x : 2, y : 1, color : 3});
    drawBlock({x : 2, y : 2, color : 4});
    drawBlock({x : 3, y : 1, color : 5});
    drawBlock({x : 1, y : 3, color : 6});
}

function updateCanvas(): void {
    canvas = <HTMLCanvasElement>document.getElementById("tetris-canvas")
    ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
    canvasSize = canvas.width;
    cellSize = canvasSize / gridWidth;
}

updateCanvas();
setInterval(runAnimationLoop, 1000 / FPS);