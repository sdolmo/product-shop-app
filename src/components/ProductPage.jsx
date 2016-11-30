var React = require('react');

var ProductPage = React.createClass({
  // Its important to instantiate getInitialState and set data to it's initial state otherwise state calls would appear as null
  getInitialState: function() {
    return {pid: ""}
  },
  // this function grabs the id from the route (called once)
  // react router passes parameters as a property with this.props.parameters
  // the productId is from path="/product/:productId" in Routes.jsx
  componentDidMount: function() {
    this.setState({pid: this.props.params.productId});
  },
  //Since componentDidMount only calls the data once for this component
  // This function is implemented because we want to grab the new data when the component state is toggled
  componentWillReceiveProps: function(nextProps) {
    this.setState({pid: nextProps.params.productId});
  },
  render: function() {
    return (
      <h1>Hi I'm product number {this.state.pid}</h1>
    );
  }
});

module.exports = ProductPage;
