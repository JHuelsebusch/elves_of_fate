class DrawableObject {
    x = 0;
    y = 110;
    img;
    height = 196.875 * 1.5;
    width = 375 * 1.5;
    imgCache = {};
    otherDirection = false;
    currentImage = 0;
    currentImageDead = 0;


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
        if (this instanceof CollectibleObject || this instanceof Elf || this instanceof Orc || this instanceof Endboss || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'blue';
            let drawX;
            if (this.otherDirection) {
                drawX = this.x + this.offset.right;
            } else {
                drawX = this.x + this.offset.left;
            }
            ctx.rect(drawX, (this.y + this.offset.top), ((this.width - this.offset.right) - this.offset.left), ((this.height - this.offset.top) - this.offset.bottom));
            ctx.stroke();
        }
    }
}