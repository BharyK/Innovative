import { Fragment } from "react";
import { Card, Col, Form, Pagination, Row } from "react-bootstrap";
import parse from 'html-react-parser';
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { CryptoMarketCap, Marketcapdata } from "../../../../shared/data/apps/crypto/marketcapdata";
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";


const Marketcap = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Marketcap"} />
            <Pageheader title="Apps" subtitle="Crypto" currentpage="Marketcap" activepage="Marketcap" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                {Marketcapdata.map((idx) => (
                    <Col xxl={3} xl={6} md={6} key={idx.id}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="p-0">
                                <div className="p-3 pb-1">
                                    <div>
                                        {parse(idx.svg1)}
                                    </div>
                                    <div
                                        className="d-flex align-items-center mb-3 gap-2 justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                className={`lh-1 avatar avatar-lg border border-${idx.color} border-opacity-25 avatar-rounded`}>
                                                <span
                                                    className={`avatar avatar-md bg-${idx.color} avatar-rounded `}>
                                                    {parse(idx.svg2)}
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="mb-1">{idx.title}</h6>
                                                <span className="text-muted">{idx.text}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-inline-flex">
                                            <p className="fw-semibold mb-3 lh-1 fs-22">{idx.value} <span
                                                className={`badge bg-${idx.color}-transparent d-inline-flex align-items-center fs-11 ms-2`}>
                                                <i
                                                    className={`ti ti-trending-${idx.percentage.includes("-") ? "down" : "up"} me-1 align-middle`}></i>{idx.percentage}
                                            </span></p>
                                        </div>
                                    </div>
                                </div>
                                <div id="btcmain-chart">
                                    <Spkapexcharts chartOptions={idx.chartOptions} chartSeries={idx.chartSeries} type="area" width="100%" height={50} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2  --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Crypto MarketCap
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <Form.Control className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <li><Link className="dropdown-item" to="#!">Market Cap</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Price</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Trading Volume</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Price Change (24h)</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Rank</Link></li>
                                    <li><Link className="dropdown-item" to="#!">A - Z</Link></li>
                                    <li><Link className="dropdown-item" to="#!">All-Time High (ATH)</Link></li>
                                </SpkDropdown>
                                <div>
                                    <SpkButton Buttonvariant="secondary" Size="sm" Customclass="btn btn-wave waves-effect waves-light">View All</SpkButton>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap"
                                    header={[{ title: '' }, { title: '#', headerClassname: 'fw-medium' }, { title: 'Crypto Name' }, { title: 'MarketCap', }, { title: <>Price<span className="text-muted ms-1 d-inline-block">(USD)</span></>, }, { title: '1h Change', }, { title: '24h Change', }, { title: 'Volume (24h)', }, { title: 'last 1Week', }, { title: 'Trade', },]} >
                                    {CryptoMarketCap.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className="text-center">
                                                <Link to="#!"><i className="ri-star-line fs-16 text-muted"></i></Link>
                                            </td>
                                            <td>{idx.id}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium"><Link to="#!">{idx.name}</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{idx.marketCap}</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link to="#!">{idx.price}</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`text-${idx.color1} fw-medium`}><i className={`ti ti-arrow-narrow-${idx.arrowdir} fs-15 fw-medium`}></i>{idx.marketChange1h}</span>
                                            </td>
                                            <td>
                                                <span className={`text-${idx.color2} fw-medium`}><i className={`ti ti-arrow-narrow-${idx.arrowdir1} fs-15 fw-medium`}></i>{idx.marketChange24h}</span>
                                            </td>
                                            <td>
                                                <Link to="#!">
                                                    <span className="d-block fw-medium">{idx.volume}</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="btc-chart">
                                                    <Spkapexcharts chartOptions={idx.chartOptions} chartSeries={idx.chartSeries} type="line" width={120} height={30} />
                                                </div>
                                            </td>
                                            <td>
                                                <SpkButton Buttonvariant="secondary-light" Size="sm" Customclass="btn">Trade</SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <nav aria-label="Page navigation">
                                <Pagination className="pagination mb-0 float-end">
                                    <Pagination.Item disabled>Previous
                                    </Pagination.Item>
                                    <Pagination.Item>1</Pagination.Item>
                                    <Pagination.Item active aria-current="page">2</Pagination.Item>
                                    <Pagination.Item>3</Pagination.Item>
                                    <Pagination.Item>Next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-2  --> */}
        </Fragment>
    );
};

export default Marketcap;