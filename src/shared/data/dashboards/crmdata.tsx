import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face11 from '../../../assets/images/faces/11.jpg';
import face13 from '../../../assets/images/faces/13.jpg';
import face16 from '../../../assets/images/faces/16.jpg';
import comppanyLogo1 from '../../../assets/images/company-logos/1.png';
import comppanyLogo2 from '../../../assets/images/company-logos/2.png';
import comppanyLogo3 from '../../../assets/images/company-logos/3.png';
import comppanyLogo5 from '../../../assets/images/company-logos/5.png';
import comppanyLogo6 from '../../../assets/images/company-logos/6.png';
import type { ReactNode } from 'react';
import type { ApexOptions } from 'apexcharts';


export const CrmCardSeries = [{
  data: [32, 63, 59, 45, 72, 31, 84, 28, 53, 49, 68, 50, 42, 60, 30, 18, 97, 61, 67, 22, 74, 58, 33, 55]
}]
interface GradientColorStop {
  offset: number;
  color: string;
  opacity: number;
};

interface GradientSettings {
  colorStops: GradientColorStop[][];
};
interface CrmCardOptionsProps {
  gradientSettings: GradientSettings;
  color: string;
};
export const CrmCardOptions = ({ gradientSettings, color }: CrmCardOptionsProps) => ({
  labels: [...Array(24).keys()].map(n => `2018-09-0${n + 1}`),
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'smooth',
    width: 1.5,
  },
  colors: [color],
  fill: {
    type: ['gradient'],
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100],
      colorStops: gradientSettings.colorStops,
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
})
const ChartGradientSettings = {
  Active: {
    colorStops: [
      [
        {
          offset: 0,
          color: "var(--primary01)",
          opacity: 1
        },
        {
          offset: 75,
          color: "var(--primary005)",
          opacity: 1
        },
        {
          offset: 100,
          color: 'var(--primary005)',
          opacity: 0.05
        }
      ],
    ]
  },
  Deals: {
    colorStops: [
      [
        {
          offset: 0,
          color: "rgba(127, 103, 257,0.1)",
          opacity: 1
        },
        {
          offset: 75,
          color: "rgba(127, 103, 257,0.05)",
          opacity: 1
        },
        {
          offset: 100,
          color: 'rgba(127, 103, 257,0.05)',
          opacity: 0.05
        }
      ],
    ]
  },
  Revenue: {
    colorStops: [
      [
        {
          offset: 0,
          color: "rgba(253, 73, 99,0.1)",
          opacity: 1
        },
        {
          offset: 75,
          color: "rgba(253, 73, 99,0.05)",
          opacity: 1
        },
        {
          offset: 100,
          color: 'rgba(253, 73, 99,0.05)',
          opacity: 0.05
        }
      ],
    ]
  },
  Conversion: {
    colorStops: [
      [
        {
          offset: 0,
          color: "rgba(255, 169, 9,0.1)",
          opacity: 1
        },
        {
          offset: 75,
          color: "rgba(255, 169, 9,0.05)",
          opacity: 1
        },
        {
          offset: 100,
          color: 'rgba(255, 169, 9,0.05)',
          opacity: 0.05
        }
      ],
    ]
  },
}

// Project Analysis
export const ProjectAnalysisSeries = [{
  name: "Followers",
  data: [56, 44, 66, 55, 68, 90, 55, 68, 55, 66, 44, 56],
  type: 'area',
},
{
  name: "Total Views",
  data: [45, 50, 42, 59, 53, 74, 43, 43, 30, 55, 74, 49],
  type: 'area',
}]
export const ProjectAnalysisOptions = {
  chart: {
    type: 'area',
    height: 348,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 7,
      left: 0,
      blur: 1,
      color: ['rgba(var(--secondary-rgb), 1)', "var(--primary-color)"],
      opacity: 0.05,
    },
  },
  grid: {
    borderColor: 'rgba(167, 180, 201 ,0.2)',
    strokeDashArray: 3
  },
  colors: ['rgba(var(--secondary-rgb), 1)', "var(--primary-color)"],
  stroke: {
    width: [2, 2],
    curve: ["smooth", "smooth"],
    dashArray: [0, 4],
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'top',
    labels: {
      colors: '#74767c',
    },
    markers: {
      size: 5,
      shape: "circle",
      strokeWidth: 0
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: "rgba(var(--secondary-rgb), 0.1)",
            opacity: 0.2
          },
          {
            offset: 50,
            color: "rgba(var(--secondary-rgb), 0.1)",
            opacity: 0.2
          },
          {
            offset: 100,
            color: 'rgba(var(--secondary-rgb), 0.1)',
            opacity: 0.5
          }
        ],
        [
          {
            offset: 0,
            color: "var(--primary005)",
            opacity: 1
          },
          {
            offset: 50,
            color: "var(--primary005)",
            opacity: 1
          },
          {
            offset: 100,
            color: 'var(--primary005)',
            opacity: 0.5
          }
        ],
      ],
    },
  },
  yaxis: {
    labels: {
      formatter: function (y: number) {
        return y.toFixed(0) + "";
      },
      style: {
        colors: "#8c9097",
        fontSize: '11px',
        fontWeight: 600,
        cssClass: 'apexcharts-xaxis-label',
      },
    },
    max: 90,
    min: 20
  },
  xaxis: {
    type: 'month',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
    axisBorder: {
      show: true,
      color: 'rgba(167, 180, 201 ,0.2)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: 'rgba(167, 180, 201 ,0.2)',
      width: 6,
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      rotate: -90,
      style: {
        colors: "#8c9097",
        fontSize: '11px',
        fontWeight: 600,
        cssClass: 'apexcharts-xaxis-label',
      },
    }
  }
}

// Leads Overview
export const LeadsOverviewSeries = [18235, 12743, 8369]
export const LeadsOverviewOptions = {
  labels: ["Hot Leads", "Warm Leads", "Cold Leads"],
  chart: {
    height: 225,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'round',
    colors: "#fff",
    width: 0,
    dashArray: 0,
  },
  stroke1: {
    width: 2,
  },
  plotOptions: {
    pie: {
      offsetY: 10,
      expandOnClick: false,
      donut: {
        size: '80%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '20px',
            color: '#495057',
            fontFamily: "Montserrat, sans-serif",
            offsetY: -10
          },
          value: {
            show: true,
            fontSize: '22px',
            color: undefined,
            offsetY: 10,
            fontWeight: 600,
            fontFamily: "Montserrat, sans-serif",
            formatter: function (val: number) {
              return val + "%"
            }
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Total Leads',
            fontSize: '14px',
            fontWeight: 400,
            color: '#495057',
          }
        }
      }
    }
  },
  colors: ["var(--primary09)", "rgba(127, 103, 257, 0.9)", "rgba(253, 73, 99, 0.9)"],
}


// cards
export interface CardType {
  id: number;
  svg: ReactNode;
  svgBg: string;
  title: string;
  count: string;
  percent: string;
  percentBg: string;
  percentIndicator: string;
  percentIndicatorMargin: string;
  chartOptions: ApexOptions;
}
export const Cards: CardType[] = [
  {
    id: 1,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#00000">
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <path
              d="M12 4c-4.42 0-8 3.58-8 8 0 1.95.7 3.73 1.86 5.12C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C19.3 15.73 20 13.95 20 12c0-4.42-3.58-8-8-8zm0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13z"
              enableBackground="new" opacity=".8" fill="#fff" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5zm6.14-2.88C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z" />
            <path
              d="M12 5.93c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </g>
        </g>
      </svg>
    ),
    svgBg: "primary",
    title: "Active Users",
    count: "2,54,244",
    percent: "0.16%",
    percentBg: "primary-transparent",
    percentIndicator: "up",
    percentIndicatorMargin: "1",
    chartOptions: CrmCardOptions({ color: 'var(--primary03)', gradientSettings: ChartGradientSettings.Active }),
  },
  {
    id: 2,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#00000">
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <path
            d="M12.22,19.85c-0.18,0.18-0.5,0.21-0.71,0c-0.18-0.18-0.21-0.5,0-0.71l3.39-3.39l-1.41-1.41l-3.39,3.39 c-0.19,0.2-0.51,0.19-0.71,0c-0.21-0.21-0.18-0.53,0-0.71l3.39-3.39l-1.41-1.41l-3.39,3.39c-0.18,0.18-0.5,0.21-0.71,0 c-0.19-0.19-0.19-0.51,0-0.71l3.39-3.39L9.24,10.1l-3.39,3.39c-0.18,0.18-0.5,0.21-0.71,0c-0.19-0.2-0.19-0.51,0-0.71L9.52,8.4 l1.87,1.86c0.95,0.95,2.59,0.94,3.54,0c0.98-0.98,0.98-2.56,0-3.54l-1.86-1.86l0.28-0.28c0.78-0.78,2.05-0.78,2.83,0l4.24,4.24 c0.78,0.78,0.78,2.05,0,2.83L12.22,19.85z"
            opacity=".8" fill="#fff" />
          <path
            d="M12.22,19.85c-0.18,0.18-0.5,0.21-0.71,0c-0.18-0.18-0.21-0.5,0-0.71l3.39-3.39l-1.41-1.41l-3.39,3.39 c-0.19,0.2-0.51,0.19-0.71,0c-0.21-0.21-0.18-0.53,0-0.71l3.39-3.39l-1.41-1.41l-3.39,3.39c-0.18,0.18-0.5,0.21-0.71,0 c-0.19-0.19-0.19-0.51,0-0.71l3.39-3.39L9.24,10.1l-3.39,3.39c-0.18,0.18-0.5,0.21-0.71,0c-0.19-0.2-0.19-0.51,0-0.71L9.52,8.4 l1.87,1.86c0.95,0.95,2.59,0.94,3.54,0c0.98-0.98,0.98-2.56,0-3.54l-1.86-1.86l0.28-0.28c0.78-0.78,2.05-0.78,2.83,0l4.24,4.24 c0.78,0.78,0.78,2.05,0,2.83L12.22,19.85z M21.83,13.07c1.56-1.56,1.56-4.09,0-5.66l-4.24-4.24c-1.56-1.56-4.09-1.56-5.66,0 l-0.28,0.28l-0.28-0.28c-1.56-1.56-4.09-1.56-5.66,0L2.17,6.71c-1.42,1.42-1.55,3.63-0.4,5.19l1.45-1.45 C2.83,9.7,2.96,8.75,3.59,8.12l3.54-3.54c0.78-0.78,2.05-0.78,2.83,0l3.56,3.56c0.18,0.18,0.21,0.5,0,0.71 c-0.21,0.21-0.53,0.18-0.71,0L9.52,5.57l-5.8,5.79c-0.98,0.97-0.98,2.56,0,3.54c0.39,0.39,0.89,0.63,1.42,0.7 c0.07,0.52,0.3,1.02,0.7,1.42c0.4,0.4,0.9,0.63,1.42,0.7c0.07,0.52,0.3,1.02,0.7,1.42c0.4,0.4,0.9,0.63,1.42,0.7 c0.07,0.54,0.31,1.03,0.7,1.42c0.47,0.47,1.1,0.73,1.77,0.73c0.67,0,1.3-0.26,1.77-0.73L21.83,13.07z" />
        </g>
      </svg>
    ),
    svgBg: "secondary",
    title: "Total Deals",
    count: "12,864",
    percent: "-1.25%",
    percentBg: "danger-transparent",
    percentIndicator: "down",
    percentIndicatorMargin: "1",
    chartOptions: CrmCardOptions({ color: 'rgba(127, 103, 257,0.3)', gradientSettings: ChartGradientSettings.Deals }),
  },
  {
    id: 3,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#00000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M5 19h14V5H5v14zm10-6h2v4h-2v-4zm-4-6h2v10h-2V7zm-4 3h2v7H7v-7z"
          opacity=".8" fill="#fff" />
        <path
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
      </svg>
    ),
    svgBg: "danger",
    title: "Total Revenue",
    count: "$32,975",
    percent: "-2.55%",
    percentBg: "danger-transparent",
    percentIndicator: "down",
    percentIndicatorMargin: "1",
    chartOptions: CrmCardOptions({ color: 'rgba(253, 73, 99,0.3)', gradientSettings: ChartGradientSettings.Revenue }),
  },
  {
    id: 4,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#00000">
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <polygon opacity=".8" fill="#fff"
              points="16,16.5 12,12.5 8,16.5 8,20 16,20" />
            <polygon opacity=".8" fill="#fff"
              points="16,16.5 12,12.5 8,16.5 8,20 16,20" />
            <path
              d="M6,22h12v-6l-4-4l3.99-4.01L18,2H6l0.01,5.99L10,12l-4,3.99V22z M8,7.5V4h8v3.5l-4,4L8,7.5z M8,16.5l4-4l4,4V20H8V16.5z" />
          </g>
        </g>
      </svg>
    ),
    svgBg: "warning",
    title: "Conversion Ratio",
    count: "12.78%",
    percent: "4.97%",
    percentBg: "primary-transparent",
    percentIndicator: "up",
    percentIndicatorMargin: "",
    chartOptions: CrmCardOptions({ color: 'rgba(255, 169, 9,0.3)', gradientSettings: ChartGradientSettings.Conversion }),
  },
]

// Tasks List
export interface TasksListType {
  id: number;
  title: string;
  description: string;
  status: string;
  statusBg: string;
  completed: boolean;
  category: string;
  liclass?: string;
}
export const TasksList: TasksListType[] = [
  { id: 1, title: "Added New Customers", description: "Invi sadip takimata", status: "Progress", statusBg: "primary-transparent", completed: false, category: "today-list" },
  { id: 2, title: "Sales Accounting", description: "Eos dolor ea", status: "Completed", statusBg: "secondary-transparent", completed: true, category: "today-list" },
  { id: 3, title: "Meeting with Sales Team", description: "Nonumy erat ipsum ut ipsum", status: "not Started", statusBg: "danger-transparent", completed: false, category: "today-list" },
  { id: 4, title: "Added New Customers", description: "Invi sadip takimata", status: "Progress", statusBg: "primary-transparent", completed: false, category: "today-list" },
  { id: 5, title: "Meeting with Sales Team", description: "Consetetur et amet dolor", status: "not Started", statusBg: "danger-transparent ms-1", completed: false, category: "today-list" },
  { id: 6, title: "Customers Meeting", description: "Sed labore ut sed", status: "Completed", statusBg: "secondary-transparent", completed: true, category: "today-list", liclass: 'mb-0' },

  { id: 7, title: "Build a New Team", description: "Nonumy erat ipsum ut ipsum", status: "not Started", statusBg: "danger-transparent", completed: false, category: "upComing-list" },
  { id: 8, title: "Meeting with Sales Team", description: "Consetetur et amet dolor", status: "not Started", statusBg: "danger-transparent", completed: false, category: "upComing-list" },
  { id: 9, title: "Meeting with Sales Team", description: "Nonumy erat ipsum ut ipsum", status: "not Started", statusBg: "danger-transparent", completed: false, category: "upComing-list" },
  { id: 10, title: "Created a New Task today", description: "Nonumy erat ipsum ut ipsum", status: "not Started", statusBg: "danger-transparent", completed: false, category: "upComing-list" },
  { id: 11, title: "Build a New Team", description: "Nonumy erat ipsum ut ipsum", status: "not Started", statusBg: "danger-transparent", completed: false, category: "upComing-list" },
  { id: 12, title: "27 New people joined summit", description: "Accusam aliquyam ea sea", status: "not Started", statusBg: "danger-transparent", completed: false, category: "upComing-list", liclass: 'mb-0' },

  { id: 13, title: "Meeting with Sales Team", description: "Eos dolor ea", status: "Completed", statusBg: "secondary-transparent", completed: true, category: "completed-list" },
  { id: 14, title: "Meeting with Sales Team", description: "Nonumy erat ipsum ut ipsum", status: "Completed", statusBg: "secondary-transparent", completed: false, category: "completed-list" },
  { id: 15, title: "Replied to new support request", description: "Eos clita dolor elitr et", status: "Completed", statusBg: "secondary-transparent", completed: true, category: "completed-list" },
  { id: 16, title: "Update of calendar events", description: "Sadi tempor guberg rebum", status: "Completed", statusBg: "secondary-transparent", completed: true, category: "completed-list" },
  { id: 17, title: "Added New Customers", description: "Sadi tempor guberg rebum", status: "Completed", statusBg: "secondary-transparent", completed: true, category: "completed-list" },
  { id: 18, title: "Meeting with Sales Team", description: "Eos dolor ea", status: "Completed", statusBg: "secondary-transparent", completed: true, category: "completed-list", liclass: 'mb-0' },
];

// Leads Overview
interface LeadsOverviewType {
  id: number;
  period: string;
  percentage: string;
  percentageColor: string;
  borderStyle: string;
  borderEnd: string;
}
export const LeadsOverview: LeadsOverviewType[] = [
  {
    id: 1,
    period: "Last Week",
    percentage: "18,235",
    percentageColor: "primary",
    borderStyle: "border-inline-end-dashed",
    borderEnd: "border-end"
  },
  {
    id: 2,
    period: "Last Month",
    percentage: "12,743",
    percentageColor: "secondary",
    borderStyle: "border-inline-end-dashed",
    borderEnd: "border-end"
  },
  {
    id: 3,
    period: "Last Year",
    percentage: "8,369",
    percentageColor: "danger",
    borderStyle: "",
    borderEnd: ""
  }
];

// Recent Activity
interface RecentActivityType {
  id: number;
  icon: string;
  iconBg: string;
  containerBg: string;
  borderStyle: string;
  title: string;
  message: string;
  user: string;
  time: string;
}
export const RecentActivity: RecentActivityType[] = [
  {
    id: 1,
    icon: "ti-user",
    iconBg: "primary",
    containerBg: "primary-transparent",
    borderStyle: "primary-dash-border",
    title: "New user registered",
    message: "A new customer has signed up for an account.",
    user: "John Doe",
    time: "- 10 mins ago"
  },
  {
    id: 2,
    icon: "ti-file-invoice",
    iconBg: "secondary",
    containerBg: "secondary-transparent",
    borderStyle: "secondary-dash-border",
    title: "Invoice #INV-00124 created",
    message: "An invoice has been generated for a recent order.",
    user: "Emily Davis",
    time: "- 30 mins ago"
  },
  {
    id: 3,
    icon: "ti-message",
    iconBg: "danger",
    containerBg: "danger-transparent",
    borderStyle: "danger-dash-border",
    title: "New support ticket",
    message: "A customer has submitted a new request.",
    user: "Jane Smith",
    time: "- 1 hour ago"
  },
  {
    id: 4,
    icon: "ti-shopping-cart",
    iconBg: "warning",
    containerBg: "warning-transparent",
    borderStyle: "warning-dash-border",
    title: "Order #ORD-00256 canceled",
    message: "An order has been canceled by the customer.",
    user: "Peter Johnson",
    time: "- 2 hours ago"
  },
  {
    id: 5,
    icon: "ti-check",
    iconBg: "info",
    containerBg: "info-transparent",
    borderStyle: "info-dash-border",
    title: "Task completed",
    message: "Task has been successfully completed.",
    user: "Sarah Lee",
    time: "- 3 hours ago"
  }
];


// Deals Overview
interface DealsOverviewType {
  id: number;
  name: string;
  email: string;
  avatar: string;
  amount: string;
  probability: string;
  status: string;
  statusColor: string;
}
export const DealsOverview: DealsOverviewType[] = [
  {
    id: 1,
    name: "Socrates Itumay",
    email: "socratesitumay@gmail.com",
    avatar: face2,
    amount: "$54,900",
    probability: "24%",
    status: "Qualified",
    statusColor: "primary-transparent"
  },
  {
    id: 2,
    name: "Json Taylor",
    email: "jsontaylor2416@gmail.com",
    avatar: face3,
    amount: "$16,800",
    probability: "70%",
    status: "Review",
    statusColor: "warning-transparent"
  },
  {
    id: 3,
    name: "Inferno Tech Et.",
    email: "InfernoTech@gmail.com",
    avatar: face8,
    amount: "$12,000",
    probability: "90%",
    status: "Closed Won",
    statusColor: "primary-transparent"
  },
  {
    id: 4,
    name: "Andrew Garfield",
    email: "andrewgarfield@gmail.com",
    avatar: face13,
    amount: "$16,800",
    probability: "70%",
    status: "Closed Lost",
    statusColor: "danger-transparent"
  },
  {
    id: 5,
    name: "Jack Pvt.Ltd",
    email: "JackTech@gmail.com",
    avatar: face5,
    amount: "$12,000",
    probability: "90%",
    status: "Closed Won",
    statusColor: "primary-transparent"
  },
  {
    id: 6,
    name: "Athetic Corp",
    email: "atheticcorp33@gmail.com",
    avatar: face10,
    amount: "$15,000",
    probability: "70%",
    status: "Review",
    statusColor: "warning-transparent"
  }
];

// Upcoming Activities
interface UpcomingActivitiesType {
  id: number;
  day: string;
  month: string;
  title: string;
  description: string;
  time: string;
  dateBgColor: string;
}
export const UpcomingActivities: UpcomingActivitiesType[] = [
  {
    id: 1,
    day: "23",
    month: "Oct",
    title: "Meeting with XYZ Ltd.",
    description: "Discuss the upcoming partnership",
    time: "9:30 AM",
    dateBgColor: "primary-transparent"
  },
  {
    id: 2,
    day: "24",
    month: "Oct",
    title: "Demo with BrightTech",
    description: "Latest product features and",
    time: "11:30 AM",
    dateBgColor: "secondary-transparent"
  },
  {
    id: 3,
    day: "25",
    month: "Oct",
    title: "Meeting with Acme Corp",
    description: "Latest product features and",
    time: "2:00 PM",
    dateBgColor: "danger-transparent"
  },
  {
    id: 4,
    day: "25",
    month: "Oct",
    title: "Meeting with Acme Corp",
    description: "Latest product features and",
    time: "12:00 PM",
    dateBgColor: "warning-transparent"
  },
  {
    id: 5,
    day: "26",
    month: "Oct",
    title: "Meeting with Acme Corp",
    description: "Latest product features and",
    time: "3:00 PM",
    dateBgColor: "info-transparent"
  }
];

// Recent Deals Status
interface RecentDealsStatusType {
  id: number;
  dealId: string;
  company: string;
  companyLogo: string;
  companyLogoBg: string;
  amount: string;
  status: string;
  statusColor: string;
  date: string;
  representative: string;
  representativeAvatar: string;
}
export const RecentDealsStatus: RecentDealsStatusType[] = [
  {
    id: 1,
    dealId: "#001234",
    company: "Acme Corp.",
    companyLogo: comppanyLogo1,
    companyLogoBg: "secondary-transparent",
    amount: "$50,000",
    status: "Closed",
    statusColor: "danger",
    date: "Oct 18, 2024",
    representative: "John Doe",
    representativeAvatar: face13
  },
  {
    id: 2,
    dealId: "#001235",
    company: "Susenz Ltd.",
    companyLogo: comppanyLogo2,
    companyLogoBg: "pink-transparent",
    amount: "$75,000",
    status: "In Progress",
    statusColor: "warning",
    date: "Oct 16, 2024",
    representative: "Jane Smith",
    representativeAvatar: face2
  },
  {
    id: 3,
    dealId: "#001236",
    company: "BrightTech",
    companyLogo: comppanyLogo3,
    companyLogoBg: "primary-transparent",
    amount: "$120,000",
    status: "Lost",
    statusColor: "danger",
    date: "Oct 12, 2024",
    representative: "Peter Johnson",
    representativeAvatar: face11
  },
  {
    id: 4,
    dealId: "#001237",
    company: "Future Innovations",
    companyLogo: comppanyLogo5,
    companyLogoBg: "info-transparent",
    amount: "$65,000",
    status: "Pending",
    statusColor: "primary",
    date: "Oct 10, 2024",
    representative: "Emily Davis",
    representativeAvatar: face3
  },
  {
    id: 5,
    dealId: "#001238",
    company: "Global Ventures",
    companyLogo: comppanyLogo6,
    companyLogoBg: "teal-transparent",
    amount: "$90,000",
    status: "Closed",
    statusColor: "danger",
    date: "Oct 08, 2024",
    representative: "Mark Lee",
    representativeAvatar: face16
  }
];








