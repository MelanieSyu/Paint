function paintCanvas() {
    const canvas = document.createElement('canvas');

    canvas.id = "canvas";
    canvas.width = 1280;
    canvas.height = 720;
    canvas.style.zIndex = 1;
    canvas.style.border = "1px solid red";

    let div = document.getElementsByTagName('div')[0];
    div.appendChild(canvas);
}
paintCanvas();

function getRange() {
    const input = document.createElement('input');

    input.id = "range";
    input.type = "range";
    input.min = 0;
    input.max = 100;
    
    let div = document.getElementsByTagName('div')[0];
    div.appendChild(input);
}
getRange();

function getColor() {
    const input = document.createElement('input');

    input.id = "color";
    input.type = "color";
    
    let div = document.getElementsByTagName('div')[0];
    div.appendChild(input);
}
getColor();