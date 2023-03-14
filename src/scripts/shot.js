import Duck from "./ducks";
import { detectCollision } from "./helpers";
import OtherBird from "./other_birds";

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


    fire() {
        this.framesRemaining = 20;
        const sound = document.getElementById('sound');
        if (sound.dataset.muted === "false") {
            const gunSound = new Audio();
            gunSound.src = "../BigDuckHunter/assets/gun_shot.mp3";
            gunSound.play();
        }
        this.game.currentShots.push(this);
        this.otherBirdCollisions();
        if (!this.game.gameLost) {
            this.duckCollisions();
        }
    }

    duckCollisions() {
        let refreshedDucks = [];
        for (let i = 0; i < this.game.ducks.length; i++) {
            if (detectCollision(this.hitbox, this.game.ducks[i].hitbox)) {
                const sound = document.getElementById('sound');
                if (sound.dataset.muted === "false") {
                    const duckSound = new Audio();
                    duckSound.src = "../BigDuckHunter/assets/duck_quack.mp3";
                    duckSound.play();
                }
                this.game.scorePoint();
                refreshedDucks.push(Duck.respawn(this.game.difficulty, this.game))
            } else {refreshedDucks.push(this.game.ducks[i])}
        }
        this.game.ducks = refreshedDucks;
    }

    otherBirdCollisions() {
        for (let i = 0; i < this.game.otherBirds.length; i++) {
            if (detectCollision(this.hitbox, this.game.otherBirds[i].hitbox)) {
                this.game.changeGameLost();
                return this.game.loseGame();
            }
        }
    }
}

export default Shot;