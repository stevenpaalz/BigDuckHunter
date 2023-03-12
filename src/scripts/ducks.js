import FlyingObject from "./flying_objects";

class Duck extends FlyingObject {
    constructor(difficulty) {
        super(difficulty);
        this.regImgSrc = "../BigDuckHunter/assets/ducks.png";
        this.reverseImgSrc = "../BigDuckHunter/assets/ducks_reverse.png";
    }

    static ducks = [];
    static deadDucks = [];

    static generateDucks(difficulty) {
        let numDucks = 12;
        switch(difficulty) {
            case "medium":
                numDucks = 8;
                break;
            case "hard":
                numDucks = 4;
                break;
        }
        for (let i = 0; i < numDucks; i ++) {
            this.ducks.push(new Duck(difficulty))
        }
    }

    // static respawnDuck(difficulty) {

    // }
}

export default Duck;