import nft9 from '../../../../assets/images/nft-images/9.jpg';
import nft10 from '../../../../assets/images/nft-images/10.jpg';
import nft11 from '../../../../assets/images/nft-images/11.jpg';
import nft12 from '../../../../assets/images/nft-images/12.jpg';
import nft24 from '../../../../assets/images/nft-images/24.jpg';
import nft25 from '../../../../assets/images/nft-images/25.jpg';
import nft26 from '../../../../assets/images/nft-images/26.jpg';
import nft27 from '../../../../assets/images/nft-images/27.jpg';
import nft28 from '../../../../assets/images/nft-images/28.jpg';
import nft29 from '../../../../assets/images/nft-images/29.jpg';
import nft30 from '../../../../assets/images/nft-images/30.jpg';
import nft31 from '../../../../assets/images/nft-images/31.jpg';
import face3 from '../../../../assets/images/faces/3.jpg';
import face4 from '../../../../assets/images/faces/4.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face13 from '../../../../assets/images/faces/13.jpg';
import face16 from '../../../../assets/images/faces/16.jpg';


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
export const Nftalldata: TrendingBidsType[] = [
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
  },
  {
    id: 5,
    title: "Skywing Falcon Celestial",
    category: "Art",
    categoryColor: "info",
    bid: "3.5ETH",
    timeLeft: "02hrs : 45m : 12s",
    image: nft28,
    avatar: face4,
    creator: "CryptoArt",
  },
  {
    id: 6,
    title: "Cloudwing Swan Ethereal",
    category: "Music",
    categoryColor: "pink",
    bid: "5.45ETH",
    timeLeft: "02hrs : 45m : 12s",
    image: nft29,
    avatar: face4,
    creator: "CryptoArt",
  },
  {
    id: 7,
    title: "Blazewing Falcon Mirage",
    category: "Sports",
    categoryColor: "orange",
    bid: "2.5ETH",
    timeLeft: "02hrs : 45m : 12s",
    image: nft30,
    avatar: face4,
    creator: "CryptoArt",
  },
  {
    id: 8,
    title: "Aerowing Falcon Divine",
    category: "Gaming",
    categoryColor: "primary",
    bid: "12.3ETH",
    timeLeft: "02hrs : 45m : 12s",
    image: nft31,
    avatar: face4,
    creator: "CryptoArt",
  }
];

export const Creatorsdata = [
  {
    id: 1,
    bgimg: nft9,
    image: face16,
    title: 'Kevin Dansen',
    text: '154 Products'
  },
  {
    id: 2,
    bgimg: nft10,
    image: face6,
    title: 'Emily Johnson',
    text: '192 Products'
  },
  {
    id: 3,
    bgimg: nft11,
    image: face3,
    title: 'Olivia White',
    text: '234 Products'
  },
  {
    id: 4,
    bgimg: nft12,
    image: face13,
    title: 'Chloe Anderson',
    text: '93 Products'
  },
]