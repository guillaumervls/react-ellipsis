// IE shim
var textProperty = (document.createElement('div').textContent !== undefined) ? 'textContent' : 'innerText';

module.exports = function (React) {
  if (React.addons && React.addons.Ellipsis) {
    return React.addons.Ellipsis;
  }
  React.addons = React.addons || {};
  React.addons.Ellipsis = React.createClass({
    getDefaultProps: function () {
      return {
        component: React.DOM.div
      };
    },
    truncateText: function (domElement) {
      while (domElement.scrollHeight - domElement.clientHeight >= 1) {
        if (domElement[textProperty] === '...') {
          break;
        }
        domElement[textProperty] = domElement[textProperty].replace(/.(\.\.\.)?$/, '...');
      }
    },
    componentDidMount: function (domElement) {
      this.truncateText(domElement);
    },
    componentDidUpdate: function (p, s, domElement) {
      this.truncateText(domElement);
    },
    render: function () {
      return this.transferPropsTo(this.props.component(null, this.props.children));
    }
  });
  return React.addons.Ellipsis;
};