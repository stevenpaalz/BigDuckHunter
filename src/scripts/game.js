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
        this.gameLost = false;
        this.crosshair = new Crosshair(this);
    }

    animate() {
        if (this.time <= 0) {
            if (!this.gameLost) {
                this.gameOver();
            }
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
        const difficultyDisplay = document.getElementById("difficulty-display")
        difficultyDisplay.innerText = this.difficulty;
        Duck.generateDucks(this.difficulty, this);
        OtherBird.generateOtherBirds(this.difficulty, this);
        Tree.generateTrees();
        document.addEventListener("keydown", this.crosshair.keyDownHandler.bind(this.crosshair));
        document.addEventListener("keyup", this.crosshair.keyUpHandler.bind(this.crosshair));
        this.ticker = setInterval(this.tick.bind(this), 1000)
        this.animate();
    }

    tick() {
        const timeDisplay = document.getElementById("time-display")
        timeDisplay.innerText = this.time.toLocaleString('en-US', {
            minimumIntegerDigits: 2
          });
        if (this.time > 0) {
            this.time -= 1;
        } else {
            clearInterval(this.ticker);
            // console.log("timer ended")
        }
    }

    loseGame() {
        this.gameLost = true;
        this.time = 0;
        const gameLose = document.getElementById("game-lose")
        gameLose.classList.remove("hidden");
        console.log('you lose!');
    }

    gameOver() {
        const gameOver = document.getElementById("game-over")
        gameOver.classList.remove("hidden");
        console.log("game over");
    }

    scorePoint() {
        this.score += 1;
    }
}

export default Game;