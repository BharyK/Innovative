import type { ReactNode } from 'react';
import chrome from '../../../assets/images/browsers/chrome.png';
import edge from '../../../assets/images/browsers/edge.png';
import firfox from '../../../assets/images/browsers/firefox.png';
import opera from '../../../assets/images/browsers/opera.png';
import safari from '../../../assets/images/browsers/safari.png';
import Uc from '../../../assets/images/browsers/uc.png';
import jpg1 from '../../../assets/images/ecommerce/jpg/1.jpg';
import jpg2 from '../../../assets/images/ecommerce/jpg/2.jpg'
import jpg5 from '../../../assets/images/ecommerce/jpg/5.jpg';
import jpg6 from '../../../assets/images/ecommerce/jpg/6.jpg';
import jpg8 from '../../../assets/images/ecommerce/jpg/8.jpg';
import argentina from '../../../assets/images/flags/argentina_flag.jpg';
import canada from '../../../assets/images/flags/canada_flag.jpg';
import french from '../../../assets/images/flags/french_flag.jpg';
import germany from '../../../assets/images/flags/germany_flag.jpg';
import italy from '../../../assets/images/flags/italy_flag.jpg';
import mexico from '../../../assets/images/flags/mexico_flag.jpg';
import spain from '../../../assets/images/flags/spain_flag.jpg';
import usa from '../../../assets/images/flags/us_flag.jpg';


// Sales Revenue
export const SalesRevenueSeries = [
  {
    name: "Delivered",
    data: [
      10, 11, 14, 12, 18, 19, 15, 25, 30, 35, 40, 45, 75, 69, 74, 68, 73, 78, 83, 77, 107, 106, 136, 141, 146, 176, 206, 200, 230, 224, 199, 193, 223, 198, 173, 148, 149, 124, 99, 129, 130, 160, 190, 165, 195, 225, 219, 213, 243, 273, 267, 272, 266, 260, 265, 259, 264, 269, 274, 279, 284, 314, 344, 349, 343, 337, 331, 361, 355, 385, 390, 395, 389, 394, 399
    ],
    type: "area",
  },
  {
    name: 'Cancelled',
    data: [
      15, 40, 39, 33, 27, 57, 62, 92, 86, 116, 146, 145, 150, 155, 185, 190, 195, 189, 219, 224, 254, 248, 242, 247, 252, 282, 312, 287, 288, 263, 257, 287, 281, 256, 257, 251, 252, 227, 221, 196, 226, 227, 202, 177, 178, 172, 147, 177, 152, 127, 157, 187, 181, 186, 185, 184, 189, 188, 193, 223, 228, 233, 263, 268, 273, 267, 261, 260, 254, 284, 289, 294, 324, 329, 334
    ]
  }
]
export const SalesRevenueOptions = {
  chart: {
    type: "line",
    height: 337,
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 7,
      left: 0,
      blur: 1,
      color: ["rgba(127, 103, 257)", "var(--primary-color)",],
      opacity: 0.05,
    },
  },
  colors: [
    "rgba(127, 103, 257)",
    "var(--primary-color)",
  ],
  plotOptions: {
    bar: {
      columnWidth: "40%",
      borderRadius: 5,
      borderRadiusApplication: 'around',
      borderRadiusWhenStacked: 'all',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "top",
    offsetX: 0,
    offsetY: 8,
    markers: {
      size: 4,
      strokeWidth: 0,
      strokeColor: '#fff',
      fillColors: undefined,
      radius: 12,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0
    },
  },
  stroke: {
    curve: 'smooth',
    width: [1.8, 1.8],
    lineCap: 'round',
    dashArray: [0, 0],
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
            color: "rgba(127, 103, 257,0.1)",
            opacity: 0.1
          },
          {
            offset: 75,
            color: "rgba(127, 103, 257,0.1)",
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgba(127, 103, 257,0.1)',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: 'var(--primary-color)',
            opacity: 1
          },
          {
            offset: 75,
            color: 'var(--primary-color)',
            opacity: 1
          },
          {
            offset: 100,
            color: 'var(--primary-color)',
            opacity: 1
          }
        ],
      ]
    }
  },
  grid: {
    borderColor: "#f1f1f1",
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    tickAmount: 8,
    show: true,
    axisBorder: {
      show: true,
      color: 'rgba(119, 119, 142, 0.1)',
    },
    axisTicks: {
      show: true,
    }
  },
  xaxis: {
    show: true,
    tickAmount: 12,
    axisBorder: {
      show: false,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: 2,
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      show: true,
      rotate: 0,
    }
  },
}

// Visitors By Device
export const VisitorsByDeviceSeries = [18235, 12743, 8369, 16458]
export const VisitorsByDeviceOptions = {
  labels: ["Mobile", "Desktop", "Laptop", "Tablet"],
  chart: {
    height: 260,
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
            label: 'Total Visitors',
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

const SalesIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#00000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 8v12h14V8H5zm7 6c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z" opacity=".8" fill="#fff" /><path d="M17 6c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-2zm-5-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" /></svg>
const BgSalesIcon = <svg xmlns="http://www.w3.org/2000/svg" className="dash-svg" width="655.359" height="655.359" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 6.827 6.827" id="money"><path fill="var(--primary-color)" fillRule="nonzero" d="M3.413 5.966c-.1.006-2.19.1-2.165-1.428.015-.955.563-1.57 1.265-1.847.284-.111.592-.167.9-.167.308 0 .617.056.9.167.703.276 1.25.892 1.266 1.847.024 1.527-2.066 1.434-2.166 1.428zM1.407 4.54c-.021 1.348 1.875 1.273 1.996 1.267h.015c.014 0 2.024.12 2.002-1.267-.014-.88-.519-1.446-1.164-1.7a2.31 2.31 0 0 0-.843-.156 2.31 2.31 0 0 0-.842.156c-.646.254-1.15.82-1.164 1.7z"></path><path fill="var(--primary-color)" fillRule="nonzero" d="M2.831 2.657a.08.08 0 0 0 .16-.004c-.019-.664-.304-1.056-.49-1.242l.531-.038a.08.08 0 0 0 .068-.049c.075-.146.161-.242.25-.287a.25.25 0 0 1 .113-.028.25.25 0 0 1 .114.028c.09.046.176.143.252.292a.08.08 0 0 0 .07.044l.527.038c-.186.186-.472.578-.49 1.242a.08.08 0 0 0 .16.004c.022-.851.511-1.203.568-1.24a.08.08 0 0 0-.032-.15l-.682-.05a.756.756 0 0 0-.301-.322.407.407 0 0 0-.186-.046.407.407 0 0 0-.185.046.756.756 0 0 0-.301.322l-.678.049a.08.08 0 0 0-.042.147c.002.001.55.342.574 1.244z"></path><path fill="var(--primary-color)" fillRule="nonzero" d="M2.687 1.785a.08.08 0 0 0 .064.146c.11-.05.365-.115.692-.117.222-.002.476.027.74.111a.08.08 0 0 0 .049-.152 2.563 2.563 0 0 0-.79-.118 2.083 2.083 0 0 0-.755.13zM3.4 5.18v-.186a.683.683 0 0 1-.226-.062.396.396 0 0 1-.15-.145.518.518 0 0 1-.074-.244l.186-.035c.015.1.04.172.077.22a.269.269 0 0 0 .187.11v-.591a.776.776 0 0 1-.234-.09.344.344 0 0 1-.136-.136.407.407 0 0 1-.048-.2c0-.131.047-.238.14-.32A.487.487 0 0 1 3.4 3.4v-.089h.11v.089c.108.01.194.042.257.095a.42.42 0 0 1 .146.277l-.192.029a.315.315 0 0 0-.069-.168.252.252 0 0 0-.142-.077v.536c.093.023.155.042.185.055a.457.457 0 0 1 .142.092c.036.037.064.08.084.13.02.05.03.105.03.163a.449.449 0 0 1-.441.46v.188H3.4zm0-1.626a.274.274 0 0 0-.17.087.242.242 0 0 0-.063.166.24.24 0 0 0 .053.159.366.366 0 0 0 .18.102v-.514zm.11 1.283a.275.275 0 0 0 .179-.093.29.29 0 0 0 .07-.2.25.25 0 0 0-.05-.162.434.434 0 0 0-.2-.11v.565z"></path><path fill="var(--primary01)" d="m2.95 4.544.187-.035c.015.1.04.172.077.22a.269.269 0 0 0 .187.11v-.591a.776.776 0 0 1-.234-.09.344.344 0 0 1-.136-.136.407.407 0 0 1-.048-.2c0-.131.047-.238.14-.32A.487.487 0 0 1 3.4 3.4v-.089h.11v.089c.108.01.194.042.257.095a.42.42 0 0 1 .146.277l-.192.029a.315.315 0 0 0-.069-.168.252.252 0 0 0-.142-.077v.536c.093.023.155.042.185.055a.457.457 0 0 1 .142.092c.036.037.064.08.084.13.02.05.03.105.03.163a.449.449 0 0 1-.441.46v.188H3.4v-.186a.683.683 0 0 1-.226-.062.396.396 0 0 1-.15-.145.518.518 0 0 1-.074-.244zM2.572 2.84c-.646.254-1.15.82-1.164 1.7-.021 1.348 1.875 1.273 1.996 1.267h.015c.014 0 2.024.12 2.002-1.267-.014-.88-.519-1.446-1.164-1.7a2.31 2.31 0 0 0-.843-.156 2.31 2.31 0 0 0-.842.156z"></path><path fill="var(--primary01)" d="M3.221 3.967a.366.366 0 0 0 .18.102v-.514a.274.274 0 0 0-.17.087.242.242 0 0 0-.063.166.24.24 0 0 0 .053.159zm.29.306v.565a.275.275 0 0 0 .179-.093.29.29 0 0 0 .07-.2.25.25 0 0 0-.05-.162.434.434 0 0 0-.2-.11z"></path><path fill="var(--custom-white)" d="M3.413 2.524c.177 0 .354.018.526.055.016-.274.078-.499.158-.68a2.416 2.416 0 0 0-.654-.085c-.264.001-.48.045-.612.087.077.177.137.395.155.659.14-.024.284-.036.427-.036z"></path><path fill="var(--primary01)" d="M3.442 1.655a2.57 2.57 0 0 1 .727.1c.085-.154.18-.267.257-.344l-.528-.038a.08.08 0 0 1-.07-.044c-.075-.15-.162-.246-.251-.292a.25.25 0 0 0-.114-.028.25.25 0 0 0-.113.028c-.089.045-.175.14-.25.287a.08.08 0 0 1-.068.049l-.531.038c.077.078.173.191.258.346.144-.049.388-.1.683-.102z"></path><path fill="none" d="M0 0h6.827v6.827H0z"></path></svg>
const SaleIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#00000"><g>  <rect fill="none" height="24" width="24" /></g><g>  <g>    <path d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8s8-3.59,8-8C20,7.59,16.41,4,12,4z M12.88,17.76V19h-1.75v-1.29c-0.74-0.18-2.39-0.77-3.02-2.96l1.65-0.67c0.06,0.22,0.58,2.09,2.4,2.09c0.93,0,1.98-0.48,1.98-1.61 c0-0.96-0.7-1.46-2.28-2.03c-1.1-0.39-3.35-1.03-3.35-3.31c0-0.1,0.01-2.4,2.62-2.96V5h1.75v1.24c1.84,0.32,2.51,1.79,2.66,2.23 l-1.58,0.67c-0.11-0.35-0.59-1.34-1.9-1.34c-0.7,0-1.81,0.37-1.81,1.39c0,0.95,0.86,1.31,2.64,1.9c2.4,0.83,3.01,2.05,3.01,3.45 C15.9,17.17,13.4,17.67,12.88,17.76z" enableBackground="new" opacity=".8" fill="#fff" />    <path d="M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67 c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96c0,2.27,2.25,2.91,3.35,3.31 c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75c0.63,2.19,2.28,2.78,3.02,2.96 V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z" />    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z" />  </g></g></svg>
const BgSaleIcon = <svg xmlns="http://www.w3.org/2000/svg" className="dash-svg" xmlSpace="preserve" width="655.359" height="655.359" viewBox="0 0 6.827 6.827" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" id="breifcase"><g id="Layer_x0020_1">  <path d="M2.374 1.95H1.63a.742.742 0 0 0-.744.744V4.77a.742.742 0 0 0 .744.744h3.564a.742.742 0 0 0 .745-.744V2.694a.742.742 0 0 0-.745-.744h-.742l-.004-.029a.71.71 0 0 0-.704-.608h-.664a.709.709 0 0 0-.703.608l-.004.029zM1.089 3.187c.257.207.644.325.964.393.213.046.43.077.648.098a7.303 7.303 0 0 0 1.409-.003 5.89 5.89 0 0 0 .663-.1c.19-.041.38-.093.56-.165a1.56 1.56 0 0 0 .405-.223l.054-.044V4.72H1.034V3.143l.055.044zm4.696-.252c-.202.248-.633.395-.934.473-.228.06-.46.101-.694.13a6.902 6.902 0 0 1-1.487.02 4.632 4.632 0 0 1-.671-.113c-.334-.084-.734-.236-.957-.51l-.008-.01v-.23a.595.595 0 0 1 .597-.598h3.564a.595.595 0 0 1 .597.597v.232l-.007.009zM2.53 1.909a.564.564 0 0 1 .551-.449h.664a.561.561 0 0 1 .552.45l.008.04H2.522l.008-.04zM1.041 4.868h4.745l-.01.04a.597.597 0 0 1-.58.458H1.63a.595.595 0 0 1-.58-.457l-.01-.041z" fill="#7f67ff"></path>  <path d="M5.195 2.097H1.631a.595.595 0 0 0-.597.597v.232l.008.009c.223.274.623.426.957.51.22.056.445.091.671.114a6.902 6.902 0 0 0 1.487-.02c.233-.03.466-.071.694-.13.301-.079.732-.226.934-.474l.007-.01v-.23a.595.595 0 0 0-.597-.598z" fill="rgba(127, 103, 257,0.1)"></path>  <path d="M4.11 3.675a7.467 7.467 0 0 1-1.41.003 5.607 5.607 0 0 1-.647-.098c-.32-.068-.707-.186-.964-.393l-.055-.044V4.72h4.758V3.143l-.054.044a1.56 1.56 0 0 1-.405.223c-.18.072-.37.124-.56.164a5.89 5.89 0 0 1-.663.1z" fill="var(--custom-white)"></path>  <path d="M5.786 4.868H1.04l.01.04a.597.597 0 0 0 .58.458h3.564a.595.595 0 0 0 .58-.457l.01-.041z" fill="rgba(127, 103, 257,0.1)"></path></g><path d="M0 0h6.827v6.827H0z" fill="none"></path></svg>
const RevenueIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#00000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13 17c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6V5H5v14h14v-2h-6z" opacity=".8" fill="#fff" /><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" /><circle cx="16" cy="12" r="1.5" /></svg>
const BgRevenueIcon = <svg xmlns="http://www.w3.org/2000/svg" className="dash-svg op-svg" xmlSpace="preserve" width="655.359" height="655.359" viewBox="0 0 6.827 6.827" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" id="coin"><g id="Layer_x0020_1">  <path d="M3.413.853c.707 0 1.347.287 1.81.75.464.463.75 1.103.75 1.81 0 .707-.286 1.347-.75 1.81a2.552 2.552 0 0 1-1.81.75 2.552 2.552 0 0 1-1.81-.75 2.552 2.552 0 0 1-.75-1.81c0-.707.287-1.347.75-1.81a2.552 2.552 0 0 1 1.81-.75zm1.697.863a2.392 2.392 0 0 0-1.697-.703c-.662 0-1.262.269-1.697.703a2.392 2.392 0 0 0-.703 1.697c0 .663.269 1.263.703 1.697a2.392 2.392 0 0 0 1.697.703c.663 0 1.263-.268 1.697-.703a2.392 2.392 0 0 0 .703-1.697c0-.662-.268-1.262-.703-1.697z" fill="#fd4963" fillRule="nonzero"></path>  <path d="M3.396 4.752v-.266a.978.978 0 0 1-.324-.089.568.568 0 0 1-.216-.208.742.742 0 0 1-.106-.35l.268-.05c.02.142.057.247.11.314a.385.385 0 0 0 .268.158v-.846a1.112 1.112 0 0 1-.335-.127.493.493 0 0 1-.196-.197.583.583 0 0 1-.069-.285c0-.19.067-.343.201-.46.09-.079.223-.127.4-.144v-.128h.156v.128c.154.014.278.06.368.135a.603.603 0 0 1 .21.398l-.275.041a.452.452 0 0 0-.099-.24.36.36 0 0 0-.204-.11v.767c.134.034.223.06.266.079.083.036.15.08.202.132a.532.532 0 0 1 .12.186c.029.073.043.15.043.234a.643.643 0 0 1-.176.461.644.644 0 0 1-.455.198v.27h-.157zm0-2.329a.393.393 0 0 0-.244.124.347.347 0 0 0-.09.238c0 .09.025.167.076.228.051.06.137.11.258.146v-.736zm.157 1.838a.394.394 0 0 0 .256-.134.416.416 0 0 0 .102-.285.359.359 0 0 0-.072-.233c-.048-.058-.143-.11-.286-.157v.81z" fill="#fd4963" fillRule="nonzero"></path>  <path d="M3.413 1.27c.592 0 1.128.24 1.515.628.388.388.628.924.628 1.515 0 .592-.24 1.128-.628 1.515a2.136 2.136 0 0 1-1.515.628c-.591 0-1.127-.24-1.515-.628a2.136 2.136 0 0 1-.627-1.515c0-.591.24-1.127.627-1.515a2.136 2.136 0 0 1 1.515-.627zm1.402.741a1.976 1.976 0 0 0-1.402-.58c-.547 0-1.043.222-1.402.58-.358.36-.58.855-.58 1.402 0 .548.222 1.043.58 1.402.36.359.855.58 1.402.58.548 0 1.043-.221 1.402-.58s.58-.854.58-1.402c0-.547-.221-1.043-.58-1.402z" fill="#fd4963" fillRule="nonzero"></path>  <g id="_240190592">    <path id="_240191288" d="M3.396 3.16v-.737a.393.393 0 0 0-.244.124.347.347 0 0 0-.09.238c0 .09.025.167.076.228.051.06.137.11.258.146z" fill="var(--custom-white)"></path>    <path id="_240191240" d="M3.84 3.61c-.049-.06-.144-.112-.287-.158v.81a.394.394 0 0 0 .256-.135.416.416 0 0 0 .102-.285.359.359 0 0 0-.072-.233z" fill="var(--custom-white)"></path>    <path id="_240191216" d="M3.819 3.272c.083.036.15.08.202.132a.532.532 0 0 1 .12.186c.029.073.043.15.043.234a.643.643 0 0 1-.176.461.644.644 0 0 1-.455.198v.27h-.157v-.267a.978.978 0 0 1-.324-.089.568.568 0 0 1-.216-.208.742.742 0 0 1-.106-.35l.268-.05c.02.142.057.247.11.314a.385.385 0 0 0 .268.158v-.846a1.112 1.112 0 0 1-.335-.127.493.493 0 0 1-.196-.197.583.583 0 0 1-.069-.285c0-.19.067-.343.201-.46.09-.079.223-.127.4-.144v-.128h.156v.128c.154.014.278.06.368.135a.603.603 0 0 1 .21.398l-.275.041a.452.452 0 0 0-.099-.24.36.36 0 0 0-.204-.11v.767c.134.034.223.06.266.079zm.996-1.26a1.976 1.976 0 0 0-1.402-.581c-.547 0-1.043.222-1.402.58-.358.36-.58.855-.58 1.402 0 .548.222 1.043.58 1.402.36.359.855.58 1.402.58.548 0 1.043-.221 1.402-.58s.58-.854.58-1.402c0-.547-.221-1.043-.58-1.402z" fill="var(--custom-white)"></path>  </g>  <path d="M3.413 1.27c.592 0 1.128.24 1.515.628.388.388.628.924.628 1.515 0 .592-.24 1.128-.628 1.515a2.136 2.136 0 0 1-1.515.628c-.591 0-1.127-.24-1.515-.628a2.136 2.136 0 0 1-.627-1.515c0-.591.24-1.127.627-1.515a2.136 2.136 0 0 1 1.515-.627zm1.697.446a2.392 2.392 0 0 0-1.697-.703c-.662 0-1.262.269-1.697.703a2.392 2.392 0 0 0-.703 1.697c0 .663.269 1.263.703 1.697a2.392 2.392 0 0 0 1.697.703c.663 0 1.263-.268 1.697-.703a2.392 2.392 0 0 0 .703-1.697c0-.662-.268-1.262-.703-1.697z" fill="rgba(253, 73, 99,0.1)"></path></g><path d="M0 0h6.827v6.827H0z" fill="none"></path></svg>
const CustomersIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#00000"><g>  <rect fill="none" height="24" width="24" /></g><g>  <g>    <path d="M12 4c-4.42 0-8 3.58-8 8 0 1.95.7 3.73 1.86 5.12C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C19.3 15.73 20 13.95 20 12c0-4.42-3.58-8-8-8zm0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13z" enableBackground="new" opacity=".8" fill="#fff" />    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5zm6.14-2.88C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z" />    <path d="M12 5.93c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />  </g></g></svg>
const BgCustomersIcon = <svg xmlns="http://www.w3.org/2000/svg" className="dash-svg" width="655.359" height="655.359" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 6.827 6.827" id="bank"><path fill="#f7a102" fillRule="nonzero" d="M1.487 4.695a.08.08 0 0 0 0 .16H5.34a.08.08 0 0 0 0-.16H1.487zm-.243.345a.08.08 0 0 0 0 .16h4.34a.08.08 0 0 0 0-.16h-4.34zm-.31.345a.08.08 0 0 0 0 .16h4.96a.08.08 0 0 0 0-.16H.933zM2.034 2.82h.46a.08.08 0 0 1 .08.08v1.544a.08.08 0 0 1-.08.08h-.46a.08.08 0 0 1-.08-.08V2.9a.08.08 0 0 1 .08-.08zm.38.16h-.3v1.384h.3V2.98zm.79-.16h.46a.08.08 0 0 1 .08.08v1.544a.08.08 0 0 1-.08.08h-.46a.08.08 0 0 1-.08-.08V2.9a.08.08 0 0 1 .08-.08zm.38.16h-.3v1.384h.3V2.98zm.79-.16h.46a.08.08 0 0 1 .08.08v1.544a.08.08 0 0 1-.08.08h-.46a.08.08 0 0 1-.08-.08V2.9a.08.08 0 0 1 .08-.08zm.38.16h-.3v1.384h.3V2.98zM3.482 1.298l1.824 1.205a.08.08 0 0 1-.045.147H1.606a.08.08 0 0 1-.04-.15l1.825-1.205.044.067-.044-.067a.08.08 0 0 1 .092.003zM4.997 2.49 3.435 1.458 1.872 2.49h3.125z"></path><path fill="#f7a102" fillRule="nonzero" d="M3.435 1.737a.303.303 0 0 1 .215.519.303.303 0 0 1-.52-.215.303.303 0 0 1 .305-.304zm.102.202a.144.144 0 0 0-.246.102.144.144 0 0 0 .246.102.144.144 0 0 0 0-.204z"></path><path fill="rgba(255, 169, 9,0.1)" d="M3.13 2.041a.303.303 0 0 1 .52-.215.303.303 0 0 1-.215.519.303.303 0 0 1-.304-.304zm1.867.449L3.435 1.458 1.872 2.49h3.125z"></path><path fill="var(--custom-white)" d="M3.333 1.94a.144.144 0 0 0 .102.245.144.144 0 0 0 .102-.246.144.144 0 0 0-.204 0zM3.585 2.98h-.3v1.384h.3zM4.454 2.98v1.384h.3V2.98zM2.415 4.364V2.98h-.3v1.384z"></path><path fill="none" d="M0 0h6.827v6.827H0z"></path></svg>

export interface SalesDataRow1Type {
  id: number;
  title: string;
  value: string;
  percentage: string;
  arrow: string;
  avatarClass: string;
  svgIcon: ReactNode;
  bgsvg: ReactNode;
};
export const SalesDataRow1: SalesDataRow1Type[] = [
  { id: 1, title: "Number Of Sales", value: "12,432", percentage: "2.5%", arrow: "up", avatarClass: "primary", svgIcon: SalesIcon, bgsvg: BgSalesIcon },
  { id: 2, title: "Profit By Sale", value: "$4,132", percentage: "1.5%", arrow: "up", avatarClass: "secondary", svgIcon: SaleIcon, bgsvg: BgSaleIcon },
  { id: 3, title: 'Total Revenue', value: '$15,482', percentage: '3.4%', arrow: 'down', avatarClass: 'danger', svgIcon: RevenueIcon, bgsvg: BgRevenueIcon },
  { id: 4, title: 'Total Customers', value: '3,532', percentage: '4.5%', arrow: 'down', avatarClass: 'warning', svgIcon: CustomersIcon, bgsvg: BgCustomersIcon },
]

interface BrowserActivityType {
  id: number;
  browsername: string;
  company: string;
  session: string;
  bouncerate: string;
  src: string;
};

export const BrowserActivity: BrowserActivityType[] = [
  { id: 1, browsername: "Google", company: "Google,Inc", session: "1,215", bouncerate: "29.52%", src: chrome },
  { id: 2, browsername: "Edge", company: "Microsoft.Inc", session: "978", bouncerate: "24.79%", src: edge },
  { id: 3, browsername: "Firefox", company: "Mozilla,Inc", session: "815", bouncerate: "35.06%", src: firfox },
  { id: 4, browsername: "Opera", company: "Opera,Inc", session: "1,347", bouncerate: "27.91%", src: opera },
  { id: 5, browsername: "Safari", company: "Apple Corp,Inc", session: "1,123", bouncerate: "39.13%", src: safari },
  { id: 6, browsername: "Uc Browser", company: "Uc Browser,Inc", session: "1,189", bouncerate: "28.94%", src: Uc }
]

type VisitorsByDeviceType = {
  id: number;
  devicetype: string;
  percentage: string;
  visiterscount: string;
  color: string;
};
export const VisitorsByDevice: VisitorsByDeviceType[] = [
  { id: 1, devicetype: "Mobile", percentage: "0.78%", visiterscount: "18,235", color: 'primary' },
  { id: 2, devicetype: "Desktop", percentage: "1.57%", visiterscount: "12,743", color: 'secondary' },
  { id: 3, devicetype: "Laptop", percentage: "0.32%", visiterscount: "8,369", color: 'danger' },
  { id: 4, devicetype: "Tablet", percentage: "19.45%", visiterscount: "16,458", color: 'warning' },
]

type RevenueChannelsType = {
  id: number;
  channelname: string;
  generatedincome: string;
  percentage: string;
  progress: string;
  icon: string;
  color: string;
};
export const RevenueChannels: RevenueChannelsType[] = [
  { id: 1, channelname: "Google Ads", generatedincome: "$25,000", percentage: "3.5%", progress: "25%", icon: 'brand-google', color: 'primary' },
  { id: 2, channelname: "Facebook Ads", generatedincome: "$15,000", percentage: "2.8%", progress: "24%", icon: 'brand-facebook', color: 'secondary' },
  { id: 3, channelname: "Email Marketing", generatedincome: "$6,500", percentage: "3.0%", progress: "27%", icon: 'mail', color: 'danger' },
  { id: 4, channelname: "Referral Traffic", generatedincome: "$4,000", percentage: "2.5%", progress: "15%", icon: 'share-3', color: 'warning' },
  { id: 5, channelname: "Direct Traffic", generatedincome: "$8,000", percentage: "4.0%", progress: "18%", icon: 'arrow-big-right', color: 'info' },
]

type RecentTransactionsType = {
  id: number;
  paymentmethod: string;
  paymentmode: string;
  payamout: string;
  paydate: string;
  icon: string;
  color: string;
};
export const RecentTransactions: RecentTransactionsType[] = [
  { id: 1, paymentmethod: "UPI Payment", paymentmode: "Online Transaction", payamout: "$1,234.78", paydate: "Nov 22,2024", icon: 'ti ti-cash', color: 'primary' },
  { id: 2, paymentmethod: "Digital Wallet", paymentmode: "Online Transaction", payamout: "$623.99", paydate: "Nov 22,2024", icon: 'ti ti-wallet', color: 'secondary' },
  { id: 3, paymentmethod: "Mastro Card ****7893", paymentmode: "Card Payment", payamout: "$1,324", paydate: "Nov 21,2024", icon: 'ri-mastercard-line', color: 'danger' },
  { id: 4, paymentmethod: "Cash On Delivery", paymentmode: "Pay On Delivery", payamout: "$1,123.49", paydate: "Nov 20,2024", icon: 'ti ti-currency-dollar', color: 'warning' },
  { id: 5, paymentmethod: "UPI Payment", paymentmode: "Online Transaction", payamout: "$1,234.78", paydate: "Nov 22,2024", icon: 'ti ti-cash', color: 'info' },
  { id: 6, paymentmethod: "Visa Card ****2563", paymentmode: "Card Payment", payamout: "$1,289", paydate: "Nov 18,2024", icon: 'ri-visa-line', color: 'orange' },
]

type UpcomingSalesType = {
  id: number;
  saledate: string;
  saleyear: string;
  salename: string;
  saleoffer: string;
  salepalceandcustomers: string;
  color: string;
};
export const UpcomingSales: UpcomingSalesType[] = [
  { id: 1, saledate: "Nov, 24", saleyear: "2024", salename: "Black Friday Sale ", saleoffer: "Up to 70% off", salepalceandcustomers: "Online & In-Store - All Customers", color: "primary" },
  { id: 2, saledate: "Dec, 20", saleyear: "2024", salename: "Holiday Blowout Sale ", saleoffer: "Flat 40% off", salepalceandcustomers: "Online Exclusive - VIP Members", color: "orange" },
  { id: 3, saledate: "June, 10", saleyear: "2024", salename: "Summer Clearance ", saleoffer: "Up to 50% off", salepalceandcustomers: "In-Store Only - All Customers", color: "pink" },
  { id: 4, saledate: "Oct, 15", saleyear: "2024", salename: "Flash Electronics Sale ", saleoffer: "Buy 1 Get 1 Free", salepalceandcustomers: "Online & In-Store - All Customers", color: "info" },
  { id: 5, saledate: "Aug, 01", saleyear: "2024", salename: "Back to School Sale ", saleoffer: "Up to 30% off", salepalceandcustomers: "Online Exclusive - All Customers", color: "secondary" }
]

type RecentOrdersType = {
  id: number;
  ordereditem: string;
  orderedbrand: string;
  ordereddate: string;
  orderedtime: string;
  totalitems: string;
  status: string;
  totalamount: string;
  paymentmethod: string;
  paymentmethoddetails: string;
  statusclass: string;
  image: string;
};
export const RecentOrders: RecentOrdersType[] = [
  { id: 1, image: jpg1, ordereditem: "Samsung Headset", orderedbrand: "Accusam Brand", ordereddate: "2024-10-08", orderedtime: "11:26AM", totalitems: "12", status: "Cancelled", totalamount: "$85.00", paymentmethod: "American Express", paymentmethoddetails: "****** 10005", statusclass: "danger" },
  { id: 2, image: jpg2, ordereditem: "Ladies Bag", orderedbrand: "Vellintn Brand", ordereddate: "2024-10-05", orderedtime: "12:45PM", totalitems: "9", status: "Shipped", totalamount: "$150.00", paymentmethod: "Credit Card", paymentmethoddetails: "**** **** 1111", statusclass: "secondary" },
  { id: 3, image: jpg6, ordereditem: "Flower Pot", orderedbrand: "Top Brand", ordereddate: "2024-10-06", orderedtime: "10:15AM", totalitems: "16", status: "Pending", totalamount: "	$230.00", paymentmethod: "MasterCard", paymentmethoddetails: "**** **** 4444", statusclass: "warning" },
  { id: 4, image: jpg5, ordereditem: "Wooden Sofa Set", orderedbrand: "Erat Brand", ordereddate: "2024-10-07", orderedtime: "04:53PM", totalitems: "5", status: "Delivered", totalamount: "$120.00", paymentmethod: "Bank Transfer", paymentmethoddetails: "Direct Payment", statusclass: "primary" },
  { id: 5, image: jpg8, ordereditem: "Lilly Soft Candles", orderedbrand: "Boalt Audio", ordereddate: "2024-10-09", orderedtime: "03:29PM", totalitems: "3", status: "Shipped", totalamount: "$500.00", paymentmethod: "PayPal", paymentmethoddetails: "PayPal App", statusclass: "secondary" }
]

type TopCategoriesBySalesType = {
  id: number;
  category: string;
  totalsales: string;
  increasedBy: string;
  iconClass: string;
  svg: ReactNode;
};
export const TopCategoriesBySales: TopCategoriesBySalesType[] = [
  {
    id: 1,
    category: "Electronics",
    totalsales: "8,14,233",
    increasedBy: "5.36%",
    iconClass: "primary",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"> <rect fill="none" height="24" width="24" y="0"></rect> <path d="M14.5,9.5C14.5,6.47,12.03,4,9,4S3.5,6.47,3.5,9.5c0,2.47,1.49,3.89,2.35,4.5h6.3 C13.01,13.39,14.5,11.97,14.5,9.5z" opacity=".7" fill="#fff"></path> <path d="M7,20h4c0,1.1-0.9,2-2,2S7,21.1,7,20z M5,19h8v-2H5V19z M16.5,9.5c0,3.82-2.66,5.86-3.77,6.5H5.27 C4.16,15.36,1.5,13.32,1.5,9.5C1.5,5.36,4.86,2,9,2S16.5,5.36,16.5,9.5z M14.5,9.5C14.5,6.47,12.03,4,9,4S3.5,6.47,3.5,9.5 c0,2.47,1.49,3.89,2.35,4.5h6.3C13.01,13.39,14.5,11.97,14.5,9.5z M21.37,7.37L20,8l1.37,0.63L22,10l0.63-1.37L24,8l-1.37-0.63L22,6 L21.37,7.37z M19,6l0.94-2.06L22,3l-2.06-0.94L19,0l-0.94,2.06L16,3l2.06,0.94L19,6z"></path> </svg>)
  },
  {
    id: 2,
    category: "Fashion",
    totalsales: "12,865",
    increasedBy: "5.36%",
    iconClass: "secondary",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g>  <rect fill="none" height="24" width="24" />  <path d="M18 20H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" opacity=".7" fill="#fff" />  <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" /></g></svg>)
  },
  {
    id: 3,
    category: "Toys",
    totalsales: "34,753",
    increasedBy: "5.36%",
    iconClass: "danger",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g>  <rect fill="none" height="24" width="24" y="0" /></g><g>  <g>    <path d="M18,7H6v12h12V7z M7.5,11.5C7.5,10.67,8.17,10,9,10s1.5,0.67,1.5,1.5S9.83,13,9,13S7.5,12.33,7.5,11.5z M16,17H8v-2h8V17z M15,13c-0.83,0-1.5-0.67-1.5-1.5S14.17,10,15,10s1.5,0.67,1.5,1.5S15.83,13,15,13z" opacity=".7" fill="#fff" />    <rect height="2" width="8" x="8" y="15" />    <path d="M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9,3.34,9,5H6C4.9,5,4,5.9,4,7v2c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3v4 c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c1.66,0,3-1.34,3-3C23,10.34,21.66,9,20,9z M18,19H6V7h12V19z" />    <circle cx="15" cy="11.5" r="1.5" />    <circle cx="9" cy="11.5" r="1.5" />  </g></g></svg>)
  },
  {
    id: 4,
    category: "Books",
    totalsales: "1,58,156",
    increasedBy: "7.45%",
    iconClass: "warning",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g>  <rect fill="none" height="24" width="24" /></g><g>  <g />  <g>    <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M3,18.5V7 c1.1-0.35,2.3-0.5,3.5-0.5c1.34,0,3.13,0.41,4.5,0.99v11.5C9.63,18.41,7.84,18,6.5,18C5.3,18,4.1,18.15,3,18.5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.34,0-3.13,0.41-4.5,0.99V7.49c1.37-0.59,3.16-0.99,4.5-0.99c1.2,0,2.4,0.15,3.5,0.5V18.5z" />    <path d="M11,7.49C9.63,6.91,7.84,6.5,6.5,6.5C5.3,6.5,4.1,6.65,3,7v11.5C4.1,18.15,5.3,18,6.5,18 c1.34,0,3.13,0.41,4.5,0.99V7.49z" opacity=".7" fill="#fff" />  </g>  <g>    <path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,10.69,16.18,10.5,17.5,10.5z" />    <path d="M17.5,13.16c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,13.36,16.18,13.16,17.5,13.16z" />    <path d="M17.5,15.83c0.88,0,1.73,0.09,2.5,0.26v-1.52c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,16.02,16.18,15.83,17.5,15.83z" />  </g></g></svg>)
  }
]

type TopAudienceLocationsType = {
  id: number;
  countryname: string;
  populationpercentage: string;
  viewerspercentage: string;
  totalviewers: string;
  viewerspercenttagecolor: string;
  image: string;
  borderClass?: string
};
export const TopAudienceLocations: TopAudienceLocationsType[] = [
  { id: 1, image: usa, countryname: "United States", populationpercentage: "17.864%", viewerspercentage: "12.86%", totalviewers: "1,32,190", viewerspercenttagecolor: "danger" },
  { id: 2, image: germany, countryname: "Germany", populationpercentage: "16.984%", viewerspercentage: "2.76%", totalviewers: "5,86,486", viewerspercenttagecolor: "primary" },
  { id: 4, image: french, countryname: "French", populationpercentage: "27.856%", viewerspercentage: "13.73%", totalviewers: "9,75,586", viewerspercenttagecolor: "primary" },
  { id: 5, image: canada, countryname: "Canada", populationpercentage: "12.957%", viewerspercentage: "11.86%", totalviewers: "4,32,767", viewerspercenttagecolor: "primary" },
  { id: 6, image: spain, countryname: "Spain", populationpercentage: "19.768%", viewerspercentage: "11.86%", totalviewers: "7,32,767", viewerspercenttagecolor: "primary" },
  { id: 7, image: argentina, countryname: "Argentina", populationpercentage: "36.870%", viewerspercentage: "4.76%", totalviewers: "7,19,864", viewerspercenttagecolor: "danger" },
  { id: 8, image: italy, countryname: "Italy", populationpercentage: "36.870%", viewerspercentage: "12.76%", totalviewers: "6,65,879", viewerspercenttagecolor: "primary" },
  { id: 9, image: mexico, countryname: "Mexico", populationpercentage: "32.758%", viewerspercentage: "5.76%", totalviewers: "2,32,767", viewerspercenttagecolor: "danger", borderClass: "border-bottom-0" }
]