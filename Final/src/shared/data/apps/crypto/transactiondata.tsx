import bitcoinsvg from '../../../../assets/images/crypto-currencies/regular/Bitcoin.svg';
import ethereumsvg from '../../../../assets/images/crypto-currencies/regular/Ethereum.svg';
import litecoinsvg from '../../../../assets/images/crypto-currencies/regular/litecoin.svg';
import ripplesvg from '../../../../assets/images/crypto-currencies/regular/Ripple.svg';


//History
export interface historydata {
  id: number;
  src: string;
  name: string;
  date: string;
  txn: string;
  type: string;
  bg1: string;
  amount: string;
  status: string;
  bg: string;
  recipoent: string;
}


export const Historydata: historydata[] = [
  {
    id: 1,
    src: bitcoinsvg,
    name: "Bitcoin (BTC)",
    date: "2024-06-01 10:15:22",
    txn: "TXN123456789",
    type: "Withdrawal",
    bg1: "danger",
    amount: "0.5 BTC",
    status: "Completed",
    bg: "primary",
    recipoent: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
  },
  {
    id: 2,
    src: ethereumsvg,
    name: "Ethereum (ETH)",
    date: "2024-06-02 14:30:45",
    txn: "TXN987654321",
    type: "Deposit",
    bg1: "success",
    amount: "10.0 ETH",
    bg: "secondary",
    status: "Pending",
    recipoent: "0x32Be343B94f860124dC4fEe278FDCBD38C102D88"
  },
  {
    id: 3,
    src: litecoinsvg,
    name: "Litecoin (LTC)",
    date: "2024-06-03 09:45:10",
    txn: "TXN567890123",
    type: "Buy",
    bg1: "info",
    amount: "50.0 LTC",
    bg: "primary",
    status: "Completed",
    recipoent: "MV3rLMY1Tep6Rhbt4x8fZ2rERKx1CBYKFz"
  },
  {
    id: 4,
    src: ripplesvg,
    name: "Ripple (XRP)",
    date: "2024-06-04 16:20:55",
    txn: "TXN246801357",
    type: "Sell",
    bg1: "secondary",
    amount: "1000 XRP",
    bg: "danger",
    status: "Failed",
    recipoent: "rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh"
  },
  {
    id: 5,
    src: bitcoinsvg,
    name: "Bitcoin (BTC)",
    date: "2024-06-05 11:55:30",
    txn: "TXN654321789",
    type: "Transfer",
    bg1: "warning",
    amount: "1.2 BTC",
    bg: "primary",
    status: "Completed",
    recipoent: "3BbDtxBSjgfTRxaBUgRqAeW1XVo8JpEzYy"
  },
  {
    id: 6,
    src: ethereumsvg,
    name: "Ethereum (ETH)",
    date: "2024-06-06 08:10:18",
    txn: "TXN135790246",
    type: "Withdrawal",
    bg1: "danger",
    amount: "5.5 ETH",
    bg: "secondary",
    status: "Pending",
    recipoent: "0x1dF62f291b2E969f6B5e158bcCC90eD80720D82e"
  },
  {
    id: 7,
    src: bitcoinsvg,
    name: "Bitcoin (BTC)",
    date: "2024-06-07 15:20:35",
    txn: "TXN789012345",
    type: "Deposit",
    bg1: "success",
    amount: "0.8 BTC",
    bg: "primary",
    status: "Completed",
    recipoent: "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
  },
  {
    id: 8,
    src: litecoinsvg,
    name: "Litecoin (LTC)",
    date: "2024-06-08 12:55:50",
    txn: "TXN456789012",
    type: "Sell",
    bg1: "secondary",
    amount: "25.0 LTC",
    bg: "primary",
    status: "Completed",
    recipoent: "LPnPZ8qY2TAnYXUTtrBMHK5h8BQ4mP51sU"
  },
  {
    id: 9,
    src: ripplesvg,
    name: "Ripple (XRP)",
    date: "2024-06-09 09:30:05",
    txn: "TXN901234567",
    type: "Buy",
    bg1: "danger",
    amount: "500 XRP",
    bg: "secondary",
    status: "Pending",
    recipoent: "rw2ciyaNshpHe7bCHo4bRWq6pqqynnWKQg"
  },
  {
    id: 10,
    src: bitcoinsvg,
    name: "Bitcoin (BTC)",
    date: "2024-06-10 14:45:22",
    txn: "TXN234567890",
    type: "Transfer",
    bg1: "warning",
    amount: "1.0 BTC",
    bg: "primary",
    status: "Completed",
    recipoent: "3CwTjvdAx2T1ZCFjHoUYaX6jTEy4d8BQsE"
  }
]


export const ListSeries = [
  {
    name: "Value",
    data: [20, 14, 20, 22, 9, 12, 19, 10, 25],
  }
]

export interface CardsdataType {
  id: number;
  title: string;
  text: string;
  svgcolor: string;
  cardClass: string;
  percentage: string;
  color: string;
  svg: string
  cardbodyClass?: string
}
export const Cardsdata: CardsdataType[] = [
  {
    id: 1,
    title: 'Total Transactions',
    text: '12,654',
    svgcolor: 'primary',
    cardClass: "main-custom-card primary-dash-border",
    percentage: "0.15%",
    color: 'primary',
    svg: ` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
              width="24px" fill="#00000">
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path
                  d="M4 18h16V6H4v12zm5-4h4v-1h-3c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1V7h2v1h2v2h-4v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1h-2v-1H9v-2z"
                  opacity=".8" fill="#fff"></path>
              <path
                  d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12zm-9-1h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1z">
              </path>
          </svg>`
  },
  {
    id: 2,
    title: 'Avg Transaction Time',
    text: '34Sec',
    svgcolor: 'secondary',
    cardClass: "main-custom-card secondary-dash-border",
    percentage: "1.32%",
    color: 'danger',
    svg: `   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
            width="24px" fill="#00000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
                d="M12 6c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.75 10.85L11 14V8h1.5v5.25l4 2.37-.75 1.23z"
                opacity=".8" fill="#fff" />
            <path
                d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zm4.837-6.19l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
        </svg>`
  },
  {
    id: 3,
    title: 'Pending Transactions',
    text: '7,345',
    svgcolor: 'warning',
    cardClass: "main-custom-card warning-dash-border",
    percentage: "0.76%",
    color: 'primary',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
            height="24px" viewBox="0 0 24 24" width="24px" fill="#00000">
            <g>
                <rect fill="none" height="24" width="24" />
            </g>
            <g>
                <g>
                    <path
                        d="M12,4c-4.42,0-8,3.58-8,8c0,4.42,3.58,8,8,8s8-3.58,8-8C20,7.58,16.42,4,12,4z M7,13.5 c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C8.5,12.83,7.83,13.5,7,13.5z M12,13.5 c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C13.5,12.83,12.83,13.5,12,13.5z M17,13.5 c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C18.5,12.83,17.83,13.5,17,13.5z"
                        opacity=".8" fill="#fff" />
                    <path
                        d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z" />
                    <circle cx="7" cy="12" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="17" cy="12" r="1.5" />
                </g>
            </g>
        </svg>`
  },
  {
    id: 4,
    title: 'Completed Transactions',
    text: '992',
    svgcolor: 'info',
    cardClass: "main-custom-card info-dash-border",
    percentage: "1.64%",
    color: 'primary',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
        height="24px" viewBox="0 0 24 24" width="24px" fill="#00000">
        <path d="M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"
            opacity=".8" fill="#fff" />
        <path d="M0,0h24v24H0V0z" fill="none" />
        <g>
            <path
                d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
            <rect height="2" width="6" x="9" y="7" />
            <rect height="2" width="2" x="16" y="7" />
            <rect height="2" width="6" x="9" y="10" />
            <rect height="2" width="2" x="16" y="10" />
        </g>
    </svg>`
  },
  {
    id: 5,
    title: 'Failed Transactions',
    text: '456',
    svgcolor: 'danger',
    cardClass: "main-custom-card danger-dash-border",
    percentage: "0.15%",
    color: 'danger',
    svg: ` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
            width="24px" fill="#00000">
            <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
            <path
                d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
                opacity=".8" fill="#fff" />
            <path
                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" />
        </svg>`
  },
]