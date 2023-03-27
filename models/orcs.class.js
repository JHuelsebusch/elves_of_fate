class Orc extends MovableObject {
    otherDirection = true;

    IMAGES_WALK = [
        'img/orc/PNG/3_ORK/ORK_03_WALK_000.png',
        'img/orc/PNG/3_ORK/ORK_03_WALK_001.png',
        'img/orc/PNG/3_ORK/ORK_03_WALK_002.png',
        'img/orc/PNG/3_ORK/ORK_03_WALK_003.png',
        'img/orc/PNG/3_ORK/ORK_03_WALK_004.png',
        'img/orc/PNG/3_ORK/ORK_03_WALK_005.png',
        'img/orc/PNG/3_ORK/ORK_03_WALK_006.png',
        'img/orc/PNG/3_ORK/ORK_03_WALK_007.png',
        'img/orc/PNG/3_ORK/ORK_03_WALK_008.png',
        'img/orc/PNG/3_ORK/ORK_03_WALK_009.png',

    ];

    constructor() {
        super().loadImage('./img/orc/PNG/3_ORK/ORK_03_IDLE_000.png')

        this.x = 400 + Math.random() * 2000;
        // this.y = 100 + Math.random() * 50;
        this.speed = 0.05 + Math.random() * 0.75;

        this.loadImages(this.IMAGES_WALK);

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.objectAnimation(this.IMAGES_WALK);
        }, 100)
    }
}