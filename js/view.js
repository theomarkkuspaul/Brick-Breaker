


function View(canvas, game) {

}

View.prototype.drawBall = function (ball, context) {
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
  context.closePath();
  context.fillStyle = "red";
};

View.prototype.drawPaddle = function(paddle, context) {
  context.fillRect(paddle.x,paddle.y,paddle.width,paddle.height);
  context.fillStyle = "blue";
}

View.prototype.drawBrick = function(brick, context){
   context.fillRect(brick.x,brick.y,brick.width,brick.height);
   context.fillStyle = brick.colour;
 }


  // var move = function(){
  //   $('canvas')[0].getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  //   $('canvas')[0].getContext('2d').fillRect(50,50,50,50);
  //   $('canvas')[0].getContext('2d').fillStyle = "red"
  //   $('canvas')[0].getContext('2d').fill()
  //   // paddle.drawPaddle()
  //   // for( var layer in bricks ){
  //   //   bricks[layer].map(function(brick){
  //   //     if ( brick != null || brick != undefined){
  //   //       brick.drawBrick();
  //   //     }
  //   //   });
  //   // }
  //   // ball.drawBall();
  //   // ctx.fill();
  //
  //   // ball.x += ball.velocityX;
  //   // ball.y += ball.velocityY;
  //   debugger;
  //   var raf = window.requestAnimationFrame(move);
  //   debugger;
  //   // = {
  //   //   "ball": ball,
  //   //   "bricks": bricks,
  //   //   "player": player
  //   // }
  //   // endGame(game);
  //
  //   // if(ballContactsPaddle(ball, paddle)){
  //   //   paddleBounce(ball, paddle);
  //   // }
  //   // for (var layer in bricks){
  //   //   for ( var i = 0; i < bricks[layer].length; i++){
  //   //     if (bricks[layer][i] == undefined){
  //   //     } else if ( ballContactsBrick(ball, bricks[layer][i])){
  //   //       return bricks[layer][i] = null
  //   //     }
  //   //   }
  //   // }
  // }

  // raf = window.requestAnimationFrame(move);



// this prototype function on the Number class takes two parameters: lower and upper. The function checks whether the number the function was called upon is between these two ranges; returns a boolean.

Number.prototype.isBetween = function(lower, upper){
  if ( this >= lower && this <= upper ) {
    return true
  }
  return false
}
