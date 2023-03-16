import Game from "./game"

class TwoPlayerGame extends Game {
    constructor(difficulty) {
        super(difficulty);
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.currentPlayer = 'playerOne';
    }

    twoPlayerRun() {
        this.toggleTurnInitializer();
        const playerOneTurnStart = document.getElementById("player-one-turn-start");
        const playerOneStartButton = document.getElementById("player-one-turn-start-button");
        const currentPlayerDisplay = document.getElementById("current-player-display");

        playerOneTurnStart.classList.toggle("hidden");
        currentPlayerDisplay.innerText = "Player One";
        let that = this;
        playerOneStartButton.addEventListener("click", (event)=>{
            playerOneTurnStart.classList.toggle("hidden");
            that.firstPlayerRun();
        }, {once: true})
    }

    firstPlayerRun() {
        this.toggleTurnInitializer();
        this.run();
    }

    secondPlayerRun() {
        this.toggleTurnInitializer();
        this.run();
    }

    toggleTurnInitializer() {
        const turnInitializer = document.getElementById("turn-initializer");
        turnInitializer.classList.toggle("hidden");
    }

    queueNextTurn() {
        const playerTwoTurnStart = document.getElementById("player-two-turn-start");
        const playerTwoStartButton = document.getElementById("player-two-turn-start-button");
        const currentPlayerDisplay = document.getElementById("current-player-display");
        const playerOneScoreDisplay = document.getElementById("player-one-score-display");
        const playerOneUpdate = document.getElementById("player-one-update");
        const timeDisplay = document.getElementById("time-display");
        const scoreDisplay = document.getElementById("score-display");
        const difficultyDisplay = document.getElementById("difficulty-display");
        currentPlayerDisplay.innerText = "Player Two";
        if (this.gameLost === true) {
            this.playerOneScore = 0;
            playerOneUpdate.innerText = "Oh no! Player One shot the wrong bird";
        }
        else {
            this.playerOneScore = this.score;
            playerOneUpdate.innerText = `Player One Score: ${this.playerOneScore}`;
        }
        playerOneScoreDisplay.innerText = `${this.playerOneScore}`
        this.resetGameAttributes();
        this.toggleTurnInitializer();
        timeDisplay.classList.add("orange");
        timeDisplay.classList.remove("red");
        scoreDisplay.classList.add("orange");
        scoreDisplay.classList.remove("red");
        difficultyDisplay.classList.add("orange");
        difficultyDisplay.classList.remove("red");
        playerTwoTurnStart.classList.toggle("hidden");
        playerTwoStartButton.addEventListener("click", (event)=>{
            playerTwoTurnStart.classList.toggle("hidden");
            this.secondPlayerRun();
        }, {once: true})
    }

    resetGameAttributes() {
        clearInterval(this.ticker);
        this.gameLost = false;
        this.ducks = [];
        this.score = 0;
        this.trees = [];
        this.otherBirds = []
        this.crosshair = {};
        this.time = 30;
        this.frames = 0;
        this.currentShots = [];
    }

    loseGame() {
        this.time = 0;

        if (this.currentPlayer === "playerOne") {
            this.playerOneScore = 0;
            const playerOneScoreDisplay = document.getElementById("player-one-score-display");
            playerOneScoreDisplay.innerText = `${this.playerOneScore}`
        } else {
            this.playerTwoScore = 0;
            const playerTwoScoreDisplay = document.getElementById("player-two-score-display");
            playerTwoScoreDisplay.innerText = `${this.playerTwoScore}`
        }
    }

    gameOver() {
        const twoPlayerWinMessage = document.getElementById("two-player-win-message");
        const twoPlayerFinalScore = document.getElementById("two-player-final-score");
        const twoPlayerEndGame= document.getElementById("two-player-end-game");
        const playerTwoScoreDisplay = document.getElementById("player-two-score-display");
        if (this.gameLost === true) {this.playerTwoScore = 0;}
        else {this.playerTwoScore = this.score;}
        playerTwoScoreDisplay.innerText = `${this.playerTwoScore}`;
        if (this.playerOneScore > this.playerTwoScore) {
            twoPlayerWinMessage.innerText = "Player One Wins!";
        }
        else if (this.playerTwoScore > this.playerOneScore) {
            twoPlayerWinMessage.innerText = "Player Two Wins!";
        }
        else {
            twoPlayerWinMessage.innerText = "It's a tie!";
        }
        twoPlayerFinalScore.innerText = `Player One Score: ${this.playerOneScore}   Player Two Score: ${this.playerTwoScore}`;
        const gameInitializer = document.getElementById("game-initializer");
        gameInitializer.classList.remove("hidden");
        twoPlayerEndGame.classList.remove("hidden");
    }
}

export default TwoPlayerGame;


// two player game flow
// select two player
// new screen appears "Two player mode" "ready to hunt player one?" "Start Game!"
// game screen the same but "Player 1" in top left corner
// other side of top bar says Player 1 Score: Player 2 Score: 
// game runs for player 1. At end of turn, score is saved to player 1 score and game score is reset to 0. Game now runs again.