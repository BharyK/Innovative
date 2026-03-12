import { Fragment, useState } from "react";
import { Card, Col, Collapse, Form, Pagination, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Link } from "react-router-dom";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import LabeledTwoThumbs1, { Data, Data2, jobCandidates } from "../../../../shared/data/apps/jobs/searchcandidatedate";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import Spksearchcandidate from "../../../../shared/@spk-reusable-components/reusable-apps/spksearchcandidate";

const SearchCandidate = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Search Candidate" />

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Search Candidate" activepage="Search Candidate" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={3} xl={12} className="">
                    <Card className="custom-card products-navigation-card">
                        <Card.Header className="pb-0 justify-content-between gap-1">
                            <Card.Title>
                                Filter
                            </Card.Title>
                            <Link to="#!" className="text-secondary text-decoration-underline fw-medium"> Clear All</Link>
                        </Card.Header>
                        <Card.Body>
                            <div className="p-3  border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Categories</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="c-1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            Engineering
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">2,350</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="c-2" />
                                        <label className="form-check-label" htmlFor="c-2">
                                            Design
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">1,200</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="c-3"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="c-3">
                                            Sales
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">5,800</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="c-4"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="c-4">
                                            Finance & Accounting
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">3,000</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Customer Support
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">2,100</SpkBadge>
                                    </div>
                                    <Collapse in={open}>
                                        <div id="category-more">
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Operations Management
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">1,800</SpkBadge>
                                            </div>
                                            <div className="form-check mb-4">
                                                <Form.Check className="me-2" type="checkbox" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Project Management
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">1,500</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link d-grid" data-bs-toggle="collapse" onClick={() => setOpen(!open)}
                                        to="#category-more" role="button" aria-expanded={open}
                                        aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3  border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Availability</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox"
                                            id="available-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="available-1">
                                            Immediate Availability
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">450</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox"
                                            id="available-2" />
                                        <label className="form-check-label" htmlFor="available-2">
                                            2 Weeks Notice
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">1,320</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox"
                                            id="available-3" />
                                        <label className="form-check-label" htmlFor="available-3">
                                            1 Month Notice
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">890</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3  border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Bond Agreement</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="bond-1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="bond-1">
                                            6 Months
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">980</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="bond-2" />
                                        <label className="form-check-label" htmlFor="bond-2">
                                            1 Year
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">620</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="bond-3" />
                                        <label className="form-check-label" htmlFor="bond-3">
                                            2 Years
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">350</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3  border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Job Type</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="j-1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="j-1">
                                            Remote
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">1,320</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="j-2" />
                                        <label className="form-check-label" htmlFor="j-2">
                                            Contract
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">850</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="j-3" />
                                        <label className="form-check-label" htmlFor="j-3">
                                            Temporary
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">420</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="j-4" />
                                        <label className="form-check-label" htmlFor="j-4">
                                            Volunteer
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">190</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3  border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Salary Range</h6>
                                <div className="py-3 pb-0">
                                    <div id="nonlinear">
                                        <LabeledTwoThumbs1 />
                                    </div>
                                    <div className="d-flex mt-3 justify-content-center">
                                        <div className="fw-medium h6 mb-0">$<span id="lower-value">8000.00</span></div> &nbsp; -- &nbsp;
                                        <div className="fw-medium h6 mb-0">$<span id="upper-value">40000.00</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3  border border-dashed mb-2 rounded">
                                <h6 className="fw-medium mb-0">Qualification</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="q-1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="q-1">
                                            All Education Levels
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">30,000</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="q-2" />
                                        <label className="form-check-label" htmlFor="q-2">
                                            Diploma and Above
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">8,425</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="q-3"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="q-3">
                                            Bachelor's Degree
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">15,932</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="q-4" />
                                        <label className="form-check-label" htmlFor="q-4">
                                            Postgraduate +
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">4,210</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3  border border-dashed rounded">
                                <h6 className="fw-medium mb-0">Skills</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" id="s-1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="s-1">
                                            JavaScript
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">28,492</SpkBadge>
                                    </div>
                                    <Collapse in={open1}>
                                        <div id="sizes-more">
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="s-2" />
                                                <label className="form-check-label" htmlFor="s-2">
                                                    Node.js
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">12,654</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="s-3" />
                                                <label className="form-check-label" htmlFor="s-3">
                                                    Vue.js
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">9,831</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="s-4" />
                                                <label className="form-check-label" htmlFor="s-4">
                                                    TypeScript
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">6,217</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="me-2" type="checkbox" id="s-5" />
                                                <label className="form-check-label" htmlFor="s-5">
                                                    jQuery
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">4,592</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link onClick={() => setOpen1(!open1)} className="ecommerce-more-link d-grid" data-bs-toggle="collapse"
                                        to="#sizes-more" role="button" aria-expanded={open1}
                                        aria-controls="sizes-more">MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={12}>
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <Card className="custom-card p-3">
                                <div
                                    className="input-group companies-search-input companies-search-input1 flex-lg-nowrap mb-3">
                                    <Form.Control type="text" className="form-control" aria-label="Text input for keyword"
                                        placeholder="Enter job title or keyword" />
                                    <SpkSelect name="state" option={Data} mainClass="basic-multi-select custom-search-drop" searchable
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data[0]]}
                                    />
                                    <input type="text" className="form-control form-control-lg"
                                        aria-label="Text input for location" placeholder="Search by location" />
                                    <SpkSelect name="state" option={Data2} mainClass="basic-multi-select custom-select-searchcompany" searchable
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data2[0]]}
                                    />
                                    <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn"><i className="ri-search-line me-1"></i>Search</SpkButton>
                                </div>
                                <div
                                    className="d-flex flex-grow-1 justify-content-between align-items-center p-2 bg-secondary-transparent rounded mx-0">
                                    <h6 className="fw-medium mb-0"><span className="fw-normal">Showing</span> 548 Jobs
                                    </h6>
                                    <SpkDropdown Customclass="btn-group" Customtoggleclass="btn btn-sm btn-secondary border dropdown-toggle" Toggletext=" Sort By">
                                        <li><Link className="dropdown-item" to="#!">Featured</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Newest</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Most Relevant</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Best Rated</Link></li>
                                    </SpkDropdown>
                                </div>
                            </Card>
                        </Col>
                        {jobCandidates.map((idx) => (
                            <Col xxl={6} xl={12} lg={6} key={idx.id}>
                                <Spksearchcandidate obj={idx} />
                            </Col>
                        ))}
                    </Row>
                    <Pagination className="pagination mb-4 justify-content-end">
                        <Pagination.Item disabled>Prev</Pagination.Item>
                        <Pagination.Item active>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item>3</Pagination.Item>
                        <Pagination.Item className="text-primary">next</Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

        </Fragment>
    );
};

export default SearchCandidate;