import { Fragment } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import { Activity, Analyticscard, AudienceOverviewOptions, AudienceOverviewSeries, BrowserUsage, ImpresionOverview, ImpressionOverviewProgressStack, ImpressionSubscribers, IncomeRevenue, SalesGrowthOptions, SalesGrowthSeries, SessionDevices, SessionDevicesOptions, SessionDevicesSeries, VisitorsByChannel } from "../../../shared/data/dashboards/analyticsdata";
import SpkAnalytics from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-analytics";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import media92 from "../../../assets/images/media/media-92.png";

const Analytics = () => {
    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}
            <Seo title={"Analytics"} />

            <Pageheader title="Dashboard" currentpage="Analytics" activepage="Analytics" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        {/* Start:: Analytics cards */}
                        {Analyticscard.map((data) => (
                            <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12" key={data.id}>
                                <SpkAnalytics card={data} />
                            </Col>
                        ))}

                        {/* End:: Analytics cards */}

                        {/* Start:: Audience Overview */}
                        <Col xl={7}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Audience Overview
                                    </Card.Title>
                                    <div>
                                        <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn btn-wave btn-sm waves-effect waves-light">
                                            <i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Export
                                        </SpkButton>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div id="audienceReport">
                                        <Spkapexcharts chartOptions={AudienceOverviewOptions} chartSeries={AudienceOverviewSeries} type="line" width={"100%"} height={343} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* End:: Audience Overview */}

                        <Col xl={5}>
                            <Row>
                                {/* Start:: Impressions & New Subscribers */}
                                {ImpressionSubscribers.map((data) => (
                                    <Col lg={6} key={data.id}>
                                        <Card className="custom-card">
                                            <Card.Body className="pb-3 mb-1 d-flex justify-content-between">
                                                <div>
                                                    <div className="mb-3 fs-14 text-muted">{data.title}</div>
                                                    <div className="d-flex gap-3 flex-wrap align-items-center">
                                                        {data.svgIcon}
                                                        <div>
                                                            <h6 className="mb-0 d-flex gap-2 flex-wrap align-items-center">
                                                                {data.count}<span className="text-primary fs-12"><i className="ti ti-trending-up align-middle me-1 d-inline-block"></i>{data.percent}</span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <SpkDropdown toggleas='a' Customtoggleclass="no-caret p-0 border-0" Icon={true} IconClass="ri-more-2-fill fs-5 text-muted" >
                                                    <li><Dropdown.Item href="#!">Day</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Week</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Year</Dropdown.Item></li>
                                                </SpkDropdown>
                                            </Card.Body>
                                            <div id="impression-chat">
                                                <Spkapexcharts chartOptions={data.chartOptions} chartSeries={data.chartSeries} type="area" width={"100%"} height={60} />
                                            </div>
                                        </Card>
                                    </Col>
                                ))}

                                {/* End:: Impressions & New Subscribers */}

                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Header className=" justify-content-between">
                                            <Card.Title>
                                                Sessions Device
                                            </Card.Title>
                                            <div>
                                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm">View Details</SpkButton>
                                            </div>
                                        </Card.Header>
                                        <Card.Body className=" pe-xl-0 pt-1">
                                            <Row className=" align-items-center">
                                                <Col xl={6} md={7}>
                                                    {/* start:: Sessions Device */}
                                                    {SessionDevices.map((data) => (
                                                        <div className="d-flex gap-3 flex-nowrap align-items-center mb-2 pb-2" key={data.id}>
                                                            <span className={`avatar avatar-sm bg-${data.deviceIconBg}`}>
                                                                <i className={`${data.deviceIcon}`}></i>
                                                            </span>
                                                            <div>
                                                                <h6 className="fw-semibold mb-1">{data.count}</h6>
                                                                <div className="text-muted mb-0">{data.deviceType}</div>
                                                            </div>
                                                            <div className="ms-auto text-muted fs-11 text-end">
                                                                <div className="fw-medium fs-12">{data.dataRange}</div>
                                                                <span className={`text-${data.percentColor} fw-semibold`}>{data.percent}<i
                                                                    className={`${data.percenIndicateIcon}`}></i></span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {/* End:: Sessions Device */}

                                                </Col>
                                                <Col xl={6} md={5}>
                                                    <div id="crmprofit-report">
                                                        <Spkapexcharts chartOptions={SessionDevicesOptions} chartSeries={SessionDevicesSeries} type='donut' width={'100%'} height={174} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card main-dashboard-banner p-2 overflow-hidden">
                        <div className="border rounded">
                            <Card.Body className=" main-banner-sub-card rounded p-0 overflow-hidden text-center">
                                <div className="img-container">
                                    <img src={media92} alt="" />
                                </div>
                                <div className="p-4">
                                    <h5 className="mb-2 fw-medium text-fixed-white">Unlock Premium Features</h5>
                                    <p className="mb-0 text-fixed-white">Upgrade now to access advanced tools and boost productivity More Offers.</p>
                                </div>
                            </Card.Body>
                            <Row className=" border-bottom-0 border-block-end-dashed g-0">
                                {IncomeRevenue.map((data) => (
                                    <Col className={`  ${data.borderStyle}`} key={data.id}>
                                        <div className="p-4">
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <span className={`avatar avatar-md bg-${data.iconBg}`}>
                                                    <i className={`${data.icon}`}></i>
                                                </span>
                                                <div>
                                                    <div className="fw-medium text-muted">{data.title}</div>
                                                    <h6 className="mb-0 fw-semibold">{data.count}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between flex-wrap">
                            <Card.Title> Activity </Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" pt-0 pb-0">
                            <ul className="list-unstyled analytics-activity">
                                {Activity.map((data) => (
                                    <li key={data.id}>
                                        <div className="d-flex align-items-center gap-2">
                                            <div> <span className={`avatar avatar-md avatar-rounded bg-${data.iconBg}`}>
                                                <i className={`${data.icon}`}></i> </span> </div>
                                            <div className="flex-fill"> <span className="d-block fw-semibold">{data.title}</span>
                                                <span className="fs-13 text-muted">{data.status}<span
                                                    className={`text-${data.percentColor} fw-medium ms-1 d-inline-block`}>{data.percent}<i
                                                        className={`ti ti-arrow-narrow-${data.statusIcon}`}></i></span></span> </div>
                                            <div> <span className="d-block fs-14 mb-0 fw-semibold">{data.count}</span> </div>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Browser Usage
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="p-0 fs-12 border-0 text-muted no-caret" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block" >
                                <li><Dropdown.Item href="#!">Download</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Import</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Export</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="pt-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table table-hover text-nowrap table-bordered" header={[{ title: 'Browser' }, { title: 'Sessions' }, { title: 'Traffic (%)' }, { title: 'Bounce (%)' },]} >
                                    {BrowserUsage.map((data) => (
                                        <tr key={data.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span
                                                        className={`avatar avatar-rounded avatar-sm p-2 bg-${data.iconBg} me-2`}>
                                                        <i className={`${data.icon}`}></i>
                                                    </span>
                                                    <div className="fw-semibold">{data.browserName}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>
                                                    {data.sessions}
                                                    <i className={`ri-arrow-${data.sessionsIcon}-fill ms-1 text-${data.sessionsIconColor} align-middle fs-14`}></i>
                                                </span>
                                            </td>
                                            <td>
                                                {data.traffic}
                                                <div className="progress progress-xs">
                                                    <div className={`progress-bar bg-${data.progressBarBgColor}`} role="progressbar" style={{ width: data.progressBarWidth }} aria-valuemin={0} aria-valuemax={100}> </div>
                                                </div>
                                            </td>
                                            <td>
                                                {data.bounceRate}
                                                <SpkBadge variant={`${data.bouncePercentBgColor}`} Customclass={`align-middle ms-2`}>{data.bouncePercent}</SpkBadge>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Impression Overview
                            </Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i
                                className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className="pt-2">
                            <div className="progress-stacked progress-md mb-4 main-custom-progress">
                                {ImpressionOverviewProgressStack.map((data) => (
                                    <div key={data.id} className={`progress-bar bg-${data.bgColor} progress-bar-striped me-${data.marginEnd} role="progressbar`}
                                        style={{ width: data.width }} aria-valuemin={0} aria-valuemax={100}>
                                    </div>
                                ))}
                            </div>
                            <ListGroup as='ul' className="mt-1">
                                {ImpresionOverview.map((data) => (
                                    <ListGroup.Item as='li' key={data.id}>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                                <div className="lh-1">
                                                    <span className={`avatar avatar-md bg-${data.svgBg}`}>
                                                        {data.svg}
                                                    </span>
                                                </div>
                                                <div className="fw-semibold">
                                                    <p className="mb-0">{data.title}</p>
                                                    <span className="text-muted">{data.status}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <div className="fw-semibold">{data.count}</div>
                                                <SpkBadge variant={`${data.percentBg}`}>{data.percent}</SpkBadge>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Sales Growth Rate
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="p-0 fs-12 text-muted no-caret border-0" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block" >
                                <li><Dropdown.Item href="#!">Download</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Import</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Export</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="pt-1 pb-0">
                            <div className="d-flex align-items-center p-3 bg-light border rounded">
                                <div>
                                    <p className="mb-1 fs-14 fw-medium">Comparison: 2024 vs. 2023</p>
                                    <div className="text-muted fs-12 mb-2">Increased By<span className="text-primary ms-1 d-inline-block">
                                        2.62%<i className="ti ti-arrow-narrow-up fs-16 ms-1 d-inline-block"></i></span></div>
                                    <h5 className="mb-0">20.85%</h5>
                                </div>
                                <div className="ms-auto">
                                    <div className="p-2 bg-primary-transparent rounded-circle">
                                        <div className="avatar-md avatar bg-primary svg-white avatar-rounded shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                fill="#000000" viewBox="0 0 256 256">
                                                <path
                                                    d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="sales-growth">
                                <Spkapexcharts chartOptions={SalesGrowthOptions} chartSeries={SalesGrowthSeries} type="line" width={'100%'} height={195} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xxl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Visitors by Channel
                            </Card.Title>
                            <div className="d-flex flex-wrap">
                                <div className="me-3 my-1">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas='a' Customclass="my-1" Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block" >
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" pt-1">
                            <div className="table-responsive">
                                <SpkTables tableClass="table table-hover text-nowrap table-bordered visitors-table" header={[{ title: 'S.No' }, { title: 'Channel' }, { title: 'Sessions' }, { title: 'Bounce Rate' }, { title: 'Avg Session Duration' }, { title: 'Goal Completed' }, { title: 'Pages/Visit' }, { title: '% Change' }, { title: 'Top Referral Source' },]}>
                                    {VisitorsByChannel.map((data) => (
                                        <tr key={data.id}>
                                            <th scope="row">{data.id}</th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span
                                                        className={`avatar avatar-sm bg-${data.icongBg} avatar-rounded`}>
                                                        <i className={`${data.icon}`}></i>
                                                    </span>
                                                    <span className="ms-2">{data.title}</span>
                                                </div>
                                            </td>
                                            <td className={`${data.sessionsStyles}`}>{data.sessions}</td>
                                            <td className={`${data.bounceRateStyles}`}>{data.bounceRate}</td>
                                            <td className={`${data.avgSessionDurationStyles}`}>{data.avgSessionDuration}</td>
                                            <td className="text-center">
                                                <SpkBadge variant={`${data.goalCompletedBg}`}>{data.goalCompleted}</SpkBadge>
                                            </td>
                                            <td>{data.pageVisits}</td>
                                            <td><span className={`fw-semibold text-${data.changePercentColor}`}>{data.changePercent}</span></td>
                                            <td>{data.referralSource}</td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled"><Link className="page-link" to="#!">Prev </Link></li>
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
            {/* <!-- End:: row-4 --> */}
        </Fragment>
    );
};

export default Analytics;