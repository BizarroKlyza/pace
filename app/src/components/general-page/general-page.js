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
        <BreakdownPieChart GeneralStats={this.props.GeneralStats} />
       </div>);
  }
}


export default GeneralPage;
