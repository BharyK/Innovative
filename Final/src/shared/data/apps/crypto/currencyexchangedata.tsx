import Ethereum from '../../../../assets/images/crypto-currencies/square-color/Ethereum.svg';
import Bitcoin from '../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg';
import Dash from '../../../../assets/images/crypto-currencies/square-color/Dash.svg';
import Litecoin from '../../../../assets/images/crypto-currencies/square-color/Litecoin.svg';
import Ripple from '../../../../assets/images/crypto-currencies/square-color/Ripple.svg';
import Golem from '../../../../assets/images/crypto-currencies/square-color/Golem.svg';
import Monero from '../../../../assets/images/crypto-currencies/square-color/Monero.svg';
import EOS from '../../../../assets/images/crypto-currencies/square-color/EOS.svg';
import type { ApexOptions } from 'apexcharts';


export interface CryptoDataType {
  id: number;
  title: string;
  type: string;
  changePercent: string;
  changeValue: string;
  Badgetag: boolean;
  price2: string;
  price3: string;
  chartoption: ApexOptions;
  chartseries: CurrencySeriesType;
  img: string;
  color: string
}
interface CurrencySeriesType {
  name: string;
  data: number[];
}
const Currencyseries: CurrencySeriesType[] = [
  {
    name: "Value",
    data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
  },
]
const Currencyoptions = ({ color }: { color: string }) => ({
  chart: {
    type: "line",
    height: 60,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 1,
      color: "#fff",
      opacity: 0.05,
    },
    events: {
      mounted: (chart) => {
        chart.windowResizeHandler();
      }
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 1.5,
    // ltcArray: 0,
  },
  fill: {
    gradient: {
      //   enabled: false,
    },
  },

  yaxis: {
    min: 0,
    max: 85,
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
  colors: [color],
  tooltip: {
    enabled: false,
  },
})
export const Cryptocurrencies: CryptoDataType[] = [
  {
    id: 1,
    title: 'Bitcoin',
    type: "BTC",
    changePercent: '24.3%',
    changeValue: '+0.59',
    Badgetag: true,
    price2: '0.00434',
    price3: '$30.29',
    chartoption: Currencyoptions({ color: 'rgba(3, 181, 98,0.8)' }),
    chartseries: Currencyseries,
    img: Bitcoin,
    color: "primary"
  },
  {
    id: 2,
    title: 'Ethereum ',
    type: "ETH",
    changePercent: '17.67%',
    changeValue: '+1.30',
    Badgetag: false,
    price2: '1.2923',
    price3: '$2,283.73',
    chartoption: Currencyoptions({ color: 'rgba(127, 103, 257,0.8)' }),
    chartseries: Currencyseries,
    img: Ethereum,
    color: "secondary"

  },
  {
    id: 3,
    title: 'Dash',
    type: "DASH",
    changePercent: '17.67%',
    changeValue: '+1.30',
    Badgetag: false,
    price2: '1.2923',
    price3: '$2,283.73',
    chartoption: Currencyoptions({ color: 'rgba(255, 169, 9,0.8)' }),
    chartseries: Currencyseries,
    img: Dash,
    color: "success"


  },
  {
    id: 4,
    title: 'Litecoin',
    type: "LTC",
    changePercent: '17.67%',
    changeValue: '+1.30',
    Badgetag: false,
    price2: '1.2923',
    price3: '$158.42',
    chartoption: Currencyoptions({ color: 'rgba(253, 73, 99,0.8)' }),
    chartseries: Currencyseries,
    img: Litecoin,
    color: "warning"

  },
  {
    id: 5,
    title: 'Ripple',
    type: "XRP",
    changePercent: '17.67%',
    changeValue: '+1.30',
    Badgetag: false,
    price2: '1.2923',
    price3: '$2,283.73',
    chartoption: Currencyoptions({ color: 'rgba(15, 188, 249,0.8)' }),
    chartseries: Currencyseries,
    img: Ripple,
    color: "pink"

  },
  {
    id: 6,
    type: "GLM",
    title: 'Golem',
    changePercent: '17.67%',
    changeValue: '+1.30',
    Badgetag: false,
    price2: '1.2923',
    price3: '$2,283.73',
    chartoption: Currencyoptions({ color: 'rgba(254, 124, 88,0.8)' }),
    chartseries: Currencyseries,
    img: Golem,
    color: "purple"
  },
  {
    id: 7,
    title: 'Monero',
    type: "XMR",
    changePercent: '17.67%',
    changeValue: '+1.30',
    Badgetag: false,
    price2: '1.2923',
    price3: '$2,283.73',
    chartoption: Currencyoptions({ color: 'rgba(0, 216, 216,0.8)' }),
    chartseries: Currencyseries,
    img: Monero,
    color: "danger"
  },
  {
    id: 8,
    title: 'EOS',
    type: " EOS",
    changePercent: '17.67%',
    changeValue: '+1.30',
    Badgetag: false,
    price2: '1.2923',
    price3: '$2,283.73',
    chartoption: Currencyoptions({ color: 'rgba(254, 84, 155,0.8)' }),
    chartseries: Currencyseries,
    img: EOS,
    color: "info"
  }
];
export const Currency = [
  { label: 'USD', value: 1 },
  { label: 'Pound', value: 2 },
  { label: 'Rupee', value: 3 },
  { label: 'Euro', value: 4 },
  { label: 'Won', value: 5 },
  { label: 'Dinar', value: 6 },
  { label: 'Rial', value: 7 },
]
export const SellCoins = [
  { label: 'Bitcoin', value: 1 },
  { label: 'Etherium', value: 2 },
  { label: 'Litecoin', value: 3 },
  { label: 'Ripple', value: 4 },
  { label: 'Cardano', value: 5 },
  { label: 'Neo', value: 6 },
  { label: 'Stellar', value: 7 },
  { label: 'EOS', value: 7 },
  { label: 'NEM', value: 8 },
]