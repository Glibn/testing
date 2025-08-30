export default class Pleyer {
  constructor(
    ctx,
    width,
    height,
    minJumpHeight,
    maxJumpHeight,
    scaleRatio
  ) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.width = width;
    this.height = height;
    this.minJumpHeight = minJumpHeight;
    this.maxJumpHeight = maxJumpHeight;
    this.scaleRatio = scaleRatio;

    this.x = 10 * scaleRatio;
    this.y =
      this.canvas.height -
      this.height -
      1.5 * scaleRatio;
    this.standingStillImage = new Image();
  }
  draw() {}
}
