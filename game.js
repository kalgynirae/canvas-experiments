var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var pirate = new Image();
pirate.src = 'pirate.png';

function draw_background() {
    border_width = 10;
    context.fillStyle = "rgb(114,159,207)";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "rgb(32, 74, 135)";
    context.fillRect(border_width, border_width, width - (border_width * 2),
                     height - (border_width * 2));
}

canvas.onmousemove = function(e) {
    var pos = relMouseCoords(e, canvas);
    draw_background();
    context.drawImage(pirate, pos.x - (pirate.width / 2),
                      pos.y - (pirate.height / 2));
}

draw_background();
