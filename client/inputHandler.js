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
    let dx = 0;
    let dy = 0;

    if (keys.w)
    {
        dy -= 1;
    }
    
    if (keys.a)
    {
        dx -= 1;
    }
    
    if (keys.s)
    {
        dy += 1;
    }
    
    if (keys.d)
    {
        dx += 1;
    }

    // Make diagonal movement not faster than straight movement using vector normalization
    let length = Math.sqrt(dx * dx + dy * dy);

    if (length > 0)
    {
        dx /= length;
        dy /= length;
    }

    player.x += dx * player.speed;
    player.y += dy * player.speed;

    // Clamping the player's position so they can't leave the map
    player.x = Math.max(player.radius, Math.min(player.x, MAP_WIDTH - player.radius));
    player.y = Math.max(player.radius, Math.min(player.y, MAP_HEIGHT - player.radius));
}

// Mouse click punching
window.addEventListener("mousedown", () =>
{
    // Randomly choose a fist to punch
    let fist = player.fists[Math.floor(Math.random() * player.fists.length)];

    fist.punch();
});