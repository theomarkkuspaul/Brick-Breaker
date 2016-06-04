
var Brick = function(x, y){
  this.x = x || 50,
  this.y = y || 50,
  this.height = 20,
  this.width = 80,
  this.colour = "blue"
}

Brick.prototype.horizontalRange = function () {
  return [this.x, (this.x + this.width)]
};

Brick.prototype.verticalRange = function () {
  return [this.y, (this.y + this.height)]
};
