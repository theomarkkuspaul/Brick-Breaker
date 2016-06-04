
var Brick = function(x, y){
  this.x = x || 50,
  this.y = y || 50,
  this.height = 20,
  this.width = 80,
  this.colour = "blue"
}

Brick.prototype.drawBrick = function(){
  ctx.fillRect(this.x,this.y,this.width,this.height);
  ctx.fillStyle = this.colour;
}
