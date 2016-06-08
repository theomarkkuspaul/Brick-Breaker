function Controller(game, view){

  var refreshRate = 7, leftKeyDown = false, rightKeyDown = false

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


  this.game = game,
  this.view = view,
  this.paddleMove = function () {
    if(leftKeyDown){
      if(this.game.paddle.leftBoundary()){
        this.game.paddle.x -= 5;
      } else {
        console.log('Reached left boundary')
      }
    } else if(rightKeyDown){
      if(this.game.paddle.rightBoundary()){
        this.game.paddle.x += 5;
      } else {
        console.log('Reached right boundary') //if paddle has reached the edge of the game screen, allow no further movement
      }
    }

    setTimeout(this.paddleMove, refreshRate);

  }.bind(this),

  this.run = function(){

      this.canvas = canvas
      this.context = this.canvas.getContext("2d");

      this.print();
      this.moveBall()
      this.game.endGame();

      this.raf = window.requestAnimationFrame(this.run);
  }.bind(this);
  this.run()
}



Controller.prototype.print = function () {
  this.context.clearRect(0, 0, canvas.width, canvas.height);
  this.view.drawPaddle(this.game.paddle, this.context);

  for (var brick in this.game.bricks){
    if (this.game.bricks[brick] != undefined || this.game.bricks[brick] != null){
      this.view.drawBrick(this.game.bricks[brick], this.context)
    }
  }
  this.context.fill();
  this.view.drawBall(this.game.ball, this.context);

}

Controller.prototype.moveBall = function () {
  this.view.displayLevel(this.game.currentLevel())
  this.game.ball.move()
  if (this.ballContactsPaddle()){
    this.paddleBounce()
  }
  for ( var i = 0; i < this.game.bricks.length; i++){
    if (this.game.bricks[i] == undefined){
    } else if ( ballContactsBrick(this.game.ball, this.game.bricks[i])){
      this.game.player.points += this.game.bricks[i].pointValue()
      this.view.displayPoints(this.game.player.points)
      return this.game.bricks[i] = null
    }
  }
};

Controller.prototype.ballContactsPaddle = function () {
  if( this.game.ball.bottomEdge().y == this.game.paddle.topSide()){
    if (this.game.ball.x >= this.game.paddle.surfaceRange()[0] && this.game.ball.x <= this.game.paddle.surfaceRange()[1]){
      return true;
    }
  }
};

Controller.prototype.paddleBounce = function () {
  if ( this.game.ball.x.isBetween(this.game.paddle.leftEdge()[0],this.game.paddle.leftEdge()[1])){
    sharpBounce('left', this.game.ball);
  } else if ( this.game.ball.x.isBetween(this.game.paddle.rightEdge()[1],this.game.paddle.rightEdge()[0])){
    sharpBounce('right', this.game.ball);
} else {
  this.game.ball.reverseYVelocity()
}
};

$(document).ready(function(){

  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var game = new Game(new Ball(), new Player(), new Paddle())
  var view = new View(canvas, game)
  var controller = new Controller(game, view);
  controller.paddleMove();
});
