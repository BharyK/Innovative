import { Fragment } from "react";
import { Card, Col, Nav, Pagination, Row, Tab } from "react-bootstrap";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import { Creatorsdata, Nftalldata } from "../../../../shared/data/apps/nft/marketplacedata";
import SpkNftMarcketPlace from "../../../../shared/@spk-reusable-components/reusable-dashboards/spk-nftmarcketplace";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import nft7 from '../../../../assets/images/nft-images/7.jpg';
import nft8 from '../../../../assets/images/nft-images/8.jpg';
import nft13 from '../../../../assets/images/nft-images/13.jpg';
import nft14 from '../../../../assets/images/nft-images/14.jpg';
import nft15 from '../../../../assets/images/nft-images/15.jpg';
import nft16 from '../../../../assets/images/nft-images/16.jpg';
import nft17 from '../../../../assets/images/nft-images/17.jpg';
import nft34 from '../../../../assets/images/nft-images/34.jpg';

const Marketplace = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Market Place" />

            <Pageheader title="Apps" subtitle="NFT" currentpage="Market Place" activepage="Market Place" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        <Tab.Container defaultActiveKey="first">
                            <Col xl={12}>
                                <Card className="custom-card nft-market-card">
                                    <Card.Body>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div>
                                                <Nav className="nav-tabs nav-tabs-header mb-0" role="tablist">
                                                    <Nav.Item className="" role="presentation">
                                                        <Nav.Link eventKey="first" className="d-flex align-items-center gap-1" href="#nft-all" aria-selected="true">
                                                            <i className="ri-global-line fs-15 fw-normal me-1"></i>All
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="" role="presentation">
                                                        <Nav.Link eventKey="second" className="nav-link d-flex align-items-center gap-1" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-art" aria-selected="false" tabIndex={-1}>
                                                            <i className="ri-palette-line fs-15 fw-normal me-1"></i>Art
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="" role="presentation">
                                                        <Nav.Link eventKey="third" className="nav-link d-flex align-items-center gap-1" href="#nft-gaming" aria-selected="false" tabIndex={-1}>
                                                            <i className="ri-discord-line fs-15 fw-normal me-1"></i>Gaming
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="" role="presentation">
                                                        <Nav.Link eventKey="fourth" className="nav-link d-flex align-items-center gap-1" href="#nft-domain" aria-selected="false" tabIndex={-1}>
                                                            <i className="ri-firebase-line fs-15 fw-normal me-1"></i>Domain
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="" role="presentation">
                                                        <Nav.Link eventKey="fifth" className="nav-link d-flex align-items-center gap-1" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-music" aria-selected="false" tabIndex={-1}>
                                                            <i className="ri-music-2-line fs-15 fw-normal me-1"></i>Music
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="" role="presentation">
                                                        <Nav.Link eventKey="sixth" className="nav-link d-flex align-items-center gap-1 text-nowrap" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-realestate" aria-selected="false" tabIndex={-1}>
                                                            <i className="ri-home-3-line fs-15 fw-normal me-1"></i>Real Estate
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="" role="presentation">
                                                        <Nav.Link eventKey="seven" className="nav-link d-flex align-items-center gap-1" href="#nft-sports" aria-selected="false" tabIndex={-1}>
                                                            <i className="ri-football-line fs-15 fw-normal me-1"></i>Sports
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="" role="presentation">
                                                        <Nav.Link eventKey="eight" className="nav-link d-flex align-items-center gap-1" href="#nft-fashion" aria-selected="false" tabIndex={-1}>
                                                            <i className="ri-t-shirt-line fs-15 fw-normal me-1"></i>Fashion
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="" role="presentation">
                                                        <Nav.Link eventKey="nine" className="nav-link d-flex align-items-center gap-1"
                                                            href="#nft-avatars" aria-selected="false" tabIndex={-1}>
                                                            <i className="ri-award-line fs-15 fw-normal me-1"></i>Avatars
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="" role="presentation">
                                                        <Nav.Link eventKey="ten" className="nav-link d-flex align-items-center gap-1" href="#nft-memes" aria-selected="false" tabIndex={-1}>
                                                            <i className="ri-emoji-sticker-line fs-15 fw-normal me-1"></i>Memes
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <SpkButton Buttontype="button" Buttonvariant="secondary-light" Size="sm" Customclass="btn btn-wave">Filters</SpkButton>
                                                <SpkDropdown Togglevariant="primary-light" Customtoggleclass="btn btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                                    <li><Link className="dropdown-item" to="#!">New Collection</Link></li>
                                                    <li><Link className="dropdown-item" to="#!">High-Low</Link></li>
                                                    <li><Link className="dropdown-item" to="#!">Low - High</Link></li>
                                                </SpkDropdown>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Tab.Content className="">
                                    <Tab.Pane eventKey="first" className="show p-0 border-0" id="nft-all" role="tabpanel">
                                        <Row>
                                            {Nftalldata.map((idx) => (
                                                <Col xl={3} sm={6} className="" key={idx.id}>
                                                    <SpkNftMarcketPlace card={idx} />
                                                </Col>
                                            ))}
                                        </Row>
                                        <nav aria-label="Page navigation">
                                            <Pagination className="pagination justify-content-end mb-4">
                                                <Pagination.Item disabled>Previous</Pagination.Item>
                                                <Pagination.Item >1</Pagination.Item>
                                                <Pagination.Item active>2</Pagination.Item>
                                                <Pagination.Item >3</Pagination.Item>
                                                <Pagination.Item >Next</Pagination.Item>
                                            </Pagination>
                                        </nav>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className="p-0 border-0" id="nft-art" role="tabpanel">
                                        <Row>
                                            {Nftalldata.slice(0, 4).map((idx) => (
                                                <Col xl={3} key={idx.id}>
                                                    <SpkNftMarcketPlace card={idx} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" className="p-0 border-0" id="nft-gaming" role="tabpanel">
                                        <Row>
                                            {Nftalldata.slice(5, 8).map((idx) => (
                                                <Col xl={3} key={idx.id}>
                                                    <SpkNftMarcketPlace card={idx} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth" className="p-0 border-0" id="nft-domain" role="tabpanel">
                                        <Row>
                                            {Nftalldata.slice(4, 6).map((idx) => (
                                                <Col xl={3} key={idx.id}>
                                                    <SpkNftMarcketPlace card={idx} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth" className="p-0 border-0" id="nft-music" role="tabpanel">
                                        <Row>
                                            {Nftalldata.slice(3, 4).map((idx) => (
                                                <Col xl={3} key={idx.id}>
                                                    <SpkNftMarcketPlace card={idx} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth" className="p-0 border-0" id="nft-realestate" role="tabpanel">
                                        <Row>
                                            {Nftalldata.slice(2, 3).map((idx) => (
                                                <Col xl={3} key={idx.id}>
                                                    <SpkNftMarcketPlace card={idx} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seven" className="p-0 border-0" id="nft-sports" role="tabpanel">
                                        <Row>
                                            {Nftalldata.slice(0, 1).map((idx) => (
                                                <Col xl={3} key={idx.id}>
                                                    <SpkNftMarcketPlace card={idx} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="eight" className="p-0 border-0" id="nft-fashion" role="tabpanel">
                                        <Row>
                                            {Nftalldata.slice(2, 3).map((idx) => (
                                                <Col xl={3} key={idx.id}>
                                                    <SpkNftMarcketPlace card={idx} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="nine" className="p-0 border-0" id="nft-avatars" role="tabpanel">
                                        <Row>
                                            {Nftalldata.slice(1, 2).map((idx) => (
                                                <Col xl={3} key={idx.id}>
                                                    <SpkNftMarcketPlace card={idx} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ten" className="p-0 border-0" id="nft-memes" role="tabpanel">
                                        <Row>
                                            {Nftalldata.slice(3, 4).map((idx) => (
                                                <Col xl={3} key={idx.id}>
                                                    <SpkNftMarcketPlace card={idx} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Tab.Container>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Row>
                        <Col xxl={12} xl={12} >
                            <Card className="custom-card main-crm-card overflow-hidden">
                                <Card.Body className="p-4">
                                    <SpkBadge variant="secondary">Trending Art Work</SpkBadge>
                                    <h6 className="mb-2 mt-2 fw-semibold">Discover the world of NFT's</h6>
                                    <p className="mb-3">Unlock the first text-based NFT. Create or choose text to live
                                        forever on the Ethereum blockchain, with the option to add more text later.
                                    </p>
                                    <div className="d-flex gap-2">
                                        <Link to="#!" className="btn btn-primary btn-sm">Create NFT</Link>
                                        <Link to="#!" className="btn btn-outline-primary btn-sm">Explore Now</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={6} className="custom-swiper">
                            <Swiper className="swiper-navigation" slidesPerView={1} navigation={true} modules={[Autoplay, Navigation]} autoplay={{ delay: 2500, disableOnInteraction: false }}>
                                <SwiperSlide className="custom-swiper">
                                    <Card className="custom-card">
                                        <Card.Header className="justify-content-between">
                                            <Card.Title className="">Art Work
                                                <SpkBadge variant="primary-transparent" Customclass="fs-11 ms-2">123</SpkBadge>
                                            </Card.Title>
                                            <Link to="#!" className="btn btn-sm btn-light">View All</Link>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <Row className="gx-2">
                                                <div className="col-6 custom-swiper">
                                                    <img src={nft14} alt="img" className="w-100 h-auto rounded-1 mb-2" />
                                                    <img src={nft16} alt="img" className="w-100 h-auto rounded-1" />
                                                </div>
                                                <div className="col-6 custom-swiper">
                                                    <img src={nft15} alt="img" className="w-100 h-auto rounded-1 mb-2" />
                                                    <img src={nft8} alt="img" className="w-100 h-auto rounded-1" />
                                                </div>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide className="custom-swiper">
                                    <Card className="custom-card">
                                        <Card.Header className="justify-content-between">
                                            <Card.Title className="">Music
                                                <SpkBadge variant="secondary-transparent" Customclass="fs-11 ms-2">142</SpkBadge>
                                            </Card.Title>
                                            <Link to="#!" className="btn btn-sm btn-light">View All</Link>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <Row className="gx-2">
                                                <div className="col-6 custom-swiper">
                                                    <img src={nft7} alt="img" className="w-100 h-auto rounded-1 mb-2" />
                                                    <img src={nft13} alt="img" className="w-100 h-auto rounded-1" />
                                                </div>
                                                <div className="col-6 custom-swiper">
                                                    <img src={nft17} alt="img" className="w-100 h-auto rounded-1 mb-2" />
                                                    <img src={nft34} alt="img" className="w-100 h-auto rounded-1" />
                                                </div>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                        <Col xxl={12} xl={6} className="">
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between pb-0">
                                    <Card.Title className="">Top Creators</Card.Title>
                                    <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View
                                        All<i className="ti ti-arrow-narrow-right ms-1"></i>
                                    </Link>
                                </Card.Header>
                                <Card.Body>
                                    <Row className="gx-3 gy-3">
                                        {Creatorsdata.map((idx) => (
                                            <Col xl={6} md={3} sm={6} key={idx.id}>
                                                <div className="p-1 border rounded top-creator-card">
                                                    <div className="position-relative custom-width">
                                                        <img src={idx.bgimg} alt="img" className="w-100 h-auto rounded-1" />
                                                        <span className="avatar avatar-lg p-1 bg-light avatar-rounded position-absolute top-100 start-50 translate-middle">
                                                            <img src={idx.image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="p-2 text-center mt-3">
                                                        <p className="fs-14 fw-semibold mb-0">{idx.title}</p>
                                                        <span className="fs-13 text-muted">{idx.text}</span>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default Marketplace;