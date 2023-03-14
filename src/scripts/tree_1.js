class Tree1 {
    constructor() {
        this.img = new Image();
        this.img.src = "../BigDuckHunter/assets/tree_1.png";
        this.x = 740;
        this.y = 100;
        this.width = 411 / 1.6;
        this.height = 771 / 1.6;
        this.hitbox1 = {
            x: 847,
            y: 180,
            width: this.width / 5,
            height: this.height * 0.2
        }
        this.hitbox2 = {
            x: 825,
            y: 270,
            width: this.width * 0.35,
            height: this.height * 0.2
        }
        this.hitbox3 = {
            x: 810,
            y: 345,
            width: this.width * 0.5,
            height: this.height * 0.25
        }
        this.hitbox4 = {
            x: 792,
            y: 430,
            width: this.width * 0.65,
            height: this.height * 0.15
        }
    }

    draw() {
        const ctx = canvas.getContext("2d");
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

export default Tree1;