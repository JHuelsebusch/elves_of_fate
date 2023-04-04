let canvas;
let world;
let keyboard = new Keyboard();
let game_audio = new Audio('audio/game.mp3');

function init() {
    canvas = document.getElementById('canvas');




}

function continueGame() {
    game_audio.play();
    document.getElementById('gameDescription').classList.remove('dNone');
    document.getElementById('startBtn').classList.remove('dNone');
    document.getElementById('continueBtn').classList.add('dNone');
}

function startGame() {
    hideScreens();
    initLevel();
    world = new World(canvas, keyboard);
    runGame();
}

function hideScreens() {
    document.getElementById('startscreen').classList.add('dNone');
    document.getElementById('endscreen').classList.add('dNone');
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 87) {
        keyboard.UP = true;
    }
    if (e.keyCode == 83) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 13) {
        keyboard.ENTER = true;
    }
})
window.addEventListener("keyup", (e) => {
    if (e.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 87) {
        keyboard.UP = false;
    }
    if (e.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 13) {
        keyboard.ENTER = false;
    }
})

function runGame() {
    let gameInterval = setInterval(() => {
        setHighscore();
        checkGameOver(gameInterval);
    }, 1000 / 20);
}

function setHighscore() {
    let score = world.score;
    if (score >= 0) {
        highscore = '0' + '0' + '0' + '0' + '0' + '0' + score;
    }
    if (score >= 10) {
        highscore = '0' + '0' + '0' + '0' + '0' + score;
    }
    if (score >= 100) {
        highscore = '0' + '0' + '0' + '0' + score;
    }
    if (score >= 1000) {
        highscore = '0' + '0' + '0' + score;
    }
    if (score >= 10000) {
        highscore = '0' + '0' + score;
    }
    if (score >= 100000) {
        highscore = score;
    }
    if (score >= 1000000) {
        highscore = score;
    }
    document.getElementById('score').innerHTML = highscore;
}

function checkGameOver(gameInterval) {
    if (world.elf.energy == 0) {
        clearInterval(gameInterval);
        setTimeout(() => {
            document.getElementById('endscreen').classList.remove('dNone');
            document.getElementById('endscreenHeadline').innerHTML = 'Game<br>over';
        }, 2000);
    }
    if (world.endbossEnergy == 0) {
        clearInterval(gameInterval);
        setTimeout(() => {
            document.getElementById('endscreen').classList.remove('dNone');
            document.getElementById('endscreenHeadline').innerHTML = `Victory<br><br>`;
        }, 2000);
    }
}

function howToPlay() {
    document.getElementById('gameDescription').innerHTML = createHowToPlay();
}

function createHowToPlay() {
    return `
    <div class="howToPlay">
        <div>
            <img src="img/weapons/sword.png" class="rotateRight">Walk Right: D
        </div>
        <div>
            <img src="img/weapons/sword.png" class="rotateLeft">Walk Left: A
        </div>
        <div>
            <img src="img/weapons/sword.png" alt="">Jump: W
        </div>
    </div>
    <div class="howToPlay">
        <div>
            <img src="img/flash/flash06.png" alt="">Flash (Requires 5 Mana): Space
        </div>
        <div>
            <img src="img/FIREBALL/22.png" alt="">Fireball (Requires 30 Mana): Enter
        </div>
    </div>`
}