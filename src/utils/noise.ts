export default class Grain {
  private readonly patternSize: number;
  private readonly patternScaleX: number;
  private readonly patternScaleY: number;
  private readonly patternRefreshInterval: number;
  private patternAlpha: number;
  private readonly canvas: HTMLCanvasElement | null;
  private ctx: CanvasRenderingContext2D | null | undefined;
  private patternCanvas: HTMLCanvasElement;
  private readonly patternCtx: CanvasRenderingContext2D | null;
  private patternData?: ImageData;
  private patternPixelDataLength?: number;
  private frame: number;

  constructor(el: HTMLCanvasElement | null) {
    /**
     * Options
     * Increase the pattern size if visible pattern
     */
    this.patternSize = 150;
    this.patternScaleX = 1;
    this.patternScaleY = 1;
    this.patternRefreshInterval = 4; // 8
    this.patternAlpha = 28; // int between 0 and 255,

    /**
     * Create canvas
     */
    this.canvas = el;
    this.ctx = this.canvas?.getContext('2d');
    this.ctx?.scale(this.patternScaleX, this.patternScaleY);

    /**
     * Create a canvas that will be used to generate grain and used as a
     * pattern on the main canvas.
     */
    this.patternCanvas = document.createElement('canvas');
    this.patternCanvas.width = this.patternSize;
    this.patternCanvas.height = this.patternSize;
    this.patternCtx = this.patternCanvas.getContext('2d');

    if (this.patternCtx) {
      this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
      this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4
    }

    /**
     * Prebind prototype function, so later its easier to user
     */
    this.resize = this.resize.bind(this);
    this.loop = this.loop.bind(this);

    this.frame = 0;

    window.addEventListener('resize', this.resize);
    this.resize();

    window.requestAnimationFrame(this.loop);
  }

  resize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth * devicePixelRatio;
      this.canvas.height = window.innerHeight * devicePixelRatio;
    }
  }

  remove() {
    window.removeEventListener('resize', this.resize);
  }

  update() {
    const { patternPixelDataLength = 0, patternData, patternAlpha, patternCtx } = this;

    if (patternData) {
      // put a random shade of gray into every pixel of the pattern
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        // const value = (Math.random() * 255) | 0;
        const value = Math.random() * 255;

        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }

      patternCtx?.putImageData(patternData, 0, 0);
    }
  }

  draw() {
    if (this.canvas) {
      const { ctx, patternCanvas, canvas } = this;
      const { width, height } = canvas;

      if (ctx) {
        // clear canvas
        ctx.clearRect(0, 0, width, height);
        // fill the canvas using the pattern
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat') || '';
        ctx.fillRect(0, 0, width, height);
      }
    }
  }

  loop() {
    // only update grain every n frames
    const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
    if (shouldDraw) {
      this.update();
      this.draw();
    }

    window.requestAnimationFrame(this.loop);
  }
}
