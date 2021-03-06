"use strict";
let FPS = 3;
let newShapeWait = 5;
let gridWidth = 6;
var canvas;
var ctx;
var canvasSize;
var cellSize;
var currentBlocks = [];
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
];
let colors = ["#00ffff", "blue", "orange", "yellow", "green", "purple", "red"];
function drawGrid() {
    for (let i = 1; i < gridWidth; i++) {
        ctx.fillStyle = "gray";
        ctx.fillRect(i * cellSize, 0, 1, canvasSize);
        ctx.fillRect(0, i * cellSize, canvasSize, 1);
    }
}
function drawBlock(cell) {
    ctx.fillStyle = colors[cell.color];
    ctx.fillRect(cell.x * cellSize, (cell.y - 4) * cellSize, cellSize, cellSize);
}
function newShape() {
    let shape = Math.floor(Math.random() * figures.length);
    let figure = figures[shape][Math.floor(Math.random() * figures[shape].length)];
    for (let i = 0; i < figure.length; i++) {
        currentBlocks.push({
            x: figure[i][0] + 1,
            y: figure[i][1],
            color: shape
        });
    }
}
function runAnimationLoop() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasSize, canvasSize);
    drawGrid();
    for (let i = 0; i < currentBlocks.length; i++) {
        if (currentBlocks[i].y > 3)
            drawBlock(currentBlocks[i]);
        currentBlocks[i].y++;
        if (currentBlocks[i].y > 9) {
            currentBlocks.splice(i, 1);
            i--;
        }
    }
}
function updateCanvas() {
    canvas = document.getElementById("tetris-canvas");
    ctx = canvas.getContext("2d");
    canvasSize = canvas.width;
    cellSize = canvasSize / gridWidth;
}
updateCanvas();
setInterval(runAnimationLoop, 1000 / FPS);
newShape();
setInterval(newShape, 1000 / FPS * newShapeWait);
