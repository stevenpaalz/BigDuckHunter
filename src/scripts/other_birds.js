import Sparrow from "./sparrows"
import Owl from "./owls"
import Vulture from "./vultures"
import Goose from "./geese"

class OtherBird {

    static otherBirds = [];

    static generateOtherBirds(difficulty) {
        this.otherBirds = this.otherBirds.concat(Sparrow.generateSparrows(difficulty), Owl.generateOwls(difficulty), Vulture.generateVultures(difficulty), Goose.generateGeese(difficulty));
    }
}

export default OtherBird;