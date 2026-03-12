import { Fragment } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import { ImportantProjectList, MetricCards, ProjectAnalysisOptions, ProjectAnalysisSeries, ProjectCategories, ProjectsOverview, ProjectsSummary, TeamMembers, TeamTasks, ToDoList } from "../../../shared/data/dashboards/projectsdata";
import SpkProjectscard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-projectscard";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkTooltips from "../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import background from "../../../assets/images/media/backgrounds/3.png"


const Projects = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Expenses"} />

            <Pageheader title="Dashboard" currentpage="Expenses" activepage="Expenses" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={5}>
                    <Row>
                        {MetricCards.map((data) => (
                            <Col md={6} key={data.id}>
                                <SpkProjectscard card={data} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xxl={4} xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Project categories </Card.Title> <SpkButton Buttonvariant="light" Customclass="btn btn-sm border"> View All </SpkButton>
                        </Card.Header>
                        <Card.Body className=" p-4 pt-2">
                            <div className="progress-stacked progress-md mb-3 main-custom-progress main-project-category">
                                {ProjectCategories.map((data) => (
                                    <div key={data.id} className={`progress-bar bg-${data.progress.Bg} progress-bar-striped`} role="progressbar"
                                        style={{ width: data.progress.width }} aria-valuenow={data.progress.ariaValueNow} aria-valuemin={0} aria-valuemax={100}>
                                    </div>
                                ))}
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-4"> <span className="d-block text-muted">Total number of projects</span>
                                <h6 className="fw-semibold mb-0">18,643</h6>
                            </div>
                            <Row className=" gy-3">
                                {ProjectCategories.map((data) => (
                                    <Col xl={6} key={data.id}>
                                        <span className={`mb-0 project-category me-1 d-inline-block category${data.id} fw-semibold`}>
                                            {data.category}
                                        </span>
                                        <span className={`${data.colorClass} fw-semibold fs-12`}>
                                            <span className="me-1 d-inline-block">
                                                <i className={`ti ti-trending-${data.trend} align-middle`}></i>
                                            </span>
                                            <span className="">{`(${data.percentage}%)`}</span>
                                        </span>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Project Analysis
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="p-0 fs-12 border-0 text-muted no-caret" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">Download</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Import</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Export</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="">
                            <div id="project-analysis">
                                <Spkapexcharts chartOptions={ProjectAnalysisOptions} chartSeries={ProjectAnalysisSeries} type="line" width={'100%'} height={311} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Important Project List</Card.Title>
                            <SpkButton Buttonvariant="light" Customclass="btn btn-sm border"> View All </SpkButton>
                        </Card.Header>
                        <Card.Body className=" pt-1">
                            <Row className=" gy-4">
                                {ImportantProjectList.map((data) => (
                                    <Col xl={4} key={data.id}>
                                        <div className="border rounded">
                                            <div className="d-flex gap-2 p-3 border-bottom flex-wrap">
                                                <span className={`avatar avatar-md bg-${data.avatarBg}`}>
                                                    <i className={`${data.iconClass} fs-20`}></i>
                                                </span>
                                                <div>
                                                    <p className="mb-1 fw-semibold">{data.name}</p>
                                                    <span className="fs-13 text-muted">Client: {data.client}</span>
                                                </div>
                                            </div>
                                            <ul className="list-unstyled top-project-list mb-0 pt-3 p-3 ps-4">
                                                <li className="completed">
                                                    <div>
                                                        <p className="mb-1 fw-semibold">Duo Date</p>
                                                        <span className="text-muted fs-13">{data.details.dueDate}</span>
                                                    </div>
                                                </li>
                                                <li className={data.details.budget.includes("1,12") ? "pending" : "completed"}>
                                                    <div>
                                                        <p className="mb-1 fw-semibold">Budget</p>
                                                        <span className="text-muted fs-13">{data.details.budget}</span>
                                                    </div>
                                                </li>
                                                <li className={`${data.details.deadline.includes("Completed") ? "completed" : "pending"}`}>
                                                    <div>
                                                        <p className="mb-1 fw-semibold">Deadline Time</p>
                                                        <SpkBadge variant={`${data.details.deadlineBg}`}>
                                                            {data.details.deadline}
                                                        </SpkBadge>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div
                                                className="p-3 d-flex align-items-center justify-content-between border-top flex-wrap gap-1">
                                                <div className="avatar-list-stacked">
                                                    {data.team.map((imgUrl, index) => (
                                                        <span className="avatar avatar-sm avatar-rounded" key={index}>
                                                            <img src={imgUrl} alt="img" />
                                                        </span>
                                                    ))}
                                                    {data.extraMembers > 0 ?
                                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#!">
                                                            +{data.extraMembers}
                                                        </Link>
                                                        :
                                                        ""
                                                    }
                                                </div>
                                                <div>
                                                    <span className="text-muted pe-2 border-end"><i className="ri-chat-1-line me-1"></i>{data.comments}</span>
                                                    <span className="text-muted ps-1"><i className="ri-file-copy-line me-1"></i>{data.files}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xxl={5}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Team Members
                            </Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'Name' }, { title: 'Designation' }, { title: 'Status' }, { title: 'Hour' }, { title: 'Percentage' },]}>
                                    {TeamMembers.map((data) => (
                                        <tr key={data.id}>
                                            <th className={data.borderClass}>
                                                <div
                                                    className="d-flex align-items-top justify-content-start flex-grow-1">
                                                    <div className={`avatar avatar-md avatar-rounded bg-${data.avatarBg} me-2`}>
                                                        <img src={data.imageUrl} alt="Natalie Brown" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">{data.name}</p>
                                                        <p className="mb-0 text-muted fs-12"><i
                                                            className="ri ri-map-pin-line me-1 lh-1 align-end d-inline-block"></i>{data.location}</p>
                                                    </div>
                                                </div>
                                            </th>
                                            <td className={data.borderClass}>
                                                {data.role}
                                            </td>
                                            <td className={data.borderClass}>
                                                <SpkBadge variant={`${data.statusColor}`}>{data.status}</SpkBadge>
                                            </td>
                                            <td className={data.borderClass}>
                                                <span className="mb-0">{data.hours}</span>
                                            </td>
                                            <td className={data.borderClass}>
                                                <div id={data.teamId}>
                                                    <Spkapexcharts chartOptions={data.chartOptions} chartSeries={data.chartSeries} type="donut" width={50} height={50} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <Card.Title> To-Do List </Card.Title>
                        </Card.Header>
                        <Card.Body className=" pt-2">
                            <ul className="list-unstyled projects-to-do-list">
                                {ToDoList.map((data) => (
                                    <li key={data.id}>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="form-check form-check-md">
                                                <input className={data.checkboxClass}
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="defaultCheck2" defaultChecked={data.checked}
                                                />
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">
                                                    {data.task}
                                                </span>
                                                <span className="fs-13 text-muted">{data.date}</span>
                                            </div>
                                            <SpkButton Buttonvariant="light" Customclass="btn btn-sm border">Edit</SpkButton>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between pb-2">
                            <Card.Title>
                                Team Tasks
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="p-0 fs-12 text-muted no-caret border-0" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">Download</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Import</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Export</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0 pb-1">
                            <div className="table-responsive">
                                <SpkTables tableClass="table" header={[{ title: 'Tasks' }, { title: 'Team' }, { title: 'Timeline' }, { title: 'Status' },]}>
                                    {TeamTasks.map((data) => (
                                        <tr key={data.id}>
                                            <td className={`fw-medium ${data.borderClass}`}>{data.task}</td>
                                            <td className={data.borderClass}>
                                                <span className="avatar-list-stacked">
                                                    {data.avatars.map((image, index) => (
                                                        <span className="avatar avatar-xs avatar-rounded" key={index}>
                                                            <img src={image} alt="img" />
                                                        </span>
                                                    ))}
                                                </span>
                                            </td>
                                            <td className={data.borderClass}>
                                                <span className="fs-11 text-muted me-2 d-inline-block">Track Time:</span>
                                                <span className="fw-medium fs-12">{data.timeTracked}</span>
                                                <div className="progress progress-animate progress-xs w-100 mt-1" role="progressbar" aria-valuenow={data.progress.ariaValueNow} aria-valuemin={0} aria-valuemax={100}>
                                                    <div className={`progress-bar progress-bar-striped progress-bar-animated bg-${data.progress.bg}`} style={{ width: data.progress.width }}></div>
                                                </div>
                                            </td>
                                            <td className={data.borderClass}><SpkBadge variant={`${data.statusBg}`}>{data.status}</SpkBadge></td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Projects Overview
                            </Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <ListGroup>
                                {ProjectsOverview.map((data) => (
                                    <ListGroup.Item key={data.id}>
                                        <div className="d-flex gap-2 align-items-center flex-wrap">
                                            <span className={`avatar avatar-sm bg-${data.avatarBg} avatar-rounded me-2`}>
                                                <i className={`ri-${data.icon} fw-medium fs-18`}></i>
                                            </span>
                                            <span className="fw-medium">{data.title}</span>
                                            <div className="ms-auto">
                                                <span className={`text-${data.changeColor} fw-medium fs-11`}>{`${data.change}%`}
                                                    <i className={`ri-arrow-${data.direction}-line lh-1 align-center fs-14 fw-normal`}></i></span>
                                                <SpkBadge variant={data.countBg} Customclass={`ms-1`}>{data.count}</SpkBadge>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Projects Summary </Card.Title>
                            <div className="d-flex flex-wrap">
                                <div className="me-3 my-1">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas='a' Customclass="my-1" Customtoggleclass="btn btn-primary btn-sm no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Link className="dropdown-item" to="#!">New</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Popular</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Relevant</Link></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0 pt-2">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'S.No' }, { title: 'Poject Title' }, { title: 'Assigned Team' }, { title: 'Tasks' }, { title: 'Progress' }, { title: 'Status' }, { title: 'Due Date' }, { title: 'Actions' },]}>
                                    {ProjectsSummary.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.id}</td>
                                            <td> <span className="fw-medium">{data.title}</span> </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    {data.avatars.map((img, index) => (
                                                        <span className="avatar avatar-sm avatar-rounded" key={index}> <img src={img} alt="img" /> </span>
                                                    ))}
                                                    {data.length ? (
                                                        <Link className="avatar avatar-sm bg-light text-default  border-2 avatar-rounded" to="#!"> +2 </Link>
                                                    ) : ''}

                                                </div>
                                            </td>
                                            <td>{data.tasksDone}<span className={`${data.textcolor ? 'op-8' : 'text-muted'}`}>{`/${data.totalTasks}`}</span></td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div
                                                        className="progress progress-xs w-100" role="progressbar"
                                                        aria-valuenow={data.progress.ariaValueNow} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className={`progress-bar  bg-${data.progress.bg}`} style={{ width: data.progress.width }}>
                                                        </div>
                                                    </div>
                                                    <div className="ms-2">{data.progress.width}</div>
                                                </div>
                                            </td>
                                            <td> <SpkBadge variant={`${data.statusBg}`}>{data.status}</SpkBadge> </td>
                                            <td>{data.date}</td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkTooltips placement="top" title="View">
                                                        <Link aria-label="anchor" to="#!" className="btn  btn-icon rounded-pill btn-sm btn-primary-light"><i className="ti ti-eye"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Edit">
                                                        <Link aria-label="anchor" to="#!" className="btn  btn-icon rounded-pill btn-sm btn-secondary-light"><i className="ti ti-pencil"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <Link aria-label="anchor" to="#!" className="btn  btn-icon rounded-pill btn-sm  btn-danger-light"><i className="ti ti-trash"></i></Link>
                                                    </SpkTooltips>
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
            {/* <!-- End:: row-4 --> */}
        </Fragment >
    );
};

export default Projects;