import { Fragment, useEffect, useState, type ChangeEvent } from "react";
import { Card, Col, Nav, Pagination, ProgressBar, Row, Tab } from "react-bootstrap";
import { ListTabdata, projectCards, Projectdata } from "../../../../shared/data/apps/projects/projectlistsdata";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkNftcard from "../../../../shared/@spk-reusable-components/reusable-dashboards/spk-nftcard";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import SpkProjectlistcard from "../../../../shared/@spk-reusable-components/reusable-apps/spk-projectlistcard";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";


const ProjectList = () => {
    const [filterData, setFilterData] = useState(Projectdata);
    const [search, setSearch] = useState([]);
    const [projectModal, setProjectModal] = useState<any>({});

    useEffect(() => {
        setFilterData(Projectdata)
    }, [Projectdata])

    const searchLower = String(search).toLowerCase();

    useEffect(() => {
        const updateSearch = Projectdata.filter((item) => (item.title.toLowerCase().includes(searchLower)) || (item.title.toLowerCase().includes(searchLower)))
        setFilterData(updateSearch)
    }, [search])

    const handleToClick = () => {
        const updateFilter = Projectdata.filter((item) => (item.title.toLowerCase().includes(searchLower)) || (item.title.toLowerCase().includes(searchLower)))
        setFilterData(updateFilter)
    }


    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Projects-Projectlist" />

            <Pageheader title="Apps" subtitle="Projects" currentpage="Project List" activepage="Project List" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <div className="row row-cols-xxl-5 row-cols-xl-3 row-cols-md-2 row-cols-1">
                {projectCards.map((idx, index) => (
                    <Col key={index} >
                        <SpkNftcard card={idx} showDropdown={true} titleClass="mb-2" MaindivClass="align-items-start flex-wrap gap-3" />
                    </Col>
                ))}
            </div>
            <Tab.Container defaultActiveKey="second">
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Body className="p-3 d-flex align-items-center gap-3 flex-wrap justify-content-between">
                                <Nav className=" nav-pills p-2 border border-primary border-opacity-25 rounded product-list-tab"
                                    role="tablist">
                                    <Nav.Item className="nav-item flex-grow-1" role="presentation">
                                        <Nav.Link eventKey="first" className="nav-link bg-primary-transparent text-center" data-bs-toggle="tab"
                                            role="tab" aria-current="page" href="#fill-pill-about" aria-selected="false"
                                            tabIndex={-1}><i className="ri-list-check me-1 fs-14"></i>List View</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item flex-grow-1" role="presentation">
                                        <Nav.Link eventKey="second" className="nav-link  bg-primary-transparent text-center"
                                            data-bs-toggle="tab" role="tab" aria-current="page" href="#fill-pill-home"
                                            aria-selected="true"><i className="ri-layout-grid-line me-1 fs-14"></i>Grid
                                            View</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <div className="custom-form-group mb-0 w-sm-50 w-100"> <input type="text" value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                                    className="form-control form-control-md  py-2" placeholder="Search Product.."
                                    aria-label="Search Hear.." />
                                    <SpkButton onClickfunc={handleToClick} Buttonvariant="secondary" Size="sm" Customclass="btn border-0 custom-form-btn  px-3" Buttontype="button">Search</SpkButton>
                                </div>
                                <div className="text-sm-end text-start">
                                    <div className="d-flex flex-wrap">
                                        <SpkDropdown iconPosition={'before'} Customclass="ms-2" Togglevariant='' IconClass="ti ti-sort-descending-2 me-1 mx-1" Toggletext="Filter" Icon={true} Arrowicon={true}
                                            Customtoggleclass="btn btn-light border me-1 dropdown-toggle no-caret"  >
                                            <li><Link className="dropdown-item" to="#!"> Date Published</Link></li>
                                            <li><Link className="dropdown-item" to="#!">Most Relevant</Link></li>
                                            <li><Link className="dropdown-item" to="#!">Price Low to High</Link></li>
                                            <li><Link className="dropdown-item" to="#!">Price High to Low</Link></li>
                                        </SpkDropdown>
                                        <Link to={`${import.meta.env.BASE_URL}apps/projects/create-project`} className="btn btn-secondary text-nowrap"><i
                                            className="ri-add-line me-1 fw-medium align-middle"></i>Add New Project</Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <!-- End::row-1 --> */}

                {/* <!-- Start::row-2 --> */}

                <Row>
                    <Col xl={12}>
                        <Tab.Content className="tab-content project-list-tab">
                            <Tab.Pane eventKey="second" className="text-muted show  p-0 border-0" id="fill-pill-home"
                                role="tabpanel">
                                <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
                                    {filterData?.map((item, index) => (
                                        <Col className="col" key={index}>
                                            <SpkProjectlistcard item={item} show={projectModal} index={index} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="first" className="text-muted p-0 border-0" id="fill-pill-about" role="tabpanel">
                                {ListTabdata.map((idx, index) => (
                                    <Card className={`custom-card ${idx.color}`} key={index}>
                                        <Card.Body className="d-flex gap-5 align-items-center justify-content-between flex-wrap">
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="me-2">
                                                    <span className={`avatar avatar-lg avatar-rounded p-1 bg-${idx.color}-transparent`}>
                                                        <img src={idx.logo} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <Link to="#!" className="fw-medium fs-14 d-block text-truncate project-list-title mb-1">{idx.title}</Link>
                                                    <span className="text-muted d-block fs-13">
                                                        <strong className={`text-${idx.color}`}>{idx.task}</strong> tasks
                                                        completed</span>
                                                </div>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                {idx.avatars?.map((img, imgIndex: number) => {
                                                    if (imgIndex < 3 || projectModal[index]) {
                                                        return <span className="avatar avatar-sm avatar-rounded" key={imgIndex}>
                                                            <img src={img.img} alt="img" />
                                                        </span>
                                                    }
                                                })}
                                                {idx.avatars?.length > 2 && (
                                                    projectModal[index] ? (<Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#!">
                                                        -
                                                    </Link>) : (
                                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#!">
                                                            +{idx.avatars?.length - 1}
                                                        </Link>
                                                    )
                                                )}
                                                <span className="ps-3">5 People</span>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div className="fs-12"><span className="fw-semibold">Start Date:</span> {idx.startDate}
                                                </div>
                                                <div className="fs-12"><span className="fw-semibold">End Date:</span> {idx.endDate}
                                                </div>
                                            </div>
                                            <div className="d-flex gap-1 flex-wrap">
                                                <ProgressBar className="progress-stacked progress-xs flex-grow-1 w-100 flex-shrink-0 my-auto gap-1">
                                                    <ProgressBar variant="primary" now={idx.progress1} className="rounded" />
                                                    <ProgressBar variant="danger" now={100 - idx.progress1} className="rounded" />
                                                </ProgressBar>
                                                <div className="flex-shrink-0"><span className="text-primary fw-medium me-1">{idx.progress1}%</span> Completed</div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div className="fs-12"><span className="fw-semibold">Priority Level:</span></div>
                                                <SpkBadge variant={idx.priority === "Medium" ? "warning" : idx.priority === "Low" ? "primary" : idx.priority === "Normal" ? "info" : "danger"}>{idx.priority}</SpkBadge>
                                            </div>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn btn-icon rounded-circle">
                                                    <i className="ri-eye-line lh-1 align-middle"></i>
                                                </SpkButton>
                                                <SpkButton Size="sm" Buttonvariant="info-light" Customclass="btn btn-icon rounded-circle">
                                                    <i className="ri-pencil-line lh-1 align-middle"></i>
                                                </SpkButton>
                                                <SpkButton Size="sm" Buttonvariant="danger-light" Customclass="btn btn-icon rounded-circle">
                                                    <i className="ri-delete-bin-line lh-1 align-middle"></i>
                                                </SpkButton>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            {/* <!-- End::row-2 --> */}
            <Pagination className="pagination justify-content-end">
                <li className="page-item disabled">
                    <Link to="#!" className="page-link">Previous</Link>
                </li>
                <li className="page-item"><Link className="page-link" to="#!">1</Link></li>
                <li className="page-item active"><Link className="page-link" to="#!">2</Link></li>
                <li className="page-item"><Link className="page-link" to="#!">3</Link></li>
                <li className="page-item">
                    <Link className="page-link" to="#!">Next</Link>
                </li>
            </Pagination>
        </Fragment>
    );
};

export default ProjectList;