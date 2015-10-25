/**
 * Dropdown - render a button with a dropdown List
 *
 */
var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function () {
    this.setState({open: !this.state.open});
  },
  getInitialState: function () {
    return { open: false };
  },
  handleItemClick: function (item) {
    this.setState({
      open: false,
      itemTitle: item
    });
  },
  render: function () {
    var list = this.props.items.map(function (item) {
      return (
        <ListItem
          item={item}
          whenItemClicked={this.handleItemClick}
          className={this.state.itemTitle === item ? "active" : ""}
        />
      );
    }, this);
      // this inside map (thisArg) is our Dropdown this - what we want
      // }); // this inside map is our react constructor scope, so whenItemClicked is undefined
      // }.bind(this)); // same as above??? // TODO research function.bind()

    // render our element as html
    return (
      <div className="dropdown">
        <Button
          whenClicked={this.handleClick}
          className="btn-default react-dropdown"
          title={this.state.itemTitle || this.props.title}
          subTitleClassName="caret"
        />
        <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
          {list}
        </ul>
      </div>
    );
  }
});
