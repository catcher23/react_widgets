/* global React */

var AutoComplete = React.createClass({
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
    var pnames = this.props.items,
        name = this.state.name.trim().toLowerCase();

    if(name.length > 0){
      pnames = pnames.filter( function (el) {
        return el.firstName.toLowerCase().match( name);
      });
    }

    var that = this;

    return (
      <div className="autoCompleteForm">
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleInput} placeholder="Type here" />
        <ul>
          {
            pnames.map(function(l, idx){
              return (<li key={idx} onClick={that.handleClick}>{l.firstName}
                </li>);
            })
          }
        </ul>
      </div>
    );
  }
});

var firstNames = [
  { firstName: 'Danny' },
  { firstName: 'Jacky' },
  { firstName: 'Dan' },
  { firstName: 'Jack' },
  { firstName: 'Daniel' },
];

React.render(
  <AutoComplete items={ firstNames }/>,
  document.getElementById('autoComplete')
);
