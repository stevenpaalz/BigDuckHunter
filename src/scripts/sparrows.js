import FlyingObject from "./flying_objects";

class Sparrow extends FlyingObject {
    constructor(difficulty, game) {
        super(difficulty, game);
        this.regImgSrc = "../BigDuckHunter/assets/sparrows.png";
        this.reverseImgSrc = "../BigDuckHunter/assets/sparrows_reverse.png";
    }

    static sparrows = [];

    static generateSparrows(difficulty, game) {
        let numSparrows = 3;
        switch(difficulty) {
            case "Medium":
                numSparrows = 5;
                break;
            case "Hard":
                numSparrows = 8;
                break;
        }
        for (let i = 0; i < numSparrows; i ++) {
            this.sparrows.push(new Sparrow(difficulty, game))
        }
        return this.sparrows;
    }

}

export default Sparrow;