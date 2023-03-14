import Shot from "./shot"

class Crosshair {
    constructor(game) {
        this.img = new Image();
        this.img.src = "../BigDuckHunter/assets/crosshair.png";
        this.width = 50;
        this.height = 50;
        this.x = (canvas.width / 2) - (this.width / 2);
        this.y = (canvas.height / 2) - (this.height / 2);
        this.game = game;
    }

    draw() {
        const ctx = canvas.getContext("2d");
        if (this.x + (this.width / 2) > canvas.width) {
            this.x = canvas.width - (this.width / 2);
        }
        if (this.x + (this.width / 2) < 0) {
            this.x = -(this.width / 2);
        }
        if (this.y + (this.height / 2) > canvas.height) {
            this.y = canvas.height - (this.height / 2);
        }
        if (this.y + (this.height / 2) < 0) {
            this.y = -(this.height / 2);
        }
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    move() {
        if (this.game.leftPressed) {
            this.x -= 5;
        }
        if (this.game.rightPressed) {
            this.x += 5;
        }
        if (this.game.upPressed) {
            this.y -= 5;
        }
        if (this.game.downPressed) {
            this.y += 5;
        }
        this.draw();
    }
}

export default Crosshair;