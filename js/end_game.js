var endGame = function(game){

  if (game.player.lives > 0) {
    missBall(game.ball, game.player)
  } else if (game.player.lives <= 0 ){
    console.log('game over!')
    alert('Game Over!');
    window.location.reload()
  }
}

var missBall = function(ball, player){
  if ( ball.bottomEdge().y == canvas.height){
    return player.loseLife()
  }
  return false
}
