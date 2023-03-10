import FlyingObject from "./flying_objects";

class Duck extends FlyingObject {
    constructor(difficulty) {
        super(difficulty);
        this.img = new Image();
        this.img.src = "../BigDuckHunter/assets/kisspng-mallard-duck-bird-clip-art.png";
    }

    static ducks = [];
    static deadDucks = [];

    static generateDucks(difficulty) {
        let numDucks = 15;
        switch(difficulty) {
            case "medium":
                numDucks = 10;
                break;
            case "hard":
                numDucks = 5;
                break;
        }
        for (let i = 0; i < numDucks; i ++) {
            this.ducks.push(new Duck(difficulty))
        }
    }
}

export default Duck;