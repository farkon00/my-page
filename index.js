"use strict";
let FPS = 3;
let gridWidth = 6;
var canvas;
var ctx;
var canvasSize;
var cellSize;
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
    if (!cell.filled) {
        return;
    }
    ctx.fillStyle = colors[cell.color - 1];
    ctx.fillRect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize);
}
function runAnimationLoop() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasSize, canvasSize);
    drawGrid();
    drawBlock({ x: 1, y: 1, color: 1, filled: true });
    drawBlock({ x: 1, y: 2, color: 2, filled: true });
    drawBlock({ x: 2, y: 1, color: 3, filled: true });
    drawBlock({ x: 2, y: 2, color: 4, filled: true });
    drawBlock({ x: 3, y: 1, color: 5, filled: true });
    drawBlock({ x: 1, y: 3, color: 6, filled: true });
}
function updateCanvas() {
    canvas = document.getElementById("tetris-canvas");
    ctx = canvas.getContext("2d");
    canvasSize = canvas.width;
    cellSize = canvasSize / gridWidth;
}
updateCanvas();
setInterval(runAnimationLoop, 1000 / FPS);
