
var Brick = function(x, y){
  this.x = x || 50,
  this.y = y || 50,
  this.height = 20,
  this.width = 80,
  this.colour = "blue"
}

Brick.prototype.horizontalArea = function () {
  return {"left": this.x, "right": this.x + this.width}
};
