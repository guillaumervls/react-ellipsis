/*global define*/
var reactEllipsis = require('./react-ellipsis');
if (typeof define === 'function' && define.amd) {
  define(['react'], function (React) {
    return reactEllipsis(React);
  });
} else {
  window.React.addons = window.React.addons || {};
  window.React.addons.Ellipsis = reactEllipsis(window.React);
}