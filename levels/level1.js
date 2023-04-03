let level1;

function initLevel() {

    level1 = new Level(
        [
            new Orc(),
            new Orc(),
            new Orc(),
            new Orc(),
            new Orc(),
            new Orc(),
            new Orc(),
            new Orc(),
            new Orc(),
        ], [
            new Endboss()
        ], [
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/battleground.png', -886.33333, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/back_land.png', -886.33333, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/back_decor.png', -886.33333, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/ground_decor.png', -886.33333, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/front_decor.png', -886.33333, -240),

            new BackgroundObject('./img/bg/PNG/game_background_5/layers/battleground.png', 0, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/back_land.png', 0, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/back_decor.png', 0, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/ground_decor.png', 0, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/front_decor.png', 0, -240),

            new BackgroundObject('./img/bg/PNG/game_background_5/layers/battleground.png', 886.33333, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/back_land.png', 886.33333, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/back_decor.png', 886.33333, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/ground_decor.png', 886.33333, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/front_decor.png', 886.33333, -240),

            new BackgroundObject('./img/bg/PNG/game_background_5/layers/battleground.png', 886.33333 * 2, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/back_land.png', 886.33333 * 2, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/back_decor.png', 886.33333 * 2, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/ground_decor.png', 886.33333 * 2, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/front_decor.png', 886.33333 * 2, -240),

            new BackgroundObject('./img/bg/PNG/game_background_5/layers/battleground.png', 886.33333 * 3, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/back_land.png', 886.33333 * 3, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/back_decor.png', 886.33333 * 3, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/ground_decor.png', 886.33333 * 3, 0),
            new BackgroundObject('./img/bg/PNG/game_background_5/layers/front_decor.png', 886.33333 * 3, -240),
        ], [
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
        ]
    );
}