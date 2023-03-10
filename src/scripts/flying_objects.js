import {getRndInteger, getVelHor, getVelVert} from "./helpers";

class FlyingObject {
    constructor(difficulty) {
        this.width = 90;
        this.height = 80;
        this.x = getRndInteger(0, canvas.width);
        this.y = getRndInteger(0, canvas.height);
        this.dx = getVelHor(difficulty);
        this.dy = getVelVert(difficulty);
        this.hitbox = {
            x: this.x + (this.width/10),
            y: this.y + (this.height/10),
            width: this.width - (this.width/4),
            height: this.height - (this.height/4)
        }
    }

    static allFlyingObjects = [];

    draw() {
        const ctx = canvas.getContext("2d");
        // ctx.fillRect(this.hitbox.x, this.hitbox.y, this.hitbox.width, this.hitbox.height);
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
        this.hitbox.x = this.x + (this.width/10);
        this.hitbox.y = this.y + (this.height/10);
        this.draw();
    }
}

export default FlyingObject;