import FlyingObject from "./flying_objects";

class Vulture extends FlyingObject {
    constructor(difficulty) {
        super(difficulty);
        this.regImgSrc = "../BigDuckHunter/assets/vultures.png";
        this.reverseImgSrc = "../BigDuckHunter/assets/vultures_reverse.png";
    }

    static vultures = [];

    static generateVultures(difficulty) {
        let numVultures = 3;
        switch(difficulty) {
            case "medium":
                numVultures = 5;
                break;
            case "hard":
                numVultures = 8;
                break;
        }
        for (let i = 0; i < numVultures; i ++) {
            this.vultures.push(new Vulture(difficulty))
        }
        return this.vultures;
    }

}

export default Vulture;