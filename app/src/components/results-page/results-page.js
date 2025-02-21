import React from "react";


import ResultsTable from "./results-table/results-table";
import ResultsCard from "./results-card/results-card";

import "../../index.css";
import "./style/style.css";

class ResultsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  //eventually will map the multiple resultcards and render
  render() {
    if(this.props.GeneralStats.totalDocCnt==0){
      return(
      <div>
        No Results Found.
      </div>)
    }
    return (
      <div className="ResultsContainer">
        <ResultsTable Title={"News"} NewsItems={this.props.NewsItems}/>
      </div>
    );
  }
}

export default ResultsPage;
