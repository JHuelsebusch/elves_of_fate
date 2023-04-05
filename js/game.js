let canvas;
let world;
let keyboard = new Keyboard();
let game_audio = new Audio('audio/game.mp3');
let level = 1;
let soundMuted = false;

function init() {
    canvas = document.getElementById('canvas');
}

function continueGame() {
    game_audio.play();
    game_audio.loop = true;
    document.getElementById('gameDescription').classList.remove('dNone');
    document.getElementById('startBtn').classList.remove('dNone');
    document.getElementById('continueBtn').classList.add('dNone');
}

function soundMute() {
    let volumeIcon = document.getElementById('volume');
    let volumeIconGame = document.getElementById('volumeGame');
    if (soundMuted) {
        soundMuted = false;
        volumeIcon.src = 'img/icon/volume.png';
        volumeIconGame.src = 'img/icon/volume.png';
        game_audio.muted = false;
    } else {
        soundMuted = true;
        volumeIcon.src = 'img/icon/mute.png';
        volumeIconGame.src = 'img/icon/mute.png';
        game_audio.muted = true;
    }
    if (world) {
        setWorldAudio();
    }
}

function setWorldAudio() {
    if (soundMuted) {
        world.soundMuted = true;
    } else {
        world.soundMuted = false;
    }
}

function startGame() {
    hideScreens();
    showMobileButtons();
    mobileButtonsPressEvents();
    initLevel();
    world = new World(canvas, keyboard);
    setWorldAudio();
    runGame();
}

function initLevel() {
    if (level == 1) {
        initLevel1();
    }
    if (level == 2) {
        initLevel2();
    }
    if (level == 3) {
        initLevel3();
    }
    if (level == 4) {
        initLevel4();
    }
    if (level == 5) {
        initLevel5();
    }
    if (level > 5) {
        level = 1;
        initLevel();
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


function runGame() {

    let gameInterval = setInterval(() => {
        setHighscore();
        checkGameOver(gameInterval);
    }, 1000 / 20);
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
            document.getElementById('endscreen').innerHTML = createGameOver();
        }, 2000);
    }
    if (world.endbossEnergy == 0) {
        clearInterval(gameInterval);
        setTimeout(() => {
            document.getElementById('endscreen').classList.remove('dNone');
            document.getElementById('endscreen').innerHTML = createVictory();
        }, 2000);
    }
}

function createGameOver() {
    return `
    <div>
        <span id="endscreenHeadline">Game<br>
          over</span>
        <button class="btn" id="startGame" onclick="startGame()">Restart Game!</button>
    </div>`
}

function createVictory() {
    return `
    <div>
        <span id="endscreenHeadline">Victory<br><br></span>
        <button class="btn" id="startGame" onclick="nextLevel()">Next Level!</button>
    </div>`
}

function howToPlay() {
    let howToPlayClass = document.getElementById('howToPlay').classList;
    let gameDescriptionClass = document.getElementById('gameDescription').classList;

    if (howToPlayClass.contains('dNone')) {
        howToPlayClass.remove('dNone');
        gameDescriptionClass.add('dNone');
    } else {
        howToPlayClass.add('dNone');
        gameDescriptionClass.remove('dNone');
    }
}