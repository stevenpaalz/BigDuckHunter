import Crosshair from "./crosshair";
import FlyingObject from "./flying_objects";
import Duck from "./ducks";
import Shot from "./shot";
import OtherBird from "./other_birds";
import Tree from "./trees"

class Game {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.time = 30;
        this.score = 0;
        this.crosshair = new Crosshair(this);
    }

    animate() {
        if (this.time <= 0) {
            this.gameOver();
            return;
        }
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        FlyingObject.frames += 1;
        for (let i = 0; i < Duck.ducks.length; i++) {
            Duck.ducks[i].update();
        }
        for (let i = 0; i < OtherBird.otherBirds.length; i++) {
            OtherBird.otherBirds[i].update();
        }
        for (let i = 0; i < Tree.trees.length; i++) {
            Tree.trees[i].draw();
        }
        this.crosshair.move();
        Shot.drawShots();
        const scoreDisplay = document.getElementById("score-display");
        scoreDisplay.innerText = this.score.toLocaleString('en-US', {
            minimumIntegerDigits: 2
          });
        requestAnimationFrame(this.animate.bind(this));
    }

    run() {
        Duck.generateDucks(this.difficulty);
        OtherBird.generateOtherBirds(this.difficulty);
        Tree.generateTrees();
        document.addEventListener("keydown", this.crosshair.keyDownHandler.bind(this.crosshair));
        document.addEventListener("keyup", this.crosshair.keyUpHandler.bind(this.crosshair));
        const canvas = document.getElementById("canvas");
        this.ticker = setInterval(this.tick.bind(this), 1000)
        this.animate();
    }

    tick() {
        this.time -= 1;
        const timeDisplay = document.getElementById("time-display")
        timeDisplay.innerText = this.time.toLocaleString('en-US', {
            minimumIntegerDigits: 2
          });
        if (this.time <= 0) {
            clearInterval(this.ticker);
            // console.log("timer ended")
        }
    }

    gameOver() {
        console.log("game over");
    }

    scorePoint() {
        this.score += 1;
    }
}

export default Game;