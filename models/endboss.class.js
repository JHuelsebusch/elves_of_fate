class Endboss extends MovableObject {
    otherDirection = true;
    height = 196.875 * 2.5;
    width = 375 * 2.5;
    IMAGES_WALK = [
        'img/orc/PNG/2_ORK/ORK_02_WALK_000.png',
        'img/orc/PNG/2_ORK/ORK_02_WALK_001.png',
        'img/orc/PNG/2_ORK/ORK_02_WALK_002.png',
        'img/orc/PNG/2_ORK/ORK_02_WALK_003.png',
        'img/orc/PNG/2_ORK/ORK_02_WALK_004.png',
        'img/orc/PNG/2_ORK/ORK_02_WALK_005.png',
        'img/orc/PNG/2_ORK/ORK_02_WALK_006.png',
        'img/orc/PNG/2_ORK/ORK_02_WALK_007.png',
        'img/orc/PNG/2_ORK/ORK_02_WALK_008.png',
        'img/orc/PNG/2_ORK/ORK_02_WALK_009.png',

    ];

    constructor() {
        super().loadImage('./img/orc/PNG/2_ORK/ORK_02_IDLE_000.png')

        this.x = 2600;
        this.y = -60;
        this.speed = 0.05 + Math.random() * 0.5;

        this.loadImages(this.IMAGES_WALK);

        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.objectAnimation(this.IMAGES_WALK);
        }, 100)
    }
}