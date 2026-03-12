import { Fragment } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import { Acquisitions, Candidates, CandidatesOptions, CandidatesSeries, JobsCards, JobsSwiperCard, RecentEmployers, RecentJobs, RecruitmentStats, RecruitmentStatsOptions, RecruitmentStatsSeries, TrendingUserProfiles, UserActivity } from "../../../shared/data/dashboards/jobsdata";
import SpkJobsCard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-jobscard";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Link } from "react-router-dom";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkCandidatesCard from "../../../shared/@spk-reusable-components/reusable-widgets/spk-candidatescard";
import SpkSwiperJs from "../../../shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";


const Jobs = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Jobs"} />

            <Pageheader title="Dashboard" currentpage="Jobs" activepage="Jobs" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        {JobsCards.map((data) => (
                            <Col xl={3} md={6} key={data.id}>
                                <SpkJobsCard card={data} />
                            </Col>
                        ))}
                        <Col xl={7}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>Recruitment Stats</Card.Title>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                            <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                        </SpkDropdown>
                                        <div> <SpkButton Buttonvariant="light" Customclass="btn border btn-sm">Export<i className="ri-share-forward-line ms-1"></i></SpkButton> </div>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Row className=" justify-content-center">
                                        {RecruitmentStats.map((data) => (
                                            <Col md={4} className="col-12" key={data.id}>
                                                <div className="d-flex gap-3 align-items-center flex-wrap px-3">
                                                    <div className={`avatar avatar-md bg-${data.iconBg}`}>
                                                        <i className={`${data.icon} fs-18`}></i>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 text-muted">{data.title}</p>
                                                        <p className="fs-20 fw-semibold mb-0">{data.count}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                    <div id="recruitment-stats">
                                        <Spkapexcharts chartOptions={RecruitmentStatsOptions} chartSeries={RecruitmentStatsSeries} type="line" width={'100%'} height={308} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={5}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> User Activity </Card.Title> <Link to="#!" className="text-muted fw-medium fs-13">View All<i className="ti ti-arrow-narrow-right me-1"></i></Link>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled user-activity-list mb-0 p-1">
                                        {UserActivity.map((data) => (
                                            <li key={data.id}>
                                                <div className="d-flex gap-3">
                                                    <div>
                                                        <span className={`avatar avatar-md avatar-rounded ${data.avatarBg}`}>
                                                            {data.avatar ? (<img src={data.avatar} />) : data.initials}
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <span className={`fw-semibold me-1 text-${data.nameColor}`}>{data.name}</span>
                                                            <span className="badge bg-light text-default border">{data.date}</span>
                                                        </div>
                                                        <span className="w-75">{data.action}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between pb-0">
                                    <Card.Title>
                                        Recent Jobs
                                    </Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="p-0 fs-12 text-muted no-caret border-0" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item> </li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <ListGroup className=" list-group-flush recent-jobs-list">
                                        {RecentJobs.map((data) => (
                                            <ListGroup.Item className={` ${data.border} border-start-0 border-end-0`} key={data.id}>
                                                <Link to="#!">
                                                    <div className="d-flex align-items-center flex-wrap gap-1">
                                                        <div className="me-2 lh-1">
                                                            <span
                                                                className={`avatar avatar-md avatar-rounded bg-${data.avatarBg} border border-primary border-opacity-10`}>
                                                                <i className={`${data.icon} fs-18`}></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">{data.title}</p>
                                                            <p className="fs-11 text-muted mb-0">Posted: {data.posted}</p>
                                                        </div>
                                                        <div className="text-end ms-auto">
                                                            <span className={`badge bg-${data.levelBg}`}>{data.level}</span>
                                                            <p className="mb-0 mt-1 fs-12 fw-medium">{data.applied}<span className="text-muted fw-normal fs-10 mx-1"> Applied</span></p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={8}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> Trending User Profiles </Card.Title>
                                    <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm d-inline-flex align-items-center">View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table text-nowrap" header={[{ title: 'Name' }, { title: 'Department' }, { title: 'Points' }, { title: 'Growth' }, { title: 'Experience Level' },]}>
                                            {TrendingUserProfiles.map((data) => (
                                                <tr key={data.id}>
                                                    <td className={data.borderClass}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar avatar-md avatar-rounded me-2"> <img
                                                                src={data.avatar} alt="img" />
                                                            </div>
                                                            <div>
                                                                <p className="mb-1 fw-semibold">{data.name}</p><span
                                                                    className="fs-13 text-muted">{data.role}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={data.borderClass}> <SpkBadge variant={`${data.departmentBg}`}>{data.department}</SpkBadge> </td>
                                                    <td className={data.borderClass}>{data.points}</td>
                                                    <td className={`pe-3 ${data.borderClass} `}>
                                                        <p className="fs-13 mb-1 text-end">{`${data.growth}%`}<i
                                                            className={data.growthIcon}></i></p>
                                                        <div className="progress progress-xs">
                                                            <div className={`progress-bar bg-${data.growthBarBg} progress-bar-striped progress-bar-animated`}
                                                                role="progressbar" style={{ width: `${data.growth}%` }}
                                                                aria-valuenow={data.growth} aria-valuemin={0}
                                                                aria-valuemax={100}> </div>
                                                        </div>
                                                    </td>
                                                    <td className={`fw-medium ${data.borderClass}`}>{data.level}<br /><span
                                                        className="fs-11 text-muted fw-normal">{data.experience}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Candidates
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <SpkCandidatesCard card={Candidates} chartSeries={CandidatesSeries} chartOptions={CandidatesOptions} ChartId='candidates' />
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between pb-0">
                            <Card.Title> Upcoming Interview </Card.Title> <Link to="#!" className="text-muted fw-medium fs-13">View All<i className="ti ti-arrow-narrow-right me-1"></i></Link>
                        </Card.Header>
                        <Card.Body className=" p-0 m-3 border rounded">
                            <SpkSwiperJs slides={JobsSwiperCard} slidesPerView={1} loop={true} autoplay={true} className="swiper swiper-basic" />
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between pb-0">
                            <Card.Title>
                                Acquisitions
                            </Card.Title>
                            <Link to="#!" className="text-muted fw-medium fs-13">View All<i
                                className="ti ti-arrow-narrow-right me-1"></i></Link>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled mb-2 pt-1">
                                {Acquisitions.map((data) => (
                                    <li className={`${data.margin}`} key={data.id}>
                                        <div className="d-flex mb-2 gap-2 align-items-center justify-content-between">
                                            <p className="fw-medium mb-0">{data.title}</p>
                                            <div className={`text-${data.percentColor} fs-13 fw-medium ms-auto`}><span
                                                className="text-muted">{data.percentType}: </span>{data.percent}</div>
                                        </div>
                                        <div className="progress progress-md p-1 progress-animate">
                                            <div className={`progress-bar fs-9 align-middle lh-1 progress-bar-striped ${data.progressBg}`}
                                                role="progressbar" style={{ width: `${data.progress}%` }} aria-valuenow={data.progress}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Recent Employers </Card.Title>
                            <div className="d-flex flex-wrap">
                                <div className="me-2 my-1">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas='a' Customclass="my-1" Customtoggleclass="btn btn-primary btn-sm no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Link className="dropdown-item" to="#!">New</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Popular</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Relevant</Link></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'S.No' }, { title: 'Candidate' }, { title: 'Category' }, { title: 'Designation' }, { title: 'Mail' }, { title: 'Location' }, { title: 'Date' }, { title: 'Type' }, { title: 'Action' },]}>
                                    {RecentEmployers.map((data) => (
                                        <tr key={data.id}>
                                            <th scope="row">0{data.id}</th>
                                            <td>
                                                <div className="d-flex align-items-center fw-medium">
                                                    <span className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={data.imageSrc} alt="img" />
                                                    </span>{data.name}
                                                </div>
                                            </td>
                                            <td>{data.category}</td>
                                            <td><span className={`text-${data.designationColor}`}>{data.designation}</span></td>
                                            <td>{data.mail}</td>
                                            <td>
                                                <div className="d-inline-flex align-items-center">
                                                    <i className="ri-map-pin-line text-muted"></i>
                                                    <span className="ms-1">{data.location}</span>
                                                </div>
                                            </td>
                                            <td>{data.date}</td>
                                            <td><SpkBadge variant={`${data.typeBg}`}>{data.type}</SpkBadge></td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link aria-label="anchor" to="#!" className="btn btn-icon btn-sm btn-primary-light">
                                                        <i className="ri-download-2-line"></i>
                                                    </Link>
                                                    <Link aria-label="anchor" to="#!" className="btn btn-icon btn-sm btn-secondary-light">
                                                        <i className="ri-edit-line"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
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
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment >
    );
};

export default Jobs;