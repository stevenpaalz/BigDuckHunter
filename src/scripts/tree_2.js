class Tree2 {
    constructor() {
        this.img = new Image();
        this.img.src = "../BigDuckHunter/assets/tree_2.png";
        this.x = -100;
        this.y = 165;
        this.width = 460 / 1.3;
        this.height = 539 / 1.3;
        this.hitbox = {
            x: 80,
            y: 302,
            radius: 105,
            sAngle: 0,
            eAngle: (2 * Math.PI)
        }
    }

    draw() {
        const ctx = canvas.getContext("2d");
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        // ctx.arc(this.hitbox.x, this.hitbox.y, this.hitbox.radius, this.hitbox.sAngle, this.hitbox.eAngle);
        // ctx.fill();
    }
}

export default Tree2;