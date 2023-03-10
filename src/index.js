import FlyingObject from "./scripts/flying_objects";
import Duck from "./scripts/ducks";
import Crosshair from "./scripts/crosshair";
import { keyDownHandler, keyUpHandler } from "./scripts/movement";
// import {getRndInteger} from "./scripts/helpers";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const difficulty = "medium"
    const ducksArray = []
    const crosshair = new Crosshair();
    for (let i = 0; i < 20; i++) {
        ducksArray.push(new Duck(difficulty));
    }

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < ducksArray.length; i++) {
            ducksArray[i].update();
        }
        crosshair.draw();
    }
    animate();
});