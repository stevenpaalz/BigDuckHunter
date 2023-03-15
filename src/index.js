import Game from "./scripts/game";
import TwoPlayerGame from "./scripts/twoplayer_game";
import {toggleMute} from "./scripts/audio_player";

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // const mode = "singlePlayer"

    const gameInitializer = document.getElementById("game-initializer");
    const newGame = document.getElementById("new-game");
    const wonGame = document.getElementById("won-game");
    const lostGame = document.getElementById("lost-game");
    const twoPlayerEndGame = document.getElementById("two-player-end-game");
    const gameStartButton = document.getElementById("game-start-button");
    const singleModeDisplay = document.getElementById("single-mode-display");
    const versusModeDisplay = document.getElementById("versus-mode-display");
    const turnInitializer = document.getElementById("turn-initializer");
    gameStartButton.addEventListener("click", (event)=>{
        let difficulty = document.querySelector('input[name="difficulty"]:checked').value;
        let mode = document.querySelector('input[name="mode"]:checked').value;
        gameInitializer.classList.add("hidden");
        newGame.classList.add('hidden');
        wonGame.classList.add('hidden');
        lostGame.classList.add('hidden');
        twoPlayerEndGame.classList.add('hidden');
        turnInitializer.classList.add("hidden");
        if (mode === "twoPlayer") {
            singleModeDisplay.classList.add('hidden');
            versusModeDisplay.classList.remove('hidden');
            window.game = new TwoPlayerGame(difficulty);
            game.twoPlayerRun();
        } else {
            versusModeDisplay.classList.add('hidden');
            singleModeDisplay.classList.remove('hidden');
            window.game = new Game(difficulty);
            game.run();
        }
        
    })

    const sound = document.getElementById('sound');
    sound.addEventListener("click", toggleMute);

});