


function View(canvas) {
  // this.canvas = canvas,
  // this.context = this.canvas.getContext("2d")
  this.ball = new Ball()
  this.move = function(){

    this.canvas = canvas
    this.context = this.canvas.getContext("2d");
    var ctx = this.context

    // debugger;
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.context.fillRect(50,50,50,50);
    this.context.fillStyle = "red"
    this.context.fill()

    this.ball.drawBall = function(){
      this.ball.reachedBoundary();
      this.context.beginPath();
      this.context.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI*2, true);
      this.context.closePath();
      this.context.fillStyle = this.ball.colour;
    }.bind(this);
    this.ball.drawBall();
    this.ball.x += this.ball.velocityX;
    this.ball.y += this.ball.velocityY;

    // paddle.drawPaddle()
    // for( var layer in bricks ){
    //   bricks[layer].map(function(brick){
    //     if ( brick != null || brick != undefined){
    //       brick.drawBrick();
    //     }
    //   });
    // }

    var move = this.move
    this.raf = window.requestAnimationFrame(move);
  }.bind(this);
  // this.move()

}


  // paddle.drawPaddle = function() {
  //   ctx.fillRect(this.x,this.y,this.width,this.height);
  //   ctx.fillStyle = this.colour;
  // }
  //
  // ball.drawBall = function(){
  //   ball.reachedBoundary();
  //   ctx.beginPath();
  //   ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
  //   ctx.closePath();
  //   ctx.fillStyle = this.colour;
  // }
  //
  //  Brick.prototype.drawBrick = function(){
  //    ctx.fillRect(this.x,this.y,this.width,this.height);
  //    ctx.fillStyle = this.colour;
  //  }

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
  //   // game = {
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


var refreshRate = 10, leftKeyDown = false, rightKeyDown = false

  $(document).keydown(function(event){

    if(event.which == 37){
      leftKeyDown = true
    };
    if(event.which == 39){
      rightKeyDown = true
    };
  });

  $(document).keyup(function(event){

    if(event.which == 37){
      leftKeyDown = false
    };
    if(event.which == 39){
      rightKeyDown = false
    };
  });

  var tick = function(){

    if(leftKeyDown){
      if(paddle.leftBoundary()){
        paddle.x -= 5;
      } else {
        console.log('Reached left boundary')
      }
    } else if(rightKeyDown){
      if(paddle.rightBoundary()){
        paddle.x += 5;
      } else {
        console.log('Reached right boundary') //if paddle has reached the edge of the game screen, allow no further movement
      }
    }

    setTimeout(tick, refreshRate);
  }

  tick();

  // raf = window.requestAnimationFrame(move);



// this prototype function on the Number class takes two parameters: lower and upper. The function checks whether the number the function was called upon is between these two ranges; returns a boolean.

Number.prototype.isBetween = function(lower, upper){
  if ( this >= lower && this <= upper ) {
    return true
  }
  return false
}
