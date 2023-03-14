import FlyingObject from "./flying_objects";
import { getRndInteger } from "./helpers";

class Duck extends FlyingObject {
    constructor(difficulty, game) {
        super(difficulty, game);
        this.regImgSrc = "../BigDuckHunter/assets/ducks.png";
        this.reverseImgSrc = "../BigDuckHunter/assets/ducks_reverse.png";
    }

    static generateDucks(difficulty, game) {
        let ducks = []
        let numDucks = 12;
        switch(difficulty) {
            case "Medium":
                numDucks = 8;
                break;
            case "Hard":
                numDucks = 4;
                break;
        }
        for (let i = 0; i < numDucks; i ++) {
            ducks.push(new Duck(difficulty, game))
        }
        return ducks;
    }

    static respawn(difficulty, game) {
        let newDuck = new Duck(difficulty, game);
        let i = getRndInteger(0, 2)
        if (i===0) {newDuck.x = (-newDuck.width/2)}
        else {newDuck.x = canvas.width}
        return newDuck;
    }
}

export default Duck;