
$(document).ready(function(){

  var paddle = new Paddle()
  paddle.draw =  function() {
    ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.fillStyle = "red";
  }
  debugger;
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var raf;

  var ball = {
    x : 0,
    y : 100,
    velocityX : 5,
    velocityY : 2,
    radius : 3 ,
    color : 'green',
    draw : function(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };

  var move = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw()
    paddle.draw(ctx)
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    raf = window.requestAnimationFrame(move);

    if (ball.y + ball.velocityY > canvas.height || ball.y + ball.velocityY < 0) {
      ball.velocityY = -ball.velocityY;
    }
    if (ball.x + ball.velocityX > canvas.width || ball.x + ball.velocityX < 0) {
      ball.velocityX = -ball.velocityX;
    }
  }

  raf = window.requestAnimationFrame(move);

  // $('#canvas').on('mouseover', function(event){
  //   console.log('enter');
  //   // raf = window.requestAnimationFrame(move);
  // });

  // $('#canvas').on('mouseout', function(event){
  //   console.log('exit');
  //   window.cancelAnimationFrame(raf);
  // });

});
