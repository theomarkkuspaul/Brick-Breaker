
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

Ball.prototype.reachedBoundary = function (startPos, boundary, comparitor) {
  if(comparitor == '>'){
    if(startPos > boundary){
      return true;
    }
  } else if (comparitor == '<') {
    if(boundary > startPos){
      return true;
    }
  }
  return false;
};

Ball.prototype.leftEdge = function () {
  return this.x - this.radius
};

Ball.prototype.rightEdge = function () {
  return this.x + this.radius
};

Ball.prototype.bottomEdge = function () {
  return this.y
};

Ball.prototype.topEdge = function () {
  return this.y + this.radius
};
