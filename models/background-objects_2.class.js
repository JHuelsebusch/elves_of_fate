class BackgroundObject2 extends MovableObject {
    width = 1279.995;
    height = 720;

    constructor(imgPath, x, y) {
        super().loadImage(imgPath);
        this.x = x;
        this.y = y;
    }
}