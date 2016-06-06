
var Ball = function(){
  this.x = (canvas.width/2) + 50,
  this.y = canvas.height - 40,
  this.velocityX = 5,
  this.velocityY = 2,
  this.radius = 5 ,
  this.colour = 'green',
  this.center = function(){

  }
}

Ball.prototype.move = function () {
  if (!this.reachedBoundary()){
    this.x += this.velocityX;
    this.y += this.velocityY;
  };
}

Ball.prototype.reachedBoundary = function () {
  if (this.y + this.velocityY < 0) {
    // this.velocityY = -this.velocityY;
    return this.reverseYVelocity()
  }
  if (this.y + this.velocityY > canvas.height) {
    this.missBall();
  }
  if (this.x + this.velocityX > canvas.width || this.x + this.velocityX < 0) {
    // ball.velocityX = -ball.velocityX;
    return this.reverseXVelocity()
  }
};

Ball.prototype.missBall = function () {
    if ( this.bottomEdge().y >= canvas.height){
      this.reverseYVelocity();
      return true;
    };
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
    "y":this.y
  }
};

Ball.prototype.topEdge = function () {
  return {
    "x":this.x,
    "y":this.y
  }
};
