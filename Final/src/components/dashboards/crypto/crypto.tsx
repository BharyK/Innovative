import { Fragment } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import SpkSwiperJs from "../../../shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import { Activities, AssetsAllocation, AssetsAllocationOptions, AssetsAllocationSeries, Buysell1, Buysell2, CryptoCurrencyMarketOverview, CryptoStatistics, CryptoStatisticsOptions, CryptoStatisticsSeries, CryptoSwiper, DailyStats, MarketCap, TotalBalanceOptions, TotalBalanceSeries, Transactions } from "../../../shared/data/dashboards/cryptodata";
import SpkButtongroup from "../../../shared/@spk-reusable-components/reusable-uielements/spk-buttongroup";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkCryptocard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-cryptocard";
import SpkSelect from "../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Link } from "react-router-dom";


const Crypto = () => {
    const breakpoints1 = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        770: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Crypto"} />

            <Pageheader title="Dashboard" currentpage="Crypto" activepage="Crypto" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        <Col xl={12}>
                            <SpkSwiperJs slides={CryptoSwiper} breakpoint={breakpoints1} autoplay={true} loop={true} className="swiper swiper-basic crypto-swiper" mainClass="" spaceBetween={20} slidesPerView={4} />
                        </Col>
                        <Col xxl={8}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between flex-wrap">
                                    <Card.Title>
                                        Crypto Statistics
                                    </Card.Title>
                                    <SpkButtongroup Buttongrplabel="Basic example">
                                        <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">1D</SpkButton>
                                        <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">1W</SpkButton>
                                        <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">1M</SpkButton>
                                        <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">3M</SpkButton>
                                        <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">6M</SpkButton>
                                        <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">1Y</SpkButton>
                                    </SpkButtongroup>
                                </Card.Header>
                                <Card.Body className=" pt-0">
                                    <div className="d-flex align-items-center gap-4 flex-wrap">
                                        {CryptoStatistics.map((data) => (
                                            <div key={data.id}
                                                className={`d-flex align-items-center gap-2 px-3 py-2 bg-${data.bg} rounded-1`}>
                                                <p className="mb-0 fw-semibold text-default">{data.label}</p>
                                                <SpkBadge variant="white" Customclass="text-default rounded-pill">{data.value}</SpkBadge>
                                            </div>
                                        ))}
                                    </div>
                                    <div id="coin-statistics">
                                        <Spkapexcharts chartOptions={CryptoStatisticsOptions} chartSeries={CryptoStatisticsSeries} type="candlestick" width={'100%'} height={367} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>Assets Allocation</Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-outline-light no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                        <li><Dropdown.Item href="#!">Today </Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div id="asset-allocation">
                                        <Spkapexcharts chartOptions={AssetsAllocationOptions} chartSeries={AssetsAllocationSeries} type="donut" width={"100%"} height={220} />
                                    </div>
                                    <div className="table-responsive border-top mt-3">
                                        <SpkTables tableClass="table text-nowrap" >
                                            {AssetsAllocation.map((data) => (
                                                <tr key={data.id}>
                                                    <th className={data.borderClass}>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span
                                                                className={`avatar avatar-sm bg-${data.avatarBg} svg-${data.svgColor} crypto-investments`}>
                                                                {data.svg}
                                                            </span>
                                                            <p className="mb-0">{data.name}</p>
                                                        </div>
                                                    </th>
                                                    <td className={`text-center ${data.borderClass}`}><span
                                                        className={`text-${data.changeColor} fw-medium ms-1 d-inline-flex`}><i
                                                            className={`ti ti-arrow-narrow-${data.changeDirection} align-center fs-17 lh-1`}></i>{data.change}</span>
                                                    </td>
                                                    <td className={`text-center ${data.borderClass}`}>
                                                        <div className="fs-14 mb-0 fw-semibold">{data.price}</div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Row>
                                {DailyStats.map((data) => (
                                    <Col xxl={12} xl={4} key={data.id}>
                                        <SpkCryptocard card={data} CustomCard='main-custom-card p-2' />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col xxl={8}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between flex-wrap">
                                    <Card.Title>
                                        Market Cap
                                    </Card.Title>
                                    <div className="d-flex">
                                        <SpkDropdown toggleas='a' Customtoggleclass="btn btn-icon btn-sm btn-light no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                            <li><Dropdown.Item href="#!">Week</Dropdown.Item> </li>
                                            <li><Dropdown.Item href="#!">Month</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Year</Dropdown.Item></li>
                                        </SpkDropdown>
                                    </div>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="table-responsive">
                                        <SpkTables tBodyClass="active-tab" tableClass="table card-table table-vcenter text-nowrap mb-0">
                                            {MarketCap.map((data) => (
                                                <tr key={data.id}>
                                                    <td className={data.borderClass}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="lh-1">
                                                                <span
                                                                    className={`avatar avatar-md avatar-rounded me-2 p-2 bg-${data.avatarBg} border border-${data.borderColor} border-opacity-25`}>
                                                                    <i className={`${data.iconClass} fs-22`}></i>
                                                                </span>
                                                            </div>
                                                            <div className="align-items-center">
                                                                <p className="fw-semibold mb-0">{data.name}</p>
                                                                <p className="mb-0 text-muted">{data.symbol}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={data.borderClass}>
                                                        <p className="mb-0 fs-15 fw-semibold">{data.amount}</p>
                                                        <p className="mb-0 text-muted fw medium fs-12">{data.usdValue}</p>
                                                    </td>
                                                    <td className={data.borderClass}>
                                                        <span className={`fw-medium text-${data.changeColor} fs-14`}>{data.change}</span>
                                                    </td>
                                                    <td className={data.borderClass}>
                                                        <p className="mb-0 fw-semibold">Market Cap:</p>
                                                        <p className="mb-0 text-muted fs-12">{data.marketCap}</p>
                                                    </td>
                                                    <td className={data.borderClass}>
                                                        <p className="mb-0 text-muted fs-12">{data.supply}</p>
                                                        <p className="mb-0 fw-medium">Supply:</p>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card crypto-main-card">
                        <Card.Body className=" p-0">
                            <div className="d-flex align-items-center gap-2 justify-content-between p-4 pb-0">
                                <div>
                                    <div className="mb-1 fs-14">Total Balance</div>
                                    <h4 className="mb-1 fw-semibold me-2">$262,933.05 USD</h4>
                                </div>
                                <div className="ms-auto text-end">
                                    <div className="avatar avatar-lg bg-primary"> <i className="ri-bank-line fs-4 lh-1"></i></div>
                                </div>
                            </div>
                            <div className="btn-group bg-white rounded-pill p-1 crypto-buttons">
                                <SpkButton Buttonvariant="secondary-light" Customclass="btn  rounded-pill">Send <i className="ti ti-arrow-up"></i></SpkButton>
                                <SpkButton Buttonvariant="white" Customclass="btn rounded-pill border-0">Recieve <i className="ti ti-arrow-down"></i></SpkButton>
                            </div>
                            <div id="total-balance">
                                <Spkapexcharts chartOptions={TotalBalanceOptions} chartSeries={TotalBalanceSeries} type="area" width={"100%"} height={165} />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Currency Converter</Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-light border d-flex align-items-center no-caret" Toggletext="View All" Icon={true} IconClass="bx bx-caret-down ms-1 fs-15">
                                <li><Dropdown.Item href="#!">Yearly</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Monthly</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Weakly</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="buy-crypto">
                            <div className="" id="buy-crypto">
                                <div className="input-group d-flex flex-nowrap">
                                    <SpkButton Buttonvariant="light" Buttontype="button" Customclass="btn border">Pay</SpkButton>
                                    <input type="text" className="form-control crypto-buy-sell-input"
                                        aria-label="crypto buy select" placeholder="Enter Amount" />
                                    <SpkSelect name="state" option={Buysell1} mainClass="basic-multi-select custom-currency" searchable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Buysell1[0]]} />
                                </div>
                                <div className="text-center">
                                    <Link aria-label="anchor" to="#!"
                                        className="btn btn-primary btn-icon btn-sm my-2"><i
                                            className="ti ti-arrows-down-up"></i></Link>
                                </div>
                                <div className="input-group mb-3 d-flex flex-nowrap">
                                    <SpkButton Buttonvariant="light" Buttontype="button" Customclass="btn border">Buy</SpkButton>
                                    <input type="text" className="form-control crypto-buy-sell-input"
                                        aria-label="crypto buy select" placeholder="36,335.00" />
                                    <SpkSelect name="state" option={Buysell2} mainClass="basic-multi-select custom-currency" searchable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Buysell2[0]]} />
                                </div>
                                <div className="bg-light p-3 rounded">
                                    <div className="pb-1"><span className="text-default">Transaction Fee</span><span
                                        className="ms-2 fs-14 d-inline-block float-end">$2.05</span></div>
                                    <div className="fs-14 py-1"><span className="text-default">Other Charges</span><span
                                        className="ms-2 fs-14 d-inline-block float-end">$7.73</span></div>
                                    <div className="fw-semibold fs-16 pt-1">Total: <span
                                        className="fs-16 d-inline-block float-end">$34,798.00</span></div>
                                </div>
                                <div className="d-grid mt-3">
                                    <SpkButton Buttonvariant="secondary" Buttontype="button" Customclass="btn">Convert<i className="ms-2 ti ti-arrow-narrow-right"></i></SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Transactions </Card.Title> <Link to="#!"
                                className="text-muted">View All<i className="ti ti-arrow-narrow-right ms-1"></i></Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ul className="list-unstyled market-cap-list mb-0">
                                {Transactions.map((data) => (
                                    <li className={`list-group-item border-0 border-bottom${data.border ? '-0' : ''}`} key={data.id}>
                                        <div className="d-flex gap-3">
                                            <div> <span className={`avatar avatar-md bg-${data.avatarBg} svg-${data.svgColor}`}>
                                                <i className={`ti ti-trending-${data.change.value.includes("-") ? "down" : "up"} fs-18 fw-medium`}></i>
                                            </span>
                                            </div>
                                            <div className="flex-fill"> <span
                                                className="fw-semibold d-block mb-1">{data.type} {data.crypto}</span>
                                                <div className="d-flex align-items-center text-muted gap-2 lh-1 fs-13">
                                                    <span className="d-block">{data.date}</span>
                                                </div>
                                            </div>
                                            <div className="text-end"> <span
                                                className="d-block h6 mb-1 fw-semibold">{data.amount}</span>
                                                <span className={`d-block fs-13 text-${data.change.changeColor}`}>{data.change.value}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Activities </Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i
                                className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" pt-0 pb-2">
                            <ul className="list-unstyled crypto-trensing-assets-list">
                                {Activities.map((data) => (
                                    <li key={data.id}>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="lh-1"> <span
                                                className="avatar avatar-md p-1 bg-light avatar-rounded"> <img src={data.imageUrl} alt="" /> </span> </div>
                                            <div className="flex-fill"> <span className="d-block fw-semibold">{data.name}</span>
                                                <span className="fs-12 text-muted">{data.direction}</span>
                                            </div>
                                            <div className="text-end"> <p
                                                className="d-block mb-0 fs-14 fw-semibold">{data.amount}</p>
                                                <span className="fs-12 text-muted">{data.date}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between flex-wrap">
                            <div className="card-title mb-2 mb-sm-0">
                                Crypto Currency Market Overview
                            </div>
                            <SpkButtongroup Buttongrplabel="Basic example">
                                <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">1D</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">1W</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">1M</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">3M</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">6M</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">1Y</SpkButton>
                            </SpkButtongroup>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table table-hover text-nowrap nft-table" header={[{ title: '#' }, { title: 'Coin' }, { title: 'Price' }, { title: 'Price Graph' }, { title: '24h Volume' }, { title: '24h Change' }, { title: 'Market Cap' }, { title: 'Actions' },]}>
                                    {CryptoCurrencyMarketOverview.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.id}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm">
                                                            <img src={data.image} alt="Bitcoin" />
                                                        </span>
                                                    </div>
                                                    <div className="fs-14 fw-medium">{data.name} - {data.symbol}</div>
                                                </div>
                                            </td>
                                            <td>{data.price}</td>
                                            <td>
                                                <div id={data.graphId}>
                                                    <Spkapexcharts chartOptions={data.chartOptions} chartSeries={data.chartSeries} type='line' width={120} height={20} />
                                                </div>
                                            </td>
                                            <td>{data.volume}</td>
                                            <td>
                                                <span className={`text-${data.changeColor}`}>
                                                    <i className={`ri-arrow-${data.changeDirection}-s-fill me-1 fs-15 align-middle`}></i>
                                                    {data.change}
                                                </span>
                                            </td>
                                            <td>{data.marketCap}</td>
                                            <td>
                                                <div className="btn-grp">
                                                    <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn btn-sm me-2">Buy</SpkButton>
                                                    <SpkButton Buttonvariant="danger-light" Buttontype="button" Customclass="btn btn-sm">Trade</SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" border-top-0 py-2">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled"><Link className="page-link" to="#!">Prev</Link></li>
                                            <li className="page-item active"><Link className="page-link" to="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#!">2</Link></li>
                                            <li className="page-item"> <Link className="page-link text-primary" to="#!">next</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    );
};

export default Crypto;