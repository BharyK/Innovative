import { Fragment } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import { EmployeesList, HiringSources, HiringSourcesOptions, HiringSourcesSeries, HrmCards, LeaveRequests, MeetingsSchedule, PerformanceByCategory, PerformanceOptions, PerformanceSeries, RecruitmentPipeline, UpcomingInterviews } from "../../../shared/data/dashboards/hrmdata";
import SpkHrmcard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-hrmcard";
import SpkButtongroup from "../../../shared/@spk-reusable-components/reusable-uielements/spk-buttongroup";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkTooltips from "../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import background6 from '../../../assets/images/media/backgrounds/6.png'
import media93 from '../../../assets/images/media/media-93.png'


const Hrm = () => {
    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}
            <Seo title={"HRM"} />

            <Pageheader title="Dashboard" currentpage="HRM" activepage="HRM" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        <Col xl={3}>
                            <Row>
                                {HrmCards.map((data) => (
                                    <Col xl={12} md={6} key={data.id}>
                                        <SpkHrmcard card={data} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col xl={9}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between align-items-center d-sm-flex d-block">
                                    <Card.Title className=" mb-sm-0 mb-2"> Performance By Category </Card.Title>
                                    <SpkButtongroup Buttongrplabel="Basic example">
                                        <SpkButton Buttonvariant="secondary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">1W</SpkButton>
                                        <SpkButton Buttonvariant="secondary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">1M</SpkButton>
                                        <SpkButton Buttonvariant="secondary-light" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">6M</SpkButton>
                                        <SpkButton Buttonvariant="secondary" Buttontype="button" Customclass="btn  btn-sm btn-wave waves-effect waves-light">1Y</SpkButton>
                                    </SpkButtongroup>
                                </Card.Header>
                                <Card.Body className="">
                                    <Row className=" p-3 border rounded mx-1 mb-4">
                                        {PerformanceByCategory.map((data) => (
                                            <Col xl={3} lg={4} md={4} sm={4} key={data.id}>
                                                <div className="mb-1"> <span className="mt-1 fs-16 fw-semibold">{data.value}</span>
                                                    <span className={`badge bg-${data.percentBg} text-${data.percentColor} rounded-pill mx-1`}>
                                                        <i className={`ti ti-arrow-narrow-${data.direction} me-1 fs-12`}></i>{data.percent}
                                                    </span>
                                                </div>
                                                <div>{data.category}</div>
                                            </Col>
                                        ))}
                                    </Row>
                                    <div id="performanceReport">
                                        <Spkapexcharts chartOptions={PerformanceOptions} chartSeries={PerformanceSeries} type="bar" width={'100%'} height={360} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card hrm-banner-card">
                        <div className="img-container">
                            <img src={background6} alt="" />
                        </div>
                        <Card.Body className=" p-4 position-relative z-3">
                            <Row>
                                <Col xl={9}>
                                    <div>
                                        <h5 className="mb-2 fw-semibold">Congratulations !</h5>
                                        <p className="mb-3">We are proud to announce the successful 13 major projects.</p>
                                        <Link to="#!" className="fw-semibold text-secondary text-decoration-underline">Overall Percentage<i className="ti ti-arrow-narrow-right"></i></Link>
                                    </div>
                                </Col>
                                <Col xl={3}>
                                    <img src={media93} alt="img" className="dash-img d-sm-block d-none" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between pb-2">
                            <Card.Title className=""> Recruitment Pipeline </Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i
                                className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <ListGroup className="mt-1">
                                {RecruitmentPipeline.map((data) => (
                                    <ListGroup.Item key={data.id}>
                                        <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="lh-1">
                                                    <span className={`avatar avatar-sm avatar-rounded ${data.iconBg}`}>
                                                        <i className={`${data.icon} fs-18`}></i>
                                                    </span>
                                                </div>
                                                <div className="fw-semibold">{data.title}</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-end gap-2">
                                                <span className={`badge ${data.percentBg}`}>{data.percent}</span>
                                                <div className="fw-semibold">{data.value}</div>
                                            </div>
                                        </div>
                                        <div className="progress progress-xs" role="progressbar" aria-valuenow={data.progress} aria-valuemin={0} aria-valuemax={100}>
                                            <div className={`progress-bar ${data.progressBg} progress-bar-striped`}
                                                style={{ width: `${data.progress}%` }}>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between pb-2">
                            <Card.Title className=""> Hiring Sources </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" py-0">
                            <div id="hiring-source">
                                <Spkapexcharts chartOptions={HiringSourcesOptions} chartSeries={HiringSourcesSeries} type="donut" width={'100%'} height={235} />
                            </div>
                            <Row className=" row-cols-12 mt-3 border-top">
                                {HiringSources.map((data) => (
                                    <Col className={` px-0 py-2 ${data.border}`} key={data.id}>
                                        <div className="text-center">
                                            <div className="mb-2"><i className={`${data.icon} p-2 fs-15 ${data.iconBg} rounded-circle lh-1 align-middle`}></i></div>
                                            <div className={`text-muted fs-12 mb-1 hrm-jobs-legend ${data.className} d-inline-block ms-2`}>  {data.label}</div>
                                            <div><span className="fs-16 fw-semibold">{data.count}</span></div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" pb-2 justify-content-between">
                            <Card.Title className="">Upcoming Interviews</Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i
                                className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ListGroup className=" list-group-flush my-1">
                                {UpcomingInterviews.map((data) => (
                                    <ListGroup.Item className=" d-flex gap-2 align-items-center flex-wrap" key={data.id}>
                                        <span
                                            className={`avatar avatar-rounded flex-shrink-0 avatar-md p-1 bg-${data.imageBg}`}>
                                            <img src={data.image} alt="" /> </span>
                                        <div className="d-flex justifycontent-between align-items-center flex-grow-1">
                                            <div className="flex-grow-1">
                                                <strong>{data.name}</strong><br />
                                                <small className="text-muted fs-13">
                                                    Position:{data.position}
                                                </small>
                                            </div>
                                            <div>
                                                <div className="fw-medium fs-12 ms-auto">
                                                    <i className="ri-calendar-check-line text-secondary fs-14 me-1 mb-1"></i>
                                                    {data.date}
                                                </div>
                                                <SpkBadge variant={data.timeBg} Customclass={`fs-11 fw-medium float-end`}>
                                                    {data.time}
                                                </SpkBadge>
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
                            <Card.Title className=""> LEAVE REQUESTS </Card.Title> <Link to="#!"
                                className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <ul className="list-unstyled hrm-leave-requests-list">
                                {LeaveRequests.map((data) => (
                                    <li key={data.id}> <Link to="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center flex-wrap gap-3">
                                            <span className={`avatar avatar-md p-1 border ${data.borderColor} border-opacity-25`}>
                                                <img src={data.avatar} alt="" />
                                            </span>
                                            <div className="flex-grow-1">
                                                <span className="fw-medium fs-14">{data.name}</span>
                                                <span className="d-block text-muted fs-13">{data.leaveType}</span>
                                            </div>
                                            <div className="btn-list">
                                                <SpkTooltips placement="top" title="Accept">
                                                    <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light">
                                                        <i className="ri-check-line"></i>
                                                    </SpkButton>
                                                </SpkTooltips>
                                                <SpkTooltips placement="top" title="Reject">
                                                    <SpkButton Buttonvariant="danger-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light">
                                                        <i className="ri-close-fill"></i>
                                                    </SpkButton>
                                                </SpkTooltips>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title className=""> Meetings Schedule </Card.Title>
                            <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">View All</SpkButton>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <ul className="list-unstyled mb-1 schedule-list">
                                {MeetingsSchedule.map((data) => (
                                    <li key={data.id}>
                                        <div className="d-flex align-items-center">
                                            <div className="lh-1"> <span className={`avatar avatar-md ${data.iconBg}`}> <i
                                                className={`${data.icon} fs-18`}></i> </span> </div>
                                            <div className="flex-fill ms-3">
                                                <p className="fw-semibold mb-0">{data.title}</p>
                                                <p className="fs-13 text-muted mb-0">{data.dateTime}</p>
                                            </div>
                                            <div> <SpkButton Buttonvariant={data.buttonStyle} Buttontype="button" Customclass={`btn btn-sm`}>Join Now</SpkButton>
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
                        <Card.Header className=" justify-content-between">
                            <Card.Title className=""> Employees List </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div> <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=" example" /> </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-primary no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'S.No', headerClassname: 'text-center' }, { title: 'Employee Name' }, { title: 'Employee Id' }, { title: 'Designation' }, { title: 'Email' }, { title: 'Status' }, { title: 'Contact' }, { title: 'Salary' }, { title: 'Action' },]}>
                                    {EmployeesList.map((data) => (
                                        <tr key={data.id}>
                                            <td className="text-center">0{data.id}</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img width={28} height={28} src={data.image} className="avatar avatar-sm"
                                                        alt="" />
                                                    <div className="flex-1 flex-between pos-relative ms-2">
                                                        <div className=""> <Link to="#!" className="fs-13 fw-medium">{data.name}</Link> </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> <span className="text-primary fs-14">{data.employeeId}</span> </td>
                                            <td> <span className="">{data.role}</span> </td>
                                            <td>{data.email}</td>
                                            <td> <span className={`badge bg-${data.statusBg}`}>{data.status}</span> </td>
                                            <td> <span className="">{data.phone}</span> </td>
                                            <td> <span className="fw-medium">{data.salary}</span> </td>
                                            <td>
                                                <div className="g-2">
                                                    <SpkTooltips placement="top" title="Edit">
                                                        <Link to='#!' aria-label="anchor" className="btn  btn-primary-light btn-sm">
                                                            <span className="ri-pencil-line fs-14"></span>
                                                        </Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <Link to='#!' aria-label="anchor" className="btn btn-danger-light btn-sm ms-2">
                                                            <span className="ri-delete-bin-7-line fs-14"></span>
                                                        </Link>
                                                    </SpkTooltips>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i> </div>
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
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

        </Fragment>
    );
};

export default Hrm;