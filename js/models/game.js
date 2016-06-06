function Game(ball, player, paddle) {
  this.player = player,
  this.ball = ball,
  this.paddle = paddle,
  this.levels = [new LevelOne(), new LevelTwo(), new LevelThree()]
  this.bricks = this.levels[0].bricks // loads first level
}

// Game.prototype.loadLevel = function (level) {
//   return level.bricks
// }

Game.prototype.endGame = function () {
  if (this.player.lives > 0) {
    if (this.ball.missBall()){
      this.player.loseLife()
      console.log( "lose life" )
    }
  } else if (this.player.lives <= 0 ){
    gameOver()
  }
  if (stillBricks(this.levels[0])) {
    this.loadNextLevel()
  }
};

Game.prototype.loadNextLevel = function () {
  this.bricks = this.levels[1].bricks
}

function gameOver() {
  console.log('game over!')
  alert('Game Over!');
  window.location.reload()
}

function winGame() {
  console.log("You Win!")
  alert("You are the Winner")
  window.location.reload()
}

var stillBricks = function (level) {
  var counter = 0
  level.bricks.map(function(brick){
    if (brick == null){
      counter += 1;
    };
  });
  if (counter == level.bricks.length){
    return true
  }
}
