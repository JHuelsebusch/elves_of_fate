class BackgroundObject extends MovableObject {
    width = 886.33333;
    height = 720;

    constructor(imgPath, x, y) {
        super().loadImage(imgPath);
        this.x = x;
        this.y = y;
    }

}