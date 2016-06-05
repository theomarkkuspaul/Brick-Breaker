function Game(ball, player, paddle, bricks) {
  this.player = player || new Player(),
  this.ball = ball || new Ball(),
  this.paddle = paddle || new Paddle(),
  this.bricks = bricks || [new Brick(), new Brick(140), new Brick(230), new Brick(320), new Brick(410), new Brick(500), new Brick(590), new Brick(680), new Brick(50, 80),new Brick(140, 80), new Brick(230, 80), new Brick(320, 80), new Brick(410, 80), new Brick(500, 80), new Brick(590, 80), new Brick(680, 80)
  ]
}
