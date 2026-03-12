import nft1 from '../../../assets/images/nft-images/1.jpg';
import nft2 from '../../../assets/images/nft-images/2.jpg';
import nft3 from '../../../assets/images/nft-images/3.jpg';
import nft4 from '../../../assets/images/nft-images/4.jpg';
import nft24 from '../../../assets/images/nft-images/24.jpg';
import nft25 from '../../../assets/images/nft-images/25.jpg';
import nft26 from '../../../assets/images/nft-images/26.jpg';
import nft27 from '../../../assets/images/nft-images/27.jpg';
import nft28 from '../../../assets/images/nft-images/28.jpg';
import nft29 from '../../../assets/images/nft-images/29.jpg';
import nft30 from '../../../assets/images/nft-images/30.jpg';
import nft31 from '../../../assets/images/nft-images/31.jpg';
import nft32 from '../../../assets/images/nft-images/32.jpg';
import face1 from '../../../assets/images/faces/1.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face11 from '../../../assets/images/faces/11.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import face16 from '../../../assets/images/faces/16.jpg';


// NFT Statistics
export const NFTStatisticsSeries = [
  {
    name: 'Orders',
    type: 'area',
    data: [102, 103, 103, 99, 100, 105, 102, 102, 104, 104, 103, 105, 104, 106, 112, 101, 100, 102, 99, 98, 98, 99, 97, 103, 100, 101, 100, 103, 104, 102, 100]
  },
  {
    name: 'Sales',
    type: 'line',
    data: [118, 119, 119, 122, 120, 123, 122, 120, 125, 118, 117, 119, 121, 123, 121, 119, 120, 118, 117, 119, 118, 120, 119, 122, 120, 121, 119, 118, 117, 119],
  },
  {
    name: 'Profit',
    type: 'line',
    data: [123, 124, 124, 127, 125, 128, 127, 125, 130, 123, 122, 124, 126, 128, 126, 124, 125, 123, 122, 124, 123, 125, 124, 127, 125, 126, 124, 123, 122, 124
    ],
  }
]
export const NFTStatisticsOptions = {
  chart: {
    type: "line",
    height: 340,
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 7,
      left: 0,
      blur: 1,
      color: ['var(--primary-color)', "rgba(127, 103, 257,1)", "rgba(253, 73, 99,1)"],
      opacity: 0.05,
    },
  },
  labels: ['Sun', '', '', '', 'Mon', '', '', '', '', 'Tue', '', '', '', '', 'Wed', '', '', '', '', 'Thu', '', '', '', '', 'Fri', '', '', '', '', 'Sat'],
  colors: [
    'var(--primary-color)',
    "rgba(127, 103, 257,1)", "rgba(253, 73, 99,1)"
  ],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "top",
    offsetX: 0,
    offsetY: 8,
    markers: {
      size: 5,
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
  markers: {
    size: [3.5, 0, 0],
    strokeWidth: 1.5,
    dashArray: 5
  },
  stroke: {
    curve: 'smooth',
    width: [2, 1.8, 1.8],
    lineCap: 'round',
    dashArray: [4, 0, 0],
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
  yaxis: {
    min: 85,
    tickAmount: 5,
    show: true,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    }
  },
  xaxis: {
    show: false,
    axisBorder: {
      show: false,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: false,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: 6,
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      rotate: -90,
    }
  },
}


// Latest Bids
interface LatestBidsType {
  id: number;
  nft_name: string;
  creator: string;
  nft_image: string;
  Amount: string;
  currentOffer: string;
  currentOffer_image: string;
  owner: string;
  owner_image: string;
  status: string;
  statusBg: string;
  time_left: string;
}
export const LatestBids: LatestBidsType[] = [
  {
    id: 1,
    nft_name: "Starter Sense NFT",
    creator: "@irukasensei229",
    nft_image: nft1,
    Amount: "2.56ETH",

    currentOffer: "2.1ETH",
    currentOffer_image: "",
    owner: "Elisha Sean",
    owner_image: face3,
    status: "Open",
    statusBg: "primary",
    time_left: "03hrs : 12m : 45s"
  },
  {
    id: 2,
    nft_name: "Urban Vibes NFT",
    creator: "@cityartist77",
    nft_image: nft2,
    Amount: "1.25ETH",

    currentOffer: "1.0ETH",
    currentOffer_image: "",
    owner: "Jordan Lee",
    owner_image: face5,
    status: "Open",
    statusBg: "primary",
    time_left: "05hrs : 45m : 30s"
  },
  {
    id: 3,
    nft_name: "Mystic Forest NFT",
    creator: "@naturelover99",
    nft_image: nft3,
    Amount: "4.50ETH",

    currentOffer: "3.75ETH",
    currentOffer_image: "",
    owner: "Sophia Brown",
    owner_image: face6,
    status: "Pending",
    statusBg: "warning",
    time_left: "01hrs : 15m : 20s"
  },
  {
    id: 4,
    nft_name: "Naruto Uzumaki ",
    creator: "@naruto111",
    nft_image: nft4,
    Amount: "3.12ETH",

    currentOffer: "1.23ETH",
    currentOffer_image: "",
    owner: "Michael Smith",
    owner_image: face7,
    status: "Open",
    statusBg: "primary",
    time_left: "05hrs : 12m : 43s"
  },
  {
    id: 5,
    nft_name: "Digital Harmony NFT",
    creator: "@musiclover88",
    nft_image: nft28,
    Amount: "2.90ETH",

    currentOffer: "2.60ETH",
    currentOffer_image: "",
    owner: "Lucas Gray",
    owner_image: face7,
    status: "Open",
    statusBg: "primary",
    time_left: "04hrs : 05m : 50s"
  },
  {
    id: 6,
    nft_name: "Celestial Art NFT",
    creator: "@starrynight12",
    nft_image: nft29,
    Amount: "5.20ETH",

    currentOffer: "4.90ETH",
    currentOffer_image: "",
    owner: "Mia Johnson",
    owner_image: face8,
    status: "Closed",
    statusBg: "danger",
    time_left: "00hrs : 30m : 10s"
  },
]

// History
interface HistoryType {
  id: number;
  name: string;
  username: string;
  image: string;
  bid: string;
  currency: string;
}
export const History: HistoryType[] = [
  {
    id: 1,
    name: "Kakasha Si",
    username: "@sensei011",
    image: nft24,
    bid: "0.234",
    currency: "ETH",
  },
  {
    id: 2,
    name: "Oorichimaru lo",
    username: "@ooro001",
    image: nft25,
    bid: "0.334",
    currency: "ETH",
  },
  {
    id: 3,
    name: "Oorichimaru lo",
    username: "@ooro001",
    image: nft26,
    bid: "0.334",
    currency: "ETH",
  },
  {
    id: 4,
    name: "SakuraYM",
    username: "@sakura903",
    image: nft27,
    bid: "0.2534",
    currency: "ETH",
  },
  {
    id: 5,
    name: "Sasuke Uchiha",
    username: "@sasuke777",
    image: nft28,
    bid: "0.3504",
    currency: "ETH",
  },
  {
    id: 6,
    name: "Naruto Uzumaki",
    username: "@naruto111",
    image: nft29,
    bid: "0.2504",
    currency: "ETH",
  },
  {
    id: 7,
    name: "Uchiha Uzumaki",
    username: "@uzumaki111",
    image: nft30,
    bid: "0.2504",
    currency: "ETH",
  },
  {
    id: 8,
    name: "Nagiro Ohinavo",
    username: "@nagiro096",
    image: nft31,
    bid: "0.3564",
    currency: "ETH",
  }
]

// Top NFTs Collections
interface TopNFTCollectionsType {
  id: number;
  title: string;
  category: string;
  profile: string;
  profileBg: string;
  nfts: string[];
  moreNfts: string | null;
  moreNftBg: string;
  nftsBg: string;
  valueUSD: string;
  valueETH: string;
  borderClass?: string
}
export const TopNFTCollections: TopNFTCollectionsType[] = [
  {
    id: 1,
    title: "Space Animatior",
    category: "Collection",
    profile: face1,
    profileBg: "primary-transparent",
    nfts: [
      nft24,
      nft25,
      nft26
    ],
    moreNfts: null,
    moreNftBg: "",
    nftsBg: "primary-transparent",
    valueUSD: "$9,223.46",
    valueETH: "0.214ETH"
  },
  {
    id: 2,
    title: "3D Modeler",
    category: "Designs",
    profile: face3,
    profileBg: "danger-transparent",
    nfts: [
      nft28,
      nft26,
      nft27
    ],
    moreNfts: null,
    moreNftBg: "",
    nftsBg: "danger-transparent",
    valueUSD: "$15,789.00",
    valueETH: "0.456ETH"
  },
  {
    id: 3,
    title: "Concept Artist",
    category: "Illustrations",
    profile: face4,
    profileBg: "warning-transparent",
    nfts: [
      nft1,
      nft2,
      nft3
    ],
    moreNfts: null,
    moreNftBg: "",
    nftsBg: "warning-transparent",
    valueUSD: "$8,999.99",
    valueETH: "0.200ETH"
  },
  {
    id: 4,
    title: "Game Developer",
    category: "Game Assets",
    profile: face15,
    profileBg: "info-transparent",
    nfts: [
      nft29,
      nft28,
    ],
    moreNfts: "+3",
    moreNftBg: "primary",
    nftsBg: "info-transparent",
    valueUSD: "$18,450.00",
    valueETH: "0.500ETH"
  },
  {
    id: 5,
    title: "Music Producer",
    category: "Soundtracks",
    profile: face16,
    profileBg: "secondary-transparent",
    nfts: [
      nft30,
      nft31,
      nft32
    ],
    moreNfts: null,
    moreNftBg: "",
    nftsBg: "secondary-transparent",
    valueUSD: "$5,250.75",
    valueETH: "0.150ETH"
  },
  {
    id: 6,
    title: "Photographer",
    category: "Collections",
    profile: face7,
    profileBg: "dark-transparent",
    nfts: [
      nft24,
      nft26,
      nft29
    ],
    moreNfts: null,
    moreNftBg: "",
    nftsBg: "dark-transparent",
    valueUSD: "$11,300.50",
    valueETH: "0.320ETH",
    borderClass: 'border-bottom-0'
  }
]

// Featured NFT
interface FeaturedNFTType {
  id: number;
  name: string;
  email: string;
  profile: string;
  sold: number;
  isVerified: boolean;
  action: string;
  actionBg: string;
}
export const FeaturedNFT: FeaturedNFTType[] = [
  {
    id: 1,
    name: "Amanda Nanes",
    email: "amandananes@example.com",
    profile: face1,
    sold: 53,
    isVerified: true,
    action: "Follow",
    actionBg: "secondary"
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@example.com",
    profile: face12,
    sold: 120,
    isVerified: true,
    action: "UnFollow",
    actionBg: "secondary-light"
  },
  {
    id: 3,
    name: "Emily Clark",
    email: "emilyclark@example.com",
    profile: face3,
    sold: 87,
    isVerified: true,
    action: "Follow",
    actionBg: "secondary"
  },
  {
    id: 4,
    name: "Michael Smith",
    email: "michaelsmith@example.com",
    profile: face11,
    sold: 75,
    isVerified: true,
    action: "UnFollow",
    actionBg: "secondary-light"
  },
  {
    id: 5,
    name: "Sophia Lee",
    email: "sophialee@example.com",
    profile: face5,
    sold: 64,
    isVerified: true,
    action: "Follow",
    actionBg: "secondary"
  }
]

// Recent Activity
interface RecentActivityType {
  id: number;
  title: string;
  date: string;
  description: string;
  avatar: string;
}
export const RecentActivity: RecentActivityType[] = [
  {
    id: 1,
    title: "New Lead Announced",
    date: "09 July 2021",
    description: "John Smith contacted via website form submission",
    avatar: face15
  },
  {
    id: 2,
    title: "Meeting Scheduled",
    date: "09 July 2021",
    description: "David Lee set up a meeting with potential client for next week",
    avatar: face4
  },
  {
    id: 3,
    title: "Follow-up",
    date: "12 Aug 2022",
    description: "Emma Johnson called client for initial consultation",
    avatar: face6
  },
  {
    id: 4,
    title: "Deal Closed",
    date: "09 July 2021",
    description: "Sarah Thompson finalized a contract with XYZ Company worth $10,000",
    avatar: face8
  },
  {
    id: 5,
    title: "Task Completed",
    date: "12 Jan 2021",
    description: "Mark Williams finished product demo",
    avatar: face5
  }
]

// Trending Bids
export interface TrendingBidsType {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  bid: string;
  timeLeft: string;
  image: string;
  avatar: string;
  creator: string;
}
export const TrendingBids: TrendingBidsType[] = [
  {
    id: 1,
    title: "Skywing Falcon Celestial",
    category: "Art",
    categoryColor: "primary",
    bid: "3.5ETH",
    timeLeft: "02hrs : 45m : 12s",
    image: nft27,
    avatar: face4,
    creator: "CryptoArt",
  },
  {
    id: 2,
    title: "Cloudwing Swan Ethereal",
    category: "Music",
    categoryColor: "secondary",
    bid: "5.45ETH",
    timeLeft: "02hrs : 45m : 12s",
    image: nft25,
    avatar: face4,
    creator: "CryptoArt",
  },
  {
    id: 3,
    title: "Blazewing Falcon Mirage",
    category: "Sports",
    categoryColor: "info",
    bid: "2.5ETH",
    timeLeft: "02hrs : 45m : 12s",
    image: nft24,
    avatar: face4,
    creator: "CryptoArt",
  },
  {
    id: 4,
    title: "Aerowing Falcon Divine",
    category: "Gaming",
    categoryColor: "warning",
    bid: "12.3ETH",
    timeLeft: "02hrs : 45m : 12s",
    image: nft26,
    avatar: face4,
    creator: "CryptoArt",
  }
];

interface StatCardsType {
  id: number;
  title: string;
  text: string;
  percent: string;
  trend: string;
  avatarclor: string;
  svgIcon: string;
}
export const StatCards: StatCardsType[] = [
  {
    id: 1,
    title: "Art Works",
    text: "12,432",
    percent: "2.25%",
    trend: "up",
    avatarclor: "primary shipping-icon",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg"  enableBackground="new 0 0 24 24" height="24px"  viewBox="0 0 24 24" width="24px" fill="#00000">  <g>    <rect fill="none" height="24" width="24" />  </g>  <g>    <g>      <g>        <g>          <path            d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8c0.28,0,0.5-0.22,0.5-0.5 c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16c2.21,0,4-1.79,4-4 C20,7.14,16.41,4,12,4z M6.5,13C5.67,13,5,12.33,5,11.5S5.67,10,6.5,10S8,10.67,8,11.5S7.33,13,6.5,13z M9.5,9 C8.67,9,8,8.33,8,7.5S8.67,6,9.5,6S11,6.67,11,7.5S10.33,9,9.5,9z M14.5,9C13.67,9,13,8.33,13,7.5S13.67,6,14.5,6 S16,6.67,16,7.5S15.33,9,14.5,9z M19,11.5c0,0.83-0.67,1.5-1.5,1.5S16,12.33,16,11.5s0.67-1.5,1.5-1.5S19,10.67,19,11.5z"            enableBackground="new" opacity=".8"            fill="#fff" />          <path            d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10c1.38,0,2.5-1.12,2.5-2.5c0-0.61-0.23-1.21-0.64-1.67 c-0.08-0.09-0.13-0.21-0.13-0.33c0-0.28,0.22-0.5,0.5-0.5H16c3.31,0,6-2.69,6-6C22,6.04,17.51,2,12,2z M16,15h-1.77 c-1.38,0-2.5,1.12-2.5,2.5c0,0.61,0.22,1.19,0.63,1.65c0.06,0.07,0.14,0.19,0.14,0.35c0,0.28-0.22,0.5-0.5,0.5 c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.14,8,7C20,13.21,18.21,15,16,15z" />          <circle cx="6.5" cy="11.5" r="1.5" />          <circle cx="9.5" cy="7.5" r="1.5" />          <circle cx="14.5" cy="7.5" r="1.5" />          <circle cx="17.5" cy="11.5" r="1.5" />        </g>      </g>    </g>  </g></svg>`
  },
  {
    id: 2,
    title: "Auction",
    text: "2,764",
    percent: "0.65%",
    trend: "down",
    avatarclor: "secondary shipping-icon",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px"  viewBox="0 0 24 24" width="24px" fill="#00000">  <path d="M0 0h24v24H0V0z" fill="none" />  <path d="M8 7.5l4 4 4-4V4H8zm0 9V20h8v-3.5l-4-4z" opacity=".8"    fill="#fff" />  <path    d="M18 2H6v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9l-4 4-4-4V4h8v3.5z" /></svg>`
  },
  {
    id: 3,
    title: "Creators",
    text: "35,753",
    percent: "3.15%",
    trend: "up",
    avatarclor: "danger shipping-icon",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg"  enableBackground="new 0 0 24 24" height="24px"  viewBox="0 0 24 24" width="24px" fill="#00000">  <g>    <rect fill="none" height="24" width="24" />  </g>  <g>    <g>      <path        d="M13,5c-2.65,0-4.79,2.06-4.97,4.67L6.7,12H8v4h3v3h3v-3.95l0.89-0.43C16.71,13.88,18,12.09,18,10 C18,7.24,15.76,5,13,5z M16.82,8.95l-0.85,0.66C15.99,9.73,16,9.86,16,10c0,0.13-0.01,0.26-0.02,0.39l0.83,0.66 c0.08,0.06,0.1,0.16,0.05,0.25l-0.8,1.39c-0.05,0.09-0.16,0.12-0.24,0.09l-0.99-0.4c-0.21,0.16-0.43,0.29-0.67,0.39L14,13.83 c-0.01,0.1-0.1,0.17-0.2,0.17h-1.6c-0.1,0-0.18-0.07-0.2-0.17l-0.15-1.06c-0.25-0.1-0.47-0.23-0.68-0.39l-0.99,0.4 c-0.09,0.03-0.2,0-0.25-0.09l-0.8-1.39c-0.05-0.08-0.03-0.19,0.05-0.25l0.84-0.66C10.01,10.26,10,10.13,10,10 c0-0.13,0.02-0.27,0.04-0.39L9.19,8.95c-0.08-0.06-0.1-0.16-0.05-0.26l0.8-1.38c0.05-0.09,0.15-0.12,0.24-0.09l1,0.4 c0.2-0.15,0.43-0.29,0.67-0.39l0.15-1.06C12.02,6.07,12.1,6,12.2,6h1.6c0.1,0,0.18,0.07,0.2,0.17l0.15,1.06 c0.24,0.1,0.46,0.23,0.67,0.39l1-0.4c0.09-0.03,0.2,0,0.24,0.09l0.8,1.38C16.91,8.78,16.89,8.89,16.82,8.95z"        opacity=".8" fill="#fff" />      <path        d="M15.82,7.22l-1,0.4c-0.21-0.16-0.43-0.29-0.67-0.39L14,6.17C13.98,6.07,13.9,6,13.8,6h-1.6c-0.1,0-0.18,0.07-0.19,0.17 l-0.15,1.06c-0.24,0.1-0.47,0.23-0.67,0.39l-1-0.4c-0.09-0.03-0.2,0-0.24,0.09l-0.8,1.38c-0.05,0.09-0.03,0.2,0.05,0.26l0.85,0.66 C10.02,9.73,10,9.87,10,10c0,0.13,0.01,0.26,0.03,0.39l-0.84,0.66c-0.08,0.06-0.1,0.17-0.05,0.25l0.8,1.39 c0.05,0.09,0.15,0.12,0.25,0.09l0.99-0.4c0.21,0.16,0.43,0.29,0.68,0.39L12,13.83c0.02,0.1,0.1,0.17,0.2,0.17h1.6 c0.1,0,0.18-0.07,0.2-0.17l0.15-1.06c0.24-0.1,0.47-0.23,0.67-0.39l0.99,0.4c0.09,0.04,0.2,0,0.24-0.09l0.8-1.39 c0.05-0.09,0.03-0.19-0.05-0.25l-0.83-0.66C15.99,10.26,16,10.13,16,10c0-0.14-0.01-0.27-0.03-0.39l0.85-0.66 c0.08-0.06,0.1-0.17,0.05-0.26l-0.8-1.38C16.02,7.22,15.91,7.19,15.82,7.22z M13,11.43c-0.79,0-1.43-0.64-1.43-1.43 S12.21,8.57,13,8.57s1.43,0.64,1.43,1.43S13.79,11.43,13,11.43z" />      <path        d="M19.94,9.06c-0.43-3.27-3.23-5.86-6.53-6.05C13.27,3,13.14,3,13,3C9.47,3,6.57,5.61,6.08,9l-1.93,3.48 C3.74,13.14,4.22,14,5,14h1v2c0,1.1,0.9,2,2,2h1v3h7v-4.68C18.62,15.07,20.35,12.24,19.94,9.06z M14.89,14.63L14,15.05V19h-3v-3H8 v-4H6.7l1.33-2.33C8.21,7.06,10.35,5,13,5c2.76,0,5,2.24,5,5C18,12.09,16.71,13.88,14.89,14.63z" />    </g>  </g></svg>`
  }
];


