import SpkJobsSwiper from "../../@spk-reusable-components/reusable-dashboards/spk-jobsswiper"
import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face11 from '../../../assets/images/faces/11.jpg';
import face13 from '../../../assets/images/faces/13.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import face16 from '../../../assets/images/faces/16.jpg';
import type { ReactNode } from "react";

// Recruitment Stats
export const RecruitmentStatsSeries = [
    {
        name: "Total Application",
        data: [20, 65, 40, 55, 80, 90, 59, 86, 120, 165, 115, 120],
        type: "area",
    },
    {
        name: "Selected Application",
        data: [65, 20, 85, 38, 55, 25, 25, 165, 75, 64, 70, 75],
        type: "line",
    },
]
export const RecruitmentStatsOptions = {
    chart: {
        height: 325,
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 0,
            blur: 1,
            color: ["var(--primary-color)", "var(--primary02)", "rgb(127, 103, 257)"],
            opacity: 0.05,
        },
    },
    grid: {
        show: true,
        borderColor: "rgba(119, 119, 142, 0.1)",
        strokeDashArray: 4,
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: [2, 2],
        curve: "smooth",
        dashArray: [0, 4],
    },
    legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        fontWeight: 600,
        fontSize: "11px",
        labels: {
            colors: "#74767c",
        },
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
                        opacity: 0.05
                    },
                    {
                        offset: 75,
                        color: "var(--primary01)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'var(--primary02)',
                        opacity: 0.2
                    }
                ],
                [
                    {
                        offset: 0,
                        color: 'rgb(127, 103, 257)',
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: 'rgb(127, 103, 257)',
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: 'rgb(127, 103, 257)',
                        opacity: 1
                    }
                ],
            ]
        }
    },
    colors: ["var(--primary-color)", "rgba(127, 103, 257)"],
    yaxis: {
        min: 0,
        title: {
            style: {
                color: "#adb5be",
                fontSize: "14px",
                fontFamily: "poppins, sans-serif",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label",
            },
        },
    },
    xaxis: {
        type: "day",
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
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-xaxis-label",
            },
        },
    },
}

// candidates
export const CandidatesSeries = [18235, 12743, 8369, 16458]
export const CandidatesOptions = {
    labels: ["male", "Female", "Others", "Not Mentioned"],
    chart: {
        height: 270,
        type: 'donut',
    },
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
            startAngle: -90,
            endAngle: 90,
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
                        offsetY: -35
                    },
                    value: {
                        show: true,
                        fontSize: '22px',
                        color: undefined,
                        offsetY: -25,
                        fontWeight: 600,
                        fontFamily: "Montserrat, sans-serif",
                        formatter: function (val: number) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total Candidates',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#495057',
                    }
                }
            }
        }
    },
    grid: {
        padding: {
            bottom: -85
        }
    },
    colors: ["var(--primary09)", "rgba(127, 103, 257, 0.9)", "rgba(253, 73, 99, 0.9)", "rgba(255, 169, 9, 0.9)"],
}


export interface JobsCardsType {
    id: number;
    cardBg: string;
    svg1: ReactNode;
    svg2: ReactNode;
    svg2Color: string;
    title: string;
    value: number | string;
    increase: boolean;
    percent: string;
    percentColor: string;
    percentDirection: string;
}
export const JobsCards: JobsCardsType[] = [
    {
        id: 1,
        cardBg: "bg-primary-transparent",
        svg1: (
            <svg className="primary-dash-svg icon icon-tabler icons-tabler-outline icon-tabler-menu-deep" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6h16" />
                <path d="M7 12h13" />
                <path d="M10 18h10" />
            </svg>
        ),
        svg2: (
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
        svg2Color: "primary",
        title: "Total Employers",
        value: 256,
        increase: true,
        percent: "3.32%",
        percentColor: "primary",
        percentDirection: "up"
    },
    {
        id: 2,
        cardBg: "bg-secondary-transparent",
        svg1: (
            <svg className="secondary-dash-svg icon icon-tabler icons-tabler-outline icon-tabler-menu-deep" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6h16" />
                <path d="M7 12h13" />
                <path d="M10 18h10" />
            </svg>
        ),
        svg2: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M5 18.31l3-1.16V5.45L5 6.46zm11 .24l3-1.01V5.69l-3 1.17z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM8 17.15l-3 1.16V6.46l3-1.01v11.7zm6 1.38l-4-1.4V5.47l4 1.4v11.66zm5-.99l-3 1.01V6.86l3-1.16v11.84z" />
            </svg>
        ),
        svg2Color: "secondary",
        title: "Total Locations",
        value: 125,
        increase: false,
        percent: "0.90%",
        percentColor: "danger",
        percentDirection: "down"
    },
    {
        id: 3,
        cardBg: "bg-danger-transparent",
        svg1: (
            <svg className="danger-dash-svg icon icon-tabler icons-tabler-outline icon-tabler-menu-deep" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6h16" />
                <path d="M7 12h13" />
                <path d="M10 18h10" />
            </svg>
        ),
        svg2: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
            </svg>
        ),
        svg2Color: "danger",
        title: "Resume Generate",
        value: "34%",
        increase: true,
        percent: "0.51%",
        percentColor: "primary",
        percentDirection: "up"
    },
    {
        id: 4,
        cardBg: "bg-warning-transparent",
        svg1: (
            <svg className="warning-dash-svg icon icon-tabler icons-tabler-outline icon-tabler-menu-deep" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6h16" />
                <path d="M7 12h13" />
                <path d="M10 18h10" />
            </svg>
        ),
        svg2: (
            <svg xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#000">
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
        svg2Color: "warning",
        title: "Active Subscribers",
        value: "1,468",
        increase: false,
        percent: "5.95%",
        percentColor: "danger",
        percentDirection: "down"
    }
];

// Recent Employers
interface RecentEmployersType {
    id: number;
    imageSrc: string;
    name: string;
    category: string;
    designation: string;
    designationColor: string;
    mail: string;
    location: string;
    date: string;
    type: string;
    typeBg: string;
}
export const RecentEmployers: RecentEmployersType[] = [
    {
        id: 1,
        imageSrc: face1,
        name: "Mayor Kelly",
        category: "Manufacture",
        designation: "Team Lead",
        designationColor: "primary",
        mail: "mayorkelly@gmail.com",
        location: "Germany",
        date: "Sep 15 - Oct 12, 2023",
        type: "Full Time",
        typeBg: "primary-transparent",
    },
    {
        id: 2,
        imageSrc: face10,
        name: "Andrew Garfield",
        category: "Development",
        designation: "Sr.UI Developer",
        designationColor: "secondary",
        mail: "andrewgarfield@gmail.com",
        location: "Canada",
        date: "Apr 10 - Dec 12, 2023",
        type: "Full Time",
        typeBg: "primary-transparent",
    },
    {
        id: 3,
        imageSrc: face2,
        name: "Simon Cowel",
        category: "Service",
        designation: "Sr.UI Developer",
        designationColor: "secondary",
        mail: "simoncowel234@gmail.com",
        location: "Europe",
        date: "Sep 15 - Oct 12, 2023",
        type: "Part Time",
        typeBg: "secondary-transparent",
    },
    {
        id: 4,
        imageSrc: face11,
        name: "Mirinda Hers ",
        category: "Marketing",
        designation: "Sales Executive",
        designationColor: "primary",
        mail: "mirindahers@gmail.com",
        location: "USA",
        date: "Apr 10 - Dec 12, 2023",
        type: "Hybride",
        typeBg: "danger-transparent",
    },
    {
        id: 5,
        imageSrc: face3,
        name: "Andrew Garfield",
        category: "Development",
        designation: "Sr.UI Developer",
        designationColor: "secondary",
        mail: "andrewgarfield@gmail.com",
        location: "London",
        date: "Jun 10 - Dec 12, 2022",
        type: "Freelancer",
        typeBg: "primary-transparent",
    },
]

// Acquisitions
interface AcquisitionsType {
    id: number;
    title: string;
    percent: string;
    percentType: string;
    percentColor: string;
    progress: number;
    progressBg: string;
    margin: string;
}
export const Acquisitions: AcquisitionsType[] = [
    {
        id: 1,
        title: "New Job Opportunities",
        percent: "+5%",
        percentType: "Increase",
        percentColor: "primary",
        progress: 80,
        progressBg: "bg-primary",
        margin: "mb-4"
    },
    {
        id: 2,
        title: "Skill Gaps",
        percent: "-2%",
        percentType: "Decrease",
        percentColor: "danger",
        progress: 60,
        progressBg: "bg-secondary",
        margin: "mb-3"
    },
    {
        id: 3,
        title: "Employee Retention",
        percent: "+30%",
        percentType: "Increase",
        percentColor: "primary",
        progress: 70,
        progressBg: "bg-danger",
        margin: "mb-3"
    },
    {
        id: 4,
        title: "Cultural Integration",
        percent: "+13%",
        percentType: "Increase",
        percentColor: "primary",
        progress: 50,
        progressBg: "bg-warning",
        margin: "mb-3"
    },
    {
        id: 5,
        title: "Employee Fun Activation",
        percent: "+16%",
        percentType: "Increase",
        percentColor: "primary",
        progress: 65,
        progressBg: "bg-info",
        margin: "mb-3"
    },
    {
        id: 6,
        title: "Market Positioning",
        percent: "-16%",
        percentType: "Decrease",
        percentColor: "danger",
        progress: 40,
        progressBg: "bg-primary",
        margin: ""
    }
];

// Trending User Profiles
interface TrendingUserProfilesType {
    id: number;
    name: string;
    role: string;
    department: string;
    departmentBg: string;
    points: number;
    growth: number;
    growthIcon: string;
    growthBarBg: string;
    level: string;
    experience: string;
    avatar: string;
    borderClass?: string
}
export const TrendingUserProfiles: TrendingUserProfilesType[] = [
    {
        id: 1,
        name: "Robert anii",
        role: "Web Developer",
        department: "Front-end Developer",
        departmentBg: "primary-transparent",
        points: 25,
        growth: 90,
        growthIcon: "ri-arrow-up-line text-primary",
        growthBarBg: "primary",
        level: "Mid-Level",
        experience: "3-5 years",
        avatar: face15
    },
    {
        id: 2,
        name: "Rubi manscho",
        role: "UI/UX Designer",
        department: "Manufacturing",
        departmentBg: "secondary-transparent",
        points: 14,
        growth: 80,
        growthIcon: "ri-arrow-up-line text-secondary",
        growthBarBg: "secondary",
        level: "Senior",
        experience: "5+ years",
        avatar: face8
    },
    {
        id: 3,
        name: "Marckh Roz",
        role: "Graphic Designer",
        department: "Marketing",
        departmentBg: "danger-transparent",
        points: 18,
        growth: 60,
        growthIcon: "ri-arrow-up-line text-info",
        growthBarBg: "info",
        level: "Entry-Level",
        experience: "less than 2 years",
        avatar: face13
    },
    {
        id: 4,
        name: "Sophie Davis",
        role: "React Developer",
        department: "Marketing",
        departmentBg: "info-transparent",
        points: 34,
        growth: 25,
        growthIcon: "ri-arrow-up-line text-warning",
        growthBarBg: "warning",
        level: "Junior",
        experience: "1-3 years",
        avatar: face6
    },
    {
        id: 5,
        name: "Jackson Mach",
        role: "junior. Developer",
        department: "Front-end Developer",
        departmentBg: "warning-transparent",
        points: 10,
        growth: 35,
        growthIcon: "ri-arrow-up-line text-primary",
        growthBarBg: "primary",
        level: "Entry-Level",
        experience: "Less Than 2 years",
        avatar: face16,
        borderClass: 'border-bottom-0'
    }
];

// Recent Jobs
interface RecentJobstype {
    id: number;
    title: string;
    posted: string;
    level: string;
    levelBg: string;
    applied: number;
    icon: string;
    avatarBg: string;
    border: string;
}
export const RecentJobs: RecentJobstype[] = [
    {
        id: 1,
        title: "Data Scientist",
        posted: "Today, 2 hours ago",
        level: "Experienced",
        levelBg: "info-transparent",
        applied: 22,
        icon: "ri-pie-chart-line",
        avatarBg: "primary-transparent",
        border: "border-top-0"
    },
    {
        id: 2,
        title: "Product Manager",
        posted: "Today, 3 hours ago",
        level: "Mid-Level",
        levelBg: "warning-transparent",
        applied: 15,
        icon: "ti ti-briefcase",
        avatarBg: "secondary-transparent",
        border: ""
    },
    {
        id: 3,
        title: "Software Engineer",
        posted: "Today, 4 hours ago",
        level: "Fresher",
        levelBg: "primary-transparent",
        applied: 30,
        icon: "ri-macbook-line",
        avatarBg: "danger-transparent",
        border: ""
    },
    {
        id: 4,
        title: "UI/UX Designer",
        posted: "Today, 5 hours ago",
        level: "Experienced",
        levelBg: "info-transparent",
        applied: 10,
        icon: "ri-pencil-ruler-2-line",
        avatarBg: "warning-transparent",
        border: ""
    },
    {
        id: 5,
        title: "React Developer",
        posted: "Today, 6 hours ago",
        level: "Fresher",
        levelBg: "primary-transparent",
        applied: 10,
        icon: "ri-reactjs-fill",
        avatarBg: "primary-transparent",
        border: ""
    },
    {
        id: 6,
        title: "HTML Developer",
        posted: "Today, 3 hours ago",
        level: "Mid-Level",
        levelBg: "warning-transparent",
        applied: 15,
        icon: "ri-html5-line",
        avatarBg: "info-transparent",
        border: "border-bottom-0"
    }
];

// Upcoming Interview
export interface UpcomingInterviewtype {
    id: number;
    name: string;
    email: string;
    avatar: string;
    date: string;
    time: string;
    action: string;
    actionBg: string;
}
export const UpcomingInterview: UpcomingInterviewtype[] = [
    { id: 1, name: "James Krogman", email: "james@gmail.com", avatar: face3, date: "25 Nov", time: "12:41 PM", action: "Confirm", actionBg: "primary-light" },
    { id: 2, name: "Michael Joy", email: "mich@gmail.com", avatar: face4, date: "10 Dec", time: "2:32 PM", action: "ReSchedule", actionBg: "danger-light" },
    { id: 3, name: "Sophie Davis", email: "davis@gmail.com", avatar: face5, date: "14 Feb", time: "9:43 AM", action: "Schedule", actionBg: "secondary-light" },
];

export const JobsSwiperCard = UpcomingInterview.map((idx) => (
    <div key={idx.id}>
        <SpkJobsSwiper card={idx} />
    </div>
))

// User Activity
interface UserActivityType {
    id: number;
    name: string;
    initials: string;
    avatarBg?: string;
    date: string;
    action: string;
    nameColor: string;
    avatar?: string
}
export const UserActivity: UserActivityType[] = [
    {
        id: 1,
        name: "John Doe",
        initials: "JK",
        avatarBg: "bg-primary-transparent",
        date: "09 July 2021",
        action: 'Created job posting for "Software Engineer"',
        nameColor: "primary"
    },
    {
        id: 2,
        name: "Michael Johnson",
        avatar: face4,
        initials: "MJ",
        date: "09 July 2021",
        action: 'Updated job status to "Filled" for "Project Manager"',
        nameColor: "secondary"
    },
    {
        id: 3,
        name: "Olivia White",
        avatar: face6,
        initials: "OW",
        date: "12 Aug 2022",
        action: "Emma Johnson called client for initial consultation",
        nameColor: "pink"
    },
    {
        id: 4,
        name: "Emily Williams",
        initials: "MN",
        avatarBg: "bg-info-transparent",
        date: "09 July 2021",
        action: "Sarah Thompson finalized a contract with XYZ Company worth $10,000",
        nameColor: "info"
    },
    {
        id: 5,
        name: "Sophie Davis",
        initials: "sd",
        avatar: face5,
        date: "12 Jan 2021",
        action: 'Sent interview invitation for "Data Analyst" role to jackson rivera.',
        nameColor: "warning"
    },
    {
        id: 6,
        name: "David Brown",
        avatar: face7,
        initials: "",
        date: "12 Jan 2021",
        action: 'Rejected job application for "Graphic Designer"',
        nameColor: "danger"
    }
];

// Candidates
export interface CandidatesType {
    id: number;
    label: string;
    iconColor: string;
    percent: string;
    percentDirection: "up" | "down";
    percentColor: string;
    count: string;
}
export const Candidates: CandidatesType[] = [
    {
        id: 1,
        label: "Male",
        iconColor: "text-primary",
        percent: "0.78%",
        percentDirection: "up",
        percentColor: "text-primary",
        count: "18,235"
    },
    {
        id: 2,
        label: "Female",
        iconColor: "text-secondary",
        percent: "1.57%",
        percentDirection: "down",
        percentColor: "text-danger",
        count: "12,743"
    },
    {
        id: 3,
        label: "Other",
        iconColor: "text-danger",
        percent: "0.32%",
        percentDirection: "up",
        percentColor: "text-primary",
        count: "8,369"
    },
    {
        id: 4,
        label: "Not Mentioned",
        iconColor: "text-warning",
        percent: "19.45%",
        percentDirection: "up",
        percentColor: "text-primary",
        count: "16,458"
    }
];

// Recruitment Stats
interface RecruitmentStatsType {
    id: number;
    title: string;
    count: number | string;
    icon: string;
    iconBg: string;
}
export const RecruitmentStats: RecruitmentStatsType[] = [
    {
        id: 1,
        title: "Total Applications",
        count: "2,345",
        icon: "ti ti-news",
        iconBg: "primary-transparent"
    },
    {
        id: 2,
        title: "Total Selected",
        count: "1,764",
        icon: "ti ti-checkbox",
        iconBg: "secondary-transparent"
    },
    {
        id: 3,
        title: "Total Rejected",
        count: 465,
        icon: "ti ti-ban",
        iconBg: "danger-transparent"
    }
];







