import {getRndInteger, getVelHor, getVelVert} from "./helpers";

class FlyingObject {
    constructor(difficulty) {
        this.width = 90;
        this.height = 60;
        this.sx = getRndInteger(0, 2) * 450;
        this.sy = getRndInteger(0, 2) * 300;
        this.sWidth = 450;
        this.sHeight = 300;
        this.x = getRndInteger(0, canvas.width);
        this.y = getRndInteger(0, canvas.height);
        this.dx = getVelHor(difficulty);
        this.dy = getVelVert(difficulty);
        this.hitbox = {
            x: this.x + (this.width / 6),
            y: this.y + (this.height / 6),
            width: this.width - (this.width / 3),
            height: this.height - (this.height / 3)
        }
        this.img = new Image();
    }

    static allFlyingObjects = [];
    static frames = 0;

    draw() {
        const ctx = canvas.getContext("2d");
        if (this.dx > 0) {this.img.src = this.regImgSrc}
        else {this.img.src = this.reverseImgSrc}
        ctx.drawImage(this.img, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height);
        
        // ctx.fillRect(this.hitbox.x, this.hitbox.y, this.hitbox.width, this.hitbox.height);
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
        this.hitbox.x = this.x + (this.width / 6);
        this.hitbox.y = this.y + (this.height / 6);
        if (FlyingObject.frames % 7 === 0) {this.updateFlaps();}
        if (getRndInteger(0,100) === 0) {this.switchDirection();}
        this.draw();
    }

    updateFlaps() {
        if (this.sy === 600 && this.sx === 450) {
            this.sx = 0;
            this.sy = 0;
        } 
        else {
            if (this.sx > 450) {
                this.sx = 0;
                this.sy += 300;
            } else { this.sx += 450;}
        }
    }

    switchDirection() {
        this.dx = getVelHor("easy");
        this.dy = getVelVert("easy");
    }
}

export default FlyingObject;