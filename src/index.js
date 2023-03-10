import FlyingObject from "./scripts/flying_object";
// import {getRndInteger} from "./scripts/helpers";


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const difficulty = "hard"
    const flyingObjectsArray = []
    for (let i = 0; i < 30; i++) {
        flyingObjectsArray.push(new FlyingObject(difficulty));
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < flyingObjectsArray.length; i++) {
            flyingObjectsArray[i].update();
        }
    }
    animate();
});