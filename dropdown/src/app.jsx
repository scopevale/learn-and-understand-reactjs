var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // what should show on button
  items: [ // list of items to show in dropdown
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ],
  // subTitleClassName: "caret"
};

// React, please render my class
var element = React.createElement(Dropdown, options);

// React, after you render this class, please place it in the body tag
React.render(element, document.querySelector('.container'));
