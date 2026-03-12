import { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkSwiperJs from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import { Bidtabledata, Featurednfts, Nftdetailsswiper, ReviewSwiperdata, Swiperdata } from "../../../../shared/data/apps/nft/nftdetailsdata";
import SpkTooltips from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import nft1 from '../../../../assets/images/nft-images/1.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import Ethereum from '../../../../assets/images/crypto-currencies/regular/Ethereum.svg';

const NftDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="NFT Details" />

            <Pageheader title="Apps" subtitle="NFT" currentpage="NFT Details" activepage="NFT Details" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <div className="col-xxl-4 col-xl-5">
                    <Row>
                        <div className="col-xxl-12 col-sm-12 mb-4">
                            <SpkSwiperJs slides={Swiperdata} spaceBetween={30} navigation={true} centeredSlides={true} autoplay={true} thumb={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                className="swiper swiper-preview-details bg-light nft-details-swiper product-details-page swiper-initialized swiper-horizontal swiper-backface-hidden" mainClass='p-2 bg-white swiper-slide-active' />
                            <SpkSwiperJs slides={Swiperdata} className="swiper-view-details mt-3" onswiper={setThumbsSwiper} autoplay={true} spaceBetween={10} slidesPerView={4} freemode={true} watchslide={true} mainClass="p-2 bg-white" />
                        </div>
                    </Row>
                </div>
                <div className="col-xxl-8 col-xl-7">
                    <div className="card custom-card overflow-hidden">
                        <div className="card-body p-4">
                            <div>
                                <div className="d-flex gap-2 align-items-center justify-content-between mb-3 flex-wrap">
                                    <div>
                                        <h4 className="fw-medium mb-1">Ethereal Landscapes - NFT Digital Art</h4>
                                        <span
                                            className="mb-0 fs-13 fw-medium text-secondary bg-secondary-transparent me-2 badge">Artistic
                                            NFT </span>
                                        <SpkTooltips title="Verified">
                                            <i className="bi bi-patch-check-fill text-primary align-middle lh-1 fs-15"></i>
                                        </SpkTooltips>
                                    </div>
                                    <div className="ms-auto">
                                        <div className="d-flex gap-2 align-items-center flex-wrap">
                                            <div className="fw-medium">Sales ends in:</div>
                                            <p
                                                className="mb-0 border border-success border-opacity-75 bg-primary-transparent fw-medium ms-auto px-2 rounded-1 fs-15 flex-shrink-0">
                                                02hrs : 45m : 12s</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <p className="fs-15 fw-medium mb-1">Description :</p>
                                    <p className="text-muted mb-0">
                                        "Ethereal Landscapes” is a captivating NFT artwork crafted by a celebrated
                                        digital artist. This distinctive piece transports viewers into a
                                        breathtaking realm where soft hues intertwine with abstract elements. The
                                        artwork serves as a digital expression of the artist's vision, fusing
                                        surrealism with a hint of futuristic design.
                                    </p>
                                </div>
                                <div
                                    className="d-flex align-items-center gap-xxl-5 gap-3 mb-4 justify-content-between flex-wrap">
                                    <div>
                                        <div className="mb-2">Price<i className="ri-price-tag-line text-pink lh-1 mx-1"></i>
                                            :</div>
                                        <h5 className="fw-semibold bid-amt align-middle mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 40 65">
                                                <g fill="none" fillRule="evenodd">
                                                    <g fillRule="nonzero" transform="translate(-227 -93)">
                                                        <g transform="translate(227 93)">
                                                            <g>
                                                                <path fill="#8A92B2"
                                                                    d="M20.1.8v23.3c0 .1-.1.2-.2.2-.7.3-1.3.6-2 .9-.9.4-1.9.8-2.8 1.3L11.8 28l-2.7 1.2-3.3 1.5c-.9.4-1.8.8-2.8 1.3-.7.3-1.5.7-2.2 1-.1 0-.1.1-.2 0H.5c.3-.5.6-.9.9-1.4 1.6-2.7 3.3-5.4 4.9-8.1 1.7-2.9 3.5-5.8 5.2-8.7 1.6-2.7 3.2-5.4 4.8-8 1.2-2 2.4-3.9 3.5-5.9.2 0 .2-.1.3-.1-.1 0 0 0 0 0z">
                                                                </path>
                                                                <path fill="#454A75"
                                                                    d="M39.5 33c-1.5 1-3.1 1.9-4.6 2.8-4.9 2.9-9.7 5.7-14.6 8.6-.1 0-.1.1-.2.1s-.1-.1-.1-.1v-.3-19.5-.3c0-.1.1-.1.2-.1.4.2.8.4 1.3.6 1.2.6 2.5 1.1 3.7 1.7 1.1.5 2.1 1 3.2 1.4 1.1.5 2.1 1 3.2 1.5.9.4 1.9.8 2.8 1.3.9.4 1.9.8 2.8 1.3.7.3 1.4.7 2.2 1 0-.1 0 0 .1 0z">
                                                                </path>
                                                                <path fill="#8A92B2"
                                                                    d="M20.1 64.1s-.1 0 0 0c-.1 0-.1 0-.2-.1-2-2.8-3.9-5.5-5.9-8.3l-6-8.4c-1.9-2.7-3.9-5.4-5.8-8.2L.7 37c0-.1-.1-.1-.1-.2.1 0 .1.1.2.1 2.7 1.6 5.5 3.2 8.2 4.8 3.1 1.9 6.3 3.7 9.4 5.6.5.3 1.1.6 1.6.9.1 0 .1.1.1.2V64.1z">
                                                                </path>
                                                                <path fill="gray"
                                                                    d="M.6 33s.1 0 0 0c.1 0 .1 0 0 0 0 .1 0 .1 0 0z">
                                                                </path>
                                                                <path fill="#62688F"
                                                                    d="M.7 33.1c0-.1 0-.1 0 0 1-.5 2-.9 3-1.4l3.9-1.8c1-.5 2-.9 3-1.4 1.4-.7 2.9-1.3 4.3-2 1-.4 2-.9 3-1.3.7-.3 1.4-.6 2.1-1 .1 0 .1-.1.2-.1V44.5c-.1.1-.1 0-.2 0-.3-.2-.6-.3-.8-.5L.9 33.2c-.1-.1-.2-.1-.2-.1zM39.4 36.8c0 .1 0 .1-.1.2-5.8 8.2-11.6 16.3-17.4 24.5-.6.9-1.2 1.7-1.8 2.6V64v-.2-15.3-.3c1.3-.8 2.6-1.6 3.9-2.3l15.3-9c0-.1.1-.1.1-.1z">
                                                                </path>
                                                                <path fill="#62688F"
                                                                    d="M20.1 24.2V24 1.1.9l19.2 31.8c.1.1.2.2.2.3-.4-.2-.8-.4-1.3-.6-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-1-.4-.5-.2-1.1-.5-1.6-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.2-.7-.3-1-.5l-1.8-.9z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            15.325000ETH
                                        </h5>
                                    </div>
                                    <div>
                                        <div className="fw-normal mb-2">Collection<i
                                            className="ri-nft-line text-primary lh-1 fs-14 mx-1"></i> :</div>
                                        <div className="d-flex align-items-center fw-medium gap-1">
                                            <span className="avatar avatar-xs avatar-rounded lh-1"><img
                                                src={nft1} alt="" /></span>
                                            Landscapes NFT
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-2">Published<i
                                            className="ri-article-line text-secondary lh-1 fs-14 mx-1"></i> :</p>
                                        <div><i className="ri-calendar-event-line text-primary me-1"></i>14, Sep 2024 -
                                            05:22AM</div>
                                    </div>
                                    <div className="me-3">
                                        <div className="fw-normal mb-2">Owned By<i
                                            className="ri-vip-crown-2-line text-danger lh-1 fs-14 mx-1"></i> :</div>
                                        <div className="d-flex align-items-center fw-medium gap-1">
                                            <span className="avatar avatar-xs avatar-rounded lh-1"><img
                                                src={face9} alt="" /></span>
                                            Christopher
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="row gy-3 nft-details-sub-elements">
                                        <div className="col-md-3 col-sm-6">
                                            <div className="p-3 primary d-flex bg-white rounded flex-wrap gap-2">
                                                <span className="avatar avatar-md avatar-rounded me-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        enableBackground="new 0 0 24 24" height="24px"
                                                        viewBox="0 0 24 24" width="24px" fill="#000">
                                                        <g>
                                                            <rect fill="none" height="24" width="24" />
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M18.49,9.88l0.08-0.85l0.18-1.95l-1.9-0.43l-0.84-0.19l-0.44-0.74l-0.99-1.68L12.79,4.8L12,5.14L11.21,4.8 L9.42,4.03L8.43,5.71L7.99,6.45L7.15,6.64l-1.9,0.43l0.18,1.94l0.08,0.85l-0.56,0.65l-1.29,1.48l1.29,1.47l0.56,0.65l-0.08,0.85 l-0.18,1.96l1.9,0.43l0.84,0.19l0.44,0.74l0.99,1.67l1.78-0.77L12,18.85l0.79,0.34l1.78,0.77l0.99-1.68l0.44-0.74l0.84-0.19 l1.9-0.43l-0.18-1.95l-0.08-0.85l0.56-0.65l1.29-1.47l-1.29-1.47L18.49,9.88z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z"
                                                                    opacity=".8" fill="#fff" />
                                                                <path
                                                                    d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z" />
                                                                <polygon
                                                                    points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div>
                                                    <h5 className="fw-semibold mb-0">+12.75K</h5>
                                                    <span className="text-muted">Items Disployed</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="p-3 secondary d-flex bg-white rounded flex-wrap gap-2">
                                                <span className="avatar avatar-md avatar-rounded me-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 0 24 24" width="24px" fill="#000">
                                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                                        <path
                                                            d="M5 19h14V5H5v14zm4-5.86l2.14 2.58 3-3.87L18 17H6l3-3.86z"
                                                            opacity=".8" fill="#fff" />
                                                        <path
                                                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4.86-7.14l-3 3.86L9 13.14 6 17h12z" />
                                                    </svg>
                                                </span>
                                                <div>
                                                    <h5 className="fw-semibold mb-0">10.6K</h5>
                                                    <span className="text-muted">Art Works</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="p-3 danger d-flex bg-white rounded flex-wrap gap-2">
                                                <span className="avatar avatar-md avatar-rounded me-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    enableBackground="new 0 0 24 24" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#000">
                                                    <g>
                                                        <rect fill="none" height="24" width="24" />
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M12 4c-4.42 0-8 3.58-8 8 0 1.95.7 3.73 1.86 5.12C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C19.3 15.73 20 13.95 20 12c0-4.42-3.58-8-8-8zm0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13z"
                                                                enableBackground="new" opacity=".8"
                                                                fill="#fff" />
                                                            <path
                                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5zm6.14-2.88C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z" />
                                                            <path
                                                                d="M12 5.93c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                                        </g>
                                                    </g>
                                                </svg></span>
                                                <div>
                                                    <h5 className="fw-semibold mb-0">9.55K</h5>
                                                    <span className="text-muted">Owners</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="p-3 warning d-flex bg-white rounded flex-wrap gap-2">
                                                <span className="avatar avatar-md avatar-rounded me-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        enableBackground="new 0 0 24 24" height="24px"
                                                        viewBox="0 0 24 24" width="24px" fill="#000">
                                                        <g>
                                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <polygon opacity=".8" fill="#fff"
                                                                    points="12,15.4 8.24,17.67 9.24,13.39 5.92,10.51 10.3,10.13 12,6.1 13.71,10.14 18.09,10.52 14.77,13.4 15.77,17.68" />
                                                                <path
                                                                    d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                                <div>
                                                    <h5 className="fw-semibold mb-0">9.2/10</h5>
                                                    <span className="text-muted">Total Rating</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="p-2 mt-2 rounded bg-light d-flex align-items-center flex-wrap gap-2 mb-4">
                                    <div className="lh-1">
                                        <span
                                            className="avatar avatar-rounded avatar-md p-1 bg-primary bg-opacity-50 border">
                                            <img src={face12} alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="mb-0  fw-medium">Manistics NFT <i
                                            className="bi bi-patch-check-fill text-secondary align-middle lh-1"></i>
                                        </p>
                                        <p className="fs-11 text-muted mb-0">#manistics454</p>
                                    </div>
                                    <div className="ms-auto d-flex gap-3 align-items-center flex-wrap">
                                        <span className="fw-medium fs-12"><i
                                            className="ri-eye-fill me-1 align-middle d-inline-block text-primary"></i>16
                                            Views</span>
                                        <span className="fw-medium fs-12"><i
                                            className="ri-thumb-up-fill me-1 align-middle d-inline-block text-danger"></i>24
                                            Likes</span>
                                        <span className="fw-medium fs-12"><i
                                            className="ri-share-fill me-1 align-middle d-inline-block text-primary"></i>
                                            Share</span>
                                    </div>
                                </div>
                                <Row>
                                    <Col xl={6}>
                                        <div className="d-flex gap-1 mb-2 mb-xl-0 flex-wrap">
                                            <SpkButton Buttonvariant="primary"
                                                Customclass="btn mb-0 btn-wave btn-w-lg me-1 waves-effect waves-light">Place
                                                a bid
                                            </SpkButton>
                                            <SpkButton Buttonvariant="secondary"
                                                Customclass="btn mb-0 btn-wave btn-w-lg  waves-effect waves-light">Buy
                                                Now
                                            </SpkButton>
                                        </div>
                                    </Col>
                                    <Col xl={6} className=" d-flex justify-content-end align-items-center">
                                        <div className="">
                                            <p
                                                className="fs-12 bg-primary-transparent badge rounded-pill text-end mb-0">
                                                <i className="ri-eye-line text-primary me-1 align-middle"></i>
                                                <span className="fw-medium">
                                                    <Link to="#!"></Link>
                                                    3.5k
                                                    Views</span>
                                            </p>
                                            <p
                                                className="fs-12 bg-secondary-transparent badge rounded-pill text-end mb-0 ms-1">
                                                <i className="ri-share-line text-secondary me-1 align-middle "></i>
                                                <span className="fw-medium">
                                                    <Link to="#!"></Link>
                                                    Share</span>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
                <Col xl={8}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title> Bids : </Card.Title>
                            <Link to="#!" className="btn btn-primary btn-sm ms-auto"> View All </Link>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap">
                                    {Bidtabledata.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.borderClass}>
                                                <Link to="#!">
                                                    <div className="d-flex align-items-top">
                                                        <div className="avatar me-2">
                                                            <img src={idx.image} alt="" />
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-1 fs-14 fw-medium similar-product-name text-truncate">
                                                                {idx.title}
                                                            </p>
                                                            <span className="fw-medium fs-12">{idx.text}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td className={`text-center ${idx.borderClass}`}>
                                                <div className="d-flex gap-1 align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded lh-1">
                                                        <img src={idx.avatarimg} alt="" />
                                                    </span>
                                                    {idx.name}
                                                </div>
                                            </td>
                                            <td className={`text-center ${idx.borderClass}`}> {idx.date} </td>
                                            <td className={idx.borderClass}>
                                                <div className="justify-content-center d-flex gap-2">
                                                    <p className="mb-0 fs-16 fw-medium">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={Ethereum} alt="" />
                                                        </span>{idx.ethvalue}
                                                    </p>
                                                    <p className="mb-0 text-muted"> (<s>
                                                        <span className="avatar avatar-xs avatar-rounded p-1">
                                                            <img src={Ethereum} alt="" />
                                                        </span>{idx.ethpreviousvalue}</s>)
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="d-flex gap-1 align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium mb-0">Explore More NFT's:</h6> <a href="#!"
                            className="btn btn-primary-light btn-sm ms-auto"> View More </a>
                    </div>
                    <SpkSwiperJs slides={Nftdetailsswiper} breakpoint={breakpoints} autoplay={true} loop={true} navigation={true} className="swiper swiper-related-jobs" mainClass="" spaceBetween={10} slidesPerView={4} />
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between pb-0">
                            <Card.Title>
                                Reviews & Ratings
                            </Card.Title>
                            <Link to="#!" className="btn btn-light btn-sm ms-auto">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body className="">
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                                    <div className="d-flex align-items-center mb-3 flex-wrap gap-2">
                                        <div className="me-2 lh-1">
                                            <i className="ri-star-fill fs-14 text-warning me-1"></i>
                                            <i className="ri-star-fill fs-14 text-warning me-1"></i>
                                            <i className="ri-star-fill fs-14 text-warning me-1"></i>
                                            <i className="ri-star-fill fs-14 text-warning me-1"></i>
                                            <i className="ri-star-half-fill fs-14 text-warning"></i>
                                        </div>
                                        <div className="lh-1">
                                            <p className="mb-0 fw-medium">4.7 out of 5<span
                                                className="mb-0 text-muted fs-11 fw-normal"> Based on (1.5k)
                                                ratings</span></p>
                                        </div>
                                    </div>
                                    <SpkSwiperJs slides={ReviewSwiperdata} autoplay={true} className="swiper-basic crypto-swiper" mainClass="" spaceBetween={10} slidesPerView={1} />

                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Featured NFT's </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap">
                                    {Featurednfts.map((idx) => (
                                        <tr key={idx.id}>
                                            <td>
                                                <Link to="#!">
                                                    <div className="d-flex align-items-top">
                                                        <div className="avatar p-1 bg-gray-300 me-2">
                                                            <img src={idx.image} alt="" />
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p
                                                                className="mb-0 fs-14 fw-medium similar-product-name text-truncate">
                                                                {idx.title}</p>
                                                            <p className="mb-0">
                                                                <span className="text-muted ms-1">{idx.text}</span>
                                                            </p>
                                                        </div>

                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.bgcolor}-transparent`}>{idx.likes}<i
                                                    className="ri-heart-3-line fs-10 align-middle ms-1"></i></SpkBadge>
                                            </td>
                                            <td>
                                                <div>
                                                    <p
                                                        className="mb-0 fw-semibold d-flex align-items-center fs-16 justify-content-end">
                                                        <span className="avatar avatar-xs avatar-rounded p-1">
                                                            <img src={Ethereum} alt="" />
                                                        </span>{idx.ethvalue}
                                                        <span className="text-muted fs-12 mt-1 ms-1">ETH</span>
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                            <div className="d-grid my-3 px-3">
                                <Link to="#!" className="btn btn-secondary-light m-1">View All NFT's</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default NftDetails;