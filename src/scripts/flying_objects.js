import {getRndInteger, getVelHor, getVelVert} from "./helpers";

class FlyingObject {
    constructor(difficulty) {
        this.width = 45;
        this.height = 40;
        this.x = getRndInteger(0, canvas.width);
        this.y = getRndInteger(0, canvas.height);
        this.dx = getVelHor(difficulty);
        this.dy = getVelVert(difficulty);
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

export default FlyingObject;