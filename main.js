/*
main.js
*/

let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

// Resive canvas to fill entire webpage
function resizeCanvas()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let player = 
{
    x: MAP_WIDTH / 2,
    y: MAP_HEIGHT / 2,
    speed: 3,
    radius: 20,
    color: 'brown',

    draw()
    {
        context.fillStyle = this.color;
        context.lineWidth = 2
        context.strokeStyle = "#000000"
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        context.fill();
        context.stroke();
    }
}

function draw()
{
    updatePlayer();

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    let camX = player.x - canvas.width/ 2;
    let camY = player.y - canvas.height/ 2;
    
    context.save();
    context.translate(-camX, -camY); // Shift coordinate system to offset movement
    
    drawGrid(camX, camY);
    drawBorders();
    
    player.draw();
    drawBushes();
    
    context.restore();

    window.requestAnimationFrame(draw);
}

draw()