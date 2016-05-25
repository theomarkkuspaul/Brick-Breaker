

var ballContactsPaddle = function(ball, paddle){

  if( ball.bottomEdge() == paddle.topSide()){
    if ( ball.x.isBetween(paddle.surfaceRange()[0], paddle.center()) ){

      if ( ball.x.isBetween(paddle.leftEdge()[0],paddle.leftEdge()[1])){
        console.log('sharp left')
        if ( ball.velocityX > 0 ){
          ball.velocityX += 3
          ball.velocityX = -ball.velocityX
          ball.reverseYVelocity()
        } else {
          ball.velocityX += 3
          ball.reverseYVelocity()
        }
      } else {

        ball.reverseYVelocity()
      }

    } else if ( ball.x.isBetween(paddle.center(), paddle.surfaceRange()[1])
  ) {
    if ( ball.x.isBetween(paddle.rightEdge()[1],paddle.rightEdge()[0])){
      console.log('sharp right')
      if ( ball.velocityX > 0 ){
        ball.velocityX += 3
        ball.reverseYVelocity()
      } else {
        ball.velocityX += 3
        ball.velocityX = -ball.velocityX
        ball.reverseYVelocity()
      }
    } else {

      ball.reverseYVelocity()
    }

  }

}
}
