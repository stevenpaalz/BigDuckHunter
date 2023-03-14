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
        this.leftPressed = false;
        this.rightPressed = false;
        this.upPressed = false;
        this.downPressed = false;
    }

    animate() {
        if (this.time < 0) {
            if (!this.gameLost) {
                return this.gameOver();
            } else {return;}
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
        this.ticker = setInterval(this.tick.bind(this), 1000);
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.crosshair = new Crosshair(this);
        const difficultyDisplay = document.getElementById("difficulty-display");
        difficultyDisplay.innerText = this.difficulty;
        this.ducks = Duck.generateDucks(this.difficulty, this);
        this.otherBirds = OtherBird.generateOtherBirds(this.difficulty, this);
        this.trees = Tree.generateTrees();
        document.addEventListener("keydown", this.keyDownHandler);
        document.addEventListener("keyup", this.keyUpHandler);
        this.animate();
    }

    tick() {
        const timeDisplay = document.getElementById("time-display")
        if (this.time > 0) {
            timeDisplay.innerText = this.time.toLocaleString('en-US', {
                minimumIntegerDigits: 2
            });
        } else {
            timeDisplay.innerText = (0).toLocaleString('en-US', {
                minimumIntegerDigits: 2
            });
        }
        if (this.time >= 0) {
            this.time -= 1;
        } else {
            clearInterval(this.ticker);
        }
    }

    loseGame() {
        this.time = 0;
        const gameLose = document.getElementById("game-lose");
        gameLose.classList.remove("hidden");
    }

    changeGameLost() {
        this.gameLost = true;
    }

    gameOver() {
        const gameOver = document.getElementById("game-over");
        const finalScoreMessage = document.getElementById("final-score-message");
        finalScoreMessage.innerText = `Final Score: ${this.score}`;
        gameOver.classList.remove("hidden");
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

    keyDownHandler(event) {
        if ([37, 38, 39, 40, 32, 65, 68, 83, 87].includes(event.keyCode)) {event.preventDefault();}
        switch (event.keyCode) {
            case 37:
                game.leftPressed = true;
                break;
            case 65:
                game.leftPressed = true;
                break;
            case 39:
                game.rightPressed = true;
                break;
            case 68:
                game.rightPressed = true;
                break;     
            case 38:
                game.upPressed = true;
                break;
            case 87:
                game.upPressed = true;
                break;
            case 40:
                game.downPressed = true;
                break;
            case 83:
                game.downPressed = true;
                break;
            case 32:
                game.fireShot();
                break;
        }
    }

    keyUpHandler(event) {
        event.preventDefault();
        switch (event.keyCode) {
            case 37:
                game.leftPressed = false;
                break;
            case 65:
                game.leftPressed = false;
                break;
            case 39:
                game.rightPressed = false;
                break;
            case 68:
                game.rightPressed = false;
                break; 
            case 38:
                game.upPressed = false;
                break;
            case 87:
                game.upPressed = false;
                break;
            case 40:
                game.downPressed = false;
                break;
            case 83:
                game.downPressed = false;
                break;
        }
    }

    fireShot() {
        let shot = new Shot(this.crosshair.x, this.crosshair.y, this.crosshair.width, this.crosshair.height, this);
        shot.fire();
    }
}

export default Game;