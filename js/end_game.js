var endGame = function(game){
  debugger;
  loseLife(game.ball, game.player)
}

var loseLife = function(ball, player){
  if ( ball.bottomEdge().y == canvas.height){
    console.log('game over!')
    alert('Game Over!');
  }
}
