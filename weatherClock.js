/* global React */

var ClockWidget = React.createClass({
  getInitialState: function(){
    return { time: new Date()};
  },

  componentDidMount: function(){
    this.clock = setInterval(this._tick, 2000);
  },

  componentWillUnmount: function(){
    clearInterval(this.clock);
  },

  _tick: function(){
    var newTime = new Date();
    this.setState({time: newTime});
  },
  render: function() {
    return <div>{this.state.time.toString()}</div>;
  }

});


React.render(<ClockWidget/>, document.getElementById('clockWidget'));

var WeatherWidget = React.createClass({
  getInitialState: function () {
    return { temperature: 0 };
  },

  componentDidMount: function () {
    var that = this;

    var getCoords = function(position) {
      return [position.coords.longitude, position.coords.latitude];
    };

    var getWeather = function (position) {
      var xmlhttp = new XMLHttpRequest();
      var coordinates = getCoords(position);

      xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=" + coordinates[1] + '&lon=' + coordinates[0], true);
      xmlhttp.send();

      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
           var REQUEST = xmlhttp;
          if(xmlhttp.status === 400) {
            that.setState({ temperature: "Couldn't retrieve temperature!"});
          }
          else {
            that.setState({ temperature: JSON.parse(xmlhttp.responseText).main.temp });
          }
        }
      };
    };

    var location = navigator.geolocation.getCurrentPosition(getWeather);
  },

  render: function() {
    return <div>{this.state.temperature.toString()}</div>;
  }

});


 React.render(<WeatherWidget/>, document.getElementById('weatherWidget'));
