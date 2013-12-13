if('object' !== typeof Widget) { Widget = {}; }
Widget.CSS = (function() {
  var head = document.getElementsByTagName('head')[0];
  return function (css){
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  }
})();
