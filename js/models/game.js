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
  return completedLevels; //should this return the object instead of in a way the user can read?
};


Game.prototype.endGame = function () {
  if (this.player.lives > 0) {
    if (this.ball.missBall()){
      this.player.loseLife()
      console.log( "lose life" )
    }
  } else if (this.player.lives <= 0 ){
    gameOver()
  }

  if (stillBricks(this.levels[this.currentLevel()-1])) { //have to minus two because currentLevel adds one for UI level display and I did not account for 0 indexing.
    this.loadNextLevel()
  }
};

Game.prototype.loadNextLevel = function () {
  this.bricks = this.levels[this.currentLevel()].bricks
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
  if(level == undefined){
    return;
  }
  var counter = 0
  for (var brickIdx = 0; brickIdx < level.bricks.length; brickIdx++ ){
    if (level.bricks[brickIdx] == null){
      counter += 1;
    };
  };
  if (counter == level.bricks.length){
    return true
  }
}
