import SpkStocksSwiper from "../../@spk-reusable-components/reusable-dashboards/spk-stocksswiper";
import apple from '../../../assets/images/media/apps/apple.png';
import microsoft from '../../../assets/images/media/apps/microsoft.png';
import nvidia from '../../../assets/images/media/apps/nvidia.png';
import amazon from '../../../assets/images/media/apps/amazon.png';
import type { ReactNode } from "react";
import type { ApexOptions } from "apexcharts";


// Stock Card
export const StockCardSeries = [{
    name: 'Value',
    data: [15, 42, 22, 42, 35, 32, 56, 35, 45, 25]
}]
interface StockCardOptionsType {
    color: string
}
export const StockCardOptions = ({ color }: StockCardOptionsType) => ({
    chart: {
        type: 'line',
        height: 70,
        width: 120,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
        }
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    },
    stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'butt',
        colors: undefined,
        width: 1.5,
        dashArray: 2,
    },
    fill: {
        gradient: {
            enabled: false
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
        show: false,
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        }
    },
    colors: [color],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 90
            },
        }
    }]
})

// Stock Price Overview
interface OverviewType {
    startTimestamp: number;
    numberOfDays: number;
    range: { max: number, min: number }
}
function generateDayWiseTimeSeries({ startTimestamp, numberOfDays, range }: OverviewType) {
    let series = [];
    let currentTimestamp = startTimestamp;

    for (let i = 0; i < numberOfDays; i++) {
        let value = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;

        series.push([currentTimestamp, value]);
        currentTimestamp += 86400000;
    }

    return series;
}

const data = generateDayWiseTimeSeries({
    startTimestamp: new Date("22 Apr 2024").getTime(),
    numberOfDays: 115,
    range: { min: 30, max: 90 }
});

export const StockPriceOverviewSeries = [
    {
        name: 'Investment',
        data: data
    }
];

export const StockPriceOverviewOptions = {
    chart: {
        id: "chart2",
        type: "area",
        height: 265,
        foreColor: "#ccc",
        toolbar: {
            autoSelected: "pan",
            show: false
        }
    },
    colors: ["var(--primary-color)"],
    stroke: {
        width: 2.5,
        curve: "straight",
        dashArray: 4
    },
    grid: {
        borderColor: "#555",
        clipMarkers: false,
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        gradient: {
            enabled: true,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            colorStops: [
                {
                    offset: 0,
                    color: "var(--primary05)",
                    opacity: 0.05
                },
                {
                    offset: 75,
                    color: "var(--primary03)",
                    opacity: 1
                },
                {
                    offset: 100,
                    color: "var(--primary05)",
                    opacity: 1
                }
            ]
        }
    },
    markers: {
        size: 3,
        strokeWidth: 1.5,
        dashArray: 4
    },
    tooltip: {
        theme: "dark"
    },
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        min: 0,
        tickAmount: 3,
        max: 150
    }
};


export const StockPriceOverviewSeries1 = [
    {
        name: 'Market Cap',
        data: data
    }
]
export const StockPriceOverviewOptions1 = {
    chart: {
        id: "chart1",
        height: 130,
        type: "bar",
        foreColor: "#ccc",
        brush: {
            target: "chart2",
            enabled: true
        },
        selection: {
            enabled: true,
            fill: {
                color: "#fff",
                opacity: 0.4
            },
            xaxis: {
                min: new Date("05 Jun 2024 10:00:00").getTime(),
                max: new Date("26 Jul 2024 10:00:00").getTime()
            }
        }
    },
    colors: ["rgba(var(--secondary-rgb), 1)"],
    grid: {
        show: false,
        borderColor: "#444"
    },
    markers: {
        size: 0
    },
    xaxis: {
        type: "datetime",
        tooltip: {
            enabled: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: "70%",
            borderRadius: 3
        }
    },
    yaxis: {
        tickAmount: 2
    }
}

// Growth Analysis
export const GrowthAnalysisSeries = [{
    type: 'bar',
    name: 'Earnings',
    data: [55, -30, 35, -40, 32, 45, -30
    ]
}, {
    type: 'line',
    name: 'Profit',
    data: [-20, 20, -5, 25, 45, -20, 40
    ]
}]
export const GrowthAnalysisOptions = {
    chart: {
        height: 278,
        toolbar: {
            show: false
        }
    },
    stroke: {
        curve: 'smooth',
        width: [0, 2],
        lineCap: 'round',
        dashArray: [0, 4],
    },
    grid: {
        borderColor: '#f5f4f4',
        strokeDashArray: 3
    },
    plotOptions: {
        bar: {
            colors: {
                ranges: [{
                    from: -100,
                    to: -46,
                    color: 'rgba(var(--secondary-rgb), 0.9)'
                }, {
                    from: -45,
                    to: 0,
                    color: 'rgba(var(--secondary-rgb), 0.9)'
                }]
            },
            columnWidth: '30%',
            borderRadius: 2,
            borderRadiusWhenStacked: 'last',
        }
    },
    dataLabels: {
        enabled: false,
    },
    yaxis: {
        tickAmount: 5,
        title: {
            text: 'Earnings',
        },
        labels: {
            formatter: function (y: number) {
                return y.toFixed(0) + "%";
            }
        }
    },
    xaxis: {
        type: 'week',
        categories: ['sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    legend: {
        markers: {
            shape: "circle"
        }
    },
    colors: ["rgba(var(--primary-rgb), 1)", "rgba(var(--danger-rgb), 1)"],
}

// stockCards
export interface StockCardsType {
    id: number;
    name: string;
    symbol?: string;
    value: string;
    change: {
        percent: string;
        percentColor: string;
        direction: string;
    };
    lastMonthChange: {
        percent: string;
        percentColor: string;
        direction: string;
    };
    avatarBg: string;
    avatarColor: string;
    svg: ReactNode;
    chartOptions: ApexOptions;
}
export const StockCards: StockCardsType[] = [
    {
        id: 1,
        name: "Amazon",
        symbol: ".com",
        value: "$15,248",
        change: {
            percent: "0.14%",
            percentColor: "primary",
            direction: "up"
        },
        lastMonthChange: {
            percent: "1.8%",
            percentColor: "primary",
            direction: "up"
        },
        avatarBg: "primary-transparent",
        avatarColor: "primary",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M3 15h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H15V6H3v9z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M17 8V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4h-3zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm9-3H8.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-6V9.5h2.5l1.96 2.5H17z" />
            </svg>
        ),
        chartOptions: StockCardOptions({ color: 'var(--primary08)' })
    },
    {
        id: 2,
        name: "Bitcoin",
        symbol: "BTC",
        value: "$22,753",
        change: {
            percent: "0.23%",
            percentColor: "danger",
            direction: "down"
        },
        lastMonthChange: {
            percent: "1.45%",
            percentColor: "primary",
            direction: "up"
        },
        avatarBg: "secondary-transparent",
        avatarColor: "secondary",
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
                            d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8s8-3.59,8-8C20,7.59,16.41,4,12,4z M12.88,17.76V19h-1.75v-1.29c-0.74-0.18-2.39-0.77-3.02-2.96l1.65-0.67c0.06,0.22,0.58,2.09,2.4,2.09c0.93,0,1.98-0.48,1.98-1.61 c0-0.96-0.7-1.46-2.28-2.03c-1.1-0.39-3.35-1.03-3.35-3.31c0-0.1,0.01-2.4,2.62-2.96V5h1.75v1.24c1.84,0.32,2.51,1.79,2.66,2.23 l-1.58,0.67c-0.11-0.35-0.59-1.34-1.9-1.34c-0.7,0-1.81,0.37-1.81,1.39c0,0.95,0.86,1.31,2.64,1.9c2.4,0.83,3.01,2.05,3.01,3.45 C15.9,17.17,13.4,17.67,12.88,17.76z"
                            enableBackground="new" opacity=".8"
                            fill="#fff" />
                        <path
                            d="M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67 c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96c0,2.27,2.25,2.91,3.35,3.31 c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75c0.63,2.19,2.28,2.78,3.02,2.96 V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z" />
                        <path
                            d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z" />
                    </g>
                </g>
            </svg>
        ),
        chartOptions: StockCardOptions({ color: 'rgba(127, 103, 257,0.8)' })
    },
    {
        id: 3,
        name: "Apple",
        symbol: "AAPL",
        value: "$17,756",
        change: {
            percent: "1.25%",
            percentColor: "primary",
            direction: "up"
        },
        lastMonthChange: {
            percent: "1.23%",
            percentColor: "danger",
            direction: "down"
        },
        avatarBg: "danger-transparent",
        avatarColor: "danger",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32"
                height="32" fill="#000000" viewBox="0 0 256 256">
                <path
                    d="M216,73.52Zm0,99.26c-16.79-11.53-24-30.87-24-52.78,0-18.3,11.68-34.81,24-46.48C204.53,62.66,185,56,168,56a63.72,63.72,0,0,0-40,14h0A63.71,63.71,0,0,0,88.88,56C52,55.5,23.06,86.3,24,123.19a119.62,119.62,0,0,0,37.65,84.12A32,32,0,0,0,83.6,216h87.7a31.75,31.75,0,0,0,23.26-10c15.85-17,21.44-33.2,21.44-33.2Z"
                    opacity="0.8" fill="#fff"></path>
                <path
                    d="M223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.23,72.23,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127,127,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Zm-34.63,30.94a23.76,23.76,0,0,1-17.4,7.47H83.59a23.82,23.82,0,0,1-16.44-6.51A111.14,111.14,0,0,1,32,123,58.5,58.5,0,0,1,48.65,80.47,54.81,54.81,0,0,1,88,64h.78A55.45,55.45,0,0,1,123,76.28a8,8,0,0,0,10,0A55.39,55.39,0,0,1,168,64a70.64,70.64,0,0,1,36,10.35c-13,14.52-20,30.47-20,45.65,0,23.77,7.64,42.73,22.18,55.3A105.52,105.52,0,0,1,188.67,200.53ZM128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4Z">
                </path>
            </svg>
        ),
        chartOptions: StockCardOptions({ color: 'rgba(253, 73, 99,0.8)' })
    },
    {
        id: 4,
        name: "Samsung",
        symbol: "SSNLF",
        value: "$13,763",
        change: {
            percent: "3.12%",
            percentColor: "danger",
            direction: "up"
        },
        lastMonthChange: {
            percent: "0.86%",
            percentColor: "primary",
            direction: "up"
        },
        avatarBg: "warning-transparent",
        avatarColor: "warning",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32"
                height="32" fill="#000000" viewBox="0 0 256 256">
                <path
                    d="M213.09,172.48a96,96,0,0,1-80.41,51.41l3.17-16.44a8,8,0,0,0-2-6.95l-19.74-20.33a8,8,0,0,1-1.44-8.69l13.7-30.74a8,8,0,0,1,8.38-4.67l22.82,3.08a8.11,8.11,0,0,1,3.12,1.11ZM116.71,95,129,88.24a7.46,7.46,0,0,0,1.5-1.07l26.91-24.33A8,8,0,0,0,159,53l-10.5-18.81A96.62,96.62,0,0,0,128,32,95.61,95.61,0,0,0,67.78,53.23L56,81.08A8,8,0,0,0,55.88,87l11.5,30.67a8,8,0,0,0,5.81,5l2.69.58L89.2,100a8,8,0,0,1,6.94-4h16.71A7.9,7.9,0,0,0,116.71,95Z"
                    opacity="0.8" fill="#fff"></path>
                <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z">
                </path>
            </svg>
        ),
        chartOptions: StockCardOptions({ color: 'rgba(255, 169, 9,0.8)' })
    },
    {
        id: 5,
        name: "NVIDIA",
        symbol: "NVDA",
        value: "$16,864",
        change: {
            percent: "0.56%",
            percentColor: "primary",
            direction: "up"
        },
        lastMonthChange: {
            percent: "1.76%",
            percentColor: "danger",
            direction: "down"
        },
        avatarBg: "info-transparent",
        avatarColor: "info",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M19.21 12.04l-1.53-.11-.3-1.5C16.88 7.86 14.62 6 12 6 9.94 6 8.08 7.14 7.12 8.96l-.5.95-1.07.11C3.53 10.24 2 11.95 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3 0-1.55-1.22-2.86-2.79-2.96zM12 17l-4-4h2.55v-3h2.91v3H16l-4 4z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4 4-4h-2.55z" />
            </svg>
        ),
        chartOptions: StockCardOptions({ color: 'rgba(15, 188, 249,0.8)' })
    }
];

export const StocksSwiperCard = StockCards.map((idx) => (
    <div key={idx.id}>
        <SpkStocksSwiper card={idx} />
    </div>
))

// My Stocks
interface MyStocksType {
    id: number;
    icon: string;
    avatarBg: string;
    company: string;
    exchange: string;
    quantity: number;
    price: number;
    change: string;
    changeColor: string;
    totalValue: string;
    borderClass?: string
}
export const MyStocks: MyStocksType[] = [
    { id: 1, icon: 'bi-apple', avatarBg: "primary", company: "Apple Inc.(AAPL)", exchange: "NASDAQ", quantity: 500, price: 150.00, change: "+1.75%", changeColor: "primary", totalValue: "$75,000.00" },
    { id: 2, icon: 'bi-microsoft', avatarBg: "secondary", company: "Microsoft Corp.(MSFT)", exchange: "NASDAQ", quantity: 300, price: 250.00, change: "-0.85%", changeColor: "danger", totalValue: "$75,000.00" },
    { id: 3, icon: 'bi-google', avatarBg: "danger", company: "Alphabet Inc.(GOOGL)", exchange: "NASDAQ", quantity: 200, price: 130.00, change: "+2.15%", changeColor: "primary", totalValue: "$26,000.00" },
    { id: 4, icon: 'bi-amazon', avatarBg: "warning", company: "Amazon.com Inc.(AMZN)", exchange: "NASDAQ", quantity: 150, price: 200.00, change: "-1.35%", changeColor: "danger", totalValue: "$30,000.00" },
    { id: 5, icon: 'bi-github', avatarBg: "info", company: "Gituhb, Demo Inc.(GTHB)", exchange: "NASDAQ", quantity: 100, price: 700.00, change: "+0.65%", changeColor: "primary", totalValue: "$70,000.00" },
    { id: 6, icon: 'bi-github', avatarBg: "orange", company: "Meta Platforms (META)", exchange: "META", quantity: 145, price: 560.00, change: "+0.34%", changeColor: "primary", totalValue: "$14,000.00", borderClass: 'border-bottom-0' },
];

// Trending Stocks
interface TrendingStocksType {
    id: number;
    name: string;
    logo: string;
    value: string;
    percentage?: string;
    width?: string;
    profit: string;
}
export const TrendingStocks: TrendingStocksType[] = [
    {
        id: 1,
        name: "Apple",
        logo: apple,
        value: "$12,289.44",
        percentage: "0.14%",
        profit: "+$1,780.80",
    },
    {
        id: 2,
        name: "Microsoft",
        logo: microsoft,
        value: "$12,289.44",
        percentage: "0.14%",
        profit: "+$1,780.80",
    },
    {
        id: 3,
        name: "Nvidia",
        logo: nvidia,
        value: "$12,289.44",
        percentage: "0.14%",
        profit: "+$1,780.80",
    },
    {
        id: 4,
        name: "Amazon",
        logo: amazon,
        value: "$12,289.44",
        percentage: "0.14%",
        profit: "+$1,780.80",
    }
];

// My Watchlist
interface MyWatchlistType {
    id: number;
    name: string;
    avatarBg: string;
    avatarBorder: string;
    icon: string;
    currentPrice: string;
    change: string;
    changeColor: string;
    changeType: string;
}
export const MyWatchlist: MyWatchlistType[] = [
    {
        id: 1,
        name: "Tesla (TSLA)",
        avatarBg: "primary",
        avatarBorder: "primary",
        icon: "bi-battery-charging",
        currentPrice: "$250.15",
        change: "+1.25%",
        changeColor: "primary",
        changeType: "positive"
    },
    {
        id: 2,
        name: "Apple (AAPL)",
        avatarBg: "secondary",
        avatarBorder: "secondary",
        icon: "bi-apple",
        currentPrice: "$175.00",
        change: "+0.75%",
        changeColor: "primary",
        changeType: "positive"
    },
    {
        id: 3,
        name: "NVIDIA (NVDA)",
        avatarBg: "danger",
        avatarBorder: "danger",
        icon: "bi-broadcast",
        currentPrice: "$500.00",
        change: "+2.10%",
        changeColor: "primary",
        changeType: "positive"
    },
    {
        id: 4,
        name: "Samsung (SSNLF)",
        avatarBg: "warning",
        avatarBorder: "warning",
        icon: "bi-phone",
        currentPrice: "$1,400.00",
        change: "-0.50%",
        changeColor: "danger",
        changeType: "negative"
    },
    {
        id: 5,
        name: "AliExpress (BABA)",
        avatarBg: "info",
        avatarBorder: "info",
        icon: "bi-shop",
        currentPrice: "$100.25",
        change: "-0.30%",
        changeColor: "danger",
        changeType: "negative"
    }
];

// Top Stock Performers
interface TopStockPerformersType {
    id: number;
    name: string;
    avatarBg: string;
    avatarBorder: string;
    icon: string;
    volume: string;
    change: string;
    price: string;
    percentChange: string;
    percentChangeColor: string;
    changeType: 'positive' | 'negative';
    borderClass?: string
}

export const TopStockPerformers: TopStockPerformersType[] = [
    {
        id: 1,
        name: "Apple Inc. (AAPL)",
        avatarBg: "primary-transparent",
        avatarBorder: "primary",
        icon: "bi-apple",
        volume: "1,000,000",
        change: "$5.00",
        price: "$150.00",
        percentChange: "+3.45%",
        percentChangeColor: "primary",
        changeType: "positive"
    },
    {
        id: 2,
        name: "Alphabet Inc. (GOOGL)",
        avatarBg: "secondary-transparent",
        avatarBorder: "secondary",
        icon: "bi-google",
        volume: "850,000",
        change: "$4.25",
        price: "$130.00",
        percentChange: "-2.65%",
        percentChangeColor: "danger",
        changeType: "negative"
    },
    {
        id: 3,
        name: "Microsoft Corp. (MSFT)",
        avatarBg: "danger-transparent",
        avatarBorder: "danger",
        icon: "bi-microsoft",
        volume: "1,200,000",
        change: "$6.75",
        price: "$160.00",
        percentChange: "+4.20%",
        percentChangeColor: "primary",
        changeType: "positive"
    },
    {
        id: 4,
        name: "Amazon.com Inc. (AMZN)",
        avatarBg: "warning-transparent",
        avatarBorder: "warning",
        icon: "bi-amazon",
        volume: "950,000",
        change: "$3.90",
        price: "$125.00",
        percentChange: "-1.80%",
        percentChangeColor: "danger",
        changeType: "negative"
    },
    {
        id: 5,
        name: "Meta Platforms (META)",
        avatarBg: "info-transparent",
        avatarBorder: "info",
        icon: "bi-facebook",
        volume: "1,100,000",
        change: "$4.10",
        price: "$140.00",
        percentChange: "-2.25%",
        percentChangeColor: "danger",
        changeType: "negative",
        borderClass: 'border-bottom-0'
    }
];

// Transaction History
interface TransactionHistoryType {
    id: number;
    avatarBg: string;
    avatarBorder: string;
    svgColor: string;
    name: string;
    date: string;
    action: string;
    actionBg: string;
    price: string;
    value: string;
    change: string;
    changeColor: string;
    changeType: string;
    svg: React.ReactNode;
    borderClass?: string
}
export const TransactionHistory: TransactionHistoryType[] = [
    {
        id: 1,
        avatarBg: "primary-transparent",
        avatarBorder: "primary",
        svgColor: "primary",
        name: "Tesla (TSLA)",
        date: "12 Apr, 2024",
        action: "Buy",
        actionBg: "primary-transparent",
        price: "$150.00",
        value: "$7,500.00",
        change: "+1.25%",
        changeColor: "primary",
        changeType: "positive",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32"
                height="32" fill="#000000" viewBox="0 0 256 256">
                <path
                    d="M208,40V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V40Z"
                    opacity="0.2"></path>
                <path
                    d="M168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16ZM216,40V200a32,32,0,0,1-32,32H72a32,32,0,0,1-32-32V40a8,8,0,0,1,8-8H72V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,40Zm-16,8H184v8a8,8,0,0,1-16,0V48H136v8a8,8,0,0,1-16,0V48H88v8a8,8,0,0,1-16,0V48H56V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z">
                </path>
            </svg>
        )
    },
    {
        id: 2,
        avatarBg: "secondary-transparent",
        avatarBorder: "secondary",
        svgColor: "secondary",
        name: "Apple (AAPL)",
        date: "15 Apr, 2024",
        action: "Sell",
        actionBg: "secondary-transparent",
        price: "$200.00",
        value: "$10,000.00",
        change: "-0.75%",
        changeColor: "danger",
        changeType: "negative",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32"
                height="32" fill="#000000" viewBox="0 0 256 256">
                <path
                    d="M216,73.52Zm0,99.26c-16.79-11.53-24-30.87-24-52.78,0-18.3,11.68-34.81,24-46.48C204.53,62.66,185,56,168,56a63.72,63.72,0,0,0-40,14h0A63.71,63.71,0,0,0,88.88,56C52,55.5,23.06,86.3,24,123.19a119.62,119.62,0,0,0,37.65,84.12A32,32,0,0,0,83.6,216h87.7a31.75,31.75,0,0,0,23.26-10c15.85-17,21.44-33.2,21.44-33.2Z"
                    opacity="0.2"></path>
                <path
                    d="M223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.23,72.23,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127,127,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Zm-34.63,30.94a23.76,23.76,0,0,1-17.4,7.47H83.59a23.82,23.82,0,0,1-16.44-6.51A111.14,111.14,0,0,1,32,123,58.5,58.5,0,0,1,48.65,80.47,54.81,54.81,0,0,1,88,64h.78A55.45,55.45,0,0,1,123,76.28a8,8,0,0,0,10,0A55.39,55.39,0,0,1,168,64a70.64,70.64,0,0,1,36,10.35c-13,14.52-20,30.47-20,45.65,0,23.77,7.64,42.73,22.18,55.3A105.52,105.52,0,0,1,188.67,200.53ZM128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4Z">
                </path>
            </svg>
        )
    },
    {
        id: 3,
        avatarBg: "danger-transparent",
        avatarBorder: "danger",
        svgColor: "danger",
        name: "Microsoft (MSFT)",
        date: "16 Apr, 2024",
        action: "Buy",
        actionBg: "primary-transparent",
        price: "$250.00",
        value: "$12,500.00",
        change: "+2.00%",
        changeColor: "primary",
        changeType: "positive",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32"
                height="32" fill="#000000" viewBox="0 0 256 256">
                <path
                    d="M128,144h80v72l-80-14.55ZM32,184l64,11.64V144H32ZM128,54.55V112h80V40ZM32,112H96V60.36L32,72Z"
                    opacity="0.2"></path>
                <path
                    d="M208,136H128a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,208,224a8,8,0,0,0,8-8V144A8,8,0,0,0,208,136Zm-8,70.41-64-11.63V152h64ZM96,136H32a8,8,0,0,0-8,8v40a8,8,0,0,0,6.57,7.87l64,11.64a8.54,8.54,0,0,0,1.43.13,8,8,0,0,0,8-8V144A8,8,0,0,0,96,136Zm-8,50.05-48-8.73V152H88ZM213.13,33.86a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,120,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,213.13,33.86ZM200,104H136V61.22l64-11.63ZM101.13,54.22a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,24,72v40a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V60.36A8,8,0,0,0,101.13,54.22ZM88,104H40V78.68L88,70Z">
                </path>
            </svg>
        )
    },
    {
        id: 4,
        avatarBg: "warning-transparent",
        avatarBorder: "warning",
        svgColor: "warning",
        name: "Amazon (AMZN)",
        date: "17 Apr, 2024",
        action: "Buy",
        actionBg: "primary-transparent",
        price: "$180.00",
        value: "$9,000.00",
        change: "+1.50%",
        changeColor: "primary",
        changeType: "positive",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32"
                height="32" fill="#000000" viewBox="0 0 256 256">
                <path
                    d="M16,72H120V184H104a24,24,0,0,0-48,0,24,24,0,0,0-48,0V80A8,8,0,0,1,16,72Zm200,32V96a48,48,0,0,0-48-48h-8a8,8,0,0,0-8,8V184h48a24,24,0,0,1,48,0V136A32,32,0,0,0,216,104Z"
                    opacity="0.2"></path>
                <path
                    d="M224,96.8V96a56.06,56.06,0,0,0-56-56h-8a16,16,0,0,0-16,16V176H128V72a8,8,0,0,0-8-8H16A16,16,0,0,0,0,80V184a32,32,0,0,0,56,21.13A32,32,0,0,0,111,192h82a32,32,0,0,0,63-8V136A40.07,40.07,0,0,0,224,96.8ZM160,56h8a40,40,0,0,1,40,40v8a8,8,0,0,0,8,8,24,24,0,0,1,24,24v20.31A31.71,31.71,0,0,0,224,152a32.06,32.06,0,0,0-31,24H160ZM112,80v96h-1a32,32,0,0,0-55-13.13,31.9,31.9,0,0,0-40-6.56V80ZM32,200a16,16,0,1,1,16-16A16,16,0,0,1,32,200Zm48,0a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm144,0a16,16,0,1,1,16-16A16,16,0,0,1,224,200Z">
                </path>
            </svg>
        )
    },
    {
        id: 5,
        avatarBg: "info-transparent",
        avatarBorder: "info",
        svgColor: "info",
        name: "Alphabet (GOOGL)",
        date: "18 Apr, 2024",
        action: "Sell",
        actionBg: "secondary-transparent",
        price: "$300.00",
        value: "$15,000.00",
        change: "-1.20%",
        changeColor: "danger",
        changeType: "negative",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32"
                height="32" fill="#000000" viewBox="0 0 256 256">
                <path
                    d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z"
                    opacity="0.2">
                </path>
                <path
                    d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z">
                </path>
            </svg>
        ),
        borderClass: 'border-bottom-0'
    }
];

// Total Portfolios
export const TotalPortfolios = {
    progressBar: [
        { progressBg: "primary", width: "35%", ariaValuNow: 35 },
        { progressBg: "secondary", width: "24%", ariaValuNow: 24 },
        { progressBg: "danger", width: "27%", ariaValuNow: 27, },
        { progressBg: "light", width: "18%", ariaValuNow: 18 }
    ],
    items: [
        {
            id: 1,
            name: "Bitcoin",
            cardColor: "primary",
            value: "$5,56,356",
            change: "+12.84",
            changeColor: "primary",
            changeType: "positive"
        },
        {
            id: 2,
            name: "Microsoft (MSFT)",
            cardColor: "secondary",
            value: "$2,75,943",
            change: "-7.38",
            changeColor: "danger",
            changeType: "negative"
        },
        {
            id: 3,
            name: "Amazon (AMZN)",
            cardColor: "primary",
            value: "$3,76,746",
            change: "+3.73",
            changeColor: "primary",
            changeType: "positive"
        }
    ]
};


// Stock Price Overview
interface ChangeDetails {
    percent: string;
    percentColor: string;
    direction: string;
}

interface StockPriceOverviewtype {
    id: number;
    icon: string;
    iconBg: string;
    value: string;
    label: string;
    change: ChangeDetails;
    lastMonthNote: string;
}
export const StockPriceOverview: StockPriceOverviewtype[] = [
    {
        id: 1,
        icon: "ti ti-pig-money",
        iconBg: "primary",
        value: "$22,246.25",
        label: "Total Investment",
        change: {
            percent: "1.8%",
            percentColor: "primary",
            direction: "up"
        },
        lastMonthNote: "From Last Month"
    },
    {
        id: 2,
        icon: "ti ti-chart-infographic",
        iconBg: "secondary",
        value: "$110,784.06",
        label: "Market Cap",
        change: {
            percent: "0.28%",
            percentColor: "danger",
            direction: "down"
        },
        lastMonthNote: "From Last Month"
    }
];


