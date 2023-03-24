class Elf extends MovableObject {

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


    constructor() {
        super().loadImage('img/elf/PNG/3/Elf_03__IDLE_000.png')
        this.loadImages(this.IMAGES_IDLE);

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imgCache[path];
            this.currentImage++
        }, 100)
    }




    jump() {

    }
    run() {

    }
}