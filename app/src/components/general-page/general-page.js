import React from       'react';
import BreakdownPieChart from    "./children/piechart";
class GeneralPage extends React.Component{
  constructor(props){
    super(props);

    this.state={};
  }
  //render pie chart based on breakdown
  render(){
    return(
       <div class="">
        <div class="overview">
          <h4>Total Documents: {this.props.GeneralStats.positiveCount + this.props.GeneralStats.negativeCount + this.props.GeneralStats.neutralCount}</h4>
          <h3>Total Positive: {this.props.GeneralStats.positiveCount}</h3>
          <h3>Total Negative: {this.props.GeneralStats.negativeCount} </h3>
          <h3>Total Neutral: {this.props.GeneralStats.neutralCount} </h3>
        </div>
        <BreakdownPieChart GeneralStats={this.props.GeneralStats} />
       </div>);
  }
}


export default GeneralPage;
