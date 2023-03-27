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