import FlyingObject from "./flying_objects";

class Goose extends FlyingObject {
    constructor(difficulty, game) {
        super(difficulty, game);
        this.regImgSrc = "../BigDuckHunter/assets/geese.png";
        this.reverseImgSrc = "../BigDuckHunter/assets/geese_reverse.png";
    }

    static geese = [];

    static generateGeese(difficulty, game) {
        let numGeese = 3;
        switch(difficulty) {
            case "Medium":
                numGeese = 5;
                break;
            case "Hard":
                numGeese = 8;
                break;
        }
        for (let i = 0; i < numGeese; i ++) {
            this.geese.push(new Goose(difficulty, game))
        }
        return this.geese;
    }

}

export default Goose;