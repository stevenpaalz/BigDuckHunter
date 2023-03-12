class Tree2 {
    constructor() {
        this.img = new Image();
        this.img.src = "../BigDuckHunter/assets/tree_2.png";
        this.x = -100;
        this.y = 135;
        this.width = 460 / 1.4;
        this.height = 539 / 1.4;
    }

    draw() {
        const ctx = canvas.getContext("2d");
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

export default Tree2;