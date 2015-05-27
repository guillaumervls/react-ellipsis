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
      var setTitleOnce = function () {
        domElement.title = domElement[textProperty];
        setTitleOnce = function () {};
      };
      while (domElement.scrollHeight - (domElement.clientHeight || domElement.offsetHeight) >= 1) {
        if (domElement[textProperty] === '...') {
          break;
        }
        setTitleOnce();
        domElement[textProperty] = domElement[textProperty].replace(/.(\.\.\.)?$/, '...');
      }
    },
    componentDidMount: function () {
      var domElement = React.findDOMNode(this);
      this.truncateText(domElement);
    },
    componentDidUpdate: function () {
      var domElement = React.findDOMNode(this);
      this.truncateText(domElement);
    },
    render: function () {
      return this.props.component(
        this.props,
        this.props.children
      );
    }
  });
  return React.addons.Ellipsis;
};
