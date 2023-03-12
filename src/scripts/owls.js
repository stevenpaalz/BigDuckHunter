import FlyingObject from "./flying_objects";

class Owl extends FlyingObject {
    constructor(difficulty) {
        super(difficulty);
        this.regImgSrc = "../BigDuckHunter/assets/owls.png";
        this.reverseImgSrc = "../BigDuckHunter/assets/owls_reverse.png";
    }

    static owls = [];

    static generateOwls(difficulty) {
        let numOwls = 3;
        switch(difficulty) {
            case "medium":
                numOwls = 5;
                break;
            case "hard":
                numOwls = 8;
                break;
        }
        for (let i = 0; i < numOwls; i ++) {
            this.owls.push(new Owl(difficulty))
        }
        return this.owls;
    }

}

export default Owl;