import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

const data = [{name: 'One Month Ago', positive: 100, negative: 50, neutral: 60},{name: 'One Week Ago', positive: 20, negative: 10, neutral: 180},{name: 'This Week', positive: 180, negative: 10, neutral: 20}];

const renderLineChart = (
  <LineChart width={400} height={200} data={data}>
     <Line type="monotone" dataKey="positive" stroke="red" />
     <Line type="monotone" dataKey="negative" stroke="green" />
     <Line type="monotone" dataKey="neutral" stroke="orange" />
     <CartesianGrid stroke="#ccc" />
     <XAxis dataKey="name" />
     <YAxis />
     <Legend />
   </LineChart>
);
class TrendPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        {renderLineChart}
      </div>
    );
  }
}
export default TrendPage;
