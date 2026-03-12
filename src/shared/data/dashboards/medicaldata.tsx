import face2 from '../../../assets/images/faces/2.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face11 from '../../../assets/images/faces/11.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import doctors1 from '../../../assets/images/faces/doctors/1.jpg';
import doctors2 from '../../../assets/images/faces/doctors/2.jpg';
import doctors3 from '../../../assets/images/faces/doctors/3.jpg';
import doctors4 from '../../../assets/images/faces/doctors/4.jpg';
import doctors5 from '../../../assets/images/faces/doctors/5.jpg';
import doctors6 from '../../../assets/images/faces/doctors/6.jpg';
import type { ReactNode } from 'react';


// TOTAL PATIENTS
export const TotalPatientSeries = [
  {
    name: "This Year",
    data: [98, 110, 80, 145, 105, 112, 87, 150, 102, 98, 110, 80],
    type: "area",
  },
  {
    name: "Previous Year",
    data: [75, 55, 65, 28, 75, 25, 52, 30, 30, 54, 40, 59],
    type: "bar",
  },
]
export const TotalPatientOptions = {
  chart: {
    animations: {
      enabled: false,
    },
    height: 335,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "top",
    markers: {
      size: 4,
      strokeWidth: 0,
      strokeColor: '#fff',
      fillColors: undefined,
      radius: 5,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0,
      shape: "circle"
    },
  },
  stroke: {
    show: true,
    curve: "straight",
    width: [2, 1.5],
    dashArray: [4, 0],
  },

  plotOptions: {
    bar: {
      columnWidth: "30%",
      borderRadius: 2
    }
  },
  colors: ["var(--primary-color)", "rgba(127, 103, 257 , 1)"],
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
  markers: {
    size: [4, 0],
    hover: {
      size: 9
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 3,
      opacity: 0.2
    }
  },
  fill: {
    type: ['gradient', 'solid'],
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100],
      colorStops: [
        [
          {
            offset: 0,
            color: "var(--primary01)",
            opacity: 0.1
          },
          {
            offset: 75,
            color: "var(--primary01)",
            opacity: 1
          },
          {
            offset: 100,
            color: 'var(--primary02)',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: 'var(--primary02)',
            opacity: 1
          },
          {
            offset: 75,
            color: 'var(--primary02)',
            opacity: 1
          },
          {
            offset: 100,
            color: 'var(--primary02)',
            opacity: 1
          }
        ],
      ]
    }
  },
  yaxis: {
    title: {
      style: {
        color: "#adb5be",
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        cssClass: "apexcharts-yaxis-label",
      },
    },
  },
  xaxis: {
    type: "month",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
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
      style: {
        colors: "rgb(107 ,114 ,128)",
        fontSize: "12px",
      },
    },
  },
}


interface DashboardCardsType {
  id: number;
  svg: ReactNode;
  svgBg: string;
  count: number | string;
  title: string;
  date: string;
  percent: string;
  percentBg: string;
  percentIndicator: string;
  percentIndicatorMargin: string;
}
export const DashboardCards: DashboardCardsType[] = [
  {
    id: 1,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <rect fill="none" height="24" width="24" />
        <path
          d="M12,4c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2s-2-0.9-2-2C10,4.9,10.9,4,12,4z M10.94,20H9.75 C9.34,20,9,19.66,9,19.25c0-0.41,0.34-0.75,0.75-0.75h1.89L10.94,20z M18,20h-4.85l2.94-6.27c0.54,0.2,1.01,0.41,1.4,0.61 C17.8,14.5,18,14.84,18,15.22V20z M9.75,22C8.23,22,7,20.77,7,19.25c0-1.52,1.23-2.75,2.75-2.75h2.83l1.55-3.3 C13.47,13.07,12.76,13,12,13c-2.37,0-4.29,0.73-5.48,1.34C6.2,14.5,6,14.84,6,15.22V22H9.75z"
          opacity=".8" fill="#fff" />
        <path
          d="M12,10c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S8,3.79,8,6C8,8.21,9.79,10,12,10z M12,4c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 s-2-0.9-2-2C10,4.9,10.9,4,12,4z M18.39,12.56C16.71,11.7,14.53,11,12,11c-2.53,0-4.71,0.7-6.39,1.56C4.61,13.07,4,14.1,4,15.22V22 h2v-6.78c0-0.38,0.2-0.72,0.52-0.88C7.71,13.73,9.63,13,12,13c0.76,0,1.47,0.07,2.13,0.2l-1.55,3.3H9.75C8.23,16.5,7,17.73,7,19.25 C7,20.77,8.23,22,9.75,22h2.18H18c1.1,0,2-0.9,2-2v-4.78C20,14.1,19.39,13.07,18.39,12.56z M10.94,20H9.75C9.34,20,9,19.66,9,19.25 c0-0.41,0.34-0.75,0.75-0.75h1.89L10.94,20z M18,20h-4.85l2.94-6.27c0.54,0.2,1.01,0.41,1.4,0.61C17.8,14.5,18,14.84,18,15.22V20z" />
      </svg>
    ),
    svgBg: "primary",
    count: "256",
    title: "Total Patients",
    date: "Today",
    percent: "4.97%",
    percentBg: "primary-transparent",
    percentIndicator: "up",
    percentIndicatorMargin: "1",
  },
  {
    id: 2,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <path
            d="M15,9c0,1.1-0.9,2-2,2h-2c-1.1,0-2-0.9-2-2H4v11h16V9H15z M11,16H9v2H7v-2H5v-2h2v-2h2v2h2V16z M17,17.5h-4 V16h4V17.5z M19,14.5h-6V13h6V14.5z"
            opacity=".8" fill="#fff" />
          <path
            d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M11,4h2v5h-2V4z M20,20H4V9h5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2h5V20z M11,16H9v2H7v-2H5v-2h2v-2h2v2h2V16z M13,14.5V13h6v1.5H13z M13,17.5V16h4v1.5H13z" />
        </g>
      </svg>
    ),
    svgBg: "secondary",
    count: "4,026",
    title: "Total Doctors",
    date: "Today",
    percent: "+0.40%",
    percentBg: "danger-transparent",
    percentIndicator: "down",
    percentIndicatorMargin: "1",
  },
  {
    id: 3,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <g opacity=".8" fill="#fff">
              <path
                d="M4,20h16V8H4V20z M8,13h3v-3h2v3h3v2h-3v3h-2v-3H8V13z" />
            </g>
            <path
              d="M20,6h-4V4c0-1.1-0.9-2-2-2h-4C8.9,2,8,2.9,8,4v2H4C2.9,6,2,6.9,2,8v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8 C22,6.9,21.1,6,20,6z M10,4h4v2h-4V4z M20,20H4V8h16V20z" />
            <polygon
              points="11,18 13,18 13,15 16,15 16,13 13,13 13,10 11,10 11,13 8,13 8,15 11,15" />
          </g>
        </g>
      </svg>
    ),
    svgBg: "danger",
    count: "148",
    title: "Total Appointments",
    date: "Today",
    percent: "16.34%",
    percentBg: "primary-transparent",
    percentIndicator: "up",
    percentIndicatorMargin: "1",
  },
  {
    id: 4,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
          <path
            d="M4,20h16V4H4V20z M6,12.87c0-1,0.62-1.85,1.5-2.2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2v1.67 c0.88,0.35,1.5,1.2,1.5,2.2V17h-1.5v-1.5h-9V17H6V12.87z"
            opacity=".8" fill="#fff" />
          <path
            d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,20H4V4h16V20z" />
          <path
            d="M7.5,15.5h9V17H18v-4.13c0-1-0.62-1.85-1.5-2.2V9c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v1.67c-0.88,0.35-1.5,1.2-1.5,2.2V17 h1.5V15.5z M9,8.5h6v2H9V8.5z M8.37,12h7.27c0.48,0,0.87,0.39,0.87,0.87V14h-9v-1.13H7.5C7.5,12.39,7.89,12,8.37,12z" />
        </g>
      </svg>
    ),
    svgBg: "warning",
    count: "116",
    title: "Available Rooms",
    date: "Today",
    percent: "0.21%",
    percentBg: "primary-transparent",
    percentIndicator: "up",
    percentIndicatorMargin: "1",
  },
]

// Patients List
interface PatientsListType {
  id: number;
  patientId: string;
  name: string;
  gender: string;
  age: number;
  assginedDoctor: string;
  phone: string;
  appointmentedDate: string;
  disease: string;
  diseaseBg: string;
  room: number;
  avatar: string;
}
export const PatientsList: PatientsListType[] = [
  {
    id: 1,
    patientId: "SPK-9ABC",
    name: "Jhon Doe",
    gender: "Male",
    age: 25,
    assginedDoctor: "Dr.M.Smith",
    phone: "123-456-7890",
    appointmentedDate: "2023-10-20",
    disease: "Hypertension",
    diseaseBg: "primary-transparent",
    room: 101,
    avatar: face11
  },
  {
    id: 2,
    patientId: "SPK-3SFW",
    name: "Jane smith",
    gender: "Female",
    age: 35,
    assginedDoctor: "Dr. Johnson",
    phone: "987-654-3210",
    appointmentedDate: "2023-09-15",
    disease: "Diabetes",
    diseaseBg: "secondary-transparent",
    room: 102,
    avatar: face2
  },
  {
    id: 3,
    patientId: "SPK-6SKF",
    name: "Robert Jhonson",
    gender: "Male",
    age: 45,
    assginedDoctor: "Dr.M.Angle",
    phone: "456-789-0123",
    appointmentedDate: "2023-11-05",
    disease: "Asthma",
    diseaseBg: "primary-transparent",
    room: 103,
    avatar: face12
  },
  {
    id: 4,
    patientId: "SPK-3ESD",
    name: "Emiley Davis",
    gender: "Female",
    age: 28,
    assginedDoctor: "Dr.S.Mary",
    phone: "789-012-3456",
    appointmentedDate: "2023-08-12",
    disease: "Allergies",
    diseaseBg: "orange-transparent",
    room: 104,
    avatar: face5
  },
  {
    id: 5,
    patientId: "SPK-3KSE",
    name: "William Martinez",
    gender: "Male",
    age: 38,
    assginedDoctor: "Dr.S.Mary",
    phone: "234-567-8901",
    appointmentedDate: "2023-12-08",
    disease: "General",
    diseaseBg: "info-transparent",
    room: 105,
    avatar: face11
  },
  {
    id: 6,
    patientId: "SPK-4DFS",
    name: "Sarah Wilson",
    gender: "Female",
    age: 28,
    assginedDoctor: "Dr.T.Laytoya Thoma",
    phone: "567-890-1234",
    appointmentedDate: "2023-07-25",
    disease: "High Cholesterol",
    diseaseBg: "warning-transparent",
    room: 106,
    avatar: face4
  }
];

// Treatments
interface TreatmentsType {
  id: number;
  name: string;
  description: string;
  icon: string;
  iconBg: string;
  successRate: string;
  successRateBg: string;
  sessions: string;
}
export const Treatments: TreatmentsType[] = [
  {
    id: 1,
    name: "Cardiology",
    description: "500+ Patients Treated",
    icon: "ri-heart-pulse-line",
    iconBg: "primary-transparent",
    successRate: "85%",
    successRateBg: "primary-transparent",
    sessions: "3 Sessions"
  },
  {
    id: 2,
    name: "Immunology",
    description: "700+ Vaccinations",
    icon: "ri-syringe-line",
    iconBg: "secondary-transparent",
    successRate: "92%",
    successRateBg: "secondary-transparent",
    sessions: "1 Follow-up"
  },
  {
    id: 3,
    name: "Neurology",
    description: "300+ Brain Surgeries",
    icon: "ri-brain-line",
    iconBg: "danger-transparent",
    successRate: "88%",
    successRateBg: "danger-transparent",
    sessions: "4 Sessions"
  },
  {
    id: 4,
    name: "Pediatrics",
    description: "1,000+ Pediatric Patients",
    icon: "ti ti-mood-kid",
    iconBg: "warning-transparent",
    successRate: "95%",
    successRateBg: "warning-transparent",
    sessions: "2 Sessions"
  },
  {
    id: 5,
    name: "Dermatology",
    description: "800+ Skin Treatments",
    icon: "ri-stethoscope-line",
    iconBg: "info-transparent",
    successRate: "90%",
    successRateBg: "info-transparent",
    sessions: "3 Sessions"
  }
];

// APPOINTMENT HISTORY
interface AppointmentHistoryType {
  id: number;
  title: string;
  code: string;
  date: string;
  time: string;
  status: string;
  statusColor: string;
  icon: string;
  bgColor: string;
}
export const AppointmentHistory: AppointmentHistoryType[] = [
  {
    id: 1,
    title: "General Checkup",
    code: "#SPK101",
    date: "13 Feb 2024",
    time: "10:25am",
    status: "Completed",
    statusColor: "primary",
    icon: "ti ti-stethoscope",
    bgColor: "primary-transparent",

  },
  {
    id: 2,
    title: "Follow-up appointment",
    code: "#SPK121",
    date: "13 Feb 2024",
    time: "11:15am",
    status: "Rescheduled",
    statusColor: "secondary",
    icon: "ti ti-report-medical",
    bgColor: "secondary-transparent",

  },
  {
    id: 3,
    title: "Heart Checkup",
    code: "#SPK114",
    date: "13 Feb 2024",
    time: "02:30pm",
    status: "Scheduled",
    statusColor: "primary",
    icon: "ti ti-heartbeat",
    bgColor: "danger-transparent",

  },
  {
    id: 4,
    title: "Blood test results review",
    code: "#SPK132",
    date: "13 Feb 2024",
    time: "03:45pm",
    status: "Cancelled",
    statusColor: "orange",
    icon: "ti ti-vaccine",
    bgColor: "warning-transparent",

  },
  {
    id: 5,
    title: "Dental Cleanup",
    code: "#SPK115",
    date: "14 Feb 2024",
    time: "10:15am",
    status: "Completed",
    statusColor: "info",
    icon: "ti ti-dental",
    bgColor: "info-transparent",

  }
];

// Doctors List
interface DoctorsListType {
  id: number;
  name: string;
  specialization: string;
  avatar: string;
  availability: string;
  availabilityBg: string;
}
export const DoctorsList: DoctorsListType[] = [
  {
    id: 1,
    name: "Dr. Smith",
    specialization: "Cardiology",
    avatar: doctors1,
    availability: "Available",
    availabilityBg: "primary-transparent"
  },
  {
    id: 2,
    name: "Dr. Johnson",
    specialization: "Orthopedics",
    avatar: doctors2,
    availability: "Available",
    availabilityBg: "primary-transparent"
  },
  {
    id: 3,
    name: "Dr. Davis",
    specialization: "Dermatology",
    avatar: doctors3,
    availability: "Not Available",
    availabilityBg: "danger-transparent"
  },
  {
    id: 4,
    name: "Dr. Miller",
    specialization: "Neurology",
    avatar: doctors4,
    availability: "Available",
    availabilityBg: "primary-transparent"
  },
  {
    id: 5,
    name: "Dr. Anderson",
    specialization: "Ophthalmology",
    avatar: doctors5,
    availability: "Available",
    availabilityBg: "primary-transparent"
  },
  {
    id: 6,
    name: "Dr. Martinez",
    specialization: "Gastroenterology",
    avatar: doctors6,
    availability: "Not Available",
    availabilityBg: "danger-transparent"
  },
  {
    id: 7,
    name: "Dr. Sam Sanker",
    specialization: "Neurology",
    avatar: doctors3,
    availability: "Available",
    availabilityBg: "primary-transparent"
  }
];

//  AVAILABLE TREATMENTS
interface AvailbleTreatmentsType {
  id: number;
  cardColor: string;
  category: string;
  available: string;
  svg: ReactNode;
  svgColor: string;
}
export const AvailbleTreatments: AvailbleTreatmentsType[] = [
  {
    id: 1,
    cardColor: "primary",
    category: 'Cardiology',
    available: '123 Available',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
        fill="#000000" viewBox="0 0 256 256">
        <path
          d="M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z"
          opacity="0.2"></path>
        <path
          d="M72,144H32a8,8,0,0,1,0-16H67.72l13.62-20.44a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,128h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,126.42l-9.34,14A8,8,0,0,1,72,144ZM178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40Z">
        </path>
      </svg>
    ),
    svgColor: "primary"
  },
  {
    id: 2,
    cardColor: "secondary",
    category: 'Pediatrics',
    available: '96 Available',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
        fill="#000000" viewBox="0 0 256 256">
        <path
          d="M224,64l-12.16,66.86A16,16,0,0,1,196.1,144H70.55L56,64Z"
          opacity="0.2"></path>
        <path
          d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z">
        </path>
      </svg>
    ),
    svgColor: "secondary"
  },
  {
    id: 3,
    cardColor: "danger",
    category: 'Orthopedic',
    available: '134 Available',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
        fill="#000000" viewBox="0 0 256 256">
        <path
          d="M225.09,102.44a28,28,0,0,1-35.92,5.3,8,8,0,0,0-10,1.07l-70.38,70.38a8,8,0,0,0-1.07,10,28,28,0,1,1-51.42,10.51,28,28,0,1,1,10.51-51.42,8,8,0,0,0,10-1.07l70.38-70.38a8,8,0,0,0,1.07-10,28,28,0,1,1,51.42-10.51,28,28,0,0,1,25.41,46.12Z"
          opacity="0.2"></path>
        <path
          d="M231.67,60.89a35.82,35.82,0,0,0-23.82-12.74,36,36,0,1,0-66.37,22.92.25.25,0,0,1,0,.08L71.17,141.51s0,0-.1,0a36,36,0,1,0-22.92,66.37,36,36,0,1,0,66.37-22.92.54.54,0,0,1,0-.08l70.35-70.36s0,0,.1,0a36,36,0,0,0,46.74-53.63ZM219.1,97.16a20,20,0,0,1-25.67,3.8,16,16,0,0,0-19.88,2.19l-70.4,70.4A16,16,0,0,0,101,193.43a20,20,0,1,1-36.75,7.5,8,8,0,0,0-7.91-9.24,8.5,8.5,0,0,0-1.23.1A20,20,0,1,1,62.57,155a16,16,0,0,0,19.88-2.19l70.4-70.4A16,16,0,0,0,155,62.57a20,20,0,1,1,36.75-7.5,8,8,0,0,0,9.14,9.14,20,20,0,0,1,18.17,33Z">
        </path>
      </svg>
    ),
    svgColor: "danger"
  },
  {
    id: 4,
    cardColor: "warning",
    category: 'Psychiatry',
    available: '113 Available',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
        fill="#000000" viewBox="0 0 256 256">
        <path
          d="M208,128c0,48-16,96-80,96s-80-48-80-96,16-96,80-96S208,80,208,128Z"
          opacity="0.2"></path>
        <path
          d="M186.42,123.65a63.81,63.81,0,0,0-11.13-6.72c-4-29.89-24-39.31-33.1-42.07-19.78-6-42.51,1.19-52.85,16.7a8,8,0,0,0,13.32,8.88c6.37-9.56,22-14.16,34.89-10.27,9.95,3,16.82,10.3,20.15,21a81.05,81.05,0,0,0-15.29-1.43c-13.92,0-26.95,3.59-36.67,10.1C94.3,127.57,88,139,88,152c0,20.58,15.86,35.52,37.71,35.52a48,48,0,0,0,34.35-14.81c6.44-6.7,14-18.36,15.61-37.1.38.26.74.53,1.1.8C186.88,144.05,192,154.68,192,168c0,19.36-20.34,48-64,48-26.73,0-45.48-8.65-57.34-26.44C60.93,175,56,154.26,56,128s4.93-47,14.66-61.56C82.52,48.65,101.27,40,128,40c32.93,0,54,13.25,64.53,40.52a8,8,0,1,0,14.93-5.75C194.68,41.56,167.2,24,128,24,96,24,72.19,35.29,57.34,57.56,45.83,74.83,40,98.52,40,128s5.83,53.17,17.34,70.44C72.19,220.71,96,232,128,232c30.07,0,48.9-11.48,59.4-21.1C200.3,199.08,208,183,208,168,208,149.66,200.54,134.32,186.42,123.65Zm-37.89,38a31.94,31.94,0,0,1-22.82,9.9c-10.81,0-21.71-6-21.71-19.52,0-12.63,12-26.21,38.41-26.21A63.88,63.88,0,0,1,160,128.24C160,142.32,156,153.86,148.53,161.62Z">
        </path>
      </svg>
    ),
    svgColor: "warning"
  }
];

// upcoming Appointments
interface AppointmentTime {
  start: string;
  end: string;
}

export interface UpcomingAppointmentsType {
  id: number;
  day: string;
  title: string;
  department: string;
  time: AppointmentTime;
}
export const UpcomingAppointments: UpcomingAppointmentsType[] = [
  // Monday
  { id: 1, day: "Monday", title: "Post-Surgery Follow-up Appointment", department: "Orthopedics", time: { start: "09:35", end: "10:00" }, },
  { id: 2, day: "Monday", title: "Asthma Management Consultation", department: "Pulmonology", time: { start: "12:20", end: "13:20" }, },
  { id: 3, day: "Monday", title: "Vision Check-up", department: "Ophthalmology", time: { start: "15:40", end: "16:00" }, },
  { id: 4, day: "Monday", title: "Pre-natal Check-up", department: "Obstetrics", time: { start: "16:45", end: "17:00" }, },
  { id: 5, day: "Monday", title: "Mental Health Counseling", department: "Psychiatry", time: { start: "16:10", end: "16:30" }, },
  { id: 6, day: "Monday", title: "Diabetes Management Review", department: "Endocrinology", time: { start: "13:45", end: "14:45" }, },

  // Tuesday
  { id: 7, day: "Tuesday", title: "Allergy Testing", department: "Allergology", time: { start: "10:00", end: "11:30" } },
  { id: 8, day: "Tuesday", title: "Diabetes Management Review", department: "Endocrinology", time: { start: "13:45", end: "14:45" } },
  { id: 9, day: "Tuesday", title: "Mental Health Counseling", department: "Psychiatry", time: { start: "16:10", end: "16:30" } },
  { id: 10, day: "Tuesday", title: "Routine Immunization", department: "Vaccination", time: { start: "16:55", end: "18:55" } },
  { id: 11, day: "Tuesday", title: "Pre-natal Check-up", department: "Obstetrics", time: { start: "16:45", end: "17:00" } },
  { id: 12, day: "Tuesday", title: "Vision Check-up", department: "Ophthalmology", time: { start: "15:40", end: "16:00" } },

  // Wednesday
  { id: 13, day: "Wednesday", title: "Digestive Disorder Consult", department: "Gastroenterology", time: { start: "10:00", end: "12:00" } },
  { id: 14, day: "Wednesday", title: "Pre-operative Assessment", department: "Surgery", time: { start: "13:15", end: "14:10" } },
  { id: 15, day: "Wednesday", title: "Cancer Screening", department: "Oncology", time: { start: "15:30", end: "16:20" } },
  { id: 16, day: "Wednesday", title: "Hypertension Management", department: "Cardiology", time: { start: "17:30", end: "18:00" } },
  { id: 17, day: "Wednesday", title: "Routine Immunization", department: "Vaccination", time: { start: "16:55", end: "18:55" } },
  { id: 18, day: "Wednesday", title: "Pre-natal Check-up", department: "Obstetrics", time: { start: "16:45", end: "17:00" } },

  // Thursday
  { id: 19, day: "Thursday", title: "Dermatological Consultation", department: "Dermatology", time: { start: "09:00", end: "11:00" } },
  { id: 20, day: "Thursday", title: "Annual Wellness Exam", department: "Preventive Medicine", time: { start: "12:50", end: "13:20" } },
  { id: 21, day: "Thursday", title: "Joint Pain Evaluation", department: "Rheumatology", time: { start: "15:45", end: "16:00" } },
  { id: 22, day: "Thursday", title: "Kidney Function Test", department: "Nephrology", time: { start: "19:55", end: "20:30" } },
  { id: 23, day: "Thursday", title: "Hypertension Management", department: "Cardiology", time: { start: "17:30", end: "18:00" } },
  { id: 24, day: "Thursday", title: "Hypertension Management", department: "Cardiology", time: { start: "17:30", end: "18:00" } },

  // Friday
  { id: 25, day: "Friday", title: "Audiological Assessment", department: "Audiology", time: { start: "09:00", end: "12:00" } },
  { id: 26, day: "Friday", title: "Hormonal Imbalance Evaluation", department: "Reproductive Endocrinology", time: { start: "12:00", end: "13:20" } },
  { id: 27, day: "Friday", title: "Eating Disorder Assessment", department: "Eating Disorders", time: { start: "16:00", end: "17:20" } },
  { id: 28, day: "Friday", title: "Sleep Disorder Consultation", department: "Sleep Medicine", time: { start: "18:15", end: "19:00" } },
  { id: 29, day: "Friday", title: "Kidney Function Test", department: "Nephrology", time: { start: "19:55", end: "20:30" } },
  { id: 30, day: "Friday", title: "Annual Wellness Exam", department: "Preventive Medicine", time: { start: "12:50", end: "13:20" } },

  // Saturday
  { id: 31, day: "Saturday", title: "Chronic Pain Management", department: "Pain Management", time: { start: "09:35", end: "10:00" } },
  { id: 32, day: "Saturday", title: "Obesity Management Review", department: "Bariatrics", time: { start: "12:20", end: "13:20" } },
  { id: 33, day: "Saturday", title: "Asthma Action Plan Review", department: "Allergy and Immunology", time: { start: "15:40", end: "16:00" } },
  { id: 34, day: "Saturday", title: "Fertility Consultation", department: "Reproductive Medicine", time: { start: "16:45", end: "17:00" } },
  { id: 35, day: "Saturday", title: "Sleep Disorder Consultation", department: "Sleep Medicine", time: { start: "18:15", end: "19:00" } },
  { id: 36, day: "Saturday", title: "Annual Wellness Exam", department: "Preventive Medicine", time: { start: "12:50", end: "13:20" } }
];

