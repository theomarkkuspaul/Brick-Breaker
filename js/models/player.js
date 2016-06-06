
var Player = function(name){
  this.name = name || "Theo",
  this.lives = 3,
  this.points = 0
}

Player.prototype.loseLife = function () {
  return this.lives -= 1;
};
