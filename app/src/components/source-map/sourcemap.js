import React from "react";

import MapChart from "../map-chart/MapChart";
class SourceMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <MapChart />
      </div>
    );
  }
}
export default SourceMap;
