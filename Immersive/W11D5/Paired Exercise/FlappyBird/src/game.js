
export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }
}

const Level = require("./level.js");


class Game {
  constructor() {
    this.level;
  }

  function animate(Level) {
    Level.animate();
  }

  Game.prototype.restart() = function () {
    this.level = new Level(dim); 
  }
}