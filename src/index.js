import FlyingObject from "./scripts/flying_objects";
import Duck from "./scripts/ducks";
import Crosshair from "./scripts/crosshair";
import Shot from "./scripts/shot";
import OtherBird from "./scripts/other_birds";
import Tree from "./scripts/trees"
import Game from "./scripts/game"

document.addEventListener("DOMContentLoaded", () => {

    const gameStart = document.getElementById("game-start")
    const gameStartButton = document.getElementById("game-start-button");
    gameStartButton.addEventListener("click", (event)=>{
        let difficulty = document.querySelector('input[name="difficulty"]:checked').value;
        gameStart.classList.add("hidden");
        let game = new Game(difficulty);
        game.run();
    })

    const gameLose = document.getElementById("game-lose");
    const gameStartButtonLoss = document.getElementById("game-start-button-loss");
    gameStartButtonLoss.addEventListener("click", (event)=>{
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Duck.ducks = [];
        OtherBird.otherBirds = [];
        let difficulty = document.querySelector('input[name="difficulty"]:checked').value;
        gameLose.classList.add("hidden");
        let game = new Game(difficulty);
        game.run();
    })

    const gameOver = document.getElementById("game-over");
    const gameStartButtonWin = document.getElementById("game-start-button-win");
    gameStartButtonWin.addEventListener("click", (event)=>{
        let difficulty = document.querySelector('input[name="difficulty"]:checked').value;
        gameOver.classList.add("hidden");
        let game = new Game(difficulty);
        game.run();
    })

});