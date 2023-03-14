// import FlyingObject from "./scripts/flying_objects";
// import Duck from "./scripts/ducks";
// import Crosshair from "./scripts/crosshair";
// import Shot from "./scripts/shot";
// import OtherBird from "./scripts/other_birds";
// import Tree from "./scripts/trees"
import Game from "./scripts/game"

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const gameStart = document.getElementById("game-start")
    const gameStartButton = document.getElementById("game-start-button");
    gameStartButton.addEventListener("click", (event)=>{
        let difficulty = document.querySelector('input[name="difficulty"]:checked').value;
        gameStart.classList.add("hidden");
        window.game = new Game(difficulty);
        game.run();
    })

    const gameLose = document.getElementById("game-lose");
    const gameStartButtonLoss = document.getElementById("game-start-button-loss");
    gameStartButtonLoss.addEventListener("click", (event)=>{
        let difficulty = document.querySelector('input[name="difficulty-lost"]:checked').value;
        gameLose.classList.add("hidden");
        window.game = new Game(difficulty);
        game.run();
    })

    const gameOver = document.getElementById("game-over");
    const gameStartButtonWin = document.getElementById("game-start-button-win");
    gameStartButtonWin.addEventListener("click", (event)=>{
        let difficulty = document.querySelector('input[name="difficulty-win"]:checked').value;
        gameOver.classList.add("hidden");
        window.game = new Game(difficulty);
        game.run();
    })

});