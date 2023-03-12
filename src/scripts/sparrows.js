import FlyingObject from "./flying_objects";

class Sparrow extends FlyingObject {
    constructor(difficulty) {
        super(difficulty);
        this.regImgSrc = "../BigDuckHunter/assets/sparrows.png";
        this.reverseImgSrc = "../BigDuckHunter/assets/sparrows_reverse.png";
    }

    static sparrows = [];

    static generateSparrows(difficulty) {
        let numSparrows = 3;
        switch(difficulty) {
            case "medium":
                numSparrows = 5;
                break;
            case "hard":
                numSparrows = 8;
                break;
        }
        for (let i = 0; i < numSparrows; i ++) {
            this.sparrows.push(new Sparrow(difficulty))
        }
        return this.sparrows;
    }

}

export default Sparrow;