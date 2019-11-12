let root = document.getElementById('root');

function paintCanvas() {
    const canvas = document.createElement('canvas');

    canvas.id = "canvas";
    canvas.width = 1280;
    canvas.height = 720;
    canvas.style.zIndex = 1;
    canvas.style.border = "1px solid red";

    root.appendChild(canvas);
}
paintCanvas();

function getRange() {
    const input = document.createElement('input');

    input.id = "range";
    input.type = "range";
    input.value = 1;
    input.min = 1;
    input.max = 100;

    root.appendChild(input);
}
getRange();

function getColor() {
    const input = document.createElement('input');

    input.id = "color";
    input.type = "color";
    input.value = "#000";

    root.appendChild(input);
}
getColor();

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let lineColor = document.getElementById('color');
let lineWidth = document.getElementById('range');
let isMouseDown = false;

canvas.onmousedown = function (e) {
    let x = e.offsetX;
    let y = e.offsetY;
    
    ctx.moveTo(x, y);
    ctx.beginPath();
    ctx.strokeStyle = lineColor.value;
    ctx.lineWidth = lineWidth.value;
    isMouseDown = true;
}

canvas.onmousemove = function (e) {
    if (isMouseDown) {
        let x = e.offsetX;
        let y = e.offsetY;
        
        ctx.lineTo(x, y, 0); 
        ctx.stroke();
    }
}

canvas.onmouseup = function () {
    isMouseDown = false;
}