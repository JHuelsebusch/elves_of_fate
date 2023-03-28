class MovableObject {
    x = 0;
    y = 110;
    img;
    height = 196.875 * 1.5;
    width = 375 * 1.5;
    imgCache = {};
    otherDirection = false;
    currentImage = 0;
    speed = 0.25;
    speedY = 0;
    acceleration = 0.05;

    applyGravity() {
        setInterval(() => {
            if (this.y < 130 || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

        })
    }

    isAboveGround() {
        return this.y < 130;
    }

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

            ctx.rect(this.x + this.frameX, this.y + this.frameY, this.width + this.frameW, this.height + this.frameH);
            ctx.stroke();
        }
    }

    isColliding(obj) {
        return ((this.x + this.frameX) + (this.width + this.frameW)) >= (obj.x + obj.frameX) &&
            ((this.y + this.frameY) + (this.height + this.frameH)) >= (obj.y + obj.frameY) &&
            (this.x + this.frameX) <= (obj.x + obj.frameX) &&
            (this.y + this.frameY) <= ((obj.y + obj.frameY) + (obj.height + obj.frameH))
            // ((this.x + this.frameX) + (this.width + this.frameW)) >= (obj.x + obj.frameX) &&
            // (this.x + this.frameX) <= ((obj.x + obj.frameX) + (obj.width + obj.frameW)) &&
            // ((this.y + this.frameY) + this.offsetY + (this.height + this.frameH)) >= (obj.y + obj.frameY) &&
            // ((this.y + this.frameY) + this.offsetY) <= ((obj.y + obj.frameY) + (obj.height + obj.frameH))
            // && obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.;
    };



    moveRight() {
        this.otherDirection = false;
        this.x += this.speed;
    }

    moveLeft() {
        this.otherDirection = true;
        this.x -= this.speed;
    }
    jump() {
        this.speedY = 4.5;
    }

    objectAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++
    }

}