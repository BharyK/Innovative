import { Fragment } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { ActiveCourses, AllCourses, AnalyticsCards, CourceSwiperCard, CourseSummary, FinancialSummaryOptions, FinancialSummarySeries, LearningActivityOptions, LearningActivitySeries, PopularCategories, PopularCategoriesOptions, PopularCategoriesSeries, TopCategories, TopCourses, TopInstructors } from "../../../shared/data/dashboards/coursedata";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkCourseCard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-coursecard";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkSwiperJs from "../../../shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import background3 from '../../../assets/images/media/backgrounds/3.png';


const Courses = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Courses"} />

            <Pageheader title="Dashboard" currentpage="Courses" activepage="Courses" />


            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={5}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Body className=" p-4 rounded course-main-card">
                                    <div className="img-container">
                                        <img src={background3} alt="" />
                                    </div>
                                    <Row className=" justify-content-between position-relative z-3">
                                        <Col lg={12}>
                                            <h4 className="fw-semibold mb-2">
                                                Elevate Your Expertise Through Our Online Courses.
                                            </h4>
                                            <span className="fs-14 d-block mb-3">
                                                Empower yourself with our comprehensive online courses,
                                                meticulously designed to help you hone and refine your
                                                skills for success. Whether you're looking to advance in
                                                your career, explore new opportunities.
                                            </span>
                                            <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn btn-w-md brn-wave mt-2" >
                                                Let's Start <i className="ri-arrow-right-line ms-1"></i>
                                            </SpkButton>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        {CourseSummary.map((data) => (
                            <Col xl={6} key={data.id}>
                                <Card className="custom-card">
                                    <Card.Body className="">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className={`avatar avatar-md bg-${data.svgBg}`}>
                                                {data.svg}
                                            </span>
                                            <div className="flex-grow-1">
                                                <h6 className="fw-semibold mb-1">{data.count}</h6>
                                                <span className="fs-13 text-muted">
                                                    {data.label}
                                                </span>
                                            </div>
                                            <Link to="#!" className={`text-${data.viewTextColor} fw-medium text-decoration-underline`}>
                                                {data.linkText}
                                                <i className="ri-arrow-right-line ms-1"></i>
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between pb-0">
                                    <Card.Title> Learning Activity </Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-sm no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!"> Last Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Month</Dropdown.Item> </li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className=" pb-0 pt-2">
                                    <div id="learning-activity">
                                        <Spkapexcharts chartOptions={LearningActivityOptions} chartSeries={LearningActivitySeries} type="line" width={'100%'} height={322} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={4}>
                    <Row>
                        {AnalyticsCards.map((data) => (
                            <Col xxl={6} xl={3} sm={6} key={data.id}>
                                <SpkCourseCard card={data} />
                            </Col>
                        ))}
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> Popular Categories </Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="p-0 border-0 fs-12 text-muted no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!"> Last Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Month</Dropdown.Item> </li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className="PopularCategories ps-xl-0 pt-0">
                                    <Row>
                                        <Col xl={5} className=" d-flex align-items-center justify-content-center">
                                            <div id="top-category">
                                                <Spkapexcharts chartOptions={PopularCategoriesOptions} chartSeries={PopularCategoriesSeries} type="donut" width={'100%'} height={180} />
                                            </div>
                                        </Col>
                                        <Col xl={7} className=" ps-xl-0">
                                            <div className="table-responsive">
                                                <SpkTables tableClass="table text-nowrap border">
                                                    {PopularCategories.map((data) => (
                                                        <tr key={data.id}>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="me-2">
                                                                        <span
                                                                            className={`avatar avatar-sm bg-${data.Iconbg}-transparent text-${data.Iconbg}`}
                                                                        >
                                                                            <i
                                                                                className={`${data.icon} fs-16`}
                                                                            ></i>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <p className="mb-1 fs-14 fw-medium">
                                                                            {data.categoryName}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span
                                                                    className={`text-${data.percentageTextColor} fw-medium`}
                                                                >
                                                                    {data.percentage}
                                                                </span>
                                                            </td>
                                                            <td>{data.amount}</td>
                                                        </tr>
                                                    ))}
                                                </SpkTables>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Latest Courses </Card.Title>
                            <div>
                                <SpkButton Buttonvariant="light" Buttontype="button" Customclass="btn btn-sm">
                                    View All
                                </SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body className=" pt-1">
                            <SpkSwiperJs slides={CourceSwiperCard} className="swiper vertical course-swiper-vertical swiper-initialized swiper-vertical swiper-backface-hidden" direction={"vertical"} autoplay={true} loop={true} slidesPerView={2} />
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Active Courses </Card.Title>
                            <Link to="#!" className="fs-12 text-muted d-inline-flex align-items-center" >
                                View All<i className="ti ti-arrow-narrow-right ms-1"></i>
                            </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ListGroup className="list-group-flush">
                                {ActiveCourses.map((data) => (
                                    <ListGroup.Item key={data.id}>
                                        <div className="d-flex align-items-start flex-wrap">
                                            <Link to="#!" className="pe-3 d-inline-block lh-1">
                                                <span className={`avatar avatar-md bg-${data.bgColor} border border-${data.borderColor} border-opacity-25`} >
                                                    <i className={`${data.icon} fs-22`}></i>
                                                </span>
                                            </Link>
                                            <div className="flex-fill fw-medium">
                                                <Link to="#!" className="text-muted d-block mb-1 fs-12" title="Category" >
                                                    <i className="ti ti-tag fs-11 align-middle"></i>
                                                    &nbsp;{data.category}
                                                </Link>
                                                <Link to="#!" className="d-block fs-14" >
                                                    {data.title}
                                                </Link>
                                            </div>
                                            <div id="course-1">
                                                <Spkapexcharts chartOptions={data.chartOptions} chartSeries={data.chartSeries} type="donut" width={50} height={50} />
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
                <Col xxl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <div className="card-title flex-grow-1 me-3">Top Courses</div>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-outline-light border btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1">
                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item> </li>
                                <li><Dropdown.Item href="#!">Last Year</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'Course Name' }, { title: 'Instructor' }, { title: 'Progress' }, { title: 'Completion Date' }, { title: 'Rating' }, { title: 'Actions' },]}>
                                    {TopCourses.map((data) => (
                                        <tr key={data.id}>
                                            <td className={data.borderClass}>{data.name}</td>
                                            <td className={data.borderClass}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div>

                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src={data.imgSrc} alt="Cource Image" title="applicant" />
                                                        </span>
                                                    </div>
                                                    <div>{data.instructor}</div>
                                                </div>
                                            </td>
                                            <td className={data.borderClass}>
                                                <div className="d-flex align-items-center">
                                                    <div className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuemin={0} aria-valuemax={100}  >
                                                        <div className={`progress-bar progress-bar-striped progress-bar-animated bg-${data.progressBarBg}`} style={{ width: data.progressBarWidth }}  ></div>
                                                    </div>
                                                    <div className="ms-2">{data.progress}</div>
                                                </div>
                                            </td>
                                            <td className={data.borderClass}>
                                                <span>{data.completionDate}</span>
                                            </td>
                                            <td className={data.borderClass}>
                                                <span>
                                                    {data.rating}
                                                    <i className={`${data.startIcon} ms-2 align-top`}></i>
                                                </span>
                                            </td>
                                            <td className={data.borderClass}>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light">
                                                        <i className="ri-eye-line"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light">
                                                        <i className="ri-edit-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Top Categories </Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center" >

                                View All<i className="ti ti-arrow-narrow-right ms-1"></i>
                            </Link>
                        </Card.Header>
                        <Card.Body className=" pt-1">
                            <ul className="list-unstyled courses-top-categories-list">
                                {TopCategories.map((data) => (
                                    <li key={data.id}>
                                        <div className="d-flex align-items-center">

                                            <span
                                                className={`avatar avatar-md bg-${data.bgColor}`}
                                            >
                                                <i
                                                    className={`${data.icon} fs-24 leading-none`}
                                                ></i>
                                            </span>
                                            <div className="flex-auto ms-3">

                                                <span className="fw-semibold mb-0 d-block">
                                                    {data.title}
                                                </span>
                                                <span className="fs-13 text-muted mb-0 d-block">
                                                    {data.courses}
                                                </span>
                                            </div>
                                            <div className="ms-auto">

                                                <span className="fs-14 mb-0 fw-semibold">
                                                    {data.price}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Financial Summary </Card.Title>
                            <div>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn btn-sm">Download<i className="ri-download-line ms-1"></i></SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body className=" pt-0 pb-0">
                            <div
                                className="d-flex flex-wrap align-items-center gap-2 p-2 border border-dashed rounded-2">
                                <div> <span className="avatar avatar-md  bg-primary-transparent"> <i
                                    className="ti ti-wallet fs-20"></i> </span> </div>
                                <div>
                                    <p className="mb-0">Your Balance</p>
                                </div>
                                <h5 className="fw-semibold mb-0 ms-auto"> $66,784.00 </h5>
                            </div>
                            <div id="financial-summary">
                                <Spkapexcharts chartOptions={FinancialSummaryOptions} chartSeries={FinancialSummarySeries} type='bar' width={'100%'} height={322} />
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
                            <Card.Title> Top Instructors </Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"  >
                                View All<i className="ti ti-arrow-narrow-right ms-1"></i>
                            </Link>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <ul className="list-unstyled top-instructors mb-0">
                                {TopInstructors.map((data) => (
                                    <li key={data.id} className={data.liClass}>
                                        <div className="d-flex">
                                            <div className="d-flex flex-fill align-items-center">
                                                <div className="me-2">
                                                    <span className={`avatar avatar-md p-1 bg-${data.imgBg} avatar-rounded`} >
                                                        <img src={data.imgSrc} alt="Instructor Image" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block fw-semibold">
                                                        {data.name}
                                                    </span>
                                                    <span className="text-muted fs-13">
                                                        {data.qualification}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="d-block fw-semibold">
                                                    {data.classesCount} Classes
                                                </span>
                                                <span className="text-muted fs-13">
                                                    {data.course}
                                                </span>
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
                            <Card.Title> All Courses </Card.Title>
                            <div className="d-flex flex-wrap">
                                <div className="me-3 my-1">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas='a' Customclass="m-1" Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item> </li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'S.No' }, { title: 'Course' }, { title: 'Category' }, { title: 'Classes' }, { title: 'Last Updated' }, { title: 'Instructor' }, { title: 'Students' }, { title: 'Actions' },]}>
                                    {AllCourses.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.id}</td>
                                            <td>
                                                <div className="d-flex align-items-center lh-1">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-xs">
                                                            <img
                                                                src={data.imageSrc}
                                                                alt="Course Image"
                                                            />
                                                        </span>
                                                    </div>
                                                    <div>{data.course}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${data.categoryBg}`}>
                                                    {data.category}
                                                </SpkBadge>
                                            </td>
                                            <td>{data.classes}</td>
                                            <td>{data.lastUpdated}</td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={data.instructorImgSrc} alt="" />
                                                    </span>
                                                    {data.instructor}
                                                </div>
                                            </td>
                                            <td>{data.students}</td>
                                            <td>
                                                <div className="hstack gap-2 fs-1">
                                                    <Link
                                                        aria-label="anchor"
                                                        to="#!"
                                                        className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light"
                                                    >
                                                        <i className="ri-edit-line"></i>
                                                    </Link>
                                                    <Link
                                                        aria-label="anchor"
                                                        to="#!"
                                                        className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"
                                                    >
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex flex-wrap align-items-center">
                                <div>
                                    Showing 5 Entries
                                    <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav
                                        aria-label="Page navigation"
                                        className="pagination-style-4"
                                    >
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" to="#!">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item active">
                                                <Link className="page-link" to="#!">
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#!">
                                                    2
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link
                                                    className="page-link text-primary"
                                                    to="#!"
                                                >
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment >
    );
};

export default Courses;
