class Elf extends MovableObject {
    y = 30;
    speed = 20;
    otherDirection = false;
    frameX = 210;
    frameY = 80;
    frameW = -420;
    frameH = -130;

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
    IMAGES_JUMP = [
        'img/elf/PNG/3/Elf_03__JUMP_001.png',
        'img/elf/PNG/3/Elf_03__JUMP_000.png',
        'img/elf/PNG/3/Elf_03__JUMP_002.png',
        'img/elf/PNG/3/Elf_03__JUMP_003.png',
        'img/elf/PNG/3/Elf_03__JUMP_004.png',
        'img/elf/PNG/3/Elf_03__JUMP_005.png',
        'img/elf/PNG/3/Elf_03__JUMP_006.png',
        'img/elf/PNG/3/Elf_03__JUMP_007.png',
        'img/elf/PNG/3/Elf_03__JUMP_008.png',
        'img/elf/PNG/3/Elf_03__JUMP_009.png',
    ];
    world;


    constructor() {
        super().loadImage('img/elf/PNG/3/Elf_03__IDLE_000.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
            }
            if (this.world.keyboard.LEFT && this.x > this.world.level.level_begin_x) {
                this.moveLeft();
            }
            if (this.world.keyboard.UP && !this.isAboveGround()) {
                this.jump();
            }
        }, 100)

        setInterval(() => {
            this.walk_sound.pause();
            this.objectAnimation(this.IMAGES_IDLE);

            if (this.isAboveGround()) {
                this.objectAnimation(this.IMAGES_JUMP)
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.walk_sound.play();
                    this.objectAnimation(this.IMAGES_WALK);
                }
            }
            this.world.camera_x = -this.x

        }, 100)
    }
}