import FlyingObject from "./flying_objects";

class Vulture extends FlyingObject {
    constructor(difficulty, game) {
        super(difficulty, game);
        this.regImgSrc = "../BigDuckHunter/assets/vultures.png";
        this.reverseImgSrc = "../BigDuckHunter/assets/vultures_reverse.png";
    }

    static vultures = [];

    static generateVultures(difficulty, game) {
        let numVultures = 3;
        switch(difficulty) {
            case "Medium":
                numVultures = 5;
                break;
            case "Hard":
                numVultures = 8;
                break;
        }
        for (let i = 0; i < numVultures; i ++) {
            this.vultures.push(new Vulture(difficulty, game))
        }
        return this.vultures;
    }

}

export default Vulture;