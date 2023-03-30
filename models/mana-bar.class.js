class ManaBar extends DrawableObject {



    IMAGES_HP = [
        'img/hp_bar/HP_bar_00.png',
        'img/hp_bar/HP_bar_10.png',
        'img/hp_bar/HP_bar_20.png',
        'img/hp_bar/HP_bar_30.png',
        'img/hp_bar/HP_bar_40.png',
        'img/hp_bar/HP_bar_50.png',
        'img/hp_bar/HP_bar_60.png',
        'img/hp_bar/HP_bar_70.png',
        'img/hp_bar/HP_bar_80.png',
        'img/hp_bar/HP_bar_90.png',
        'img/hp_bar/HP_bar_100.png',
    ];
    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.IMAGES_HP);
        this.setPercentage(this.percentage);

    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HP[this.resolveImageIndex()];
        this.x = 340;
        this.y = 10;
        this.width = 300;
        this.height = 30;
        this.img = this.imgCache[path];

    }
    resolveImageIndex() {
        if (this.percentage > 90) {
            return 10;
        } else if (this.percentage > 80) {
            return 9;
        } else if (this.percentage > 70) {
            return 8;
        } else if (this.percentage > 60) {
            return 7;
        } else if (this.percentage > 50) {
            return 6;
        } else if (this.percentage > 40) {
            return 5;
        } else if (this.percentage > 30) {
            return 4;
        } else if (this.percentage > 20) {
            return 3;
        } else if (this.percentage > 10) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}