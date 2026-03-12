import { Fragment } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Network, Walletdata } from "../../../../shared/data/apps/nft/walletintegrationdata";
import { Link } from "react-router-dom";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import nft1 from '../../../../assets/images/nft-images/1.jpg';
import nft2 from '../../../../assets/images/nft-images/2.jpg';
import nft3 from '../../../../assets/images/nft-images/3.jpg';
import nft4 from '../../../../assets/images/nft-images/4.jpg';


const WalletIntegration = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Wallet Integration" />

            <Pageheader title="Apps" subtitle="NFT" currentpage="Wallet Integration" activepage="Wallet Integration" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={8}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Connect Your Wallet
                            </Card.Title>
                            <div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className="gy-3">
                                {Walletdata.map((idx) => (
                                    <div className="col" key={idx.id}>
                                        <Card className={`custom-card nft-wallet mb-0 ${idx.class}`}>
                                            <Card.Body className="py-1 px-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded p-1 bg-primary-transparent">
                                                            <img src={idx.image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="fw-medium mb-0 text-nowrap">{idx.title}</p>
                                                    </div>
                                                    <Link to="#!"
                                                        className={`btn btn-sm btn-${idx.class === "active" ? "primary" : "primary-light"} ms-auto`}>Connect</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Choose Your Blockchain Network
                            </Card.Title>
                            <div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className="gy-4">
                                {Network.map((idx) => (
                                    <div className="col" key={idx.id}>
                                        <div className={`nft-wallet ${idx.ActiveClass} rounded-pill`}>
                                            <Card.Body className="p-2">
                                                <Link to="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className={`avatar avatar-sm avatar-rounded p-1 bg-${idx.bgClass}-transparent`}>
                                                            <img src={idx.imgSrc} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fs-14 fw-medium mb-0 me-1">{idx.name}</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </div>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={12}>
                    <Card className="custom-card">
                        <Card.Body className="border-top">
                            <div className="mb-4 fs-15 fw-semibold">Wallet Features :</div>
                            <Row className="gy-3 gy-xl-0">
                                <Col xl={8}>
                                    <Tab.Container defaultActiveKey="first">
                                        <Nav className="nav-tabs tab-style-8 scaleX nft-tab gap-2 mb-3" id="myTab4"
                                            role="tablist">
                                            <Nav.Item className="nav-item" role="presentation">
                                                <Nav.Link eventKey="first" className="nav-link bg-light px-4" id="transactions"
                                                    data-bs-toggle="tab" data-bs-target="#transactions-pane"
                                                    type="button" role="tab" aria-controls="transactions-pane"
                                                    aria-selected="true">Wallet Transactions</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item" role="presentation">
                                                <Nav.Link eventKey="second" className="nav-link bg-light px-4" id="YourNFT" data-bs-toggle="tab"
                                                    data-bs-target="#YourNFTpane" type="button" role="tab"
                                                    aria-controls="YourNFTpane" aria-selected="false" tabIndex={-1}>NFT
                                                    Gallery</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="card-body tab-content p-0">
                                            <Tab.Pane eventKey="first" className="show overflow-hidden p-0 border-0"
                                                id="transactions-pane" role="tabpanel" aria-labelledby="transactions"
                                                tabIndex={0}>
                                                <ul className="list-group list-group-flush border rounded">
                                                    <li className="list-group-item">
                                                        <div className="d-flex gap-3 align-items-center flex-wrap">
                                                            <div className="lh-1">
                                                                <span
                                                                    className="avatar avatar-sm avatar-rounded bg-light text-default">
                                                                    <i className="bi bi-arrow-left-right fs-15 "></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="mb-1 d-flex justify-content-between gap-1">
                                                                    <span className="fw-medium">NFT Sale Proceeds</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="fs-13">From: <span
                                                                    className="text-primary fw-medium">@buyer456</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="fs-13">Amount: <span
                                                                    className="text-success fw-medium">0.75 ETH</span>
                                                                </div>
                                                            </div>
                                                            <div className="fs-12 text-muted ms-auto">30 mins ago</div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="d-flex gap-3 align-items-center flex-wrap">
                                                            <div className="lh-1">
                                                                <span
                                                                    className="avatar avatar-sm avatar-rounded bg-light text-default">
                                                                    <i className="bi bi-arrow-left-right fs-15 "></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="mb-1 d-flex justify-content-between gap-1">
                                                                    <span className="fw-medium">NFT Purchase</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="fs-13">To: <span
                                                                    className="text-primary fw-medium">@artist123</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="fs-13">Amount: <span
                                                                    className="text-danger fw-medium">$500</span></div>
                                                            </div>
                                                            <div className="fs-12 text-muted ms-auto">15 mins ago</div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="d-flex gap-3 align-items-center flex-wrap">
                                                            <div className="lh-1">
                                                                <span
                                                                    className="avatar avatar-sm avatar-rounded bg-light text-default">
                                                                    <i className="bi bi-arrow-left-right fs-15 "></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="mb-1 d-flex justify-content-between gap-1">
                                                                    <span className="fw-medium">NFT Auction Bid</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="fs-13">From: <span
                                                                    className="text-primary fw-medium">@bidder789</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="fs-13">Amount: <span className="fw-medium">0.5
                                                                    ETH</span></div>
                                                            </div>
                                                            <div className="fs-12 text-muted ms-auto">10 mins ago</div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="d-flex gap-3 align-items-center flex-wrap">
                                                            <div className="lh-1">
                                                                <span
                                                                    className="avatar avatar-sm avatar-rounded bg-light text-default">
                                                                    <i className="bi bi-arrow-left-right fs-15 "></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="mb-1 d-flex justify-content-between gap-1">
                                                                    <span className="fw-medium">ETH Withdrawal</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="fs-13">To: <span
                                                                    className="text-primary fw-medium">0xA1B2C3D4...</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="fs-13">Amount: <span
                                                                    className="text-danger fw-medium">2.0 ETH</span>
                                                                </div>
                                                            </div>
                                                            <div className="fs-12 text-muted ms-auto">1 hour ago</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second" className="overflow-hidden p-0 border-0" id="YourNFTpane"
                                                role="tabpanel" aria-labelledby="YourNFT" tabIndex={1}>
                                                <Row className="g-2 custom-width">
                                                    <Col xxl={3} className="col-6">
                                                        <img src={nft2} className="card-img" alt="..." />
                                                    </Col>
                                                    <Col xxl={3} className="col-6">
                                                        <img src={nft1} className="card-img" alt="..." />
                                                    </Col>
                                                    <Col xxl={3} className="col-6">
                                                        <img src={nft3} className="card-img" alt="..." />
                                                    </Col>
                                                    <Col xxl={3} className="col-6">
                                                        <img src={nft4} className="card-img" alt="..." />
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Col>
                                <Col xl={4}>
                                    <Card className="custom-card overflow-hidden bg-primary-transparent primary-dash-border nft-wallet-card">
                                        <Card.Body className="d-flex gap-2 align-items-center">
                                            <div className="fw-medium mb-0">
                                                NFT Wallet Balance
                                            </div>
                                            <h5 className="fw-bold ms-auto mb-0">$42,150</h5>
                                        </Card.Body>
                                    </Card>
                                    <Card className="custom-card mb-0 border shadow-none bg-light">
                                        <Card.Body>
                                            <div className="mb-4 fs-15 fw-semibold"><i
                                                className="ri-lightbulb-flash-fill text-secondary me-1 lh-1"></i>Security
                                                Tips: </div>
                                            <ul className="list-unstyled ps-3 mb-0">
                                                <li className="mb-3"><i
                                                    className="ri-shield-check-fill me-2 text-success lh-1 fs-15"></i><strong>Use
                                                        Strong Passwords:</strong> Create a unique and complex
                                                    password for your wallet.</li>
                                                <li><i
                                                    className="ri-shield-check-fill me-2 text-success lh-1 fs-15"></i><strong>Enable
                                                        Two-Factor Authentication:</strong> Use 2FA for added
                                                    security when accessing your wallet.</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between gap-2">
                            <SpkButton Buttonvariant="danger" Customclass="btn btn-wave">Import More Wallets</SpkButton>
                            <SpkButton Buttonvariant="secondary" Customclass="btn btn-wave">Add New Wallet</SpkButton>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

        </Fragment>
    );
};

export default WalletIntegration;