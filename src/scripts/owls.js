import FlyingObject from "./flying_objects";

class Owl extends FlyingObject {
    constructor(difficulty, game) {
        super(difficulty, game);
        this.regImgSrc = "../BigDuckHunter/assets/owls.png";
        this.reverseImgSrc = "../BigDuckHunter/assets/owls_reverse.png";
    }

    static owls = [];

    static generateOwls(difficulty, game) {
        let numOwls = 3;
        switch(difficulty) {
            case "Medium":
                numOwls = 5;
                break;
            case "Hard":
                numOwls = 8;
                break;
        }
        for (let i = 0; i < numOwls; i ++) {
            this.owls.push(new Owl(difficulty, game))
        }
        return this.owls;
    }

}

export default Owl;