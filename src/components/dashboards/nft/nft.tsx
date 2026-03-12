import { Fragment } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import { FeaturedNFT, History, LatestBids, NFTStatisticsOptions, NFTStatisticsSeries, RecentActivity, StatCards, TopNFTCollections, TrendingBids } from "../../../shared/data/dashboards/nftdata";
import SpkNftcard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-nftcard";
import SpkButtongroup from "../../../shared/@spk-reusable-components/reusable-uielements/spk-buttongroup";
import SpkNftMarcketPlace from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-nftmarcketplace";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import media95 from '../../../assets/images/media/media-95.jpg'
import nft9 from '../../../assets/images/nft-images/9.jpg'
import nft10 from '../../../assets/images/nft-images/10.jpg'
import nft11 from '../../../assets/images/nft-images/11.jpg'
import nft12 from '../../../assets/images/nft-images/12.jpg'
import Ethereum from '../../../assets/images/crypto-currencies/regular/Ethereum.svg'

const Nft = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"NFT"} />

            <Pageheader title="Dashboard" currentpage="NFT" activepage="NFT" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body className=" p-sm-5 p-3 nft-banner-card rounded overflow-hidden">
                                    <div className="img-container">
                                        <img src={media95} alt="" />
                                    </div>
                                    <Row className=" position-relative z-3">
                                        <Col xl={7}>
                                            <h4 className="fw-semibold text-fixed-white">
                                                Discover, Collect, Create: Your NFT Universe Awaits!
                                            </h4>
                                            <p className=" fs-15 op-8 text-fixed-white mb-4">Explore unique digital
                                                assets, connect with creators, and unlock endless possibilities in
                                                the world of nft's.</p>
                                            <div className="d-flex mt-4 gap-2 custom-active-btn">
                                                <SpkButton Buttonvariant="white" Customclass="btn btn-w-md">Explore</SpkButton>
                                                <SpkButton Buttonvariant="w-md" Customclass="btn border-white border-opacity-25 text-fixed-white">Sell Now</SpkButton>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>Explore Artworks</Card.Title>
                                    <Link to="#!" className="btn btn-sm btn-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body className=" pt-1 pb-4">
                                    <Row className=" gy-4">
                                        <Col md={3} sm={6} className="position-relative">
                                            <img src={nft12} alt="img" className="w-100 h-100 rounded" />
                                            <Link to="#!" className="art-title primary position-absolute top-100 start-50 translate-middle">Music</Link>
                                        </Col>
                                        <Col md={3} sm={6} className="position-relative">
                                            <img src={nft10} alt="img" className="w-100 h-100 rounded" />
                                            <Link to="#!" className="art-title secondary position-absolute top-100 start-50 translate-middle">Games</Link>
                                        </Col>
                                        <Col md={3} sm={6} className="position-relative">
                                            <img src={nft9} alt="img" className="w-100 h-100 rounded" />
                                            <Link to="#!" className="art-title danger position-absolute top-100 start-50 translate-middle">Fashion</Link>
                                        </Col>
                                        <Col md={3} sm={6} className="position-relative">
                                            <img src={nft11} alt="img" className="w-100 h-100 rounded" />
                                            <Link to="#!" className="art-title warning position-absolute top-100 start-50 translate-middle">Real Estate</Link>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        {StatCards.map((data) => (
                            <Col md={4} key={data.id}>
                                <SpkNftcard card={data} showDashboard={true} titleClass="mb-1" MaindivClass="gap-3 flex-wrap" />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={8}>
                    <Row>
                        <Col xl={12}>
                            <div className="d-flex align-items-center mb-2 justify-content-between">
                                <p className="fs-18 fw-semibold pt-2">Trending Bids :</p>
                                <SpkButtongroup Customclass="btn-group-sm" Buttongrplabel="Basic example">
                                    <SpkButton Buttonvariant="secondary" Buttontype="button" Customclass="btn btn-sm btn-wave waves-effect waves-light">1D</SpkButton>
                                    <SpkButton Buttonvariant="secondary-light" Buttontype="button" Customclass="btn btn-sm btn-wave waves-effect waves-light">1W</SpkButton>
                                    <SpkButton Buttonvariant="secondary-light" Buttontype="button" Customclass="btn btn-sm btn-wave waves-effect waves-light">1M</SpkButton>
                                    <SpkButton Buttonvariant="secondary-light" Buttontype="button" Customclass="btn btn-sm btn-wave waves-effect waves-light">1Y</SpkButton>
                                </SpkButtongroup>
                            </div>
                        </Col>
                        {TrendingBids.map((data) => (
                            <Col lg={3} sm={6} key={data.id}>
                                <SpkNftMarcketPlace card={data} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Recent Activity</Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className="pt-0">
                            <ul className="list-unstyled nft-transaction-list p-1">
                                {RecentActivity.map((data) => (
                                    <li key={data.id}>
                                        <div className="d-flex gap-2">
                                            <div>
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <img src={data.avatar} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="fw-semibold mb-0">{data.title}</div>
                                                    <SpkBadge variant="light" Customclass=" text-default border">{data.date}</SpkBadge>
                                                </div>
                                                <div className="text-muted fs-13 w-75">{data.description}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" pb-2">
                            <Card.Title>
                                Top NFTs Collections
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" p-0" id="top-collector">
                            <div className="table-responsive">
                                <SpkTables tableClass="table table-hover text-nowrap" >
                                    {TopNFTCollections.map((data) => (
                                        <tr key={data.id}>
                                            <td className={data.borderClass}>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className={`avatar avatar-md p-1 bg-${data.profileBg}`}>
                                                            <img src={data.profile} alt="Profile Picture" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="fw-semibold mb-0">{data.title}</p>
                                                        <p className="mb-0 text-muted fs-12">{data.category}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={data.borderClass}>
                                                <div className="avatar-list-stacked">
                                                    {data.nfts.map((imgSrc, idx) => (
                                                        <span className={`avatar avatar-sm avatar-rounded bg-${data.nftsBg}`} key={idx}>
                                                            <img src={imgSrc} alt="NFT Image" />
                                                        </span>
                                                    ))}
                                                    {data.moreNfts ?
                                                        <span className={`avatar avatar-sm avatar-rounded bg-${data.moreNftBg}`}>
                                                            {data.moreNfts}
                                                        </span>
                                                        : ""}
                                                </div>
                                            </td>
                                            <td className={data.borderClass}>
                                                <p className="mb-0 fw-semibold fs-14">{data.valueUSD}</p>
                                                <span className="fs-11 fw-normal text-primary">{data.valueETH}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5}>
                    <Card className="custom-card">
                        <Card.Header className=" pb-2 justify-content-between">
                            <Card.Title> NFT Statistics </Card.Title>
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                                <div> <SpkButton Buttonvariant="light" Customclass="btn border btn-sm">Export<i className="ri-share-forward-line ms-1"></i></SpkButton> </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div id="nft-statustics">
                                <Spkapexcharts chartOptions={NFTStatisticsOptions} chartSeries={NFTStatisticsSeries} type="line" width={"100%"} height={342} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Featured NFT</Card.Title>
                            <Link to="#!" className="fs-12 fw-medium text-muted"> View All<i
                                className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className="pt-1 p-0">
                            <ListGroup className="list-group-flush">
                                {FeaturedNFT.map((data) => (
                                    <ListGroup.Item className="list-group-item" key={data.id}>
                                        <Link to="#!">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-lg">
                                                            <img src={data.profile} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">{data.name}<i className="bi bi-patch-check-fill text-primary ms-2"></i></p>
                                                        <span className="fs-12 text-muted">{data.email}</span>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <div className="text-muted fs-12 mb-1 fw-medium">
                                                        Sold: {data.sold}
                                                    </div>
                                                    <SpkButton Buttonvariant={data.actionBg} Customclass={`btn btn-sm btn-wave waves-effect waves-light`}>{data.action}</SpkButton>
                                                </div>
                                            </div>
                                        </Link>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> History </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn-light btn btn-sm text-dark no-caret" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1">
                                <li className="border-bottom"><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                <li className="border-bottom"><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="pb-1 p-0">
                            <ListGroup className=" list-group-flush mb-0">
                                {History.map((data) => (
                                    <ListGroup.Item key={data.id}>
                                        <Link to="#!">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src={data.image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="fw-semibold mb-0 fs-14">{data.name}</p>
                                                        <span className="text-muted fs-12">{data.username}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0 fw-semibold d-flex align-items-center fs-16">
                                                        {data.bid}
                                                        <span className="text-muted fs-12 mt-1 ms-1">{data.currency}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Latest Bids
                            </Card.Title>
                            <div className="d-flex">
                                <div className="me-3">
                                    <input className="form-control form-control-sm" type="text"
                                        placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block d-inline-block">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="table-responsive">
                                <SpkTables tableClass="table table-hover table-bordered text-nowrap nft-table" header={[{ headerClassname: "border border-dashed bg-light", title: 'Bid Item' }, { headerClassname: "border border-dashed bg-light", title: 'Amount' }, { headerClassname: "border border-dashed bg-light", title: 'Current Offer' }, { headerClassname: "border border-dashed bg-light", title: 'Submitted By' }, { headerClassname: "border border-dashed bg-light", title: 'Status' }, { headerClassname: "border border-dashed bg-light", title: 'Time Remaining' }, { headerClassname: "border border-dashed bg-light", title: 'Actions' },]}>
                                    {LatestBids.map((data) => (
                                        <tr key={data.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={data.nft_image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold"><Link to="#!"
                                                            title="nft_name">{data.nft_name}</Link></p>
                                                        <Link to="#!"
                                                            className="fs-12 text-muted fw-normal"
                                                            title="creator_name">{data.creator}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={Ethereum} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">{data.Amount}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={Ethereum} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold text-primary">{data.currentOffer}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src={data.owner_image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-medium">{data.owner}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${data.statusBg}`}>{data.status}</SpkBadge>
                                            </td>
                                            <td><span className="text-muted fs-medium">{data.time_left}</span></td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-icon">
                                                        <i className="ri-pencil-line lh-1 align-middle"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="danger-light" Customclass="btn btn-sm btn-icon">
                                                        <i className="ri-delete-bin-line lh-1 align-middle"></i>
                                                    </SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing {LatestBids.length} Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled"><Link className="page-link" to="#!">Prev</Link></li>
                                            <li className="page-item active"><Link className="page-link" to="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#!">2</Link></li>
                                            <li className="page-item"> <Link className="page-link text-primary" to="#!"> next </Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}
        </Fragment>
    );
};

export default Nft;