
var Brick = function(x, y){
  this.x = x || 50,
  this.y = y || 50,
  this.height = 20,
  this.width = 80,
  this.colour = random_colour()
}

Brick.prototype.horizontalRange = function () {
  return [this.x, (this.x + this.width)]
};

Brick.prototype.verticalRange = function () {
  return [this.y, (this.y + this.height)]
};

function random_colour(){
  var colours = ["red", "orange", "yellow"];
  return colours[Math.floor(Math.random() * colours.length)]
}
