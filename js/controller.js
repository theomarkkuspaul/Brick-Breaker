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
      this.raf = window.requestAnimationFrame(this.run);

  }.bind(this);
  this.run()
}

Controller.prototype.print = function () {
  this.context.clearRect(0, 0, canvas.width, canvas.height);
  this.view.drawBall(this.game.ball, this.context);
  this.view.drawPaddle(this.game.paddle, this.context);
  this.context.fill();
};

Controller.prototype.moveBall = function () {
  this.game.ball.x += this.game.ball.velocityX;
  this.game.ball.y += this.game.ball.velocityY;
};

$(document).ready(function(){

  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var game = new Game()
  var view = new View(canvas, game)
  var controller = new Controller(game, view);
  controller.paddleMove();
});


// var bricks = {
//   "layer1": [new Brick(), new Brick(140), new Brick(230), new Brick(320), new Brick(410), new Brick(500), new Brick(590), new Brick(680)],
//   "layer2":[new Brick(50, 80),new Brick(140, 80), new Brick(230, 80), new Brick(320, 80), new Brick(410, 80), new Brick(500, 80), new Brick(590, 80), new Brick(680, 80)]
//  }
