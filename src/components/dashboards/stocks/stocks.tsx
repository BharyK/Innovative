import { Fragment, useEffect, useState } from "react";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import { data$, getState } from "../../../shared/services/switcherServices";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkSwiperJs from "../../../shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import { GrowthAnalysisOptions, GrowthAnalysisSeries, MyStocks, MyWatchlist, StockPriceOverview, StockPriceOverviewOptions, StockPriceOverviewOptions1, StockPriceOverviewSeries, StockPriceOverviewSeries1, StocksSwiperCard, TopStockPerformers, TotalPortfolios, TransactionHistory, TrendingStocks } from "../../../shared/data/dashboards/stocksdata";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";


const Stocks = () => {
    const breakpoints1 = {
        500: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1800: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }

    const brerakPoints2 = {
        500: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }


    let [variable, setVariable] = useState(getState());
    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            setVariable(e);
        });

        return () => subscription.unsubscribe();
    }, [variable]);

    let breakPoints = variable.dataWidth === 'boxed' ? breakpoints1 : brerakPoints2

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Stocks"} />

            <Pageheader title="Dashboard" currentpage="Stocks" activepage="Stocks" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={12}>
                    <SpkSwiperJs slides={StocksSwiperCard} key={variable.dataWidth} breakpoint={breakPoints} autoplay={true} loop={false} spaceBetween={20} mainClass="" className="swiper swiper-basic swiper-initialized swiper-horizontal swiper-backface-hidden" />
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={8}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Stock Price Overview</Card.Title>
                            <div className="d-flex gap-2">
                                <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn btn-sm btn-wave waves-effect waves-light">1D</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">1W</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">1M</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">3M</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">6M</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">1Y</SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body className=" ps-0">
                            <div className="d-flex align-items-end gap-xl-5 gap-3 flex-wrap p-3 border rounded ms-3">
                                {StockPriceOverview.map((data) => (
                                    <div className="min-w-fit-content me-sm-3" key={data.id}>
                                        <div className="d-flex align-items-end mb-1 gap-3 flex-wrap"> <span
                                            className={`avatar avatar-sm bg-${data.iconBg} align-self-start`}> <i
                                                className={`${data.icon} fs-16`}></i> </span>
                                            <div>
                                                <h4 className="fw-medium mb-1">{data.value}</h4>
                                                <p className="mb-0 fs-12">{data.label}</p>
                                            </div>
                                            <div> <span className={`text-${data.change.percentColor} fw-semibold`}>{data.change.percent}
                                                <i className={`ri-arrow-${data.change.direction}-line lh-1 align-center fs-14 fw-normal`}></i></span>
                                                <span className="fw-medium fs-12 text-muted ms-1">{data.lastMonthNote}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex-1 text-sm-end mt-2 mt-sm-0 ms-auto"> <Link to="#!" className="btn btn-w-lg btn-sm btn-danger"><i className="ti ti-plus mx-1"></i>Compare</Link> </div>
                            </div>
                            <div id="stockCap-area">
                                <Spkapexcharts chartOptions={StockPriceOverviewOptions} chartSeries={StockPriceOverviewSeries} type="area" width={'100%'} height={265} />
                            </div>
                            <div id="stockCap">
                                <Spkapexcharts chartOptions={StockPriceOverviewOptions1} chartSeries={StockPriceOverviewSeries1} type="bar" width={'100%'} height={130} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Body className="">
                            <Link to="#!" className="btn btn-icon btn-primary-light float-end"><i className="ti ti-trending-up"></i></Link>
                            <p className="fs-14 mb-1">Total Portfolios</p>
                            <h4 className="fw-semibold mb-3">$12,75,540<span className="badge bg-danger-transparent ms-2 fs-10">-12.64%</span></h4>
                            <div className="progress-stacked progress-sm mb-3">
                                {TotalPortfolios.progressBar.map((data, idx) => (
                                    <div key={idx} className={`progress-bar me-1 bg-${data.progressBg} progress-bar-striped`} role="progressbar"
                                        style={{ width: data.width }} aria-valuenow={data.ariaValuNow} aria-valuemin={0} aria-valuemax={100}>
                                    </div>
                                ))}
                            </div>
                            <Row className=" gx-2 gy-2">
                                {TotalPortfolios.items.map((data) => (
                                    <Col xl={4} key={data.id}>
                                        <div className={`p-2 ps-3 border rounded-1 portpolio-card ${data.cardColor}`}>
                                            <p className="mb-0">{data.name}</p>
                                            <h6 className="mb-0 fw-semibold">{data.value}<span className={`text-${data.changeColor} ms-1 fs-11 me-1`}>{data.change}</span></h6>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Transaction History </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-sm no-caret" Toggletext="All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">Buy</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Sell</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap">
                                    {TransactionHistory.map((data) => (
                                        <tr key={data.id}>
                                            <td className={data.borderClass}>
                                                <div className="d-flex gap-3 align-items-center">
                                                    <span
                                                        className={`avatar flex-shrink-0 avatar-md p-2 avatar-rounded border border-${data.avatarBorder} svg-${data.svgColor} border-opacity-25 bg-${data.svgColor}-transparent`}>
                                                        {data.svg}
                                                    </span>
                                                    <div>
                                                        <div className="fw-medium mb-1">{data.name}</div> <span className="text-muted fs-12 fw-medium"><i className="ri-calendar-line fs-14 me-1"></i>{data.date}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={data.borderClass}>
                                                <span className={`badge bg-${data.actionBg} me-2 fs-10 align-middle`}>{data.action}</span>
                                            </td>
                                            <td className={`fw-medium fs-14 ${data.borderClass}`}>
                                                <div className="d-flex ms-auto align-items-end justify-content-between gap-4">
                                                    <div>
                                                        <div className="fw-semibold fs-14">{data.price}</div>
                                                        <div className="text-muted">Value: {data.value}</div>
                                                    </div>
                                                    <span className={`text-${data.changeColor} ms-auto fw-semibold`}>{data.change}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between pb-2">
                            <Card.Title> My Watchlist </Card.Title>
                            <SpkButton Buttonvariant="light" Buttontype="button" Customclass="btn btn-sm"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ListGroup className="list-group-flush">
                                {MyWatchlist.map((data) => (
                                    <ListGroup.Item className=" d-flex gap-3 align-items-center" key={data.id}>
                                        <span className={`avatar avatar-lg border border-${data.avatarBorder} border-opacity-25 avatar-rounded`}>
                                            <span className={`avatar avatar-md p-2 avatar-rounded border border-${data.avatarBorder} border-opacity-10 bg-${data.avatarBg} flex-shrink-0`}>
                                                <i className={`${data.icon} fs-20 lh-1`}></i>
                                            </span>
                                        </span>
                                        <div>
                                            <div className="fs-14 fw-medium">{data.name}</div>
                                            <span className="text-muted fs-12">Current Price: {data.currentPrice}</span>
                                        </div>
                                        <span className={`text-${data.changeColor} ms-auto fw-semibold`}>{data.change}</span>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Top Stock Performers </Card.Title>
                            <Link to='#!' className="text-primary fw-medium text-decoration-underline"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'Company' }, { title: 'Change' }, { title: 'Price' }, { title: '% Change' },]}>
                                    {TopStockPerformers.map((data) => (
                                        <tr key={data.id}>
                                            <td className={data.borderClass}>
                                                <div className="d-flex gap-3 align-items-center">
                                                    <span
                                                        className={`avatar avatar-md p-2 avatar-rounded border border-${data.avatarBorder} border-opacity-10 bg-${data.avatarBg}`}>
                                                        <i className={`${data.icon} fs-18 lh-1`}></i> </span>
                                                    <div>
                                                        <div className="fs-14 fw-medium mb-1">{data.name}</div>
                                                    </div>
                                                    <span className="text-muted fs-12">Vol: {data.volume}</span>
                                                </div>
                                            </td>
                                            <td className={data.borderClass}><span className={`text-${data.percentChange.includes("-") ? "danger" : "primary"}`}>{data.change}</span></td>
                                            <td className={`fw-medium fs-14 ${data.borderClass}`}>{data.price}</td>
                                            <td className={data.borderClass}><span className={`text-${data.percentChangeColor}`}>{data.percentChange}</span></td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <h6 className="card-title">Growth Analysis</h6>
                            <SpkButton Buttonvariant="light" Buttontype="button" Customclass="btn btn-sm"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <div className="px-2 d-flex gap-4 align-items-end mb-2">
                                <div>
                                    <p className="fw-semibold mb-0 fs-18">$2,624.00</p><span
                                        className="fs-12 text-muted">Profit Earned</span>
                                </div>
                                <div className="ms-auto text-muted text-end"> <span className="fw-medium fs-12">From Last Week</span>
                                    <span className="text-primary fw-semibold fs-12 ms-1">
                                        2.6%
                                        <i className="ri-arrow-up-line lh-1 align-center fs-14 fw-normal"></i></span>
                                </div>
                            </div>
                            <div id="growth-analytics">
                                <Spkapexcharts chartOptions={GrowthAnalysisOptions} chartSeries={GrowthAnalysisSeries} type="bar" width={'100%'} height={278} />
                            </div>
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
                            <Card.Title> Trending Stocks </Card.Title> <Link to="#!"
                                className="fs-12 text-muted py-1"> View All<i className="ti ti-arrow-narrow-right ms-1"></i>
                            </Link>
                        </Card.Header>
                        <Card.Body className=" p-0 pb-2">
                            <ListGroup className=" list-group-flush">
                                {TrendingStocks.map((data) => (
                                    <ListGroup.Item key={data.id}>
                                        <div className="d-flex gap-2 flex-wrap align-items-start justify-content-between mb-2">
                                            <div className="d-flex flex-fill align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md">
                                                        <img src={data.logo} alt="" className="invert-1" />
                                                    </span>
                                                </div>
                                                <div className="lh-1">
                                                    <span className="fw-semibold d-block mb-2 text-default">{data.name}</span>
                                                    <span className="d-block text-muted fs-12">{data.value}</span>
                                                </div>
                                            </div>
                                            <div className="text-primary fs-12 text-end">
                                                <span className="d-block">{data.percentage}<i className="ti ti-arrow-bear-right"></i></span>
                                                <span className="d-block">{data.profit}</span>
                                            </div>
                                        </div>
                                        <div className="btn-list text-end">
                                            <SpkButton Buttonvariant="danger" Buttontype="button" Customclass="btn btn-sm btn-wave btn-w-sm waves-effect waves-light">Short</SpkButton>
                                            <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn btn-sm btn-wave  me-0 btn-w-sm waves-effect waves-light">Buy</SpkButton>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="  justify-content-between pb-0">
                            <Card.Title>My Stocks</Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-sm no-caret" Toggletext="All Stocks" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!"> All Stocks</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Wishlist</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Stocks</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Crypto</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">ETFs</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Bonds</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table table-hover text-nowrap" header={[{ title: 'Stock' }, { title: 'Quantity' }, { title: 'Stock Price' }, { title: 'Change' }, { title: 'Total Value' }, { title: 'Actions' },]}>
                                    {MyStocks.map((data) => (
                                        <tr key={data.id}>
                                            <td className={data.borderClass}>
                                                <div className="d-flex gap-3 align-items-center"> <span
                                                    className={`avatar avatar-md p-2 avatar-rounded border border-${data.avatarBg} border-opacity-10 bg-${data.avatarBg}-transparent`}>
                                                    <i className={`bi ${data.icon} fs-16 lh-1`}></i> </span>
                                                    <div>
                                                        <div className="fw-medium mb-1">{data.company}</div> <span
                                                            className="text-muted fs-12">{data.exchange}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={`fw-medium ${data.borderClass}`}>{data.quantity}</td>
                                            <td className={data.borderClass}><span className="fw-medium">${data.price}.00</span></td>
                                            <td className={data.borderClass}><span className={`text-${data.changeColor} fw-semibold`}>{data.change}</span></td>
                                            <td className={`fw-medium ${data.borderClass}`}>{data.totalValue}</td>
                                            <td className={data.borderClass}>
                                                <SpkButton Buttonvariant="primary" Customclass="btn btn-sm me-1">Buy</SpkButton>
                                                <SpkButton Buttonvariant="danger" Customclass="btn btn-sm">Sell</SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}
        </Fragment >
    );
};

export default Stocks;