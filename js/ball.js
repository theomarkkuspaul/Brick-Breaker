
var Ball = function(){
  this.x = 0,
  this.y = 100,
  this.velocityX = 5,
  this.velocityY = 2,
  this.radius = 5 ,
  this.colour = 'green',
  this.center = function(){

  }
}

Ball.prototype.reachedBoundary = function () {
  if (this.y + this.velocityY > canvas.height || this.y + this.velocityY < 0) {
    // this.velocityY = -this.velocityY;
    this.reverseYVelocity()
  }
  if (this.x + this.velocityX > canvas.width || this.x + this.velocityX < 0) {
    // ball.velocityX = -ball.velocityX;
    this.reverseXVelocity()
  }
};

Ball.prototype.reverseXVelocity = function () {
  return this.velocityX = -this.velocityX
};

Ball.prototype.reverseYVelocity = function () {
  return this.velocityY = -this.velocityY
}

Ball.prototype.leftEdge = function () {
  return {
    "x":this.x - this.radius,
    "y":this.y + this.radius
  }
};

Ball.prototype.rightEdge = function () {
  return {
    "x":this.x + this.radius,
    "y":this.y + this.radius
  }
};

Ball.prototype.bottomEdge = function () {
  return {
    "x":this.x,
    "y":this.y + this.radius
  }
};

Ball.prototype.topEdge = function () {
  return {
    "x":this.x,
    "y":this.y
  }
};
