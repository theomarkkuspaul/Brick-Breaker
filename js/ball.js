
var Ball = function(){
  this.x = 0,
  this.y = 100,
  this.velocityX = 5,
  this.velocityY = 2,
  this.radius = 3 ,
  this.color = 'green'
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
