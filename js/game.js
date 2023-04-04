let canvas;
let world;
let keyboard = new Keyboard();
let game_audio = new Audio('audio/game.mp3');
let level = 1;

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
    showMobileButtons();
    mobileButtonsPressEvents();
    initLevel();
    world = new World(canvas, keyboard);
    runGame();
}

function initLevel() {
    if (level == 1) {
        initLevel1();
    }
    if (level == 2) {
        initLevel2();
    }
}

function nextLevel() {
    level++;
    startGame();
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

// mobile controller 
function showMobileButtons() {
    document.getElementById('mobileControllerLeft').classList.remove('dNone');
    document.getElementById('mobileControllerRight').classList.remove('dNone');
}

function mobileButtonsPressEvents() {
    document.getElementById("btnRight").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.RIGHT = true;
        }

    });
    document.getElementById("btnRight").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.RIGHT = false;
        }

    });
    document.getElementById("btnLeft").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.LEFT = true;
        }

    });
    document.getElementById("btnLeft").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.LEFT = false;
        }

    });
    document.getElementById("btnJump").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.UP = true;
        }

    });
    document.getElementById("btnJump").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.UP = false;
        }

    });
    document.getElementById("btnFlash").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.SPACE = true;
        }

    });
    document.getElementById("btnFlash").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.SPACE = false;
        }

    });
    document.getElementById("btnFireball").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.ENTER = true;
        }

    });
    document.getElementById("btnFireball").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.ENTER = false;
        }

    });

}

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
            document.getElementById('endscreen').innerHTML = `
            <div>
                <span id="endscreenHeadline">Game<br>
                    over</span>
                <button class="btn" id="startGame" onclick="startGame()">Restart Game!</button>
            </div>`;
        }, 2000);
    }
    if (world.endbossEnergy == 0) {
        clearInterval(gameInterval);
        setTimeout(() => {
            document.getElementById('endscreen').classList.remove('dNone');
            document.getElementById('endscreen').innerHTML = `
            <div>
                <span id="endscreenHeadline">Victory<br><br></span>
                <button class="btn" id="startGame" onclick="nextLevel()">Next Level!</button>
            </div>`;
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