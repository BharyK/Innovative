import { Fragment } from "react";
import { Card, Col, Form, Pagination, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Link } from "react-router-dom";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import { Nftalldata } from "../../../../shared/data/apps/nft/marketplacedata";
import SpkNftMarcketPlace from "../../../../shared/@spk-reusable-components/reusable-dashboards/spk-nftmarcketplace";

const LiveAuction = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Live Auction" />

            <Pageheader title="Apps" subtitle="NFT" currentpage="Live Auction" activepage="Live Auction" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={3} xl={4} className="">
                    <Card className="custom-card products-navigation-card">
                        <Card.Header className=" pb-0 justify-content-between">
                            <Card.Title>
                                Filter
                            </Card.Title>
                            <Link to="#!" className="text-secondary text-decoration-underline">Clear All</Link>
                        </Card.Header>
                        <Card.Body>
                            <div className="p-3  border border-dashed mb-2 rounded">
                                <div className="fw-medium mb-0">Creator Status</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="Creator-Verified" defaultChecked />
                                        <label className="form-check-label mx-1" htmlFor="Creator-Verified">
                                            Verified Creators
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">20</SpkBadge>
                                    </div>
                                    <div className="form-check mb-0">
                                        <Form.Check className="me-2" type="checkbox" id="Creator-NonVerified" />
                                        <label className="form-check-label mx-1" htmlFor="Creator-NonVerified">
                                            Non-Verified Creators
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">40</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3  border border-dashed mb-2 rounded">
                                <div className="fw-medium mb-0">NFT Categories</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="Category-Art" defaultChecked />
                                        <label className="form-check-label mx-1" htmlFor="Category-Art">
                                            Digital Art
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">60</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="Category-Music" />
                                        <label className="form-check-label mx-1" htmlFor="Category-Music">
                                            Music
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">25</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="Category-Collectibles" />
                                        <label className="form-check-label mx-1" htmlFor="Category-Collectibles">
                                            Collectibles
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">35</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3  border border-dashed mb-2 rounded">
                                <div className="fw-medium mb-0">Price Brackets</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="Price-Under-0-5ETH" defaultChecked />
                                        <label className="form-check-label mx-1" htmlFor="Price-Under-0-5ETH">
                                            Under 0.5 ETH
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">70</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="Price-0-5-2ETH" />
                                        <label className="form-check-label mx-1" htmlFor="Price-0-5-2ETH">
                                            0.5 - 2 ETH
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">45</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="Price-2-5ETH" />
                                        <label className="form-check-label mx-1" htmlFor="Price-2-5ETH">
                                            2 - 5 ETH
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">25</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3  border border-dashed mb-2 rounded">
                                <div className="fw-medium mb-0">Blockchain Standards</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="Token-BSC" />
                                        <label className="form-check-label mx-1" htmlFor="Token-BSC">
                                            Binance Smart Chain
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">30</SpkBadge>
                                    </div>
                                    <div className="form-check mb-0">
                                        <Form.Check className="me-2" type="checkbox" id="Token-Polygon" />
                                        <label className="form-check-label mx-1" htmlFor="Token-Polygon">
                                            Polygon
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">20</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3  border border-dashed mb-2 rounded">
                                <div className="fw-medium mb-0">Auction States</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="Auction-Live" defaultChecked />
                                        <label className="form-check-label mx-1" htmlFor="Auction-Live">
                                            Live Auctions
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">75</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="Auction-Closed" />
                                        <label className="form-check-label mx-1" htmlFor="Auction-Closed">
                                            Closed Auctions
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">20</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3  border border-dashed rounded">
                                <div className="fw-medium mb-0">Ownership Types</div>
                                <div className="px-0 py-3 pb-1">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="Ownership-Listed" />
                                        <label className="form-check-label mx-1" htmlFor="Ownership-Listed">
                                            Listed for Sale
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">50</SpkBadge>
                                    </div>
                                    <div className="form-check mb-1">
                                        <Form.Check className="me-2" type="checkbox" id="Ownership-NotListed" />
                                        <label className="form-check-label mx-1" htmlFor="Ownership-NotListed">
                                            Not Listed for Sale
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">40</SpkBadge>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={8} className="">
                    <Card className="custom-card">
                        <Card.Header className="pb-0 justify-content-between">
                            <Card.Title>
                                Categories
                            </Card.Title>
                            <div className="d-flex gap-2 align-items-center">
                                <Link to="#!" className="categories-arrow left bg-primary-transparent">
                                    <i className="ri-arrow-left-s-line text-primary"></i>
                                </Link>
                                <Link to="#!" className="categories-arrow right bg-primary text-fixed-white">
                                    <i className="ri-arrow-right-s-line text-fixed-white"></i>
                                </Link>
                            </div>
                        </Card.Header>
                        <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                            <div className="nft-tag p-1 nft-tag-primary active">
                                <Link to="#!" className="stretched-link"></Link>
                                <span className=""><i className="ri-list-check lh-1 fs-18 align-middle nft-tag-icon"></i></span>
                                <span className="nft-tag-text">All Categories</span>
                            </div>
                            <div className="nft-tag p-1 nft-tag-secondary">
                                <Link to="#!" className="stretched-link"></Link>
                                <i className="ri-star-line lh-1 fs-18 align-middle nft-tag-icon"></i>
                                <span className="nft-tag-text">Trending Now</span>
                            </div>
                            <div className="nft-tag p-1 nft-tag-warning">
                                <Link to="#!" className="stretched-link"></Link>
                                <i className="ri-computer-line lh-1 fs-18 align-middle nft-tag-icon"></i>
                                <span className="nft-tag-text">Digital Collectibles</span>
                            </div>
                            <div className="nft-tag p-1 nft-tag-danger">
                                <Link to="#!" className="stretched-link"></Link>
                                <i className="ri-image-line lh-1 fs-18 align-middle nft-tag-icon"></i>
                                <span className="nft-tag-text">Photography</span>
                            </div>
                            <div className="nft-tag p-1 nft-tag-info">
                                <Link to="#!" className="stretched-link"></Link>
                                <i className="ri-paint-brush-line lh-1 fs-18 align-middle nft-tag-icon"></i>
                                <span className="nft-tag-text">Visual Arts</span>
                            </div>
                            <div className="nft-tag p-1 nft-tag-dark">
                                <Link to="#!" className="stretched-link"></Link>
                                <i className="ri-gift-line lh-1 fs-18 align-middle nft-tag-icon"></i>
                                <span className="nft-tag-text">Miscellaneous</span>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card.Body>
                        <h6 className="fw-medium mb-3">Live Auction:</h6>
                        <div className="row">
                            {Nftalldata.map((idx) => (
                                <Col xxl={3} xl={4} lg={4} sm={6} className="" key={idx.id}>
                                    <SpkNftMarcketPlace card={idx} />
                                </Col>
                            ))}
                        </div>
                        <nav aria-label="Page navigation" className="pagination-style-4">
                            <Pagination className="text-center justify-content-end gap-1">
                                <Pagination.Item disabled>
                                    Prev
                                </Pagination.Item>
                                <Pagination.Item active>1</Pagination.Item>
                                <Pagination.Item>2</Pagination.Item>
                                <Pagination.Item>
                                    <i className="bi bi-three-dots"></i>
                                </Pagination.Item>
                                <Pagination.Item>16</Pagination.Item>
                                <Pagination.Item>17</Pagination.Item>
                                <Pagination.Item className="text-primary">next</Pagination.Item>
                            </Pagination>
                        </nav>
                    </Card.Body>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default LiveAuction;