import Shot from "./shot"

class Crosshair {
    constructor(game) {
        this.game = game;
        this.img = new Image();
        this.img.src = "../BigDuckHunter/assets/crosshair.png";
        this.width = 50;
        this.height = 50;
        this.x = (canvas.width / 2) - (this.width / 2);
        this.y = (canvas.height / 2) - (this.height / 2);
        this.leftPressed = false;
        this.rightPressed = false;
        this.upPressed = false;
        this.downPressed = false;
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
        if (this.leftPressed) {
            this.x -= 5;
        }
        if (this.rightPressed) {
            this.x += 5;
        }
        if (this.upPressed) {
            this.y -= 5;
        }
        if (this.downPressed) {
            this.y += 5;
        }
        this.draw();
    }

    keyDownHandler(event) {
        if ([37, 38, 39, 40, 32].includes(event.keyCode)) {event.preventDefault();}
        switch (event.keyCode) {
            case 37:
                this.leftPressed = true;
                break;
            case 39:
                this.rightPressed = true;
                break;
            case 38:
                this.upPressed = true;
                break;
            case 40:
                this.downPressed = true;
                break;
            case 32:
                this.fireShot();
                break;
        }
    }

    keyUpHandler(event) {
        event.preventDefault();
        switch (event.keyCode) {
            case 37:
                this.leftPressed = false;
                break;
            case 39:
                this.rightPressed = false;
                break;
            case 38:
                this.upPressed = false;
                break;
            case 40:
                this.downPressed = false;
                break;
        }
    }

    fireShot() {
        let shot = new Shot(this.x, this.y, this.width, this.height, this.game)
        shot.fire();
    }
}

export default Crosshair;