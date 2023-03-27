class World {
    elf = new Elf()
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.elf.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.elf);
        this.addObjectsToMap(this.level.orcs);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function() { self.draw(); });
    }

    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj);
        });
    }
    addToMap(mObj) {
        if (mObj.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mObj.width, 0);
            this.ctx.scale(-1, 1);
            mObj.x = mObj.x * -1;
        }
        this.ctx.drawImage(mObj.img, mObj.x, mObj.y, mObj.width, mObj.height);
        if (mObj.otherDirection) {
            mObj.x = mObj.x * -1;
            this.ctx.restore();
        }
    }

}