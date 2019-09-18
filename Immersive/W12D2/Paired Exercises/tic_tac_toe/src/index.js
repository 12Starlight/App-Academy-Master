const View = require('./ttt-view');
const Game = require('../solution/game');

  $(() => {
    let game = new Game();
    let el = $('.ttt');
    let view = new View(game, el);
  });

  