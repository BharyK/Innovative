import { Fragment } from "react";
import { Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import { Autoplay, } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Link } from "react-router-dom";
import SpkTooltips from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { jobCandidates } from "../../../../shared/data/apps/jobs/candidatedetailsdata";
import Spksearchcandidate from "../../../../shared/@spk-reusable-components/reusable-apps/spksearchcandidate";
import comppanyLogo1 from '../../../../assets/images/company-logos/1.png';
import comppanyLogo2 from '../../../../assets/images/company-logos/2.png';
import comppanyLogo3 from '../../../../assets/images/company-logos/3.png';
import comppanyLogo4 from '../../../../assets/images/company-logos/4.png';
import comppanyLogo5 from '../../../../assets/images/company-logos/5.png';
import comppanyLogo6 from '../../../../assets/images/company-logos/6.png';
import backgrounds7 from '../../../../assets/images/media/backgrounds/7.png';
import face1 from '../../../../assets/images/faces/1.jpg';


const CandidateDetails = () => {
    const toolsdata = [
        { id: 1, image: comppanyLogo1 },
        { id: 2, image: comppanyLogo2 },
        { id: 3, image: comppanyLogo3 },
        { id: 4, image: comppanyLogo4 },
        { id: 5, image: comppanyLogo5 },
        { id: 6, image: comppanyLogo6 },
    ]
    const skills = [
        { id: 1, title: 'HTML', icon: 'html5-line', color: 'primary' },
        { id: 2, title: 'CSS', icon: 'css3-line', color: 'secondary' },
        { id: 3, title: 'Javascript', icon: 'nodejs-line', color: 'danger' },
        { id: 4, title: 'Vuejs', icon: 'vuejs-line', color: 'info' },
        { id: 5, title: 'React', icon: 'reactjs-line', color: 'warning' },
    ]
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Candidate Details" />

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Candidate Details" activepage="Candidate Details" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col xxl={8}>
                    <Card className="custom-card job-candidate-details">
                        <div className="img-container custom-width">
                            <img src={backgrounds7} alt="" />
                        </div>
                        <div className="card-body p-4 z-1">
                            <div className="d-flex gap-2 flex-xl-nowrap flex-wrap">
                                <div className="lh-1 flex-shrink-0"> <span
                                    className="avatar avatar-xxl avatar-rounded bg-primary-transparent">
                                    <span className="avatar avatar-xl bg-white avatar-rounded">
                                        <img src={face1} className="rounded-circle img-fluid" alt="" />
                                    </span>
                                </span> </div>
                                <div className="d-flex gap-2 flex-xl-nowrap flex-wrap mb-3 flex-grow-1">
                                    <div className="flex-fill">
                                        <h6 className="mb-1 fw-semibold">
                                            <Link to="#!"> Dwayne Stort
                                                <SpkTooltips title="Verified candidate">
                                                    <i className="bi bi-patch-check-fill text-primary align-middle lh-1 mx-1"></i>
                                                </SpkTooltips>
                                            </Link>
                                        </h6>
                                        <p className="mb-0 text-muted">Web Designer</p>
                                        <div className="d-flex flex-wrap gap-2 align-items-center fs-12 text-muted">
                                            <p className="mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2 star-icon">
                                                <span className="text-warning"><i className="ri-star-fill"></i></span>
                                                <span className="text-warning"><i className="ri-star-fill"></i></span>
                                                <span className="text-warning"><i className="ri-star-fill"></i></span>
                                                <span className="text-warning"><i className="ri-star-fill"></i></span>
                                                <span className="text-warning"><i className="ri-star-half-fill"></i></span>
                                            </div>
                                            <Link to="#!" className="ms-1 min-w-fit-content text-muted"> <span>(245)</span>
                                                <span className="ms-1">Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="btn-list ms-auto">
                                        <Link to="#!" className="btn btn-primary btn-wave waves-effect">
                                            <i className="ri-download-cloud-line me-1"></i> Download CV</Link>
                                        <Link to="#!" className="btn btn-secondary-light btn-icon btn-wave waves-effect waves-light align-middle">
                                            <i className="ri-bookmark-line  my-auto align-middle"></i>
                                        </Link>
                                        <Link to="#!" className="btn btn-icon btn-danger-light btn-wave waves-effect waves-light align-middle me-0">
                                            <i className="ri-share-line my-auto align-middle"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex fs-14 mt-3 mb-2 gap-4 flex-wrap">
                                <div className="fw-medium">
                                    <i className="ri-briefcase-line me-1 text-primary fs-15"></i>
                                    Current: <span className="fw-normal">InnovaTech Solutions</span>
                                </div>
                                <div className="fw-medium"> <i className="ri-map-pin-line me-1 text-danger fs-15"></i> Location:
                                    <span className="fw-normal">Silicon Valley, CA</span>
                                </div>
                                <div className="fw-medium"> <i className="ri-briefcase-3-line me-1 text-secondary fs-15"></i>
                                    Experience: <span className="fw-normal">3 Years</span>
                                </div>
                                <div className="fw-medium">
                                    <i className="ri-money-rupee-circle-line me-1 text-info fs-15"></i>
                                    Annual Pay: <span className="fw-normal">$55,000 - $80,000</span>
                                </div>
                            </div>
                            <div className="d-flex fs-14 gap-3 align-items-center flex-wrap">
                                <div className="fw-medium"> Availability: </div>
                                <div className="popular-tags d-flex gap-1 flex-wrap">
                                    <span className="badge rounded-pill fs-11 bg-info">
                                        <i className="ri-remote-control-line me-1"></i>Full Time
                                    </span>
                                    <span className="badge rounded-pill fs-11 bg-primary">
                                        <i className="ri-time-line me-1"></i>Immediate Joinee
                                    </span>
                                    <span className="badge rounded-pill fs-11 bg-secondary">
                                        <i className="ri-calendar-line me-1"></i>Flexible Schedule
                                    </span>
                                </div>
                                <SpkButton Buttonvariant="secondary" Size="sm" Customclass="btn label-btn ms-auto">
                                    <i className="ri-phone-line label-btn-icon me-2"></i> Contact Now
                                </SpkButton>
                            </div>
                        </div>
                    </Card>
                    <Row>
                        <Col xl={12} className="custom-job-candidate-details">
                            <Card className="custom-card">
                                <Tab.Container defaultActiveKey="first">
                                    <Nav className="nav-tabs tab-style-1 d-sm-flex d-block bg-transparent mb-0 rounded-bottom-0"
                                        role="tablist">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first" data-bs-toggle="tab" data-bs-target="#profile"
                                                href="#profile">Profile Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second" data-bs-toggle="tab" data-bs-target="#personalinfo"
                                                aria-current="page" href="#personalinfo">Personal Info</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first" className="p-0 rounded-top-0" id="profile" role="tabpanel">
                                            <div className="card-body p-0 candidate-edu-timeline">
                                                <div className="p-3 border-bottom">
                                                    <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span
                                                        className="avatar avatar-rounded bg-light text-default avatar-sm"><i
                                                            className="ri-briefcase-4-line fs-13"></i></span> Career
                                                        Objective :</h5>
                                                    <div className="ms-4 ps-3">
                                                        <p className="op-9">Innovative and detail-oriented Web Developer
                                                            with a strong background in designing and implementing
                                                            scalable web applications. Adept at using modern
                                                            technologies and best practices to deliver responsive,
                                                            high-performance websites and applications.</p>
                                                        <p className="mb-0 op-9">Seeking an exciting opportunity at a
                                                            forward-thinking company where we can leverage my expertise
                                                            in web development to build dynamic and user-centric web
                                                            solutions. Committed to continuous learning and adapting to
                                                            new technologies to drive success and achieve exceptional
                                                            results.</p>
                                                    </div>
                                                </div>
                                                <div className="p-3 border-bottom">
                                                    <Row>
                                                        <div className="col-xl-7">
                                                            <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
                                                                <span
                                                                    className="avatar avatar-rounded bg-light text-default avatar-sm"><i
                                                                        className="ri-graduation-cap-line fs-13"></i></span>
                                                                Academic Background :
                                                            </h5>
                                                            <div className="ms-4 ps-3">
                                                                <div className="academic-item mb-3">
                                                                    <p className="fw-medium fs-14 mb-0">Bachelor of Science
                                                                        in Computer Science</p>
                                                                    <p className="text-muted mb-2">2020 Mar - 2024 Apr</p>
                                                                </div>
                                                                <div className="academic-item">
                                                                    <p className="fw-medium fs-14 mb-0">Intermediate (MPC)
                                                                    </p>
                                                                    <p className="text-muted mb-0">2017 Mar - 2020 Apr</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-5">
                                                            <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
                                                                <span
                                                                    className="avatar avatar-rounded bg-light text-default avatar-sm"><i
                                                                        className="ri-graduation-cap-line fs-13"></i></span>
                                                                Certifications :
                                                            </h5>
                                                            <div className="ms-4 ps-3">
                                                                <p className=""><span className="fs-14 fw-medium">Web
                                                                    Development (3 Mo)</span> - EMC Solutions Pvt
                                                                    Ltd</p>
                                                                <p className="mb-0"><span className="fs-14 fw-medium">Python
                                                                    Development (6 Mo)</span> - Dabre Services Pvt
                                                                    Ltd</p>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                </div>
                                                <div className="p-3">
                                                    <h5 className="fw-medium fs-17 d-flex align-items-center gap-2 mb-3">
                                                        <span className="avatar avatar-rounded bg-light text-default avatar-sm"><i
                                                            className="ri-briefcase-4-line fs-13"></i></span> Experience
                                                        :
                                                    </h5>
                                                    <div className="ms-4 ps-3">
                                                        <h6 className="fw-medium fs-15 mb-1">Web Developer (2020 Mar -
                                                            Present)</h6>
                                                        <p className="fw-medium mb-1">TechWave Solutions</p>
                                                        <p className="text-muted mb-3">Kondapur, Delhi</p>
                                                        <p className="fw-medium">Responsibilities:</p>
                                                        <ul className="list-unstyled mb-0">
                                                            <li><i
                                                                className="ri-checkbox-circle-line text-primary fs-14 me-2"></i>
                                                                Develop and maintain web applications using modern web
                                                                technologies, including HTML, CSS, and JavaScript
                                                                frameworks.</li>
                                                            <li><i
                                                                className="ri-checkbox-circle-line text-primary fs-14 me-2"></i>
                                                                Integrate APIs and third-party services to enhance
                                                                application functionality.</li>
                                                            <li><i
                                                                className="ri-checkbox-circle-line text-primary fs-14 me-2"></i>
                                                                Perform code reviews and maintain code quality standards
                                                                to ensure high performance and reliability of web
                                                                applications.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second" className="p-0 rounded-top-0" id="personalinfo" role="tabpanel">
                                            <div className="personal-details p-3">
                                                <Row>
                                                    <div className="col-md-6">
                                                        <p className="mb-2 p-1">
                                                            <span className="fw-medium fs-14 me-1">Full Name:</span> Sarah Williams</p>
                                                        <p className="mb-2 p-1">
                                                            <span className="fw-medium fs-14 me-1">Date of Birth:</span> April 15, 1990</p>
                                                        <p className="mb-2 p-1">
                                                            <span className="fw-medium fs-14 me-1">Gender:</span>Female</p>
                                                        <p className="mb-2 p-1">
                                                            <span className="fw-medium fs-14 me-1">Nationality:</span> American</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p className="mb-2 p-1">
                                                            <span className="fw-medium fs-14 me-1">Contact Number:</span> +1 123-456-7890</p>
                                                        <p className="mb-2 p-1"><span className="fw-medium fs-14 me-1">Email:</span> sarah.williams@email.com</p>
                                                        <p className="mb-2 p-1"><span className="fw-medium fs-14 me-1">LinkedIn:</span>
                                                            <Link to="https://www.linkedin.com/in/sarahwilliams" target="_blank">linkedin.com/in/sarahwilliams</Link>
                                                        </p>
                                                        <p className="mb-0 p-1"><span className="fw-medium fs-14 me-1">Website:</span>
                                                            <Link to="https://www.sarahwilliamsdesigns.com" target="_blank">sarahwilliamsdesigns.com</Link>
                                                        </p>
                                                    </div>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Card>
                        </Col>
                    </Row>
                    <Card className="custom-card">
                        <Card.Body>
                            <h6 className="fw-medium mb-3">Get Notified About New Job Opportunities</h6>
                            <div className="input-group mb-3">
                                <Form.Control type="email" className="form-control" placeholder="Enter Your Email Address" aria-label="job-email" aria-describedby="job-Signup" />
                                <SpkButton Customclass="btn" Buttonvariant="primary" Buttontype="button" Id="job-Signup">Sign Up</SpkButton>
                            </div>
                            <label className="form-check-label">
                                By signing up, you accept our <Link to="#!"
                                    className="text-primary"><u>Terms of Service</u></Link> and <a
                                        href="#!" className="text-primary"><u>privacy policy</u></a>.
                            </label>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title> Skills </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="popular-tags gap-2 d-flex flex-wrap">
                                {skills.map((idx) => (
                                    <Link to="#!" key={idx.id} className="badge border text-default fs-12 align-middle">
                                        <span className={`avatar avatar-sm align-middle me-2 bg-${idx.color}-transparent`}>
                                            <i className={`ri-${idx.icon} fs-16`}></i></span>{idx.title}
                                    </Link>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title> Tools Used </Card.Title>
                        </Card.Header>
                        <Card.Body className="d-flex flex-wrap gap-2">
                            {toolsdata.map((idx) => (
                                <span key={idx.id} className="avatar me-2 avatar-rounded bg-white shadow-sm border border-primary border-opacity-25 p-2">
                                    <img src={idx.image} alt="" />
                                </span>
                            ))}
                        </Card.Body>
                    </Card>
                    <div className="custom-swiper">
                        <h6 className="fw-medium mb-3">Related Profiles</h6>
                        <Swiper className="swiper vertical swiper-related-profiles mb-4" direction="vertical" loop={true} slidesPerView={1} modules={[Autoplay]} autoplay={{ delay: 2500000, disableOnInteraction: false }}>
                            <SwiperSlide>
                                {jobCandidates.slice(0, 3).map((idx) => (
                                    <Spksearchcandidate obj={idx} key={idx.id} />
                                ))}
                            </SwiperSlide>
                            <SwiperSlide>
                                {jobCandidates.slice(3, 6).map((idx) => (
                                    <Spksearchcandidate obj={idx} key={idx.id} />
                                ))}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}
        </Fragment>
    );
};

export default CandidateDetails;