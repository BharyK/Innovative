import { Fragment, useState } from "react";
import { Card, Col, Dropdown, ListGroup, Modal, Offcanvas, Pagination, Row } from "react-bootstrap";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { FileCategories, FileManagerOptions, FileManagerSeries, Folders, QuickAccess, RecentFiles } from "../../../shared/data/pages/filemanagerdata";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import media5 from '../../../assets/images/media/png/5.png'
import blog9 from '../../../assets/images/media/blog/9.jpg'
import face8 from '../../../assets/images/faces/8.jpg'
import face11 from '../../../assets/images/faces/11.jpg'
import face2 from '../../../assets/images/faces/2.jpg'
import face5 from '../../../assets/images/faces/5.jpg'
import face1 from '../../../assets/images/faces/1.jpg'
import face15 from '../../../assets/images/faces/15.jpg'
import face13 from '../../../assets/images/faces/13.jpg'

const FileManager = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modle, setModle] = useState(false);

    const handleClose1 = () => setModle(false);
    const modelshow = () => setModle(true);


    const [offcanvas, setOffcanvas] = useState(false);

    const handleClose2 = () => setOffcanvas(false);
    const Offcanvasshow = () => setOffcanvas(true);

    const FooterContent = (
        <tr className="">
            <td colSpan={5}>
                <nav aria-label="Page navigation" >
                    <Pagination className="pagination justify-content-end mb-0">
                        <Pagination.Item disabled>Previous</Pagination.Item>
                        <Pagination.Item >1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item className="pagination-next">Next</Pagination.Item>
                    </Pagination>
                </nav>
            </td>
        </tr>
    );
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"File Manager"} />
            <Pageheader title="Pages" currentpage="File Manager" activepage="File Manager" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9} xl={8}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className=" p-0">
                            <div className="file-manager-folders">
                                <div className="d-flex p-3 flex-wrap gap-2 align-items-center justify-content-between border-bottom">
                                    <div className="flex-fill">
                                        <h6 className="fw-medium mb-0">Folders</h6>
                                    </div>
                                    <div className="d-flex gap-2 flex-wrap justify-content-sm-end w-75">
                                        <input className="form-control form-control-sm w-50" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                        <SpkButton Buttonvariant="primary" onClickfunc={handleShow} Customclass="btn btn-w-md d-flex align-items-center justify-content-center btn-wave waves-light" data-bs-toggle="modal" data-bs-target="#create-folder">
                                            <i className="ri-add-circle-line align-middle me-1"></i>Create Folder
                                        </SpkButton>
                                        <Modal show={show} onHide={handleClose} centered className="modal fade" id="create-folder" tabIndex={-1}
                                            aria-labelledby="create-folder" data-bs-keyboard="false"
                                            aria-hidden="true">
                                            <div className="">
                                                <div className="">
                                                    <Modal.Header>
                                                        <Modal.Title id="staticBackdropLabel" className="h6">Create
                                                            Folder
                                                        </Modal.Title>
                                                        <SpkButton Buttontype="button" Buttonvariant="" Customclass="btn-close"
                                                            data-bs-dismiss="modal" aria-label="Close" onClickfunc={handleClose} ></SpkButton>
                                                    </Modal.Header>
                                                    <div className="modal-body">
                                                        <label htmlFor="create-folder1" className="form-label">Folder
                                                            Name</label>
                                                        <input type="text" className="form-control" id="create-folder1"
                                                            placeholder="Folder Name" />
                                                    </div>
                                                    <Modal.Footer className="modal-footer">
                                                        <SpkButton Buttontype="button" Buttonvariant="light" Customclass="btn btn-sm btn-icon btn-light"
                                                            data-bs-dismiss="modal" onClickfunc={handleClose} ><i
                                                                className="ri-close-fill"></i></SpkButton>
                                                        <SpkButton Buttontype="button"
                                                            Customclass="btn btn-sm btn-success">Create</SpkButton>
                                                    </Modal.Footer>
                                                </div>
                                            </div>
                                        </Modal>
                                        <SpkButton Buttonvariant="secondary-transparent" onClickfunc={modelshow} Customclass="btn btn-w-md d-flex align-items-center justify-content-center btn-wave waves-light" data-bs-toggle="modal" data-bs-target="#create-file">
                                            <i className="ri-add-circle-line align-middle me-1"></i>Create File
                                        </SpkButton>
                                        <Modal centered show={modle} onHide={handleClose1} className="modal fade" id="create-file" tabIndex={-1}
                                            aria-labelledby="create-file" data-bs-keyboard="false"
                                            aria-hidden="true">
                                            <div className="">
                                                <div className="">
                                                    <Modal.Header>
                                                        <h6 className="modal-title" id="staticBackdropLabel1">Create
                                                            File
                                                        </h6>
                                                        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" onClickfunc={handleClose1}
                                                            data-bs-dismiss="modal" aria-label="Close"></SpkButton>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <label htmlFor="create-file1" className="form-label">File
                                                            Name</label>
                                                        <input type="text" className="form-control" id="create-file1"
                                                            placeholder="File Name" />
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <SpkButton Buttontype="button" Buttonvariant="light" Customclass="btn btn-sm btn-icon btn-light"
                                                            data-bs-dismiss="modal" onClickfunc={handleClose1} ><i
                                                                className="ri-close-fill"></i></SpkButton>
                                                        <SpkButton Buttontype="button" Buttonvariant="success"
                                                            Customclass="btn btn-sm btn-success">Create</SpkButton>
                                                    </Modal.Footer>
                                                </div>
                                            </div>
                                        </Modal>
                                    </div>
                                </div>
                                <div className="p-3 file-folders-container">
                                    <div className="d-flex mb-3 align-items-center justify-content-between">
                                        <p className="mb-0 fw-medium fs-14">Quick Access</p>
                                        <Link to="#!" className="btn btn-sm btn-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </div>
                                    <Row className="mb-2">
                                        {QuickAccess.map((idx) => (
                                            <Col xxl={3} xl={6} lg={6} md={6} key={idx.id}>
                                                <Card className={`custom-card main-custom-card shadow-none ${idx.avatarClass}-dash-border`}>
                                                    <Card.Body className="">
                                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                                            <div className={`avatar avatar-md ${idx.avatarClass}`}>
                                                                {idx.svgIcon}
                                                            </div>
                                                            <div className="flex-fill">
                                                                <Link to="#!" className="d-block fw-medium">{idx.title}</Link>
                                                                <span className="fs-12 text-muted">{idx.usage}</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="d-block fs-12 fw-medium">{idx.size}</span>
                                                                <span className="fs-12 text-muted">{idx.files}</span>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                    <div className="d-flex mb-3 align-items-center justify-content-between">
                                        <p className="mb-0 fw-medium fs-14">Folders</p>
                                        <Link to="#!" className="btn btn-sm btn-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </div>
                                    <Row className="row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                                        {Folders.map((idx) => (
                                            <Col key={idx.id}>
                                                <Card className={`custom-card shadow-none border border-${idx.bgClass} border-opacity-25`}>
                                                    <Card.Body className=" p-0">
                                                        <div className={`bg-${idx.bgClass}-transparent text-center svg-${idx.bgClass} text-${idx.bgClass} p-3`}>
                                                            <span className={`avatar avatar-xl ${idx.bgClass}-shadow svg-${idx.bgClass}  avatar-rounded flex-shrink-0`}>
                                                                {idx.svgContent}
                                                            </span>
                                                        </div>
                                                        <div className="px-3 py-2">
                                                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                                <div>
                                                                    <p className="fs-14 fw-medium mb-1 lh-1">
                                                                        <Link to="#!">{idx.title}</Link>
                                                                    </p>
                                                                    <span className="text-muted fs-12"> {idx.files} </span>
                                                                </div>
                                                                <div className="avatar-list-stacked">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face11} alt="img" /> </span>
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face2} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face5} alt="img" />
                                                                    </span>
                                                                    <span className={`avatar avatar-xs avatar-rounded lh-1 fs-12 align-middle border fw-medium shadow-sm bg-${idx.bgClass}`}>
                                                                        <i className="ri-add-line align-middle fs-14"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                    <div className="d-flex mb-3 align-items-center justify-content-between">
                                        <p className="mb-0 fw-medium fs-14">Recent Files</p>
                                        <Link to="#!" className="btn btn-sm btn-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </div>
                                    <Row>
                                        <Col xl={12}>
                                            <div className="table-responsive border border-bottom-0">
                                                <SpkTables tableClass="table text-nowrap table-hover" footchildren={FooterContent} header={[{ title: 'File Name' }, { title: 'Category' }, { title: 'Size' }, { title: 'Date Modified' }, { title: 'Action' },]}>
                                                    {RecentFiles.map((idx) => (
                                                        <tr key={idx.id} className={idx.rowClass}>
                                                            <th scope="row">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="me-0">
                                                                        <span className={`avatar avatar-md bg-${idx.avatarClass}-transparent me-2 svg-${idx.avatarClass} text-${idx.avatarClass}`}>
                                                                            {idx.svgContent}
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <Link to="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={Offcanvasshow}>{idx.fileName}</Link>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <td>{idx.category}</td>
                                                            <td>{idx.size}</td>
                                                            <td>{idx.date}</td>
                                                            <td>
                                                                <div className="hstack gap-2 fs-15">
                                                                    <Link to="#!" className="btn btn-icon btn-sm btn-secondary"><i className="ri-eye-line"></i></Link>
                                                                    <Link to="#!" className="btn btn-icon btn-sm btn-danger"><i className="ri-delete-bin-line"></i></Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </SpkTables>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Body className="">
                                    <div className="d-flex align-items-center gap-3 flex-wrap p-3 bg-light rounded border">
                                        <div>
                                            <span className="avatar avatar-md bg-secondary"> <i className="ri-hard-drive-2-line fs-16"></i> </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div> Storage <p className="mb-0"><span className="fw-bold fs-14">68.12GB </span>
                                                Used</p>
                                            </div>
                                        </div>
                                        <div className="ms-auto text-end">
                                            <p className="fs-12 fw-semibold mb-0">21.35GB free space</p>
                                            <p className="fs-12 text-muted fw-medium mb-0">Available</p>
                                        </div>
                                    </div>
                                    <div id="file-manager-storage">
                                        <Spkapexcharts chartOptions={FileManagerOptions} chartSeries={FileManagerSeries} type='donut' width={'100%'} height={160} />
                                    </div>
                                </Card.Body>
                                <Card.Footer className="p-0">
                                    <ListGroup className="list-group-flush p-3">
                                        {FileCategories.map((idx) => (
                                            <ListGroup.Item className={`border border-dashed rounded ${idx.listItemClass}`} key={idx.id}>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className={`main-card-icon ${idx.mainCardIconClass}`}>
                                                        <div className={`avatar avatar-md bg-${idx.mainCardIconClass}-transparent svg-${idx.mainCardIconClass} text-${idx.mainCardIconClass} border border-${idx.mainCardIconClass} border-opacity-10`}>
                                                            {idx.svgContent}
                                                        </div>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="fw-medium">{idx.category}</span>
                                                        <span className="text-muted fs-12 d-block">{idx.files}</span>
                                                    </div>
                                                    <div>
                                                        <span className="fw-medium mb-0">{idx.storage}</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card shadow-none bg-primary-transparent primary-dash-border">
                                <Card.Body className="">
                                    <div className="filemanager-upgrade-storage w-100 text-center">
                                        <span className="d-block mb-3"> <img src={media5} alt="" /> </span>
                                        <span className="fs-15 fw-semibold text-default">Get More Spae Of Your files</span>
                                        <span className=" fw-medium d-block mt-2">Upgrade to Pro for lightning-fast transfers, enhanced security, unlimited storage</span>
                                        <div className="mt-3 d-grid"> <SpkButton Buttonvariant="primary" Customclass="btn btn-wave">Upgrade Now</SpkButton></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start::mail information offcanvas --> */}
            <Offcanvas className=" offcanvas-end" tabIndex={-1} id="offcanvasRight" placement="end" show={offcanvas} onHide={handleClose2}>
                <Offcanvas.Body className="p-0">
                    <div className="selected-file-details">
                        <div className="d-flex p-3 align-items-center justify-content-between border-bottom">
                            <div>
                                <h6 className="fw-medium mb-0">File Details</h6>
                            </div>
                            <div className="d-flex align-items-center">
                                <SpkDropdown toggleas='a' Customclass="me-1" Customtoggleclass="btn btn-sm btn-icon btn-primary-light btn-wave waves-light waves-effect waves-light no-caret" Icon={true} IconClass="ri-more-2-fill">
                                    <li><Dropdown.Item href="#!">Share</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Copy</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Move</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Delete</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Raname</Dropdown.Item></li>
                                </SpkDropdown>
                                <button type="button" className="btn btn-sm btn-icon btn-outline-light border" onClick={handleClose2} data-bs-dismiss="offcanvas" aria-label="Close"><i className="ri-close-line"></i></button>
                            </div>
                        </div>
                        <div className="filemanager-file-details" id="filemanager-file-details">
                            <div className="p-3 text-center border-bottom border-block-end-dashed">
                                <div className="file-details mb-3">
                                    <img src={blog9} alt="" />
                                </div>
                                <div>
                                    <p className="mb-0 fw-medium fs-16">IMG-09123878-SPK734.jpeg</p>
                                    <p className="mb-0 text-muted fs-10">422KB | 23,Nov 2024</p>
                                </div>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <ListGroup>
                                    <ListGroup.Item>
                                        <div>
                                            <span className="fw-medium">File Format : </span>
                                            <span className="fs-12 text-muted">jpeg</span>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div>
                                            <p className="fw-medium mb-0">File Description : </p>
                                            <span className="fs-12 text-muted">This file contains 3 folder Innovative.main &
                                                Innovative.premium & Innovative.featured and 42 images and layout styles are added in
                                                this update.</span>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <p className="fw-medium mb-0">File Location : </p>
                                        <span
                                            className="fs-12 text-muted">Device/Storage/Archives/IMG-09123878-SPK734.jpeg</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <p className="mb-1 fw-medium fs-14">Downloaded from :</p>
                                <Link className="text-primary fw-medium text-break"
                                    to="https://themeforest.net/user/spruko/portfolio" target="_blank">
                                    <u>https://themeforest.net/user/spruko/portfolio</u>
                                </Link>
                            </div>
                            <div className="p-3">
                                <p className="mb-2 fw-medium fs-14">Shared With :</p>
                                <Link to="#!">
                                    <div className="d-flex align-items-center p-2 mb-1">
                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                            <img src={face1} alt="" />
                                        </span>
                                        <span className="fw-medium flex-fill">Akira Susan</span>
                                        <span className="badge bg-success-transparent fw-normal">28,Nov 2024</span>
                                    </div>
                                </Link>
                                <Link to="#!">
                                    <div className="d-flex align-items-center p-2 mb-1">
                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                            <img src={face15} alt="" />
                                        </span>
                                        <span className="fw-medium flex-fill">Khalid Ahmad</span>
                                        <span className="badge bg-success-transparent fw-normal">16,Oct 2024</span>
                                    </div>
                                </Link>
                                <Link to="#!">
                                    <div className="d-flex align-items-center p-2 mb-1">
                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                            <img src={face8} alt="" />
                                        </span>
                                        <span className="fw-medium flex-fill">Jeremiah Jackson</span>
                                        <span className="badge bg-success-transparent fw-normal">05,Dec 2024</span>
                                    </div>
                                </Link>
                                <Link to="#!">
                                    <div className="d-flex align-items-center p-2">
                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                            <img src={face13} alt="" />
                                        </span>
                                        <span className="fw-medium flex-fill">Brigo Jhonson</span>
                                        <span className="badge bg-success-transparent fw-normal">13,Nov 2024</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            {/* <!-- End::mail information offcanvas --> */}
        </Fragment>
    );
};

export default FileManager;