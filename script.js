tele = {
  static: function() {
    var viewWidth,
<<<<<<< HEAD
        viewHeight,
        canvas = document.getElementById("canvas"),
        ctx;

    // change these settings
    var patternSize = 128,
        patternScaleX = 1.5,
        patternScaleY = 1.5,
        patternRefreshInterval = 6,
        patternAlpha = 20; // int between 0 and 255,

    var patternPixelDataLength = patternSize * patternSize * 4,
        patternCanvas,
        patternCtx,
        patternData,
        frame = 0;

    window.onload = function() {
        initCanvas();
        initGrain();
        requestAnimationFrame(loop);
=======
      viewHeight,
      canvas = document.getElementById("canvas"),
      ctx;

    // change these settings
    var patternSize = 128,
      patternScaleX = 1.5,
      patternScaleY = 1.5,
      patternRefreshInterval = 6,
      patternAlpha = 20; // int between 0 and 255,

    var patternPixelDataLength = patternSize * patternSize * 4,
      patternCanvas,
      patternCtx,
      patternData,
      frame = 0;

    window.onload = function() {
      initCanvas();
      initGrain();
      requestAnimationFrame(loop);
>>>>>>> ee2e0f1... re-commit
    };

    // create a canvas which will render the grain
    function initCanvas() {
<<<<<<< HEAD
        viewWidth = canvas.width = canvas.clientWidth;
        viewHeight = canvas.height = canvas.clientHeight;
        ctx = canvas.getContext('2d');

        ctx.scale(patternScaleX, patternScaleY);
=======
      viewWidth = canvas.width = canvas.clientWidth;
      viewHeight = canvas.height = canvas.clientHeight;
      ctx = canvas.getContext('2d');

      ctx.scale(patternScaleX, patternScaleY);
>>>>>>> ee2e0f1... re-commit
    }

    // create a canvas which will be used as a pattern
    function initGrain() {
<<<<<<< HEAD
        patternCanvas = document.createElement('canvas');
        patternCanvas.width = patternSize;
        patternCanvas.height = patternSize;
        patternCtx = patternCanvas.getContext('2d');
        patternData = patternCtx.createImageData(patternSize, patternSize);
=======
      patternCanvas = document.createElement('canvas');
      patternCanvas.width = patternSize;
      patternCanvas.height = patternSize;
      patternCtx = patternCanvas.getContext('2d');
      patternData = patternCtx.createImageData(patternSize, patternSize);
>>>>>>> ee2e0f1... re-commit
    }

    // put a random shade of gray into every pixel of the pattern
    function update() {
<<<<<<< HEAD
        var value;

        for (var i = 0; i < patternPixelDataLength; i += 4) {
            value = (Math.random() * 255) | 0;

            patternData.data[i    ] = value;
            patternData.data[i + 1] = value;
            patternData.data[i + 2] = value;
            patternData.data[i + 3] = patternAlpha;
        }

        patternCtx.putImageData(patternData, 0, 0);
=======
      var value;

      for (var i = 0; i < patternPixelDataLength; i += 4) {
        value = (Math.random() * 255) | 0;

        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }

      patternCtx.putImageData(patternData, 0, 0);
>>>>>>> ee2e0f1... re-commit
    }

    // fill the canvas using the pattern
    function draw() {
<<<<<<< HEAD
        ctx.clearRect(0, 0, viewWidth, viewHeight);

        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, viewWidth, viewHeight);
    }

    function loop() {
        if (++frame % patternRefreshInterval === 0) {
            update();
            draw();
        }

        requestAnimationFrame(loop);
=======
      ctx.clearRect(0, 0, viewWidth, viewHeight);

      ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
      ctx.fillRect(0, 0, viewWidth, viewHeight);
    }

    function loop() {
      if (++frame % patternRefreshInterval === 0) {
        update();
        draw();
      }

      requestAnimationFrame(loop);
>>>>>>> ee2e0f1... re-commit
    }

  },

  init: function() {

    // Static
    this.static();

  }
}

tele.init()
