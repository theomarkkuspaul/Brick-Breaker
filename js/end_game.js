var endGame = function(ball, bricks, player){
  loseLife()
}

var loseLife = function(ball, player){
  if ( ball.bottomEdge().y == canvas.height){
    console.log('game over!')
    alert('Game Over!');
  }
}
