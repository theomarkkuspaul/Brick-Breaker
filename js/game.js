
$(document).ready(function(){



  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var raf;

  var paddle = new Paddle()
  paddle.drawPaddle = function() {
    ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.fillStyle = "red";
  }

  var ball = new Ball()
  ball.drawBall = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }


  var move = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.drawBall()
    paddle.drawPaddle()
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    raf = window.requestAnimationFrame(move);

    if (ball.y + ball.velocityY > canvas.height || ball.y + ball.velocityY < 0) {
      ball.velocityY = -ball.velocityY;
    }
    if (ball.x + ball.velocityX > canvas.width || ball.x + ball.velocityX < 0) {
      ball.velocityX = -ball.velocityX;
    }

    if (ball.y > canvas.height - 30 ){
      if (ball.x > paddle.surfaceRange()[0] && ball.x < paddle.surfaceRange()[1]){
        console.log('hit');
        ball.velocityY = -ball.velocityY;
      };
    }

  }



  $(document).keydown(function(event){

    if(event.which == 37){ // move paddle left
      if(paddle.leftPaddleBoudary()){
        return paddle.x -= 10;
      } else {
        console.log('Reached left boundary')
      }

    }
    if(event.which == 39){ // move paddle right
      if(paddle.rightPaddleBoudary()){ //if paddle has reached the edge of the game screen, allow no further movement
        paddle.x += 10;
      } else {
        console.log('Reached right boundary')
      }
    }
  });

  raf = window.requestAnimationFrame(move);


});
