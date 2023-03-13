import Sparrow from "./sparrows"
import Owl from "./owls"
import Vulture from "./vultures"
import Goose from "./geese"

class OtherBird {

    // static otherBirds = [];

    static generateOtherBirds(difficulty, game) {
        let otherBirds = [];
        return otherBirds.concat(Sparrow.generateSparrows(difficulty, game), Owl.generateOwls(difficulty, game), Vulture.generateVultures(difficulty, game), Goose.generateGeese(difficulty, game));
    }
}

export default OtherBird;