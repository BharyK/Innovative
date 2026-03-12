import { Fragment } from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import { AudienceReached, AudienceReachedOptions, AudienceReachedSeries, AudienceStatisticsOptions, AudienceStatisticsSeries, IncomeChartSeries, MetricCards, OverallPosts, ProfiltEarnedOptions, ProfiltEarnedSeries, Requests, SocialMediaPerformance, SocialStats, Suggestions, TrafficSources } from "../../../shared/data/dashboards/socialmediadata";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkSocialmediacard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-socialmediacard";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Link } from "react-router-dom";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";

const SocialMedia = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Social Media"} />

            <Pageheader title="Dashboard" currentpage="Social Media" activepage="Social Media" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        {SocialStats.map((data) => (
                            <Col xl={3} md={6} key={data.id}>
                                <SpkSocialmediacard card={data} />
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col xl={8}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between flex-wrap">
                                    <Card.Title> Audience Statistics </Card.Title>
                                    <div className="d-flex gap-2">
                                        <div className="btn btn-outline-light border btn-full btn-sm">Today</div>
                                        <div className="btn btn-outline-light border btn-full btn-sm">Weakly</div>
                                        <div className="btn btn-light border btn-full btn-sm">Yearly</div>
                                    </div>
                                </Card.Header>
                                <Card.Body className=" pt-2 pb-2">
                                    <div id="audience-statistics">
                                        <Spkapexcharts chartOptions={AudienceStatisticsOptions} chartSeries={AudienceStatisticsSeries} type="line" width={'100%'} height={400} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> Suggestions </Card.Title>
                                    <Link to="#!" className="btn btn-light btn-sm"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body className=" pt-2">
                                    <ul className="list-unstyled social-suggestions-list">
                                        {Suggestions.map((data) => (
                                            <li key={data.id}>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1">
                                                        <span className={`avatar avatar-md p-1 bg-${data.avatarBg}`}>
                                                            <img src={data.image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill"> <span className="fw-semibold d-block">{data.name}</span>
                                                        <span className="text-muted d-block">{data.mutualFriends} Mutual Friend{data.mutualFriends > 1 ? 's' : ''}</span>
                                                    </div>
                                                    <div>
                                                        <SpkButton Buttonvariant={data.actionBg} aria-label="buton" Buttontype="button" Customclass="btn btn-sm">
                                                            {data.action}
                                                        </SpkButton>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Row>
                        {MetricCards.map((data) => (
                            <Col xxl={12} xl={6} key={data.id}>
                                <Card className={`custom-card ${data.id === 1 ? "users-card" : "impressions-card"}`}>
                                    <Card.Body className=" p-0">
                                        <div className="d-flex align-items-center flex-wrap gap-3 lh-1 p-4 pb-5">
                                            <span className={`avatar avatar-md bg-${data.avatarBg} bg-opacity-50`}>
                                                {data.svg}
                                            </span>
                                            <div className="d-flex flex-column flex-fill">
                                                <p className="fs-13 mb-2">{data.title}</p>
                                                <span className="fw-semibold fs-22 mb-2">{data.value}</span>
                                            </div>
                                            <div className="text-end">
                                                <span className={`d-block badge bg-${data.changeBg} mb-2`}> <i className={`ti ti-arrow-${data.changeType}`}></i>{data.change}</span>
                                                <span>{data.period}</span>
                                            </div>
                                        </div>
                                        <div id={data.chartId}>
                                            <Spkapexcharts chartOptions={data.chartOptions} chartSeries={IncomeChartSeries} type="area" width={'100%'} height={50} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        <Col xxl={12} xl={12}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> Audience Reached </Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-primary-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">Download</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Import</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Export</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className=" pt-0">
                                    <div id="audience-reached">
                                        <Spkapexcharts chartOptions={AudienceReachedOptions} chartSeries={AudienceReachedSeries} type="donut" width={'100%'} height={273} />
                                    </div>
                                    <Row className="audience-reached-data">
                                        {AudienceReached.map((data) => (
                                            <div className="col-xl-4 border-end text-center" key={data.id}>
                                                <span className="d-block fw-semibold"><i
                                                    className={`ri-circle-line text-${data.iconColor} me-2`}></i>{data.label}</span>
                                                <p className="mb-1 fs-13 text-muted mt-1">{data.count}</p>
                                            </div>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Traffic Sources </Card.Title> <Link to="#!" className="btn btn-primary-light btn-sm"> Refresh </Link>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <ul className="list-unstyled mb-0 traffic-source-list">
                                {TrafficSources.map((data) => (
                                    <li className="p-2 rounded-3 social-traffic-list border border-dashed active" key={data.id}>
                                        <div className="d-flex align-items-center flex-wrap gap-2"> <span className={`avatar avatar-md bg-${data.avatarBg}-transparent `}>
                                            <i className={`${data.icon} fs-20`}></i>
                                        </span>
                                            <div className="mb-0">
                                                <p className="mb-0 fw-medium">{data.platform}</p>
                                            </div>
                                            <span className="text-muted fs-12 mt-1">{data.followers} Followers</span>
                                            <div className="ms-auto d-flex gap-4 align-items-center">
                                                <div className="fw-semibold text-end">{data.percentage}</div>
                                                <div className="text-end me-1">
                                                    <span className={`badge bg-${data.growthBg}-transparent`}>
                                                        <i className={`ri-arrow-${data.growthDirection}-s-fill me-1 lh-1 align-middle`}></i>
                                                        {data.growth}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Body className=" pb-0 profit-earned-card">
                            <div className="mb-4 d-flex gap-3 p-3 bg-light rounded-3">
                                <div className="avatar avatar-md bg-primary-transparent text-primary">
                                    <i className="ti ti-currency-dollar fs-22 fw-medium"></i>
                                </div>
                                <div>
                                    <p className="fs-14 mb-2">Profit Earned</p>
                                    <div className="d-flex align-items-end gap-2">
                                        <h4 className="mb-2 d-flex align-items-center fw-semibold">$32,198</h4>
                                    </div> <span className="text-danger fw-semibold fs-12 mb-0 me-1">-2.10%</span>
                                    <span className="text-muted fw-medium fs-12"> from last month</span>
                                </div>
                                <svg className="profit-overlay-icon" xmlns="http://www.w3.org/2000/svg" width="32"
                                    height="32" fill="#000000" viewBox="0 0 256 256">
                                    <path d="M232,96H24L128,32Z" opacity="0.2"></path>
                                    <path
                                        d="M24,104H48v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16H208V104h24a8,8,0,0,0,4.19-14.81l-104-64a8,8,0,0,0-8.38,0l-104,64A8,8,0,0,0,24,104Zm40,0H96v64H64Zm80,0v64H112V104Zm48,64H160V104h32ZM128,41.39,203.74,88H52.26ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208Z">
                                    </path>
                                </svg>
                            </div>
                            <div id="profilt-earned">
                                <Spkapexcharts chartOptions={ProfiltEarnedOptions} chartSeries={ProfiltEarnedSeries} type="line" width={'100%'} height={230} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Overall Posts </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-light" Toggletext="Sort By">
                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="p-3 pb-0">
                                <div className="progress-stacked progress-md mb-2 main-custom-progress">
                                    {OverallPosts.map((data) => (
                                        <div key={data.id} className={`progress-bar progress-bar-striped bg-${data.progress.Bg} me-1`} role="progressbar" style={{ width: data.progress.width }} aria-valuenow={data.progress.ariaValueNow} aria-valuemin={0} aria-valuemax={100}>
                                        </div>
                                    ))}
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3 mt-3">
                                    <div>Overall Posts</div>
                                    <div className="h6 mb-0"><span className="text-primary me-2 fs-11">2.74%<i className="ti ti-arrow-narrow-up"></i></span>1,25,875</div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap overall-post-table">
                                    {OverallPosts.map((data) => (
                                        <tr key={data.id}>
                                            <td className={data.borderClass}> <span className="fw-medium">
                                                <i className={`ri-circle-line text-${data.iconColor} me-2`}></i>
                                                {data.platform}
                                            </span>
                                            </td>
                                            <td className={data.borderClass}>
                                                <span className="fw-medium">{data.posts}</span>
                                            </td>
                                            <td className={`text-center ${data.borderClass}`}>
                                                <span className="fs-13">{data.gross} Gross</span>
                                            </td>
                                            <td className={`text-end ${data.borderClass}`}>
                                                <span className={`badge bg-${data.changeBg}`}>{data.change}
                                                    <i className={`ti ti-trending-${data.trend} ms-1`}></i>
                                                </span>
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
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Requests </Card.Title> <Link to="#!" className="btn btn-light btn-sm"> View All <i className="ti ti-arrow-narrow-right ms-1"></i></Link>
                        </Card.Header>
                        <Card.Body className=" pt-2">
                            <ul className="list-unstyled media-requests mb-0">
                                {Requests.map((data) => (
                                    <li key={data.id}>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="">
                                                <span className={`avatar avatar-md p-1 bg-${data.avatarBg} avatar-rounded`}>
                                                    <img src={data.imgUrl} alt="" />
                                                </span> </div>
                                            <div className="flex-fill text-truncate">
                                                <div className="fw-semibold mb-0">{data.name}</div>
                                                <span className="text-muted fs-12 w-75 text-truncate">{data.time}</span>
                                            </div>
                                            <div className="btn-list text-nowrap ms-auto">
                                                <SpkButton Buttonvariant={data.btnColor} Buttontype="button" Customclass="btn btn-sm">
                                                    <i className="ri-check-line me-1"></i>
                                                    Accept
                                                </SpkButton>
                                                <SpkButton Buttonvariant="danger-light" Buttontype="button" Customclass="btn btn-sm btn-icon me-0">
                                                    <i className="ri-delete-bin-line"></i>
                                                </SpkButton>
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
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Social Media Performance </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" />
                                </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'Platform' }, { title: 'Date Range' }, { title: 'Posts' }, { title: 'Reach' }, { title: 'CTR' }, { title: 'Impressions' }, { title: 'Engagements' }, { title: 'Growth' },]}>
                                    {SocialMediaPerformance.map((data) => (
                                        <tr key={data.id}>
                                            <td>
                                                <div className="d-flex align-items-center gap-2"> <span className={`avatar avatar-sm bg-${data.avatarBg}`}>
                                                    <i className={`${data.iconClass} fs-16`}></i> </span>
                                                    <span className="fw-medium">{data.platform}</span>
                                                </div>
                                            </td>
                                            <td>{data.dateRange}</td>
                                            <td>{data.posts}</td>
                                            <td>{data.reach}</td>
                                            <td className={`text-${data.ctr.includes("7") || data.ctr.includes("4.5") ? "danger" : "primary"}`}>{data.ctr}</td>
                                            <td className="fw-medium">{data.impressions}</td>
                                            <td>{data.clicks}</td>
                                            <td>
                                                {data.growth}
                                                <span className={`badge bg-${data.growthRateBg} ms-2`}>
                                                    <i className={`ri-arrow-${data.trend}-s-fill me-1 lh-1 align-middle`}></i>
                                                    {data.growthRate}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center">
                                <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled"> <Link className="page-link" to="#!"> Prev </Link> </li>
                                            <li className="page-item active"><Link className="page-link" to="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#!">2</Link></li>
                                            <li className="page-item"> <Link className="page-link text-primary" to="#!"> next </Link> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment >
    );
};

export default SocialMedia;