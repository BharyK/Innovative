import face1 from '../../../assets/images/faces/1.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import face16 from '../../../assets/images/faces/16.jpg';
import Ethereum from '../../../assets/images/crypto-currencies/square-color/Ethereum.svg';
import Bitcoin from '../../../assets/images/crypto-currencies/square-color/Bitcoin.svg';
import Dash from '../../../assets/images/crypto-currencies/square-color/Dash.svg';
import Ripple from '../../../assets/images/crypto-currencies/square-color/Ripple.svg';
import Golem from '../../../assets/images/crypto-currencies/square-color/Golem.svg';
import IOTA from '../../../assets/images/crypto-currencies/square-color/IOTA.svg';
import SpkCryptoSwiperCard from '../../@spk-reusable-components/reusable-dashboards/spk-cryptoswipercard';
import type { ReactNode } from 'react';
import type { ApexOptions } from 'apexcharts';

// Crypto Statistics
export const CryptoStatisticsSeries = [
    {
        data: [
            {
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33],
            },
            {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11],
            },
            {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65],
            },
            {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24],
            },
            {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47],
            },
            {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31],
            },
            {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02],
            },
            {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02],
            },
            {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01],
            },
            {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02],
            },
            {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91],
            },
            {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612],
            },
            {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612],
            },
            {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95],
            },
            {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67],
            },
            {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4],
            },
            {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9],
            },
            {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45],
            },
            {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35],
            },
            {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53],
            },
            {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19],
            },
            {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620],
            },
            {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620],
            },
            {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61],
            },
            {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58],
            },
            {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86],
            },
            {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16],
            },
            {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4],
            },
            {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81],
            },
            {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578],
            },
            {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579],
            },
            {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96],
            },
            {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92],
            },
            {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22],
            },
            {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08],
            },
            {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25],
            },
            {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97],
            },
            {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602],
            },
            {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95],
            },
            {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02],
            },
            {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591],
            },
            {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592],
            },
            {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34],
            },
            {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86],
            },
            {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01],
            },
            {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25],
            },
            {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99],
            },
            {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81],
            },
            {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96],
            },
            {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39],
            },
            {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27],
            },
            {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55],
            },
            {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02],
            },
            {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01],
            },
            {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06],
            },
            {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89],
            },
            {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5],
            },
            {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86],
            },
            {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07],
            },
            {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606],
            },
        ],
    },
]
export const CryptoStatisticsOptions = {
    chart: {
        type: "candlestick",
        height: 370,
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        enabled: true,
        theme: "dark",
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: 'rgba(3, 181, 98,1)',
                downward: 'rgba(127, 103, 257,1)'
            },
        },
    },
    grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 3,
    },
    title: {
        align: "left",
    },
    xaxis: {
        type: "datetime",
        labels: {
            rotate: -90,
            style: {
                colors: "rgb(107 ,114 ,128)",
                fontSize: "12px",
            },
        },
    },
    yaxis: {
        tooltip: {
            enabled: true,
            theme: "dark",
        },
        labels: {
            style: {
                colors: "rgb(107 ,114 ,128)",
                fontSize: "10px",
            },
            formatter: function (e: number) {
                return "$" + e
            }
        },
    },
}

// Assets Allocation
export const AssetsAllocationSeries = [17546, 5764, 6458, 5764]
export const AssetsAllocationOptions = {
    labels: ["Bitcoin", "Ethereum", "Dash", "Litecoin"],
    chart: {
        height: 220,
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
                        label: 'Total Assets',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#495057',
                    }
                }
            }
        }
    },
    colors: ["var(--primary-color)", "rgba(127, 103, 257,1)", "rgb(253, 73, 99)", "rgb(255, 169, 9)"],
}

// #total-balance
export const TotalBalanceSeries = [{
    data: [200, 170, 220, 200, 250, 240, 200, 190, 210, 230, 250, 240, 210, 150, 200, 250]
}]
export const TotalBalanceOptions = {
    chart: {
        height: 165,
        type: 'area',
        fontFamily: 'Montserrat, sans-serif',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    tooltip: {
        enabled: true,
        theme: "dark",
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
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: [1.5],
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: 'var(--primary01)',
                        opacity: 1
                    },
                    {
                        offset: 50,
                        color: 'var(--primary01)',
                        opacity: 0.1
                    }
                ],
            ]
        },
    },
    title: {
        text: undefined,
    },
    grid: {
        borderColor: 'transparent',
    },
    yaxis: {
        min: 0,
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },
    colors: ["var(--primary-color)"],
}

// #avg-sales
interface AvgSalesSeriesProps {
    Series: number[]
}
interface AvgSalesOptionsProps {
    color: string
    color1: string
}
export const AvgSalesSeries = ({ Series }: AvgSalesSeriesProps) => (Series)
export const AvgSalesOptions = ({ color, color1 }: AvgSalesOptionsProps) => ({
    chart: {
        type: "donut",
        width: 70,
        height: 70,
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 1,
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: "85%",
                background: "transparent",
                labels: {
                    show: false,
                },
            },
        },
    },
    colors: [color, color1],
    tooltip: {
        enabled: false,
        fixed: {
            enabled: false,
        },
    },
})

// Cryptocurrency Market Overview
interface CryptocurrencySeriesType {
    series: number[]
}
interface CryptocurrencyOptionsType {
    color: string
}
export const CryptocurrencySeries = ({ series }: CryptocurrencySeriesType) => ([{
    name: 'Value',
    data: series
}])
export const CryptocurrencyOptions = ({ color }: CryptocurrencyOptionsType) => ({
    chart: {
        type: 'line',
        height: 20,
        width: 120,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
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
        gradient: {
            enabled: false
        }
    },
    tooltip: {
        enabled: false,
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
})




// Activities
interface ActivitiesType {
    id: number;
    name: string;
    imageUrl: string;
    direction: string;
    amount: string;
    date: string;
}
export const Activities: ActivitiesType[] = [
    {
        id: 1,
        name: "Emily Johnson",
        imageUrl: face16,
        direction: "To: 07 through 12 BB",
        amount: "2.5 BTC",
        date: "12 Jul,2025"
    },
    {
        id: 2,
        name: "Sophie Davis",
        imageUrl: face1,
        direction: "From: 01 up to 13 DD",
        amount: "10 ETH",
        date: "22 Aug,2025"
    },
    {
        id: 3,
        name: "Olivia White Coin",
        imageUrl: face15,
        direction: "To: 03, through 09 VV",
        amount: "50 BNB",
        date: "31 Jul,2025"
    },
    {
        id: 4,
        name: "Mia Taylor",
        imageUrl: face3,
        direction: "Between: 03 and 11 RR",
        amount: "500 ADA",
        date: "14 Feb,2025"
    },
    {
        id: 5,
        name: "Chloe Anderson",
        imageUrl: face5,
        direction: "To: 09, through 16 PP",
        amount: "20 SOL",
        date: "25 Sep,2025"
    },
    {
        id: 6,
        name: "Jhon Marain",
        imageUrl: face8,
        direction: "To: 09, through 12 CC",
        amount: "20 SOL",
        date: "19 Jun,2025"
    },
    {
        id: 7,
        name: "Socrates Itumay",
        imageUrl: face6,
        direction: "From 04 to 10 (LL)",
        amount: "1000 USDT",
        date: "17 Oct,2025"
    }
];

// Transactions
interface Change {
    direction: string;
    value: string;
    changeColor: string;
}

interface TransactionsType {
    id: number;
    avatarBg: string;
    svgColor: string;
    type: string;
    crypto: string;
    date: string;
    amount: string;
    change: Change;
    border?: boolean
}
export const Transactions: TransactionsType[] = [
    {
        id: 1,
        avatarBg: "primary-transparent",
        svgColor: "primary",
        type: "Buy",
        crypto: "Bitcoin",
        date: "14 Mar,2025",
        amount: "$18,907.01",
        change: {
            direction: "up",
            value: "+1,30.90",
            changeColor: "primary"
        }
    },
    {
        id: 2,
        avatarBg: "primary-transparent",
        svgColor: "primary",
        type: "Buy",
        crypto: "Ethereum",
        date: "22 Jan,2025",
        amount: "$15,135.25",
        change: {
            direction: "up",
            value: "+1,07.09",
            changeColor: "primary"
        }
    },
    {
        id: 3,
        avatarBg: "danger-transparent",
        svgColor: "danger",
        type: "Sell",
        crypto: "Golem",
        date: "15 Aug,2025",
        amount: "$11,576.1",
        change: {
            direction: "down",
            value: "-1,67.08",
            changeColor: "danger"
        }
    },
    {
        id: 4,
        avatarBg: "primary-transparent",
        svgColor: "primary",
        type: "Buy",
        crypto: "Litecoin",
        date: "14 Apr,2025",
        amount: "$16,581.81",
        change: {
            direction: "up",
            value: "+1,01.05",
            changeColor: "primary"
        }
    },
    {
        id: 5,
        avatarBg: "danger-transparent",
        svgColor: "danger",
        type: "Sell",
        crypto: "Augur",
        date: "23 Jul,2025",
        amount: "$10,107.51",
        change: {
            direction: "down",
            value: "-1,10.30",
            changeColor: "danger"
        }
    },
    {
        id: 6,
        avatarBg: "danger-transparent",
        svgColor: "danger",
        type: "Sell",
        crypto: "Monero",
        date: "23 Dec,2025",
        amount: "$10,107.51",
        change: {
            direction: "down",
            value: "-2,75.083",
            changeColor: "danger"
        },
        border: true
    }
];

// Assets Allocation
interface AssetsAllocationType {
    id: number;
    name: string;
    avatarBg: string;
    svgColor: string;
    change: string;
    changeColor: string;
    changeDirection: string;
    price: string;
    svg: ReactNode;
    borderClass?: string
}
export const AssetsAllocation: AssetsAllocationType[] = [
    {
        id: 1,
        name: "Bitcoin BTC",
        avatarBg: "primary-transparent",
        svgColor: "primary",
        change: "0.78%",
        changeColor: "primary",
        changeDirection: "up",
        price: "$17,456",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24">
                <path
                    d="M14.075,24v-3.188c3.779-0.207,6.305-1.167,6.642-4.756c0.264-2.88-1.084-4.165-3.223-4.682l0.001-0.002c1.289-0.665,2.109-1.846,1.919-3.811c-0.249-2.688-2.438-3.589-5.339-3.84V0h-2.256v3.619c-0.586,0-1.186,0.015-1.787,0.03V0.001H7.776v3.722c-0.829,0.025-1.795,0.013-4.526,0v2.422c1.781-0.032,2.715-0.147,2.929,1.004V17.34c-0.136,0.914-0.861,0.782-2.475,0.753L3.25,20.796c4.113,0,4.526,0.015,4.526,0.015v3.188h2.256v-3.143c0.615,0.015,1.216,0.015,1.787,0.015V24H14.075z M10.077,6.306c1.274,0,5.259-0.399,5.259,2.275c0,2.555-3.985,2.26-5.259,2.26V6.306z M10.077,18.106v-4.992c1.523,0,6.188-0.428,6.188,2.496C16.265,18.431,11.6,18.106,10.077,18.106z">
                </path>
            </svg>
        ),
    },
    {
        id: 2,
        name: "Ethereum ETH",
        avatarBg: "secondary-transparent",
        svgColor: "secondary",
        change: "1.57%",
        changeColor: "danger",
        changeDirection: "down",
        price: "$5,764",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128">
                <path
                    d="M65.7 96.4V128l39.2-55.1zM103.4 62.7L65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7L62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z">
                </path>
            </svg>
        ),
    },
    {
        id: 3,
        name: "DASH - DASH",
        avatarBg: "danger-transparent",
        svgColor: "danger",
        change: "0.32%",
        changeColor: "primary",
        changeDirection: "up",
        price: "$6,458",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128">
                <path
                    d="M3 99.8C5 94 6.8 88.6 8.8 83.1c.2-.5 1.2-1 1.8-1 3.3-.1 6.6 0 9.9 0h64.6c1.7 0 2.5-.5 3-2.2 3.6-10.6 7.3-21.2 11-31.8.2-.6.3-1.1.6-2H21.4c2-5.9 3.9-11.4 5.9-16.9.2-.4 1-.8 1.5-.8 2-.1 3.9 0 5.9 0 26.5 0 53 .2 79.6-.1 7.9-.1 16.3 6 12.9 17.6-2.5 8.7-5.8 17.1-8.7 25.6-1 2.9-2 5.9-3 8.7-3.7 10.2-11.2 16.3-21.5 19.2-.9.3-1.9.3-2.9.3H5.2c-.6.1-1.3.1-2.2.1z">
                </path>
                <path
                    d="M52.6 55.6c-2 5.6-3.9 10.9-5.9 16-.1.4-.9.7-1.4.7H.8c-.2 0-.4-.1-.8-.3 1.9-5.2 3.7-10.3 5.7-15.4.2-.5 1-1 1.5-1h45.4z">
                </path>
            </svg>
        ),
    },
    {
        id: 4,
        name: "Litecoin - LTC",
        avatarBg: "warning-transparent",
        svgColor: "warning",
        change: "19.45%",
        changeColor: "primary",
        changeDirection: "up",
        price: "$5,764",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128">
                <path
                    d="M18.629 74.359c.934 3.61 4.17 6.009 7.707 6.009.654 0 1.318-.082 1.98-.254L36 78.124V120a8 8 0 0 0 8 8h53.652c4.418 0 8.831-3.484 9.856-7.782l2.289-8.436c1.024-4.298-1.727-7.782-6.145-7.782H65V70.054l12.374-3.204a8 8 0 0 0 5.74-9.75l-1.036-8.995c-.937-3.622-4.144-6.037-7.633-6.037-.63 0-1.27.08-1.908.244L65 44.264V8c0-4.418-4.582-8-9-8H44a8 8 0 0 0-8 8v44.334l-12.667 3.28a8 8 0 0 0-5.74 9.75l1.036 8.995zm5.707-14.873L40 55.431V8c0-2.206 1.794-4 4-4h12c2.43 0 5 2.056 5 4V49.431l12.54-3.246c.298-.078.603-.117.905-.117 1.677 0 3.166 1.147 3.697 2.816l1.1 9.218a4.005 4.005 0 0 1-2.87 4.876L61 66.958V108h42.652c.887 0 1.588.269 1.974.758.379.48.481 1.204.292 2.046l-2.27 8.367-.017.06-.014.06c-.598 2.508-3.386 4.709-5.965 4.709H44c-2.206 0-4-1.794-4-4V72.956l-12.687 3.286c-.32.083-.65.126-.977.126-1.723 0-3.241-1.136-3.77-2.79l-1.1-9.216a4.005 4.005 0 0 1 2.87-4.876z">
                </path>
                <circle cx="48" cy="46" r="2"></circle>
                <circle cx="74" cy="116.083" r="2"></circle>
                <path
                    d="M48 118h17a2 2 0 000-4H50V84.5a2 2 0 00-4 0V116a2 2 0 002 2zM48 40a2 2 0 002-2V14h3a2 2 0 000-4h-5a2 2 0 00-2 2v26a2 2 0 002 2z">
                </path>
            </svg>
        ),
        borderClass: 'border-bottom-0'
    }
];

// Market Cap
interface MarketCapType {
    id: number;
    avatarBg: string;
    borderColor: string;
    iconClass: string;
    name: string;
    symbol: string;
    amount: string;
    usdValue: string;
    change: string;
    changeColor: string;
    changeDirection: string;
    marketCap: string;
    supply: string;
    borderClass?: string
}
export const MarketCap: MarketCapType[] = [
    {
        id: 1,
        avatarBg: "primary-transparent",
        borderColor: "primary",
        iconClass: "ti ti-coin-bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        amount: "0.009231298 BTC",
        usdValue: "0.415164 USD",
        change: "+02.3015%",
        changeColor: "primary",
        changeDirection: "up",
        marketCap: "$87,685,000,000",
        supply: "84,000,000 BTC"
    },
    {
        id: 2,
        avatarBg: "secondary-transparent",
        borderColor: "secondary",
        iconClass: "ti ti-currency-ethereum",
        name: "Ethereum",
        symbol: "ETH",
        amount: "0.035671238 ETH",
        usdValue: "58.75 USD",
        change: "-1.15%",
        changeColor: "danger",
        changeDirection: "down",
        marketCap: "$69,500,000,000",
        supply: "84,000,000 ETH"
    },
    {
        id: 3,
        avatarBg: "danger-transparent",
        borderColor: "danger",
        iconClass: "ti ti-currency-ripple",
        name: "Ripple",
        symbol: "XRP",
        amount: "150.324 XRP",
        usdValue: "0.75 USD",
        change: "+3.25%",
        changeColor: "primary",
        changeDirection: "up",
        marketCap: "$37,500,000,000",
        supply: "84,000,000 XRP"
    },
    {
        id: 4,
        avatarBg: "warning-transparent",
        borderColor: "warning",
        iconClass: "ti ti-coin-monero",
        name: "Monero",
        symbol: "ADA", // Potential naming mismatch
        amount: "200.546 ADA",
        usdValue: "1.50 USD",
        change: "-2.10%",
        changeColor: "danger",
        changeDirection: "down",
        marketCap: "$48,000,000,000",
        supply: "84,000,000 ADA"
    },
    {
        id: 5,
        avatarBg: "orange-transparent",
        borderColor: "orange",
        iconClass: "ti ti-coin-pound",
        name: "DASH - DASH",
        symbol: "ADA", // Should be "DASH", but shown as ADA in your HTML
        amount: "135.723 Dash",
        usdValue: "1.65 USD",
        change: "-1.53%",
        changeColor: "danger",
        changeDirection: "down",
        marketCap: "$34,070,090,000",
        supply: "67,000,000 DASH"
    },
    {
        id: 6,
        avatarBg: "info-transparent",
        borderColor: "info",
        iconClass: "ti ti-currency-litecoin",
        name: "Litecoin",
        symbol: "LTC",
        amount: "0.075345 LTC",
        usdValue: "90.10 USD",
        change: "+1.80%",
        changeColor: "primary",
        changeDirection: "up",
        marketCap: "$12,500,000,000",
        supply: "84,000,000 LTC",
        borderClass: 'border-bottom-0'
    }
];

// Cryptocurrency Market Overview
interface CryptoCurrencyMarketType {
    id: number;
    name: string;
    symbol: string;
    price: string;
    graphId: string;
    volume: string;
    change: string;
    changeColor: string;
    changeDirection: string;
    marketCap: string;
    image: string;
    chartOptions: ApexOptions;
    chartSeries: ApexAxisChartSeries;
}
export const CryptoCurrencyMarketOverview: CryptoCurrencyMarketType[] = [
    {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        price: "$34,283.53",
        graphId: "bitcoin-price-graph",
        volume: "21,457.02M",
        change: "39.23%",
        changeColor: "primary",
        changeDirection: "up",
        marketCap: "$669,649,033,571",
        image: Bitcoin,
        chartOptions: CryptocurrencyOptions({ color: 'rgb(3, 181, 98)' }),
        chartSeries: CryptocurrencySeries({ series: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46] })
    },
    {
        id: 2,
        name: "Ethereum",
        symbol: "ETH",
        price: "$1,875.42",
        graphId: "etherium-price-graph",
        volume: "120,000.00M",
        change: "22.15%",
        changeColor: "primary",
        changeDirection: "up",
        marketCap: "$220,000,000,000",
        image: Ethereum,
        chartOptions: CryptocurrencyOptions({ color: 'rgb(253, 73, 99)' }),
        chartSeries: CryptocurrencySeries({ series: [0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 31, 37, 39, 62, 51, 35, 41] })
    },
    {
        id: 3,
        name: "Dash",
        symbol: "DASH",
        price: "$102.45",
        graphId: "dash-price-graph",
        volume: "10,500.00M",
        change: "15.80%",
        changeColor: "primary",
        changeDirection: "up",
        marketCap: "$1,182,000,000",
        image: Dash,
        chartOptions: CryptocurrencyOptions({ color: 'rgb(3, 181, 98)' }),
        chartSeries: CryptocurrencySeries({ series: [61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 62, 51, 35, 41] })
    },
    {
        id: 4,
        name: "Ripple",
        symbol: "XRP",
        price: "$0.48",
        graphId: "ripple-price-graph",
        volume: "50,000.00M",
        change: "-3.25%",
        changeColor: "danger",
        changeDirection: "down",
        marketCap: "$24,000,000,000",
        image: Ripple,
        chartOptions: CryptocurrencyOptions({ color: 'rgb(3, 181, 98)' }),
        chartSeries: CryptocurrencySeries({ series: [61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41] })
    },
    {
        id: 5,
        name: "IOTA",
        symbol: "MIOTA",
        price: "$0.35",
        graphId: "iota-price-graph",
        volume: "2,500.00M",
        change: "5.10%",
        changeColor: "primary",
        changeDirection: "up",
        marketCap: "$875,000,000",
        image: IOTA,
        chartOptions: CryptocurrencyOptions({ color: 'rgb(253, 73, 99)' }),
        chartSeries: CryptocurrencySeries({ series: [61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31] })
    },
    {
        id: 6,
        name: "Golem",
        symbol: "GNT",
        price: "$0.20",
        graphId: "golem-price-graph",
        volume: "1,500.00M",
        change: "3.45%",
        changeColor: "primary",
        changeDirection: "up",
        marketCap: "$300,000,000",
        image: Golem,
        chartOptions: CryptocurrencyOptions({ color: 'rgb(253, 73, 99)' }),
        chartSeries: CryptocurrencySeries({ series: [62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 61, 27, 54, 37, 39, 0, 45, 54, 38] })
    }
];

export interface DailyStatsType {
    id: number;
    title: string;
    value: string;
    change: string;
    changeColor: string;
    changeDirection: string;
    description: string;
    chartValue: string;
    chartId: string;
    theme: string;
    borderColor: string;
    svg: ReactNode;
    avatarColor: string;
    chartOptions: object;
    chartSeries: object;
    customPadding: string;
}
export const DailyStats: DailyStatsType[] = [
    {
        id: 1,
        title: "Daily Average Sales",
        value: "12,5743",
        change: "2.45%",
        customPadding: "pt-1",
        changeColor: "primary",
        changeDirection: "up",
        description: "Increased this year",
        chartValue: "40%",
        chartId: "avg-sales",
        theme: "primary",
        borderColor: "primary",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#000">
                <g>
                    <rect fill="none" height="24" width="24" />
                    <path
                        d="M18 20H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"
                        opacity=".8" fill="#fff" />
                    <path
                        d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
                </g>
            </svg>
        ),
        avatarColor: "primary",
        chartOptions: AvgSalesOptions({ color: 'var(--primary-color)', color1: 'var(--primary01)' }),
        chartSeries: AvgSalesSeries({ Series: [60, 80] })
    },
    {
        id: 2,
        title: "Daily Average Profit",
        value: "$23,742",
        change: "0.34%",
        customPadding: "pt-1",
        changeDirection: "down",
        changeColor: "danger",
        description: "Decreased this year",
        chartValue: "67%",
        chartId: "avg-profit",
        theme: "secondary",
        borderColor: "secondary",
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
                            enableBackground="new" opacity=".8" fill="#fff" />
                        <path
                            d="M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67 c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96c0,2.27,2.25,2.91,3.35,3.31 c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75c0.63,2.19,2.28,2.78,3.02,2.96 V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z" />
                        <path
                            d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z" />
                    </g>
                </g>
            </svg>
        ),
        avatarColor: "secondary",
        chartOptions: AvgSalesOptions({ color: 'rgba(127, 103, 257,1)', color1: "rgba(127, 103, 257,0.1)" }),
        chartSeries: AvgSalesSeries({ Series: [80, 20] })
    },
    {
        id: 3,
        title: "Daily Average Returns",
        value: "$32,753",
        change: "2.65%",
        customPadding: "",
        changeColor: "primary",
        changeDirection: "up",
        description: "Increased this year",
        chartValue: "55%",
        chartId: "avg-return",
        theme: "danger",
        borderColor: "danger",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M5 5v14h14V5H5zm11 9h-4v3l-5-5 5-5v3h4v4z" opacity=".8"
                    fill="#fff" />
                <path
                    d="M12 7l-5 5 5 5v-3h4v-4h-4zm7-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64S3 4.72 3 5v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" />
            </svg>
        ),
        avatarColor: "danger",
        chartOptions: AvgSalesOptions({ color: 'rgba(253, 73, 99,1)', color1: "rgba(253, 73, 99,0.1)" }),
        chartSeries: AvgSalesSeries({ Series: [50, 20] })
    }
];

// 
const BitcoinIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="Bitcoin" className="crypto-main-icon"><path fill="#b1ffdb" d="M16.358 10.575c.197-1.33-.805-2.046-2.175-2.523l.445-1.802-1.085-.274-.433 1.755c-.285-.072-.578-.14-.869-.207l.436-1.766-1.085-.274-.444 1.802a36.28 36.28 0 0 1-.693-.164l.001-.006-1.496-.378-.288 1.172s.804.187.788.198c.313.04.537.324.505.638l-1.217 4.938a.394.394 0 0 1-.498.26c.011.017-.788-.198-.788-.198l-.539 1.256 1.412.356c.263.066.52.136.773.201l-.449 1.824 1.084.273.445-1.804c.296.082.583.157.864.227l-.443 1.795 1.085.274.449-1.82c1.85.354 3.241.211 3.827-1.48a1.933 1.933 0 0 0-.997-2.662 1.743 1.743 0 0 0 1.385-1.61zm-2.479 3.516c-.335 1.362-2.603.626-3.339.44l.596-2.414c.735.185 3.094.553 2.743 1.974zm.336-3.535c-.306 1.239-2.194.61-2.806.455l.54-2.19c.612.154 2.584.442 2.266 1.735z" className="colorb2b1ff svgShape"></path><path fill="#56b8b7" d="m11.949 8.82-.54 2.191c.612.154 2.5.784 2.806-.455.318-1.293-1.654-1.581-2.266-1.736zM11.136 12.117l-.596 2.415c.736.185 3.004.921 3.34-.441.35-1.421-2.009-1.789-2.744-1.974z" className="color6563ff svgShape"></path><path fill="#56b8b7" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.358 8.575a1.743 1.743 0 0 1-1.385 1.611 1.933 1.933 0 0 1 .997 2.66c-.586 1.693-1.977 1.836-3.827 1.482l-.449 1.82-1.085-.274.443-1.795c-.28-.07-.568-.145-.864-.227l-.445 1.804-1.084-.273.45-1.824c-.254-.065-.511-.135-.774-.201l-1.412-.356.539-1.256s.8.215.788.199l.005.001a.394.394 0 0 0 .493-.262l1.217-4.938a.583.583 0 0 0-.505-.638c.016-.011-.788-.198-.788-.198l.288-1.172 1.496.378-.001.006c.225.056.457.11.693.164l.444-1.802 1.085.274-.436 1.766c.291.068.584.135.87.207l.432-1.755 1.085.274-.445 1.802c1.37.477 2.372 1.193 2.175 2.523z" className="color6563ff svgShape"></path></svg>
const BgBitcoinIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M200,160a40,40,0,0,1-40,40H88V48h60a36,36,0,0,1,0,72h12A40,40,0,0,1,200,160Z" opacity="0.8" fill="transparent"></path><path d="M178.48,115.7A44,44,0,0,0,152,40.19V24a8,8,0,0,0-16,0V40H120V24a8,8,0,0,0-16,0V40H72a8,8,0,0,0,0,16h8V192H72a8,8,0,0,0,0,16h32v16a8,8,0,0,0,16,0V208h16v16a8,8,0,0,0,16,0V208h8a48,48,0,0,0,18.48-92.3ZM96,56h52a28,28,0,0,1,0,56H96Zm64,136H96V128h64a32,32,0,0,1,0,64Z"></path></svg>
const BinanceIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" id="Binance" className="crypto-main-icon"><path fill="#7f67ff" d="M14.6782 20.1697L23.9997 10.8486 33.3262 20.1746 38.7501 14.7507 23.9997 0 9.25431 14.7458 14.6782 20.1697zM10.8479 23.9988L5.42408 18.575.00000129498 23.9991 5.42381 29.4229 10.8479 23.9988zM14.6782 27.8296L23.9997 37.1507 33.3258 27.825 38.7527 33.2459 38.7501 33.2489 23.9997 47.9993 9.25394 33.2539 9.24635 33.2463 14.6782 27.8296zM42.5759 29.4254L48 24.0013 42.5762 18.5775 37.1521 24.0016 42.5759 29.4254z" className="colorf3ba2f svgShape"></path><path fill="#7f67ff" d="M29.5014 23.9968H29.5036L23.9997 18.4929L19.9323 22.5604H19.9319L19.4648 23.0278L18.5008 23.9919L18.4932 23.9995L18.5008 24.0074L23.9997 29.5064L29.5036 24.0025L29.5063 23.9995L29.5014 23.9968Z" className="colorf3ba2f svgShape"></path></svg>
const BgBinanceIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Binance"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M19 10L21 12 19 14 17 12 19 10zM3 12L5 10 7 12 5 14 3 12zM10 12L12 10 14 12 12 14 10 12z" className="colorStroke000000 svgStroke"></path><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M17.5 8.5L15.5 10.5 12 7 8.5 10.5 6.5 8.5 12 3 17.5 8.5zM17.5 15.5L15.5 13.5 12 17 8.5 13.5 6.5 15.5 12 21 17.5 15.5z" className="colorStroke000000 svgStroke"></path></svg>
const CardanoIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="Cardano" className="crypto-main-icon"><circle cx="45.9" cy="63.84" r="7.82" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="82.1" cy="63.84" r="7.82" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="54.95" cy="79.51" r="7.82" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="73.05" cy="48.17" r="7.82" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="73.05" cy="79.51" r="7.82" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="54.95" cy="48.17" r="7.82" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="103.98" cy="64" r="4.1" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="24.02" cy="64" r="4.1" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="9.48" cy="64" r="2.6" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="118.52" cy="64" r="2.6" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="83.99" cy="29.37" r="4.1" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="44.01" cy="98.63" r="4.1" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="36.74" cy="111.21" r="2.6" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="91.26" cy="16.79" r="2.6" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="44.01" cy="29.37" r="4.1" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="83.99" cy="98.63" r="4.1" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="91.26" cy="111.21" r="2.6" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="36.74" cy="16.79" r="2.6" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="64" cy="32.71" r="4.72" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="64" cy="14.05" r="3.23" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="64" cy="95.29" r="4.72" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="64" cy="113.95" r="3.23" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="36.9" cy="48.36" r="4.72" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="20.74" cy="39.02" r="3.23" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="91.1" cy="79.64" r="4.72" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="107.26" cy="88.98" r="3.23" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="36.9" cy="79.64" r="4.72" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="20.74" cy="88.98" r="3.23" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="91.1" cy="48.36" r="4.72" fill="#fd4963" className="color000000 svgShape"></circle><circle cx="107.26" cy="39.02" r="3.23" fill="#fd4963" className="color000000 svgShape"></circle></svg>
const BgCardanoIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="Cardano"><circle cx="45.9" cy="63.84" r="7.82" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="82.1" cy="63.84" r="7.82" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="54.95" cy="79.51" r="7.82" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="73.05" cy="48.17" r="7.82" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="73.05" cy="79.51" r="7.82" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="54.95" cy="48.17" r="7.82" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="103.98" cy="64" r="4.1" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="24.02" cy="64" r="4.1" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="9.48" cy="64" r="2.6" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="118.52" cy="64" r="2.6" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="83.99" cy="29.37" r="4.1" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="44.01" cy="98.63" r="4.1" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="36.74" cy="111.21" r="2.6" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="91.26" cy="16.79" r="2.6" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="44.01" cy="29.37" r="4.1" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="83.99" cy="98.63" r="4.1" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="91.26" cy="111.21" r="2.6" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="36.74" cy="16.79" r="2.6" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="64" cy="32.71" r="4.72" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="64" cy="14.05" r="3.23" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="64" cy="95.29" r="4.72" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="64" cy="113.95" r="3.23" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="36.9" cy="48.36" r="4.72" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="20.74" cy="39.02" r="3.23" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="91.1" cy="79.64" r="4.72" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="107.26" cy="88.98" r="3.23" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="36.9" cy="79.64" r="4.72" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="20.74" cy="88.98" r="3.23" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="91.1" cy="48.36" r="4.72" fill="#ffffff" className="color000000 svgShape"></circle><circle cx="107.26" cy="39.02" r="3.23" fill="#ffffff" className="color000000 svgShape"></circle></svg>
const EtheriumIcon = <svg xmlns="http://www.w3.org/2000/svg" id="Ethereum" x="0" y="0" version="1.1" viewBox="0 0 128 128" className="crypto-main-icon"><path d="M65.7 96.4V128l39.2-55.1zM103.4 62.7 65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7 62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z" fill="#ffa909" className="color6d75b6 svgShape"></path></svg>
const BgEtheriumIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M216,128,128,240,40,128l88,40Z" opacity="0.2"></path><path d="M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,39.13l67.42,85.8L136,155.58ZM120,155.58,52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Zm16,0,53.43-24.29-53.43,68Z"></path></svg>
const USDTIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" id="Tether" className="crypto-main-icon"><path fill="#0fbcf9" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" className="color26a17b svgShape"></path><path fill="#ffffff" d="M26.5582 26.2148V26.2109C26.3923 26.2225 25.5357 26.2727 23.6296 26.2727C22.1055 26.2727 21.0367 26.2302 20.6585 26.2109V26.2148C14.7974 25.9563 10.4257 24.9376 10.4257 23.7145C10.4257 22.4952 14.8013 21.4727 20.6585 21.2142V25.2C21.0405 25.227 22.1402 25.2926 23.6566 25.2926C25.4778 25.2926 26.3884 25.2154 26.5582 25.2V21.218C32.4077 21.4804 36.7678 22.499 36.7678 23.7183C36.7678 24.9376 32.4039 25.9563 26.5582 26.2187V26.2148ZM26.5582 20.8052V17.2399H34.719V11.8032H12.5016V17.2399H20.6624V20.8052C14.0296 21.11 9.04437 22.4219 9.04437 23.9961C9.04437 25.5704 14.0334 26.8823 20.6624 27.191V38.6199H26.5621V27.191C33.1833 26.8862 38.1608 25.5743 38.1608 24C38.1608 22.4296 33.1833 21.1138 26.5621 20.809" className="colorffffff svgShape"></path></svg>
const BgUSDTIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="Usdt"><path d="M75,49.78V37.27h28.46V17.53h-79V37.27H53V49.78c-23.91,1.15-41.86,5.95-41.86,11.7S29.07,72,53,73.18v41.29H75V73.18c23.91-1.14,41.86-5.94,41.86-11.7S98.93,50.93,75,49.78ZM64,69.44c-25.89,0-46.88-4-46.88-8.82,0-4.15,15.29-7.63,35.86-8.56V66.19c3.54.16,7.22.25,11,.25s7.48-.09,11-.25V52.06c20.57.93,35.86,4.41,35.86,8.56C110.88,65.49,89.89,69.44,64,69.44Z" fill="#ffffff" className="color000000 svgShape"></path></svg>


export interface CryptoCardsType {
    id: number;
    name: string;
    symbol: string;
    amount: string;
    change: string;
    changeDirection: string;
    avatarBg: string;
    chartId: string;
    svg1: ReactNode;
    svg2: ReactNode;
}
export const CryptoCards: CryptoCardsType[] = [
    { id: 1, name: "Bitcoin", symbol: "BTC", amount: "3.4563 BTC", change: "+0.57%", changeDirection: "up", avatarBg: "primary", chartId: "btc-marketcap", svg1: BitcoinIcon, svg2: BgBitcoinIcon, },
    { id: 2, name: "Binance", symbol: "BNB", amount: "1.533 BNB", change: "-0.12%", changeDirection: "down", avatarBg: "secondary", chartId: "bnb-marketcap", svg1: BinanceIcon, svg2: BgBinanceIcon, },
    { id: 3, name: "Cardano", symbol: "ADA", amount: "4.125 ADA", change: "+0.23%", changeDirection: "up", avatarBg: "danger", chartId: "cardano-marketcap", svg1: CardanoIcon, svg2: BgCardanoIcon, },
    { id: 4, name: "Etherium", symbol: "ETH", amount: "5.327 ETH", change: "+0.23%", changeDirection: "up", avatarBg: "warning", chartId: "eth-marketcap", svg1: EtheriumIcon, svg2: BgEtheriumIcon, },
    { id: 5, name: "Tether", symbol: "USDT", amount: "5.327 USDT", change: "+0.23%", changeDirection: "up", avatarBg: "info", chartId: "usdt-marketcap", svg1: USDTIcon, svg2: BgUSDTIcon, },
];

export const CryptoSwiper = CryptoCards.map((idx) => (
    <div key={idx.id}>
        <SpkCryptoSwiperCard card={idx} />
    </div>
))

// Crypto Statistics
interface CryptoStatisticsType {
    id: number;
    label: string;
    value: string;
    bg: string;
}
export const CryptoStatistics: CryptoStatisticsType[] = [
    {
        id: 1,
        label: "Coin Marketcap",
        value: "+11.54%",
        bg: "primary-transparent",
    },
    {
        id: 2,
        label: "Binance",
        value: "+12.63%",
        bg: "secondary-transparent",
    },
    {
        id: 3,
        label: "Coinbase",
        value: "-12.753%",
        bg: "danger-transparent",
    },
    {
        id: 4,
        label: "Etherium",
        value: "-12.753%",
        bg: "warning-transparent",
    }
];

interface SelectTye {
    value?: string
    label?: string
}
export const Buysell1: SelectTye[] = [
    { value: 'BTC', label: 'BTC' },
    { value: 'ETH', label: 'ETH' },
    { value: 'XRP', label: 'XRP' },
    { value: 'DASH', label: 'DASH' },
    { value: 'NEO', label: 'NEO' },
    { value: 'LTC', label: 'LTC' },
    { value: 'BSD', label: 'BSD' }
]

export const Buysell2: SelectTye[] = [
    { value: 'USD', label: 'USD' },
    { value: 'AED', label: 'AED' },
    { value: 'AUD', label: 'AUD' },
    { value: 'ARS', label: 'ARS' },
    { value: 'AZN', label: 'AZN' },
    { value: 'BGN', label: 'BGN' },
    { value: 'BRL', label: 'BRL' }
]