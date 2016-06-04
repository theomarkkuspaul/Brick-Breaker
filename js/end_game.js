var endGame = function(game){
  if ( missBall(game.ball, game.player)){
    if (game.player.lives == 0) {
      console.log('game over!')
      alert('Game Over!');
    }
  }
}

var missBall = function(ball, player){
  if ( ball.bottomEdge().y == canvas.height){
    return player.loseLife()
  }
  return false
}
