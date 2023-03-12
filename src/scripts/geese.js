import FlyingObject from "./flying_objects";

class Goose extends FlyingObject {
    constructor(difficulty) {
        super(difficulty);
        this.regImgSrc = "../BigDuckHunter/assets/geese.png";
        this.reverseImgSrc = "../BigDuckHunter/assets/geese_reverse.png";
    }

    static geese = [];

    static generateGeese(difficulty) {
        let numGeese = 3;
        switch(difficulty) {
            case "medium":
                numGeese = 5;
                break;
            case "hard":
                numGeese = 8;
                break;
        }
        for (let i = 0; i < numGeese; i ++) {
            this.geese.push(new Goose(difficulty))
        }
        return this.geese;
    }

}

export default Goose;