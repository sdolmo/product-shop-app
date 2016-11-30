var React = require('react');
var NavBar = require('./nav/NavBar.jsx');

var navLinks = [
  {
    title:"Home",
    href: "/"
  },
  {
    title:"Whimsical Maze",
    href: "#/product/55"
  },
  {
    title:"Lorel",
    href:"#/product/67"
  }
];

var BasePage = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar bgColor="#fff" titleColor="#3097d1" navData={navLinks}/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = BasePage;
