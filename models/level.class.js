class Level {
    orcs;
    endboss;
    backgroundObjects;
    potions;
    spellbooks;
    level_begin_x = -700;
    level_end_x = 2800;

    constructor(orcs, endboss, backgroundObjects, potions, spellbooks) {
        this.orcs = orcs;
        this.endboss = endboss;
        this.backgroundObjects = backgroundObjects;
        this.potions = potions;
        this.spellbooks = spellbooks;
    }
}