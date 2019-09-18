class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', 'li', (e) => {
      const $square = $(e.currentTarget);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const player = this.game.currentPlayer;

    try {
      this.game.playMove(pos);
    } catch (event) {
      alert("Bad move");
      return;
    }

    $square.addClass(player)

    if (this.game.isOver()) {
      this.$el.addClass("end");
      if (this.game.winner()) {
        this.$el.addClass("winner");
        alert(`YOU THE BOSS, player ${player}`);
      } else {
        this.$el.addClass("loser");
      }
    } 
  }

  setupBoard() {
    const $ul = $("<ul>");

    for (let i = 0; i < 3; i++) { // rows
      for (let j = 0; j < 3; j++) { // columns 
        let $li = $("<li>");
        $li.data('pos', [i, j]);
        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
