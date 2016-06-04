var endGame = function(game){

  if (game.player.lives > 0) {
    missBall(game.ball, game.player)
  } else if (game.player.lives <= 0 ){
    gameOver()
  }
  if (stillBricks(game.bricks)) {
    winGame()
  }
}

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
  for (var layer in bricks){
    bricks[layer].map(function(brick){
      if (brick == null){
        counter += 1;
      };
    });
  }
  if (counter == 16){
    return true
  }
}
