import {getRndInteger, getVelHor, getVelVert} from "./helpers";

class FlyingObject {
    constructor(difficulty) {
        this.width = 60;
        this.height = 30;
        this.x = getRndInteger(0, canvas.width);
        this.y = getRndInteger(0, canvas.height);
        this.dx = getVelHor(difficulty);
        this.dy = getVelVert(difficulty);
    }
    
    draw() {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,this.width,this.height);
        if (this.x - this.width > canvas.width || this.x + (this.width*2) < 0) {
            this.dx = -this.dx
        }
        if (this.y - this.height > canvas.height || this.y + (this.height*2) < 0) {
            this.dy = -this.dy
        }
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

export default FlyingObject;