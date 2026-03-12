import type { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ApexchartsComponentProps {
  chartOptions: ApexOptions;
  chartSeries: ApexAxisChartSeries | ApexNonAxisChartSeries;
  height?: string | number;
  width?: string | number;
  type?: 'line' | 'bar' | 'pie' | 'area' | 'scatter' | 'radar' | 'candlestick' | 'rangeBar' | 'rangeArea';
}

const Spkapexcharts: React.FC<ApexchartsComponentProps> = ({ chartOptions, chartSeries, height, width, type }) => {

  return (
    <ReactApexChart options={chartOptions} series={chartSeries} height={height} width={width} type={type} />
  );

};

export default Spkapexcharts;
