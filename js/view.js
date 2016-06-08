function View() {
  this.points = $("#points"),
  this.level = $("#level"),
  this.yVal = $("#y-val"),
  this.xVal = $("#x-val")
}

View.prototype.drawBall = function (ball, context) {
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
  context.closePath();
  context.fillStyle = "red";
  this.displayX(ball);
  this.displayY(ball);
};

View.prototype.drawPaddle = function(paddle, context) {
  context.fillRect(paddle.x,paddle.y,paddle.width,paddle.height);
  context.fillStyle = "blue";
}

View.prototype.drawBrick = function(brick, context){
   context.fillRect(brick.x,brick.y,brick.width,brick.height);
   context.fillStyle = brick.colour;
 }

View.prototype.displayPoints = function (pointValue) {
  return this.points.html(pointValue);
};

View.prototype.displayLevel = function (levelNum) {
  return this.level.html(levelNum);
}



View.prototype.displayX = function (ball) {
  return this.xVal.html(ball.x)
}

View.prototype.displayY = function (ball) {
  return this.yVal.html(ball.y)
}
// this prototype function on the Number class takes two parameters: lower and upper. The function checks whether the number the function was called upon is between these two ranges; returns a boolean.

Number.prototype.isBetween = function(lower, upper){
  if ( this >= lower && this <= upper ) {
    return true
  }
  return false
}
