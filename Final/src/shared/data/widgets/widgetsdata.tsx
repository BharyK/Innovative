import png2 from '../../../assets/images/ecommerce/png/2.png';
import png11 from '../../../assets/images/ecommerce/png/11.png';
import png14 from '../../../assets/images/ecommerce/png/14.png';
import png15 from '../../../assets/images/ecommerce/png/15.png';
import png17 from '../../../assets/images/ecommerce/png/17.png';
import argentina from '../../../assets/images/flags/argentina_flag.jpg';
import canada from '../../../assets/images/flags/canada_flag.jpg';
import french from '../../../assets/images/flags/french_flag.jpg';
import germany from '../../../assets/images/flags/germany_flag.jpg';
import spain from '../../../assets/images/flags/spain_flag.jpg';
import type { ReactNode } from 'react';
import type { ApexOptions } from 'apexcharts';


// Sales Revenue
export const SalesRevenueSeries = [{
  name: "Sales",
  data: [30, 38, 25, 42, 35, 13, 63, 25, 53],
  type: 'area',
},
{
  name: "Revenue",
  data: [20, 38, 38, 72, 55, 63, 43, 55, 33],
  type: 'line',
}]
export const SalesRevenueOptions = {
  chart: {
    height: 290,
    zoom: {
      enabled: false
    },
    toolbar: { show: false }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    position: "bottom",
    offsetX: 0,
    offsetY: 8,
    markers: {
      size: 4,
      strokeWidth: 0,
      strokeColor: '#fff',
      fillColors: undefined,
      radius: 12,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0
    },
  },
  stroke: {
    curve: 'smooth',
    width: [2, 2],
    dashArray: [0, 4]
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      type: 'vertical',
      opacityTo: 0.1,
      stops: [0, 90, 100],
      colorStops: [
        [
          {
            offset: 0,
            color: "var(--primary-color)",
            opacity: 0.1
          },
          {
            offset: 50,
            color: "var(--primary-color)",
            opacity: 0.1
          },
          {
            offset: 100,
            color: "var(--primary02)",
            opacity: 0.1
          }
        ],
        [
          {
            offset: 0,
            color: "rgba(127, 103, 257)",
            opacity: 1
          },
          {
            offset: 75,
            color: "rgba(127, 103, 257)",
            opacity: 1
          },
          {
            offset: 100,
            color: "rgba(127, 103, 257)",
            opacity: 1
          }
        ],

      ]
    }
  },
  grid: {
    borderColor: '#f5f4f4',
    strokeDashArray: 3
  },
  colors: ["var(--primary-color)", "rgba(127, 103, 257)"],
  yaxis: {
    min: 0,
  },
  xaxis: {
    type: 'week',
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'sun'],
    axisBorder: {
      show: true,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: 6,
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      rotate: -90
    }
  }
}

// #widget-profit
export const WidgetProfitSeries = [
  {
    name: "Profit",
    data: [20, 38, 38, 72, 55, 63, 43],
    type: "column",
  }
]
export const WidgetProfitOptions = {
  chart: {
    height: 180,
    type: "line",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "35%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "all",
      borderRadius: 5,
      colors: {
        ranges: [{
          from: 0,
          to: 65,
          color: 'var(--primary03)'
        }, {
          from: 70,
          to: 100,
          color: 'var(--primary-color)'
        }]
      },
    }
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "top",
    horizontalAlign: "center",
  },
  stroke: {
    curve: "smooth",
    width: ["0"],
  },
  grid: {
    borderColor: "#f1f1f1",
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  colors: ["var(--primary-color)"],
  xaxis: {
    type: "month",
    categories: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "sun"
    ],
    axisBorder: {
      show: true,
      color: "rgba(119, 119, 142, 0.05)",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "rgba(119, 119, 142, 0.05)",
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      rotate: -90,
    },
  },
}

// Revenue Analytics
export const RevenueAnalyticsSeries = [{
  name: 'sales',
  type: 'column',
  data: [200, 170, 250, 240, 220, 280, 170, 155, 130, 242],
}, {
  name: 'revenue',
  type: 'line',
  data: [13, 15, 25, 17, 19, 22, 11, 10, 9, 22],
  dataLabels: {
    enabled: false,
  },
}]
export const RevenueAnalyticsOptios = {
  chart: {
    height: 300,
    type: 'line',
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 4,
      color: ["rgba(255,255,255,0)", "rgb(215, 124, 247)"],
      opacity: 0.4,
    },
    toolbar: {
      show: false,
    }
  },
  dataLabels: {
    enabled: false,
    enabledOnSeries: [0],
    background: {
      enabled: false,
      foreColor: '#fff',
    },
    formatter: function (val: number) {
      return val + "%";
    },
    offsetY: -10,
    style: {
      fontSize: '12px',
      colors: ["#8c9097"]
    }
  },
  stroke: {
    curve: 'smooth',
    width: [0, 2],
  },
  plotOptions: {
    bar: {
      columnWidth: "30%",
      borderRadius: 3,
    }
  },

  colors: ["rgba(var(--primary-rgb),0.7)", "rgba(127, 103, 257,1)"],
  yaxis: [{

  }, {
    opposite: true,
  }],
}


export const WidgetsDataSeries = [{
  name: 'Value',
  data: [5, 4, 3, 8, 5, 6, 3, 8, 6, 9, 5, 7, 3, 8]
}]

interface WidgetsDataOptionsProps {
  color: string
}
export const WidgetsDataOptions = ({ color }: WidgetsDataOptionsProps) => ({
  chart: {
    type: 'area',
    height: 90,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    show: true,
    width: [2],
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    dashArray: 0,
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    show: false,
    axisBorder: {
      show: false
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "40%",
      borderRadiusApplication: "around",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      type: "horizontal",
      colorStops: [
        [
          {
            offset: 0,
            color: color,
            opacity: 0.03
          },
          {
            offset: 90,
            color: color,
            opacity: 0.03
          }
        ]
      ]
    }
  },
  xaxis: {
    axisBorder: {
      show: false
    },
  },
  colors: [color],
})

interface WidgetsDataType {
  id: number;
  chartId: string;
  value: string;
  change: string;
  changeType: string;
  label: string;
  icon: string;
  badgeColor: string;
  bgColor: string;
  chartOptions: ApexOptions;
  valueClass?: string
}
export const WidgetsData: WidgetsDataType[] = [
  { id: 1, chartId: "widget-chart-5", value: "$12,432", change: "0.25%", changeType: "up", label: "Revenue", icon: "ri-bar-chart-box-line", badgeColor: "primary", bgColor: "primary", valueClass: 'custom-value-calss', chartOptions: WidgetsDataOptions({ color: 'rgba(var(--primary-rgb), 1)' }) },
  { id: 2, chartId: "widget-chart-6", value: "15,533", change: "1.53%", changeType: "down", label: "Total Sales", icon: "ri-pie-chart-box-line", badgeColor: "danger", bgColor: "secondary", chartOptions: WidgetsDataOptions({ color: 'rgba(var(--secondary-rgb), 1)' }) },
];

const SalesIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4 8h16v11H4z" opacity=".8" fill="#fff" /><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z" /></svg>
const SaleIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8s8-3.59,8-8C20,7.59,16.41,4,12,4z M12.88,17.76V19h-1.75v-1.29c-0.74-0.18-2.39-0.77-3.02-2.96l1.65-0.67c0.06,0.22,0.58,2.09,2.4,2.09c0.93,0,1.98-0.48,1.98-1.61 c0-0.96-0.7-1.46-2.28-2.03c-1.1-0.39-3.35-1.03-3.35-3.31c0-0.1,0.01-2.4,2.62-2.96V5h1.75v1.24c1.84,0.32,2.51,1.79,2.66,2.23 l-1.58,0.67c-0.11-0.35-0.59-1.34-1.9-1.34c-0.7,0-1.81,0.37-1.81,1.39c0,0.95,0.86,1.31,2.64,1.9c2.4,0.83,3.01,2.05,3.01,3.45 C15.9,17.17,13.4,17.67,12.88,17.76z" enableBackground="new" opacity=".8" fill="#fff" /><path d="M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67 c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96c0,2.27,2.25,2.91,3.35,3.31 c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75c0.63,2.19,2.28,2.78,3.02,2.96 V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z" /><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z" /></g></g></svg>
const RevenueIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g>  <path d="M0,0h24v24H0V0z" fill="none" /></g><g>  <g>    <path d="M4,4v7.17L12.83,20L20,12.83L11.17,4H4z M6.5,8C5.67,8,5,7.33,5,6.5S5.67,5,6.5,5S8,5.67,8,6.5 S7.33,8,6.5,8z" opacity=".8" fill="#fff" />    <path d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M12.83,20L4,11.17V4h7.17L20,12.83L12.83,20z" />    <circle cx="6.5" cy="6.5" r="1.5" />  </g></g></svg>
const CustomersIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g>  <rect fill="none" height="24" width="24" /></g><g>  <g>    <path d="M10,10h4c0.8,0,1.34-0.94,0.76-1.63c-0.87-1.04-0.26-2-0.26-2.37c0-0.41-0.24-0.77-0.62-0.92 c-0.29-0.12-0.55-0.31-0.75-0.54C12.96,4.33,12.58,4,12,4s-0.96,0.33-1.13,0.53c-0.2,0.24-0.46,0.42-0.75,0.54 C9.74,5.23,9.5,5.59,9.5,6c0,0.37,0.61,1.33-0.26,2.37C8.66,9.06,9.2,10,10,10z" opacity=".8" fill="#fff" />    <path d="M17.48,16.34C16.29,15.73,14.37,15,12,15c-2.37,0-4.29,0.73-5.48,1.34C6.2,16.5,6,16.84,6,17.22V18h12 v-0.78C18,16.84,17.8,16.5,17.48,16.34z" opacity=".8" fill="#fff" />    <path d="M18.39,14.56C16.71,13.7,14.53,13,12,13c-2.53,0-4.71,0.7-6.39,1.56C4.61,15.07,4,16.1,4,17.22V20h16v-2.78 C20,16.1,19.39,15.07,18.39,14.56z M18,18H6v-0.78c0-0.38,0.2-0.72,0.52-0.88C7.71,15.73,9.63,15,12,15 c2.37,0,4.29,0.73,5.48,1.34C17.8,16.5,18,16.84,18,17.22V18z" />    <path d="M10,12c0.17,0,3.83,0,4,0c1.66,0,3-1.34,3-3c0-0.73-0.27-1.4-0.71-1.92C16.42,6.75,16.5,6.38,16.5,6 c0-1.25-0.77-2.32-1.86-2.77C14,2.48,13.06,2,12,2s-2,0.48-2.64,1.23C8.27,3.68,7.5,4.75,7.5,6c0,0.38,0.08,0.75,0.21,1.08 C7.27,7.6,7,8.27,7,9C7,10.66,8.34,12,10,12z M9.24,8.37C10.11,7.33,9.5,6.37,9.5,6c0-0.41,0.24-0.77,0.62-0.92 c0.29-0.12,0.55-0.31,0.75-0.54C11.04,4.33,11.42,4,12,4s0.96,0.33,1.13,0.53c0.2,0.24,0.46,0.42,0.75,0.54 C14.26,5.23,14.5,5.59,14.5,6c0,0.37-0.61,1.33,0.26,2.37C15.34,9.06,14.8,10,14,10h-4C9.2,10,8.66,9.06,9.24,8.37z" />  </g></g></svg>
const ViewsIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"> <path d="M0 0h24v24H0V0z" fill="none" /> <path d="M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z" opacity=".8" fill="#fff" /> <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z" /></svg>

interface WidgetsDataRow1Type {
  id: number;
  title: string;
  value: string;
  percentage: string;
  arrowIconClass: string;
  svgColor: string;
  svg2: ReactNode;
}
export const WidgetsDataRow1: WidgetsDataRow1Type[] = [
  { id: 1, title: 'Number Of Sales', value: '12,432', percentage: '9%', arrowIconClass: 'up', svgColor: 'primary', svg2: SalesIcon },
  { id: 2, title: 'Profit By Sale', value: '$5,472', percentage: '12%', arrowIconClass: 'down', svgColor: 'secondary', svg2: SaleIcon },
  { id: 3, title: 'Total Revenue', value: '$1,24,624', percentage: '6%', arrowIconClass: 'up', svgColor: 'danger', svg2: RevenueIcon },
  { id: 4, title: 'Total Customers', value: '1,032', percentage: '8%', arrowIconClass: 'up', svgColor: 'warning', svg2: CustomersIcon },
  { id: 5, title: 'Page Views', value: '5,484', percentage: '11%', arrowIconClass: 'down', svgColor: 'info', svg2: ViewsIcon },
];

// Profit Overview
interface ProgressDataType {
  id: number;
  width: number;
  bgColor: string;
}
export const ProgressData: ProgressDataType[] = [
  { id: 1, width: 21, bgColor: '' },
  { id: 2, width: 26, bgColor: 'secondary' },
  { id: 3, width: 35, bgColor: 'danger' },
  { id: 4, width: 18, bgColor: 'info' },
  { id: 5, width: 18, bgColor: 'warning' },
];

interface ProfitOverviewType {
  id: number;
  name: string;
  icon: string;
  iconClass: string;
  percentage: string;
  count: string;
  arrow: string;
  liClass?: string;
}
export const ProfitOverview: ProfitOverviewType[] = [
  { id: 1, name: 'Food and restaurants', icon: 'ti-chef-hat', iconClass: 'primary', percentage: '0.78%', count: "6,192", arrow: 'up', },
  { id: 2, name: 'Books and shopping', icon: 'ti-book', iconClass: 'secondary', percentage: '0.12%', count: "5,932", arrow: 'down', },
  { id: 3, name: 'Booking car', icon: 'ti-car', iconClass: 'danger', percentage: '0.12%', count: "5,932", arrow: 'up', },
  { id: 4, name: 'Home Furnitures', icon: 'ti-sofa', iconClass: 'info', percentage: '0.54%', count: "5,383", arrow: 'down', },
  { id: 5, name: 'Beauty Products', icon: 'ti-shirt', iconClass: 'warning', percentage: '0.25%', count: "4,825", arrow: 'up', liClass: 'mb-0' },
];

const ServicesIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z" opacity="0.2"></path><path d="M72,144H32a8,8,0,0,1,0-16H67.72l13.62-20.44a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,128h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,126.42l-9.34,14A8,8,0,0,1,72,144ZM178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40Z"></path></svg>
const PatientsIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M248,112v56H112V80H216A32,32,0,0,1,248,112Z" opacity="0.2"></path><path d="M216,72H32V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V176H240v32a8,8,0,0,0,16,0V112A40,40,0,0,0,216,72ZM32,88h72v72H32Zm88,72V88h96a24,24,0,0,1,24,24v48Z"></path></svg>
const DoctorsIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M240,160a32,32,0,1,1-32-32A32,32,0,0,1,240,160Z" opacity="0.2"></path><path d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"></path></svg>
const MentorsIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,72V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H216A8,8,0,0,1,224,72Z" opacity="0.2"></path><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,200H40V72H216V200Zm-56-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,136Z"></path></svg>

export interface DoctorCardDataType {
  id: number;
  icon: ReactNode;
  number: string;
  label: string;
  bgColor: string;
}
export const DoctorCardData: DoctorCardDataType[] = [
  { id: 1, icon: ServicesIcon, number: "12,753", label: "Total Services", bgColor: "primary", },
  { id: 2, icon: PatientsIcon, number: "6,745", label: "Total Patients", bgColor: "secondary", },
  { id: 3, icon: DoctorsIcon, number: "23,735", label: "Total Doctors", bgColor: "danger", },
  { id: 4, icon: MentorsIcon, number: "7,564", label: "Total Mentors", bgColor: "warning", },
];

// Product By Sale
const FurnitureIcon = <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z" opacity="0.2"></path><path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path></svg>
const FashionIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,56V208a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H80v56a8,8,0,0,0,13.12,6.15L128,80l34.88,30.13A8,8,0,0,0,176,104V48h24A8,8,0,0,1,208,56Z" opacity="0.2"></path><path d="M200,40H179.31L165.66,26.34h0A8,8,0,0,0,160,24H96a8,8,0,0,0-5.66,2.34h0L76.69,40H56A16,16,0,0,0,40,56V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-38.76,4.56L168,51.31V104L138.57,78.56ZM88,51.31l6.76-6.75,22.67,34L88,104ZM56,56H72v48a15.85,15.85,0,0,0,9.21,14.49A16.1,16.1,0,0,0,88,120a15.89,15.89,0,0,0,10.2-3.73.52.52,0,0,0,.11-.1L120,97.48V208H56ZM200,208H136V97.48l21.65,18.7a.52.52,0,0,0,.11.1A15.89,15.89,0,0,0,168,120a16.1,16.1,0,0,0,6.83-1.54A15.85,15.85,0,0,0,184,104V56h16Z"></path></svg>
const ElectronicsIcon = <svg xmlns="http://www.w3.org/2000/svg" className="svg-danger" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,64V176a16,16,0,0,1-16,16H155.43L128,160l-27.43,32H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z" opacity="0.2"></path><path d="M134.08,154.79a8,8,0,0,0-12.15,0l-48,56A8,8,0,0,0,80,224h96a8,8,0,0,0,6.07-13.21ZM97.39,208,128,172.29,158.61,208ZM232,64V176a24,24,0,0,1-24,24H192a8,8,0,0,1,0-16h16a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V176a8,8,0,0,0,8,8H64a8,8,0,0,1,0,16H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64Z"></path></svg>
const EntertainmentIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216.86,207.57a28,28,0,0,1-24.66-7.77L150.09,152H172a51.94,51.94,0,0,0,51.2-61h0l16.36,84.17A28,28,0,0,1,216.86,207.57Z" opacity="0.2"></path><path d="M176,112H152a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM104,96H96V88a8,8,0,0,0-16,0v8H72a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM241.48,200.65a36,36,0,0,1-54.94,4.81c-.12-.12-.24-.24-.35-.37L146.48,160h-37L69.81,205.09l-.35.37A36.08,36.08,0,0,1,44,216,36,36,0,0,1,8.56,173.75a.68.68,0,0,1,0-.14L24.93,89.52A59.88,59.88,0,0,1,83.89,40H172a60.08,60.08,0,0,1,59,49.25c0,.06,0,.12,0,.18l16.37,84.17a.68.68,0,0,1,0,.14A35.74,35.74,0,0,1,241.48,200.65ZM172,144a44,44,0,0,0,0-88H83.89A43.9,43.9,0,0,0,40.68,92.37l0,.13L24.3,176.59A20,20,0,0,0,58,194.3l41.92-47.59a8,8,0,0,1,6-2.71Zm59.7,32.59-8.74-45A60,60,0,0,1,172,160h-4.2L198,194.31a20.09,20.09,0,0,0,17.46,5.39,20,20,0,0,0,16.23-23.11Z"></path></svg>
const GroceriesIcon = <svg xmlns="http://www.w3.org/2000/svg" className="svg-info" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M231.93,97.06l-13.87,104a8,8,0,0,1-7.93,6.94H45.87a8,8,0,0,1-7.93-6.94l-13.87-104A8,8,0,0,1,32,88H224A8,8,0,0,1,231.93,97.06Z" opacity="0.2"></path><path d="M136,120v56a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM239.86,98.11,226,202.12A16,16,0,0,1,210.13,216H45.87A16,16,0,0,1,30,202.12l-13.87-104A16,16,0,0,1,32,80H68.37L122,18.73a8,8,0,0,1,12,0L187.63,80H224a16,16,0,0,1,15.85,18.11ZM89.63,80h76.74L128,36.15ZM224,96H32L45.87,200H210.13Zm-51.16,23.2-5.6,56A8,8,0,0,0,174.4,184a7.44,7.44,0,0,0,.81,0,8,8,0,0,0,7.95-7.2l5.6-56a8,8,0,0,0-15.92-1.6Zm-89.68,0a8,8,0,0,0-15.92,1.6l5.6,56a8,8,0,0,0,8,7.2,7.44,7.44,0,0,0,.81,0,8,8,0,0,0,7.16-8.76Z"></path></svg>

interface ProductBySaleType {
  id: number;
  title: string;
  progress: number;
  amount: string;
  avatarColor: string;
  icon: ReactNode;
  increased: string;
  liClass?: string;
}
export const ProductBySale: ProductBySaleType[] = [
  { id: 1, title: 'Home Furniture', progress: 80, amount: '$12,230', avatarColor: 'primary', icon: FurnitureIcon, increased: "+12%" },
  { id: 2, title: 'Fashion', progress: 70, amount: '$15,270', avatarColor: 'secondary', icon: FashionIcon, increased: "+11.2%" },
  { id: 3, title: 'Electronics', progress: 50, amount: '$11,230', avatarColor: 'danger', icon: ElectronicsIcon, increased: "+15%" },
  { id: 4, title: 'Entertainment', progress: 70, amount: '$19,632', avatarColor: 'warning', icon: EntertainmentIcon, liClass: "mb-0", increased: "+12%" },
  { id: 5, title: 'Groceries', progress: 60, amount: '$22,130', avatarColor: 'info', icon: GroceriesIcon, liClass: "mb-0", increased: "+9%" },
]

interface OrdersDataType {
  id: number;
  orderId: string;
  totalItems: string;
  status: string;
  progress: number;
  color: string;
}
export const OrdersData: OrdersDataType[] = [
  { id: 1, orderId: 'restorder1452#1', totalItems: "05", status: 'Preparing', progress: 65, color: "primary" },
  { id: 2, orderId: 'restorder1452#2', totalItems: "03", status: 'Preparing', progress: 44, color: "secondary" },
];

// Top Products
interface TopProductsType {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: string;
  percentageChange: string;
  bgColor: string;
  badgeColor: string;
  tdClass?: string
}
export const TopProducts: TopProductsType[] = [
  { id: 1, name: 'Sofa Chair', brand: 'Telicon', image: png14, price: '$12,256', percentageChange: '+2.3%', bgColor: 'primary', badgeColor: "primary" },
  { id: 2, name: 'Altra Pro Camera', brand: 'Mindmling Cam', image: png15, price: '$13,567', percentageChange: '+15.3%', bgColor: 'secondary', badgeColor: "secondary" },
  { id: 3, name: 'Cobra Perfume', brand: 'Cobra', image: png11, price: '$12,250', percentageChange: '+11.6%', bgColor: 'danger', badgeColor: "primary" },
  { id: 4, name: 'Alarm Clock', brand: 'Samsong', image: png17, price: '$17,650', percentageChange: '+15.4%', bgColor: 'info', badgeColor: "warning" },
  { id: 5, name: 'Men stylish shoe', brand: 'Adidas', image: png2, price: '$16,756', percentageChange: '+16.7%', bgColor: 'warning', badgeColor: "danger", tdClass: 'border-bottom-0 rounded' },
];

// Visitors By Country
interface VisitorsByCountryType {
  id: number;
  class: string;
  name: string;
  flagSrc: string;
  value: string;
  countryCalss: string;
  liclass?: string;
}
export const VisitorsByCountry: VisitorsByCountryType[] = [
  { id: 1, class: 'canada', name: 'Canada', flagSrc: canada, value: '6,192', countryCalss: 'country-item1' },
  { id: 2, class: 'french', name: 'French', flagSrc: french, value: '12,675', countryCalss: 'country-item2' },
  { id: 3, class: 'argentina', name: 'Argentina', flagSrc: argentina, value: '14,673', countryCalss: 'country-item3' },
  { id: 4, class: 'spain', name: 'Spain', flagSrc: spain, value: '14,673', countryCalss: 'country-item4' },
  { id: 5, class: 'germany', name: 'Germany', flagSrc: germany, value: '14,673', countryCalss: 'country-item5', liclass: 'mb-0' },
];
