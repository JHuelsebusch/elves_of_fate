class Potion2 extends CollectibleObject {
    width = 30;
    height = 36;

    mana = 40;

    constructor() {
        super().loadImage('img/potion/potion-blue.png');
        this.x = -500 + Math.random() * 6000;
        this.y = 50 + Math.random() * 100;
    }
}