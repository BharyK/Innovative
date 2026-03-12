import { Fragment, useState } from "react";
import { Card, Col, Collapse, Form, Pagination, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Link } from "react-router-dom";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { jobData, RolesData } from "../../../../shared/data/apps/jobs/searchcompanydata";
import Spkjobcompany from "../../../../shared/@spk-reusable-components/reusable-apps/spk-searchcompanycard";


const SearchCompany = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Jobs-Searchcompany" />

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Company Search" activepage="Company Search" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={3} xl={4} className="">
                    <Card className="custom-card products-navigation-card">
                        <Card.Header className="justify-content-between gap-1 pb-0">
                            <Card.Title>
                                Filter
                            </Card.Title>
                            <Link to="#!" className="text-secondary text-decoration-underline fw-medium"> Clear All</Link>
                        </Card.Header>
                        <Card.Body>
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Industry Type</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="c-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            Technology
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">3,214</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="c-2" />
                                        <label className="form-check-label" htmlFor="c-2">
                                            Finance
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">682</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="c-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-3">
                                            Healthcare
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">25,473</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="c-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-4">
                                            Education
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">4,326</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Retail
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">9,102</SpkBadge>
                                    </div>
                                    <Collapse in={open}>
                                        <div id="category-more">
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="cc-6" />
                                                <label className="form-check-label" htmlFor="cc-6">
                                                    Manufacturing
                                                </label>
                                                <SpkBadge variant="light" Customclass=" text-default float-end">7,889</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="cc-7" />
                                                <label className="form-check-label" htmlFor="cc-7">
                                                    Transportation
                                                </label>
                                                <SpkBadge variant="light" Customclass=" text-default float-end">3,214</SpkBadge>
                                            </div>
                                        </div>

                                    </Collapse>
                                    <Link onClick={() => setOpen(!open)} className="ecommerce-more-link d-grid"
                                        to="#category-more" role="button" aria-expanded={open} aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Location</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="available-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="available-1">
                                            Mumbai
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">1,024</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="available-2" />
                                        <label className="form-check-label" htmlFor="available-2">
                                            Delhi
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">3,547</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="available-3" />
                                        <label className="form-check-label" htmlFor="available-3">
                                            Bangalore
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">1,856</SpkBadge>
                                    </div>
                                    <Collapse in={open1}>
                                        <div id="location-more">
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Hyderabad
                                                </label>
                                                <SpkBadge variant="light" Customclass=" text-default float-end">2,394</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Singapore
                                                </label>
                                                <SpkBadge variant="light" Customclass=" text-default float-end">1,102</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link onClick={() => setOpen1(!open1)} className="ecommerce-more-link d-grid" data-bs-toggle="collapse" to="#location-more" role="button" aria-expanded={open1} aria-controls="location-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Recruiter Type</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="recruiter-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="recruiter-1">
                                            Internal Recruitment
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">1,345</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="recruiter-2" />
                                        <label className="form-check-label" htmlFor="recruiter-2">
                                            External Recruitment
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">785</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="recruiter-3" />
                                        <label className="form-check-label" htmlFor="recruiter-3">
                                            Headhunters
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">567</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="r-4" />
                                        <label className="form-check-label" htmlFor="r-4">
                                            Online Job Portals
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">2,125</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="r-5" />
                                        <label className="form-check-label" htmlFor="r-5">
                                            Recruitment Consultants
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">1,678</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Job Vacancies</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="vacancy-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="vacancy-1">
                                            1 - 5 Vacancies
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">1,234</SpkBadge>
                                    </div>
                                    <Collapse in={open2}>
                                        <div id="vacancy-more">
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="v-4" />
                                                <label className="form-check-label" htmlFor="v-4">
                                                    21 - 50 Vacancies
                                                </label>
                                                <SpkBadge variant="light" Customclass=" text-default float-end">1,312</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="v-5" />
                                                <label className="form-check-label" htmlFor="v-5">
                                                    50+ Vacancies
                                                </label>
                                                <SpkBadge variant="light" Customclass=" text-default float-end">732</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link onClick={() => setOpen2(!open2)} className="ecommerce-more-link d-grid" data-bs-toggle="collapse" to="#vacancy-more" role="button" aria-expanded={open2} aria-controls="vacancy-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed rounded">
                                <h6 className="fw-medium mb-0">Employment Type</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="employment-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="employment-1">
                                            Full-Time
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">1,890</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="employment-2" />
                                        <label className="form-check-label" htmlFor="employment-2">
                                            Part-Time
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">1,234</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="employment-3" />
                                        <label className="form-check-label" htmlFor="employment-3">
                                            Contract
                                        </label>
                                        <SpkBadge variant="light" Customclass=" text-default float-end">876</SpkBadge>
                                    </div>
                                    <Collapse in={open3}>
                                        <div id="employment-more">
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="e-4" />
                                                <label className="form-check-label" htmlFor="e-4">
                                                    Internship
                                                </label>
                                                <SpkBadge variant="light" Customclass=" text-default float-end">456</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="e-5" />
                                                <label className="form-check-label" htmlFor="e-5">
                                                    Freelance
                                                </label>
                                                <SpkBadge variant="light" Customclass=" text-default float-end">342</SpkBadge>
                                            </div>
                                        </div>

                                    </Collapse>
                                    <Link onClick={() => setOpen3(!open3)} className="ecommerce-more-link d-grid" data-bs-toggle="collapse" to="#employment-more" role="button" aria-expanded={open3} aria-controls="employment-more">MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={8} className="">
                    <Row>
                        <Col lg={12} className="">
                            <Card className="custom-card p-3">
                                <div className="input-group companies-search-input mb-3">
                                    <Form.Control type="text" className="form-control form-control-lg w-25" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                    <SpkSelect classNameprefix="Select2" mainClass='rounded-0 custom-select' name="form-field-name" option={RolesData} defaultvalue={[RolesData[0]]} placeholder="All Categories" />
                                    <Form.Control type="text" className="form-control form-control-lg w-25" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn z-0">
                                        <i className="ri-search-line"></i>
                                    </SpkButton>
                                </div>
                                <div
                                    className="d-flex flex-grow-1 justify-content-between align-items-center p-2 bg-secondary-transparent rounded mx-0">
                                    <h6 className="fw-medium mb-0"><span className="fw-normal">Showing</span> 548 Jobs
                                    </h6>
                                    <SpkDropdown Customclass="btn-group" Customtoggleclass="btn btn-sm btn-secondary border dropdown-toggle" Toggletext="Sort By">
                                        <li><Link className="dropdown-item" to="#!">Featured</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Newest</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Most Relevant</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Best Rated</Link></li>
                                    </SpkDropdown>
                                </div>
                            </Card>
                        </Col>
                        {jobData.map((idx) => (
                            <Col xxl={3} md={6} className="" key={idx.id}>
                                <Spkjobcompany item={idx} />
                            </Col>
                        ))}
                    </Row>
                    <ul className="pagination mb-4 justify-content-end">
                        <Pagination.Item className=" disabled">Prev</Pagination.Item>
                        <Pagination.Item className=" active">1</Pagination.Item>
                        <Pagination.Item className="">2</Pagination.Item>
                        <Pagination.Item className="">3</Pagination.Item>
                        <Pagination.Item className="text-primary">next</Pagination.Item>
                    </ul>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    );
};

export default SearchCompany;