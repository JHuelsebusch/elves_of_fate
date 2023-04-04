class MovableObject extends DrawableObject {
    speed = 0.25;
    speedY = 0;
    acceleration = 0.05;
    energy = 100;
    lastHit = 0;
    lastDamage = 0;
    // world;
    points = 0;

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
    };

    hit(obj) {
        this.energy -= obj.damage;
        this.lastDamage = obj.damage;
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
        this.increasePoints(3);
    }

    moveLeft() {
        this.otherDirection = true;
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 4.5;
    }

    die() {
        this.damage = 0;
        this.currentImage = 0;
        const animationInterval = setInterval(() => {
            this.objectAnimation(this.IMAGES_DIE);
        }, 100);
        setTimeout(() => {
            clearInterval(animationInterval);
        }, 1000);
    }

    explosion(images) {
        this.damage = 0;
        this.currentImage = 0;
        this.x += 50;
        const animationInterval = setInterval(() => {
            this.objectAnimation(images);
        }, 100);
        setTimeout(() => {
            clearInterval(animationInterval);
            this.y = -500;
        }, 950);
    }

    objectAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++
    }
    increasePoints(n) {
        this.points += +n;
    }

}