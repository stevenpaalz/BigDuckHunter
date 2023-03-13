import Duck from "./ducks";
import { detectCollision } from "./helpers";

class Shot {
    constructor(x, y, width, height, game) {
        this.x = x,
        this.y = y;
        this.width = width;
        this.height = height;
        this.game = game;
        this.framesRemaining = 0;
        this.shotImg = new Image();
        this.shotImg.src = "../BigDuckHunter/assets/explosion.png";
        this.hitbox = {
            x: this.x + 25,
            y: this.y + 25,
            radius: 18,
            sAngle: 0,
            eAngle: (2 * Math.PI)
        }
    }

    static currentShots = [];

    fire() {
        this.framesRemaining = 20;
        Shot.currentShots.push(this);
        this.duckCollisions();
    }

    duckCollisions() {
        let refreshedDucks = [];
        for (let i = 0; i < Duck.ducks.length; i++) {
            if (detectCollision(this.hitbox, Duck.ducks[i].hitbox)) {
                Duck.deadDucks.push(Duck.ducks[i]);
                this.game.scorePoint();
                console.log(this.game);
                // refreshedDucks.push(Duck.respawn(difficulty))
            } else {refreshedDucks.push(Duck.ducks[i])}
        }
        Duck.ducks = refreshedDucks;
    }

    static drawShots() {
        const ctx = canvas.getContext("2d");
        this.currentShots.forEach((shot) => {
            shot.framesRemaining -= 1;
            if (shot.framesRemaining < 1) {
                this.currentShots.shift();
            } else {
                ctx.globalAlpha = shot.framesRemaining / 20
                ctx.drawImage(shot.shotImg, shot.x, shot.y, shot.width, shot.height);
                ctx.globalAlpha = 1;
            }
        })
    }

}

export default Shot;