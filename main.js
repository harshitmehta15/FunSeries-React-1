//$ sudo npm install --save react react-dom babelify babel-preset-react browserify
//$ sudo npm install -g --save browserify
//$ browserify -t [ babelify ] main.js -o bundle.js
var SurveyList = require('./components/SurveyList');
var React= require('react');
var ReactDOM = require('react-dom');


ReactDOM.render(<SurveyList url="http://www.mocky.io/v2/56fcf6871000000e13aed252"/>, document.getElementById('fun'));


/*var TimeElasped= React.createClass({

render: function() {
var elapsed = this.props.elapsed;
  var message =
           'React has been successfully running for ' + elapsed + ' seconds.';

          return <p>{this.props.elapsed}</p>;
        }
      });

var start = new Date().getTime();
      
setInterval(function() {
        ReactDOM.render(
          <TimeElasped elapsed={new Date().getTime() - start} />,
          document.getElementById('example')
        );
      }, 50); */
   
    