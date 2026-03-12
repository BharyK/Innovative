import { Fragment } from "react";
import { Card, Col, ListGroup, ProgressBar, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Link } from "react-router-dom";
import SpkListgroup from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-listgroup";
import { commentdata, files, Keytaskdata, subTaskData, timelineData } from "../../../../shared/data/apps/tasks/taskdetailsdata";
import SpkTimelineCard from "../../../../shared/@spk-reusable-components/reusable-apps/spk-projecttimeline";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkProgress from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-progress";
import SpkTooltips from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import face2 from '../../../../assets/images/faces/2.jpg';
import face3 from '../../../../assets/images/faces/3.jpg';
import face4 from '../../../../assets/images/faces/4.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import file1 from '../../../../assets/images/media/file-manager/1.png';

const TaskDetails = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Tasks-taskdetails" />

            <Pageheader title="Apps" subtitle="Task" currentpage="Task Details" activepage="Task Details" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={8}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Task Summery
                            </Card.Title>
                            <div>
                                <Link to="#!" className="btn btn-sm btn-secondary btn-wave waves-effect waves-light"><i
                                    className="ri-edit-line align-middle me-1 fw-medium"></i>Edit Task</Link>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center mb-3 gap-2 flex-wrap"> <span
                                className="avatar avatar-lg me-1 bg-secondary-transparent"><i
                                    className="ri-stack-line fs-24 lh-1"></i></span>
                                <div>
                                    <h6 className="fw-medium mb-2"> Optimize Query Performance
                                        Development </h6> <span className="badge bg-primary-transparent"> Completed
                                    </span> <span className="text-muted fs-12"><i
                                        className="ri-circle-fill text-primary mx-2 fs-9"></i>Last Updated 1 Day
                                        Ago</span>
                                </div>
                                <div className="rightIcons float-end ms-auto">
                                    <div> <span className="text-muted fw-medium">Tags:</span> <span
                                        className="badge rounded-pill bg-primary mx-1">Design</span> <span
                                            className="badge rounded-pill bg-danger me-1">Development</span> <span
                                                className="badge rounded-pill bg-info me-1">UX</span> </div>
                                </div>
                            </div>
                            <div className="fs-15 fw-medium mb-2">Task Description :</div>
                            <p className="text-muted mb-4">Optimizing query performance development involves improving
                                the efficiency of database queries to reduce execution time and resource usage.
                                Techniques include indexing, query restructuring, and analyzing query execution
                                plans.</p>
                            <div className="p-3 mb-3 project-overview-card rounded">
                                <div className="row gy-3 gy-xl-0">
                                    <Col xl={5}>
                                        <p><span className="fw-medium">Lastupdated Date :</span> 22 Sep, 2024
                                        </p>
                                        <div className="d-flex gap-2 align-items-center"> <span
                                            className="fw-medium">Team:</span>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded align-center">
                                                    <img src={face2} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded align-center">
                                                    <img src={face11} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded align-center">
                                                    <img src={face8} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded align-center">
                                                    <img src={face12} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4}>
                                        <div className="d-flex gap-2 align-items-center mb-2"> <span
                                            className="fw-medium">Created By:</span>
                                            <div className="d-flex gap-2 align-items-center"> <span
                                                className="avatar avatar-sm avatar-rounded align-center"> <img
                                                    src={face2} alt="img" /> </span>
                                                <span>Sonia Loe</span>
                                            </div>
                                        </div>
                                        <p className="mb-0"><span className="fw-medium">Total Attachments :</span>08 Files
                                        </p>
                                    </Col>
                                    <Col xl={3}>
                                        <p className="mb-2"><span className="fw-medium">Priority :</span> <span
                                            className="badge bg-danger">High</span></p>
                                        <p className="mb-0"><span className="fw-medium">Created Date :</span> 05
                                            Sep, 2024</p>
                                    </Col>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <div className="fs-15 fw-medium">Key Tasks :</div> <Link to="#!"
                                        className="btn btn-primary-light btn-wave btn-sm waves-effect waves-light">See
                                        More</Link>
                                </div>
                                <Row className="gy-2">
                                    <Col xl={6}>
                                        <SpkListgroup as="ul">
                                            {Keytaskdata.map((idx) => (
                                                idx.column === 1 && (
                                                    idx.items.map((item, index) => (
                                                        <ListGroup.Item key={index}>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2"><i
                                                                    className="ri-corner-up-right-double-line text-primary fs-14 p-1 lh-1 rounded-pill bg-primary-transparent"></i>
                                                                </div>
                                                                <div className="fw-medium">{item.description}</div>
                                                            </div>
                                                        </ListGroup.Item>
                                                    ))
                                                )
                                            ))}
                                        </SpkListgroup>
                                    </Col>
                                    <Col xl={6}>
                                        <SpkListgroup as="ul">
                                            {Keytaskdata.map((idx) => (
                                                idx.column === 2 && (
                                                    idx.items.map((item, index) => (
                                                        <ListGroup.Item key={index}>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2"><i
                                                                    className="ri-corner-up-right-double-line text-primary fs-14 p-1 lh-1 rounded-pill bg-primary-transparent"></i>
                                                                </div>
                                                                <div className="fw-medium">{item.description}
                                                                </div>
                                                            </div>
                                                        </ListGroup.Item>
                                                    ))
                                                )
                                            ))}
                                        </SpkListgroup>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top border-block-start-dashed">
                            <div className="row mx-0 rounded align-items-center">
                                <Col xl={9}>
                                    <p className="text-dark mb-1"><span className="text-muted fw-medium">Status:</span>
                                        <span className="badge bg-secondary me-1 fs-11 ms-1">Active</span>
                                    </p>
                                    <p className="mb-0 fs-12"><span className="text-muted fw-medium">Total Attachments
                                        :</span> 08 Files</p>
                                </Col>
                                <Col xl={3}>
                                    <div className="text-end">
                                        <ProgressBar className="progress-stacked progress-xs flex-grow-1 w-50 ms-auto flex-shrink-0 my-auto gap-1">
                                            <ProgressBar now={50} variant="primary" className="rounded" />
                                            <ProgressBar now={40} variant="secondary" className="rounded" />
                                            <ProgressBar now={10} variant="danger" className="rounded" />
                                        </ProgressBar>
                                        <div className="fw-medium text-dark text-nowrap fs-12 mt-2">75% Completed</div>
                                    </div>
                                </Col>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Recent Activity </Card.Title>
                        </Card.Header>
                        <Card.Body className="pb-1">
                            <ul className="list-unstyled profile-timeline mb-3">
                                {timelineData.map((idx, index) => (
                                    <SpkTimelineCard obj={idx} key={index} />
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col xxl={3} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Comments </Card.Title>
                            <SpkBadge variant="danger">3 New</SpkBadge>
                        </Card.Header>
                        <Card.Body className="p-0 custom-task-details1">
                            <SpkListgroup CustomClass="list-group-flush">
                                {commentdata.map((idx) => (
                                    <ListGroup.Item className="list-group-item" key={idx.id}>
                                        <div className="d-flex align-items-start gap-3 flex-wrap">
                                            <div>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={idx.image} alt="" /> </span>
                                            </div>
                                            <div className="flex-fill w-50 text-truncate">
                                                <span className="fw-medium d-block">{idx.name}</span>
                                                <span className="d-block mb-3 text-muted fs-12 text-truncate">{idx.text}</span>
                                                {idx.mediaimg ?
                                                    <div className="d-flex align-items-center gap-2 mb-3">
                                                        <Link aria-label="anchor" to="#!" className="avatar avatar-md">
                                                            <img src={file1} alt="Document" />
                                                        </Link>
                                                        <span className="fs-11 text-muted">556.76KB</span>
                                                    </div> : ""}
                                                <div className="d-flex gap-2 flex-wrap">
                                                    <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn  btn-wave waves-effect waves-light">Reply
                                                        <i className="ri-reply-line ms-1"></i>
                                                    </SpkButton>
                                                    <SpkButton Size="sm" Buttonvariant="secondary-light" Customclass="btn btn-wave waves-effect waves-light">View
                                                        Details <i className="ri-eye-line ms-1"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                            <div className="btn-list d-flex gap-2 flex-wrap">
                                                <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn btn-icon  btn-wave waves-effect waves-light">
                                                    <i className="ri-thumb-up-line"></i>
                                                </SpkButton>
                                                <SpkButton Size="sm" Buttonvariant="secondary-light" Customclass="btn btn-icon btn-wave waves-effect waves-light">
                                                    <i className="ri-thumb-down-line"></i>
                                                </SpkButton>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </SpkListgroup>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-sm-flex align-items-center lh-1 flex-wrap">
                                <div className="me-2 mb-2 mb-sm-0"> <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face9} alt="" /> </span> </div>
                                <div className="flex-fill">
                                    <div className="input-group">
                                        <input type="text" className="form-control shadow-none me-0 border" placeholder="Write Comment" aria-label="Recipient's username with two button addons" />
                                        <SpkButton Buttontype="button" Buttonlabel="button" Buttonvariant="outline-light" Customclass="btn me-0 border btn-wave waves-effect waves-light"><i
                                            className="bi bi-paperclip"></i>
                                        </SpkButton>
                                        <SpkButton Buttontype="button" Buttonlabel="button" Buttonvariant="outline-light" Customclass="btn me-0 border btn-wave waves-effect waves-light">
                                            <i className="bi bi-camera"></i>
                                        </SpkButton>
                                        <SpkButton Buttonvariant="primary" Customclass="btn btn-wave waves-effect waves-light" Buttontype="button">Send</SpkButton>
                                    </div>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} className="">
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="">
                            <Card.Title className="card-title"> Attachments list </Card.Title>
                            <Link to="#!" className="btn btn-primary-light ms-auto btn-sm mt-1"> View More</Link>
                        </Card.Header>
                        <Card.Body className="pt-0 custom-task-details">
                            <SpkListgroup CustomClass="list-group-flush">
                                {files.map((idx, index) => (
                                    <ListGroup.Item className="border border-dashed rounded-1 mb-2" key={index}>
                                        <div className="d-flex align-items-center flex-wrap gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm">
                                                    <img src={idx.image} alt="" /> </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link to="#!"><span className="d-block fw-medium">{idx.name}</span></Link>
                                                <span className="d-block text-muted fs-12 fw-normal">{idx.size}</span>
                                            </div>
                                            <div className="btn-list">
                                                <SpkButton Buttonvariant="light" Buttontype="button" Buttonlabel="button" Size="sm" Customclass="btn btn-icon btn-wave waves-effect waves-light">
                                                    <i className="ti ti-download fs-14 text-secondary"></i>
                                                </SpkButton>
                                                <SpkButton Buttonvariant="light" Buttontype="button" Buttonlabel="button" Size="sm" Customclass="btn btn-icon btn-wave waves-effect waves-light">
                                                    <i className="ti ti-trash fs-14 text-danger"></i>
                                                </SpkButton>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </SpkListgroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="">
                            <Card.Title> Task Info </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap">
                                    <tr>
                                        <td><span className="fw-medium">Task ID :</span></td>
                                        <td>#SPRU667</td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Task Tags :</span></td>
                                        <td>
                                            <SpkBadge variant="info-transparent">Marketing</SpkBadge>
                                            <SpkBadge variant="primary-transparent ms-1">UI</SpkBadge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> <span className="fw-medium">Assigned By :</span> </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face3} alt="" />
                                                    </span>
                                                </div>
                                                <span className="d-block fs-14 fw-medium">Glory</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> <span className="fw-medium">Progress :</span> </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <SpkProgress now={75} animated={true} striped={true} mainClass="progress progress-sm progress-animate flex-fill me-2" />
                                                <div className="text-muted fs-11">75%</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Status :</span></td>
                                        <td>
                                            <span className="fw-medium text-muted">Inprogress
                                                <i className="bi bi-bar-chart-fill mx-1 text-pink"></i>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Priority :</span></td>
                                        <td>
                                            <SpkBadge variant="primary">
                                                <i className="ti ti-pennant-2 fs-12"></i> Low
                                            </SpkBadge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Start Date :</span></td>
                                        <td> 13, June 2024 </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">End Date :</span></td>
                                        <td> 31, Dec 2024 </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Assignees :</span></td>
                                        <td>
                                            <div className="avatar-list-stacked mb-1">
                                                <SpkTooltips title="Simon" tooltipClass="tooltip-primary">
                                                    <span className="avatar avatar-xs avatar-rounded" >
                                                        <img src={face4} alt="Sony" />
                                                    </span>
                                                </SpkTooltips>
                                                <SpkTooltips title="Sasha" tooltipClass="tooltip-primary">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face12} alt="Vinnu" />
                                                    </span>
                                                </SpkTooltips>
                                                <SpkTooltips title="Hishen" tooltipClass="tooltip-primary">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face6} alt="kaithi" />
                                                    </span>
                                                </SpkTooltips>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom-0"><span className="fw-medium">Status :</span></td>
                                        <td className="border-bottom-0"><SpkBadge variant="secondary">Active</SpkBadge></td>
                                    </tr>
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Sub Tasks</Card.Title>
                            <div>
                                <SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">
                                    <i className="ri-add-line me-1 align-middle"></i>Sub Task</SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <SpkListgroup>
                                {subTaskData.map((idx, index) => (
                                    <ListGroup.Item key={index}>
                                        <div className="d-flex align-items-start">
                                            <div className="me-2">
                                                <input className="form-check-input form-checked-secondary" type="checkbox" value="" id="successChecked1" defaultChecked={idx.checked} />
                                            </div>
                                            <div>
                                                <div className={`fw-medium ${idx.details ? 'text-decoration-line-through text-muted ' : ''}`}>
                                                    {idx.label}
                                                </div>
                                                {idx.details && (
                                                    <div className="fw-medium bg-light border px-2 py-2 fs-12 mt-2 rounded">
                                                        {idx.details} </div>
                                                )}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </SpkListgroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-2 --> */}
        </Fragment>
    );
};

export default TaskDetails;