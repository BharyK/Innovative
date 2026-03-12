
import { Link } from 'react-router-dom';
import SpkTables from '../../../../shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkDropdown from '../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown';
import { jobslistData } from '../../../../shared/data/apps/jobs/joblistdata';
import Pageheader from '../../../../shared/layouts-components/pageheader/pageheader';
import Seo from '../../../../shared/layouts-components/seo/seo';
import { Fragment } from 'react'
import { Card, Col, Form, Pagination, Row } from 'react-bootstrap';
import SpkBadge from '../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge';

const JobList = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Jobs List" />

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Jobs List" activepage="Jobs List" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                All Jobs List
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <Form.Control className="form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Customtoggleclass='btn btn-primary btn-sm btn-wave no-caret' Toggletext='Sort By' Arrowicon={true}>
                                    <li><Link className="dropdown-item" to="#!">Posted Date</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Status</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Department</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Job Type</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Newest</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Oldest</Link></li>
                                </SpkDropdown>
                                <Link to={`${import.meta.env.BASE_URL}apps/jobs/job-post`} className="btn btn-secondary btn-wave btn-sm">
                                    <i className="ri-add-line me-1 align-middle"></i>Post a Job
                                </Link>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap table-hover" Customcheckclass='ps-4' showCheckbox={true}
                                    header={[{ title: 'Position' }, { title: 'Department' }, { title: 'Company Name' }, { title: 'Applications' }, { title: 'Status' }, { title: 'Posted' }, { title: 'Slots' }, { title: 'Type' }, { title: 'Closing Date' }, { title: 'Options' }]}>
                                    {jobslistData.map((idx) => (
                                        <tr className="joblist-list" key={idx.id}>
                                            <td className="ps-4 joblist-checkbox"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob22" value="" aria-label="..." defaultChecked={idx.checked} /></td>
                                            <td>
                                                <p className="fw-medium mb-0 d-flex align-items-center"><Link to={`${import.meta.env.BASE_URL}apps/jobs/job-details`}>{idx.title}</Link></p>
                                                <span className="fs-12 text-muted"><i className="ri-pushpin-line"></i> {idx.location}</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-sm p-1 me-1 bg-info-transparent avatar-rounded">
                                                        <img src={idx.companyLogo} alt="Tech Innovations Inc." />
                                                    </span>
                                                    <Link to="#!" className="fw-medium mb-0">{idx.department}</Link>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.companyName}
                                            </td>
                                            <td><span className="ms-3">{idx.applied}</span></td>
                                            <td><SpkBadge variant={idx.statusColor}>{idx.status}</SpkBadge></td>
                                            <td>{idx.startDate}</td>
                                            <td>{idx.slots}</td>
                                            <td>{idx.jobType}</td>
                                            <td><i className="ri-close-circle-fill text-pink mx-1"></i>{idx.endDate}</td>
                                            <td>
                                                <Link to={`${import.meta.env.BASE_URL}apps/jobs/job-details`} className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-eye-line"></i>
                                                </Link>
                                                <Link to="#!" className="btn btn-icon btn-sm btn-secondary-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-edit-line"></i>
                                                </Link>
                                                <Link to="#!" className="joblist-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i className="ri-delete-bin-line"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center flex-wrap overflow-auto">
                                <div className="mb-2 mb-sm-0">
                                    Showing <b>1</b> to <b>7</b> of <b>25</b> entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <Pagination className="mb-0 overflow-auto">
                                        <Pagination.Item className="disabled">Previous
                                        </Pagination.Item>
                                        <Pagination.Item className="active" aria-current="page">1</Pagination.Item>
                                        <Pagination.Item className="">2</Pagination.Item>
                                        <Pagination.Item className="">3</Pagination.Item>
                                        <Pagination.Item className="">4</Pagination.Item>
                                        <Pagination.Item className="">5</Pagination.Item>
                                        <Pagination.Item className="">Next</Pagination.Item>
                                    </Pagination>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
}

export default JobList;