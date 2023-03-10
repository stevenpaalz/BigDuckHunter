import FlyingObject from "./scripts/flying_objects";
import Duck from "./scripts/ducks";
import Crosshair from "./scripts/crosshair";
import Shot from "./scripts/shot";
import Hawk from "./scripts/hawks";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const difficulty = "medium"
    const crosshair = new Crosshair();
    Duck.generateDucks(difficulty);
    Hawk.generateHawks(difficulty);

    document.addEventListener("keydown", crosshair.keyDownHandler.bind(crosshair));
    document.addEventListener("keyup", crosshair.keyUpHandler.bind(crosshair));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // FlyingObject.allFlyingObjects.concat(Duck.ducks, Hawk.hawks);
        for (let i = 0; i < Duck.ducks.length; i++) {
            Duck.ducks[i].update();
        }
        for (let i = 0; i < Hawk.hawks.length; i++) {
            Hawk.hawks[i].update();
        }
        crosshair.move();
        Shot.drawShots();
        requestAnimationFrame(animate);
    }
    animate();
});