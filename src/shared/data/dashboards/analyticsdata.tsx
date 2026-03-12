import type { ReactNode } from "react"

// Audience Overview
export const AudienceOverviewSeries = [
    {
        name: 'Views',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
    },
    {
        name: 'Followers',
        type: 'column',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
    },
]
export const AudienceOverviewOptions = {
    chart: {
        toolbar: {
            show: false
        },
        type: 'line',
        height: 328,
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1, 1.1],
        curve: ['straight', 'smooth'],
    },
    legend: {
        show: true,
        position: 'top',
        markers: {
            shape: "circle",
            size: 5
        }
    },
    xaxis: {
        axisBorder: {
            color: '#e9e9e9',
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "45%",
            borderRadius: 2
        }
    },
    colors: ["var(--primary-color)", "rgba(var(--secondary-rgb), 1)"],
}

// #impression-chat
interface ImpressionChartSeriesProps {
    series: number[];
};
export const ImpressionChatSeries = ({ series }: ImpressionChartSeriesProps) => ([{
    name: 'Value',
    data: series
}])
interface GradientColorStop {
    offset: number;
    color: string;
    opacity: number;
};

interface GradientSettings {
    colorStops: GradientColorStop[][];
};

interface ImpressionChartOptionsProps {
    gradientSettings: GradientSettings;
    color: string;
};
export const ImpressionChatOptions = ({ gradientSettings, color }: ImpressionChartOptionsProps) => ({
    chart: {
        type: 'area',
        height: 70,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 0,
            blur: 1,
            color: color,
            opacity: 0.15
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1.5,
        dashArray: 0,
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
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
    },
    xaxis: {
        axisBorder: {
            show: false
        },
    },

    colors: [color],
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
                    color: "var(--primary01)",
                    opacity: 1
                },
                {
                    offset: 75,
                    color: "var(--primary01)",
                    opacity: 1
                },
                {
                    offset: 100,
                    color: "var(--primary01)",
                    opacity: 1
                }
            ],
        ]
    },
    Subscribers: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: "rgba(127, 103, 257,0.1)",
                    opacity: 1
                },
                {
                    offset: 75,
                    color: "rgba(127, 103, 257,0.1)",
                    opacity: 1
                },
                {
                    offset: 100,
                    color: "rgba(127, 103, 257,0.1)",
                    opacity: 1
                }
            ],
        ]
    },
}

// Session Devices
export const SessionDevicesSeries = [2224, 1267, 553]
export const SessionDevicesOptions = {
    labels: ["Mobile", "Laptop", "Desktop"],
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
        width: 0,
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

// Sales Growth
export const SalesGrowthSeries = [{
    name: 'Last Year',
    data: [35, 36, 22, 44, 48, 37, 36, 26, 27, 33, 32, 36]
}, {
    name: 'This Year',
    data: [55, 53, 46, 40, 45, 38, 46, 37, 22, 34, 40, 44,]
},
]
export const SalesGrowthOptions = {
    chart: {
        type: 'line',
        height: 195,
        stacked: true,
        toolbar: {
            show: false,
        },
        sparkline: {
            enabled: false
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 6,
            left: 1,
            blur: 4,
            color: '#000',
            opacity: 0.12
        },
    },
    grid: {
        show: true,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
        padding: {
            top: 2,
            right: 2,
            bottom: 2,
            left: 2
        },
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    markers: {
        size: 4,
        hover: {
            size: 3
        },
    },
    colors: ["rgba(127, 103, 257, 1)", "var(--primary-color)"],
    stroke: {
        curve: 'straight',
        width: 2.5,
        dashArray: 2
    },
    legend: {
        show: true,
        position: "bottom",
        fontFamily: 'Poppins',
        markers: {
            size: 4,
            shape: "circle",
            strokeWidth: 0
        },
    },
    yaxis: {
        axisBorder: {
            show: false,
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
            show: false,
            formatter: function (y: number) {
                return y.toFixed(0) + "";
            }
        }
    },
    xaxis: {
        type: 'month',
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        title: {
            style: {
                color: '#adb5be',
                fontSize: '5px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    },
}



// Analytics Card
export interface AnalyticscardType {
    id: number;
    borderColor: string;
    title: string;
    count: string | number;
    svgBgColor: string;
    svgIcon: ReactNode;
    percent: string;
    percentBgColor: string;
}
export const Analyticscard: AnalyticscardType[] = [
    {
        id: 1,
        borderColor: "primary",
        title: 'Total Users',
        count: "1,872",
        svgBgColor: 'primary',
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#00000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <circle cx="12" cy="8" opacity=".3" r="2.1" />
                <path
                    d="M12 14.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M12 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6.1 5.1H5.9V17c0-.64 3.13-2.1 6.1-2.1s6.1 1.46 6.1 2.1v1.1zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6.1c1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1S9.9 9.16 9.9 8c0-1.16.94-2.1 2.1-2.1z" />
            </svg>
        ),
        percent: '+1.02%',
        percentBgColor: "primary-transparent",
    },
    {
        id: 2,
        borderColor: "secondary",
        title: 'Sessions',
        count: parseInt("3287"),
        svgBgColor: 'secondary',
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#00000">
                <g>
                    <rect fill="none" height="24" width="24" />
                </g>
                <g>
                    <g>
                        <path
                            d="M12,6c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7S15.87,6,12,6z M13,14h-2V8h2V14z"
                            opacity=".8" fill="#fff" />
                        <rect height="2" width="6" x="9" y="1" />
                        <path
                            d="M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9 c0,4.97,4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M12,20c-3.87,0-7-3.13-7-7s3.13-7,7-7s7,3.13,7,7S15.87,20,12,20z" />
                        <rect height="6" width="2" x="11" y="8" />
                    </g>
                </g>
            </svg>
        ),
        percent: '-0.65%',
        percentBgColor: "secondary-transparent",
    },
    {
        id: 3,
        borderColor: "danger",
        title: 'Bounce Rate',
        count: "48.46%",
        svgBgColor: 'danger',
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#00000">
                <g>
                    <rect fill="none" height="24" width="24" />
                </g>
                <g>
                    <g>
                        <path
                            d="M18.49,9.88l0.08-0.85l0.18-1.95l-1.9-0.43l-0.84-0.19l-0.44-0.74l-0.99-1.68L12.79,4.8L12,5.14L11.21,4.8 L9.42,4.03L8.43,5.71L7.99,6.45L7.15,6.64l-1.9,0.43l0.18,1.94l0.08,0.85l-0.56,0.65l-1.29,1.48l1.29,1.47l0.56,0.65l-0.08,0.85 l-0.18,1.96l1.9,0.43l0.84,0.19l0.44,0.74l0.99,1.67l1.78-0.77L12,18.85l0.79,0.34l1.78,0.77l0.99-1.68l0.44-0.74l0.84-0.19 l1.9-0.43l-0.18-1.95l-0.08-0.85l0.56-0.65l1.29-1.47l-1.29-1.47L18.49,9.88z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z"
                            opacity=".8" fill="#fff" />
                        <path
                            d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z" />
                        <polygon
                            points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87" />
                    </g>
                </g>
            </svg>
        ),
        percent: '-0.65%',
        percentBgColor: "danger-transparent",
    },
    {
        id: 4,
        borderColor: "warning",
        title: 'Avg Session Duration',
        count: "4.5 min",
        svgBgColor: 'warning',
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#00000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M15.99 9h3.43C18.6 7 17 5.4 15 4.58v3.43c.37.28.71.62.99.99zM4 12c0 3.35 2.04 6.24 5 7.42v-3.44c-1.23-.93-2-2.4-2-3.99C7 10.4 7.77 8.93 9 8V4.58C6.04 5.76 4 8.65 4 12zm11 3.99v3.43c2-.82 3.6-2.42 4.42-4.42h-3.43c-.28.37-.62.71-.99.99z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M14.82 11h7.13c-.47-4.72-4.23-8.48-8.95-8.95v7.13c.85.31 1.51.97 1.82 1.82zM15 4.58C17 5.4 18.6 7 19.42 9h-3.43c-.28-.37-.62-.71-.99-.99V4.58zM2 12c0 5.19 3.95 9.45 9 9.95v-7.13C9.84 14.4 9 13.3 9 12c0-1.3.84-2.4 2-2.82V2.05c-5.05.5-9 4.76-9 9.95zm7-7.42v3.44c-1.23.92-2 2.39-2 3.98 0 1.59.77 3.06 2 3.99v3.44C6.04 18.24 4 15.35 4 12c0-3.35 2.04-6.24 5-7.42zm4 10.24v7.13c4.72-.47 8.48-4.23 8.95-8.95h-7.13c-.31.85-.97 1.51-1.82 1.82zm2 1.17c.37-.28.71-.61.99-.99h3.43C18.6 17 17 18.6 15 19.42v-3.43z" />
            </svg>
        ),
        percent: '+1.54%',
        percentBgColor: "warning-transparent",
    },
];

// Impressions & Subscribers
export const ImpressionSubscribers = [
    {
        id: 1,
        title: "Impressions",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32px"
                height="32px"
                className="text-primary bg-primary-transparent rounded-1 px-1"
                viewBox="0 0 24 24">
                <g fill="currentColor">
                    <path fillOpacity="0.5" d="M8 13h6v4H8z"></path>
                    <path d="M6 6H4v12h2zm14 1H8v4h12z"></path>
                </g>
            </svg>
        ),
        count: "9,763",
        percent: "0.14%",
        chartOptions: ImpressionChatOptions({ color: 'var(--primary-color)', gradientSettings: ChartGradientSettings.Impression }),
        chartSeries: ImpressionChatSeries({ series: [46, 34, 40, 35, 21, 46, 37, 22, 34, 34, 40, 44, 28, 23, 18, 15, 18, 16, 17, 12, 14] })
    },
    {
        id: 2,
        title: "New Subscribers",
        svgIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32px"
                height="32px"
                className="text-secondary bg-secondary-transparent rounded-1 px-1"
                viewBox="0 0 24 24">
                <g fill="currentColor">
                    <path fillOpacity="0.5" d="M8 13h6v4H8z"></path>
                    <path d="M6 6H4v12h2zm14 1H8v4h12z"></path>
                </g>
            </svg>
        ),
        count: "12,653",
        percent: "0.14%",
        chartOptions: ImpressionChatOptions({ color: 'rgba(127, 103, 257)', gradientSettings: ChartGradientSettings.Subscribers }),
        chartSeries: ImpressionChatSeries({ series: [14, 12, 17, 16, 18, 15, 18, 23, 28, 44, 40, 34, 34, 34, 22, 37, 46, 21, 35, 40, 34, 46] })
    },
]

// Session Devices
interface SessionDevicesTYpe {
    id: number;
    deviceIcon: string;
    deviceIconBg: string;
    count: string;
    deviceType: string;
    dataRange: string;
    percent: string;
    percentColor: string;
    percenIndicateIcon: string;
}
export const SessionDevices: SessionDevicesTYpe[] = [
    {
        id: 1,
        deviceIcon: "ri-smartphone-line fs-16",
        deviceIconBg: "primary-transparent",
        count: "2,224",
        deviceType: "Mobile",
        dataRange: "From Last Month",
        percent: "5.3%",
        percentColor: "primary",
        percenIndicateIcon: "ri-arrow-up-line lh-1 align-center fs-14 fw-normal"
    },
    {
        id: 2,
        deviceIcon: "ri-macbook-line fs-16",
        deviceIconBg: "secondary-transparent",
        count: "1,267",
        deviceType: "Laptop",
        dataRange: "From Last Month",
        percent: "3.1%",
        percentColor: "danger",
        percenIndicateIcon: "ri-arrow-down-line lh-1 align-center fs-14 fw-normal"
    },
    {
        id: 3,
        deviceIcon: "ri-slideshow-3-line fs-16",
        deviceIconBg: "danger-transparent",
        count: "553",
        deviceType: "Desktop",
        dataRange: "From Last Month",
        percent: "2.6%",
        percentColor: "primary",
        percenIndicateIcon: "ri-arrow-up-line lh-1 align-center fs-14 fw-normal"
    },
]

// Income & Revenue
interface IncomeRevenueType {
    id: number;
    borderStyle: string;
    icon: string;
    iconBg: string;
    title: string;
    count: string;
}
export const IncomeRevenue: IncomeRevenueType[] = [
    {
        id: 1,
        borderStyle: "border-end border-inline-end-dashed",
        icon: "ri-money-rupee-circle-line fs-20",
        iconBg: "primary-transparent",
        title: "Income",
        count: "$1,65,542"
    },
    {
        id: 2,
        borderStyle: "",
        icon: "ri-wallet-3-line fs-20",
        iconBg: "secondary-transparent",
        title: "Revenue",
        count: "$6,54,785"
    }
]


// Activity
interface ActivityType {
    id: number;
    icon: string;
    iconBg: string;
    title: string;
    status: string;
    percent: string;
    percentColor: string;
    statusIcon: string;
    count: string;
}
export const Activity: ActivityType[] = [
    {
        id: 1,
        icon: "bx bx-bullseye fs-5",
        iconBg: "primary-transparent",
        title: "Total Visits",
        status: "Increased by",
        percent: "1.75%",
        percentColor: "primary",
        statusIcon: "up",
        count: "23,124",
    },
    {
        id: 2,
        icon: "bx bx-cube-alt fs-5",
        iconBg: "secondary-transparent",
        title: "Total Products",
        status: "Decreased by",
        percent: "0.85%",
        percentColor: "danger",
        statusIcon: "down",
        count: "1.3k",
    },
    {
        id: 3,
        icon: "bx bx-wallet-alt fs-5",
        iconBg: "danger-transparent",
        title: "Total Sales",
        status: "Increased by",
        percent: "3.74%",
        percentColor: "primary",
        statusIcon: "up",
        count: "23.89k",
    },
    {
        id: 4,
        icon: "bx bx-money-withdraw fs-5",
        iconBg: "warning-transparent",
        title: "Total Revenue",
        status: "Increased by",
        percent: "0.23%",
        percentColor: "primary",
        statusIcon: "up",
        count: "$187.38k",
    },
    {
        id: 5,
        icon: "bx bx-download fs-5",
        iconBg: "info-transparent",
        title: "Total Profit",
        status: "Decreased by",
        percent: "4.95%",
        percentColor: "danger",
        statusIcon: "down",
        count: "$84.33k",
    },
]

// Browser Usage
interface BrowserUsageType {
    id: number;
    icon: string;
    iconBg: string;
    browserName: string;
    sessions: string;
    sessionsIcon: string;
    sessionsIconColor: string;
    traffic: string;
    progressBarWidth: string;
    progressBarBgColor: string;
    progressBarValueNow: number | string;
    bounceRate: string;
    bouncePercent: string;
    bouncePercentBgColor: string;
}
export const BrowserUsage: BrowserUsageType[] = [
    {
        id: 1,
        icon: "ri-google-fill fs-18 text-primary",
        iconBg: "primary-transparent",
        browserName: "Google",
        sessions: "23,379",
        sessionsIcon: "up",
        sessionsIconColor: "primary",
        traffic: "65%",
        progressBarWidth: "65%",
        progressBarBgColor: "primary",
        progressBarValueNow: 65,
        bounceRate: "65%",
        bouncePercent: "2.5%",
        bouncePercentBgColor: "primary"
    },
    {
        id: 2,
        icon: "ri-safari-line fs-18 text-secondary",
        iconBg: "secondary-transparent",
        browserName: "Safari",
        sessions: "78,973",
        sessionsIcon: "up",
        sessionsIconColor: "primary",
        traffic: "25%",
        progressBarWidth: "25%",
        progressBarBgColor: "secondary",
        progressBarValueNow: "25",
        bounceRate: "35%",
        bouncePercent: "2.5%",
        bouncePercentBgColor: "danger"
    },
    {
        id: 3,
        icon: "ri-opera-fill fs-18 text-danger",
        iconBg: "danger-transparent",
        browserName: "Opera",
        sessions: "12,457",
        sessionsIcon: "down",
        sessionsIconColor: "danger",
        traffic: "85%",
        progressBarWidth: "85%",
        progressBarBgColor: "danger",
        progressBarValueNow: "85",
        bounceRate: "75%",
        bouncePercent: "2.5%",
        bouncePercentBgColor: "primary"
    },
    {
        id: 4,
        icon: "ri-edge-fill fs-18 text-info",
        iconBg: "info-transparent",
        browserName: "Edge",
        sessions: "8,570",
        sessionsIcon: "up",
        sessionsIconColor: "primary",
        traffic: "35%",
        progressBarWidth: "35%",
        progressBarBgColor: "info",
        progressBarValueNow: "35",
        bounceRate: "25%",
        bouncePercent: "2.5%",
        bouncePercentBgColor: "danger"
    },
    {
        id: 5,
        icon: "ri-firefox-fill fs-18 text-warning",
        iconBg: "warning-transparent",
        browserName: "Firefox",
        sessions: "6,135",
        sessionsIcon: "down",
        sessionsIconColor: "danger",
        traffic: "55%",
        progressBarWidth: "55%",
        progressBarBgColor: "warning",
        progressBarValueNow: "55",
        bounceRate: "25%",
        bouncePercent: "2.5%",
        bouncePercentBgColor: "primary"
    },
]

// Impression Overview ProgressStack
export interface ProgressStackItemType {
    id: number;
    bgColor: string;
    width: string;
    ariaValueNow: number | string;
    marginEnd: string;
}
export const ImpressionOverviewProgressStack: ProgressStackItemType[] = [
    {
        id: 1,
        bgColor: "primary",
        width: "30%",
        ariaValueNow: "16",
        marginEnd: "1",
    },
    {
        id: 2,
        bgColor: "secondary",
        width: "24%",
        ariaValueNow: "24",
        marginEnd: "1",
    },
    {
        id: 3,
        bgColor: "danger",
        width: "27%",
        ariaValueNow: "27",
        marginEnd: "1",
    },
    {
        id: 4,
        bgColor: "warning",
        width: "16%",
        ariaValueNow: "15",
        marginEnd: "0",
    },
]

// Impression Overview
interface ImpresionOverviewType {
    id: number;
    svg: ReactNode;
    svgBg: string;
    title: string;
    status: string;
    count: string;
    percent: string;
    percentBg: string;
}
export const ImpresionOverview: ImpresionOverviewType[] = [
    {
        id: 1,
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28px"
                height="28px" viewBox="0 0 24 24">
                <rect width="16" height="12" x="4" y="6" fill="currentColor"
                    fillOpacity="0.3" rx="2"></rect>
                <path fill="currentColor"
                    d="M4 16V9.243a.15.15 0 0 1 .217-.134l6.441 3.22a3 3 0 0 0 2.684 0l6.44-3.22a.15.15 0 0 1 .218.134V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2">
                </path>
            </svg>
        ),
        svgBg: "primary-transparent",
        title: "Email",
        status: "Increases Today",
        count: "$15,764",
        percent: "+1.06%",
        percentBg: "secondary-transparent"
    },
    {
        id: 2,
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28px"
                height="28px" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="11" cy="11" r="6" fill="currentColor"
                        fillOpacity="0.3"></circle>
                    <path strokeLinecap="round"
                        d="M11 8a3 3 0 0 0-3 3m12 9l-3-3"></path>
                </g>
            </svg>
        ),
        svgBg: "secondary-transparent",
        title: "Search",
        status: "Decreases Today",
        count: "$22,864",
        percent: "-0.15%",
        percentBg: "danger-transparent"
    },
    {
        id: 3,
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28px"
                height="28px" viewBox="0 0 24 24">
                <path fill="currentColor" fillOpacity="0.3"
                    d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z">
                </path>
                <circle cx="17" cy="7" r="1" fill="currentColor"></circle>
                <circle cx="12" cy="12" r="3" fill="currentColor"></circle>
            </svg>
        ),
        svgBg: "danger-transparent",
        title: "Social",
        status: "Increases Today",
        count: "$12,543",
        percent: "+2.8%",
        percentBg: "secondary-transparent"
    },
    {
        id: 4,
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28px"
                height="28px" viewBox="0 0 24 24">
                <g fill="none">
                    <path fill="currentColor" fillOpacity="0.3"
                        fillRule="evenodd"
                        d="M2.455 11.116C3.531 9.234 6.555 5 12 5c5.444 0 8.469 4.234 9.544 6.116c.221.386.331.58.32.868c-.013.288-.143.476-.402.852C20.182 14.694 16.706 19 12 19s-8.182-4.306-9.462-6.164c-.26-.376-.39-.564-.401-.852c-.013-.288.098-.482.318-.868M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
                        clipRule="evenodd"></path>
                    <path stroke="currentColor" strokeWidth="1.2"
                        d="M12 5c-5.444 0-8.469 4.234-9.544 6.116c-.221.386-.331.58-.32.868c.013.288.143.476.402.852C3.818 14.694 7.294 19 12 19s8.182-4.306 9.462-6.164c.26-.376.39-.564.401-.852s-.098-.482-.319-.868C20.47 9.234 17.444 5 12 5Z">
                    </path>
                    <circle cx="12" cy="12" r="3" stroke="currentColor"
                        strokeWidth="1.2"></circle>
                </g>
            </svg>
        ),
        svgBg: "warning-transparent",
        title: "Direct",
        status: "Decreases Today",
        count: "$32,864",
        percent: "-0.65%",
        percentBg: "danger-transparent"
    },
]



// Visitors By Channel
interface VisitorsByChannelType {
    id: number;
    icon: string;
    icongBg: string;
    title: string;
    sessions: number;
    sessionsStyles: string;
    bounceRate: string;
    bounceRateStyles: string;
    avgSessionDuration: string;
    avgSessionDurationStyles: string;
    goalCompleted: number;
    goalCompletedBg: string;
    pageVisits: string;
    changePercent: string;
    changePercentColor: string;
    referralSource: string;
}
export const VisitorsByChannel: VisitorsByChannelType[] = [
    {
        id: 1,
        icon: "ri-search-2-line fs-15 fw-semibold text-primary",
        icongBg: "primary-transparent",
        title: "Organic Search",
        sessions: 850,
        sessionsStyles: "",
        bounceRate: "28.45%",
        bounceRateStyles: "",
        avgSessionDuration: "0 hrs : 1 mins : 15 secs",
        avgSessionDurationStyles: "",
        goalCompleted: 300,
        goalCompletedBg: "primary",
        pageVisits: "3.2",
        changePercent: "+7.1%",
        changePercentColor: "primary",
        referralSource: "Google, Facebook"
    },
    {
        id: 2,
        icon: "ri-share-line fs-15 fw-semibold text-secondary",
        icongBg: "secondary-transparent",
        title: "Direct Traffic",
        sessions: 900,
        sessionsStyles: "text-info fw-medium",
        bounceRate: "25.50%",
        bounceRateStyles: "",
        avgSessionDuration: "0 hrs : 2 mins : 30 secs",
        avgSessionDurationStyles: "",
        goalCompleted: 150,
        goalCompletedBg: "primary",
        pageVisits: "4.0",
        changePercent: "+3.8%",
        changePercentColor: "primary",
        referralSource: "Twitter, LinkedIn"
    },
    {
        id: 3,
        icon: "ri-facebook-line fs-15 fw-semibold text-info",
        icongBg: "info-transparent",
        title: "Social Media",
        sessions: 500,
        sessionsStyles: "",
        bounceRate: "40.00%",
        bounceRateStyles: "fw-semibold text-pink",
        avgSessionDuration: "0 hrs : 1 mins : 10 secs",
        avgSessionDurationStyles: "",
        goalCompleted: 80,
        goalCompletedBg: "info",
        pageVisits: "2.5",
        changePercent: "-2.0%",
        changePercentColor: "danger",
        referralSource: "Bing, YouTube"
    },
    {
        id: 4,
        icon: "ri-mail-line fs-15 fw-semibold text-warning",
        icongBg: "warning-transparent",
        title: "Email Campaign",
        sessions: 350,
        sessionsStyles: "",
        bounceRate: "20.00%",
        bounceRateStyles: "",
        avgSessionDuration: "0 hrs : 3 mins : 5 secs",
        avgSessionDurationStyles: "text-primary fw-medium",
        goalCompleted: 60,
        goalCompletedBg: "warning",
        pageVisits: "4.8",
        changePercent: "+4.5%",
        changePercentColor: "primary",
        referralSource: "Instagram, Reddit"
    },
    {
        id: 5,
        icon: "ri-error-warning-line fs-15 fw-semibold text-danger",
        icongBg: "danger-transparent",
        title: "Referral",
        sessions: 450,
        sessionsStyles: "",
        bounceRate: "35.00%",
        bounceRateStyles: "text-primary fw-semibold",
        avgSessionDuration: "0 hrs : 2 mins : 15 secs",
        avgSessionDurationStyles: "fw-medium",
        goalCompleted: 50,
        goalCompletedBg: "danger",
        pageVisits: "3.1",
        changePercent: "-1.5%",
        changePercentColor: "danger",
        referralSource: "Yahoo, Pinterest"
    },
    {
        id: 6,
        icon: "ri-global-line fs-15 fw-semibold text-secondary",
        icongBg: "secondary-transparent",
        title: "Paid Search",
        sessions: 300,
        sessionsStyles: "",
        bounceRate: "20.50%",
        bounceRateStyles: "",
        avgSessionDuration: "0 hrs : 2 mins : 50 secs",
        avgSessionDurationStyles: "fw-medium text-info",
        goalCompleted: 75,
        goalCompletedBg: "secondary",
        pageVisits: "4.2",
        changePercent: "+6.0%",
        changePercentColor: "primary",
        referralSource: "Instagram, Reddit"
    },
]