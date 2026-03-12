import { Fragment } from "react";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkTooltips from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Swiper, SwiperSlide } from "swiper/react";
import SpkJobdetailsCard from "../../../../shared/@spk-reusable-components/reusable-apps/spk-JobdetailsCard";
import { searchJobdata } from "../../../../shared/data/apps/jobs/searchjobdata";
import { Autoplay } from "swiper/modules";
import background7 from '../../../../assets/images/media/backgrounds/7.png'
import companylogo3 from '../../../../assets/images/company-logos/3.png'


const JobDetails = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Jobs-Jobdetails" />

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Job Details" activepage="Job Details" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={8}>
                    <Card className="custom-card job-details-main-card">
                        <div className="img-container">
                            <img src={background7} alt="" />
                        </div>
                        <Card.Body className=" p-4 z-1">
                            <div className="d-flex flex-wrap align-items-top justify-content-between gap-2">
                                <div>
                                    <div className="d-flex flex-wrap gap-3">
                                        <div>
                                            <span className="avatar avatar-lg">
                                                <img src={companylogo3} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="fw-medium mb-1 d-flex align-items-center">
                                                <Link to="#!" className="fw-semibold">UI/UX Developer - Fresher</Link>
                                            </h4>
                                            <Link to="#!" className="fw-medium">
                                                <i className="bi bi-building"></i> Spruko Technologies PRIVATE
                                                LIMITED
                                            </Link>
                                            <div className="mt-3">
                                                <SpkBadge variant="danger-transparent" Pill={true} Customclass="fs-11 me-1">Expert</SpkBadge>
                                                <SpkBadge variant="warning-transparent" Pill={true} Customclass="fs-11 me-1">Freelancer</SpkBadge>
                                                <SpkBadge variant="info-transparent" Pill={true} Customclass="fs-11">$15K-$20K</SpkBadge>
                                            </div>
                                            <div className="d-flex fs-14 mt-3">
                                                <div>
                                                    <p className="mb-1"><i className="bi bi-geo-alt me-1"></i>Banglore,
                                                        Karnataka
                                                    </p>
                                                    <p><i className="bi bi-briefcase me-1"></i>1 - 3+ years Experience
                                                    </p>
                                                </div>
                                                <div className="ms-4">
                                                    <p className="mb-1"><i className="bi bi-coin me-1"></i><span
                                                        className="fw-medium">10,000 - 20,000</span></p>
                                                    <p><i className="bi bi-mortarboard  me-1"></i>Graduate and Above</p>
                                                </div>
                                            </div>
                                            <div className="popular-tags">
                                                <Link to="#!"
                                                    className="badge rounded-pill bg-primary text-fixed-white"><i
                                                        className="bi bi-clock me-1"></i>Full Time</Link>
                                                <Link to="#!"
                                                    className="badge rounded-pill bg-secondary text-fixed-white ms-1"><i
                                                        className="bi bi-briefcase me-1"></i>13 Openings</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="btn-list mb-2">
                                        <Link to="#!" className="btn btn-primary"> Apply Now</Link>
                                        <Link to="#!" className="btn btn-icon btn-secondary btn-wave d-inline-flex align-items-center justify-content-center">
                                            <i className="ri-heart-line"></i>
                                        </Link>
                                        <Link to="#!" className="btn btn-icon btn-danger btn-wave d-inline-flex align-items-center justify-content-center">
                                            <i className="ri-share-line"></i>
                                        </Link>
                                    </div>
                                    <p className="mb-0">
                                        <SpkTooltips title="45 days left">
                                            <i className="bi bi-info-circle text-danger me-1"></i>
                                        </SpkTooltips>
                                        <span className="fw-medium">45 days left </span>
                                        to apply this job</p>
                                    <div className="align-self-end text-end mt-5"> <span className="ms-3 fw-medium d-inline-flex align-items-center gap-1 flex-wrap"><i
                                        className="ri-pushpin-fill text-danger fs-15"></i> Location:
                                        <Link to="#!" className="fw-normal">Los Angeles, CA.</Link></span>
                                        <span className="ms-3 fw-medium d-inline-flex align-items-center gap-1 flex-wrap">
                                            <i className="ri-global-fill text-info fs-15 me-1 d-inline-block"></i>Website :
                                            <Link to="#!"
                                                className="text-decoration-underline text-info fw-normal"> www.infotechzcompy.com
                                            </Link></span>
                                        <p className="mb-0 mt-3">
                                            <SpkTooltips title="20 days left">
                                                <i className="bi bi-info-circle text-warning fw-semibold me-1"></i>
                                            </SpkTooltips>
                                            <span className="fw-medium">20 days</span> remaining to apply for this job.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body className="">
                            <div className="job-details">
                                <div className="fs-16 fw-medium mb-2">Job Description:</div>
                                <p className="fs-14 mb-4"> We are seeking a skilled UI Developer to join our
                                    dynamic team. The ideal candidate will play a crucial role in designing and
                                    implementing user interfaces for our web applications. This role requires a deep
                                    understanding of user-centered design principles and the ability to translate
                                    complex business requirements into intuitive and visually appealing web
                                    interfaces. </p>
                                <p className="fs-14 mb-4"> As a UI Developer, you will work closely with our design
                                    and development teams to create responsive and interactive user interfaces. You
                                    will be responsible for ensuring that the web applications meet high standards
                                    of usability and performance. Your work will involve not only implementing
                                    designs but also iterating on them based on user feedback and usability testing.
                                </p>
                                <p className="fs-14 mb-4"> The successful candidate will have experience with
                                    modern frontend technologies, including HTML, CSS, JavaScript, and popular
                                    frameworks like React or Angular. You should also be familiar with version
                                    control systems and best practices for web development. Strong problem-solving
                                    skills and a keen eye for detail are essential for this role. </p>
                                <p className="fs-14 mb-4"> If you are passionate about creating exceptional user
                                    experiences and thrive in a collaborative environment, we would love to hear
                                    from you. Join us and contribute to building innovative web applications that
                                    make a difference. </p>
                                <div className="row mb-4">
                                    <Col xl={6}>
                                        <div className="fs-16 fw-medium mb-2">Key Responsibilities:</div>
                                        <ul className="job-details-responsibilities mb-0 list-unstyled">
                                            <li className="mb-3">
                                                <i className="ri-speed-fill fs-13 text-muted me-2"></i>Develop and
                                                implement UI components using modern frontend technologies.
                                            </li>
                                            <li className="mb-3">
                                                <i className="ri-speed-fill fs-13 text-muted me-2"></i>Collaborate with
                                                designers to translate wireframes and mockups into functional web
                                                interfaces.
                                            </li>
                                            <li className="mb-3">
                                                <i className="ri-speed-fill fs-13 text-muted me-2"></i>Optimize web
                                                pages for maximum speed and scalability.
                                            </li>
                                            <li className="mb-3">
                                                <i className="ri-speed-fill fs-13 text-muted me-2"></i>Conduct user
                                                research and usability testing to refine and enhance user
                                                interfaces.
                                            </li>
                                            <li>
                                                <i className="ri-speed-fill fs-13 text-muted me-2"></i>Ensure
                                                cross-browser compatibility and mobile responsiveness.
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col xl={6}>
                                        <div className="fs-16 fw-medium mb-2">Qualifications:</div>
                                        <ul className="list-group mb-0 list-group-flush">
                                            <li className="list-group-item border-0 pb-1">
                                                <i className="ri-graduation-cap-fill fs-15 text-primary me-2"></i>Bachelor's
                                                degree in Computer Science or a related field.
                                            </li>
                                            <li className="list-group-item border-0 pb-1">
                                                <i className="ri-code-fill fs-15 text-danger me-2"></i>Proficiency in
                                                HTML, CSS, JavaScript, and modern frameworks (e.g., React, Angular).
                                            </li>
                                            <li className="list-group-item border-0 pb-1">
                                                <i className="ri-git-branch-fill fs-15 text-primary me-2"></i>Experience
                                                with version control systems (e.g., Git).
                                            </li>
                                            <li className="list-group-item border-0">
                                                <i className="ri-lightbulb-fill fs-15 text-secondary me-2"></i>Strong
                                                problem-solving skills and attention to detail.
                                            </li>
                                        </ul>
                                    </Col>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="flex-fill w-50">
                                        <span className="fw-medium d-block mb-1">Application Deadline:</span>
                                        <span className="d-block mb-0 text-muted fs-12">20 days remaining to apply.</span>
                                    </div>
                                    <div className="btn-list ms-auto">
                                        <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="btn btn-wave waves-effect waves-light">Apply
                                            Now <i className="ri-file-download-line ms-1"></i>
                                        </SpkButton>
                                        <SpkButton Buttonvariant="secondary-light" Size="sm" Customclass="btn btn-wave waves-effect waves-light">More
                                            Details <i className="ri-eye-line ms-1"></i>
                                        </SpkButton>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card border bg-secondary-transparent shadow-none">
                        <Card.Body className="">
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <h5 className="fw-medium mb-0">&#128400; Was this job fit for someone?</h5>
                                </Col>
                                <Col lg={6} className="text-end">
                                    <Link to="#!" className="btn btn-secondary btn-lg" role="button">
                                        <i className="ri-share-line me-2 align-middle d-inline-block"></i>Share Now
                                    </Link>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Job Highlights</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="d-flex gap-2 flex-wrap">
                                <div className="flex-grow-1">
                                    <p className="fs-14 d-flex mb-0 align-items-center p-2 border rounded border-primary border-opacity-25">
                                        <span
                                            className="avatar avatar-sm lh-1 avatar-rounded me-2 bg-primary">
                                            <i className="ri-time-line fs-15"></i>
                                        </span>
                                        09:30 AM - 06:00 PM
                                    </p>
                                </div>
                                <div className="flex-grow-1">
                                    <p className="fs-14 mb-0 d-flex align-items-center p-2 border rounded border-secondary border-opacity-25">
                                        <span
                                            className="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-secondary">
                                            <i className="bi bi-mortarboard fs-15"></i>
                                        </span>
                                        Graduate and Above
                                    </p>
                                </div>
                                <div className="flex-grow-1">
                                    <p className="fs-14 mb-0 d-flex align-items-center p-2 border rounded border-danger border-opacity-25">
                                        <span
                                            className="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-danger">
                                            <i className="bi bi-calendar fs-15"></i>
                                        </span>
                                        5 Working Days
                                    </p>
                                </div>
                                <div className="flex-grow-1">
                                    <p className="fs-14 mb-0 d-flex align-items-center  p-2 border rounded border-warning border-opacity-25">
                                        <span
                                            className="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-warning">
                                            <i className="bi bi-person-check fs-15"></i>
                                        </span>
                                        Bachelors Preferred
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Similar Jobs
                            </Card.Title>
                            <Link to="#!" className="text-primary fw-medium fs-13">
                                View All <i className="fe fe-arrow-right"></i>
                            </Link>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border border-dashed rounded mb-2">
                                    <div className="d-sm-flex flex-wrap gap-2">
                                        <span
                                            className="avatar avatar-md avatar-rounded bg-primary bg-opacity-10">
                                            <i className="ri-reactjs-fill fs-22 text-primary"></i>
                                        </span>
                                        <div className="flex-grow-1">
                                            <p className="fw-medium fs-13 mb-1"><Link to="#!"> React
                                                Lead Developer</Link></p>
                                            <p className="mb-0 me-3"><i className="bi bi-building text-muted"></i> Infratech
                                                PVT LTD</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item border border-dashed rounded mb-2">
                                    <div className="d-sm-flex flex-wrap gap-2">
                                        <span
                                            className="avatar avatar-md avatar-rounded bg-secondary bg-opacity-10">
                                            <i className="ri-html5-line fs-22 text-secondary"></i>
                                        </span>
                                        <div className="flex-grow-1">
                                            <p className="fw-medium fs-13 mb-1"><Link to="#!"> HTML
                                                Developer - Fresher</Link></p>
                                            <p className="mb-0 me-3"><i className="bi bi-building text-muted"></i> Spruko
                                                Technologies PRIVATE LIMITED</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item border border-dashed rounded mb-2">
                                    <div className="d-sm-flex flex-wrap gap-2">
                                        <span
                                            className="avatar avatar-md avatar-rounded bg-warning bg-opacity-10">
                                            <i className="ri-wordpress-fill fs-22 text-warning"></i>
                                        </span>
                                        <div className="flex-grow-1">
                                            <p className="fw-medium fs-13 mb-1"><Link to="#!"> Wordpress
                                                Developer - Remote</Link></p>
                                            <p className="mb-0 me-3"><i className="bi bi-building text-muted"></i> Hardware
                                                Private Solutions</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item border border-dashed rounded">
                                    <div className="d-sm-flex flex-wrap gap-2">
                                        <span
                                            className="avatar avatar-md avatar-rounded bg-info bg-opacity-10">
                                            <i className="ri-vuejs-line fs-22 text-info"></i>
                                        </span>
                                        <div className="flex-grow-1">
                                            <p className="fw-medium fs-13 mb-1"><Link to="#!"> Vuejs
                                                Frontend Developer</Link></p>
                                            <p className="mb-0 me-3"><i className="bi bi-building text-muted"></i> G
                                                Technical Solutions</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>

                    <div className="custom-jobs">
                        <h4 className="fw-medium mb-0">Related Jobs</h4>
                        <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <Swiper className="swiper swiper vertical swiper-related-jobs mb-4" direction="vertical" spaceBetween={10} slidesPerView={1} modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }}>
                            <SwiperSlide>
                                {searchJobdata.slice(0, 2).map((idx) => (
                                    <SpkJobdetailsCard item={idx} key={idx.id} />
                                ))}
                            </SwiperSlide>
                            <SwiperSlide>
                                {searchJobdata.slice(4, 6).map((idx) => (
                                    <SpkJobdetailsCard item={idx} key={idx.id} />
                                ))}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}
        </Fragment>
    );
};

export default JobDetails;