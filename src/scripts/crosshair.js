class Crosshair {
    constructor() {
        this.img = new Image();
        this.img.src = "../BigDuckHunter/assets/crosshair.png";
        this.width = 50;
        this.height = 50;
        this.x = (canvas.width / 2) - (this.width / 2);
        this.y = (canvas.height / 2) - (this.width / 2);
    }

    draw() {
        const ctx = canvas.getContext("2d");
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    // move() {
    //     if (leftPressed) {
    //         this.x -= 2;
    //     }
    //     if (rightPressed) {
    //         this.x += 2;
    //     }
    //     if (upPressed) {
    //         this.y -= 2;
    //     }
    //     if (downPressed) {
    //         this.y += 2;
    //     }
    //     this.draw();
    // }
}

export default Crosshair;