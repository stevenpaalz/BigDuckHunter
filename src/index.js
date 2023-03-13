import FlyingObject from "./scripts/flying_objects";
import Duck from "./scripts/ducks";
import Crosshair from "./scripts/crosshair";
import Shot from "./scripts/shot";
import OtherBird from "./scripts/other_birds";
import Tree from "./scripts/trees"
import Game from "./scripts/game"

document.addEventListener("DOMContentLoaded", () => {
    const difficulty = "medium"

    const game = new Game(difficulty);
    game.run();
    
});