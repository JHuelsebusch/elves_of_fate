class DrawableObject {
    x = 0;
    y = 110;
    img;
    height = 196.875 * 1.5;
    width = 375 * 1.5;
    imgCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });

    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    drawFrame(ctx) {
        if (this instanceof Elf || this instanceof Orc) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';

            let drawX = this.x + this.frameX;
            let drawY = this.y + this.frameY;
            let drawW = this.width + this.frameW;
            let drawH = this.height + this.frameH;
            ctx.rect(drawX, drawY, drawW, drawH);
            ctx.stroke();
        }
    }
}