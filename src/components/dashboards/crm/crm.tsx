import { Fragment } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Dropdown, Nav, Row, Tab } from "react-bootstrap";
import { Cards, DealsOverview, LeadsOverview, LeadsOverviewOptions, LeadsOverviewSeries, ProjectAnalysisOptions, ProjectAnalysisSeries, RecentActivity, RecentDealsStatus, TasksList, UpcomingActivities } from "../../../shared/data/dashboards/crmdata";
import SpkCrmcard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-crmcard";
import SpkCrmTabCard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-crmtabcard";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Link } from "react-router-dom";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkTooltips from "../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import background1 from '../../../assets/images/media/backgrounds/3.png'


const Crm = () => {


    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Revenue"} />

            <Pageheader title="Dashboard" currentpage="Revenue" activepage="Revenue" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        {Cards.map((data) => (
                            <Col xxl={3} xl={6} key={data.id}>
                                <SpkCrmcard card={data} CustomCardClass="overflow-hidden main-custom-card" Chart={true} CardBodyClass='p-0' AvatarSize='md' DflexClass='align-items-start flex-wrap gap-3 p-4 pb-2 mb-1' />
                            </Col>
                        ))}
                        <Col xl={4}>
                            <Card className="custom-card">
                                <Tab.Container defaultActiveKey='orders'>
                                    <Card.Header className=" justify-content-between">
                                        <Card.Title> Tasks List </Card.Title>
                                        <div>
                                            <Nav as='ul' className="nav-tabs justify-content-end nav-tabs-header task-list-tab" role="tablist">
                                                <Nav.Item as='li' role="presentation"> <Nav.Link as='a' eventKey='orders' data-bs-toggle="tab" role="tab" aria-current="page" href="#orders" aria-selected="true">Today</Nav.Link> </Nav.Item>
                                                <Nav.Item as='li' role="presentation"> <Nav.Link as='a' eventKey='accepted' data-bs-toggle="tab" role="tab" aria-current="page" href="#accepted" aria-selected="false" tabIndex={-1}>Upcoming</Nav.Link> </Nav.Item>
                                                <Nav.Item as='li' role="presentation"> <Nav.Link as='a' eventKey='declined' data-bs-toggle="tab" role="tab" aria-current="page" href="#declined" aria-selected="false" tabIndex={-1}>Completed</Nav.Link> </Nav.Item>
                                            </Nav>
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="todo-tab p-0">
                                        <Tab.Content>
                                            <Tab.Pane eventKey='orders' className="border-0" id="orders" role="tabpanel">
                                                <ul className="list-unstyled task-list">
                                                    {TasksList.filter(item => (item.category === 'today-list')).map((data) => (
                                                        <SpkCrmTabCard key={data.id} card={data} />
                                                    ))}
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='accepted' className="border-0" id="accepted" role="tabpanel">
                                                <ul className="list-unstyled task-list">
                                                    {TasksList.filter(item => (item.category === 'upComing-list')).map((data) => (
                                                        <SpkCrmTabCard key={data.id} card={data} />
                                                    ))}
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='declined' className="border-0" id="declined" role="tabpanel">
                                                <ul className="list-unstyled task-list">
                                                    {TasksList.filter(item => (item.category === 'completed-list')).map((data) => (
                                                        <SpkCrmTabCard key={data.id} card={data} />
                                                    ))}
                                                </ul>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card.Body>
                                </Tab.Container>
                            </Card>
                        </Col>
                        <Col xl={8}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> Project Analysis </Card.Title>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                            <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Relevant</Dropdown.Item> </li>
                                        </SpkDropdown>
                                        <div> <SpkButton Buttonvariant="light" Customclass="btn border btn-sm">Export<i className="ri-share-forward-line ms-1"></i></SpkButton> </div>
                                    </div>
                                </Card.Header>
                                <Card.Body className="">
                                    <div id="project-analysis">
                                        <Spkapexcharts chartOptions={ProjectAnalysisOptions} chartSeries={ProjectAnalysisSeries} type="area" width={"100%"} height={348} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Leads Overview</Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Relevant</Dropdown.Item> </li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <div id="leads-overview">
                                <Spkapexcharts chartOptions={LeadsOverviewOptions} chartSeries={LeadsOverviewSeries} type="donut" width={"100%"} height={225} />
                            </div>
                            <Row className=" pt-4 border-top border-block-start-dashed mt-4">
                                {LeadsOverview.map((data) => (
                                    <div className={`col-4 ${data.borderEnd} ${data.borderStyle} text-center`} key={data.id}>
                                        <p className="text-muted mb-1 fs-13">{data.period}</p>
                                        <h6 className={`text-${data.percentageColor} fw-semibold`}>{data.percentage}</h6>
                                    </div>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between pb-0">
                            <Card.Title>
                                Recent Activity
                            </Card.Title>
                            <div>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn btn-sm">View Details</SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="list-unstyled mb-0 crm-recent-activity">
                                {RecentActivity.map((data) => (
                                    <li className="d-flex" key={data.id}>
                                        <div className={`avatar-md p-1 bg-${data.containerBg} avatar avatar-rounded flex-shrink-0 me-3`}>
                                            <span className={`avatar-sm avatar avatar-rounded bg-${data.iconBg}`}>
                                                <i className={`ti ${data.icon} fs-18`}></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className={`d-flex flex-wrap gap-1 py-2 px-3 ${data.borderStyle} rounded-1`}>
                                                <div className="flex-grow-1">
                                                    <p className="mb-1 fs-14 fw-medium">{data.title}</p>
                                                    <p className="fs-13 mb-0 text-muted">{data.message}</p>
                                                </div>
                                                <div className="ms-auto text-end flex-shrink-0">
                                                    <p className="text-muted fs-11 mb-0">{data.user}<br />{data.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Deals Overview</Card.Title>
                            <div className="d-flex gap-2">
                                <div className="btn btn-sm btn-primary-light">Today</div>
                                <div className="btn btn-sm btn-primary-light">Weakly</div>
                                <div className="btn btn-sm btn-primary">Yearly</div>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap mb-0 custom-cardTable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Deal</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Probability</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {DealsOverview.map((data) => (
                                            <tr key={data.id}>
                                                <td>
                                                    <div className="d-flex align-items-center"> <span
                                                        className="avatar avatar-sm">
                                                        <img alt='' src={data.avatar} className="" />
                                                    </span>
                                                        <div className="flex-1 ms-2">
                                                            <p className="mb-0 fw-semibold lh-1">{data.name}</p><a href="#!"
                                                                className="text-muted fs-12">{data.email}</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> <span className="">{data.amount}</span> </td>
                                                <td> <span className="">{data.probability}</span> </td>
                                                <td> <SpkBadge variant={`${data.statusColor}`}>{data.status}</SpkBadge> </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Upcoming Activities
                            </Card.Title>
                            <Link to="#!"
                                className="btn btn-primary-light btn-wave btn-sm waves-effect waves-light">View All</Link>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="list-unstyled list-group mb-2 mt-1">
                                {UpcomingActivities.map((data) => (
                                    <li className="list-group-item" key={data.id}>
                                        <div className="d-flex align-items-center gap-3 text-truncate">
                                            <div className={`avatar bg-${data.dateBgColor} flex-shrink-0 flex-column`}>
                                                <div className="fs-11">{data.day}</div> <span className="fs-11">{data.month}</span>
                                            </div>
                                            <div className="text-truncate">
                                                <div className="fw-medium text-truncate w-75">{data.title}</div>
                                                <div className="fs-12 text-truncate text-muted">{data.description}</div>
                                            </div>
                                            <div className="text-muted ms-auto fs-12">
                                                <SpkBadge variant="" Customclass="rounded-pill border text-dark">{data.time}</SpkBadge>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" pb-2 justify-content-between">
                            <Card.Title>
                                Recent Deals Status
                            </Card.Title>
                            <div>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn btn-sm">View Details</SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover deals-status-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Deal ID</th>
                                            <th scope="col">Client</th>
                                            <th scope="col">Deal Value</th>
                                            <th scope="col">Deal Status</th>
                                            <th scope="col">Last Contacted</th>
                                            <th scope="col">Sales Representative</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {RecentDealsStatus.map((data) => (
                                            <tr key={data.id}>
                                                <td className="fw-medium">{data.dealId}</td>
                                                <td>
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <span className={`avatar avatar-xs flex-shrink-0 avatar-rounded bg-${data.companyLogoBg}`}>
                                                            <img src={data.companyLogo} alt="company logo" />
                                                        </span>
                                                        <div className="fw-medium">{data.company}</div>
                                                    </div>
                                                </td>
                                                <td className="fw-medium fs-14">{data.amount}</td>
                                                <td><span className={`badge bg-${data.statusColor}`}>{data.status}</span></td>
                                                <td>{data.date}<i className="ri-calendar-check-line text-pink fs-14 ms-1"></i></td>
                                                <td>
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <span className="avatar avatar-xs flex-shrink-0 avatar-rounded">
                                                            <img src={data.representativeAvatar} alt="representative image" />
                                                        </span>
                                                        <div className="fw-medium">{data.representative}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <SpkTooltips placement="top" title="View">
                                                            <SpkButton Buttonvariant="primary" Customclass="btn btn-sm btn-icon  d-flex align-items-center justify-content-center">
                                                                <i className="ti ti-eye fs-16"></i>
                                                            </SpkButton>
                                                        </SpkTooltips>
                                                        <SpkTooltips placement="top" title="Download">
                                                            <SpkButton Buttonvariant="secondary" Customclass="btn btn-sm btn-icon  d-flex align-items-center justify-content-center">
                                                                <i className="ti ti-download fs-16"></i>
                                                            </SpkButton>
                                                        </SpkTooltips>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    );
};

export default Crm;