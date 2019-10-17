import React from "react";

import LineChart from "../line-chart/LineChart";


class TrendPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <LineChart />
      </div>
    );
  }
}
export default TrendPage;
