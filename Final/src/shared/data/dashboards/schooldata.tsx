import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face11 from '../../../assets/images/faces/11.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import type { ReactNode } from 'react';

// Attendance Report
export const AttendanceReportSeries = [{
  name: 'Boys',
  data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
}, {
  name: 'Girls',
  type: 'line',
  data: [45, 31, 24, 56, 13, 28, 55, 41, 67, 22, 15, 13]
}, {
  name: 'Teachers',
  type: 'line',
  data: [20, 55, 41, 30, 22, 50, 44, 55, 41, 67, 22, 43]
}]
export const AttendanceReportOptions = {
  chart: {
    type: 'bar',
    height: 345,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
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
  colors: ["rgba(var(--light-rgb),1)", "var(--primary-color)", "rgba(127, 103, 257,1)"],
  legend: {
    show: true,
    position: 'top',
    markers: {
      size: 5,
      shape: "circle"
    }
  },
  markers: {
    size: [0, 4, 0],
    colors: ['var(--primary-color)'],
    strokeColors: '#ffffff',
    strokeWidth: 1,
    hover: {
      size: 5
    }
  },
  stroke: {
    curve: 'smooth',
    width: [0, 2, 2],
    dashArray: [0, 0, 4]
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

// Overall Attendance
export const OverallAttendanceSeries = [
  {
    name: "Girls",
    data: [44, 42, 57, 86, 58, 55, 45],
  },
  {
    name: "Boys",
    data: [-34, -22, -37, -56, -21, -35, -34],
  },
]
export const OverallAttendanceOptions = {
  chart: {
    stacked: true,
    type: "bar",
    height: 305,
    toolbar: {
      show: false,
    },
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
  colors: ["var(--primary09)", "rgba(127, 103, 257, 0.9) "],
  plotOptions: {
    bar: {
      borderRadius: 2,
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "all",
      columnWidth: "25%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "top",
    fontFamily: "Mulish",
    markers: {
      size: 4,
      strokeWidth: 0,
      strokeColor: '#fff',
      fillColors: undefined,
      radius: 5,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0
    },
  },
  yaxis: {
    show: false,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    }
  },
  xaxis: {
    type: "month",
    categories: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      rotate: -90,
    },
  },
}


export interface DashboardStatsType {
  id: number;
  containerBorder: string;
  svgColor: string;
  svg1: ReactNode;
  avatarBg: string;
  svg2: ReactNode;
  title: string;
  value: string;
  percent: string;
  period: string;
  trend: "up" | "down";
  percentColor: string;
  arrowIconClass?: string
  percentage?: string
}
export const DashboardStats: DashboardStatsType[] = [
  {
    id: 1,
    containerBorder: "primary",
    svgColor: "primary",
    svg1: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000"
        viewBox="0 0 256 256">
        <path
          d="M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07L128,160Z"
          opacity="0.2"></path>
        <path
          d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z">
        </path>
      </svg>
    ),
    avatarBg: "primary-transparent",
    svg2: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path
          d="M7 12.27v3.72l5 2.73 5-2.73v-3.72L12 15zM5.18 9 12 12.72 18.82 9 12 5.28z"
          opacity=".8" fill="#fff"></path>
        <path
          d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm5 12.99-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72zm-5-3.27L5.18 9 12 5.28 18.82 9 12 12.72z">
        </path>
      </svg>
    ),
    title: "Students",
    value: "12,765",
    percent: "0.25%",
    period: "This Month",
    trend: "up",
    percentColor: "primary",
  },
  {
    id: 2,
    containerBorder: "secondary",
    svgColor: "secondary",
    svg1: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32"
        height="32" fill="#000000" viewBox="0 0 256 256">
        <path
          d="M224,56V90.06h0a44,44,0,1,0-56,67.88h0V192H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z"
          opacity="0.2"></path>
        <path
          d="M128,136a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h48A8,8,0,0,1,128,136Zm-8-40H72a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm112,65.47V224A8,8,0,0,1,220,231l-24-13.74L172,231A8,8,0,0,1,160,224V200H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16V86.53a51.88,51.88,0,0,1,0,74.94ZM160,184V161.47A52,52,0,0,1,216,76V56H40V184Zm56-12a51.88,51.88,0,0,1-40,0v38.22l16-9.16a8,8,0,0,1,7.94,0l16,9.16Zm16-48a36,36,0,1,0-36,36A36,36,0,0,0,232,124Z">
        </path>
      </svg>
    ),
    avatarBg: "secondary-transparent",
    svg2: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <rect fill="none" height="24" width="24" />
        <path
          d="M12,14c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z"
          opacity=".8" fill="#fff" />
        <path
          d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M12,14 c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z M19,8c0,1.3-0.84,2.4-2,2.82V7h2V8z" />
      </svg>
    ),
    title: "Awards",
    value: "450+",
    percent: "6.56%",
    period: "This Year",
    trend: "up",
    percentColor: "primary",
  },
  {
    id: 3,
    containerBorder: "danger",
    svgColor: "danger",
    svg1: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32"
        height="32" fill="#000000" viewBox="0 0 256 256">
        <path
          d="M224,80V192a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V56A16,16,0,0,0,56,72H216A8,8,0,0,1,224,80Z"
          opacity="0.2"></path>
        <path
          d="M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H56a8,8,0,0,1-8-8V78.63A23.84,23.84,0,0,0,56,80H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,132Z">
        </path>
      </svg>
    ),
    avatarBg: "danger-transparent",
    svg2: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <path
              d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8s8-3.59,8-8C20,7.59,16.41,4,12,4z M12.88,17.76V19h-1.75v-1.29c-0.74-0.18-2.39-0.77-3.02-2.96l1.65-0.67c0.06,0.22,0.58,2.09,2.4,2.09c0.93,0,1.98-0.48,1.98-1.61 c0-0.96-0.7-1.46-2.28-2.03c-1.1-0.39-3.35-1.03-3.35-3.31c0-0.1,0.01-2.4,2.62-2.96V5h1.75v1.24c1.84,0.32,2.51,1.79,2.66,2.23 l-1.58,0.67c-0.11-0.35-0.59-1.34-1.9-1.34c-0.7,0-1.81,0.37-1.81,1.39c0,0.95,0.86,1.31,2.64,1.9c2.4,0.83,3.01,2.05,3.01,3.45 C15.9,17.17,13.4,17.67,12.88,17.76z"
              enableBackground="new" opacity=".8" fill="#fff" />
            <path
              d="M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67 c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96c0,2.27,2.25,2.91,3.35,3.31 c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75c0.63,2.19,2.28,2.78,3.02,2.96 V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z" />
            <path
              d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z" />
          </g>
        </g>
      </svg>
    ),
    title: "Earnings",
    value: "$24,289",
    percent: "2.45%",
    period: "This Year",
    trend: "down",
    percentColor: "danger",
  },
  {
    id: 4,
    containerBorder: "warning",
    svgColor: "warning",
    svg1: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32"
        height="32" fill="#000000" viewBox="0 0 256 256">
        <path d="M192,80v96H104a32,32,0,1,0-32-32H64V80Z" opacity="0.2"></path>
        <path
          d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.39a8,8,0,0,0,7.23-4.57,48,48,0,0,1,86.76,0,8,8,0,0,0,7.23,4.57H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,144a24,24,0,1,1,24,24A24,24,0,0,1,80,144Zm136,56H159.43a64.39,64.39,0,0,0-28.83-26.16,40,40,0,1,0-53.2,0A64.39,64.39,0,0,0,48.57,200H40V56H216ZM56,96V80a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V88H72v8a8,8,0,0,1-16,0Z">
        </path>
      </svg>
    ),
    avatarBg: "warning-transparent",
    svg2: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M19 17.13v-6.95c-2.1.38-4.05 1.35-5.64 2.83L12 14.28l-1.36-1.27C9.05 11.53 7.1 10.56 5 10.18v6.95c2.53.34 4.94 1.3 7 2.83 2.07-1.52 4.47-2.49 7-2.83z"
          opacity=".8" fill="#fff" />
        <circle cx="12" cy="5" opacity=".3" r="2" />
        <path
          d="M16 5c0-2.21-1.79-4-4-4S8 2.79 8 5s1.79 4 4 4 4-1.79 4-4zm-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM3 19c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55C9.64 9.35 6.48 8 3 8v11zm2-8.82c2.1.38 4.05 1.35 5.64 2.83L12 14.28l1.36-1.27c1.59-1.48 3.54-2.45 5.64-2.83v6.95c-2.53.34-4.93 1.3-7 2.82-2.06-1.52-4.47-2.49-7-2.83v-6.94z" />
      </svg>
    ),
    title: "Teachers",
    value: "14,864",
    percent: "1.65%",
    period: "This Year",
    trend: "down",
    percentColor: "danger",
  }
];

// Students Marks
interface studentsMarksType {
  id: number;
  studentId: string;
  name: string;
  avatar: string;
  class: string;
  section: string;
  resultStatus: string;
  resultStatusBg: string;
  percentage: string;
  gpa: string;
}
export const StudentsMarks: studentsMarksType[] = [
  {
    id: 1,
    studentId: "#1116",
    name: "Studar Little",
    avatar: face2,
    class: "IX",
    section: "B",
    resultStatus: "Pass",
    resultStatusBg: "primary-transparent",
    percentage: "75%",
    gpa: "7.5",
  },
  {
    id: 2,
    studentId: "#8547",
    name: "Ion Somer",
    avatar: face4,
    class: "X",
    section: "A",
    resultStatus: "Pass",
    resultStatusBg: "primary-transparent",
    percentage: "65%",
    gpa: "6.5",
  },
  {
    id: 3,
    studentId: "#7564",
    name: "Shakira",
    avatar: face6,
    class: "X",
    section: "B",
    resultStatus: "Fail",
    resultStatusBg: "danger-transparent",
    percentage: "25%",
    gpa: "2.5",
  },
  {
    id: 4,
    studentId: "#1254",
    name: "Thomas Shelby",
    avatar: face8,
    class: "IX",
    section: "A",
    resultStatus: "Pass",
    resultStatusBg: "primary-transparent",
    percentage: "95%",
    gpa: "9.5",
  },
  {
    id: 5,
    studentId: "#7458",
    name: "Stefan U",
    avatar: face10,
    class: "IX",
    section: "B",
    resultStatus: "Pass",
    resultStatusBg: "primary-transparent",
    percentage: "62%",
    gpa: "6.2",
  }
];

// UPCOMING ASSIGNMENTS
interface UpcomingAssignmentType {
  id: number;
  title: string;
  dateRange: string;
  deadline: string;
  deadlineBg: string;
}
export const UpcomingAssignments: UpcomingAssignmentType[] = [
  {
    id: 1,
    title: "Assignment-4",
    dateRange: "1,Jul 2024 - 24,Jul 2024",
    deadline: "3 Days Left",
    deadlineBg: "badge bg-danger-transparent",
  },
  {
    id: 2,
    title: "Class Test-3",
    dateRange: "14,Aug 2024 - 20,Aug 2024",
    deadline: "10 Days Left",
    deadlineBg: "badge bg-danger-transparent",
  },
  {
    id: 3,
    title: "Unit Test-1",
    dateRange: "20,Sep 2024 - 30,Sep 2024",
    deadline: "2 Months Left",
    deadlineBg: "badge bg-primary-transparent",
  },
  {
    id: 4,
    title: "Assignment-5",
    dateRange: "1,Nov 2024 - 10,Nov 2024",
    deadline: "3 Months Left",
    deadlineBg: "badge bg-primary-transparent",
  },
  {
    id: 5,
    title: "Class Test-4",
    dateRange: "2,Jan 2025 - 12,Jan 2024", // Note: date range seems incorrect (start date is after end date)
    deadline: "4 Months Left",
    deadlineBg: "badge bg-primary-transparent",
  },
  {
    id: 6,
    title: "Class Test-5",
    dateRange: "2,Jan 2025 - 22,July 2024", // Note: end date is before start date
    deadline: "5 Months Left",
    deadlineBg: "badge bg-primary-transparent",
  }
];

// Today's Acitivity List
interface TodayActivityType {
  id: number;
  title: string;
  standards: string;
  icon: string;
  iconBg: string;
  startTime: string;
  endTime: string;
  studentsCount: string;
  studentsCountBg: string;
}
export const TodayAcitivityList: TodayActivityType[] = [
  {
    id: 1,
    title: "Science Workshop",
    standards: "6th to 10th Standard",
    icon: "ri-tools-fill fs-18",
    iconBg: "primary-transparent",
    startTime: "09:00 AM",
    endTime: "11:00 AM",
    studentsCount: "50 Students",
    studentsCountBg: "primary-transparent"
  },
  {
    id: 2,
    title: "Math Olympiad",
    standards: "8th Standard",
    icon: "ri-infinity-fill fs-18",
    iconBg: "secondary-transparent",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    studentsCount: "30 Students",
    studentsCountBg: "primary-transparent"
  },
  {
    id: 3,
    title: "Art Exhibition",
    standards: "7th to 12th Standard",
    icon: "ri-image-fill fs-18",
    iconBg: "danger-transparent",
    startTime: "01:00 PM",
    endTime: "03:00 PM",
    studentsCount: "40 Students",
    studentsCountBg: "primary-transparent"
  },
  {
    id: 4,
    title: "Literature Debate",
    standards: "9th Standard",
    icon: "ri-volume-up-fill fs-18",
    iconBg: "warning-transparent",
    startTime: "02:30 PM",
    endTime: "04:00 PM",
    studentsCount: "20 Students",
    studentsCountBg: "primary-transparent"
  },
  {
    id: 5,
    title: "Sports Meet",
    standards: "All Standards",
    icon: "ri-run-fill fs-18",
    iconBg: "info-transparent",
    startTime: "03:00 PM",
    endTime: "05:00 PM",
    studentsCount: "100+ Students",
    studentsCountBg: "primary-transparent"
  },
  {
    id: 6,
    title: "History Quiz",
    standards: "9th to 12th Standard",
    icon: "ri-question-fill fs-18",
    iconBg: "orange-transparent",
    startTime: "12:30 PM",
    endTime: "01:30 PM",
    studentsCount: "40 Students",
    studentsCountBg: "primary-transparent"
  }
];

// Exam Results
interface ExamProgress {
  width: string;
  valueNow: number;
  valueMin: number;
  valueMax: number;
  barBg: string;
}
interface ExamResultType {
  id: number;
  title: string;
  standards: string;
  iconClass: string;
  avatarBg: string;
  progress: ExamProgress;
}
export const ExamResults: ExamResultType[] = [
  {
    id: 1,
    title: "Half Yearly Exams",
    standards: "6th to 10th Standard",
    iconClass: "ri-pencil-fill fs-18",
    avatarBg: "primary-transparent",
    progress: {
      width: "78%",
      valueNow: 78,
      valueMin: 0,
      valueMax: 100,
      barBg: "primary"
    }
  },
  {
    id: 2,
    title: "Annual Exam Results",
    standards: "10th Standard - Science Stream",
    iconClass: "ri-pencil-fill fs-18",
    avatarBg: "secondary-transparent",
    progress: {
      width: "90%",
      valueNow: 90,
      valueMin: 0,
      valueMax: 100,
      barBg: "secondary"
    }
  },
  {
    id: 3,
    title: "Mid-Term Exam Results",
    standards: "9th Standard - Mathematics",
    iconClass: "ri-pencil-fill fs-18",
    avatarBg: "danger-transparent",
    progress: {
      width: "85%",
      valueNow: 85,
      valueMin: 0,
      valueMax: 100,
      barBg: "danger"
    }
  },
  {
    id: 4,
    title: "Unit Test Results",
    standards: "8th Standard - English",
    iconClass: "ri-pencil-fill fs-18",
    avatarBg: "warning-transparent",
    progress: {
      width: "95%",
      valueNow: 95,
      valueMin: 0,
      valueMax: 100,
      barBg: "warning"
    }
  }
];

// Teachers List
interface TeacherListType {
  id: number;
  name: string;
  avatar: string;
  qualification: string;
  subject: string;
  subjectColor: string;
  tdClass?: string
}
export const TeachersList: TeacherListType[] = [
  {
    id: 1,
    name: "John Smith",
    avatar: face11,
    qualification: "M.Ed",
    subject: "Mathematics",
    subjectColor: "primary"
  },
  {
    id: 2,
    name: "Mary Johnson",
    avatar: face3,
    qualification: "B.A. in English",
    subject: "English",
    subjectColor: "secondary"
  },
  {
    id: 3,
    name: "Robert Davis",
    avatar: face4,
    qualification: "Ph.D. in Science",
    subject: "Physics",
    subjectColor: "danger"
  },
  {
    id: 4,
    name: "Sarah Thompson",
    avatar: face1,
    qualification: "M.A. in History",
    subject: "History",
    subjectColor: "info"
  },
  {
    id: 5,
    name: "Michael Brown",
    avatar: face15,
    qualification: "B.Ed",
    subject: "Chemistry",
    subjectColor: "warning"
  },
  {
    id: 6,
    name: "Emily Wilson",
    avatar: face2,
    qualification: "M.A. in Geography",
    subject: "Geography",
    subjectColor: "pink"
  },
  {
    id: 7,
    name: "Angel",
    avatar: face6,
    qualification: "M.A.",
    subject: "Telugu",
    subjectColor: "orange",
    tdClass: 'border-bottom-0'
  }
];

// Notice Board
interface NoticeType {
  id: number;
  title: string;
  description: string;
  date: string;
  svg: ReactNode;
  svgBg: string;
}
export const NoticeBoard: NoticeType[] = [
  {
    id: 1,
    title: "Book Fair Event",
    description: "Explore books and join the fun!",
    date: "10 Jun 2024",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg" width="32"
        height="32" fill="#000000" viewBox="0 0 256 256">
        <path
          d="M232,112a24,24,0,0,0-24-24H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0ZM40,112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v23.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33Zm160,96H56a8,8,0,0,1-8-8V172.56A38.77,38.77,0,0,0,62.88,176a39.69,39.69,0,0,0,29-11.31A40.36,40.36,0,0,0,96,160a40,40,0,0,0,64,0,40.36,40.36,0,0,0,4.13,4.67A39.67,39.67,0,0,0,192,176c.38,0,.76,0,1.14,0A38.77,38.77,0,0,0,208,172.56V200A8,8,0,0,1,200,208Z">
        </path>
      </svg>
    ),
    svgBg: "primary"
  },
  {
    id: 2,
    title: "Science Fair Competition",
    description: "Showcase your science projects!",
    date: "24 Jun 2024",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32"
        height="32" fill="#000000" viewBox="0 0 256 256">
        <path
          d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z">
        </path>
      </svg>
    ),
    svgBg: "secondary"
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    description: "Discuss your child's progress.",
    date: "09 Jul 2024",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg" width="32"
        height="32" fill="#000000" viewBox="0 0 256 256">
        <path
          d="M216,40H40A16,16,0,0,0,24,56V216a8,8,0,0,0,11.58,7.16L64,208.94l28.42,14.22a8,8,0,0,0,7.16,0L128,208.94l28.42,14.22a8,8,0,0,0,7.16,0L192,208.94l28.42,14.22A8,8,0,0,0,232,216V56A16,16,0,0,0,216,40Zm0,163.06-20.42-10.22a8,8,0,0,0-7.16,0L160,207.06l-28.42-14.22a8,8,0,0,0-7.16,0L96,207.06,67.58,192.84a8,8,0,0,0-7.16,0L40,203.06V56H216ZM60.42,167.16a8,8,0,0,0,10.74-3.58L76.94,152h38.12l5.78,11.58a8,8,0,1,0,14.32-7.16l-32-64a8,8,0,0,0-14.32,0l-32,64A8,8,0,0,0,60.42,167.16ZM96,113.89,107.06,136H84.94ZM136,128a8,8,0,0,1,8-8h16V104a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16H176v16a8,8,0,0,1-16,0V136H144A8,8,0,0,1,136,128Z">
        </path>
      </svg>
    ),
    svgBg: "danger"
  },
  {
    id: 4,
    title: "Sports Day Celebration",
    description: "Cheer for your team in sports!",
    date: "12 Jul 2024",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg" width="32"
        height="32" fill="#000000" viewBox="0 0 256 256">
        <path
          d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z">
        </path>
      </svg>
    ),
    svgBg: "warning"
  },
  {
    id: 5,
    title: "School Picnic Announcement",
    description: "Enjoy outdoor fun, delicious food!",
    date: "05 Jul 2024",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg" width="32"
        height="32" fill="#000000" viewBox="0 0 256 256">
        <path
          d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z">
        </path>
      </svg>
    ),
    svgBg: "info"
  },
  {
    id: 6,
    title: "School 17Th Anevarsery",
    description: "Let's Celebrate the Aneversary.",
    date: "05 Jul 2024",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path
          d="M101.11,197.11,58.89,154.89l-18.4,50.63a7.79,7.79,0,0,0,10,10Z"
          opacity="0.2" />
        <path
          d="M78.09,102.09l75.82,75.82,41-14.9a7.79,7.79,0,0,0,2.85-12.84L105.83,58.29A7.79,7.79,0,0,0,93,61.14Z"
          opacity="0.2" />
        <path
          d="M40.49,205.52,93,61.14a7.79,7.79,0,0,1,12.84-2.85l91.88,91.88A7.79,7.79,0,0,1,194.86,163L50.48,215.51A7.79,7.79,0,0,1,40.49,205.52Z"
          fill="none" stroke="currentColor"
          strokeLinecap="round" strokeLinejoin="round"
          strokeWidth="16" />
        <path d="M168,72s0-24,24-24,24-24,24-24" fill="none"
          stroke="currentColor" strokeLinecap="round"
          strokeLinejoin="round" strokeWidth="16" />
        <line x1="144" y1="16" x2="144" y2="40" fill="none"
          stroke="currentColor" strokeLinecap="round"
          strokeLinejoin="round" strokeWidth="16" />
        <line x1="216" y1="112" x2="232" y2="128" fill="none"
          stroke="currentColor" strokeLinecap="round"
          strokeLinejoin="round" strokeWidth="16" />
        <line x1="216" y1="80" x2="240" y2="72" fill="none"
          stroke="currentColor" strokeLinecap="round"
          strokeLinejoin="round" strokeWidth="16" />
        <line x1="78.09" y1="102.09" x2="153.91" y2="177.91"
          fill="none" stroke="currentColor"
          strokeLinecap="round" strokeLinejoin="round"
          strokeWidth="16" />
        <line x1="101.11" y1="197.11" x2="58.89" y2="154.89"
          fill="none" stroke="currentColor"
          strokeLinecap="round" strokeLinejoin="round"
          strokeWidth="16" />
      </svg>
    ),
    svgBg: "orange"
  }
];



