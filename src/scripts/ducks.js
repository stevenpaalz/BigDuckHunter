import FlyingObject from "./flying_objects";

class Duck extends FlyingObject {
    constructor(difficulty) {
        super(difficulty);
        this.img = new Image();
        this.img.src = "../BigDuckHunter/assets/kisspng-mallard-duck-bird-clip-art.png";
    }
        
    draw() {
        const ctx = canvas.getContext("2d");
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        if (this.x - this.width > canvas.width || this.x + (this.width*2) < 0) {
            this.dx = -this.dx
        }
        if (this.y - this.height > canvas.height || this.y + (this.height*2) < 0) {
            this.dy = -this.dy
        }
    }
}

export default Duck;