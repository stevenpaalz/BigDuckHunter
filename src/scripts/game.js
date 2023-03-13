import FlyingObject from "./flying_objects";
import Duck from "./ducks";
import Shot from "./shot";
import OtherBird from "./other_birds";
import Tree from "./trees"
import Crosshair from "./crosshair";

class Game {
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.time = 30;
        this.score = 0;
        this.ducks = [];
        this.otherBirds = [];
        this.trees = [];
        this.gameLost = false;
        this.crosshair = {};
        this.frames = 0;
        this.currentShots = [];
    }

    animate() {
        if (this.time <= 0) {
            if (!this.gameLost) {
                return this.gameOver();
            }
            return;
        }
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.frames += 1;
        for (let i = 0; i < this.ducks.length; i++) {
            this.ducks[i].update();
        }
        for (let i = 0; i < this.otherBirds.length; i++) {
            this.otherBirds[i].update();
        }
        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].draw();
        }
        this.crosshair.move();
        this.drawShots();
        const scoreDisplay = document.getElementById("score-display");
        scoreDisplay.innerText = this.score.toLocaleString('en-US', {
            minimumIntegerDigits: 2
          });
        requestAnimationFrame(this.animate.bind(this));
    }

    run() {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.crosshair = new Crosshair(this);
        console.log(this.crosshair);
        const difficultyDisplay = document.getElementById("difficulty-display");
        difficultyDisplay.innerText = this.difficulty;
        this.ducks = Duck.generateDucks(this.difficulty, this);
        this.otherBirds = OtherBird.generateOtherBirds(this.difficulty, this);
        this.trees = Tree.generateTrees();
        document.addEventListener("keydown", this.crosshair.keyDownHandler.bind(this.crosshair));
        document.addEventListener("keyup", this.crosshair.keyUpHandler.bind(this.crosshair));
        this.ticker = setInterval(this.tick.bind(this), 1000);
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
        }
    }

    loseGame() {
        this.gameLost = true;
        this.time = 0;
        const gameLose = document.getElementById("game-lose")
        gameLose.classList.remove("hidden");
        console.log('you lose!');
        console.log(this.crosshair);
    }

    gameOver() {
        const gameOver = document.getElementById("game-over")
        gameOver.classList.remove("hidden");
        console.log("game over");
    }

    scorePoint() {
        this.score += 1;
    }

    drawShots() {
        const ctx = canvas.getContext("2d");
        this.currentShots.forEach((shot) => {
            shot.framesRemaining -= 1;
            if (shot.framesRemaining < 1) {
                this.currentShots.shift();
            } else {
                ctx.globalAlpha = shot.framesRemaining / 20;
                ctx.drawImage(shot.shotImg, shot.x, shot.y, shot.width, shot.height);
                ctx.globalAlpha = 1;
            }
        })
    }
}

export default Game;