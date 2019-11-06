import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, Legend, LabelList
} from 'recharts';

const data = [

];

const COLORS = ['red', 'green', 'orange'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, value, index,
    }) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}

    </text>
  );
    // - ${(value).toFixed(0)} on click show number values?
};

export default class BreakdownPieChart extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      data:  [{ name: 'Negative', value: this.props.GeneralStats.negativeCount },
        { name: 'Positive', value: this.props.GeneralStats.positiveCount },
        { name: 'Neutral', value: this.props.GeneralStats.neutralCount },]

    }
  }

  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie
          data={this.state.data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }

        </Pie>
        <LabelList dataKey="value" />
        <Legend align="center" verticalAlign="top" layout="vertical"/>
      </PieChart>
    );
  }
}
