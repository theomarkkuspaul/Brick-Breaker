
var Paddle = function(){
  height : 20,
  width : 100,
  x : (canvas.width) / 2,
  y : canvas.height - 30,
  draw : function(){
    ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.fillStyle = "red";
  }
}
