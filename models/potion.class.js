class Potion extends CollectibleObject {
    width = 30;
    height = 36;
    y = 330;

    mana = 40;

    constructor() {
        super().loadImage('img/potion/potion-blue.png')
    }
}