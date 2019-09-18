class View{
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (let towers = 0; towers < 3; towers++){
      let $ul = $('<ul>'); 
      for (let col = 0; col < 3; col++) {
        let $li = $('<li>');
        $ul.append($li);
      }
      
      this.$el.append($ul);
    }
  }

  render() {
    const towers = this.game.towers
    const disk = this.$li.find('li');


    towers.forEach(function(tower, towerIdx) {
      tower.forEach(function(disks, diskIdx) {
        $li.addClass(`disk $(d)`)
      });
    });
  }
}

module.exports = View;


  