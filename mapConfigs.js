/*
mapConfigs.js
*/

// Map configs
const MAP_WIDTH = 2000;
const MAP_HEIGHT = 2000;
const GRID_SIZE = 50;

function drawGrid(camX, camY)
{
    context.strokeStyle = "#5c5454";
    context.lineWidth = 0.5;

    let startX = Math.floor(camX / GRID_SIZE) * GRID_SIZE;
    let endX = startX + canvas.width + GRID_SIZE;
    let startY = Math.floor(camY / GRID_SIZE) * GRID_SIZE;
    let endY = startY + canvas.width + GRID_SIZE;

    startX = Math.max(0, startX);
    endX = Math.min(MAP_WIDTH, endX);
    startY = Math.max(0, startY);
    endY = Math.min(MAP_HEIGHT, endY);

    // Vertical gridlines
    for (let x = startX; x <= endX; x += GRID_SIZE)
    {
        context.beginPath();
        context.moveTo(x, startY);
        context.lineTo(x, endY);
        context.stroke();
    }

    // Horizontal gridlines
    for (let y = startY; y <= endY; y += GRID_SIZE)
    {
        context.beginPath();
        context.moveTo(startX, y);
        context.lineTo(endX, y);
        context.stroke();
    }
}

function drawBorders()
{
    context.strokeStyle = "#5c5454";
    context.lineWidth = 10;
    context.strokeRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
}

let bushes = [];

function createBushes(numBushes)
{
    for (let i = 0; i < numBushes; i++)
    {
        bushes.push
        ({
        
            x: Math.random() * (MAP_WIDTH - 80) + 40,
            y: Math.random() * (MAP_HEIGHT - 80) + 40,
            radius: 40,
            color: Math.random() > 0.5 ? 'rgb(0, 100, 0, 0.7)' : 'rgb(39, 85, 3, 0.7)',

            draw()
            {
                context.beginPath();
                context.fillStyle = this.color;
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                context.fill();
            }
        })
    }
}

createBushes(100);

function drawBushes()
{
    for (let bush of bushes)
    {
        bush.draw();
    }
}