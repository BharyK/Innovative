

import { Fragment } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Cryptocurrencies, Currency, SellCoins } from "../../../../shared/data/apps/crypto/currencyexchangedata";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkMarketcap from "../../../../shared/@spk-reusable-components/reusable-apps/spk-marketcap";
import media76 from '../../../../assets/images/media/media-76.png'


const CurrencyExchange = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Currency Exchange" />
            <Pageheader title="Apps" subtitle="Crypto" currentpage="Currency Exchange" activepage="Currency Exchange" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={8}>
                    <Card className="custom-card currency-exchange-card">
                        <div className="img-container">
                            <img src={media76} alt="" />
                        </div>
                        <Card.Body className=" p-4 d-flex align-items-center justify-content-center z-1">
                            <div className="container">
                                <h3 className="text-center">Buy and Sell Coins without additional fees</h3>
                                <span className="d-block fs-16 text-center op-8 mb-4">
                                    Buy now and get +50% extra bonus Minimum pre-sale amount 100 Crypto Coin. We
                                    accept BTC crypto-currency..
                                </span>
                                <Row className="justify-content-center align-items-center">
                                    <Col xl={10}>
                                        <div className="p-4 mb-4 rounded currency-exchange-area">
                                            <Row className="gy-3">
                                                <Col xl={5}>
                                                    <p className="mb-2 fs-14 fw-semibold">From :</p>
                                                    <div className="input-group d-flex flex-nowrap">
                                                        <input type="text"
                                                            className="form-control py-0 crypto-buy-sell-input"
                                                            aria-label="crypto buy select"
                                                            placeholder="Enter Amount" />
                                                        <SpkSelect name="colors" option={SellCoins}
                                                            placeholder="Bitcoin" classNameprefix='Select2' mainClass="multi-select basic-multi-select"
                                                            defaultvalue={[SellCoins[0]]} menuplacement='auto' />
                                                    </div>
                                                </Col>
                                                <div
                                                    className="col-xl-2 justify-content-center d-flex align-items-center">
                                                    <span
                                                        className="p-1 border border-secondary border-opacity-55 rounded-pill">
                                                        <SpkButton Buttonvariant="secondary" Customclass="btn btn-icon rounded-pill"><i
                                                            className="ri-arrow-left-right-line"></i></SpkButton>
                                                    </span>
                                                </div>
                                                <Col xl={5}>
                                                    <p className="mb-2 fs-14 fw-semibold">To :</p>
                                                    <div className="input-group d-flex flex-nowrap">
                                                        <Form.Control type="text" className="form-control py-0" defaultValue="1350.93"
                                                            placeholder="Exchange Amount" />
                                                        <SpkSelect name="colors" option={Currency} mainClass="basic-multi-select "
                                                            defaultvalue={[Currency[0]]} menuplacement='auto' classNameprefix="Select2" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <SpkButton Buttonvariant="primary" Customclass="btn btn-wave">Exchange Now</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="d-block mb-0">
                            <Card.Title className=" mb-0">Today's Cryptocurrency Prices</Card.Title>
                            <p className="mb-0 text-muted fs-12 op-6 fw-normal d-block">Stay informed with the latest prices in
                                the crypto market.</p>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="mb-0" header={[{ title: 'Cryptocurrency' }, { title: 'Symbol' }, { title: 'Price' }, { headerClassname: "text-center", title: 'Market Cap' }]}>
                                    <tr>
                                        <td>Bitcoin</td>
                                        <td>BTC</td>
                                        <td>$30k</td>
                                        <td className="text-center"><span className="text-secondary">$580 B</span></td>
                                    </tr>
                                    <tr>
                                        <td>Ethereum</td>
                                        <td>ETH</td>
                                        <td>$2k</td>
                                        <td className="text-center"><span className="text-secondary">$300 B</span></td>
                                    </tr>
                                    <tr>
                                        <td>Ripple</td>
                                        <td>XRP</td>
                                        <td>$0.79</td>
                                        <td className="text-center"><span className="text-secondary">$38 B</span></td>
                                    </tr>
                                    <tr>
                                        <td>Litecoin</td>
                                        <td>LTC</td>
                                        <td>$158.42</td>
                                        <td className="text-center"><span className="text-secondary">$10 B</span></td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom-0">Monero</td>
                                        <td className="border-bottom-0">XMR</td>
                                        <td className="border-bottom-0">$23.76</td>
                                        <td className="text-center border-bottom-0"><span className="text-secondary">$26 B</span></td>
                                    </tr>
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <div className="row justify-content-center">
                {Cryptocurrencies.map((idx) => (
                    <Col xl={3} md={6} key={idx.id}>
                        <SpkMarketcap obj={idx} height={60} width={"100%"} type="line" />
                    </Col>
                ))}
                <Col xl={12}>
                    <div className="text-center my-4">
                        <SpkButton Buttonvariant="primary-light" Customclass="btn" Buttontype="button" Disabled>
                            <span className="spinner-border spinner-border-sm align-middle me-1" role="status"
                                aria-hidden="true"></span>
                            Loading...
                        </SpkButton>
                    </div>
                </Col>
            </div>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    );
};

export default CurrencyExchange;