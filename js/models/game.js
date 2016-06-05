function Game(ball, player, paddle, bricks) {
  this.player = player || new Player(),
  this.ball = ball || new Ball(),
  this.paddle = paddle || new Paddle(),
  this.bricks = bricks || [new Brick(), new Brick(140), new Brick(230), new Brick(320), new Brick(410), new Brick(500), new Brick(590), new Brick(680), new Brick(50, 80),new Brick(140, 80), new Brick(230, 80), new Brick(320, 80), new Brick(410, 80), new Brick(500, 80), new Brick(590, 80), new Brick(680, 80)
  ]
}

Game.prototype.endGame = function () {
  if (this.player.lives > 0) {
    missBall(this.ball, this.player)
  } else if (this.player.lives <= 0 ){
    gameOver()
  }
  if (stillBricks(this.bricks)) {
    winGame()
  }
};


var missBall = function(ball, player){
  if ( ball.bottomEdge().y == canvas.height){
    console.log("Lost Life")
    return player.loseLife()
  };
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

var stillBricks = function (bricks) {
  var counter = 0
  bricks.map(function(brick){
    if (brick == null){
      counter += 1;
    };
  });
  if (counter == 16){
    return true
  }
}
