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
    ];
    walk_sound = new Audio('audio/running.mp3');
    world;


    constructor() {
        super().loadImage('img/elf/PNG/3/Elf_03__IDLE_000.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.otherDirection = false;
                this.x += this.speed;
            }
            if (this.world.keyboard.LEFT && this.x > this.world.level.level_begin_x) {
                this.otherDirection = true;
                this.x -= this.speed;
            }
        }, 100)
        setInterval(() => {
            this.obkectAnimation(this.IMAGES_IDLE);

            this.walk_sound.pause();

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.walk_sound.play();
                this.obkectAnimation(this.IMAGES_WALK);
            }
            this.world.camera_x = -this.x

        }, 100)

    }




    jump() {

    }
    run() {

    }
}