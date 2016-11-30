var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          {/* Links are manages with the react-router Link tag */}
          <li><Link to="/product/55">Whimsical Maze</Link></li>
          <li><Link to="/product/67">Lorel</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = HomePage;
