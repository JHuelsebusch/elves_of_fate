class World {
    elf = new Elf()
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    manaBar = new ManaBar();
    throwableObject = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.elf.world = this;
    }

    run() {
        setInterval(() => {

            this.checkCollisions();
            this.checkThrowObjects();
        }, 100);
    }
    checkThrowObjects() {
        if (this.keyboard.ENTER) {
            let attack = new ThrowableObject(this.elf.x, this.elf.y);
            this.throwableObject.push(attack);
        }
    }

    checkCollisions() {
        this.level.orcs.forEach((orc) => {
            if (this.elf.isColliding(orc)) {
                this.elf.hit(orc);
                this.statusBar.setPercentage(this.elf.energy);
            }
            if (orc.isColliding(this.elf)) {
                orc.hit(this.elf);
            }
            this.throwableObject.forEach((attack) => {
                if (orc.isColliding(attack)) {
                    orc.hit(attack);
                    attack.hit(orc);
                }
            });
        })
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.translate(this.camera_x, 0); // Forwards

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.orcs);
        this.addObjectsToMap(this.level.potions);
        this.addObjectsToMap(this.level.spellbooks);
        this.addToMap(this.elf);
        this.addObjectsToMap(this.throwableObject);

        this.ctx.translate(-this.camera_x, 0); // Back
        this.addToMap(this.statusBar);
        this.addToMap(this.manaBar);

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
            this.flipImage(mObj)
        }
        mObj.draw(this.ctx);
        mObj.drawFrame(this.ctx);
        if (mObj.otherDirection) {
            this.flipImageBack(mObj)
        }
    }

    flipImage(mObj) {
        this.ctx.save();
        this.ctx.translate(mObj.width, 0);
        this.ctx.scale(-1, 1);
        mObj.x = mObj.x * -1;
    }
    flipImageBack(mObj) {
        mObj.x = mObj.x * -1;
        this.ctx.restore();
    }

}