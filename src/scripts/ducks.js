import FlyingObject from "./flying_objects";

class Duck extends FlyingObject {
    constructor(difficulty, game) {
        super(difficulty, game);
        this.regImgSrc = "../BigDuckHunter/assets/ducks.png";
        this.reverseImgSrc = "../BigDuckHunter/assets/ducks_reverse.png";
    }

    // static ducks = [];
    // static deadDucks = [];

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
        return new Duck(difficulty, game);
    }
}

export default Duck;