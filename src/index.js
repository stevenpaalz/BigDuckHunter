import Game from "./scripts/game";
import {toggleMute} from "./scripts/audio_player";

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const gameInitializer = document.getElementById("game-initializer");
    const newGame = document.getElementById("new-game");
    const wonGame = document.getElementById("won-game");
    const lostGame = document.getElementById("lost-game");
    const gameStartButton = document.getElementById("game-start-button");
    gameStartButton.addEventListener("click", (event)=>{
        let difficulty = document.querySelector('input[name="difficulty"]:checked').value;
        gameInitializer.classList.add("hidden");
        newGame.classList.add('hidden');
        wonGame.classList.add('hidden');
        lostGame.classList.add('hidden');
        window.game = new Game(difficulty);
        game.run();
    })

    const sound = document.getElementById('sound');
    sound.addEventListener("click", toggleMute);

});