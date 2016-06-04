var endGame = function(){

}

var loseLife = function(){
  if ( ball.bottomEdge().y == canvas.height){
    console.log('game over!')
    alert('Game Over!');
  }
}
