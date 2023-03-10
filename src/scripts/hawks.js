import FlyingObject from "./flying_objects";

class Hawk extends FlyingObject {
    constructor(difficulty) {
        super(difficulty);
        this.img = new Image();
        this.img.src = "../BigDuckHunter/assets/hawk.png";
    }

    static hawks = [];

    static generateHawks(difficulty) {
        let numHawks = 5;
        switch(difficulty) {
            case "medium":
                numHawks = 10;
                break;
            case "hard":
                numHawks = 15;
                break;
        }
        for (let i = 0; i < numHawks; i ++) {
            this.hawks.push(new Hawk(difficulty))
        }
    }

}

export default Hawk;