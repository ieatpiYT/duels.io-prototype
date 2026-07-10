/*
fist.js
*/

class Fist
{
    constructor(player, side)
    {
        this.player = player;

        this.side = side;

        this.radius = 7;
        this.color = "#f29756";
        
        this.distance = 23;

        this.punchDistance = 20;
        this.punching = false;
        this.punchProgress = 0;  

        this.x = player.x;
        this.y = player.y;
    }


    update()
    {
        // Camera position
        let camX = this.player.x - canvas.width / 2;
        let camY = this.player.y - canvas.height / 2;


        // Convert mouse screen coordinates into world coordinates
        let worldMouseX = mouse.x + camX;
        let worldMouseY = mouse.y + camY;


        // Find direction from player to mouse
        let angle = Math.atan2(worldMouseY - this.player.y, worldMouseX - this.player.x);

        // Seperate left and right fists
        let sideOffset;

        if (this.side === "left")
        {      
            sideOffset = -Math.PI / 5;
        }
        else
        {
            sideOffset = Math.PI / 5;
        }
        
        let punchAngle = angle;
        let restAngle = angle + sideOffset;

        let restX = this.player.x + Math.cos(restAngle) * this.distance;
        let restY = this.player.y + Math.sin(restAngle) * this.distance;

        this.x = restX;
        this.y = restY; 
        
        // Punch animation
        if (this.punching)
        {
            this.punchProgress += 0.1;

            const punchOffset = Math.sin(this.punchProgress * Math.PI) * this.punchDistance;

            // Move forward in the actual aim direction
            this.x += Math.cos(punchAngle) * punchOffset;
            this.y += Math.sin(punchAngle) * punchOffset;

            if (this.punchProgress >= 1)
            {
                this.punching = false;
                this.punchProgress = 0;
            }
        }
    }


    punch()
    {
        if (!this.punching)
        {
            this.punching = true;
            this.punchProgress = 0; 
        }
    }

    draw()
    {
        context.beginPath();

        context.fillStyle = this.color;
        context.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        context.fill();


        context.lineWidth = 2;
        context.strokeStyle = "#000000";
        context.stroke();
    }
}