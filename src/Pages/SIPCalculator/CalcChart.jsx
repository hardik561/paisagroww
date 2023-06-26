import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
// import { Doughnut } from 'react-chartjs-2';


const CalcChart = ({principal , interest , futureVal}) => {
  // Sample data for the chart
  const data = [
    { name: 'Red', value: principal || 10 },
    { name: 'Blue', value: interest || 5 },
  ];

  const colors = ['#01C59F', '#0088FE'];


  return (
    <div className='calc_main' >
       <div className='donut_chart' >
       
       <div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
        
       </div>
        
      <div className='chart_values' >
        <h5>Wealth Gained : {Number(interest).toFixed(2)}</h5>
        <h5>Invested Amount : {Number(principal).toFixed(2)}</h5>
        <h5>Total Wealth : {Number(futureVal).toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default CalcChart;
