function Controller(game, view){
  this.game = game,
  this.view = view
}

$(document).ready(function(){

  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var view = new View(canvas)
  var game = new Game()
  // debugger;
  var controller = new Controller(game, view);
  debugger;
  view.raf = window.requestAnimationFrame(view.move);

});


var bricks = {
  "layer1": [new Brick(), new Brick(140), new Brick(230), new Brick(320), new Brick(410), new Brick(500), new Brick(590), new Brick(680)],
  "layer2":[new Brick(50, 80),new Brick(140, 80), new Brick(230, 80), new Brick(320, 80), new Brick(410, 80), new Brick(500, 80), new Brick(590, 80), new Brick(680, 80)]
 }
