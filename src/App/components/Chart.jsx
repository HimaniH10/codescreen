import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart(props) {
  return (
    <LineChart
    series={[
        { curve: "linear", data: props.list.map(item => item.clicks) }, //y
        { curve: "linear", data: props.list.map(item => item.impressions) },
      ]}      
      width={500}
      height={300}
    />
  );
}
