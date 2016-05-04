var SurveyItem = React.createClass({
  render: function(){
    return (
      <div>
        <p>{this.props.item.id}</p>
        <p>{this.props.item.title}</p>
        <p>{this.props.item.creation_date}</p>
        <p>{this.props.item.short_description}</p>
        <p>{this.props.item.description}</p>
      </div>
    );
  }
});

module.exports = SurveyItem;  