var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: 32,
    header: 'Learn React',
    description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.',
    imageUrl: 'https://www.codementor.io/assets/tutorial_icon/reactjs.png'
  },
  {
    title: 'See Tutorials',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development. It use Node.js streams, eliminating the need to create intermediate files during the build process',
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  },
  {
    title: 'See Tutorials',
    number: 117,
    header: 'Learn Javascript',
    description: 'Javascript is arguably the most important computer language on the planet. It is also one of the most powerful, flexible and expressive.',
    imageUrl: 'http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png'
  }]
};

// React, please render my class
var element = React.createElement(ThumbnailList, options);

// React, after you render this class, please place it in the body tag
React.render(element, document.querySelector('.container'));
