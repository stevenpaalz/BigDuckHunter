class Tree1 {
    constructor() {
        this.img = new Image();
        this.img.src = "../BigDuckHunter/assets/tree_1.png";
        this.x = 730;
        this.y = 60;
        this.width = 411 / 1.6;
        this.height = 771 / 1.6;
    }

    draw() {
        const ctx = canvas.getContext("2d");
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

export default Tree1;