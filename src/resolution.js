(function(doc, win) {
  'use strict';

  var docEle = doc.documentElement,
    dpr = Math.min(win.devicePixelRatio, 3),
    scale = 1 / dpr,
    resizeEvent = 'orientationchange' in win ? 'orientationchange' : 'resize';
  var PX = 'px';

  dpr = win.top === win.self ? dpr : 1;
  docEle.dataset.dpr = dpr;

  //initial:
  (function recalCulate() {
    var width = docEle.clientWidth;
    if (width / dpr > 750) {
      width = 750 * dpr;
    }
    docEle.dataset.scale = scale;
    docEle.dataset.width = width;
    docEle.dataset.percent = 100 * (width / 750);
    docEle.style.fontSize = 100 * (width / 750) + PX;
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);
  })();

})(document, window);
