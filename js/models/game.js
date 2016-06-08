function Game(ball, player, paddle) {
  this.player = player,
  this.ball = ball,
  this.paddle = paddle,
  this.startingLevel = 0, //when a new game starts, default to first level
  this.levels = [
    new LevelOne(),
    new LevelTwo(),
    new LevelThree(),
    new LevelFour()
  ]
  this.bricks = this.levels[0].bricks // loads first level
}

Game.prototype.currentLevel = function () {
  var completedLevels = 0
  for ( var levelIdx in this.levels ) {
    var levelBricksDestroyed = 0;
    for ( var brickIdx = 0; brickIdx < this.levels[levelIdx].bricks.length; brickIdx++ ){
      if ( this.levels[levelIdx].bricks[brickIdx] == null){
        levelBricksDestroyed += 1
      }
      if ( levelBricksDestroyed == this.levels[levelIdx].bricks.length){
        completedLevels += 1
      }
    }
  }
  return completedLevels + 1;
};

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
