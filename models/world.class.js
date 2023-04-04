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
    points = 0;
    score = 0;
    lastAttack = 0;
    endboss;
    flash_sound = new Audio('../audio/flash.mp3');
    fireball_sound = new Audio('../audio/fireball.mp3');
    horn_sound = new Audio('../audio/horn.mp3');

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
        this.horn_sound.play();
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.updateScore();
            this.checkEndbossEnergy();
        }, 100);
    }

    checkThrowObjects() {
        if (this.keyboard.ENTER && this.elf.mana > 30 && !this.cooldown()) {
            let attack = new Fireball(this.elf.x, this.elf.y);
            this.throwableObject.push(attack);
            this.elf.mana -= 30;
            this.manaBar.setPercentage(this.elf.mana);
            this.lastAttack = new Date().getTime();
            this.fireball_sound.play();
            setTimeout(() => {
                this.throwableObject.splice(-1)
            }, 1500);
        }
        if (this.keyboard.SPACE && this.elf.mana >= 5 && !this.cooldown()) {
            let attack = new Flash(this.elf.x, this.elf.y);
            this.throwableObject.push(attack);
            this.elf.mana -= 5;
            this.manaBar.setPercentage(this.elf.mana);
            this.lastAttack = new Date().getTime();
            this.flash_sound.play();
            setTimeout(() => {
                this.throwableObject.splice(-1)
            }, 1000);
        }
    }

    cooldown() {
        let timePassed = new Date().getTime() - this.lastAttack;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }

    checkCollisions() {
        this.collisionOrcs();
        this.collisionEndboss();
        this.collisionPotions();
        this.collisionSpellbooks();
    }

    collisionOrcs() {
        this.level.orcs.forEach((orc) => {
            if (this.elf.isColliding(orc)) {
                this.elf.hit(orc);
                this.statusBar.setPercentage(this.elf.energy);
            }
            this.throwableObject.forEach((attack) => {
                if (orc.isColliding(attack)) {
                    orc.hit(attack);
                    attack.hit(orc);
                }
            });
        })
    }
    collisionEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.elf.isColliding(endboss)) {
                this.elf.hit(endboss);
                this.statusBar.setPercentage(this.elf.energy);
            }
            this.throwableObject.forEach((attack) => {
                if (endboss.isColliding(attack)) {
                    endboss.hit(attack);
                    attack.hit(endboss);
                }
            });
        })
    }

    collisionPotions() {
        this.level.potions.forEach((potion) => {
            if (this.elf.isColliding(potion)) {
                this.elf.collect(potion.mana)
                potion.collect();
                this.level.potions.splice(this.level.potions.indexOf(potion), 1);
                this.manaBar.setPercentage(this.elf.mana);
                this.increasePoints(900);

            }
        })
    }

    collisionSpellbooks() {
        this.level.spellbooks.forEach((spellbook) => {
            if (this.elf.isColliding(spellbook)) {
                this.level.spellbooks.splice(this.level.spellbooks.indexOf(spellbook), 1);
                this.increasePoints(10000);
            }
        })
    }

    increasePoints(n) {
        this.points += +n;
    }

    updateScore() {
        this.score = this.points;
        this.score += this.elf.points;
        this.level.orcs.forEach((orc) => {
            this.score += orc.points;
        })
        this.level.endboss.forEach((endboss) => {
            this.score += endboss.points;
        })
    }
    checkEndbossEnergy() {
        this.endbossEnergy = 0;
        this.level.endboss.forEach((endboss) => {
            this.endbossEnergy += endboss.energy;
        })
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.translate(this.camera_x, 0); // Forwards

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.orcs);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.spellbooks);
        this.addObjectsToMap(this.level.potions);
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
        // mObj.drawFrame(this.ctx);
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