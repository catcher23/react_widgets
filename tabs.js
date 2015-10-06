/* global React */

var Tabs = React.createClass({
  getInitialState: function(){
    return { name: ""};
  },

  handleInput: function(e){
    this.setState({ name: e.target.value });
  },

  handleClick: function(e){
    this.setState({ name: e.target.textContent });
  },

  render: function(){

  

  }
});



React.render(
  <Tabs/>,
  document.getElementById('tabs')
);
