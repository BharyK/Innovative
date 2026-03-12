import Ethereum from '../../../../assets/images/crypto-currencies/square-color/Ethereum.svg';
import Bitcoin from '../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg';
import Dash from '../../../../assets/images/crypto-currencies/square-color/Dash.svg';
import Litecoin from '../../../../assets/images/crypto-currencies/square-color/Litecoin.svg';
import Ripple from '../../../../assets/images/crypto-currencies/square-color/Ripple.svg';
import Monero from '../../../../assets/images/crypto-currencies/square-color/Monero.svg';


interface walletdata {
        id: number;
        title: string;
        imgSrc: string;
        Lasttransaction: string;
        transaction: string;
        walletAddress: string;
        walletType: string;
        Usdvalue: string;
        value: string;
}
export const WalletData: walletdata[] = [
        {
                id: 1,
                imgSrc: Bitcoin,
                title: "Bitcoin (BTC) Wallet",
                Lasttransaction: "0.005 BTC ",
                transaction: "45",
                walletAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
                walletType: "BTC",
                Usdvalue: "$2,230.25",
                value: "0.075 BTC",
        },
        {
                id: 2,
                imgSrc: Ethereum,
                title: "Ethereum (ETH) Wallet",
                Lasttransaction: "0.1 ETH ",
                transaction: "30",
                walletAddress: "0x3fB1eAd4D7F6f94D8DFe9BFEfEa94B9C1a",
                walletType: "ETH",
                Usdvalue: "$2,000.50",
                value: "1.25 ETH",
        },
        {
                id: 3,
                imgSrc: Litecoin,
                title: "Ethereum (ETH) Wallet",
                Lasttransaction: "0.2 LTC",
                transaction: "50",
                walletAddress: "LcHKTh9wRrX9PrsX3fLpVTpcTrB6LVoKss",
                walletType: "LTC",
                Usdvalue: "$650.75",
                value: "5.6 LTC",
        },
        {
                id: 4,
                imgSrc: Ripple,
                title: "Ethereum (ETH) Wallet",
                Lasttransaction: "50 XRP",
                transaction: "120",
                walletAddress: "rN7n7otQDd6FczFgLdSqtcsAUxDkw6fzRH",
                walletType: "XRP",
                Usdvalue: "$235.00",
                value: "500 XRP",
        },
        {
                id: 5,
                imgSrc: Dash,
                title: "Dash (DASH) Wallet",
                Lasttransaction: "0.3 DASH ",
                transaction: "40",
                walletAddress: "Xn3HgXoVX8REeAxF6JrYte4fz8AwF5p5Ku",
                walletType: "DASH",
                Usdvalue: "$925.30",
                value: "8.5 DASH",
        },
        {
                id: 6,
                imgSrc: Monero,
                title: "Monero (XMR) Wallet",
                Lasttransaction: "1 XMR",
                transaction: "70",
                walletAddress: "49NsXk3Mb9Hw5D2bDxJnEp8f6eVQEDrfLZ",
                walletType: "XMR",
                Usdvalue: "$1,450.00",
                value: "10 XMR",
        },
];
