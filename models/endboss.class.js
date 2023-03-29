class Endboss extends MovableObject {
    otherDirection = true;
    height = 196.875 * 2.5;
    width = 375 * 2.5;

    offset = {
        top: 200,
        right: 330,
        bottom: 50,
        left: 250
    };

    energy = 100;
    damage = 5;

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
    IMAGES_ATTACK = [
        'img/orc/PNG/2_ORK/ORK_02_ATTAK_000.png',
        'img/orc/PNG/2_ORK/ORK_02_ATTAK_001.png',
        'img/orc/PNG/2_ORK/ORK_02_ATTAK_002.png',
        'img/orc/PNG/2_ORK/ORK_02_ATTAK_003.png',
        'img/orc/PNG/2_ORK/ORK_02_ATTAK_004.png',
        'img/orc/PNG/2_ORK/ORK_02_ATTAK_005.png',
        'img/orc/PNG/2_ORK/ORK_02_ATTAK_006.png',
        'img/orc/PNG/2_ORK/ORK_02_ATTAK_007.png',
        'img/orc/PNG/2_ORK/ORK_02_ATTAK_008.png',
        'img/orc/PNG/2_ORK/ORK_02_ATTAK_009.png',
    ];
    IMAGES_DIE = [
        'img/orc/PNG/2_ORK/ORK_02_DIE_000.png',
        'img/orc/PNG/2_ORK/ORK_02_DIE_001.png',
        'img/orc/PNG/2_ORK/ORK_02_DIE_002.png',
        'img/orc/PNG/2_ORK/ORK_02_DIE_003.png',
        'img/orc/PNG/2_ORK/ORK_02_DIE_004.png',
        'img/orc/PNG/2_ORK/ORK_02_DIE_005.png',
        'img/orc/PNG/2_ORK/ORK_02_DIE_006.png',
        'img/orc/PNG/2_ORK/ORK_02_DIE_007.png',
        'img/orc/PNG/2_ORK/ORK_02_DIE_008.png',
        'img/orc/PNG/2_ORK/ORK_02_DIE_009.png',
    ]


    constructor() {
        super().loadImage('./img/orc/PNG/2_ORK/ORK_02_IDLE_000.png')

        this.x = 2500;
        this.y = -60;
        this.speed = 0.05 + Math.random() * 0.5;

        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DIE);

        this.animate();
    }

    animate() {
        if (this.isDead()) {
            this.objectAnimation(this.IMAGES_DIE);
        } else {
            setInterval(() => {
                let moveInterval = setInterval(() => {
                    this.moveLeft();
                }, 1000 / 60);
                let animationWalkInterval = setInterval(() => {
                    this.objectAnimation(this.IMAGES_WALK);
                }, 1000 / 10)
                setTimeout(() => {
                    clearInterval(moveInterval);
                    clearInterval(animationWalkInterval);
                    let animationAttackInterval = setInterval(() => {
                        this.objectAnimation(this.IMAGES_ATTACK);
                    }, 1000 / 20);
                    this.damage = 50;
                    console.log(this.damage);
                    setTimeout(() => {
                        clearInterval(animationAttackInterval);
                        this.damage = 5;
                        console.log(this.damage);
                    }, 2000);
                }, 4000);
            }, 6000);
        }


    }
}