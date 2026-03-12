import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face9 from '../../../assets/images/faces/9.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face11 from '../../../assets/images/faces/11.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face13 from '../../../assets/images/faces/13.jpg';
import face14 from '../../../assets/images/faces/14.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import face16 from '../../../assets/images/faces/16.jpg';
import type { ReactNode } from 'react';
import type { ApexOptions } from 'apexcharts';



// Project Analysis
export const ProjectAnalysisSeries = [{
    name: "Paid",
    type: "column",
    data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
}, {
    name: "Unpaid",
    type: "area",
    data: [44, 55, 41, 42, 22, 43, 21, 35, 56, 27, 43, 27]
}, {
    name: "Refunded",
    type: "line",
    data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
}]
export const ProjectAnalysisOptions = {
    chart: {
        height: 310,
        type: "line",
        stacked: !1,
        toolbar: {
            show: !1
        }
    },
    stroke: {
        width: [0, 0, 2.5],
        dashArray: [0, 0, 4],
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    xaxis: {
        axisBorder: {
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "20%",
            borderRadius: 2
        }
    },
    legend: {
        position: "top"
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    markers: {
        size: 0
    },
    colors: ['var(--primary-color)', "rgba(127, 103, 257,0.1)", 'rgba(127, 103, 257,1)'],
    tooltip: {
        theme: "dark",
    },
}

// Team Members
interface TeamMembersSeriesType {
    series: number[]
}
interface TeamMembersOptionsType {
    color: string[]
}
export const TeamMembersSeries = ({ series }: TeamMembersSeriesType) => (series)
export const TeamMembersOptions = ({ color }: TeamMembersOptionsType) => ({
    chart: {
        type: "donut",
        width: 50,
        height: 50,
        sparkline: {
            enabled: true
        },
    },
    dataLabels: {
        enabled: false
    },
    colors: color,
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    value: {
                        fontSize: "11px",
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 400,
                        color: "#000",
                        offsetY: -12,
                        formatter: function (val: number) {
                            return val;
                        },
                    },
                    total: {
                        show: true,
                        showAlways: false,
                        fontSize: "11px",
                        fontFamily: "Rubik, sans-serif",
                    },
                },
            },
        },
    },
    tooltip: {
        enabled: false
    }
})

// cards
export interface MetricCardsType {
    id: number;
    title: string;
    value: string;
    change: string;
    changeDirection: string;
    changeColor: string;
    bgColor: string;
    svg: ReactNode;
    svgColor: string;
}
export const MetricCards: MetricCardsType[] = [
    {
        id: 1,
        title: "Earnings",
        value: "$12,563.50",
        change: "0.15%",
        changeDirection: "up",
        changeColor: "primary",
        bgColor: "primary-transparent",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#00000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M4 18h16V6H4v12zm5-4h4v-1h-3c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1V7h2v1h2v2h-4v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1h-2v-1H9v-2z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12zm-9-1h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1z" />
            </svg>
        ),
        svgColor: "primary",
    },
    {
        id: 2,
        title: "Cost",
        value: "$6,156.38",
        change: "2.50%",
        changeDirection: "up",
        changeColor: "primary",
        bgColor: "secondary-transparent",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#00000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M13 17c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6V5H5v14h14v-2h-6z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
                <circle cx="16" cy="12" r="1.5" />
            </svg>
        ),
        svgColor: "secondary",
    },
    {
        id: 3,
        title: "Productivity",
        value: "$95.5M",
        change: "4.77%",
        changeDirection: "down",
        changeColor: "danger",
        bgColor: "danger-transparent",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#00000">
                <rect fill="none" height="24" width="24" />
                <g opacity=".8" fill="#fff">
                    <path
                        d="M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z" />
                </g>
                <g>
                    <path
                        d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z" />
                </g>
            </svg>
        ),
        svgColor: "danger",
    },
    {
        id: 4,
        title: "Total Time On Project",
        value: "148:00h",
        change: "3.36%",
        changeDirection: "up",
        changeColor: "primary",
        bgColor: "warning-transparent",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#00000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.25 12.15L11 13V7h1.5v5.25l4.5 2.67-.75 1.23z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
        ),
        svgColor: "warning",
    }
];


// Projects Overview
interface ProjectsOverviewType {
    id: number;
    title: string;
    avatarBg: string;
    count: string;
    countBg: string;
    change: number | string;
    changeColor: string;
    direction: string;
    color?: string;
    icon: string;
}
export const ProjectsOverview: ProjectsOverviewType[] = [
    {
        id: 1,
        title: "Total Projects",
        avatarBg: "primary-transparent",
        count: "1,982",
        countBg: "primary",
        change: 5.3,
        changeColor: "primary",
        direction: "up",
        icon: 'folder-2-line'
    },
    {
        id: 2,
        title: "Ongoing Projects",
        avatarBg: "secondary-transparent",
        count: "214",
        countBg: "secondary",
        change: 1.3,
        changeColor: "danger",
        direction: "down",
        color: "secondary",
        icon: 'loader-2-fill'
    },
    {
        id: 3,
        title: "On-Hold Projects",
        avatarBg: "danger-transparent",
        count: "262",
        countBg: "danger",
        change: "2.0",
        changeColor: "primary",
        direction: "up",
        color: "danger",
        icon: 'pause-fill'
    },
    {
        id: 4,
        title: "Active Projects",
        avatarBg: "warning-transparent",
        count: "154",
        countBg: "primary",
        change: "2.0",
        changeColor: "primary",
        direction: "up",
        icon: 'refresh-line'
    },
    {
        id: 5,
        title: "Pending Projects",
        avatarBg: "info-transparent",
        count: "395",
        countBg: "warning",
        change: 0.3,
        changeColor: "danger",
        direction: "down",
        icon: 'time-line'
    },
    {
        id: 6,
        title: "Inactive Projects",
        avatarBg: "pink-transparent",
        count: "395",
        countBg: "info",
        change: 2.6,
        changeColor: "primary",
        direction: "up",
        icon: 'close-fill'
    },
    {
        id: 7,
        title: "Finished Projects",
        avatarBg: "primary-transparent",
        count: "79",
        countBg: "primary",
        change: 0.2,
        changeColor: "danger",
        direction: "down",
        icon: 'check-fill'
    }
];

// Team Members
interface TeamMembersType {
    id: number;
    name: string;
    avatarBg: string;
    role: string;
    location: string;
    imageUrl: string;
    status: string;
    statusColor: string;
    hours: string;
    teamId: string;
    chartOptions: ApexOptions;
    chartSeries: number[];
    borderClass?: string
}
export const TeamMembers: TeamMembersType[] = [
    {
        id: 1,
        name: "Emily Johnson",
        avatarBg: "secondary",
        role: "UI Developer",
        location: "San Francisco",
        imageUrl: face6,
        status: "Completed",
        statusColor: "primary-transparent",
        hours: "32 Hr",
        teamId: "team-1",
        chartOptions: TeamMembersOptions({ color: ["var(--primary-color)", "var(--primary-color)", "var(--primary-color)", "var(--primary-color)", "var(--primary-color)", "var(--primary-color)", "var(--primary01)", "var(--primary01)", "var(--primary01)", "var(--primary01)"] }),
        chartSeries: TeamMembersSeries({ series: [4, 4, 4, 4, 4, 4, 4, 4, 4, 3] })
    },
    {
        id: 2,
        name: "Sophie Davis",
        avatarBg: "secondary",
        role: "Designer",
        location: "San Francisco",
        imageUrl: face3,
        status: "Pending",
        statusColor: "secondary-transparent",
        hours: "15 Hr",
        teamId: "team-2",
        chartOptions: TeamMembersOptions({ color: ["rgba(127, 103, 257,1)", "rgba(127, 103, 257,1)", "rgba(127, 103, 257,1)", "rgba(127, 103, 257,1)", "rgba(127, 103, 257,0.1)", "rgba(127, 103, 257,0.1)", "rgba(127, 103, 257,0.1)", "rgba(127, 103, 257,0.1)", "rgba(127, 103, 257,0.1)", "rgba(127, 103, 257,0.1)"] }),
        chartSeries: TeamMembersSeries({ series: [5, 5, 5, 5, 5, 5, 5, 5, 5, 2] })
    },
    {
        id: 3,
        name: "Olivia White",
        avatarBg: "secondary",
        role: "UI Developer",
        location: "San Francisco",
        imageUrl: face5,
        status: "Completed",
        statusColor: "primary-transparent",
        hours: "22 Hr",
        teamId: "team-3",
        chartOptions: TeamMembersOptions({ color: ["rgba(253, 73, 99,1)", "rgba(253, 73, 99,1)", "rgba(253, 73, 99,1)", "rgba(253, 73, 99,1)", "rgba(253, 73, 99,1)", "rgba(253, 73, 99,1)", "rgba(253, 73, 99,0.1)", "rgba(253, 73, 99,0.1)", "rgba(253, 73, 99,0.1)", "rgba(253, 73, 99,0.1)"] }),
        chartSeries: TeamMembersSeries({ series: [4, 4, 4, 4, 3, 4, 4, 4, 3, 2] })
    },
    {
        id: 4,
        name: "Mia Taylor",
        avatarBg: "secondary",
        role: "UI Tester",
        location: "San Francisco",
        imageUrl: face7,
        status: "Not Completed",
        statusColor: "danger-transparent",
        hours: "19 Hr",
        teamId: "team-4",
        chartOptions: TeamMembersOptions({ color: ["rgba(255, 169, 9,1)", "rgba(255, 169, 9,1)", "rgba(255, 169, 9,1)", "rgba(255, 169, 9,1)", "rgba(255, 169, 9,1)", "rgba(255, 169, 9,1)", "rgba(255, 169, 9,1)", "rgba(255, 169, 9,0.1)", "rgba(255, 169, 9,0.1)", "rgba(255, 169, 9,0.1)"] }),
        chartSeries: TeamMembersSeries({ series: [5, 5, 5, 5, 5, 5, 5, 5, 3, 2] })
    },
    {
        id: 5,
        name: "Chloe Anderson",
        avatarBg: "secondary",
        role: "React Developer",
        location: "San Francisco",
        imageUrl: face2,
        status: "Scheduled",
        statusColor: "warning-transparent",
        hours: "23 Hr",
        teamId: "team-5",
        chartOptions: TeamMembersOptions({ color: ["rgba(15, 188, 249,1)", "rgba(15, 188, 249,1)", "rgba(15, 188, 249,1)", "rgba(15, 188, 249,1)", "rgba(15, 188, 249,1)", "rgba(15, 188, 249,1)", "rgba(15, 188, 249,0.1)", "rgba(15, 188, 249,0.1)", "rgba(15, 188, 249,0.1)", "rgba(15, 188, 249,0.1)"] }),
        chartSeries: TeamMembersSeries({ series: [5, 5, 4, 5, 5, 4, 5, 5, 3, 2] }),
        borderClass: 'border-bottom-0 rounded'

    }
];

// Project Categories
interface Progress {
    Bg: string;
    width: string;
    ariaValueNow: number;
}

interface ProjectCategoriesType {
    id: number;
    category: string;
    trend: string;
    percentage: number;
    colorClass: string;
    progress: Progress;
}
export const ProjectCategories: ProjectCategoriesType[] = [
    {
        id: 1,
        category: "UI Projects",
        trend: "up",
        percentage: 42.34,
        colorClass: "text-primary",
        progress: {
            Bg: "primary",
            width: "36%",
            ariaValueNow: 36,
        }
    },
    {
        id: 2,
        category: "UX Projects",
        trend: "down",
        percentage: 13,
        colorClass: "text-danger",
        progress: {
            Bg: "secondary",
            width: "24%",
            ariaValueNow: 24,
        }
    },
    {
        id: 3,
        category: "Finance",
        trend: "up",
        percentage: 62,
        colorClass: "text-primary",
        progress: {
            Bg: "danger",
            width: "27%",
            ariaValueNow: 27,
        }
    },
    {
        id: 4,
        category: "Banking",
        trend: "up",
        percentage: 22.46,
        colorClass: "text-primary",
        progress: {
            Bg: "warning",
            width: "19%",
            ariaValueNow: 19,
        }
    }
];

// To-Do List
interface ToDoListType {
    id: number;
    task: string;
    date: string;
    checkboxClass: string;
    checked: boolean;
}
export const ToDoList: ToDoListType[] = [
    {
        id: 1,
        task: "Finish Presentation Slides",
        date: "May 29, 2024",
        checkboxClass: "form-check-input",
        checked: true
    },
    {
        id: 2,
        task: "Send Follow-up Emails",
        date: "May 27, 2024",
        checkboxClass: "form-check-input form-checked-secondary",
        checked: true
    },
    {
        id: 3,
        task: "Research New Software",
        date: "May 30, 2024",
        checkboxClass: "form-check-input form-checked-danger",
        checked: false
    },
    {
        id: 4,
        task: "Schedule Training Session",
        date: "May 29, 2024",
        checkboxClass: "form-check-input form-checked-warning",
        checked: false
    },
    {
        id: 5,
        task: "Update Task Board",
        date: "May 27, 2024",
        checkboxClass: "form-check-input form-checked-info",
        checked: true
    },
    {
        id: 6,
        task: "Attend Team Meeting",
        date: "May 28, 2024",
        checkboxClass: "form-check-input form-checked-success",
        checked: false
    }
];

// Important Project List
interface Details {
    dueDate: string;
    budget: string;
    deadline: string;
    deadlineBg: string;
}
interface ImportantProjectListType {
    id: number;
    name: string;
    client: string;
    iconClass: string;
    avatarBg: string;
    details: Details;
    team: string[];
    extraMembers: number;
    comments: number;
    files: number;
}
export const ImportantProjectList: ImportantProjectListType[] = [
    {
        id: 1,
        name: "Net Banking App",
        client: "Jordan",
        iconClass: "ri-planet-line",
        avatarBg: "primary-transparent",
        details: {
            dueDate: "30 Jan 2024",
            budget: "$1,12,856",
            deadline: "7 days Left",
            deadlineBg: "primary-transparent"
        },
        team: [face2, face8, face2],
        extraMembers: 8,
        comments: 34,
        files: 5
    },
    {
        id: 2,
        name: "Marketing App",
        client: "Willium Kun",
        iconClass: "ri-store-line",
        avatarBg: "secondary-transparent",
        details: {
            dueDate: "12 Feb 2024",
            budget: "$9,75,584",
            deadline: "15 days Left",
            deadlineBg: "secondary-transparent"
        },
        team: [face2, face8, face2],
        extraMembers: 0,
        comments: 12,
        files: 7
    },
    {
        id: 3,
        name: "NFT Webiste",
        client: "Andrew Garfield",
        iconClass: "ri-nft-line",
        avatarBg: "danger-transparent",
        details: {
            dueDate: "09 Sept 2024",
            budget: "$2,87,753",
            deadline: "Completed",
            deadlineBg: "primary-transparent"
        },
        team: [
            face2,
            face8,
            face3,
            face4
        ],
        extraMembers: 0,
        comments: 54,
        files: 13
    }
];

// Team Tasks

interface TeamTasksType {
    id: number;
    task: string;
    avatars: string[];
    timeTracked: string;
    progress: {
        width: string;
        ariaValueNow: number;
        bg: string;
    };
    status: string;
    statusBg: string;
    borderClass?: string
}
export const TeamTasks: TeamTasksType[] = [
    {
        id: 1,
        task: "Design Mockups",
        avatars: [face2, face8, face2],
        timeTracked: "05h:12m:05s",
        progress: {
            width: "100%",
            ariaValueNow: 100,
            bg: "primry",
        },
        status: "Completed",
        statusBg: "primary-transparent"
    },
    {
        id: 2,
        task: "API Development",
        avatars: [face13, face14],
        timeTracked: "08h:30m:15s",
        progress: {
            width: "70%",
            ariaValueNow: 100,
            bg: "info",
        },
        status: "In Progress",
        statusBg: "info-transparent"
    },
    {
        id: 3,
        task: "User Testing",
        avatars: [face15, face6],
        timeTracked: "04h:45m:00s",
        progress: {
            width: "50%",
            ariaValueNow: 100,
            bg: "warning",
        },
        status: "Pending",
        statusBg: "warning-transparent"
    },
    {
        id: 4,
        task: "Deployment",
        avatars: [face11, face7],
        timeTracked: "02h:30m:00s",
        progress: {
            width: "30%",
            ariaValueNow: 100,
            bg: "danger",
        },
        status: "Scheduled",
        statusBg: "danger-transparent"
    },
    {
        id: 5,
        task: "Implementation",
        avatars: [face9, face10, face11],
        timeTracked: "07h:20m:10s",
        progress: {
            width: "80%",
            ariaValueNow: 100,
            bg: "info",
        },
        status: "In Progress",
        statusBg: "info-transparent"
    },
    {
        id: 6,
        task: "Implementation",
        avatars: [face9, face10, face11],
        timeTracked: "07h:20m:10s",
        progress: {
            width: "55%",
            ariaValueNow: 100,
            bg: "info",
        },
        status: "In Progress",
        statusBg: "info-transparent"
    },
    {
        id: 7,
        task: "Code Review",
        avatars: [face12, face13],
        timeTracked: "03h:45m:25s",
        progress: {
            width: "60%",
            ariaValueNow: 100,
            bg: "info",
        },
        status: "In Progress",
        statusBg: "info-transparent",
        borderClass: 'border-bottom-0'
    }
];

// Projects Summary
interface ProjectsSummaryType {
    id: number;
    title: string;
    avatars: string[];
    tasksDone: string;
    totalTasks: string;
    progress: {
        ariaValueNow: number;
        bg: string;
        width: string;
    };
    status: string;
    statusBg: string;
    date: string;
    length: boolean;
    textcolor?: boolean
}
export const ProjectsSummary: ProjectsSummaryType[] = [
    {
        id: 1,
        title: "Home Page",
        avatars: [
            face8,
            face4,
            face6,
            face7
        ],
        tasksDone: "110",
        totalTasks: "180",
        progress: {
            ariaValueNow: 25,
            bg: "primary",
            width: "25%"
        },
        status: "In Progress",
        statusBg: "primary-transparent",
        date: "14-04-2023",
        length: false
    },
    {
        id: 2,
        title: "Landing Design",
        avatars: [
            face8,
            face4,
            face6,
            face7,
            face8
        ],
        tasksDone: "95",
        totalTasks: "100",
        progress: {
            ariaValueNow: 95,
            bg: "primary",
            width: "95%"
        },
        status: "In Progress",
        statusBg: "secondary-transparent",
        date: "20-04-2023",
        length: false,
        textcolor: true
    },
    {
        id: 3,
        title: "New Template Design",
        avatars: [
            face8,
            face4,
            face16
        ],
        tasksDone: "0",
        totalTasks: "100",
        progress: {
            ariaValueNow: 0,
            bg: "primary",
            width: "0%"
        },
        status: "Pending",
        statusBg: "warning-transparent",
        date: "29-05-2023",
        length: false
    },
    {
        id: 4,
        title: "HR Management Design",
        avatars: [
            face8,
            face14,
            face4,
            face16,

        ],
        tasksDone: "26",
        totalTasks: "71",
        progress: {
            ariaValueNow: 35,
            bg: "primary",
            width: "35%"
        },
        status: "In Progress",
        statusBg: "secondary-transparent",
        date: "18-04-2023",
        length: true
    },
    {
        id: 5,
        title: "Designing New Template",
        avatars: [
            face8,
            face14,
            face4,
            face16,
        ],
        tasksDone: "120",
        totalTasks: "120",
        progress: {
            ariaValueNow: 100,
            bg: "primary",
            width: "100%"
        },
        status: "Completed",
        statusBg: "primary-transparent",
        date: "11-04-2023",
        length: true
    }
];

