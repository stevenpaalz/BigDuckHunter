import Tree1 from "./tree_1";
import Tree2 from "./tree_2";

class Tree {
    // static trees = [];

    static generateTrees() {
        let trees = [];
        trees.push(new Tree1());
        trees.push(new Tree2());
        return trees;
    }
}

export default Tree;