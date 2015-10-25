/**
 * Button - render a button with a title and a glyphicon
 *
 */
var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
        <span>{this.props.title}</span>
        <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
      </button>
    );
  }
});
