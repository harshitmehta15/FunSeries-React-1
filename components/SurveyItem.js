var SurveyDescription = require('./SurveyDescription');

var SurveyItem = React.createClass({
  
   getInitialState: function(){
    return {
      show: false
    };
  },
  
  toggleDes: function () {
    console.log('this.state.show:', this.state.show);
    this.setState({ show: !this.state.show });
  },

  render: function(){
    const desc = this.state.show ?
      <SurveyDescription des={this.props.item.description}/>
      : null;
    return (
      <div onClick={this.toggleDes}>
        <p>{this.props.item.id}</p>
        <p>{this.props.item.title}</p>
        <p>{this.props.item.creation_date}</p>
        <p>{this.props.item.short_description}</p>
        {desc}
      </div>
    );
  }
});

module.exports = SurveyItem;  