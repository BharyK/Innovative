import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import type { ReactNode } from 'react';
import type { ApexOptions } from 'apexcharts';


// Audience Statistics
export const AudienceStatisticsSeries = [
    {
        type: "area",
        name: "Facebook",
        data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 20],
    },
    {
        type: "line",
        name: "Instagram",
        data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 36],
    },
]
export const AudienceStatisticsOptions = {
    chart: {
        type: "line",
        height: 400,
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 1,
            blur: 3,
            color: '#000',
            opacity: 0.1
        },
        toolbar: {
            show: false,
        }
    },
    grid: {
        borderColor: "#f5f4f4",
        strokeDashArray: 5,
        yaxis: {
            lines: {
                show: true, // Ensure y-axis grids are shown
            },
        },
    },
    colors: [
        "var(--primary-color)",
        "rgba(127, 103, 257, 1)",
    ],
    stroke: {
        curve: ["smooth", "smooth"],
        width: [1.5, 2],
        dashArray: [0, 3],
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: [0, 4,],
        colors: ['rgba(var(--secondary-rgb), 1)'],
        strokeColors: '#ffffff',
        strokeWidth: 1,
        hover: {
            size: 5
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
    legend: {
        show: true,
        position: "top",
        markers: {
            size: 5
        }
    },
    yaxis: {
        title: {
            style: {
                color: "#adb5be",
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label",
            },
        },
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
            "sep",
            "oct",
            "nov",
            "dec",
        ],
        axisBorder: {
            show: false,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: false,
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
    tooltip: {
        theme: "dark",
    }

}

// Audience Reached
export const AudienceReachedSeries = [22664, 13754, 12654]
export const AudienceReachedOptions = {
    labels: ["male", "Female", "Others"],
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
                        label: 'Audience Reached',
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
    colors: ["var(--primary09)", "rgba(127, 103, 257, 0.9)", "rgba(253, 73, 99, 0.9)"],
}

export const IncomeChartSeries = [{
    name: 'Profit',
    data: [34, 32, 37, 36, 38, 35, 38, 43, 48, 64, 60, 54, 54, 42, 57, 66, 41, 55, 60, 54, 66, 75, 82, 75, 43, 31, 42, 47, 33, 42, 57, 41, 64, 42, 65, 55],
},
]

interface GradientColorStop {
    offset: number;
    color: string;
    opacity: number;
};

interface GradientSettings {
    colorStops: GradientColorStop[][];
};
interface IncomeChartOptionsProps {
    gradientSettings: GradientSettings;
    color: string;
};
export const IncomeChartOptions = ({ gradientSettings, color }: IncomeChartOptionsProps) => ({
    chart: {
        type: 'area',
        height: 50,
        stacked: true,
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    colors: [color],
    plotOptions: {
        bar: {
            columnWidth: '40%'
        }
    },
    stroke: {
        width: [0],
        curve: 'smooth',
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
        position: 'top',
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: gradientSettings.colorStops,
        }
    },
    yaxis: {
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
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
    xaxis: {
        type: 'month',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
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
    tooltip: {
        enabled: false,
    }
})

const ChartGradientSettings = {
    Impression: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: "var(--primary-color)",
                    opacity: 0.2
                },
                {
                    offset: 75,
                    color: "var(--primary-color)",
                    opacity: 0.2
                },
                {
                    offset: 100,
                    color: 'var(--primary-color)',
                    opacity: 0.2
                }
            ],
        ]
    },
    Subscribers: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: "rgba(127, 103, 257,1)",
                    opacity: 0.2
                },
                {
                    offset: 75,
                    color: "rgba(127, 103, 257,1)",
                    opacity: 0.2
                },
                {
                    offset: 100,
                    color: 'rgba(127, 103, 257,1)',
                    opacity: 0.2
                }
            ],
        ]
    },
}

// #profilt-earned
export const ProfiltEarnedSeries = [
    {
        name: "Followers",
        data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
        type: "column",
    }
]
export const ProfiltEarnedOptions = {
    chart: {
        height: 230,
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
            borderRadius: 3,
            colors: {
                ranges: [{
                    from: 0,
                    to: 45,
                    color: 'var(--primary-color)'
                }, {
                    from: 45,
                    to: 65,
                    color: 'rgba(127, 103, 257,1)'
                }, {
                    from: 65,
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
        },
    },
}


export interface SocialStatsType {
    id: number;
    borderColor: string;
    platform: string;
    iconClass: string;
    avatarBg: string;
    followers: string;
    change: string;
    changeDirection: string;
    changeColor: string;
}
export const SocialStats: SocialStatsType[] = [
    {
        id: 1,
        borderColor: "primary",
        platform: "Instagram",
        iconClass: "ri-instagram-fill",
        avatarBg: "primary-transparent",
        followers: "14.35K",
        change: "0.45%",
        changeDirection: "up",
        changeColor: "primary"
    },
    {
        id: 2,
        borderColor: "secondary",
        platform: "Linked In",
        iconClass: "ri-linkedin-box-fill",
        avatarBg: "secondary-transparent",
        followers: "22.65K",
        change: "1.25%",
        changeDirection: "down",
        changeColor: "danger"
    },
    {
        id: 3,
        borderColor: "danger",
        platform: "Face Book",
        iconClass: "ri-facebook-circle-fill",
        avatarBg: "danger-transparent",
        followers: "15.87K",
        change: "0.75%",
        changeDirection: "up",
        changeColor: "primary"
    },
    {
        id: 4,
        borderColor: "warning",
        platform: "Youtube",
        iconClass: "ri-youtube-fill",
        avatarBg: "warning-transparent",
        followers: "23.76K",
        change: "1.26%",
        changeDirection: "down",
        changeColor: "danger"
    }
];

// Social Media Performance
interface SocialMediaPerformanceType {
    id: number;
    platform: string;
    iconClass: string;
    avatarBg: string;
    dateRange: string;
    posts: number;
    reach: string;
    ctr: string;
    impressions: string;
    clicks: string;
    growth: string;
    growthRate: string;
    growthRateBg: string;
    trend: string;
    ctrColor?: string;
}
export const SocialMediaPerformance: SocialMediaPerformanceType[] = [
    {
        id: 1,
        platform: "Facebook",
        iconClass: "ri-facebook-line",
        avatarBg: "primary-transparent",
        dateRange: "October 1-7, 2024",
        posts: 10,
        reach: "15,000",
        ctr: "5%",
        impressions: "45,000",
        clicks: "2,500",
        growth: "+200",
        growthRate: "2.4%",
        growthRateBg: "primary-transparent",
        trend: "up"
    },
    {
        id: 2,
        platform: "Instagram",
        iconClass: "ri-instagram-line",
        avatarBg: "secondary-transparent",
        dateRange: "October 11-12, 2024",
        posts: 8,
        reach: "20,000",
        ctr: "6%",
        ctrColor: "primary",
        impressions: "50,000",
        clicks: "3,000",
        growth: "+300",
        growthRate: "2.4%",
        growthRateBg: "danger-transparent",
        trend: "down"
    },
    {
        id: 3,
        platform: "Twitter",
        iconClass: "ri-twitter-x-line",
        avatarBg: "danger-transparent",
        dateRange: "October 15-17, 2024",
        posts: 12,
        reach: "10,000",
        ctr: "4.5%",
        impressions: "35,000",
        clicks: "1,800",
        growth: "+150",
        growthRate: "0.5%",
        growthRateBg: "primary-transparent",
        trend: "up"
    },
    {
        id: 4,
        platform: "LinkedIn",
        iconClass: "ri-linkedin-line",
        avatarBg: "warning-transparent",
        dateRange: "October 13-21, 2024",
        posts: 6,
        reach: "5,000",
        ctr: "3%",
        impressions: "12,000",
        clicks: "500",
        growth: "+100",
        growthRate: "2.4%",
        growthRateBg: "primary-transparent",
        trend: "up"
    },
    {
        id: 5,
        platform: "YouTube",
        iconClass: "ri-youtube-line",
        avatarBg: "info-transparent",
        dateRange: "October 21-23, 2024",
        posts: 5,
        reach: "12,000",
        ctr: "7%",
        impressions: "40,000",
        clicks: "1,500",
        growth: "+250",
        growthRate: "1.2%",
        growthRateBg: "primary-transparent",
        trend: "up"
    }
];

// Requests
interface RequestsType {
    id: number;
    name: string;
    time: string;
    imgUrl: string;
    avatarBg: string;
    btnColor: string;
}

export const Requests: RequestsType[] = [
    {
        id: 1,
        name: "Socrates Itumay",
        time: "1 minute ago",
        imgUrl: face2,
        avatarBg: "primary-transparent",
        btnColor: "secondary-light"
    },
    {
        id: 2,
        name: "Aarav Sharma",
        time: "2 minutes ago",
        imgUrl: face3,
        avatarBg: "primary-transparent",
        btnColor: "secondary-light"
    },
    {
        id: 3,
        name: "Dharsh Kumar",
        time: "10 minutes ago",
        imgUrl: face5,
        avatarBg: "primary-transparent",
        btnColor: "secondary-light"
    },
    {
        id: 4,
        name: "Neha Singh",
        time: "15 minutes ago",
        imgUrl: face6,
        avatarBg: "primary-transparent",
        btnColor: "secondary-light"
    },
    {
        id: 5,
        name: "Maya Deshmukh",
        time: "20 minutes ago",
        imgUrl: face7,
        avatarBg: "primary-transparent",
        btnColor: "secondary-light"
    },
    {
        id: 6,
        name: "Ishaan Rao",
        time: "30 minutes ago",
        imgUrl: face8,
        avatarBg: "primary-transparent",
        btnColor: "secondary-light"
    }
];

// Overall Posts
interface Progress {
    width: string;
    ariaValueNow: number;
    Bg: string;
}

interface OverallPostsType {
    id: number;
    progress: Progress;
    platform: string;
    posts: string;
    gross: string;
    change: string;
    changeBg: string;
    trend: string;
    iconColor: string;
    borderClass?: string
}
export const OverallPosts: OverallPostsType[] = [
    {
        id: 1,
        progress: {
            width: "16%",
            ariaValueNow: 16,
            Bg: "primary"
        },
        platform: "Facebook",
        posts: "31,245",
        gross: "25%",
        change: "0.45%",
        changeBg: "primary",
        trend: "up",
        iconColor: "primary",
    },
    {
        id: 2,
        progress: {
            width: "24%",
            ariaValueNow: 24,
            Bg: "secondary"
        },
        platform: "Instagram",
        posts: "29,553",
        gross: "16%",
        change: "0.27%",
        changeBg: "secondary",
        trend: "up",
        iconColor: "secondary",
    },
    {
        id: 3,
        progress: {
            width: "27%",
            ariaValueNow: 27,
            Bg: "danger"
        },
        platform: "Twitter",
        posts: "24,577",
        gross: "22%",
        change: "0.63%",
        changeBg: "danger",
        trend: "up",
        iconColor: "danger",
    },
    {
        id: 4,
        progress: {
            width: "15%",
            ariaValueNow: 15,
            Bg: "warning"
        },
        platform: "LinkedIn",
        posts: "19,278",
        gross: "18%",
        change: "1.14%",
        changeBg: "warning",
        trend: "down",
        iconColor: "warning",
    },
    {
        id: 5,
        progress: {
            width: "18%",
            ariaValueNow: 19,
            Bg: "info custom-post-class"
        },
        platform: "Twitch",
        posts: '15,934',
        gross: "15%",
        change: "3.87%",
        changeBg: "info",
        trend: "up",
        iconColor: "info",
        borderClass: 'border-bottom-0'
    }
];

interface TrafficSourcestype {
    id: number;
    platform: string;
    icon: string;
    avatarBg: string;
    followers: string;
    percentage: string;
    growth: string;
    growthDirection: string;
    growthBg: string;
}
export const TrafficSources: TrafficSourcestype[] = [
    {
        id: 1,
        platform: "Facebook",
        icon: "ri-facebook-line",
        avatarBg: "primary",
        followers: "25,145",
        percentage: "56%",
        growth: "2.4%",
        growthDirection: "up",
        growthBg: "primary"
    },
    {
        id: 2,
        platform: "Instagram",
        icon: "ri-instagram-line",
        avatarBg: "secondary",
        followers: "19,762",
        percentage: "35%",
        growth: "1.1%",
        growthDirection: "down",
        growthBg: "danger"
    },
    {
        id: 3,
        platform: "Twitter",
        icon: "ri-twitter-x-line",
        avatarBg: "danger",
        followers: "12,384",
        percentage: "20%",
        growth: "0.5%",
        growthDirection: "up",
        growthBg: "primary"
    },
    {
        id: 4,
        platform: "LinkedIn",
        icon: "ri-linkedin-box-line",
        avatarBg: "warning",
        followers: "8,745",
        percentage: "15%",
        growth: "3.2%",
        growthDirection: "up",
        growthBg: "primary"
    },
    {
        id: 5,
        platform: "Youtube",
        icon: "ri-youtube-line",
        avatarBg: "info",
        followers: "12,653",
        percentage: "22%",
        growth: "1.45%",
        growthDirection: "down",
        growthBg: "danger"
    }
];

// Suggestions
interface SuggestionsType {
    id: number;
    name: string;
    mutualFriends: number;
    image: string;
    avatarBg: string;
    action: string;
    actionBg: string;
}
export const Suggestions: SuggestionsType[] = [
    {
        id: 1,
        name: "Socrates Itumay",
        mutualFriends: 3,
        image: face2,
        avatarBg: "primary-transparent",
        action: "Follow",
        actionBg: "primary-light",
    },
    {
        id: 2,
        name: "Ryan Gercia",
        mutualFriends: 1,
        image: face3,
        avatarBg: "secondary-transparent",
        action: "Follow",
        actionBg: "primary-light",
    },
    {
        id: 3,
        name: "Prax Bhav",
        mutualFriends: 2,
        image: face10,
        avatarBg: "danger-transparent",
        action: "Un Follow",
        actionBg: "danger-light",
    },
    {
        id: 4,
        name: "Jackie Chen",
        mutualFriends: 12,
        image: face12,
        avatarBg: "warning-transparent",
        action: "Follow",
        actionBg: "primary-light",
    },
    {
        id: 5,
        name: "Samantha Sam",
        mutualFriends: 6,
        image: face5,
        avatarBg: "pink-transparent",
        action: "Un Follow",
        actionBg: "danger-light",
    },
    {
        id: 6,
        name: "Robert Lewis",
        mutualFriends: 8,
        image: face15,
        avatarBg: "teal-transparent",
        action: "Follow",
        actionBg: "primary-light",
    },
    {
        id: 7,
        name: "Socrates Itumay",
        mutualFriends: 12,
        image: face5,
        avatarBg: "orange-transparent",
        action: "Follow",
        actionBg: "primary-light",
    }
];

interface MetricCardsType {
    id: number;
    title: string;
    avatarBg: string;
    value: string;
    change: string;
    changeType: string;
    changeBg: string;
    chartId: string;
    period: string;
    svg: ReactNode;
    chartOptions: ApexOptions;
}
export const MetricCards: MetricCardsType[] = [
    {
        id: 1,
        title: "Engaged Users",
        avatarBg: "primary",
        value: "14,252",
        change: "0.96%",
        changeType: "down",
        changeBg: "danger-transparent",
        chartId: "income-chart",
        period: "This Month",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
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
        chartOptions: IncomeChartOptions({ color: 'var(--primary-color)', gradientSettings: ChartGradientSettings.Impression }),
    },
    {
        id: 2,
        title: "Page Impressions",
        avatarBg: "secondary",
        value: "5,14,252",
        change: "1.34%",
        changeType: "down",
        changeBg: "primary-transparent",
        chartId: "page-chart",
        period: "This Month",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
                <g>
                    <rect fill="none" height="24" width="24" y="0" />
                    <path
                        d="M5,5v14h14V5H5z M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z"
                        opacity=".8" fill="#fff" />
                    <path
                        d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z M17,13H7v-2h10 V13z M17,9H7V7h10V9z M14,17H7v-2h7V17z" />
                </g>
            </svg>
        ),
        chartOptions: IncomeChartOptions({ color: 'rgba(127, 103, 257)', gradientSettings: ChartGradientSettings.Subscribers }),
    }
];


// Audience Reached
interface AudienceReachedType {
    id: number;
    label: string;
    iconClass: string;
    iconColor: string;
    count: string;
}
export const AudienceReached: AudienceReachedType[] = [
    {
        id: 1,
        label: "Male",
        iconClass: "ri-circle-line",
        iconColor: "primary",
        count: "22,664"
    },
    {
        id: 2,
        label: "Female",
        iconClass: "ri-circle-line",
        iconColor: "secondary",
        count: "13,754"
    },
    {
        id: 3,
        label: "Others",
        iconClass: "ri-circle-line",
        iconColor: "danger",
        count: "12,654"
    }
];



