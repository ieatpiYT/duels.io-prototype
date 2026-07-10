/*
mouse.js
*/

let mouse =
{
    x: 0,
    y: 0
};


window.addEventListener("mousemove", (e) =>
{
    // Mouse position relative to the browser window
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
