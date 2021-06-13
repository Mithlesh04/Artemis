import React from 'react';

import { BarChart, Bar ,

    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 

} from 'recharts';


const data = [
    {
      y: 4400,
      x: 4000
    },
    {
      y: 6898,
      x: 2500,
    },
    {
      y: 9800,
      x: 4800,
    },
    {
      y: 3908,
      x: 5780,
    },
    {
      y: 5600,
      x: 2390,
    },
    {
      y: 3800,
      x: 1590,
    },
    {
      y: 4900,
      x: 3590,
    },
    {
       y: 4300,
       x: 1490
    }
  ];
  
  export class RBarChart extends React.PureComponent {
    render() {
      return (
          <BarChart
            width={350}
            height={100}
            data={data}
            margin={{
              top: 5,
              right: 3,
              left: 2,
              bottom: 5,
            }}
            barSize={32}
          >
            <Bar dataKey="y" fill="#2b6ff4" background={{ fill: '#f0f3f8' }} />
          </BarChart>
      );
    }
  }
  

  
export class RAreaChart extends React.PureComponent {
  
    render() {
      return (
          <AreaChart
            width={475}
            height={162}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Area type="monotone" dataKey="x" stroke="#4539dd" fill="#e2e2ff" />
          </AreaChart>
      );
    }
  }