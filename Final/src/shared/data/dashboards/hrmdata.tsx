
import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face13 from '../../../assets/images/faces/13.jpg';
import face16 from '../../../assets/images/faces/16.jpg';
import type { ReactNode } from 'react';




// Performance By Category
export const PerformanceSeries = [{
  name: 'Designing',
  data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
}, {
  name: 'Development',
  data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
}, {
  name: 'Marketing',
  data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
}, {
  name: 'Testing',
  type: 'line',
  data: [45, 31, 24, 56, 13, 28, 55, 41, 67, 22, 15, 13]
}, {
  name: 'Other',
  type: 'line',
  data: [20, 55, 41, 30, 22, 50, 44, 55, 41, 67, 22, 43]
}]
export const PerformanceOptions = {
  chart: {
    type: 'bar',
    height: 360,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 3,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.1,
    },
  },
  grid: {
    borderColor: '#f1f1f1',
    strokeDashArray: 3
  },
  yaxis: {
    max: 100
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  colors: ["var(--primary07)", "var(--primary02)", "var(--primary05)", "rgba(127, 103, 257, 1)", "rgba(253, 73, 99,0.8)"],
  legend: {
    show: true,
    position: 'bottom',
    markers: {
      size: 5,
      shape: "circle"
    }
  },
  markers: {
    size: [0, 0, 0, 4, 0],
    colors: ['rgba(var(--secondary-rgb), 1)'],
    strokeColors: '#ffffff',
    strokeWidth: 1,
    hover: {
      size: 5
    }
  },
  stroke: {
    curve: 'smooth',
    width: [0, 0, 0, 2, 2],
    dashArray: [0, 0, 0, 0, 4]
  },
  plotOptions: {
    bar: {
      columnWidth: "25%",
      borderRadius: 0,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  fill: {
    opacity: 1
  }
}

// Hiring Sources
export const HiringSourcesSeries = [18235, 12743, 8369, 7543]
export const HiringSourcesOptions = {
  chart: {
    height: 225,
    type: 'donut',
  },
  labels: ["Job Boards", "Referrals", "Media", "Campus"],
  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },
  stroke: {
    width: 8,
    colors: ["rgba(244, 244, 244,1)"],
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
  colors: ["var(--primary09)", "rgba(127, 103, 257, 0.9)", "rgba(253, 73, 99, 0.9)", "rgba(255, 169, 9, 0.9)"],
}


// cards
export interface HrmCardType {
  id: number;
  title: string;
  value: string;
  percent: number;
  percentColor: string;
  timeline: string;
  direction: string;
  svg: ReactNode;
  svgColor: string;
}
export const HrmCards: HrmCardType[] = [
  {
    id: 1,
    title: "Total Employees",
    value: "46,658",
    percent: 0.45,
    percentColor: "primary",
    timeline: "this month",
    direction: "up",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <path
              d="M12 4c-4.42 0-8 3.58-8 8 0 1.95.7 3.73 1.86 5.12C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C19.3 15.73 20 13.95 20 12c0-4.42-3.58-8-8-8zm0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13z"
              enableBackground="new" opacity=".8"
              fill="#fff" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5zm6.14-2.88C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z" />
            <path
              d="M12 5.93c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </g>
        </g>
      </svg>
    ),
    svgColor: "primary",
  },
  {
    id: 2,
    title: "New Employees",
    value: "4,654",
    percent: 4.43,
    percentColor: "primary",
    timeline: "this month",
    direction: "up",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M19 5H5v14h14V5zm-7 1c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm6 12H6v-1.53c0-2.5 3.97-3.58 6-3.58s6 1.08 6 3.58V18z"
          opacity=".8" fill="#fff" />
        <path
          d="M20.66 3.88c-.14-.21-.33-.4-.54-.54-.11-.07-.22-.13-.34-.18-.24-.1-.5-.16-.78-.16h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c.28 0 .54-.06.78-.16.12-.05.23-.11.34-.18.21-.14.4-.33.54-.54.21-.32.34-.71.34-1.12V5c0-.41-.13-.8-.34-1.12zM12 2.75c.22 0 .41.1.55.25.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5.14-.15.33-.25.55-.25zM19 19H5V5h14v14zm-7-7c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 2.88c-2.03 0-6 1.08-6 3.58V18h12v-1.53c0-2.51-3.97-3.59-6-3.59zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31z" />
      </svg>
    ),
    svgColor: "secondary",
  },
  {
    id: 3,
    title: "Total Clients",
    value: "25,853",
    percent: 1.25,
    percentColor: "primary",
    timeline: "this month",
    direction: "up",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
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
    svgColor: "danger",
  },
  {
    id: 4,
    title: "Employees On Leave",
    value: "63,744",
    percent: 2.97,
    percentColor: "danger",
    timeline: "this month",
    direction: "down",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M2 19h20V5H2v14zM14 6h7v5h-7V6zM9 6c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM3 16.59C3 14.08 6.97 13 9 13s6 1.08 6 3.58V18H3v-1.41z"
          opacity=".8" fill="#fff" />
        <path
          d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zm0 16H2V5h20v14zM21 6h-7v5h7V6zm-1 2l-2.5 1.75L15 8V7l2.5 1.75L20 7v1zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.41zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z" />
      </svg>
    ),
    svgColor: "warning",
  }
];

// Employees List
interface EmployeesListType {
  id: number;
  name: string;
  employeeId: string;
  role: string;
  email: string;
  status: string;
  statusBg: string;
  phone: string;
  salary: string;
  image: string;
}
export const EmployeesList: EmployeesListType[] = [
  {
    id: 1,
    name: "Richard Dom",
    employeeId: "#Spt00120",
    role: "Team Leader",
    email: "richard116@demo.com",
    status: "Active",
    statusBg: "primary-transparent",
    phone: "+0987654321",
    salary: "$15,000",
    image: face1
  },
  {
    id: 2,
    name: "Kakashra Sri",
    employeeId: "#Spt00121",
    role: "Web Developer",
    email: "Kakashra987@demo.com",
    status: "InActive",
    statusBg: "secondary-transparent",
    phone: "+0986548761",
    salary: "$20,000",
    image: face2
  },
  {
    id: 3,
    name: "Nikki Jey",
    employeeId: "#Spt00122",
    role: "Project Manager",
    email: "Nikki654@demo.com",
    status: "Active",
    statusBg: "primary-transparent",
    phone: "+0986548787",
    salary: "$25,000",
    image: face3
  },
  {
    id: 4,
    name: "Sasukey Ahuhi",
    employeeId: "#Spt00123",
    role: "Project Manager",
    email: "Sasukey986@demo.com",
    status: "InActive",
    statusBg: "secondary-transparent",
    phone: "+0986548788",
    salary: "$30,000",
    image: face4
  },
  {
    id: 5,
    name: "Xiong Yu",
    employeeId: "#Spt00124",
    role: "UI Developer",
    email: "Xiongu987@demo.com",
    status: "Active",
    statusBg: "primary-transparent",
    phone: "+0986548988",
    salary: "$35,000",
    image: face5
  }
];

// Meetings Schedule
interface MeetingsScheduleType {
  id: number;
  title: string;
  dateTime: string;
  icon: string;
  iconBg: string;
  buttonStyle: string;
}
export const MeetingsSchedule: MeetingsScheduleType[] = [
  {
    id: 1,
    title: "Lead Meeting",
    dateTime: "03 Feb(9.00am-10.00am)",
    icon: "ri-vidicon-line",
    iconBg: "bg-danger-transparent",
    buttonStyle: "primary"
  },
  {
    id: 2,
    title: "Project Meeting",
    dateTime: "04 Feb(9.00am-10.00am)",
    icon: "ri-phone-line",
    iconBg: "bg-secondary-transparent",
    buttonStyle: "light"
  },
  {
    id: 3,
    title: "Team Meeting",
    dateTime: "05 Feb(9.00am-10.00am)",
    icon: "ri-vidicon-line",
    iconBg: "bg-danger-transparent",
    buttonStyle: "light"
  },
  {
    id: 4,
    title: "Client Meeting",
    dateTime: "06 Feb(9.00am-10.00am)",
    icon: "ri-phone-line",
    iconBg: "bg-secondary-transparent",
    buttonStyle: "light"
  },
  {
    id: 5,
    title: "Client Meeting",
    dateTime: "06 Feb(9.00am-10.00am)",
    icon: "ri-phone-line",
    iconBg: "bg-secondary-transparent",
    buttonStyle: "light"
  },
  {
    id: 6,
    title: "Project Meeting",
    dateTime: "04 Feb(9.00am-10.00am)",
    icon: "ri-phone-line",
    iconBg: "bg-secondary-transparent",
    buttonStyle: "light"
  }
];

// LEAVE REQUESTS
interface LeaveRequestsType {
  id: number;
  name: string;
  leaveType: string;
  avatar: string;
  borderColor: string;
}
export const LeaveRequests: LeaveRequestsType[] = [
  { id: 1, name: "Sarah Taylor", leaveType: "Bereavement Leave", avatar: face16, borderColor: "border-primary" },
  { id: 2, name: "John Doe", leaveType: "Compassionate Leave", avatar: face1, borderColor: "border-secondary" },
  { id: 3, name: "Jane Smith", leaveType: "Study/Training Leave", avatar: face3, borderColor: "border-danger" },
  { id: 4, name: "Robert White", leaveType: "Jury Duty Leave", avatar: face4, borderColor: "border-warning" },
  { id: 5, name: "Emily Clark", leaveType: "Casual Leave", avatar: face5, borderColor: "border-info" },
  { id: 6, name: "Alex Johnson", leaveType: "Emergency Leave", avatar: face5, borderColor: "border-pink" },
];

// Upcoming Interviews
interface UpcomingInterviewsType {
  id: number;
  name: string;
  position: string;
  image: string;
  imageBg: string;
  date: string;
  time: string;
  timeBg: string;
}
export const UpcomingInterviews: UpcomingInterviewsType[] = [
  {
    id: 1,
    name: "John Doe",
    position: " Software Engineer",
    image: face2,
    imageBg: "primary-transparent",
    date: "30 Oct, 2024",
    time: "10:30 PM",
    timeBg: "primary-transparent"
  },
  {
    id: 2,
    name: "Jane Smith",
    position: " Marketing Manager",
    image: face12,
    imageBg: "secondary-transparent",
    date: "02 Nov, 2024",
    time: "1:42 PM",
    timeBg: "secondary-transparent"
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: " UX Designer",
    image: face3,
    imageBg: "danger-transparent",
    date: "08 Nov, 2024",
    time: "9:32 AM",
    timeBg: "danger-transparent"
  },
  {
    id: 4,
    name: "Emily Brown",
    position: " Data Analyst",
    image: face13,
    imageBg: "warning-transparent",
    date: "10 Nov, 2024",
    time: "10:23 PM",
    timeBg: "warning-transparent"
  },
  {
    id: 5,
    name: "David Lee",
    position: " Sales Associate",
    image: face1,
    imageBg: "info-transparent",
    date: "11 Nov, 2024",
    time: "02:13 PM",
    timeBg: "info-transparent"
  }
];

// Recruitment Pipeline
interface RecruitmentPipelineType {
  id: number;
  title: string;
  icon: string;
  iconBg: string;
  percent: string;
  percentBg: string;
  value: string;
  progress: number;
  progressBg: string;
}
export const RecruitmentPipeline: RecruitmentPipelineType[] = [
  {
    id: 1,
    title: "Total Applications",
    icon: "ti ti-file-text",
    iconBg: "bg-primary-transparent",
    percent: "3.5%",
    percentBg: "bg-primary-transparent",
    value: "$25,000",
    progress: 95,
    progressBg: "bg-primary"
  },
  {
    id: 2,
    title: "Interviewed",
    icon: "ti ti-device-imac",
    iconBg: "bg-secondary-transparent",
    percent: "2.8%",
    percentBg: "bg-secondary-transparent",
    value: "$15,000",
    progress: 85,
    progressBg: "bg-secondary"
  },
  {
    id: 3,
    title: "Shortlisted",
    icon: "ti ti-clipboard-plus",
    iconBg: "bg-danger-transparent",
    percent: "3.0%",
    percentBg: "bg-danger-transparent",
    value: "$6,500",
    progress: 75,
    progressBg: "bg-danger"
  },
  {
    id: 4,
    title: "Rejected",
    icon: "ti ti-file-x",
    iconBg: "bg-warning-transparent",
    percent: "2.5%",
    percentBg: "bg-warning-transparent",
    value: "$4,000",
    progress: 65,
    progressBg: "bg-warning"
  },
  {
    id: 5,
    title: "Blocked",
    icon: "ti ti-file-off",
    iconBg: "bg-info-transparent",
    percent: "4.0%",
    percentBg: "bg-info-transparent",
    value: "$8,000",
    progress: 45,
    progressBg: "bg-info"
  }
];

// Performance By Category
interface PerformanceByCategoryType {
  id: number;
  category: string;
  value: string;
  percent: string;
  percentColor: string;
  percentBg: string;
  direction: string;
}
export const PerformanceByCategory: PerformanceByCategoryType[] = [
  {
    id: 1,
    category: "Designing",
    value: "8.56k",
    percent: "0.25%",
    percentColor: "primary",
    percentBg: "primary-transparent",
    direction: "up",
  },
  {
    id: 2,
    category: "Developing",
    value: "$38.15k",
    percent: "0.33%",
    percentColor: "primary",
    percentBg: "primary-transparent",
    direction: "up",
  },
  {
    id: 3,
    category: "Marketing",
    value: "$58.5k",
    percent: "0.15%",
    percentColor: "danger",
    percentBg: "danger-transparent",
    direction: "down",
  },
  {
    id: 4,
    category: "Testing",
    value: "$58.5k",
    percent: "0.15%",
    percentColor: "danger",
    percentBg: "danger-transparent",
    direction: "down",
  }
];


// Hiring Sources
export interface HiringSourcesType {
  id: number;
  icon: string;
  iconBg: string;
  label: string;
  count: string;
  className: string;
  border: string;
}
export const HiringSources: HiringSourcesType[] = [
  {
    id: 1,
    icon: "ri-dashboard-fill",
    iconBg: "bg-primary-transparent",
    label: "Job Boards",
    count: '18,235',
    className: "jobboards",
    border: "border-end"
  },
  {
    id: 2,
    icon: "ri-exchange-funds-line",
    iconBg: "bg-secondary-transparent",
    label: "Referrals",
    count: '12,743',
    className: "referrals",
    border: "border-end"
  },
  {
    id: 3,
    icon: "ri-record-circle-line",
    iconBg: "bg-danger-transparent",
    label: "Media",
    count: '8,369',
    className: "socialmedia",
    border: "border-end"
  },
  {
    id: 4,
    icon: "ri-building-2-line",
    iconBg: "bg-warning-transparent",
    label: "Campus",
    count: '7,543',
    className: "campus",
    border: ""
  }
];

