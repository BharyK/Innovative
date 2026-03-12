
import { Fragment } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../../shared/layouts-components/seo/seo";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Amount, Crypto, Crypto1, SellCrypto, SellCrypto1, Staticoptions, Staticseries } from "../../../../shared/data/apps/crypto/buyselldata";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import Ethereum from '../../../../assets/images/crypto-currencies/square-color/Ethereum.svg';
import Bitcoin from '../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg';


const BuySell = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Buy & Sell" />
            <Pageheader title="Apps" subtitle="Crypto" currentpage="Buy & Sell" activepage="Buy & Sell" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row className="buy-crypto">
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="pb-0">
                            <Card.Title>
                                Buy Crypto
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="crypto-but-sell-card">
                            <div>
                                <div className="input-group mb-3 flex-nowrap">
                                    <input type="text" className="form-control" aria-label="crypto buy select"
                                        placeholder="Select Currency" />
                                    <SpkSelect name="colors" option={Crypto} mainClass="basic-multi-select buysell" placeholder="BTC"
                                        menuplacement='auto' classNameprefix="Select2"
                                    />
                                </div>
                                <div className="input-group mb-3 flex-nowrap">
                                    <input type="text" className="form-control" aria-label="crypto buy select" />
                                    <SpkSelect name="colors" option={Crypto1} mainClass="basic-multi-select buysell" placeholder="USD"
                                        menuplacement='auto' classNameprefix="Select2"
                                    />
                                </div>
                                <div>
                                    <div className="fs-14 py-2">
                                        <span className="fw-medium text-dark">Price:</span>
                                        <span className="text-muted ms-2 fs-14 d-inline-block">6.003435</span>
                                        <span className="text-dark fw-medium float-end">BTC</span>
                                    </div>
                                    <div className="fs-14 py-2">
                                        <span className="fw-medium text-dark">Amount:</span>
                                        <span className="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span>
                                        <span className="text-dark fw-medium float-end">LTC</span>
                                    </div>
                                    <div className="fw-medium fs-14 py-2">Total:
                                        <span className="fs-14 d-inline-block ms-1"> 22.00 BTC</span>
                                    </div>
                                    <div className="fs-12 text-primary">Additional Charges: 0.32%(0.0001231 BTC)</div>
                                    <label className="fw-medium fs-12 mt-4 mb-3">SELECT PAYMENT METHOD :</label>
                                    <div className="row g-2">
                                        <Col xl={6}>
                                            <div className="p-2 border rounded">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="radio"
                                                        name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                    <label className="form-check-label fs-12" htmlFor="flexRadioDefault1">
                                                        Credit / Debit Cards
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={6}>
                                            <div className="p-2 border rounded">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="radio"
                                                        name="flexRadioDefault" id="flexRadioDefault2" />
                                                    <label className="form-check-label fs-12" htmlFor="flexRadioDefault2">
                                                        Paypal
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={12}>
                                            <div className="p-2 border rounded">
                                                <div className="form-check mb-0">
                                                    <input className="form-check-input" type="radio"
                                                        name="flexRadioDefault" id="flexRadioDefault3" />
                                                    <label className="form-check-label fs-12" htmlFor="flexRadioDefault3">
                                                        Wallet
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                </div>
                                <div className="d-grid mt-4 pt-1">
                                    <SpkButton Buttontype="button" Buttonvariant="" Customclass="btn btn-primary btn-wave">BUY</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="pb-0">
                            <Card.Title>
                                Sell Crypto
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="crypto-but-sell-card">
                            <div className="tab-pane border-0 p-0" id="sell-crypto1" role="tabpanel"
                                aria-labelledby="sell-crypto1">
                                <div className="input-group mb-3 flex-nowrap">
                                    <Form.Control type="text" className="form-control" aria-label="crypto buy select"
                                        placeholder="Select Currency" />
                                    <SpkSelect name="colors" option={SellCrypto} mainClass="basic-multi-select buysell" placeholder="BTC"
                                        menuplacement='auto' classNameprefix="Select2"
                                    />
                                </div>
                                <div className="input-group mb-3 flex-nowrap">
                                    <Form.Control type="text" className="form-control" aria-label="crypto buy select" />
                                    <SpkSelect name="colors" option={SellCrypto1} mainClass="basic-multi-select buysell" placeholder="USD"
                                        menuplacement='auto' classNameprefix="Select2"
                                    />
                                </div>
                                <div className="mb-3">
                                    <span className="form-label">Crypto Value :</span>
                                    <div className="position-relative">
                                        <div
                                            className="p-2 border rounded d-flex align-items-center justify-content-between gap-3 mt-1">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="lh-1">
                                                    <span className="avatar bg-light p-2">
                                                        <img src={Bitcoin} alt="" />
                                                    </span>
                                                </div>
                                                <div className="fw-medium">Bitcoin - BTC</div>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-medium d-block">0.374638535 BTC</span>
                                                <span className="text-muted">$5,364.65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <span className="form-label">Deposit To :</span>
                                    <div className="position-relative">
                                        <div className="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                                            <div className="lh-1">
                                                <span className="avatar bg-light p-2">
                                                    <i className="ri-bank-line text-info fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="fw-medium d-block">Banking</span>
                                                <span className="text-muted">Checking ...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="fs-14 py-2">
                                        <div className="d-inline-flex">
                                            <span className="fw-medium text-dark">Price:</span><span
                                                className="text-muted ms-2 fs-14">6.003435</span>
                                        </div>
                                        <span className="text-dark fw-medium float-end">BTC</span>
                                    </div>
                                    <div className="fs-14 py-2">
                                        <div className="d-inline-flex">
                                            <span className="fw-medium text-dark">Amount:</span><span
                                                className="text-muted ms-2 fs-14">2,34,4543.00</span>
                                        </div>
                                        <span className="text-dark fw-medium float-end">LTC</span>
                                    </div>
                                </div>
                                <div className="d-grid mt-4">
                                    <SpkButton Buttontype="button" Buttonvariant="danger" Customclass="btn btn-wave">SELL</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="pb-0">
                            <Card.Title>
                                Quick Secure Transfer
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="crypto-but-sell-card">
                            <div className="tab-pane border-0 p-0" id="sell-crypto" role="tabpanel"
                                aria-labelledby="sell-crypto">
                                <div className="mb-3">
                                    <span className="form-label">Crypto Value :</span>
                                    <div className="position-relative">
                                        <Link to="#!" className="stretched-link"></Link>
                                        <div
                                            className="p-2 border rounded d-flex align-items-center justify-content-between gap-3 mt-1">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="lh-1">
                                                    <span className="avatar bg-light p-2">
                                                        <img src={Bitcoin} alt="" />
                                                    </span>
                                                </div>
                                                <div className="fw-medium">Bitcoin - BTC</div>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-medium d-block">0.374638535 BTC</span>
                                                <span className="text-muted">$5,364.65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <span className="form-label">Deposit To :</span>
                                    <div className="position-relative">
                                        <Link to="#!" className="stretched-link"></Link>
                                        <div className="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                                            <div className="lh-1">
                                                <span className="avatar bg-light p-2">
                                                    <i className="ri-bank-line text-info fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="fw-medium d-block">Banking</span>
                                                <span className="text-muted">Checking ...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <span className="d-block fw-medium">Amount :</span>
                                    <div className="d-flex align-items-center justify-content-between text-muted">
                                        <div>Weekly Bank Limit</div>
                                        <div>$10,000 remaining</div>
                                    </div>
                                </div>
                                <div className="input-group mb-3 flex-nowrap">
                                    <Form.Control type="text" className="form-control" aria-label="crypto buy select" />
                                    <SpkSelect name="colors" option={Amount} mainClass="basic-multi-select buysell" placeholder="BTC"
                                        menuplacement='auto' classNameprefix="Select2"
                                    />
                                </div>
                                <div>
                                    <div className="fs-14 py-2">
                                        <div className="d-inline-flex">
                                            <span className="fw-medium text-dark">Price:</span><span
                                                className="text-muted ms-2 fs-14">6.003435</span>
                                        </div>
                                        <span className="text-dark fw-medium float-end">BTC</span>
                                    </div>
                                    <div className="fs-14 py-2">
                                        <div className="d-inline-flex">
                                            <span className="fw-medium text-dark">Amount:</span><span
                                                className="text-muted ms-2 fs-14">2,34,4543.00</span>
                                        </div>
                                        <span className="text-dark fw-medium float-end">LTC</span>
                                    </div>
                                </div>
                                <div className="d-grid mt-4">
                                    <SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="btn btn-wave">Transfer</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Buy & Sell Statistics
                            </Card.Title>
                            <div className="btn-group flex-wrap" role="group" aria-label="Basic example">
                                <SpkButton Buttontype="button" Buttonvariant="primary" Size="sm" Customclass="btn btn-wave">1D</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Size="sm" Customclass="btn btn-wave">1W</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Size="sm" Customclass="btn btn-wave">1M</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Size="sm" Customclass="btn btn-wave">3M</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Size="sm" Customclass="btn btn-wave">6M</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Size="sm" Customclass="btn btn-wave">1Y</SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-xl-0">
                            <Row>
                                <Col xl={9} className="pe-0 border-end border-inline-end-dashed">
                                    <div
                                        className="d-flex flex-wrap align-items-center border-bottom border-block-end-dashed mb-3 p-3 gap-4 ps-5 justify-content-between">
                                        <div>
                                            <span className="d-block fs-12">Total Buy</span>
                                            <span className="d-block fw-medium fs-15 text-primary">$324.25 USD</span>
                                        </div>
                                        <div>
                                            <span className="d-block fs-12">Total Sell</span>
                                            <span className="d-block fw-medium fs-15 text-danger">$4,235.25 USD</span>
                                        </div>
                                        <div>
                                            <span className="d-block fs-12">Available Balance</span>
                                            <span className="d-block fw-medium fs-15 text-secondary">$22,803.92 USD</span>
                                        </div>
                                        <div>
                                            <span className="d-block fs-12">Total Crypto Asset Value</span>
                                            <span className="d-block fw-medium fs-15 text-warning">$4,56,683.00
                                                USD</span>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div id="buy_sell-statistics" className="px-3">
                                        <Spkapexcharts chartOptions={Staticoptions} chartSeries={Staticseries} type="bar" width={"100%"} height={300} />
                                    </div>
                                </Col>
                                <Col xl={3} className="ps-xl-0">
                                    <div className="p-3">
                                        <Card className="custom-card border shadow-none">
                                            <Card.Body>
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <div> <span className="avatar avatar-xl avatar-rounded"> <img
                                                        src={Bitcoin}
                                                        alt="Bitcoin" /> </span> </div>
                                                    <div>
                                                        <h5 className="fw-medium mb-1">27,536.12<span
                                                            className="ms-2 d-inline-block text-muted mb-2 fs-12 fw-normal">BTC/USD</span>
                                                        </h5> <span className="text-danger d-block fs-12 mt-1">-0.06%
                                                            (24h)</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3 mb-2 flex-wrap">
                                                    <div> <span className="d-block text-muted mb-1">Avail.
                                                        Balance:</span>
                                                        <h6 className="fw-medium mb-1">$22,803.92 USD</h6>
                                                    </div>
                                                    <div> <span className="d-block text-muted mb-1 text-end">Asset
                                                        Value:</span>
                                                        <h6 className="fw-medium mb-1">$456,683.00 USD</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Card className="custom-card border shadow-none mb-0">
                                            <Card.Body>
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <div> <span className="avatar avatar-xl avatar-rounded"> <img
                                                        src={Ethereum}
                                                        alt="Ethereum" /> </span> </div>
                                                    <div>
                                                        <h5 className="fw-medium mb-1">1,837.45<span
                                                            className="ms-2 d-inline-block text-muted mb-2 fs-12 fw-normal">ETH/USD</span>
                                                        </h5> <span className="text-primary d-block fs-12 mt-1">+1.23%
                                                            (24h)</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3 mb-2 flex-wrap">
                                                    <div> <span className="d-block text-muted mb-1">Avail.
                                                        Balance:</span>
                                                        <h6 className="fw-medium mb-1">$10,452.67 USD</h6>
                                                    </div>
                                                    <div> <span className="d-block text-muted mb-1 text-end">Asset
                                                        Value:</span>
                                                        <h6 className="fw-medium mb-1">$150,300.00 USD</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    );
};

export default BuySell;