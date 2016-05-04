
var SurveyItem = require('./SurveyItem');

var SurveyList = React.createClass({
  // the Surveylist component ,url attribute get from outside
  getInitialState: function(){
    return {
      data: []
    };
  },
  componentDidMount: function(){
    $.ajax({
      url: this.props.url,
      type:"GET",
      dataType: 'JSONP',
      cache: false,
      success: function(data){
        console.log(data);
        this.setState({data: data}) // state variable data will contain the fetched data
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err);
      }.bind(this)
    });
  },
  render: function(){
    return (
      <div>
      {this.state.data.map(function(obj){
        return <SurveyItem item={obj}/>;
      })}
      </div>
    );
  },

});


module.exports = SurveyList;  