class Orc extends MovableObject {
    otherDirection = true;

    offset = {
        top: 115,
        right: 210,
        bottom: 30,
        left: 210
    };

    energy = 5;
    damage = 5;

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
    IMAGES_DIE = [
        'img/orc/PNG/3_ORK/ORK_03_DIE_000.png',
        'img/orc/PNG/3_ORK/ORK_03_DIE_001.png',
        'img/orc/PNG/3_ORK/ORK_03_DIE_002.png',
        'img/orc/PNG/3_ORK/ORK_03_DIE_003.png',
        'img/orc/PNG/3_ORK/ORK_03_DIE_004.png',
        'img/orc/PNG/3_ORK/ORK_03_DIE_005.png',
        'img/orc/PNG/3_ORK/ORK_03_DIE_006.png',
        'img/orc/PNG/3_ORK/ORK_03_DIE_007.png',
        'img/orc/PNG/3_ORK/ORK_03_DIE_008.png',
        'img/orc/PNG/3_ORK/ORK_03_DIE_009.png',

    ];

    constructor() {
        super().loadImage('./img/orc/PNG/3_ORK/ORK_03_IDLE_000.png');

        this.x = 400 + Math.random() * 2000;
        // this.y = 100 + Math.random() * 50;
        this.speed = 0.05 + Math.random() * 0.75;

        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DIE);

        this.animate();
    }

    animate() {
        const movingInterval = setInterval(() => {
            if (this.isDead()) {} else {
                this.moveLeft();
            }
        }, 1000 / 60);

        const animationInterval = setInterval(() => {
            if (this.isDead()) {
                clearInterval(animationInterval);
                clearInterval(movingInterval);
                this.die();
                this.increasePoints(1500);
            } else {
                this.objectAnimation(this.IMAGES_WALK);
            }
        }, 100)
    }
}