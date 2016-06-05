
var Paddle = function(){
  this.height = 20,
  this.width = 100,
  this.colour = 'red',
  this.x = canvas.width / 2,
  this.y = canvas.height - 30,
  this.center = function(){
    return (this.x + (this.x + this.width)) / 2
  }
}


Paddle.prototype.surfaceRange = function () {
  var lower, upper;
  lower = this.center() - (this.width / 2)
  upper = this.center() + (this.width / 2)
  return [lower, upper]
};

Paddle.prototype.leftBoundary = function() {
  if(this.x == 0){
    return false
  }
  return true
};

Paddle.prototype.rightBoundary = function() {
  if(this.x == (canvas.width - this.width)){
    return false
  }
  return true
};

Paddle.prototype.topSide = function () {
  return this.y
};

Paddle.prototype.leftEdge = function () {
  var leftCorner, leftMedium;
  leftCorner = this.surfaceRange()[0];
  leftMedium = leftCorner + 20;
  return [leftCorner, leftMedium];
};

Paddle.prototype.rightEdge = function () {
  var rightCorner, rightMedium;
  rightCorner = this.surfaceRange()[1];
  rightMedium = rightCorner - 20;
  return [rightCorner, rightMedium];
};
