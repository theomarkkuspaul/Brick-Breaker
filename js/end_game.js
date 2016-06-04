var endGame = function(game){
  missBall(game.ball, game.player)
}

var missBall = function(ball, player){
  if ( ball.bottomEdge().y == canvas.height){
    debugger;
    console.log('game over!')
    alert('Game Over!');
  }
}
