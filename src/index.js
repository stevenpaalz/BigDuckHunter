import FlyingObject from "./scripts/flying_objects";
import Duck from "./scripts/ducks";
import Crosshair from "./scripts/crosshair";
import Shot from "./scripts/shot";
import OtherBird from "./scripts/other_birds";
import Tree from "./scripts/trees"

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const difficulty = "easy"
    const crosshair = new Crosshair();
    Duck.generateDucks(difficulty);
    OtherBird.generateOtherBirds(difficulty);
    Tree.generateTrees();
    console.log(OtherBird.otherBirds)

    document.addEventListener("keydown", crosshair.keyDownHandler.bind(crosshair));
    document.addEventListener("keyup", crosshair.keyUpHandler.bind(crosshair));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        FlyingObject.frames += 1;
        // FlyingObject.allFlyingObjects.concat(Duck.ducks, Hawk.hawks);
        for (let i = 0; i < Duck.ducks.length; i++) {
            Duck.ducks[i].update();
        }
        for (let i = 0; i < OtherBird.otherBirds.length; i++) {
            OtherBird.otherBirds[i].update();
        }
        for (let i = 0; i < Tree.trees.length; i++) {
            Tree.trees[i].draw();
        }
        crosshair.move();
        Shot.drawShots();
        requestAnimationFrame(animate);
    }
    animate();
});