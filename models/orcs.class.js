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

        this.x = 200 + Math.random() * 500;
        // this.y = 100 + Math.random() * 50;
        this.speed = 0.05 + Math.random() * 0.75;

        this.loadImages(this.IMAGES_WALK);

        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALK.length;
            let path = this.IMAGES_WALK[i];
            this.img = this.imgCache[path];
            this.currentImage++
        }, 100)
    }
}