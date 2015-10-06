/* global React */
var Headers = React.createClass({
  render: function () {
    var selected = this.props.selectedPane;
    var that = this;
    var headers = this.props.panes.map(function (pane, index) {
      var title = pane.title;
      if (index === selected) {
        title = "*" + title + "*";
      }

      return (
        <span
          key={ index }
          onClick={that.props.onTabChosen.bind(null, index)}>
          {title}&nbsp;
        </span>
      );
    });
    return (
      <div>
        {headers}
      </div>

    );
 }
});

var Tabs = React.createClass({
  getInitialState: function () {
    return {selectedPane: 0};
  },
  selectTab: function (num) {
    this.setState({selectedPane: num});
  },
  render: function () {
    var pane = this.props.panes[this.state.selectedPane];
    return (
      <div>
        <Headers
          selectedPane={this.state.selectedPane}
          onTabChosen={this.selectTab}
          panes={this.props.panes}>
        </Headers>
        <p>
          {pane.content}
        </p>
      </div>
    );
  }
});
var panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

React.render(
  
  <div>
    <Tabs panes={panes}/>
  </div>,
  document.getElementById('tabs')
);
