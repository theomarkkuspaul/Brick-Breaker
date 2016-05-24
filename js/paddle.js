
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

Paddle.prototype.leftPaddleBoundary = function() {
  if(this.x == 0){
    return false
  }
  return true
};

Paddle.prototype.rightPaddleBoundary = function() {
  if(this.x == (canvas.width - this.width)){
    return false
  }
  return true
};

Paddle.prototype.topEdge = function () {
  return this.y
};
