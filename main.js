// We start by initializing Phaser
// Parameters: width of the game, height of the game, how to render the game, the HTML div that will contain the game
var Phaser,
    game = new Phaser.Game(1000, 700, Phaser.AUTO, 'game_div'),
    cursors,
    speed = 10,
    mainState = {
        shadowSprite: {},
        
        preload: function () {
            // Everything in this function will be executed at the beginning. That’s where we usually load the game’s assets (images, sounds, etc.)

            // Load a sprite in the game
            // Parameters: name of the sprite, path to the image
            //game.load.image('hello', 'assets/hello.png');  
            game.load.image('shadow', 'assets/bigshadow.png');
        },

        create: function () {
            // This function will be called after the preload function. Here we set up the game, display sprites, add labels, etc.

            // Display a sprite on the screen
            // Parameters: x position, y position, name of the sprite
            //this.hello_sprite = game.add.sprite(250, 300, 'hello');  
            this.shadowSprite = game.add.sprite(500, 450, 'shadow');
            cursors = game.input.keyboard.createCursorKeys();
        },

        update: function () {
            // This is where we will spend the most of our time. This function is called 60 times per second to update the game.
            if (cursors.left.isDown) {
                this.shadowSprite.x += (speed * -1);
            } else if (cursors.right.isDown) {
                this.shadowSprite.x += speed;
            } else if (cursors.up.isDown) {
                this.shadowSprite.y += (speed * -1);
            } else if (cursors.down.isDown) {
                this.shadowSprite.y += speed;
            }

        }
    };

// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
//game.stage.backgroundColor = '#FFF';
game.state.start('main');