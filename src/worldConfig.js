class WorldConfig {
  
  constructor(canvas) {
    this.canvas = canvas;

    this.PTM = 32;
    
    this.canvasOffset = {
      x: 0,
      y: 0
    }

    this.mousePosPixel = {
      x: 0,
      y: 0
    }
  }

  getWorldPointFromPixelPoint(pixelPoint) {
    return {
      x: (pixelPoint.x - this.canvasOffset.x)/PTM,
      y: (pixelPoint.y - (canvas.height - canvasOffset.y))/PTM
    };
  }

  updateMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    this.mousePosPixel = {
      x: evt.clientX - rect.left,
      y: canvas.height - (evt.clientY - rect.top)
    };
    this.mousePosWorld = this.getWorldPointFromPixelPoint(this.mousePosPixel);
  }
}

export default new WorldConfig();
