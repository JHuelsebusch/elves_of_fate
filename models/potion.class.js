class Potion extends CollectibleObject {
    width = 30;
    height = 36;
    y = 330;

    constructor() {
        super().loadImage('img/potion/potion-blue.png')
    }
}