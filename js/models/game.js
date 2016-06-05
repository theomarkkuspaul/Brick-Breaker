function Game(ball, player, paddle, bricks) {
  this.player = player || new Player(),
  this.ball = ball || new Ball(),
  this.paddle = paddle || new Paddle(),
  this.bricks = bricks || []
}
