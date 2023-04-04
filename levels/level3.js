// let currentlevel;

function initLevel3() {

    currentlevel = new Level(
        [
            new Orc2(),
            new Orc2(),
            new Orc2(),
            new Orc3(),
            new Orc3(),
        ], [
            new Endboss2(),
        ], [
            new BackgroundObject('img/bg/PNG/game_background_5/layers/battleground.png', -886.33333, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/back_land.png', -886.33333, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/back_decor.png', -886.33333, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/ground_decor.png', -886.33333, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/front_decor.png', -886.33333, -240),

            new BackgroundObject('img/bg/PNG/game_background_5/layers/battleground.png', 0, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/back_land.png', 0, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/back_decor.png', 0, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/ground_decor.png', 0, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/front_decor.png', 0, -240),

            new BackgroundObject('img/bg/PNG/game_background_5/layers/battleground.png', 886.33333, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/back_land.png', 886.33333, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/back_decor.png', 886.33333, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/ground_decor.png', 886.33333, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/front_decor.png', 886.33333, -240),

            new BackgroundObject('img/bg/PNG/game_background_5/layers/battleground.png', 886.33333 * 2, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/back_land.png', 886.33333 * 2, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/back_decor.png', 886.33333 * 2, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/ground_decor.png', 886.33333 * 2, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/front_decor.png', 886.33333 * 2, -240),

            new BackgroundObject('img/bg/PNG/game_background_5/layers/battleground.png', 886.33333 * 3, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/back_land.png', 886.33333 * 3, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/back_decor.png', 886.33333 * 3, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/ground_decor.png', 886.33333 * 3, 0),
            new BackgroundObject('img/bg/PNG/game_background_5/layers/front_decor.png', 886.33333 * 3, -240),
        ], [
            new Potion(),
            new Potion(),
            new Potion(),
            new Potion(),
            new Potion(),
            new Potion(),
            new Potion(),
            new Potion(),
            new Potion(),
            new Potion(),
        ], [
            new Spellbook(),
            new Spellbook(),
            new Spellbook(),
            new Spellbook(),
            new Spellbook(),
            new Spellbook(),
            new Spellbook(),
            new Spellbook(),
        ]
    );
}