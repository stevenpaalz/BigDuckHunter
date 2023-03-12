import Tree1 from "./tree_1";
import Tree2 from "./tree_2";

class Tree {
    static trees = [];

    static generateTrees() {
        this.trees.push(new Tree1());
        this.trees.push(new Tree2());
    }
}

export default Tree;