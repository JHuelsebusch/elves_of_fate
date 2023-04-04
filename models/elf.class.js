class Elf extends MovableObject {
    y = 30;
    speed = 30;

    offset = {
        top: 93,
        right: 220,
        bottom: 50,
        left: 220
    };

    energy = 100;
    damage = 10;
    mana = 20;

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
    walk_sound = new Audio('../audio/running.mp3');
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
    IMAGES_HURT = [
        'img/elf/PNG/3/Elf_03__HURT_000.png',
        'img/elf/PNG/3/Elf_03__HURT_001.png',
        'img/elf/PNG/3/Elf_03__HURT_002.png',
        'img/elf/PNG/3/Elf_03__HURT_003.png',
        'img/elf/PNG/3/Elf_03__HURT_004.png',
        'img/elf/PNG/3/Elf_03__HURT_005.png',
        'img/elf/PNG/3/Elf_03__HURT_006.png',
        'img/elf/PNG/3/Elf_03__HURT_007.png',
        'img/elf/PNG/3/Elf_03__HURT_008.png',
        'img/elf/PNG/3/Elf_03__HURT_009.png',
    ];
    IMAGES_DIE = [
        'img/elf/PNG/3/Elf_03__DIE_000.png',
        'img/elf/PNG/3/Elf_03__DIE_001.png',
        'img/elf/PNG/3/Elf_03__DIE_002.png',
        'img/elf/PNG/3/Elf_03__DIE_003.png',
        'img/elf/PNG/3/Elf_03__DIE_004.png',
        'img/elf/PNG/3/Elf_03__DIE_005.png',
        'img/elf/PNG/3/Elf_03__DIE_006.png',
        'img/elf/PNG/3/Elf_03__DIE_007.png',
        'img/elf/PNG/3/Elf_03__DIE_008.png',
        'img/elf/PNG/3/Elf_03__DIE_009.png',
    ];
    IMAGES_ATTACK = [
        'img/elf/PNG/3/Elf_03__ATTACK_000.png',
        'img/elf/PNG/3/Elf_03__ATTACK_001.png',
        'img/elf/PNG/3/Elf_03__ATTACK_002.png',
        'img/elf/PNG/3/Elf_03__ATTACK_003.png',
        'img/elf/PNG/3/Elf_03__ATTACK_004.png',
        'img/elf/PNG/3/Elf_03__ATTACK_005.png',
        'img/elf/PNG/3/Elf_03__ATTACK_006.png',
        'img/elf/PNG/3/Elf_03__ATTACK_007.png',
        'img/elf/PNG/3/Elf_03__ATTACK_008.png',
        'img/elf/PNG/3/Elf_03__ATTACK_009.png',
    ];
    world;


    constructor() {
        super().loadImage('img/elf/PNG/3/Elf_03__IDLE_000.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DIE);
        this.loadImages(this.IMAGES_ATTACK);
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

        const animationInterval = setInterval(() => {
            this.walk_sound.pause();
            this.objectAnimation(this.IMAGES_IDLE);

            if (this.isDead()) {
                clearInterval(animationInterval);
                this.die();
            } else if (this.isHurt() && this.lastDamage != 0) {
                this.objectAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.objectAnimation(this.IMAGES_JUMP)
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.walk_sound.play();
                    this.objectAnimation(this.IMAGES_WALK);
                }
                // if (this.world.keyboard.SPACE) {
                //     this.objectAnimation(this.IMAGES_ATTACK)
                // }
            }
            this.world.camera_x = -this.x

        }, 100)
    }

    collect(mana) {
        this.mana += mana
        if (this.mana > 100) {
            this.mana = 100;
        }
    }
}