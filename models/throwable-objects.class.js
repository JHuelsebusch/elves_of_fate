class ThrowableObjects extends MovableObject {

    offset = {
        top: 220,
        right: 180,
        bottom: 220,
        left: 180
    };

    energy = 1;
    damage = 30;

    IMAGES_FIREBALL_LOAD = [
        'img/FIREBALL/1.png',
        'img/FIREBALL/2.png',
        'img/FIREBALL/3.png',
        'img/FIREBALL/4.png',

    ];
    IMAGES_FIREBALL = [
        'img/FIREBALL/5.png',
        'img/FIREBALL/6.png',
        'img/FIREBALL/7.png',
        'img/FIREBALL/8.png',
        'img/FIREBALL/9.png',
        'img/FIREBALL/10.png',
        'img/FIREBALL/11.png',
        'img/FIREBALL/12.png',
        'img/FIREBALL/13.png',
        'img/FIREBALL/14.png',
        'img/FIREBALL/15.png',
        'img/FIREBALL/16.png',
        'img/FIREBALL/17.png',
        'img/FIREBALL/18.png',
        'img/FIREBALL/19.png',
        'img/FIREBALL/20.png',
        'img/FIREBALL/21.png',
        'img/FIREBALL/22.png',
        'img/FIREBALL/23.png',
        'img/FIREBALL/24.png',
        'img/FIREBALL/25.png',
        'img/FIREBALL/26.png',
        'img/FIREBALL/27.png',
        'img/FIREBALL/28.png',
        'img/FIREBALL/29.png',
    ];
    IMAGES_FIREBALL_EXPLOSION = [
        'img/FIREBALL/30.png',
        'img/FIREBALL/31.png',
        'img/FIREBALL/32.png',
        'img/FIREBALL/33.png',
        'img/FIREBALL/34.png',
        'img/FIREBALL/35.png',
        'img/FIREBALL/36.png',
        'img/FIREBALL/37.png',
        'img/FIREBALL/38.png',
        'img/FIREBALL/39.png',
    ];


    constructor(x, y) {
        super().loadImage('img/FIREBALL/1.png');
        this.loadImages(this.IMAGES_FIREBALL_LOAD);
        this.loadImages(this.IMAGES_FIREBALL);
        this.loadImages(this.IMAGES_FIREBALL_EXPLOSION);

        this.x = x + 80;
        this.y = y - 80;

        this.height = 500;
        this.width = 500;

        this.speed = 20

        this.animate();
    }

    animate() {
        let fireballLoad = setInterval(() => {
            this.objectAnimation(this.IMAGES_FIREBALL_LOAD);
        }, 1000 / 10);
        setTimeout(() => {
            clearInterval(fireballLoad);
            let fireball = setInterval(() => {
                if (this.isDead()) {
                    clearInterval(fireball);
                    this.explosion(this.IMAGES_FIREBALL_EXPLOSION)
                } else {
                    this.objectAnimation(this.IMAGES_FIREBALL);
                    this.moveRight();
                }
            }, 1000 / 20);
            setTimeout(() => {
                this.energy = 0;
            }, 1000);
        }, 400);
    }
}