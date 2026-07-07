/*
inputHandler.js
*/

let keys = 
{
    w: false,
    a: false,
    s: false,
    d: false
}


window.addEventListener("keydown", (e) => {
    if (e.code === "KeyW" || e.code === "ArrowUp") {keys.w = true};
    if (e.code === "KeyA" || e.code === "ArrowLeft") {keys.a = true};
    if (e.code === "KeyS" || e.code === "ArrowDown") {keys.s = true};
    if (e.code === "KeyD" || e.code === "ArrowRight") {keys.d = true};
})

window.addEventListener("keyup", (e) => {
    if (e.code === "KeyW" || e.code === "ArrowUp") {keys.w = false};
    if (e.code === "KeyA" || e.code === "ArrowLeft") {keys.a = false};
    if (e.code === "KeyS" || e.code === "ArrowDown") {keys.s = false}
    if (e.code === "KeyD" || e.code === "ArrowRight") {keys.d = false};
})

function updatePlayer()
{
    if (keys.w)
    {
        player.y -= player.speed;
    }
    
    if (keys.a)
    {
        player.x -= player.speed;
    }
    
    if (keys.s)
    {
        player.y += player.speed;
    }
    
    if (keys.d)
    {
        player.x += player.speed;
    }

    // Clamping the player's position so they can't leave the map
    player.x = Math.max(player.radius, Math.min(player.x, MAP_WIDTH - player.radius));
    player.y = Math.max(player.radius, Math.min(player.y, MAP_HEIGHT - player.radius));
    
}