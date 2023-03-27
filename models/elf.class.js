class Elf extends MovableObject {
    y = 130;
    speed = 20;
    otherDirection = false;

    IMAGES_IDLE = [
        'img/elf/PNG/3/Elf_03__IDLE_000.png',
        'img/elf/PNG/3/Elf_03__IDLE_001.png',
        'img/elf/PNG/3/Elf_03__IDLE_002.png',
        'img/elf/PNG/3/Elf_03__IDLE_003.png',
        'img/elf/PNG/3/Elf_03__IDLE_004.png',
        'img/elf/PNG/3/Elf_03__IDLE_005.png',
        'img/elf/PNG/3/Elf_03__IDLE_006.png',
        'img/elf/PNG/3/Elf_03__IDLE_007.png',
        'img/elf/PNG/3/Elf_03__IDLE_008.png',
        'img/elf/PNG/3/Elf_03__IDLE_009.png'
    ];
    IMAGES_WALK = [
        'img/elf/PNG/3/Elf_03__RUN_000.png',
        'img/elf/PNG/3/Elf_03__RUN_001.png',
        'img/elf/PNG/3/Elf_03__RUN_002.png',
        'img/elf/PNG/3/Elf_03__RUN_003.png',
        'img/elf/PNG/3/Elf_03__RUN_004.png',
        'img/elf/PNG/3/Elf_03__RUN_005.png',
        'img/elf/PNG/3/Elf_03__RUN_006.png',
        'img/elf/PNG/3/Elf_03__RUN_007.png',
        'img/elf/PNG/3/Elf_03__RUN_008.png',
        'img/elf/PNG/3/Elf_03__RUN_009.png',
    ]
    world;


    constructor() {
        super().loadImage('img/elf/PNG/3/Elf_03__IDLE_000.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imgCache[path];
            this.currentImage++

                if (this.world.keyboard.RIGHT) {
                    this.otherDirection = false;
                    this.x += this.speed;
                    let i = this.currentImage % this.IMAGES_WALK.length;
                    let path = this.IMAGES_WALK[i];
                    this.img = this.imgCache[path];
                    this.currentImage++
                }

            if (this.world.keyboard.LEFT) {
                this.otherDirection = true;
                this.x -= this.speed;
                let i = this.currentImage % this.IMAGES_WALK.length;
                let path = this.IMAGES_WALK[i];
                this.img = this.imgCache[path];
                this.currentImage++
            }

        }, 100)

    }




    jump() {

    }
    run() {

    }
}