(function (doc, win) {
  var docEle = doc.documentElement,
    metaEle = doc.createElement('meta'),
    dpr = Math.min(win.devicePixelRatio, 3),
    scale = 1 / dpr,
    resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

  dpr = window.top === window.self ? dpr : 1;
  docEle.dataset.dpr = dpr;
  metaEle.name = 'viewport';
  metaEle.content = 'initial-scale=' + scale + ',maximum-scale=' + scale;
  docEle.firstElementChild.appendChild(metaEle);


  var recalCulate = function () {
    var width = docEle.clientWidth;
    if (width / dpr > 640) {
      width = 640 * dpr;
    }
    docEle.style.fontSize = 20 * (width / 750) + 'px';
  };

  recalCulate();

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);
