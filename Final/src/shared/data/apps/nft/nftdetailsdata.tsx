import parse from 'html-react-parser';
import { Nftalldata } from "./marketplacedata";
import SpkNftMarcketPlace from '../../../@spk-reusable-components/reusable-dashboards/spk-nftmarcketplace';
import SpkBadge from '../../../@spk-reusable-components/reusable-uielements/spk-badge';
import SpkButton from '../../../@spk-reusable-components/reusable-uielements/spk-button';
import { Link } from 'react-router-dom';
import nft1 from '../../../../assets/images/nft-images/1.jpg';
import nft2 from '../../../../assets/images/nft-images/2.jpg';
import nft3 from '../../../../assets/images/nft-images/3.jpg';
import nft4 from '../../../../assets/images/nft-images/4.jpg';
import nft27 from '../../../../assets/images/nft-images/27.jpg';
import nft28 from '../../../../assets/images/nft-images/28.jpg';
import nft29 from '../../../../assets/images/nft-images/29.jpg';
import nft30 from '../../../../assets/images/nft-images/30.jpg';
import nft31 from '../../../../assets/images/nft-images/31.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face10 from '../../../../assets/images/faces/10.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face15 from '../../../../assets/images/faces/15.jpg';



export const Swiperdata = [
    <div className="image-container custom-width">
        <img className="img-fluid" src={nft2} alt="img" />
    </div>,
    <div className="image-container custom-width">
        <img className="img-fluid" src={nft1} alt="img" />
    </div>,
    <div className="image-container custom-width">
        <img className="img-fluid" src={nft3} alt="img" />
    </div>,
    <div className="image-container custom-width">
        <img className="img-fluid" src={nft4} alt="img" />
    </div>
]

export const Nftdetailsswiper = Nftalldata.map((item,) => (
    <SpkNftMarcketPlace card={item} />
))
export const Bidtabledata = [
    { id: 1, image: nft1, title: 'Digital Dreamscapes', text: '24 Likes', date: '24, Sep 2024 - 12:45PM', avatarimg: face9, name: 'By Ananth', ethvalue: '2.299 ETH', ethpreviousvalue: '3.299 ETH' },
    { id: 2, image: nft2, title: 'Cosmic Reflections', text: '45 Likes', date: '15, Aug 2024 - 02:30PM', avatarimg: face10, name: 'By Maya', ethvalue: '1.875 ETH', ethpreviousvalue: '2.500 ETH' },
    { id: 3, image: nft3, title: 'Future Visions', text: '30 Likes', date: '10, Sep 2024 - 03:15PM', avatarimg: face11, name: 'By Leo', ethvalue: '3.150 ETH', ethpreviousvalue: '4.000 ETH' },
    { id: 4, image: nft4, title: 'Mystical Forest', text: '60 Likes', date: '05, Oct 2024 - 01:00PM', avatarimg: face12, name: 'By Sarah', ethvalue: '4.800 ETH', ethpreviousvalue: '5.500 ETH' },
    { id: 5, image: nft27, title: 'NFT Spotlight', text: '56 Likes', date: '10, Oct 2024 - 03:15PM', avatarimg: face10, name: 'By Sarah', ethvalue: '4.800 ETH', ethpreviousvalue: '5.500 ETH', borderClass: 'border-bottom-0' },
]
export const Featurednfts = [
    {
        id: 1,
        image: nft27,
        title: 'Digital Masterpieces',
        text: "This Month's Top Picks",
        likes: '13.2k',
        ethvalue: '0.234',
        bgcolor: 'primary'
    },
    {
        id: 2,
        image: nft28,
        title: 'NFT Spotlight',
        text: 'Curated Gems',
        likes: '5.2k',
        ethvalue: '4.256',
        bgcolor: 'secondary'
    },
    {
        id: 3,
        image: nft29,
        title: ' Exclusive Creations',
        text: 'Featured of the Week',
        likes: '2.4k',
        ethvalue: '3.124',
        bgcolor: 'primary'
    },
    {
        id: 4,
        image: nft30,
        title: 'Top-Tier Tokens',
        text: "Discover the Best NFTs",
        likes: '1.8k',
        ethvalue: '1.263',
        bgcolor: 'info'
    },
    {
        id: 5,
        image: nft31,
        title: 'Curated Collection',
        text: 'Featured NFT Showcase',
        likes: '12.9k',
        ethvalue: '2.356',
        bgcolor: 'warning'
    },
]

export const Reviewdata = [
    {
        id: 1,
        image: face15,
        name: 'Alexander',
        rating: '4.5',
        text: 'Ethereal Landscapes is a mesmerizing NFT that transports you to serene vistas filled with breathtaking colors and tranquil elements.',
        title: 'Ethereal Landscapes &#127757;',
        badgetxt1: 'Art',
        badgetxt2: 'Creative',
        time: '12 Aug, 2024 - 09:30AM',
        media1: nft1,
        media2: nft2
    },
    {
        id: 1,
        image: face11,
        name: 'Sophia Clark',
        rating: '4.0',
        text: 'Celestial Harmony invites you into a world where the sky meets the earth in perfect balance and beauty.',
        title: 'Celestial Harmony',
        badgetxt1: 'Inspiration',
        badgetxt2: 'Nature',
        time: ' 5 Sep, 2024 - 02:15PM',
        media1: nft3,
        media2: nft4
    }
]
export const ReviewSwiperdata = Reviewdata.map((idx, index) => (
    <div className="border rounded p-3" key={index}>
        <div className="d-sm-flex d-block align-items-top mb-3">
            <div className="d-flex flex-fill">
                <div className="me-2">
                    <span className="avatar avatar-sm avatar-rounded">
                        <img src={idx.image} alt="" />
                    </span>
                </div>
                <div className="lh-1 me-2">
                    <p className="mb-1 fw-medium fs-14">{idx.name}
                        <span className="text-primary"></span>
                    </p>
                    <div className="mb-1">
                        <span className="fs-11 text-muted">
                            {idx.time}
                        </span>
                    </div>
                </div>
            </div>
            <div className="mb-1 ms-auto text-end">
                <i className="ri-star-fill fs-15 text-warning align-middle"></i>
                <span className="align-middle">{idx.rating}</span>
            </div>
        </div>
        <div className="ps-sm-4 ps-0 mb-3">
            <div className="tags mb-1">
                <SpkBadge variant="info">{idx.badgetxt1}</SpkBadge>
                <SpkBadge variant='primary' Customclass=" ms-1 text-fixed-white">{idx.badgetxt2}</SpkBadge>
            </div>
            <p className="fw-medium mb-1 ps-2">{parse(idx.title)}
            </p>
            <p className="mb-0 fs-12 text-muted ps-2">{idx.text}
            </p>
        </div>
        <div className="product-images ps-sm-4 ps-0">
            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                <div>
                    <div>
                        <Link to="#!" className="avatar avatar-md">
                            <img src={idx.media1} alt="" />
                        </Link>
                        <Link to="#!" className="ms-1 avatar avatar-md">
                            <img src={idx.media2} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
                    <SpkButton Buttonvariant='primary' Size='sm' Customclass="btn me-2">
                        Report  abuse
                    </SpkButton>
                    <SpkButton Buttonvariant='primary-light' Size='sm' Customclass="btn btn-icon  me-2">
                        <i className="ri-thumb-up-line"></i>
                    </SpkButton>
                    <SpkButton Buttonvariant='danger-light' Size='sm' Customclass="btn btn-icon">
                        <i className="ri-thumb-down-line"></i>
                    </SpkButton>
                </div>
            </div>
        </div>
    </div>
))