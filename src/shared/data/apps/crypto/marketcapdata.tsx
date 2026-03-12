import Ethereum from '../../../../assets/images/crypto-currencies/square-color/Ethereum.svg';
import Bitcoin from '../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg';
import Dash from '../../../../assets/images/crypto-currencies/square-color/Dash.svg';
import Litecoin from '../../../../assets/images/crypto-currencies/square-color/Litecoin.svg';
import Ripple from '../../../../assets/images/crypto-currencies/square-color/Ripple.svg';
import Golem from '../../../../assets/images/crypto-currencies/square-color/Golem.svg';
import EOS from '../../../../assets/images/crypto-currencies/square-color/EOS.svg';


// Crypto MarketCap
export const CryptoMarketCapSeries = {
    series1: [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65,
            ],
        },
    ],
    series2: [
        {
            name: "Value",
            data: [
                38, 24, 54, 65, 0, 45, 56
            ],
        },
    ],
    series3: [
        {
            name: "Value",
            data: [
                38, 65, 24, 0, 56, 45, 54
            ],
        },
    ],
    series4: [
        {
            name: "Value",
            data: [
                65, 38, 24, 56, 0, 54, 45
            ],
        },
    ],
    series5: [
        {
            name: "Value",
            data: [
                24, 45, 65, 0, 38, 56, 54
            ],
        },
    ],
    series6: [
        {
            name: "Value",
            data: [
                54, 0, 56, 45, 38, 65, 24
            ],
        },
    ],
    series7: [
        {
            name: "Value",
            data: [
                38, 54, 24, 65, 45, 0, 56
            ],
        },
    ],

}
export const CryptoMarketCapOptions = ({ color }: { color: string }) => ({
    chart: {
        type: "line",
        height: 30,
        width: 120,
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
        },
    },
    stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 1.5,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false,
        },
    },
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false,
        },
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
    },
    tooltip: {
        enabled: false,
    },
    colors: [color]
    // colors: ["rgb(237, 78, 131)"],
})

export const CryptoMarketCap = [
    {
        id: 1,
        name: "Bitcoin (BTC)",
        marketCap: "$582.23B",
        price: "$29,948.80",
        marketChange1h: "0.483%",
        marketChange24h: "0.239%",
        volume: "$11.79B USD",
        circulation: "19.43M of (21M)",
        arrowdir: "down",
        arrowdir1: "up",
        color1: "danger",
        color2: "primary",
        progress1: 88,
        progress2: 12,
        src: Bitcoin,
        chartSeries: CryptoMarketCapSeries.series1,
        chartOptions: CryptoMarketCapOptions({ color: "rgb(237, 78, 131)" }),
    },
    {
        id: 2,
        name: "Ethereum (ETH)",
        marketCap: "$226.91B",
        price: "$1,895.96",
        marketChange1h: "0.87%",
        marketChange24h: "0.29%",
        volume: "$2.83B USD",
        circulation: "120M",
        arrowdir: "down",
        arrowdir1: "down",
        color1: "danger",
        color2: "danger",
        src: Ethereum,
        chartSeries: CryptoMarketCapSeries.series2,
        chartOptions: CryptoMarketCapOptions({ color: "rgb(10, 145, 81)" }),
    },
    {
        id: 3,
        name: "Golem (GLM)",
        marketCap: "$202.07M",
        price: "$0.201472",
        marketChange1h: "0.61%",
        marketChange24h: "34.96%",
        volume: "$2,112,645 USD",
        circulation: "1,000M",
        arrowdir: "up",
        arrowdir1: "down",
        color1: "primary",
        color2: "danger",
        progress1: 100,
        src: Golem,
        chartSeries: CryptoMarketCapSeries.series3,
        chartOptions: CryptoMarketCapOptions({ color: "rgb(10, 145, 81)" }),
    },
    {
        id: 4,
        name: "Dash (DASH)",
        marketCap: "$365.877M",
        price: "$32.13",
        marketChange1h: "0.59%",
        marketChange24h: "1.24%",
        volume: "$3.61M USD",
        circulation: "11.37M of (18.92M)",
        arrowdir: "up",
        arrowdir1: "up",
        color1: "primary",
        color2: "primary",
        progress1: 56,
        progress2: 44,
        src: Dash,
        chartId: "dash-chart",
        chartSeries: CryptoMarketCapSeries.series4,
        chartOptions: CryptoMarketCapOptions({ color: "rgb(10, 145, 81)" }),
    },
    {
        id: 5,
        name: "Litecoin (LTC)",
        marketCap: "$6.80B",
        price: "$92.98",
        marketChange1h: "0.90%",
        marketChange24h: "2.22%",
        volume: "$11.46B USD",
        circulation: "73.40M",
        arrowdir: "down",
        arrowdir1: "up",
        color1: "danger",
        color2: "primary",
        progress1: 100,
        src: Litecoin,
        chartId: "lite-chart",
        chartSeries: CryptoMarketCapSeries.series5,
        chartOptions: CryptoMarketCapOptions({ color: "rgb(237, 78, 131)" }),
    },
    {
        id: 6,
        name: "Ripple (XRP)",
        marketCap: "$42.48B",
        price: "$0.83",
        marketChange1h: "0.01%",
        marketChange24h: "0.91%",
        volume: "$2.99B USD",
        circulation: "52.54B of (100B)",
        arrowdir: "up",
        arrowdir1: "up",
        color1: "primary",
        color2: "primary",
        progress1: 52,
        progress2: 48,
        src: Ripple,
        chartId: "ripple-chart",
        chartSeries: CryptoMarketCapSeries.series6,
        chartOptions: CryptoMarketCapOptions({ color: "rgb(10, 145, 81)" }),
    },
    {
        id: 7,
        name: "EOS",
        marketCap: "$85.2M",
        price: "$0.765957",
        marketChange1h: "0.61%",
        marketChange24h: "20.65%",
        volume: "$116.91M USD",
        circulation: "10.1B of (105B)",
        arrowdir: "down",
        arrowdir1: "down",
        color1: "danger",
        color2: "danger",
        progress1: 10,
        progress2: 90,
        src: EOS,
        chartId: "eos-chart",
        chartSeries: CryptoMarketCapSeries.series7,
        chartOptions: CryptoMarketCapOptions({ color: "rgb(10, 145, 81)" }),
    },
];

export const MarketCapSeries = [
    {
        data: [32, 63, 59, 45, 72, 31, 84, 28, 53, 49, 68, 50, 42, 60, 30, 18, 97, 61, 67, 22, 74, 58, 33, 55]
    }
]



export const MarketCapOptions = ({ color, opacitycolor1, opacitycolor2, opacitycolor3 }: { color: string, opacitycolor1: string, opacitycolor2: string, opacitycolor3: string }) => ({
    chart: {
        type: 'area',
        height: 50,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'smooth',
        width: 1.5,
    },
    colors: [color],
    fill: {
        type: ['gradient'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: opacitycolor1,
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: opacitycolor2,
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: opacitycolor3,
                        opacity: 0.05
                    }
                ],
            ]
        }
    },
    tooltip: {
        fixed: {
            enabled: false
        },
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
    // colors: ["rgb(237, 78, 131)"],
})

export const Marketcapdata = [
    {
        id: 1,
        title: 'Bitcoin',
        text: 'BTC - Rank 1',
        percentage: '+0.57%',
        value: '3.4563 BTC',
        svg1: ` <svg xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
            id="Bitcoin" className="crypto-main-icon">
            <path fill="#b1ffdb"
                d="M16.358 10.575c.197-1.33-.805-2.046-2.175-2.523l.445-1.802-1.085-.274-.433 1.755c-.285-.072-.578-.14-.869-.207l.436-1.766-1.085-.274-.444 1.802a36.28 36.28 0 0 1-.693-.164l.001-.006-1.496-.378-.288 1.172s.804.187.788.198c.313.04.537.324.505.638l-1.217 4.938a.394.394 0 0 1-.498.26c.011.017-.788-.198-.788-.198l-.539 1.256 1.412.356c.263.066.52.136.773.201l-.449 1.824 1.084.273.445-1.804c.296.082.583.157.864.227l-.443 1.795 1.085.274.449-1.82c1.85.354 3.241.211 3.827-1.48a1.933 1.933 0 0 0-.997-2.662 1.743 1.743 0 0 0 1.385-1.61zm-2.479 3.516c-.335 1.362-2.603.626-3.339.44l.596-2.414c.735.185 3.094.553 2.743 1.974zm.336-3.535c-.306 1.239-2.194.61-2.806.455l.54-2.19c.612.154 2.584.442 2.266 1.735z"
                className="colorb2b1ff svgShape"></path>
            <path fill="#56b8b7"
                d="m11.949 8.82-.54 2.191c.612.154 2.5.784 2.806-.455.318-1.293-1.654-1.581-2.266-1.736zM11.136 12.117l-.596 2.415c.736.185 3.004.921 3.34-.441.35-1.421-2.009-1.789-2.744-1.974z"
                className="color6563ff svgShape"></path>
            <path fill="#56b8b7"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.358 8.575a1.743 1.743 0 0 1-1.385 1.611 1.933 1.933 0 0 1 .997 2.66c-.586 1.693-1.977 1.836-3.827 1.482l-.449 1.82-1.085-.274.443-1.795c-.28-.07-.568-.145-.864-.227l-.445 1.804-1.084-.273.45-1.824c-.254-.065-.511-.135-.774-.201l-1.412-.356.539-1.256s.8.215.788.199l.005.001a.394.394 0 0 0 .493-.262l1.217-4.938a.583.583 0 0 0-.505-.638c.016-.011-.788-.198-.788-.198l.288-1.172 1.496.378-.001.006c.225.056.457.11.693.164l.444-1.802 1.085.274-.436 1.766c.291.068.584.135.87.207l.432-1.755 1.085.274-.445 1.802c1.37.477 2.372 1.193 2.175 2.523z"
                className="color6563ff svgShape"></path>
        </svg>`,
        svg2: ` <svg xmlns="http://www.w3.org/2000/svg" width="32"
                height="32" fill="#fff" viewBox="0 0 256 256">
                <path
                    d="M200,160a40,40,0,0,1-40,40H88V48h60a36,36,0,0,1,0,72h12A40,40,0,0,1,200,160Z"
                    opacity="0.8" fill="transparent"></path>
                <path
                    d="M178.48,115.7A44,44,0,0,0,152,40.19V24a8,8,0,0,0-16,0V40H120V24a8,8,0,0,0-16,0V40H72a8,8,0,0,0,0,16h8V192H72a8,8,0,0,0,0,16h32v16a8,8,0,0,0,16,0V208h16v16a8,8,0,0,0,16,0V208h8a48,48,0,0,0,18.48-92.3ZM96,56h52a28,28,0,0,1,0,56H96Zm64,136H96V128h64a32,32,0,0,1,0,64Z">
                </path>
            </svg>`,
        color: 'primary',
        chartOptions: MarketCapOptions({ color: "var(--primary05)", opacitycolor1: "var(--primary01)", opacitycolor2: "var(--primary005)", opacitycolor3: "var(--primary005)" }),
        chartSeries: MarketCapSeries
    },
    {
        id: 2,
        title: 'Binance',
        text: 'BNB',
        percentage: '-0.12%',
        value: '1,533 BNB',
        svg1: ` <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 48 48" id="Binance" className="crypto-main-icon">
              <path fill="#7f67ff"
                  d="M14.6782 20.1697L23.9997 10.8486 33.3262 20.1746 38.7501 14.7507 23.9997 0 9.25431 14.7458 14.6782 20.1697zM10.8479 23.9988L5.42408 18.575.00000129498 23.9991 5.42381 29.4229 10.8479 23.9988zM14.6782 27.8296L23.9997 37.1507 33.3258 27.825 38.7527 33.2459 38.7501 33.2489 23.9997 47.9993 9.25394 33.2539 9.24635 33.2463 14.6782 27.8296zM42.5759 29.4254L48 24.0013 42.5762 18.5775 37.1521 24.0016 42.5759 29.4254z"
                  className="colorf3ba2f svgShape"></path>
              <path fill="#7f67ff"
                  d="M29.5014 23.9968H29.5036L23.9997 18.4929L19.9323 22.5604H19.9319L19.4648 23.0278L18.5008 23.9919L18.4932 23.9995L18.5008 24.0074L23.9997 29.5064L29.5036 24.0025L29.5063 23.9995L29.5014 23.9968Z"
                  className="colorf3ba2f svgShape"></path>
          </svg>`,
        svg2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" id="Binance">
                <path stroke="#fff" strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 10L21 12 19 14 17 12 19 10zM3 12L5 10 7 12 5 14 3 12zM10 12L12 10 14 12 12 14 10 12z"
                    className="colorStroke000000 svgStroke"></path>
                <path stroke="#fff" strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.5 8.5L15.5 10.5 12 7 8.5 10.5 6.5 8.5 12 3 17.5 8.5zM17.5 15.5L15.5 13.5 12 17 8.5 13.5 6.5 15.5 12 21 17.5 15.5z"
                    className="colorStroke000000 svgStroke"></path>
            </svg>`,
        color: 'secondary',
        chartOptions: MarketCapOptions({ color: "rgba(127, 103, 257,0.5)", opacitycolor1: "rgba(127, 103, 257,0.1)", opacitycolor2: "rgba(127, 103, 257,0.05)", opacitycolor3: "rgba(127, 103, 257,0.05)" }),
        chartSeries: MarketCapSeries
    },
    {
        id: 3,
        title: 'Cardano',
        text: 'ADA',
        percentage: '+0.23%',
        value: '4,125 ADA',
        svg1: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
                id="Cardano" className="crypto-main-icon">
                <circle cx="45.9" cy="63.84" r="7.82" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="82.1" cy="63.84" r="7.82" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="54.95" cy="79.51" r="7.82" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="73.05" cy="48.17" r="7.82" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="73.05" cy="79.51" r="7.82" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="54.95" cy="48.17" r="7.82" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="103.98" cy="64" r="4.1" fill="#fd4963"
                    className="color000000 svgShape">
                </circle>
                <circle cx="24.02" cy="64" r="4.1" fill="#fd4963"
                    className="color000000 svgShape">
                </circle>
                <circle cx="9.48" cy="64" r="2.6" fill="#fd4963"
                    className="color000000 svgShape">
                </circle>
                <circle cx="118.52" cy="64" r="2.6" fill="#fd4963"
                    className="color000000 svgShape">
                </circle>
                <circle cx="83.99" cy="29.37" r="4.1" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="44.01" cy="98.63" r="4.1" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="36.74" cy="111.21" r="2.6" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="91.26" cy="16.79" r="2.6" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="44.01" cy="29.37" r="4.1" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="83.99" cy="98.63" r="4.1" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="91.26" cy="111.21" r="2.6" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="36.74" cy="16.79" r="2.6" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="64" cy="32.71" r="4.72" fill="#fd4963"
                    className="color000000 svgShape">
                </circle>
                <circle cx="64" cy="14.05" r="3.23" fill="#fd4963"
                    className="color000000 svgShape">
                </circle>
                <circle cx="64" cy="95.29" r="4.72" fill="#fd4963"
                    className="color000000 svgShape">
                </circle>
                <circle cx="64" cy="113.95" r="3.23" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="36.9" cy="48.36" r="4.72" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="20.74" cy="39.02" r="3.23" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="91.1" cy="79.64" r="4.72" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="107.26" cy="88.98" r="3.23" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="36.9" cy="79.64" r="4.72" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="20.74" cy="88.98" r="3.23" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="91.1" cy="48.36" r="4.72" fill="#fd4963"
                    className="color000000 svgShape"></circle>
                <circle cx="107.26" cy="39.02" r="3.23" fill="#fd4963"
                    className="color000000 svgShape"></circle>
            </svg>`,
        svg2: ` <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128" id="Cardano">
              <circle cx="45.9" cy="63.84" r="7.82"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="82.1" cy="63.84" r="7.82"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="54.95" cy="79.51" r="7.82"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="73.05" cy="48.17" r="7.82"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="73.05" cy="79.51" r="7.82"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="54.95" cy="48.17" r="7.82"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="103.98" cy="64" r="4.1"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="24.02" cy="64" r="4.1"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="9.48" cy="64" r="2.6" fill="#ffffff"
                  className="color000000 svgShape"></circle>
              <circle cx="118.52" cy="64" r="2.6"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="83.99" cy="29.37" r="4.1"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="44.01" cy="98.63" r="4.1"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="36.74" cy="111.21" r="2.6"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="91.26" cy="16.79" r="2.6"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="44.01" cy="29.37" r="4.1"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="83.99" cy="98.63" r="4.1"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="91.26" cy="111.21" r="2.6"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="36.74" cy="16.79" r="2.6"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="64" cy="32.71" r="4.72"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="64" cy="14.05" r="3.23"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="64" cy="95.29" r="4.72"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="64" cy="113.95" r="3.23"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="36.9" cy="48.36" r="4.72"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="20.74" cy="39.02" r="3.23"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="91.1" cy="79.64" r="4.72"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="107.26" cy="88.98" r="3.23"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="36.9" cy="79.64" r="4.72"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="20.74" cy="88.98" r="3.23"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="91.1" cy="48.36" r="4.72"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
              <circle cx="107.26" cy="39.02" r="3.23"
                  fill="#ffffff" className="color000000 svgShape">
              </circle>
          </svg>`,
        color: 'danger',
        chartOptions: MarketCapOptions({ color: "rgba(253, 73, 99,0.5)", opacitycolor1: "rgba(253, 73, 99,0.1)", opacitycolor2: "rgba(253, 73, 99,0.05)", opacitycolor3: "rgba(253, 73, 99,0.05)" }),
        chartSeries: MarketCapSeries
    },
    {
        id: 4,
        title: 'Etherium',
        text: 'ETH',
        percentage: '+0.23%',
        value: '5.327 ETH',
        svg1: `<svg xmlns="http://www.w3.org/2000/svg" 
          // xml:space="preserve"
              id="Ethereum" x="0" y="0" version="1.1"
              viewBox="0 0 128 128" className="crypto-main-icon">
              <path
                  d="M65.7 96.4V128l39.2-55.1zM103.4 62.7 65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7 62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z"
                  fill="#ffa909" className="color6d75b6 svgShape"></path>
          </svg>`,
        svg2: ` <svg xmlns="http://www.w3.org/2000/svg" width="32"
            height="32" fill="#ffffff"
            viewBox="0 0 256 256">
            <path d="M216,128,128,240,40,128l88,40Z"
                opacity="0.2"></path>
            <path
                d="M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,39.13l67.42,85.8L136,155.58ZM120,155.58,52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Zm16,0,53.43-24.29-53.43,68Z">
            </path>
        </svg>`,
        color: 'warning',
        chartOptions: MarketCapOptions({ color: "rgba(255, 169, 9,0.5)", opacitycolor1: "rgba(255, 169, 9,0.1)", opacitycolor2: "rgba(255, 169, 9,0.05)", opacitycolor3: "rgba(255, 169, 9,0.05)" }),
        chartSeries: MarketCapSeries
    },
]