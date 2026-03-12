import { Link } from "react-router-dom";
import SpkSchoolCard from "../../shared/@spk-reusable-components/reusable-dashboards/spk-schoolcard";
import Spkapexcharts from "../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkCandidatesCard from "../../shared/@spk-reusable-components/reusable-widgets/spk-candidatescard";
import SpkDoctorCard from "../../shared/@spk-reusable-components/reusable-widgets/spk-doctorcard";
import { Candidates, CandidatesOptions, CandidatesSeries } from "../../shared/data/dashboards/jobsdata";
import { SalesRevenueSeries, SalesRevenueOptions, WidgetProfitOptions, WidgetProfitSeries, RevenueAnalyticsOptios, RevenueAnalyticsSeries, WidgetsData, WidgetsDataSeries, WidgetsDataRow1, ProgressData, ProfitOverview, DoctorCardData, ProductBySale, OrdersData, TopProducts, VisitorsByCountry } from "../../shared/data/widgets/widgetsdata";
import Pageheader from "../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../shared/layouts-components/seo/seo";
import face2 from '../../assets/images/faces/2.jpg';
import face8 from '../../assets/images/faces/8.jpg';
import face12 from '../../assets/images/faces/12.jpg';
import face14 from '../../assets/images/faces/14.jpg';


import { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import SpkBadge from "../../shared/@spk-reusable-components/reusable-uielements/spk-badge";

interface WidgetsProps { }

const Widgets: React.FC<WidgetsProps> = () => {

    return (
        <Fragment>

            <Seo title={"Widgets"} />

            <Pageheader title="Widgets" currentpage="Widgets" activepage="Widgets" />

            {/* <!-- Start:: row-1 --> */}
            <Row className="row-cols-xxl-5 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-1">
                {WidgetsDataRow1.map((idx) => (
                    <Col key={idx.id}>
                        <SpkSchoolCard card={idx} DflexClass="d-flex gap-3 mb-2 p-3 pb-0" CustomCardClass="overflow-hidden main-custom-card" CardBodyClass="p-0" ShowFooter={true} />
                    </Col>
                ))}

            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" pb-0 justify-content-between">
                            <Card.Title>Sales Revenue</Card.Title>
                            <div className="dropdown">
                                <Link to="#!" className="text-muted fs-12 tag-link">View All<i className="ti ti-arrow-narrow-right ms-1"></i></Link>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="p-2 pb-0 d-flex align-items-center justify-content-between">
                                <div className=" d-flex flex-column">
                                    <span className="h5 fw-semibold">$12,542
                                        <span className="ms-2 mb-2 fs-11 badge bg-success-transparent text-primary">+12.5%</span>
                                    </span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <SpkButton Buttonvariant="outline-light" Customclass="btn border btn-sm mb-1"><i className="ti ti-plus mx-1"></i>Add Product</SpkButton>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-outline-light border btn-sm mb-1 no-caret" Toggletext="Weakly" Icon={true} IconClass="ti ti-chevron-down mx-1">
                                        <li><Dropdown.Item href="#!">Weakly</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Monthly</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Yearly</Dropdown.Item></li>
                                    </SpkDropdown>
                                </div>
                            </div>
                            <div id="crm-revenue-analytics">
                                <Spkapexcharts chartOptions={SalesRevenueOptions} chartSeries={SalesRevenueSeries} type="line" width={'100%'} height={290} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" pb-0 justify-content-between">
                            <Card.Title>Profit Overview</Card.Title>
                            <Link to="#!" className="fs-13 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center mb-1 float-end">
                                    <span className="fs-14 text-primary">+0.125%</span>
                                    <p className="fs-11 text-muted mb-0 ms-1">This Month</p>
                                </div>
                                <div>
                                    <h5>12,145,876<i className="ti ti-trending-up-2 mx-2 text-primary"></i></h5>
                                </div>
                            </div>
                            <div className="progress-stacked progress-animate progress-sm mt-2 mb-3">
                                {ProgressData.map((idx) => (
                                    <div key={idx.id} className={`progress-bar bg-${idx.bgColor}`} role="progressbar" style={{ width: `${idx.width}%` }} aria-valuenow={idx.width} aria-valuemin={0} aria-valuemax={100}></div>
                                ))}
                            </div>
                            <ul className="mb-0 list-unstyled top-countries border p-3 rounded">
                                {ProfitOverview.map((idx) => (
                                    <li key={idx.id} className={idx.liClass}>
                                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                            <div className="d-flex align-items-center lh-1">
                                                <span className={`avatar avatar-sm avatar-rounded ${idx.iconClass}-dash-border me-2`}><i className={`ti ${idx.icon} text-${idx.iconClass} fs-16`}></i>
                                                </span>
                                                <span className="top-country-name">{idx.name}</span>
                                            </div>
                                            <div className="fs-15 lh-1 fw-semibold">
                                                <span className={`text-${idx.arrow === 'up' ? 'primary' : 'danger'} me-3 badge bg-${idx.arrow === 'up' ? 'primary' : 'danger'}-transparent`}>
                                                    <i className={`ti ti-arrow-narrow-${idx.arrow} text-${idx.arrow === 'up' ? 'primary' : 'danger'} ms-1`}></i>{idx.percentage}</span>{idx.count}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} >
                    <Card className="custom-card">
                        <Card.Header className=" pb-0 justify-content-between">
                            <Card.Title>Total Candidates</Card.Title>
                            <Link to="#!" className="fs-13 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className="p-0 custom-widgets">
                            <SpkCandidatesCard card={Candidates} chartSeries={CandidatesSeries} chartOptions={CandidatesOptions} ChartId='revenue-summery' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xxl={4}>
                    <Row>
                        {WidgetsData.map((idx) => (
                            <Col xl={6} key={idx.id}>
                                <Card className="custom-card">
                                    <Card.Body className=" p-0">
                                        <div className="p-4 pb-3 d-flex gap-3">
                                            <div className={`avatar avatar-lg bg-${idx.bgColor} bg-opacity-25 avatar-rounded mb-3`}>
                                                <div className={`avatar avatar-md bg-${idx.bgColor} text-fixed-white avatar-rounded`}>
                                                    <i className={`${idx.icon} fs-18`}></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className={`fw-semibold mb-1 ${idx.valueClass}`}>{idx.value}</h4> <SpkBadge variant={`${idx.badgeColor}-transparent`} Customclass={` rounded-pill me-2`}>{idx.change}<i className={`ti ti-arrow-${idx.changeType}`}></i></SpkBadge>
                                                <div className="text-muted mb-0 me-1 d-inline-block">{idx.label}</div>
                                            </div>
                                        </div>
                                        <div id={idx.chartId}>
                                            <Spkapexcharts chartOptions={idx.chartOptions} chartSeries={WidgetsDataSeries} type="area" width={'100%'} height={90} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Body className=" p-4">
                            <div className="d-flex gap-2 justify-content-between mb-2">
                                <div>
                                    <div className="fs-13"> Total Revenue </div>
                                    <div className="fw-semibold align-self-end fs-4 mb-2 d-inline-block"> $2.2K </div>
                                    <span className="fw-medium fs-12 text-muted ms-1"> From Last Month </span> <span className="text-primary fw-medium fs-12"><i className="ri-arrow-up-s-fill fs-15 lh-1 align-midddle text-primary"></i>  4.5% </span>
                                </div>
                                <SpkDropdown toggleas='a' Menuclass="dropdown-menu-end" Customtoggleclass="btn btn-light border btn-icon d-inline-flex align-items-center justify-content-center no-caret" Icon={true} IconClass="ri-more-2-fill">
                                    <li><Dropdown.Item href="#!">Week</Dropdown.Item> </li>
                                    <li><Dropdown.Item href="#!">Day</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Year</Dropdown.Item> </li>
                                </SpkDropdown>
                            </div>
                            <Row className=" gy-3 gy-sm-0">
                                <Col xl={6} sm={6}>
                                    <div className="p-3 rounded-1 border border-dashed">
                                        <div className="d-flex gap-2 align-items-center flex-wrap">
                                            <div className="flex-shrink-0 avatar avatar-md bg-primary-transparent avatar-rounded">
                                                <i className="ti ti-currency-dollar fs-25 lh-1"></i>
                                            </div>
                                            <div>
                                                <div className="fw-semibold mb-1"> Income </div> <span className="text-muted fw-medium">1.2% <i className="ri-arrow-up-s-fill fs-15 lh-1 align-midddle text-success"></i></span>
                                            </div>
                                            <div className="fw-semibold ms-auto align-self-end fs-16 mb-2"> $3.2K </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} sm={6}>
                                    <div className="p-3 rounded-1 border border-dashed">
                                        <div className="d-flex gap-2 align-items-center flex-wrap">
                                            <div className="flex-shrink-0 avatar avatar-md bg-danger-transparent avatar-rounded">
                                                <i className="ti ti-moneybag fs-25 lh-1"></i>
                                            </div>
                                            <div>
                                                <div className="fw-semibold mb-1"> Expenses </div> <span className="text-muted fw-medium">0.3% <i className="ri-arrow-down-s-fill fs-15 lh-1 align-midddle text-danger"></i></span>
                                            </div>
                                            <div className="fw-semibold ms-auto align-self-end fs-16 mb-2"> $2.2K </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    {OrdersData.map((idx) => (
                        <Card className="custom-card" key={idx.id}>
                            <Card.Body>
                                <div className="d-flex align-items-center gap-2 justify-content-between mb-2">
                                    <div> Order Id:<div className="fw-semibold fs-14"> {idx.orderId} </div>
                                    </div>
                                    <div> Total Items:<h6 className="mb-0"> {idx.totalItems} </h6>
                                    </div>
                                    <div> Status:<br />
                                        <SpkBadge variant={`${idx.color}-transparent`}> {idx.status}</SpkBadge>
                                    </div>
                                </div>
                                <div className="progress progress-sm progress-animate" role="progressbar" aria-valuenow={idx.progress} aria-valuemin={0} aria-valuemax={100}>
                                    <div className={`progress-bar progress-bar-striped bg-${idx.color}`} style={{ width: `${idx.progress}%` }}></div>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Top Products</Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-outline-light btn-wave border waves-effect waves-light no-caret" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">2023</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">2022</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">2021</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0 custom-widget-table">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap">
                                    {TopProducts.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.tdClass}>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className={`avatar avatar-rounded avatar-md p-1 bg-${idx.bgColor}-transparent`}>
                                                            <img src={idx.image} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="fs-14 d-flex flex-column"><span className="fs-14 fw-semibold">{idx.name}</span><span className="text-muted fs-12">{idx.brand}</span></div>
                                                </div>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <SpkBadge variant={`${idx.badgeColor}-transparent`}>{idx.percentageChange}</SpkBadge>
                                            </td>
                                            <td className={`fw-semibold ${idx.tdClass}`}>{idx.price}</td>
                                            <td className={`text-center ${idx.tdClass}`}>
                                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-light no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                                    <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Last Month</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Last Year</Dropdown.Item></li>
                                                </SpkDropdown>
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
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Revenue Analytics</Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-outline-light btn-wave border waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Weakly</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Monthly</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body>
                            <div id="salerevenue">
                                <Spkapexcharts chartOptions={RevenueAnalyticsOptios} chartSeries={RevenueAnalyticsSeries} type="line" width={'100%'} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" pb-0">
                            <Card.Title>
                                Visitors By Country
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="mb-2 fw-semibold">12,245,355<SpkBadge variant="primary-transparent" Customclass="text-primary ms-3 fs-11"><i className="ti ti-arrow-narrow-up"></i>0.78%</SpkBadge></h5>
                            <p className="text-muted mb-3">Total Sales from top countries</p>
                            <ul className="mb-0 list-unstyled visitcountry">
                                {VisitorsByCountry.map((idx) => (
                                    <li key={idx.id} className={idx.liclass}>
                                        <div className="d-flex gap-2 align-items-center justify-content-between">
                                            <div className={idx.class}>
                                                <div className={`d-flex align-items-center gap-2  flex-wrap ${idx.countryCalss}`}>
                                                    <span className="avatar avatar-xs avatar-rounded me-2">
                                                        <img src={idx.flagSrc} alt="" />
                                                    </span>
                                                    <span className="top-country-name">{idx.name}</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <div className="fw-semibold lh-1 text-nowrap">{idx.value}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}
            <Row>
                <Col xxl={2} xl={4} md={4}>
                    {DoctorCardData.map((idx) => (
                        <SpkDoctorCard key={idx.id} card={idx} />
                    ))}
                </Col>
                <Col xxl={3} xl={8} md={8}>
                    <Card className="custom-card overflow-hidden p-2">
                        <div className="p-5 bg-light mb-5 widget-profile-bg"> <img src={face14} alt="" className="img-fluid rounded-circle widget-profile shadow" /> </div>
                        <Card.Body className=" text-center mt-2">
                            <h5 className="mb-1 fw-semibold">Annie Brunie</h5>
                            <p className="text-muted fs-14">CEO &amp; MD</p>
                            <p className="px-3 text-gray-6">Fueled by passion, committed to progress. I’m here to create
                                meaningful change, one step at a time Inspired by passion, focused on results.</p>
                            <div className="btn-list mb-1">
                                <div className="btn btn-sm rounded-circle btn-primary-light"><i className="ri-facebook-fill fs-17"></i></div>
                                <div className="btn btn-sm rounded-circle btn-secondary-light"><i className="ri-instagram-fill fs-17"></i></div>
                                <div className="btn btn-sm rounded-circle btn-danger-light"><i className="ri-twitter-x-fill fs-17"></i></div>
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light bg-opacity-75 text-center border-top border-block-start-dashed">
                            <div className="btn btn-primary rounded-pill btn-w-lg">View Details</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Col xl={12}>
                        <Card className="custom-card p-2">
                            <Card.Body className=" border border-dashed d-flex align-items-start justify-content-between flex-wrap pb-0">
                                <div className="flex-shrink-0 d-flex justify-content-between gap-5 w-100 align-items-start">
                                    <div className="pt-2 ps-2">
                                        <h4 className="mb-1 d-flex align-items-center fw-semibold">$32,198 </h4>
                                        <p className="fs-14 mb-2">Profit Earned</p>
                                        <div> <span className="text-primary fw-semibold"> 5.3% <i className="ri-arrow-up-line lh-1 align-center fs-14 fw-normal"></i></span>
                                            <span className="fw-medium fs-12 text-muted mx-1">From Last Month</span>
                                        </div>
                                    </div>
                                    <div className="btn bottom-0 d-grid btn-light rounded-pill"> View Details</div>
                                </div>
                                <div id="widget-profit">
                                    <Spkapexcharts chartOptions={WidgetProfitOptions} chartSeries={WidgetProfitSeries} type="line" width={'100%'} height={140} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Row>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Body className=" p-4">
                                        <div className="d-flex gap-2 align-items-start justify-content-between">
                                            <div>
                                                <div className="text-muted fs-12">Upcoming Events</div>
                                                <h6 className="fw-semibold my-1">Meeting with clients in zoom</h6>
                                            </div>
                                            <SpkDropdown toggleas='a' Menuclass='dropdown-menu-end' Customtoggleclass="btn btn-sm btn-icon btn-primary-light rounded-circle no-caret" Icon={true} IconClass="bi bi-grid lh-1">
                                                <li><Dropdown.Item href="#!"><i className="ri-pencil-line me-1"></i>Edit</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!"><i className="ri-share-forward-line me-1"></i>Share</Dropdown.Item> </li>
                                                <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1"></i>Delete</Dropdown.Item></li>
                                            </SpkDropdown>
                                        </div>
                                        <div className="text-primary fw-semibold mb-4 mt-2 fs-14"><i className="ri-time-line lh-1 align-middle me-1"></i>Starts in 20mins</div>
                                        <div className="avatar-list-stacked">
                                            <span className="avatar avatar-md avatar-rounded p-1 bg-primary-transparent">
                                                <img src={face12} alt="img" />
                                            </span> <span className="avatar avatar-md avatar-rounded p-1 bg-primary-transparent">
                                                <img src={face8} alt="img" />
                                            </span>
                                            <span className="avatar avatar-md avatar-rounded p-1 bg-primary-transparent">
                                                <img src={face2} alt="img" />
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card bg-secondary">
                                    <Card.Body className=" p-4 text-fixed-white">
                                        <div className="d-flex gap-2 align-items-start justify-content-between flex-wrap">
                                            <i className="ti ti-cloud fs-40 text-fixed-white lh-1"></i>
                                            <div className="text-end">
                                                <h6 className="text-fixed-white">Temperature</h6>
                                                <p className="mb-0 text-fixed-white">-50°C</p>
                                            </div>
                                        </div>
                                        <h2 className="mb-0 mt-2 text-fixed-white fw-semibold">32 Mins</h2>
                                        <p className="text-fixed-white op-7 mb-4 fs-12">Left Until Ground</p>
                                        <div className="op-8 d-inline-flex align-items-center"> <i className="ti ti-map-pin-filled fs-16 me-1 op-6"></i><span className="text-fixed-white">Location: London</span> </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Col>
                <Col xxl={3}>
                    <Card className=" custom-card overflow-hidden">
                        <Card.Header className=" pb-0 justify-content-between">
                            <Card.Title>Product By Sale
                            </Card.Title>
                            <div>
                                <SpkButton Buttonvariant="primary-light" Customclass="btn border btn-sm"><i className="ti ti-plus mx-1"></i>Add Product</SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ListGroup as="ul" className=" list-group-flush mb-0">
                                {ProductBySale.map((idx) => (
                                    <ListGroup.Item as='li' className={`list-group-item ${idx.liClass}`} key={idx.id}>
                                        <div>
                                            <div className="d-flex align-items-center">
                                                <Link to={`${import.meta.env.BASE_URL}pages/profile`}><span className={`avatar avatar-rounded avatar-md br-5 bg-${idx.avatarColor}-transparent svg-${idx.avatarColor} border border-${idx.avatarColor} border-opacity-25 me-3`}>
                                                    {idx.icon}
                                                </span></Link>
                                                <div className="w-100">
                                                    <Link to={`${import.meta.env.BASE_URL}pages/profile`}>
                                                        <h6 className="mb-1 fs-14 mt-1 fw-600 text-default">{idx.title}</h6>
                                                    </Link>
                                                    <p className="text-muted fs-12 mb-0">Increased by {idx.increased}</p>
                                                    <div className="progress progress-xs mt-2" role="progressbar" aria-valuenow={idx.progress} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className={`progress-bar progress-bar-animated bg-${idx.avatarColor}`} style={{ width: `${idx.progress}%` }}> </div>
                                                    </div>
                                                </div>
                                                <div className="ms-auto my-auto">
                                                    <p className="mb-3 fs-14 fw-semibold">
                                                        {idx.amount}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}
        </Fragment>
    )
}

export default Widgets;