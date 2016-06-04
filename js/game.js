
$(document).ready(function(){


  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var raf, game;

  var player = new Player()
  var paddle = new Paddle()
  paddle.drawPaddle = function() {
    ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.fillStyle = this.colour;
  }

  var ball = new Ball()
  ball.drawBall = function(){
    ball.reachedBoundary();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.colour;
  }

  var bricks = {
    "layer1": [new Brick(), new Brick(140), new Brick(230), new Brick(320), new Brick(410), new Brick(500), new Brick(590), new Brick(680)],
    "layer2":[new Brick(50, 80),new Brick(140, 80), new Brick(230, 80), new Brick(320, 80), new Brick(410, 80), new Brick(500, 80), new Brick(590, 80), new Brick(680, 80)]
   }

   Brick.prototype.drawBrick = function(){
     ctx.fillRect(this.x,this.y,this.width,this.height);
     ctx.fillStyle = this.colour;
   }

  var move = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paddle.drawPaddle()
    for( var layer in bricks ){
      bricks[layer].map(function(brick){
        if ( brick != null || brick != undefined){
          brick.drawBrick();
        }
      });
    }
    ball.drawBall();
    ctx.fill();

    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    raf = window.requestAnimationFrame(move);

    game = {
      "ball": ball,
      "bricks": bricks,
      "player": player
    }
    endGame(game);

    if(ballContactsPaddle(ball, paddle)){
      paddleBounce(ball, paddle);
    }
    for (var layer in bricks){
      for ( var i = 0; i < bricks[layer].length; i++){
        if (bricks[layer][i] == undefined){
        } else if ( ballContactsBrick(ball, bricks[layer][i])){
          return bricks[layer][i] = null
        }
      }
    }
  }


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

  raf = window.requestAnimationFrame(move);

});

// this prototype function on the Number class takes two parameters: lower and upper. The function checks whether the number the function was called upon is between these two ranges; returns a boolean.

Number.prototype.isBetween = function(lower, upper){
  if ( this >= lower && this <= upper ) {
    return true
  }
  return false
}
