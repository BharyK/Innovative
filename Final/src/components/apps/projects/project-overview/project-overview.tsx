import { Fragment } from "react";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SpkListgroup from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-listgroup";
import { documents, ProjectKeytaskdata, Projectmessagesdata, TeamData, Tododata } from "../../../../shared/data/apps/projects/projectoverviewdata";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import parse from 'html-react-parser';
import face2 from '../../../../assets/images/faces/2.jpg';
import face5 from '../../../../assets/images/faces/5.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';


const ProjectOverview = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Project-Overview" />

            <Pageheader title="Apps" subtitle="Projects" currentpage="Project Overview" activepage="Project Overview" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={8}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Project Details
                            </Card.Title>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}apps/projects/create-project`} className="btn btn-sm btn-secondary btn-wave"><i
                                    className="ri-add-line align-middle me-1 fw-medium"></i>Create Project</Link>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center mb-3 gap-2 flex-wrap"> <span
                                className="avatar avatar-lg me-1 bg-secondary-transparent"><i
                                    className="ri-stack-line fs-24 lh-1"></i></span>
                                <div>
                                    <h6 className="fw-medium mb-2"> Blockchain-Based Voting System
                                        Development </h6> <span className="badge bg-primary-transparent"> In
                                            progress</span> <span className="text-muted fs-12"><i
                                                className="ri-circle-fill text-primary mx-2 fs-9"></i>Last Updated 1 Day
                                        Ago</span>
                                </div>
                                <div className="rightIcons float-end ms-auto">
                                    <div>
                                        <span className="text-muted fw-medium">Tags:</span>
                                        <span className="badge rounded-pill bg-primary mx-1">Design</span>
                                        <span className="badge rounded-pill bg-danger me-1">Development</span>
                                        <span className="badge rounded-pill bg-info me-1">UX</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fs-15 fw-medium mb-2">Project Description :</div>
                            <p className="text-muted mb-4">The Customer Feedback Dashboard Development project aims to
                                create a comprehensive dashboard that aggregates and visualizes customer feedback
                                data. This will enable our team to gain actionable insights and improve customer
                                satisfaction.</p>
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
                                                className="avatar avatar-sm avatar-rounded align-center">
                                                <img src={face2} alt="img" /> </span>
                                                <span>Sonia Loe</span>
                                            </div>
                                        </div>
                                        <p className="mb-0"><span className="fw-medium">Total Tasks :</span> 84
                                            Tasks (25 pending)</p>
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
                                    <div className="fs-15 fw-medium">Key Tasks :</div> <a href="#!"
                                        className="btn btn-primary-light btn-wave btn-sm waves-effect waves-light">See
                                        More</a>
                                </div>
                                <div className="row gy-2">
                                    <Col xl={6}>
                                        <SpkListgroup>
                                            {ProjectKeytaskdata.map((idx) => (
                                                idx.column === 1 && (
                                                    idx.items.map((item, index) => (
                                                        <li className="list-group-item" key={index}>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2"><i
                                                                    className="ri-corner-up-right-double-line text-primary fs-14 p-1 lh-1 rounded-pill bg-primary-transparent"></i>
                                                                </div>
                                                                <div className="fw-medium">{item.description}</div>
                                                            </div>
                                                        </li>
                                                    ))
                                                )
                                            ))}
                                        </SpkListgroup>
                                    </Col>
                                    <Col xl={6}>
                                        <SpkListgroup>
                                            {ProjectKeytaskdata.map((idx) => (
                                                idx.column === 2 && (
                                                    idx.items.map((item, index) => (
                                                        <li className="list-group-item" key={index}>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2"><i
                                                                    className="ri-corner-up-right-double-line text-primary fs-14 p-1 lh-1 rounded-pill bg-primary-transparent"></i>
                                                                </div>
                                                                <div className="fw-medium">{item.description}
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                )
                                            ))}
                                        </SpkListgroup>
                                    </Col>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" border-top border-block-start-dashed">
                            <div className="row mx-0 rounded align-items-center">
                                <Col xl={9}>
                                    <p className="text-dark mb-1"><span className="text-muted fw-medium">Status:</span>
                                        <span className="badge bg-secondary ms-1 fs-11">Active</span>
                                    </p>
                                    <p className="mb-1 fs-12"><span className="text-muted fw-medium">Total Tasks :</span> 84
                                        Tasks (25 pending)</p>
                                </Col>
                                <Col xl={3}>
                                    <div className="text-end">
                                        <ProgressBar className="progress-stacked progress-xs flex-grow-1 w-50 ms-auto flex-shrink-0 my-auto gap-1" >
                                            <ProgressBar variant="primary" className="rounded" now={50} key={1} />
                                            <ProgressBar variant="secondary" className="rounded" now={40} key={2} />
                                            <ProgressBar variant="danger" className="rounded" now={10} key={3} />
                                        </ProgressBar>
                                        <div className="fw-medium text-dark text-nowrap fs-12 mt-2">75% Completed</div>
                                    </div>
                                </Col>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>To Do Tasks</Card.Title>
                            <div className="btn btn-sm btn-secondary-light btn-wave waves-effect waves-light"><i
                                className="ri-add-line align-middle me-1 fw-medium"></i>Add Task</div>
                        </Card.Header>
                        <Card.Body className="p-0 position-relative" id="todo-content">
                            <div>
                                <div className="table-responsive">
                                    <SpkTables tableClass="table text-nowrap" header={[{ title: 'Project Title' }, { title: 'Task Percentage' }, { title: 'Status' }, { title: 'End Date' }, { title: 'Action' }]}>
                                        {Tododata.map((idx) => (
                                            <tr className="todo-box" key={idx.id}>
                                                <td className={idx.borderClass}>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className={`avatar avatar-sm p-1 bg-${idx.color}-transparent avatar-rounded`}>
                                                            <img src={idx.image} alt="" />
                                                        </span>
                                                        <div>
                                                            <span className="fw-medium">{idx.title}</span>
                                                            <span className="text-muted d-block fs-12"><strong
                                                                className="text-default me-1">{idx.text}</strong> tasks
                                                                completed</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className={idx.borderClass}>
                                                    <div className="flex-shrink-0"><span
                                                        className="text-primary fw-medium me-1">{idx.percentage}</span>
                                                        Completed</div>
                                                </td>
                                                <td className={idx.borderClass}> <SpkBadge Pill={true} variant={`${idx.status === "Pending" ? "info" : idx.status === "Completed" ? "primary" : "danger"}-transparent`}>{idx.status}</SpkBadge> </td>
                                                <td className={idx.borderClass}> {idx.enddate} </td>
                                                <td className={`text-end ${idx.borderClass}`}>
                                                    <div className="d-flex gap-2">
                                                        <Link to="#!" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light">
                                                            <i className="ri-edit-line"></i>
                                                        </Link>
                                                        <Link to="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </SpkTables>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between pb-1">
                            <Card.Title> Team </Card.Title>
                            <div className="ms-auto">
                                <SpkBadge variant="info" Pill={true} Customclass="ms-auto">6 People</SpkBadge>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className="gy-3 gx-3">
                                {TeamData.map((idx, index) => (
                                    <Col xl={4} key={index}>
                                        <div className="p-3 text-center rounded bg-light"> <span
                                            className="avatar avatar-md shadow-sm bg-white p-1 avatar-rounded flex-shrink-0">
                                            <img src={idx.image} alt="John Doe" /> </span>
                                            <div className="flex-grow-1 mt-2">
                                                <div className="fw-medium">
                                                    <div className="text-truncate text-default fw-semibold mb-0">{idx.name}
                                                    </div> <span className="fs-12 text-muted">{idx.role}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <div className="btn btn-secondary w-100 mt-3">Invite New Member</div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between pb-1">
                            <Card.Title> Attachments </Card.Title>
                            <div className="ms-auto">
                                <SpkBadge variant="primary" Pill={true} Customclass="ms-auto">3 Files</SpkBadge>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className="gy-3 gx-3">
                                {documents.map((idx, index) => (
                                    <div className="col" key={index}>
                                        <div className={`p-3 text-center rounded ${idx.iconClass}-dash-border`}> <span
                                            className={`avatar avatar-md ${idx.iconClass}-shadow svg-${idx.iconClass}  avatar-rounded flex-shrink-0`}>
                                            {parse(idx.svgPath)}
                                        </span>
                                            <div className="flex-grow-1 mt-2">
                                                <div className="fw-medium">
                                                    <div className="text-truncate text-default fw-semibold mb-0">{idx.fileName}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card justify-content-between">
                        <Card.Header className="pb-1">
                            <Card.Title>Project Messages</Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <ul className="list-unstyled mb-0">
                                {Projectmessagesdata.map((idx) => (
                                    <li className={`${idx.class} p-3`} key={idx.id}>
                                        <div className="d-flex gap-2 flex-wrap"> <span
                                            className="avatar avatar-sm shadow-sm bg-primary avatar-rounded flex-shrink-0">
                                            <img src={idx.image} alt="Sarah Johnson" /> </span>
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-start gap-2 mb-2 flex-wrap">
                                                    <div className="fw-medium">
                                                        <div className="text-truncate mb-1">{idx.title}
                                                        </div> <SpkBadge variant={`${idx.badgecolor}-transparent`}>{idx.time}</SpkBadge>
                                                    </div> <SpkBadge variant="light" Customclass="text-default ms-auto">{idx.badge}</SpkBadge>
                                                </div>
                                                <p className="text-muted mb-0 fs-12"> {idx.text}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                        <Card.Footer className="">
                            <div className="d-sm-flex align-items-center lh-1">
                                <div
                                    className="me-sm-2 mb-2 mb-sm-0 rounded-circle bg-primary-transparent d-inline-block">
                                    <img src={face5} alt=""
                                        className="avatar avatar-md avatar-rounded p-1 bg-primary-transparent" />
                                </div>
                                <div className="flex-fill">
                                    <div className="input-group flex-nowrap">
                                        <input type="text" className="form-control w-sm-50 border shadow-none" placeholder="Share your thoughts" aria-label="Recipient's username with two button addons" />
                                        <button className="btn btn-light btn-wave waves-effect waves-light" type="button">
                                            <i className="bi bi-emoji-smile"></i>
                                        </button>
                                        <button className="btn btn-light btn-wave waves-effect waves-light border-start" type="button">
                                            <i className="bi bi-paperclip"></i>
                                        </button>
                                        <button className="btn btn-light btn-wave waves-effect waves-light border-start" type="button">
                                            <i className="bi bi-camera"></i>
                                        </button>
                                        <button className="btn btn-primary btn-wave waves-effect waves-light text-nowrap" type="button">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default ProjectOverview;