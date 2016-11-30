var React = require('react');
var NavBar = require('./nav/NavBar.jsx');
var LeadCapture = require('./forms/LeadCapture.jsx')

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

    var style = {
      paddingTop: 20
    };

    return (
      <div>
        <NavBar bgColor="#fff" titleColor="#3097d1" navData={navLinks}/>
        <div style={style} className="container">
          <div className="row">
            <div className="col-sm-9">
              {this.props.children}
            </div>
            <div className="col-sm-3">
              <LeadCapture />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BasePage;
