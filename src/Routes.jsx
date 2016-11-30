var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ProductPage = require('./components/ProductPage.jsx');

var Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={BasePage} >
      <IndexRoute component={HomePage} />
      <Route path="/product/:productId" component={ProductPage} />
    </Route>
  </Router>
);

module.exports = Routes;
