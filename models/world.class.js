class World {
    elf = new Elf()
    orcs = [
        new Orc(),
        new Orc(),
        new Orc(),
    ];
    backgroundObjects = [
        new BackgroundObject('./img/bg/PNG/game_background_4/layers/battleground.png', 0, 0),
        new BackgroundObject('./img/bg/PNG/game_background_4/layers/back_land.png', 0, 0),
        new BackgroundObject('./img/bg/PNG/game_background_4/layers/back_decor.png', 0, 0),
        new BackgroundObject('./img/bg/PNG/game_background_4/layers/front_decor.png', 0, -240),
        new BackgroundObject('./img/bg/PNG/game_background_4/layers/ground_decor.png', 0, 0),
    ];
    ctx;
    canvas;


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.elf);
        this.addObjectsToMap(this.orcs);


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