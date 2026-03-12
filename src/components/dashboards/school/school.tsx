import { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import { AttendanceReportOptions, AttendanceReportSeries, DashboardStats, ExamResults, NoticeBoard, OverallAttendanceOptions, OverallAttendanceSeries, StudentsMarks, TeachersList, TodayAcitivityList, UpcomingAssignments } from "../../../shared/data/dashboards/schooldata";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkSchoolCard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-schoolcard";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Link } from "react-router-dom";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import background3 from '../../../assets/images/media/backgrounds/3.png';
import png12 from '../../../assets/images/media/png/12.png';

const School = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"School"} />

            <Pageheader title="Dashboard" currentpage="School" activepage="School" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        {DashboardStats.map((data) => (
                            <Col xxl={3} xl={3} lg={6} md={6} sm={12} key={data.id}>
                                <SpkSchoolCard card={data} DflexClass="align-items-start gap-3 flex-wrap" CustomCardClass={`icon-overlay main-custom-card border border-${data.containerBorder} border-opacity-25`} CardBodyClass="p-4" />
                            </Col>
                        ))}
                        <Col xl={8}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> Attendance Report </Card.Title>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                            <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Relevant</Dropdown.Item> </li>
                                        </SpkDropdown>
                                        <div>
                                            <SpkButton Buttonvariant="light" Customclass="btn border btn-sm">Export<i className="ri-share-forward-line ms-1"></i></SpkButton>
                                        </div>
                                    </div>
                                </Card.Header>
                                <Card.Body className="">
                                    <div id="attendance-report">
                                        <Spkapexcharts chartOptions={AttendanceReportOptions} chartSeries={AttendanceReportSeries} type="bar" width={'100%'} height={345} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> Notice Board </Card.Title>
                                    <Link to="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <ListGroup className=" list-group-flush">
                                        {NoticeBoard.map((data) => (
                                            <ListGroup.Item key={data.id}>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div> <span className={`avatar-md avatar bg-${data.svgBg} p-2 svg-white`}>
                                                        {data.svg}
                                                    </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <div>
                                                            <div className="fw-semibold">{data.title}</div> <span className="text-muted mb-0 d-block">{data.description}</span>
                                                        </div>
                                                    </div>
                                                    <div className="badge bg-light text-default border">{data.date}</div>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className=" p-4 rounded school-card">
                            <div className="img-container">
                                <img src={background3} alt="" />
                            </div>
                            <Row className="justify-content-between position-relative z-3">
                                <Col xxl={8}>
                                    <span className="mb-3 fw-medium">Today's Exam</span>
                                    <SpkBadge variant="danger-transparent" Customclass=" ms-2">11:30 AM</SpkBadge>
                                    <p className="mb-2 mt-2 h4 fw-semibold">Biology</p>
                                    <span className="">The world and it's  people</span>
                                    <div className="d-flex gap-2 mt-4 align-items-center">
                                        <div className="bg-primary bg-opacity-20 text-default fw-semibold py-1 px-2 rounded timer-div"> 02 </div>
                                        <div>:</div>
                                        <div className="bg-primary bg-opacity-20 text-default fw-semibold py-1 px-2 rounded timer-div">  00 </div>
                                        <div>:</div>
                                        <div className="bg-primary bg-opacity-20 text-default fw-semibold py-1 px-2 rounded timer-div"> 08 </div>
                                    </div>
                                </Col>
                                <Col xxl={4}>
                                    <img src={png12} alt="" className="dash-img custom-school" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Overall Attendance</Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Relevant</Dropdown.Item> </li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0 px-2">
                            <div id="students-overview">
                                <Spkapexcharts chartOptions={OverallAttendanceOptions} chartSeries={OverallAttendanceSeries} type="bar" width={'100%'} height={305} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between pb-1">
                            <Card.Title> Teachers List </Card.Title>
                            <SpkButton Buttonvariant="light" Customclass="btn btn-sm border">View All <i className="ti ti-arrow-narrow-right"></i></SpkButton>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap teachers-list">
                                    <thead>
                                        <tr>
                                            <th scope="col">Teacher</th>
                                            <th scope="col">Qualification</th>
                                            <th scope="col">Subject</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {TeachersList.map((data) => (
                                            <tr key={data.id}>
                                                <td className={data.tdClass}>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <img width={28} height={28} src={data.avatar} alt="" className="avatar avatar-sm" />
                                                        <Link to="#!" className="fw-semibold">{data.name}</Link>
                                                    </div>
                                                </td>
                                                <td className={data.tdClass}><span className="fs-12  d-block">{data.qualification}</span></td>
                                                <td className={data.tdClass}>
                                                    <div className={`text-${data.subjectColor}`}>{data.subject}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Exam Results </Card.Title>
                            <Link to="#!" className="btn btn-sm btn-primary-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" p-0 pb-2 mb-1">
                            <ListGroup className=" list-group-flush">
                                {ExamResults.map((data) => (
                                    <ListGroup.Item className=" px-3" key={data.id}>
                                        <div className="d-flex align-items-start gap-2 mb-3 flex-wrap"> <span
                                            className={`avatar avatar-md bg-${data.avatarBg}`}> <i
                                                className={`${data.iconClass} fs-18`}></i> </span>
                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                <p className="mb-sm-1 mb-0 fw-medium">{data.title}</p><span
                                                    className="text-muted">{data.standards}</span>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="btn btn-light btn-sm"><i
                                                    className="ri-download-cloud-2-line me-1"></i> Download Results
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress progress-md p-1">
                                            <div className={`progress-bar progress-bar-striped progress-bar-animated bg-${data.progress.barBg}`}
                                                role="progressbar" style={{ width: data.progress.width }} aria-valuenow={data.progress.valueNow}
                                                aria-valuemin={data.progress.valueMin} aria-valuemax={data.progress.valueMax}> </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Today's Acitivity List </Card.Title>
                            <Link to="#!" className="btn btn-sm btn-light text-default"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" pt-2">
                            <ul className="list-unstyled mb-0 Today-activity-list">
                                {TodayAcitivityList.map((data) => (
                                    <li key={data.id}>
                                        <div className="d-flex align-items-start gap-2 flex-wrap mb-1">
                                            <span className={`avatar avatar-md bg-${data.iconBg}`}>
                                                <i className={`${data.icon} fs-18`}></i>
                                            </span>
                                            <div className="ms-sm-2 mb-1 mb-sm-0">
                                                <p className="mb-sm-1 mb-0 fw-medium">{data.title}</p>
                                                <span className="text-muted">{data.standards}</span>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="min-w-fit-content d-flex align-items-center text-muted fs-12">
                                                    <span><i className="fe fe-clock me-1"></i></span> <span>{data.startTime}</span>
                                                    <span className="mx-2 text-muted">-</span> <span>{data.endTime}</span>
                                                </div>
                                                <div className="text-end mt-1"> <SpkBadge variant={`${data.studentsCountBg}`}>{data.studentsCount}</SpkBadge> </div>
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
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> UPCOMING ASSIGNMENTS </Card.Title> <Link to="#!"
                                className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" pt-2">
                            <ul className="list-unstyled upcoming-assignments-list">
                                {UpcomingAssignments.map((data) => (
                                    <li key={data.id}>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div>
                                                <Link to="#!" className="fw-medium d-block mb-1"> {data.title}</Link>
                                                <span className="text-muted fs-12 d-flex align-items-center gap-3">{data.dateRange}
                                                    <SpkBadge variant={`${data.deadlineBg}`}>{data.deadline}</SpkBadge>
                                                </span>
                                            </div>
                                            <div>
                                                <SpkButton Buttonvariant="light" Customclass="btn btn-icon btn-sm"><i className="ri-arrow-right-s-line rtl-rotate"></i></SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className=" justify-content-between">
                                <Card.Title> Students Marks </Card.Title>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="d-flex flex-wrap gap-2">
                                        <div>
                                            <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                        </div>
                                        <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                            <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Relevant</Dropdown.Item> </li>
                                        </SpkDropdown>
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body className=" p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap text-center">
                                        <thead>
                                            <tr>
                                                <th className="">S.No</th>
                                                <th className="">ID</th>
                                                <th className="text-start">Student</th>
                                                <th className="">Class</th>
                                                <th className="">Section</th>
                                                <th className="">Status</th>
                                                <th className="">Marks In %</th>
                                                <th className="">Marks In GPA</th>
                                                <th className="">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {StudentsMarks.map((data) => (
                                                <tr key={data.id}>
                                                    <td className="">{data.id}</td>
                                                    <td className="">{data.studentId}</td>
                                                    <td className="">
                                                        <div className="d-flex align-items-center">
                                                            <Link to="#!"
                                                                className="avatar avatar-xs avatar-rounded me-2">
                                                                <img src={data.avatar} alt="img" /> </Link>
                                                            <Link to="#!">{data.name}</Link>
                                                        </div>
                                                    </td>
                                                    <td className="">{data.class}</td>
                                                    <td className="">{data.section}</td>
                                                    <td className=""> <SpkBadge variant={`${data.resultStatusBg}`}>{data.resultStatus}</SpkBadge></td>
                                                    <td className="">{data.percentage}</td>
                                                    <td className="">{data.gpa}</td>
                                                    <td className="">
                                                        <div className="btn-list">
                                                            <SpkButton Buttonvariant="primary-light" aria-label="button" Buttontype="button" Customclass="btn btn-sm btn-icon">
                                                                <i className="ri-eye-line"></i>
                                                            </SpkButton>
                                                            <SpkButton Buttonvariant="secondary-light" aria-label="button" Buttontype="button" Customclass="btn btn-sm btn-icon">
                                                                <i className="ri-edit-line"></i> </SpkButton>
                                                            <SpkButton Buttonvariant="danger-light" aria-label="button" Buttontype="button" Customclass="btn btn-sm btn-icon">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </SpkButton>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className=" border-top-0">
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
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    );
};

export default School;