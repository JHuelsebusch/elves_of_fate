class MovableObject extends DrawableObject {
    otherDirection = false;
    speed = 0.25;
    speedY = 0;
    acceleration = 0.05;
    energy = 100;
    lastHit = 0;

    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

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




    isColliding(obj) {
        return this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
            this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
            this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
            this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom


        // ((this.x + this.frameX) + (this.width + this.frameW)) >= (obj.x + obj.frameX) &&
        //     ((this.y + this.frameY) + (this.height + this.frameH)) >= (obj.y + obj.frameY) &&
        //     (this.x + this.frameX) <= (obj.x + obj.frameX) &&
        //     (this.y + this.frameY) <= ((obj.y + obj.frameY) + (obj.height + obj.frameH))
        // ((this.x + this.frameX) + (this.width + this.frameW)) >= (obj.x + obj.frameX) &&
        // (this.x + this.frameX) <= ((obj.x + obj.frameX) + (obj.width + obj.frameW)) &&
        // ((this.y + this.frameY) + this.offsetY + (this.height + this.frameH)) >= (obj.y + obj.frameY) &&
        // ((this.y + this.frameY) + this.offsetY) <= ((obj.y + obj.frameY) + (obj.height + obj.frameH))
        // && obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.;
    };
    hit(obj) {
        this.energy -= obj.damage;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.2;
    }
    isDead() {
        return this.energy == 0;
    }

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