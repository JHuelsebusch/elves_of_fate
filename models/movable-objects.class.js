class MovableObject {
    x = -150;
    y = 110;
    img;
    height = 196.875 * 1.5;
    width = 375 * 1.5;
    imgCache = {};
    otherDirection = false;
    currentImage = 0;
    speed = 0.25;

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

    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }


}