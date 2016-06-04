

var ballContactsPaddle = function(ball, paddle){
  if( ball.bottomEdge().y == paddle.topSide()){
    if (ball.x >= paddle.surfaceRange()[0] && ball.x <= paddle.surfaceRange()[1]){
      return true;
    }
  }
  return false
}

var paddleBounce = function(ball, paddle){
    if ( ball.x.isBetween(paddle.leftEdge()[0],paddle.leftEdge()[1])){
      sharpBounce('left', ball);
    } else if ( ball.x.isBetween(paddle.rightEdge()[1],paddle.rightEdge()[0])){
      sharpBounce('right', ball);
  } else {
    ball.reverseYVelocity()
  }
};

var sharpBounce = function (side, ball) {
  if (side == 'left'){
    console.log('sharp left')
    if ( ball.velocityX > 0 ){
      ball.velocityX += 3
      ball.velocityX = -ball.velocityX
      ball.reverseYVelocity()
    } else {
      ball.velocityX += -3
      ball.reverseYVelocity()
    }
  } else if (side == 'right'){
    console.log('sharp right')
    if ( ball.velocityX > 0 ){
      ball.velocityX += 3
      ball.reverseYVelocity()
    } else {
      ball.velocityX += -3
      ball.velocityX = -ball.velocityX
      ball.reverseYVelocity()
    }
  }
}

var ballContactsBrick = function(ball, bricks){
  for (var layer in bricks){
    bricks[layer].map(function(brick){
      if ( ball.topEdge().y == brick.verticalRange()[1]){
        if ( ball.topEdge().x >= brick.horizontalRange()[0] && ball.topEdge().x <= brick.horizontalRange()[1]){
          return true;
        };
      };
    })
  };
}

var brickBounce = function(ball, brick){

}
