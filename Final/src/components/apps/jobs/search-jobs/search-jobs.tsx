import { Fragment, useState } from "react";
import { Card, Col, Collapse, Form, Nav, Pagination, Row, Tab } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Link } from "react-router-dom";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import LabeledTwoThumbs1 from "../../../../shared/data/apps/jobs/searchcandidatedate";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { ListJobdata, searchJobdata } from "../../../../shared/data/apps/jobs/searchjobdata";
import SpkTooltips from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkJobdetailsCard from "../../../../shared/@spk-reusable-components/reusable-apps/spk-JobdetailsCard";


const SearchJobs = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Search Jobs" />

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Search Jobs" activepage="Search Jobs" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={3} xl={4}>
                    <Card className="custom-card products-navigation-card">
                        <Card.Header className="card-header pb-0 justify-content-between gap-1">
                            <Card.Title>
                                Filter
                            </Card.Title>
                            <Link to="#!" className="text-secondary text-decoration-underline fw-medium"> Clear All</Link>
                        </Card.Header>
                        <Card.Body>
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Job Type</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="j-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-1">
                                            Full Time
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">487</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="j-2" />
                                        <label className="form-check-label" htmlFor="j-2">
                                            Part Time
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">1,245</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="j-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-3">
                                            Internship
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">987</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="j-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-4">
                                            Freelancer
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">08</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Salary Range</h6>
                                <div className="py-3 pb-0">
                                    <div id="nonlinear">
                                        <LabeledTwoThumbs1 />
                                    </div>
                                    <div className="d-flex mt-4">
                                        <div className="fw-medium h6 mb-0">$<span id="lower-value">8000.00</span></div> &nbsp; -- &nbsp;
                                        <div className="fw-medium h6 mb-0">$<span id="upper-value">40000.00</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Experience</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="e-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="e-1">
                                            Entry Level
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">25,000</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="e-2" />
                                        <label className="form-check-label" htmlFor="e-2">
                                            Junior
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">18,000</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="e-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="e-3">
                                            Mid Level
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">17,500</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <Form.Check className="" type="checkbox" id="e-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="e-4">
                                            Expert
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">8,200</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Job Categories</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="c-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            Technology
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">4,214</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Engineering
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">8,213</SpkBadge>
                                    </div>
                                    <Collapse in={open}>
                                        <div id="category-more">
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Sales
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-medium float-end">5,342</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" id="c-2" />
                                                <label className="form-check-label" htmlFor="c-2">
                                                    Healthcare
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-medium float-end">1,278</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" id="c-3"
                                                    defaultChecked />
                                                <label className="form-check-label" htmlFor="c-3">
                                                    Education
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-medium float-end">6,549</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" id="c-4"
                                                    defaultChecked />
                                                <label className="form-check-label" htmlFor="c-4">
                                                    Finance
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-medium float-end">3,876</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Hospitality
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-medium float-end">1,754</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" id="c-8" />
                                                <label className="form-check-label" htmlFor="c-8">
                                                    Legal
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-medium float-end">3,091</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link onClick={() => setOpen(!open)} className="ecommerce-more-link mt-3 d-grid" data-bs-toggle="collapse" to="#category-more" role="button" aria-expanded={open}
                                        aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Qualification</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="q-4" />
                                        <label className="form-check-label" htmlFor="q-4">
                                            Bachelor's Degree
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">4,981</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <Form.Check className="" type="checkbox" id="q-5" defaultChecked />
                                        <label className="form-check-label" htmlFor="q-5">
                                            Postgraduate &amp; above
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">2,341</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed rounded">
                                <h6 className="fw-medium mb-0">Skills</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="s-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-1">
                                            Python
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">18,943</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="s-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-2">
                                            JavaScript
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">22,354</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" id="s-3" />
                                        <label className="form-check-label" htmlFor="s-3">
                                            Java
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default fw-medium float-end">12,789</SpkBadge>
                                    </div>
                                    <Collapse in={open1}>
                                        <div className="" id="skills-more">
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" id="s-4"
                                                    defaultChecked />
                                                <label className="form-check-label" htmlFor="s-4">
                                                    SQL
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-medium float-end">9,214</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" id="s-5" />
                                                <label className="form-check-label" htmlFor="s-5">
                                                    C#
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-medium float-end">6,032</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" id="s-6" />
                                                <label className="form-check-label" htmlFor="s-6">
                                                    Ruby
                                                </label>
                                                <span
                                                    className="badge bg-light text-default fw-medium float-end">4,761</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" id="s-7" />
                                                <label className="form-check-label" htmlFor="s-7">
                                                    Swift
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default fw-medium float-end">2,118</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link onClick={() => setOpen1(!open1)} className="ecommerce-more-link mt-3 d-grid" data-bs-toggle="collapse"
                                        to="#skills-more" role="button" aria-expanded={open1}
                                        aria-controls="skills-more">MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={8}>
                    <Row>
                        <Tab.Container defaultActiveKey='second'>
                            <Col xl={12} >
                                <Card className="custom-card p-3">
                                    <div className="input-group companies-search-input mb-3">
                                        <Form.Control type="text" className="form-control flex-fill" aria-label="Job title or keyword" placeholder="Job title or keyword" />
                                        <Form.Control type="text" className="form-control flex-fill" aria-label="Location" placeholder="Location" />
                                        <SpkButton Buttontype="button" Customclass="btn btn-primary"><i className="ri-search-line me-1"></i> Search</SpkButton>
                                    </div>
                                    <div className="d-flex gap-3 flex-wrap">
                                        <Nav className="nav nav-pills p-2 border border-primary border-opacity-25 rounded product-list-tab"
                                            role="tablist">
                                            <Nav.Item className="nav-item flex-grow-1" role="presentation">
                                                <Nav.Link eventKey="first" className="nav-link bg-primary-transparent text-center"
                                                    data-bs-toggle="tab" role="tab" aria-current="page"
                                                    href="#fill-pill-about" aria-selected="false" tabIndex={-1}><i
                                                        className="ri-list-check me-1 fs-14"></i>List View</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="nav-item flex-grow-1" role="presentation">
                                                <Nav.Link eventKey="second" className="nav-link bg-primary-transparent text-center"
                                                    data-bs-toggle="tab" role="tab" aria-current="page"
                                                    href="#fill-pill-home" aria-selected="true">
                                                    <i className="ri-layout-grid-line me-1 fs-14"></i>Grid
                                                    View</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <div
                                            className="d-flex flex-grow-1 justify-content-between align-items-center p-2 bg-secondary-transparent rounded mx-0">
                                            <h6 className="fw-medium mb-0"><span className="fw-normal">Showing</span> 548 Jobs
                                            </h6>
                                            <SpkDropdown Customclass="btn-group" Toggletext="Sort By" Customtoggleclass="btn btn-sm border dropdown-toggle" Togglevariant="secondary">
                                                <li><Link className="dropdown-item" to="#!">Featured</Link></li>
                                                <li><Link className="dropdown-item" to="#!">Newest</Link></li>
                                                <li><Link className="dropdown-item" to="#!">Most Relevant</Link></li>
                                                <li><Link className="dropdown-item" to="#!">Best Rated</Link></li>
                                            </SpkDropdown>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Tab.Content className="project-list-tab">
                                    <Tab.Pane eventKey="first" className="text-muted  p-0 border-0" id="fill-pill-about" role="tabpanel">
                                        <Row>
                                            {ListJobdata.map((idx) => (
                                                <Col xl={12} key={idx.id}>
                                                    <Card className="custom-card featured-jobs p-2">
                                                        <Card.Body className={`${idx.color}-dash-border`}>
                                                            <div className="d-flex mb-3 flex-wrap gap-2 flex-xxl-nowrap">
                                                                <div>
                                                                    <span className={`avatar avatar-lg bg-${idx.color} bg-opacity-20`}>
                                                                        <span className="avatar avatar-md bg-white p-1">
                                                                            <img src={idx.image} alt="" />
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div className="ms-1 flex-grow-1 w-75 text-truncate">
                                                                    <h6
                                                                        className="fw-medium mb-2 d-flex align-items-center text-truncate w-75">
                                                                        <Link to="#!" className="text-truncate">{idx.title}</Link>
                                                                    </h6>
                                                                    <div className="d-flex gap-3 flex-wrap">
                                                                        <div className="fs-13 fw-normal text-muted mb-0 text-truncate">{idx.companyname}
                                                                            <SpkTooltips title="Verified">
                                                                                <i className="bi bi-patch-check-fill text-primary align-middle lh-1"></i>
                                                                            </SpkTooltips>
                                                                        </div>
                                                                        <div
                                                                            className="popular-tags d-flex gap-1 flex-wrap flex-xxl-nowrap">
                                                                            <SpkBadge Pill={true} variant="danger-transparent" Customclass=" fs-11">{idx.jobtype}</SpkBadge>
                                                                            <SpkBadge Pill={true} variant="secondary-transparent" Customclass=" fs-11">{idx.worklocation}</SpkBadge>
                                                                            <SpkBadge Pill={true} variant="primary-transparent" Customclass=" fs-11">{idx.position}</SpkBadge>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ms-auto d-flex gap-1 flex-wrap flex-xxl-nowrap">
                                                                    <SpkTooltips title="Add to Bookmark">
                                                                        <Link to="#!"
                                                                            className="btn btn-sm btn-icon btn-light text-secondary">
                                                                            <span>
                                                                                <i className="ri-bookmark-line fs-13 lh-1 align-middle"></i>
                                                                            </span>
                                                                        </Link>
                                                                    </SpkTooltips>
                                                                    <SpkTooltips title="View Details">
                                                                        <Link to="#!" className="btn btn-sm btn-icon btn-light text-danger">
                                                                            <span><i className="ri-eye-line fs-13 lh-1 align-middle"></i></span>
                                                                        </Link>
                                                                    </SpkTooltips>
                                                                </div>
                                                            </div>
                                                            <Row>
                                                                <Col xl={5}>
                                                                    <div className="fw-medium mb-1"> <i
                                                                        className="ri-pushpin-line me-1 text-danger fs-15"></i>
                                                                        Location: <span className="fw-normal">{idx.location}</span> </div>
                                                                    <div className="fw-medium"> <i
                                                                        className="ri-group-2-line me-1 text-primary fs-15"></i>
                                                                        Vacancies: <span className="fw-normal">{idx.vacancies}</span> </div>
                                                                </Col>
                                                                <Col xl={5}>
                                                                    <div className="fw-medium mb-1"> <i
                                                                        className="ri-wallet-3-line me-1 text-info fs-15"></i>
                                                                        Salary: <span className="fw-normal">{idx.salary}</span> </div>
                                                                    <div className="fw-medium"> <i
                                                                        className="ri-time-line me-1 text-primary fs-15"></i>
                                                                        Type: <span className="fw-normal">Full Time</span>
                                                                    </div>
                                                                </Col>
                                                                <div className="col-xl-2 mt-auto">
                                                                    <Link to="#!" className={`btn btn-sm btn-${idx.color} w-100`}>
                                                                        Apply Now
                                                                    </Link>
                                                                </div>
                                                            </Row>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className="text-muted show  p-0 border-0" id="fill-pill-home"
                                        role="tabpanel">
                                        <Row>
                                            {searchJobdata.map((idx) => (
                                                <Col xxl={4} md={6} key={idx.id}>
                                                    <SpkJobdetailsCard item={idx} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Tab.Container>
                    </Row>
                    <Pagination className="pagination mb-4 justify-content-end">
                        <Pagination.Item disabled >Prev</Pagination.Item>
                        <Pagination.Item active>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item>3</Pagination.Item>
                        <Pagination.Item className="text-primary">next</Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}

        </Fragment>
    );
};

export default SearchJobs;