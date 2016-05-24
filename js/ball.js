
var Ball = function(){
  this.x = 0,
  this.y = 100,
  this.velocityX = 2.5,
  this.velocityY = 1,
  this.radius = 3 ,
  this.colour = 'green'
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
  return this.y - this.radius
};

Ball.prototype.topEdge = function () {
  return this.y + this.radius
};
