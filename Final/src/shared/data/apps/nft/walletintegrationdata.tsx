import nft1 from '../../../../assets/images/nft-images/1.jpg';
import nft2 from '../../../../assets/images/nft-images/2.jpg';
import nft3 from '../../../../assets/images/nft-images/3.jpg';
import nft4 from '../../../../assets/images/nft-images/4.jpg';
import nft18 from '../../../../assets/images/nft-images/18.png';
import nft19 from '../../../../assets/images/nft-images/19.png';
import nft20 from '../../../../assets/images/nft-images/20.png';
import nft21 from '../../../../assets/images/nft-images/21.png';
import nft22 from '../../../../assets/images/nft-images/22.png';
import nft23 from '../../../../assets/images/nft-images/23.png';
import nft27 from '../../../../assets/images/nft-images/27.jpg';
import nft28 from '../../../../assets/images/nft-images/28.jpg';
import nft31 from '../../../../assets/images/nft-images/31.jpg';
import nft32 from '../../../../assets/images/nft-images/32.jpg';


interface network {
    id: number;
    name: string;
    imgSrc: string;
    bgClass: string;
    ActiveClass: string;
}

export const Network: network[] = [
    {
        id: 1,
        name: 'Etherium',
        imgSrc: nft23,
        bgClass: 'primary',
        ActiveClass: 'active'
    },
    {
        id: 2,
        name: 'Binance',
        imgSrc: nft22,
        bgClass: 'warning',
        ActiveClass: ''
    },
    {
        id: 3,
        name: 'Solana',
        imgSrc: nft21,
        bgClass: 'secondary',
        ActiveClass: ''
    },
    {
        id: 4,
        name: 'Tezos',
        imgSrc: nft18,
        bgClass: 'info',
        ActiveClass: ''
    },
    {
        id: 5,
        name: 'Avalanche',
        imgSrc: nft20,
        bgClass: 'danger',
        ActiveClass: ''
    },
    {
        id: 6,
        name: 'Cardano',
        imgSrc: nft19,
        bgClass: 'secondary',
        ActiveClass: ''
    }
];
export const Walletdata = [
    {
        id: 1,
        image: nft27,
        title: 'MetaMask',
        class: 'active',
    },
    {
        id: 2,
        image: nft28,
        title: 'Enjin Wallet',
        class: '',
    },
    {
        id: 3,
        image: nft1,
        title: 'Trust Wallet',
        class: '',
    },
    {
        id: 4,
        image: nft2,
        title: 'Coinbase Wallet',
        class: '',
    },
    {
        id: 5,
        image: nft3,
        title: 'Lido',
        class: '',
    },
    {
        id: 6,
        image: nft4,
        title: 'Huobi Wallet',
        class: '',
    },
    {
        id: 7,
        image: nft31,
        title: 'Phantom Wallet',
        class: '',
    },
    {
        id: 8,
        image: nft32,
        title: 'Ledger Live',
        class: '',
    },
]