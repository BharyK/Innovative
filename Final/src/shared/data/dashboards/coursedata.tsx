import SpkCoursesSwiper from "../../@spk-reusable-components/reusable-dashboards/spk-coursesswiper";
import { TeamMembersOptions, TeamMembersSeries } from "./projectsdata";
import media1 from '../../../assets/images/media/media-1.jpg';
import media2 from '../../../assets/images/media/media-2.jpg';
import media3 from '../../../assets/images/media/media-3.jpg';
import media4 from '../../../assets/images/media/media-4.jpg';
import media5 from '../../../assets/images/media/media-5.jpg';
import media72 from '../../../assets/images/media/media-72.png';
import media73 from '../../../assets/images/media/media-73.png';
import media74 from '../../../assets/images/media/media-74.png';
import png1 from '../../../assets/images/media/png/1.png';
import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face11 from '../../../assets/images/faces/11.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face13 from '../../../assets/images/faces/13.jpg';
import face14 from '../../../assets/images/faces/14.jpg';
import type { ReactNode } from "react";
import type { ApexOptions } from "apexcharts";

// Learning Activity
export const LearningActivitySeries = [{
    name: 'This Week',
    type: 'column',
    data: [25, 18, 20, 25, 50, 20, 40, 35, 55, 25, 30, 43]
}, {
    name: 'Last Week',
    type: 'line',
    data: [45, 55, 40, 65, 20, 45, 25, 32, 42, 55, 33, 23]
}, {
    name: 'Average',
    type: 'line',
    data: [30, 25, 35, 30, 45, 35, 65, 52, 41, 35, 55, 60]
}]
export const LearningActivityOptions = {
    chart: {
        height: 325,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: ["transparent", 'rgba(127, 103, 257, 0.2)', 'var(--primary02)'],
            opacity: 0.5
        },
    },
    colors: ["var(--primary02)", "rgba(127, 103, 257,1)", "var(--primary-color)"],
    grid: {
        show: true,
        borderColor: 'rgba(119, 119, 142, 0.1)',
        strokeDashArray: 4,
    },
    stroke: {
        width: [0, 2, 2],
        curve: 'smooth',
        dashArray: [0, 0, 4],

    },
    plotOptions: {
        bar: {
            columnWidth: '32%',
            borderRadius: 3,
        }
    },
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    markers: {
        size: 0,
    },
    legend: {
        show: true,
        position: 'top',
        fontFamily: "Montserrat",
        markers: {
            size: 4,
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
        fontFamily: "Montserrat",
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
    },
    yaxis: {
        title: {
            text: 'Growth',
            style: {
                color: '	#adb5be',
                fontSize: '14px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        labels: {
            formatter: function (y: number) {
                return y.toFixed(0) + "";
            }
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y: number) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " Hours";
                }
                return y;

            }
        }
    }
}

// Popular Categories
export const PopularCategoriesSeries = [2224, 1267, 553]
export const PopularCategoriesOptions = {
    labels: ["Mobile", "Tablet", "Desktop"],
    chart: {
        height: 150,
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
        width: 2,
        dashArray: 0,
    },
    fill: {
        type: 'solid',
    },
    plotOptions: {

        pie: {
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
                        offsetY: -4
                    },
                    value: {
                        show: true,
                        fontSize: '18px',
                        color: undefined,
                        offsetY: 8,
                        formatter: function (val: number) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total',
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#495057',
                    }

                }
            }
        }
    },
    colors: ["var(--primary-color)", "rgba(127, 103, 257)", "rgba(253, 73, 99)"],
}

// Financial Summary
export const FinancialSummarySeries = [{
    name: 'Income',
    data: [4, 8, 10, 15, 8, 15, 5]
},
{
    name: 'Expenses',
    data: [-4, -8, -10, -15, -8, -15, -5]
}
]
export const FinancialSummaryOptions = {
    chart: {
        type: 'bar',
        height: 320,
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    colors: ['rgba(var(--primary-rgb),0.8)', 'rgba(var(--secondary-rgb), 0.8)'],
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '35%',
            borderRadius: 4,
        },
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        position: 'bottom',
        floating: false,
        markers: {
            size: 4,
            shape: "circle",
        },
    },
    grid: {
        show: true,
        borderColor: "rgba(119, 119, 142, 0.1)",
        strokeDashArray: 4,
        xaxis: {
            lines: {
                show: false
            }
        },
        row: {
            colors: ["rgba(var(--light-rgb), 1)", "transparent"],
            opacity: 0.7
        },
    },
    xaxis: {
        labels: {
            formatter: function (val: number) {
                return Math.abs(Math.round(val)) + "%"
            },
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
        axisBorder: {
            show: false,
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    }
}

// courseSummary
interface CourseSummaryType {
    id: number;
    count: string;
    label: string;
    svg?: ReactNode;
    svgBg?: string;
    bgColor?: string;
    viewTextColor: string;
    linkText: string;
}
export const CourseSummary: CourseSummaryType[] = [
    {
        id: 1,
        count: "120+",
        label: "Completed Course",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-file-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm3.707 10.293a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292a1 1 0 1 0 -1.414 1.414l2 2a1 1 0 0 0 1.414 0l4 -4a1 1 0 0 0 0 -1.414m-.707 -9.294l4 4.001h-4z" />
            </svg>
        ),
        svgBg: "primary-transparent",
        viewTextColor: "primary",
        linkText: "View",

    },
    {
        id: 2,
        count: "195+",
        label: "Pending Course",
        svgBg: "secondary-transparent",
        viewTextColor: "secondary",
        linkText: "View",
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-clock-hour-9"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-4.883 9.653a1 1 0 0 0 .883 -.993v-5a1 1 0 0 0 -2 0v4h-2.5a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h3.5z"></path></svg>)
    }
];

// analyticsCards
export interface AnalyticsCardsType {
    id: number;
    boxBorder: string;
    svgBorder: string;
    svgBg: string;
    svg: ReactNode;
    title: string;
    count: string;
    status: string;
    percent: string;
    percentBg: string;
    percenIcon: string;
}
export const AnalyticsCards: AnalyticsCardsType[] = [
    {
        id: 1,
        boxBorder: "primary-dash",
        svgBorder: "primary",
        svgBg: "primary",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M13 17c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6V5H5v14h14v-2h-6z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
                <circle cx="16" cy="12" r="1.5" />
            </svg>
        ),
        title: "Total Revenue",
        count: "$25,378",
        status: "Increased By",
        percent: "+5.35%",
        percentBg: "primary-transparent",
        percenIcon: "up",


    },
    {
        id: 2,
        boxBorder: "secondary-dash",
        svgBorder: "secondary",
        svgBg: "secondary",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
                <g>
                    <rect fill="none" height="24" width="24" />
                </g>
                <g>
                    <g>
                        <path
                            d="M10,10h4c0.8,0,1.34-0.94,0.76-1.63c-0.87-1.04-0.26-2-0.26-2.37c0-0.41-0.24-0.77-0.62-0.92 c-0.29-0.12-0.55-0.31-0.75-0.54C12.96,4.33,12.58,4,12,4s-0.96,0.33-1.13,0.53c-0.2,0.24-0.46,0.42-0.75,0.54 C9.74,5.23,9.5,5.59,9.5,6c0,0.37,0.61,1.33-0.26,2.37C8.66,9.06,9.2,10,10,10z"
                            opacity=".8" fill="#fff" />
                        <path
                            d="M17.48,16.34C16.29,15.73,14.37,15,12,15c-2.37,0-4.29,0.73-5.48,1.34C6.2,16.5,6,16.84,6,17.22V18h12 v-0.78C18,16.84,17.8,16.5,17.48,16.34z"
                            opacity=".8" fill="#fff" />
                        <path
                            d="M18.39,14.56C16.71,13.7,14.53,13,12,13c-2.53,0-4.71,0.7-6.39,1.56C4.61,15.07,4,16.1,4,17.22V20h16v-2.78 C20,16.1,19.39,15.07,18.39,14.56z M18,18H6v-0.78c0-0.38,0.2-0.72,0.52-0.88C7.71,15.73,9.63,15,12,15 c2.37,0,4.29,0.73,5.48,1.34C17.8,16.5,18,16.84,18,17.22V18z" />
                        <path
                            d="M10,12c0.17,0,3.83,0,4,0c1.66,0,3-1.34,3-3c0-0.73-0.27-1.4-0.71-1.92C16.42,6.75,16.5,6.38,16.5,6 c0-1.25-0.77-2.32-1.86-2.77C14,2.48,13.06,2,12,2s-2,0.48-2.64,1.23C8.27,3.68,7.5,4.75,7.5,6c0,0.38,0.08,0.75,0.21,1.08 C7.27,7.6,7,8.27,7,9C7,10.66,8.34,12,10,12z M9.24,8.37C10.11,7.33,9.5,6.37,9.5,6c0-0.41,0.24-0.77,0.62-0.92 c0.29-0.12,0.55-0.31,0.75-0.54C11.04,4.33,11.42,4,12,4s0.96,0.33,1.13,0.53c0.2,0.24,0.46,0.42,0.75,0.54 C14.26,5.23,14.5,5.59,14.5,6c0,0.37-0.61,1.33,0.26,2.37C15.34,9.06,14.8,10,14,10h-4C9.2,10,8.66,9.06,9.24,8.37z" />
                    </g>
                </g>
            </svg>
        ),
        title: "Total Students",
        count: "78,565",
        status: "Increased By",
        percent: "+12.1%",
        percentBg: "primary-transparent",
        percenIcon: "up",


    },
    {
        id: 3,
        boxBorder: "danger-dash",
        svgBorder: "danger",
        svgBg: "danger",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#000">
                <g>
                    <rect fill="none" height="24" width="24" y="0" />
                </g>
                <g>
                    <g>
                        <path
                            d="M14,13.5h4V12h-4V13.5z M14,16.5h4V15h-4V16.5z M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9C22,7.9,21.1,7,20,7z M11,4h2v5h-2V4z M20,20H4V9h5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2h5V20 z M9,15c0.83,0,1.5-0.67,1.5-1.5c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5C7.5,14.33,8.17,15,9,15z M11.08,16.18 C10.44,15.9,9.74,15.75,9,15.75s-1.44,0.15-2.08,0.43C6.36,16.42,6,16.96,6,17.57V18h6v-0.43C12,16.96,11.64,16.42,11.08,16.18z" />
                        <path
                            d="M13,11h-2c-1.1,0-2-0.9-2-2H4v11h16V9h-5C15,10.1,14.1,11,13,11z M9,12c0.83,0,1.5,0.67,1.5,1.5 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5C7.5,12.67,8.17,12,9,12z M12,18H6v-0.43c0-0.6,0.36-1.15,0.92-1.39 C7.56,15.9,8.26,15.75,9,15.75s1.44,0.15,2.08,0.43c0.55,0.24,0.92,0.78,0.92,1.39V18z M18,16.5h-4V15h4V16.5z M18,13.5h-4V12h4 V13.5z"
                            opacity=".8" fill="#fff" />
                    </g>
                </g>
            </svg>
        ),
        title: "Total Instructors",
        count: "6,247",
        status: "Decreased By",
        percent: "-10.21%",
        percentBg: "danger-transparent",
        percenIcon: "down",


    },
    {
        id: 4,
        boxBorder: "warning-dash",
        svgBorder: "warning",
        svgBg: "warning",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M5 19h14V5H5v14zm6-12h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2zM7 7h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z" />
            </svg>
        ),
        title: "Total Courses",
        count: "2,467",
        status: "Increased By",
        percent: "+16.1%",
        percentBg: "primary-transparent",
        percenIcon: "up",


    },
]

// allCourses
interface AllCoursestype {
    id: number;
    imageSrc: string;
    course: string;
    category: string;
    categoryBg: string;
    classes: string;
    lastUpdated: string;
    instructor: string;
    instructorImgSrc: string;
    students: string;
}
export const AllCourses: AllCoursestype[] = [
    {
        id: 1,
        imageSrc: media1,
        course: "Introduction to 3D CAD Modeling",
        category: "CAD & Design",
        categoryBg: "primary-transparent",
        classes: "45",
        lastUpdated: "15-06-2023",
        instructor: "Alex J. Carter",
        instructorImgSrc: face1,
        students: "30"
    },
    {
        id: 2,
        imageSrc: media2,
        course: "Advanced CAD for Mechanical Engineering",
        category: "Engineering",
        categoryBg: "primary-transparent",
        classes: "55",
        lastUpdated: "10-07-2023",
        instructor: "Maria L. Benson",
        instructorImgSrc: face11,
        students: "40"
    },
    {
        id: 3,
        imageSrc: media3,
        course: "Architectural Design with CAD",
        category: "Architecture",
        categoryBg: "warning-transparent",
        classes: "40",
        lastUpdated: "23-08-2023",
        instructor: "John M. Roberts",
        instructorImgSrc: face3,
        students: "60"
    },
    {
        id: 4,
        imageSrc: media4,
        course: "Introduction to Civil Engineering CAD",
        category: "Civil Engineering",
        categoryBg: "info-transparent",
        classes: "30",
        lastUpdated: "12-09-2023",
        instructor: "Emily P. Granger",
        instructorImgSrc: face12,
        students: "50"
    },
    {
        id: 5,
        imageSrc: media5,
        course: "Basics of Electrical Engineering with CAD",
        category: "Electrical Engineering",
        categoryBg: "danger-transparent",
        classes: "35",
        lastUpdated: "01-10-2023",
        instructor: "Samuel L. Brooks",
        instructorImgSrc: face5,
        students: "45"
    },

]

// topInstructors
export interface TopInstructorsType {
    id: number;
    imgSrc: string;
    imgBg: string;
    name: string;
    qualification: string;
    classesCount: string;
    course: string;
    liClass?: string
}
export const TopInstructors: TopInstructorsType[] = [
    {
        id: 1,
        imgSrc: face2,
        imgBg: "primary-transparent",
        name: "John Henry",
        qualification: "M.Tech",
        classesCount: "321",
        course: "Digital Marketing"
    },
    {
        id: 2,
        imgSrc: face12,
        imgBg: "secondary-transparent",
        name: "Mortal Yun",
        qualification: "P.H.D",
        classesCount: "25",
        course: "Stocks & Trading"
    },
    {
        id: 3,
        imgSrc: face13,
        imgBg: "danger-transparent",
        name: "Trex Con",
        qualification: "MBBS",
        classesCount: "39",
        course: "Science"
    },
    {
        id: 4,
        imgSrc: face3,
        imgBg: "warning-transparent",
        name: "Saiu Sarah",
        qualification: "P.H.D",
        classesCount: "11",
        course: "Science"
    },
    {
        id: 5,
        imgSrc: face4,
        imgBg: "info-transparent",
        name: "Ion Hau",
        qualification: "M.Tech",
        classesCount: "124",
        course: "Web Development"
    },
    {
        id: 6,
        imgSrc: face14,
        imgBg: "primary-transparent",
        name: "Roman Killon",
        qualification: "M.Tech",
        classesCount: "1263",
        course: "Ui / Ux Designing"
    },
    {
        id: 7,
        imgSrc: face5,
        imgBg: "orange-transparent",
        name: "Suzika Stallone",
        qualification: "Phd",
        classesCount: "110",
        course: "Machine Leadning",
        liClass: 'mb-0'
    },
]

// topCourses
interface TopCoursesType {
    id: number;
    name: string;
    imgSrc: string;
    instructor: string;
    ariaValueNow: string;
    progressBarWidth: string;
    progressBarBg: string;
    progress: string;
    completionDate: string;
    rating: string;
    startIcon: string;
    borderClass?: string
}
export const TopCourses: TopCoursesType[] = [
    {
        id: 1,
        name: "Data Science",
        imgSrc: face1,
        instructor: "Dr. Smith",
        ariaValueNow: "75",
        progressBarWidth: "75%",
        progressBarBg: "primary",
        progress: "75%",
        completionDate: "June 15, 2024",
        rating: '4.8',
        startIcon: "ri ri-star-fill text-warning"
    },
    {
        id: 2,
        name: "Web Development",
        imgSrc: face10,
        instructor: "Prof. Johnson",
        ariaValueNow: "50",
        progressBarWidth: "50%",
        progressBarBg: "secondary",
        progress: "50%",
        completionDate: "July 20, 2024",
        rating: '4.5',
        startIcon: "ri ri-star-fill text-warning"
    },
    {
        id: 3,
        name: "AI Basics",
        imgSrc: face11,
        instructor: "Dr. Lee",
        ariaValueNow: "90",
        progressBarWidth: "90%",
        progressBarBg: "danger",
        progress: "90%",
        completionDate: "May 30, 2024",
        rating: '4.9',
        startIcon: "ri ri-star-fill text-warning"
    },
    {
        id: 4,
        name: "Cybersecurity",
        imgSrc: face2,
        instructor: "Dr. Taylor",
        ariaValueNow: "60",
        progressBarWidth: "60%",
        progressBarBg: "warning",
        progress: "60%",
        completionDate: "August 10, 2024",
        rating: '4.7',
        startIcon: "ri ri-star-fill text-warning"
    },
    {
        id: 5,
        name: "Cloud Computing",
        imgSrc: face3,
        instructor: "Prof. Adams",
        ariaValueNow: "85",
        progressBarWidth: "85%",
        progressBarBg: "info",
        progress: "85%",
        completionDate: "June 25, 2024",
        rating: '4.6',
        startIcon: "ri ri-star-fill text-warning"
    },
    {
        id: 6,
        name: "Machine Learning",
        imgSrc: face5,
        instructor: "Dr. Rivera",
        ariaValueNow: "40",
        progressBarWidth: "40%",
        progressBarBg: "primary",
        progress: "40%",
        completionDate: "September 15, 2024",
        rating: '4.7',
        startIcon: "ri ri-star-fill text-warning",
        borderClass: 'border-bottom-0'
    },
]

// topCategories
export interface TopCategoriesType {
    id: number;
    title: string;
    courses: string;
    price: string;
    icon: string;
    bgColor: string;
}
export const TopCategories: TopCategoriesType[] = [
    {
        id: 1,
        title: "UI / UX Design",
        courses: "10,000+ Courses",
        price: "$199.99",
        icon: "ri-dashboard-line",
        bgColor: "primary-transparent"
    },
    {
        id: 2,
        title: "Digital Marketing",
        courses: "90+ Courses",
        price: "$599.99",
        icon: "ri-advertisement-line",
        bgColor: "secondary-transparent"
    },
    {
        id: 3,
        title: "Web Development",
        courses: "250+ Courses",
        price: "$299.99",
        icon: "ri-code-box-line",
        bgColor: "danger-transparent"
    },
    {
        id: 4,
        title: "Stocks & Trading",
        courses: "100+ Courses",
        price: "$999.99",
        icon: "ri-bar-chart-2-line",
        bgColor: "warning-transparent"
    },
    {
        id: 5,
        title: "Angular Course",
        courses: "300+ Courses",
        price: "$399.99",
        icon: "ri-angularjs-line",
        bgColor: "info-transparent"
    },
    {
        id: 6,
        title: "React Course",
        courses: "150+ Courses",
        price: "$599.99",
        icon: "ri-reactjs-line",
        bgColor: "primary-transparent"
    }
];

// popularCategories
export interface PopularCategoriestype {
    id: number;
    categoryName: string;
    percentage: string;
    amount: string;
    icon: string;
    Iconbg: string;
    percentageTextColor: string;
}
export const PopularCategories: PopularCategoriestype[] = [
    {
        id: 1,
        categoryName: "Sales",
        percentage: "31%",
        amount: "$12,576",
        icon: "ti ti-cash",
        Iconbg: "primary",
        percentageTextColor: "primary"
    },
    {
        id: 2,
        categoryName: "IT",
        percentage: "25%",
        amount: "$17,474",
        icon: "ti ti-device-laptop",
        Iconbg: "secondary",
        percentageTextColor: "secondary"
    },
    {
        id: 3,
        categoryName: "Marketing",
        percentage: "55%",
        amount: "$9,756",
        icon: "ti ti-speakerphone",
        Iconbg: "danger",
        percentageTextColor: "danger"
    },
    {
        id: 4,
        categoryName: "Designing",
        percentage: "19%",
        amount: "$12,464",
        icon: "ti ti-license",
        Iconbg: "warning",
        percentageTextColor: "warning"
    }
];

// activeCourses
interface ActiveCoursesType {
    id: number;
    icon: string;
    bgColor: string;
    borderColor: string;
    category: string;
    title: string;
    chartOptions?: ApexOptions;
    chartSeries: ApexAxisChartSeries;
}
export const ActiveCourses: ActiveCoursesType[] = [
    {
        id: 1,
        icon: "ri-html5-fill",
        bgColor: "primary-transparent",
        borderColor: "primary",
        category: "UI/UX",
        title: "CSS Zero to Hero Class-11",
        chartOptions: TeamMembersOptions({ color: ["var(--primary-color)", "var(--primary-color)", "var(--primary-color)", "var(--primary-color)", "var(--primary-color)", "var(--primary-color)", "var(--primary01)", "var(--primary01)", "var(--primary01)", "var(--primary01)"] }),
        chartSeries: TeamMembersSeries({ series: [4, 4, 4, 4, 4, 4, 4, 4, 4, 3] })
    },
    {
        id: 2,
        icon: "ri-bootstrap-fill",
        bgColor: "secondary-transparent",
        borderColor: "secondary",
        category: "Marketing",
        title: "Marketing Class-27",
        chartOptions: TeamMembersOptions({ color: ["rgba(127, 103, 257,1)", "rgba(127, 103, 257,1)", "rgba(127, 103, 257,1)", "rgba(127, 103, 257,1)", "rgba(127, 103, 257,0.1)", "rgba(127, 103, 257,0.1)", "rgba(127, 103, 257,0.1)", "rgba(127, 103, 257,0.1)", "rgba(127, 103, 257,0.1)", "rgba(127, 103, 257,0.1)"] }),
        chartSeries: TeamMembersSeries({ series: [5, 5, 5, 5, 5, 5, 5, 5, 5, 2] })
    },
    {
        id: 3,
        icon: "ri-angularjs-fill",
        bgColor: "danger-transparent",
        borderColor: "danger",
        category: "Programming",
        title: "Learn Angular-16",
        chartOptions: TeamMembersOptions({ color: ["rgba(253, 73, 99,1)", "rgba(253, 73, 99,1)", "rgba(253, 73, 99,1)", "rgba(253, 73, 99,1)", "rgba(253, 73, 99,1)", "rgba(253, 73, 99,1)", "rgba(253, 73, 99,0.1)", "rgba(253, 73, 99,0.1)", "rgba(253, 73, 99,0.1)", "rgba(253, 73, 99,0.1)"] }),
        chartSeries: TeamMembersSeries({ series: [4, 4, 4, 4, 3, 4, 4, 4, 3, 2] })
    },
    {
        id: 4,
        icon: "ri-mini-program-fill",
        bgColor: "warning-transparent",
        borderColor: "warning",
        category: "Programming",
        title: "Basic Of mini-program",
        chartOptions: TeamMembersOptions({ color: ["rgba(255, 169, 9,1)", "rgba(255, 169, 9,1)", "rgba(255, 169, 9,1)", "rgba(255, 169, 9,1)", "rgba(255, 169, 9,1)", "rgba(255, 169, 9,1)", "rgba(255, 169, 9,1)", "rgba(255, 169, 9,0.1)", "rgba(255, 169, 9,0.1)", "rgba(255, 169, 9,0.1)"] }),
        chartSeries: TeamMembersSeries({ series: [5, 5, 5, 5, 5, 5, 5, 5, 3, 2] })
    }
];

// latestCourses
export interface LatestCoursestype {
    id: number;
    title: string;
    rating: number;
    ratingIcon: string;
    category: string;
    categoryBg: string;
    imageSrc: string;
}
export const LatestCourses: LatestCoursestype[] = [
    { id: 1, title: "UI/UX Designing", rating: 4.2, ratingIcon: "ri-star-fill text-warning", category: "Science", categoryBg: "primary-transparent", imageSrc: png1 },
    { id: 2, title: "3D Modeling", rating: 3.6, ratingIcon: "ri-star-fill text-warning", category: "Design", categoryBg: "secondary-transparent", imageSrc: media72 },
    { id: 3, title: "Web Development", rating: 2.5, ratingIcon: "ri-star-fill text-warning", category: "Engineering", categoryBg: "danger-transparent", imageSrc: media74 },
    { id: 4, title: "Digital Marketing", rating: 4.6, ratingIcon: "ri-star-fill text-warning", category: "Marketing", categoryBg: "warning-transparent", imageSrc: media73 },
];

export const CourceSwiperCard = LatestCourses.map((idx) => (
    <div key={idx.id}>
        <SpkCoursesSwiper card={idx} />
    </div>
))



