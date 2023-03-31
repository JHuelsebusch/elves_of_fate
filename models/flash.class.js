class Flash extends ThrowableObject {
    offset = {
        top: 40,
        right: 40,
        bottom: 40,
        left: 40
    };

    energy = 1;
    damage = 5;

    IMAGES_FLASH = [
        'img/flash/flash01.png',
        'img/flash/flash02.png',
        'img/flash/flash03.png',
        'img/flash/flash04.png',
        'img/flash/flash05.png',
        'img/flash/flash06.png',
        'img/flash/flash07.png',
        'img/flash/flash08.png',
        'img/flash/flash09.png',
        'img/flash/flash10.png',
    ];


    constructor(x, y) {
        super().loadImage('img/flash/flash01.png');
        this.loadImages(this.IMAGES_FLASH);

        this.x = x + 280;
        this.y = y + 120;

        this.height = 100;
        this.width = 100;

        this.speed = 15

        this.animate();
    }

    animate() {
        this.currentImage = 0;
        let flash = setInterval(() => {
            if (this.isDead()) {
                clearInterval(flash);
                this.damage = 0;
            } else {
                this.objectAnimation(this.IMAGES_FLASH);
            }
        }, 1000 / 20);
        setInterval(() => {
            this.moveRight();
        }, 1000 / 10);
        setTimeout(() => {
            this.energy = 0;
        }, 1000);
    }
}