var truncate = require('./truncate');

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
    componentDidMount: function () {
      var domElement = React.findDOMNode(this);
      truncate(domElement);
    },
    componentDidUpdate: function () {
      var domElement = React.findDOMNode(this);
      truncate(domElement);
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
