class CollectibleObject extends DrawableObject {
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    mana = 0;
    energy = 1;

    constructor() {
        super();
        this.x = 400 + Math.random() * 2000;
        this.y = 310;
    }
    collect() {
        this.mana = 0;
    }

}