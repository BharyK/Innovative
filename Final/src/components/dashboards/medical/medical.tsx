import { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Nav, Row, Tab } from "react-bootstrap";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { AppointmentHistory, AvailbleTreatments, DashboardCards, DoctorsList, PatientsList, TotalPatientOptions, TotalPatientSeries, Treatments, UpcomingAppointments, } from "../../../shared/data/dashboards/medicaldata";
import SpkCrmcard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-crmcard";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import SpkMedicalTabCard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-medicaltabcard";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import media76 from '../../../assets/images/media/media-76.png';
import png10 from '../../../assets/images/media/png/10.png';

const Medical = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Medical"} />

            <Pageheader title="Dashboard" currentpage="Medical" activepage="Medical" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row >
                <Col xxl={5}>
                    <Row >
                        <Col xl={12}>
                            <Card className=" d-flex align-items-center justify-content-between flex-row border-0 overflow-hidden">
                                <Card.Body className=" med-banner-card p-4 rounded">
                                    <div className="img-container">
                                        <img src={media76} alt="" />
                                    </div>
                                    <Row className=" mx-0">
                                        <Col md={8}>
                                            <h4 className="fw-semibold">Welcome to your Medical Dashboard!</h4>
                                            <span className="d-block text-default mt-2 pt-1 me-3">Simplify medical practice
                                                management with streamlined patient profiles, appointment
                                                scheduling, and
                                                comprehensive record-keeping—all in one platform.</span>
                                            <div className="mt-3">
                                                <SpkButton Buttonvariant="primary" Customclass="btn btn-wave waves-effect waves-light">Get Started <i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                                            </div>
                                        </Col>
                                    </Row>
                                    <img src={png10} alt="" className="img-fluid dash-img d-md-block d-none" />
                                </Card.Body>
                            </Card>
                        </Col>
                        {DashboardCards.map((data) => (
                            <Col md={6} key={data.id}>
                                <SpkCrmcard card={data} CustomCardClass=" main-custom-card" AvatarSize='lg' DflexClass="align-items-center flex-wrap gap-3" />
                            </Col>
                        ))}
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> Upcoming Appointments </Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="text-muted fs-13 no-caret border-0 px-0" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Relevant</Dropdown.Item> </li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className="pt-2">
                                    <div className="upcoming-shedule">
                                        <Tab.Container defaultActiveKey='wed'>
                                            <Nav as='ul' className="nav-pills pb-3 gap-1" role="tablist">
                                                <li className=""> <Link className="text-center btn btn-sm btn-light op-6 me-3" to="#!"> <i className="ri-arrow-left-line fw-normal me-1"></i>Back </Link></li>
                                                <Nav.Item as='li' className="fw-medium" role="presentation"> <Nav.Link as='a' eventKey='mon' href="#mon_tab" className="sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}> <p className="sh-dt mb-0">25</p><span className="sh-day fw-semibold">Mon</span></Nav.Link> </Nav.Item>
                                                <Nav.Item as='li' className="fw-medium" role="presentation"> <Nav.Link as='a' eventKey='tue' href="#tue_tab" className="sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}><p className="sh-dt mb-0">26</p><span className="sh-day fw-semibold">Tue</span></Nav.Link> </Nav.Item>
                                                <Nav.Item as='li' className="fw-medium" role="presentation"> <Nav.Link as='a' eventKey='wed' href="#wed_tab" className="sh-link text-center b" data-bs-toggle="tab" aria-selected="true" role="tab"> <p className="sh-dt mb-0">27</p><span className="sh-day fw-semibold">Wed</span></Nav.Link> </Nav.Item>
                                                <Nav.Item as='li' className="fw-medium" role="presentation"> <Nav.Link as='a' eventKey='thu' href="#thu_tab" className="sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}><p className="sh-dt mb-0">28</p><span className="sh-day fw-semibold">Thu</span></Nav.Link> </Nav.Item>
                                                <Nav.Item as='li' className="fw-medium" role="presentation"> <Nav.Link as='a' eventKey='fri' href="#fri_tab" className="sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}><p className="sh-dt mb-0">29</p><span className="sh-day fw-semibold">Fri</span> </Nav.Link> </Nav.Item>
                                                <Nav.Item as='li' className="fw-medium" role="presentation"> <Nav.Link as='a' eventKey='sat' href="#sat_tab" className="sh-link text-center b" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}> <p className="sh-dt mb-0">30</p><span className="sh-day fw-semibold">Sat</span></Nav.Link></Nav.Item>
                                                <li className=""> <Link className="text-center btn btn-sm btn-light ms-3" to="#!"> more<i className="ri-arrow-right-line fw-normal ms-1"></i> </Link> </li>
                                            </Nav>
                                            <Tab.Content className="pt-2">
                                                <Tab.Pane eventKey='mon' className="p-3 pt-4 border" id="mon_tab" role="tabpanel">
                                                    <ul className="list-unstyled mb-0 sh-shedule-container">
                                                        {UpcomingAppointments.filter(item => (item.day === 'Monday')).map((data) => (
                                                            <SpkMedicalTabCard card={data} key={data.id} />
                                                        ))}
                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='tue' className="p-3 pt-4 border" id="tue_tab" role="tabpanel">
                                                    <ul className="list-unstyled mb-0 sh-shedule-container">
                                                        {UpcomingAppointments.filter(item => (item.day === 'Tuesday')).map((data) => (
                                                            <SpkMedicalTabCard card={data} key={data.id} />
                                                        ))}
                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='wed' className="p-3 pt-4 border" id="wed_tab" role="tabpanel">
                                                    <ul className="list-unstyled mb-0 sh-shedule-container">
                                                        {UpcomingAppointments.filter(item => (item.day === 'Wednesday')).map((data) => (
                                                            <SpkMedicalTabCard card={data} key={data.id} />
                                                        ))}
                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='thu' className="p-3 pt-4 border" id="thu_tab" role="tabpanel">
                                                    <ul className="list-unstyled mb-0 sh-shedule-container">
                                                        {UpcomingAppointments.filter(item => (item.day === 'Thursday')).map((data) => (
                                                            <SpkMedicalTabCard card={data} key={data.id} />
                                                        ))}
                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='fri' className="p-3 pt-4 border" id="fri_tab" role="tabpanel">
                                                    <ul className="list-unstyled mb-0 sh-shedule-container">
                                                        {UpcomingAppointments.filter(item => (item.day === 'Friday')).map((data) => (
                                                            <SpkMedicalTabCard card={data} key={data.id} />
                                                        ))}
                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='sat' className="p-3 pt-4 border" id="sat_tab" role="tabpanel">
                                                    <ul className="list-unstyled mb-0 sh-shedule-container">
                                                        {UpcomingAppointments.filter(item => (item.day === 'Saturday')).map((data) => (
                                                            <SpkMedicalTabCard card={data} key={data.id} />
                                                        ))}
                                                    </ul>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={7}>
                    <Row >
                        <Col xl={12}>
                            <Card className="custom-card treatments-avaialable overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> AVAILABLE TREATMENTS </Card.Title>
                                    <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body className=" p-4 pt-2">
                                    <Row className=" gy-4">
                                        {AvailbleTreatments.map((data) => (
                                            <Col key={data.id}>
                                                <div className={`p-3 d-flex align-items-center gap-3 rounded ${data.cardColor}`}>
                                                    <span className={`avatar avatar-lg bg-white svg-${data.svgColor} avatar-rounded`}>
                                                        {data.svg}
                                                    </span>
                                                    <div>
                                                        <p className="fw-semibold mb-1">{data.category}</p>
                                                        <span className="fs-13 text-muted">{data.available}</span>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={8}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> TOTAL PATIENTS </Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="p-2 fs-12 border-0 text-muted no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className=" pb-0 px-2">
                                    <div id="patients-analysis">
                                        <Spkapexcharts chartOptions={TotalPatientOptions} chartSeries={TotalPatientSeries} type="bar" width={'100%'} height={325} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> DOCTORS LIST </Card.Title>
                                    <Link to="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body className=" pt-2">
                                    <ul className="list-unstyled doctors-list">
                                        {DoctorsList.map((data) => (
                                            <li key={data.id}>
                                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                                    <div className="lh-1"> <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={data.avatar} alt="" />
                                                    </span> </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-medium lh-1">{data.name}</span>
                                                        <span className="text-muted fs-12">{data.specialization}</span>
                                                    </div>
                                                    <div>
                                                        <SpkBadge variant={data.availabilityBg} Customclass={` rounded-pill`}><i className="ri-circle-fill me-1 fs-7"></i>{data.availability}</SpkBadge>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={5}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> APPOINTMENT HISTORY </Card.Title>
                                    <Link to="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <ListGroup className="list-group-flush appointment-history">
                                        {AppointmentHistory.map((data) => (
                                            <ListGroup.Item key={data.id}>
                                                <Link to="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className={`avatar avatar-md bg-${data.bgColor}`}>
                                                            <i className={`${data.icon} fs-5`}></i>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="fw-medium">{data.title}</span>
                                                        <span className="fs-12 text-muted d-block mt-1"><span className="fw-medium">{data.code}</span> - {data.date},{data.time}</span>
                                                    </div>
                                                    <span className={`text-${data.statusColor}`}>{data.status}</span>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={7}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>Treatments</Card.Title>
                                    <SpkButton Buttonvariant="light" Buttontype="button" Customclass="btn btn-sm"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <ListGroup className=" list-group-flush">
                                        {Treatments.map((data) => (
                                            <ListGroup.Item key={data.id}>
                                                <div className="d-flex align-items-start flex-wrap">
                                                    <span className={`avatar avatar-md avatar-rounded bg-${data.iconBg}`}>
                                                        <i className={`${data.icon} fs-20 leading-none`}></i>
                                                    </span>
                                                    <div className="flex-auto ms-3">
                                                        <span className="fw-semibold mb-0 d-block">{data.name}</span>
                                                        <span className="text-muted mb-0 d-block">{data.description}</span>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="d-flex gap-5 align-items-center">
                                                            <div>
                                                                <SpkBadge variant={`${data.successRateBg}`}>{data.successRate}</SpkBadge>
                                                                <div className="fs-11 text-muted">Success Rate:</div>
                                                            </div>
                                                            <div>
                                                                <div className="mb-0 fw-medium">{data.sessions}</div>
                                                            </div>
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
                </Col>
            </Row >
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row >
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Patients List </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div> <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" /> </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'S.No', headerClassname: "text-center" }, { title: 'Patient ID' }, { title: 'Name' }, { title: 'Gender' }, { title: 'Age' }, { title: 'Assigned Doctor' }, { title: 'Contact Number' }, { title: 'Appointmented Date' }, { title: 'Disease' }, { title: 'Room No' }, { title: 'Action' },]}>
                                    {PatientsList.map((data) => (
                                        <tr key={data.id}>
                                            <td className="text-center">0{data.id}</td>
                                            <td>{data.patientId}</td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={data.avatar} className="" alt="..." />
                                                    </span>
                                                    <div>
                                                        <span className="fw-medium mb-0 d-flex align-items-center">{data.name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{data.gender}</td>
                                            <td>{data.age}</td>
                                            <td>{data.assginedDoctor}</td>
                                            <td>{data.phone}</td>
                                            <td>{data.appointmentedDate}</td>
                                            <td>
                                                <SpkBadge variant={`${data.diseaseBg}`}>{data.disease}</SpkBadge>
                                            </td>
                                            <td>{data.room}</td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="primary-light" aria-label="button" Buttontype="button" Customclass="btn btn-sm btn-icon">
                                                        <i className="ri-eye-line"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="secondary-light" aria-label="button" Buttontype="button" Customclass="btn btn-sm btn-icon">
                                                        <i className="ri-edit-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <div> Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
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
            {/* <!-- End:: row-2 --> */}
        </Fragment >
    );
};

export default Medical;