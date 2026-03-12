import SpkEcommersSwiper from "./spkecommersswiper"
import jpg1 from '../../../assets/images/ecommerce/jpg/1.jpg';
import jpg2 from '../../../assets/images/ecommerce/jpg/2.jpg';
import jpg3 from '../../../assets/images/ecommerce/jpg/3.jpg';
import jpg4 from '../../../assets/images/ecommerce/jpg/4.jpg';
import jpg5 from '../../../assets/images/ecommerce/jpg/5.jpg';
import jpg6 from '../../../assets/images/ecommerce/jpg/6.jpg';
import jpg7 from '../../../assets/images/ecommerce/jpg/7.jpg';
import jpg8 from '../../../assets/images/ecommerce/jpg/8.jpg';
import jpg11 from '../../../assets/images/ecommerce/jpg/11.jpg';
import png12 from '../../../assets/images/ecommerce/png/12.png';
import png14 from '../../../assets/images/ecommerce/png/14.png';
import png15 from '../../../assets/images/ecommerce/png/15.png';
import png16 from '../../../assets/images/ecommerce/png/16.png';
import png19 from '../../../assets/images/ecommerce/png/19.png';
import png20 from '../../../assets/images/ecommerce/png/20.png';
import png25 from '../../../assets/images/ecommerce/png/25.png';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import type { ReactNode } from "react";

// Monthly Income
export const MonthlyIncomeSeries = [{
  name: 'Revenue',
  type: 'area',
  data: [40, 45, 22, 22, 35, 35, 50, 65, 50, 56, 34, 57],
}, {
  name: 'Expenses',
  data: [20, 46, 46, 28, 28, 55, 30, 45, 60, 30, 46, 16],
  type: 'line',
}, {
  name: 'Profit',
  data: [20, 36, 46, 28, 28, 35, 20, 35, 22, 30, 36, 36],
  type: 'bar',
}]
export const MonthlyIncomeOptions = {
  chart: {
    height: 385,
    toolbar: false
  },
  grid: {
    borderColor: '#f2f6f7',
    strokeDashArray: 5,
  },
  colors: ["var(--primary-color)", "rgba(253, 73, 99,1)", "rgba(127, 103, 257, 1)",],
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
  plotOptions: {
    bar: {
      columnWidth: '25%',
      borderRadius: "2",
    }
  },
  stroke: {
    curve: ["smooth", "straight", "smooth"],
    width: [2, 2, 0],
    dashArray: [0, 4, 0],
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
      colorStops: [
        [
          {
            offset: 0,
            color: "rgba(3, 181, 98,0.1)",
            opacity: 1
          },
          {
            offset: 50,
            color: "rgba(3, 181, 98,0.1)",
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgba(3, 181, 98,0.1)',
            opacity: 0.5
          }
        ],
        [
          {
            offset: 0,
            color: "rgb(253, 73, 99)",
            opacity: 1
          },
          {
            offset: 50,
            color: "rgb(253, 73, 99)",
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgb(253, 73, 99)',
            opacity: 1
          }
        ],
        [
          {
            offset: 0,
            color: "rgba(127, 103, 257,1)",
            opacity: 1
          },
          {
            offset: 50,
            color: "rgba(127, 103, 257,1)",
            opacity: 1
          },
          {
            offset: 100,
            color: 'rgba(127, 103, 257,1)',
            opacity: 1
          }
        ],
      ],
    },
  },
  yaxis: {
    title: {
      style: {
        color: '#adb5be',
        fontSize: '12px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        cssClass: 'apexcharts-yaxis-label',
      },
    },
    // labels: {
    //     formatter: function (y) {
    //         return y.toFixed(0) + "";
    //     }
    // }
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
  }
}

// Top Selling Categories
export const TopSellingCategoriesSeries = [18235, 12743, 8369, 16458]
export const TopSellingCategoriesOptions = {
  labels: ["Electronics", "Fashion Trends", "Entertainment", "Home Decoration"],
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
            formatter: function (val: string) {
              return val + "%"
            }
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Top Categories',
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

export interface CardsType {
  id: number;
  title: string;
  count: string;
  status: string;
  percentage: string;
  percentageBg: string;
  svg: ReactNode;
  svgColor: string;
  wrapperTextColor: string;
  wrapperBorder: string;
}
export const Cards: CardsType[] = [
  {
    id: 1,
    title: "Total Orders",
    count: "35,367",
    status: "increased by",
    percentage: "+ 2.3%",
    percentageBg: "primary-transparent",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#00000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.55 11l2.76-5H6.16l2.37 5z" fill="#fff"
          opacity=".8" />
        <path
          d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    ),
    svgColor: "primary",
    wrapperTextColor: "primary",
    wrapperBorder: "primary"
  },
  {
    id: 2,
    title: "Total Revenue",
    count: "$28,346.00",
    status: "Decreased by",
    percentage: "- 12.0%",
    percentageBg: "danger-transparent",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#00000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
          opacity=".8" fill="#fff" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
      </svg>
    ),
    svgColor: "secondary",
    wrapperTextColor: "secondary",
    wrapperBorder: "secondary"
  },
  {
    id: 3,
    title: "Total Sales",
    count: "24,573",
    status: "Increased by",
    percentage: "+ 2.3%",
    percentageBg: "primary-transparent",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#00000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" />
        <path
          d="M5 6.3V11c0 4.52 2.98 8.69 7 9.93 4.02-1.23 7-5.41 7-9.93V6.3l-7-3.11L5 6.3zM18 9l-8 8-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"
          opacity=".8" fill="#fff" />
      </svg>
    ),
    svgColor: "danger",
    wrapperTextColor: "danger",
    wrapperBorder: "danger"
  },
  {
    id: 4,
    title: "New Visitors",
    count: " 5,659",
    status: "Decreased by",
    percentage: "- 7.6%",
    percentageBg: "danger-transparent ",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#00000">
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
    svgColor: "warning",
    wrapperTextColor: "warning",
    wrapperBorder: "warning"
  },
];

// Sales History
interface SalesHistoryType {
  id: number;
  product: string;
  country: string;
  image: string;
  price: string;
  time: string;
  imageBg: string;
}
export const SalesHistory: SalesHistoryType[] = [
  { id: 1, product: "Rolled Signature Scent", country: "United States", image: jpg11, price: "$1,234.78", time: "15 Min Ago", imageBg: "primary-transparent", },
  { id: 2, product: "Little Pro Kids Backpack", country: "Japan", image: jpg2, price: "$623.99", time: "Today", imageBg: "secondary-transparent", },
  { id: 3, product: "Galaxy X9 Ultra Camera", country: "Canada", image: jpg3, price: "$1,324", time: "2 Days Ago", imageBg: "danger-transparent", },
  { id: 4, product: "HP 120Ram Laptop", country: "United Kingdom", image: jpg4, price: "$1,123.49", time: "5 Months Ago", imageBg: "warning-transparent", },
  { id: 5, product: "Black Oxford Sofa Set", country: "Australia", image: jpg5, price: "$1,234.78", time: "1 year Ago", imageBg: "info-transparent", },
  { id: 6, product: "Jordan Money Plant", country: "India", image: jpg6, price: "$1,234.78", time: "1 year Ago", imageBg: "info-transparent", },
];

// Top Selling Products
interface TopSellingProductsType {
  id: number;
  orderId: string;
  title: string;
  image: string;
  date: string;
  category: string;
  stockStatus: string;
  quantity: number | string;
  imageBg: string;
  stockStatusBg: string;
  borderClass?: string
}
export const TopSellingProducts: TopSellingProductsType[] = [
  { id: 1, orderId: "#31265", title: "Galaxy X9 Ultra Camera", image: jpg3, date: "19/02/2024", category: "Electronics", stockStatus: "In Stock", quantity: "7,892", imageBg: "bg-light", stockStatusBg: "primary" },
  { id: 2, orderId: "#37535", title: "Elegant Red Flower Pot", image: jpg6, date: "15/05/2024", category: "Home Decoration", stockStatus: "In Stock", quantity: "3,578", imageBg: "bg-light", stockStatusBg: "primary" },
  { id: 3, orderId: "#35482", title: "Altra Pro Max Camera", image: jpg7, date: "22/07/2024", category: "Electronics", stockStatus: "Out Of Stock", quantity: "2,934", imageBg: "bg-light", stockStatusBg: "danger" },
  { id: 4, orderId: "#46535", title: "Elegant Smell Candles", image: jpg8, date: "12/11/2024", category: "Home Decoration", stockStatus: "Out Of Stock", quantity: "4,589", imageBg: "bg-light", stockStatusBg: "danger" },
  { id: 5, orderId: "#46535", title: "Altra Pro max Camera", image: jpg3, date: "12/11/2024", category: "Electronics", stockStatus: "Out Of Stock", quantity: "4,589", imageBg: "bg-light", stockStatusBg: "danger" },
  { id: 6, orderId: "#35653", title: "Little Pro Kids Backpack", image: jpg2, date: "31/08/2024", category: "Kids' Fashion", stockStatus: "In Stock", quantity: "4,589", imageBg: "bg-light", stockStatusBg: "primary", borderClass: 'border-bottom-0' },
];

// Recent Orders
interface RecentOrdersType {
  id: number;
  orderId: string;
  productName: string;
  image: string;
  category: string;
  status: string;
  statusBg: string;
  price: string;
  date: string;
}
export const RecentOrders: RecentOrdersType[] = [
  { id: 1, orderId: "#42A5689", productName: "Wood Handled Flower Pot", image: jpg6, category: "Home Decoration", status: "Delivered", statusBg: "primary-transparent", price: "$999.00", date: "24th Jul,24" },
  { id: 2, orderId: "#875J789", productName: "Samsung Galaxy Headset", image: jpg1, category: "Electronics", status: "Shipped", statusBg: "info-transparent", price: "$897.69", date: "08th Aug,24" },
  { id: 3, orderId: "#37T8746L", productName: "Little Pro Kids Backpack", image: jpg2, category: "Kids' Fashion", status: "Cancelled", statusBg: "danger-transparent", price: "$688.00", date: "19th May,24" },
  { id: 4, orderId: "#589Y324", productName: "Altra Pro max Camera", image: jpg3, category: "Electronics", status: "Pending", statusBg: "warning-transparent", price: "$599.09", date: "02th Aug,24" },
  { id: 5, orderId: "#66T7845", productName: "Stunning 120ram Laptop", image: jpg4, category: "Electronics", status: "Returned", statusBg: "primary-transparent", price: "$245.99", date: "05th Sep,24" },
];

// Top Selling Categories
interface TopSellingCategoriesType {
  id: number;
  category: string;
  icon: string;
  iconBg: string;
  percentageIcon: string;
  percentage: string;
  percentageTextColor: string;
  count: string;
  borderClass?: string
}
export const TopSellingCategories: TopSellingCategoriesType[] = [
  { id: 1, category: "Electronics", icon: "ri-macbook-line", iconBg: "primary-transparent", percentageIcon: "up", percentage: "0.78%", percentageTextColor: "primary", count: "18,235" },
  { id: 2, category: "Fashion Trends", icon: "ri-t-shirt-line", iconBg: "secondary-transparent", percentageIcon: "down", percentage: "1.57%", percentageTextColor: "danger", count: "12,743" },
  { id: 3, category: "Entertainment", icon: "ri-discord-line", iconBg: "danger-transparent", percentageIcon: "up", percentage: "0.32%", percentageTextColor: "primary", count: "8,369" },
  { id: 4, category: "Home Decoration", icon: "ri-home-3-line", iconBg: "warning-transparent", percentageIcon: "up", percentage: "19.45%", percentageTextColor: "primary", count: "16,458", borderClass: 'border-bottom-0' },
];

// Track Order
interface TrackOrderType {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  wrapperBg: string;
  time: string;
  liclass?: string;
}
export const TrackOrder: TrackOrderType[] = [
  { id: 1, title: "Order Placed", description: "We Have Recieved Your Order", icon: "ti ti-user", iconBg: "bg-primary", wrapperBg: "bg-primary-transparent", time: "10mins ago" },
  { id: 2, title: "Order Packed", description: "Your Product Packed", icon: "ti ti-file-invoice", iconBg: "bg-secondary", wrapperBg: "bg-secondary-transparent", time: "30mins ago" },
  { id: 3, title: "Order Shipped", description: "Your Order Is Shipped", icon: "ti ti-message", iconBg: "bg-danger", wrapperBg: "bg-danger-transparent", time: "1hour ago" },
  { id: 4, title: "On The Way", description: "Your Order Is Ready To Deliver.", icon: "ti ti-shopping-cart", iconBg: "bg-gray-400 text-dark border", wrapperBg: "bg-light", time: "2hours ago" },
  { id: 5, title: "Product Delivered", description: "Order successfully Delivered.", icon: "ti ti-check", iconBg: "bg-gray-400 text-dark border", wrapperBg: "bg-light", time: "3hours ago", liclass: 'mb-0' },
]

// Top Sellers
interface TopSellersType {
  id: number;
  name: string;
  location: string;
  image: string;
  category: string;
  value: number | string;
  percentage: string;
  borderClass?: string
}
export const TopSellers: TopSellersType[] = [
  { id: 1, name: "Emily Johnson", location: "San Francisco", image: face6, category: "Bags & Wallet", value: "8,547", percentage: "32%" },
  { id: 2, name: "Sophie Davis", location: "San Francisco", image: face3, category: "Home Appliances", value: "1,254", percentage: "26%" },
  { id: 3, name: "Olivia White", location: "San Francisco", image: face5, category: "Electronics", value: 986, percentage: "65%" },
  { id: 4, name: "Mia Taylor", location: "San Francisco", image: face7, category: "Beauty & Care", value: "3,422", percentage: "76%" },
  { id: 5, name: "Chloe Anderson", location: "San Francisco", image: face2, category: "Kitchenware", value: "8,935", percentage: "52%", borderClass: 'border-bottom-0' },
];

// Premier Product Selections
export interface PremierProductSelectionType {
  id: number;
  name: string;
  discount: string;
  image: string;
  reviews: number;
  bgcolor: string;
}
export const PremierProductSelections: PremierProductSelectionType[] = [
  { id: 1, name: "Ladies Hand Bag", discount: "20% OFF", image: png14, reviews: 22, bgcolor: "primary" },
  { id: 2, name: "Jublex Men Watch", discount: "21% OFF", image: png15, reviews: 75, bgcolor: "secondary" },
  { id: 3, name: "Leather Handbag", discount: "30% OFF", image: png12, reviews: 66, bgcolor: "danger" },
  { id: 4, name: "Adidas Men shoe", discount: "20% OFF", image: png15, reviews: 111, bgcolor: "secondary" },
  { id: 5, name: "Samsong Headset", discount: "10% OFF", image: png16, reviews: 23, bgcolor: "warning" },
  { id: 6, name: "10Lens Camera", discount: "15% OFF", image: png25, reviews: 43, bgcolor: "info" },
  { id: 7, name: "Ladies Hand Bag", discount: "20% OFF", image: png12, reviews: 111, bgcolor: "danger" },
  { id: 8, name: "Ladies Tshirt", discount: "10% OFF", image: png20, reviews: 23, bgcolor: "primary" },
  { id: 9, name: "Pink Ladiesbag", discount: "15% OFF", image: png19, reviews: 43, bgcolor: "orange" },
]

export const EcpmmersSwiperCard = PremierProductSelections.map((idx) => (
  <div key={idx.id}>
    <SpkEcommersSwiper card={idx} />
  </div>

))




