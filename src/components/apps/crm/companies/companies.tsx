import React, { Fragment, useRef, useState, type ChangeEvent, } from "react";
import { Card, Col, Form, Modal, Offcanvas, Pagination, Row } from "react-bootstrap";
import { companiesSize, CompanyContacts, Tags } from "../../../../shared/data/apps/crm/companydata";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkTooltips from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import comppanyLogo11 from '../../../../assets/images/company-logos/11.png';
import comppanyLogo3 from '../../../../assets/images/company-logos/3.png';
import face2 from '../../../../assets/images/faces/2.jpg';


const Companies = () => {
    const [companyList, setCompanyList] = useState(CompanyContacts);

    const handleRemove = (id: number) => {
        const list = companyList.filter((idx) => idx.id !== id)
        setCompanyList(list);
    }

    const [selectedItems, setSelectedItems] = useState<any>([]);

    const handleCheckboxClick = (id: string) => {
        setSelectedItems((prevSelected: string[]) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item: string) => item !== id)
                : [...prevSelected, id]
        );
    };
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedItems(companyList.map((idx: { id: number }) => idx.id));
        } else {
            setSelectedItems([]);
        }
    };

    const [selectedImage, setSelectedImage] = useState(comppanyLogo11);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {

        const selectedFile = e.target.files && e.target.files[0];
        if (selectedFile) {
            // You can handle the file here, for example, upload it to a server.
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target?.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const [modals, setModals] = useState<{ [key: string]: boolean }>({});
    const handleModalOpen = (modalName: string) => {
        setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
    };
    const handleModalClose = (modalName: string) => {
        setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
    };

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Companies"} />
            <Pageheader title="Apps" subtitle="CRM" currentpage="Companies" activepage="Companies" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <div className="row">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Companies
                                <SpkBadge variant="light" Customclass="text-default rounded ms-1 fs-12 align-middle">14</SpkBadge>
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkButton Buttonvariant="primary" Size="sm" Customclass="btn btn-wave" Buttontoggle="modal" onClickfunc={() => handleModalOpen('modal')}
                                    Buttontarget="#create-contact">
                                    <i className="ri-add-line me-1 fw-medium align-middle"></i>Add Company
                                </SpkButton>
                                <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-sm btn-wave">Export As CSV</SpkButton>
                                <SpkDropdown Togglevariant="" Arrowicon={true} Toggletext="Sort By" Customtoggleclass="btn btn-light btn-sm btn-wave no-caret">
                                    <li><Link className="dropdown-item" to="#!">Newest</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Date Added</Link></li>
                                    <li><Link className="dropdown-item" to="#!">A - Z</Link></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap" showCheckbox={true} onChange={handleSelectAll} checked={selectedItems.length === companyList.length}
                                    header={[{ title: 'Company Name' }, { title: 'Email' }, { title: 'Phone' }, { title: 'Company Size' }, { title: 'Industry' }, { title: 'Key Contact' }, { title: 'Total Deals' }, { title: 'Actions' }]}>
                                    {companyList.map((idx, index) => (
                                        <tr className="crm-contact companies-list" key={index}>
                                            <td className="companies-checkbox">
                                                <Form.Check className="" onChange={() => handleCheckboxClick(index)}
                                                    checked={selectedItems.includes(idx.id)}
                                                    type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1"> <span
                                                        className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                        <img src={idx.companyLogo} alt="" />
                                                    </span>
                                                    </div>
                                                    <div>
                                                        <Link data-bs-toggle="offcanvas" onClick={() => handleModalOpen('offcanvas')} to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                                            {idx.companyName}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div> <span className="d-block mb-1"><i
                                                    className="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block"></i>{idx.email}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div> <span className="d-block"><i
                                                    className="ri-phone-line me-2 align-middle fs-14 text-muted d-inline-block"></i>{idx.phone}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center flex-wrap gap-1">
                                                    <SpkBadge variant={idx.bgColor}>{idx.businessSize}</SpkBadge>
                                                </div>
                                            </td>
                                            <td> {idx.industry}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1"> <span
                                                        className="avatar avatar-rounded avatar-sm"> <img
                                                            src={idx.avatar} alt="" /> </span>
                                                    </div>
                                                    <div> <span className="d-block fw-medium">{idx.name}</span> </div>
                                                </div>
                                            </td>
                                            <td> 350 </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Link data-bs-toggle="offcanvas" onClick={() => handleModalOpen('offcanvas')} to="#offcanvasExample" role="button" aria-controls="offcanvasExample" className="btn btn-sm btn-primary-light btn-icon">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <SpkButton Buttonvariant="info-light" Size="sm" Customclass="btn btn-icon">
                                                        <i className="ri-pencil-line"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="secondary-light" onClickfunc={() => handleRemove(idx.id)} Size="sm" Customclass="btn btn-icon contact-delete">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing {companyList.length} Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" to="#!">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item active"><Link className="page-link"
                                                to="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link"
                                                to="#!">2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link text-primary" to="#!">
                                                    next
                                                </Link>
                                            </li>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </div>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: Company Details Offcanvas --> */}
            <Offcanvas placement="end" className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample" show={modals["offcanvas"] || false} onHide={() => handleModalClose('offcanvas')}
                aria-labelledby="offcanvasExample">
                <Offcanvas.Body className="p-0">
                    <div
                        className="d-flex align-items-top p-3 m-2 primary-dash-border bg-primary-transparent main-profile-cover position-relative">
                        <span
                            className="avatar avatar-xxl avatar-rounded me-3 p-2 bg-white flex-shrink-0">
                            <img src={comppanyLogo3} alt="" /> </span>
                        <div className="flex-fill main-profile-info">
                            <div className="d-flex align-items-start justify-content-between">
                                <h6 className="fw-medium mb-1">Ethan Thompson <span
                                    className="badge bg-secondary-transparent fs-10"><i
                                        className="ri-circle-fill fs-8 text-secondary me-1 "></i> New Lead</span>
                                </h6> <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close crm-contact-close-btn p-0" onClickfunc={() => handleModalClose('offcanvas')}
                                    Buttondismiss="offcanvas" Buttonlabel="Close"></SpkButton>
                            </div>
                            <p className="mb-2 text-muted fs-12">Chief Financial Officer (CFO)</p>
                            <div className="d-flex gap-2 fs-15 mt-1"> <Link to="#!"
                                className="btn btn-icon btn-sm rounded-pill btn-danger-light"><i
                                    className="ri-phone-line"></i></Link>
                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-info-light">
                                    <i className="ri-mail-line"></i>
                                </Link>
                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-secondary-light">
                                    <i className="ri-message-line"></i>
                                </Link>
                                <SpkDropdown Togglevariant="warning-light" Menuclass="dropdown-menu-end" Customtoggleclass="btn-warning-light btn btn-icon btn-sm rounded-pill btn-warning-light no-caret" Icon={true} IconClass="ri-more-fill">
                                    <li><Link className="dropdown-item" to="#!">Size </Link></li>
                                    <li><Link className="dropdown-item" to="#!">Deals</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Status</Link></li>
                                </SpkDropdown>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-3 gap-3 p-1 py-0 border-bottom border-block-end-dashed">
                        <div className="p-2 text-center flex-fill"> <i
                            className="ri-shake-hands-line p-2 fs-5 rounded-circle lh-1 bg-primary-transparent"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">253</p>
                            <p className="mb-0 text-muted">Deals</p>
                        </div>
                        <div className="p-2 text-center flex-fill"> <i
                            className="ri-money-dollar-circle-line p-2 fs-5 rounded-circle lh-1 bg-secondary-transparent"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">$12k</p>
                            <p className="mb-0 text-muted">Contributions</p>
                        </div>
                        <div className="p-2 text-center flex-fill"> <i
                            className="ri-thumb-up-line p-2 fs-5 rounded-circle lh-1 bg-warning-transparent"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">$17k</p>
                            <p className="mb-0 text-muted">Comitted</p>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed">
                        <div className="mb-0">
                            <p className="fs-15 mb-2 fw-medium">Professional Bio :</p>
                            <p className="text-muted mb-0"> I am <b className="text-default">Ethan Thompson,</b> hereby
                                declaring that I am the founder and managing director of the prestigious company
                                named Thompson Enterprises, and I serve as the Chief Financial Officer (CFO) of the
                                company. </p>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed">
                        <p className="fs-14 mb-2 fw-medium">Contact Information :</p>
                        <div className="">
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2"> <span
                                    className="avatar avatar-sm avatar-rounded bg-danger-transparent"> <i
                                        className="ri-mail-line align-middle fs-14"></i> </span> </div>
                                <div> ethanthompson@example.com
                                    <SpkTooltips title="Copy">
                                        <span className="text-muted lh-1 rounded-circle ms-1"><i
                                            className="ri-file-copy-line"></i>
                                        </span>
                                    </SpkTooltips>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2"> <span
                                    className="avatar avatar-sm avatar-rounded bg-info-transparent"> <i
                                        className="ri-phone-line align-middle fs-14"></i> </span> </div>
                                <div> +(333) 555-1234 </div>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <div className="me-2"> <span
                                    className="avatar avatar-sm avatar-rounded bg-secondary-transparent"> <i
                                        className="ri-map-pin-line align-middle fs-14"></i> </span> </div>
                                <div> 1234 Elm Street, Apt 101, Springfield, IL, 62701, USA </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Priority:</p>
                        <div className="badge bg-warning-transparent"><i
                            className="ri-circle-fill lh-1 align-middle fs-9 me-1"></i> Low Priority</div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center gap-3">
                        <div className="fs-14 fw-medium">Company Size:</div>
                        <div> <span className="badge bg-primary-transparent">Corporate</span> - 250+ Employees </div>
                    </div>
                    <div
                        className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Created Date:</p>
                        <div>25-May-2024</div>
                    </div>
                    <div
                        className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Lead Source:</p>
                        <div><i
                            className="ri-instagram-line bg-danger-transparent p-1 lh-1 align-middle fs-15 me-1 rounded"></i>
                            Instagram</div>
                    </div>
                    <div
                        className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Social Networks :</p>
                        <div className="btn-list mb-0">
                            <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn btn-icon  btn-wave waves-effect waves-light mb-0">
                                <i className="ri-facebook-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Size="sm" Buttonvariant="secondary-light" Customclass="btn btn-icon  btn-wave waves-effect waves-light mb-0">
                                <i className="ri-twitter-x-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Size="sm" Buttonvariant="info-light" Customclass="btn btn-icon  btn-wave waves-effect waves-light mb-0">
                                <i className="ri-instagram-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Size="sm" Buttonvariant="warning-light" Customclass="btn btn-icon  btn-wave waves-effect waves-light mb-0">
                                <i className="ri-github-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Size="sm" Buttonvariant="danger-light" Customclass="btn btn-icon  btn-wave waves-effect waves-light mb-0">
                                <i className="ri-youtube-line fw-medium"></i>
                            </SpkButton>
                        </div>
                    </div>
                    <div
                        className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Tags :</p>
                        <div> <span className="badge bg-primary-transparent">New Lead</span> <span
                            className="badge bg-primary-transparent">Others</span> </div>
                    </div>
                    <div className="p-3 d-flex align-items-center gap-3">
                        <div className="fs-14 fw-medium"> Key Contact : </div>
                        <div className="d-flex align-items-center gap-2">
                            <div className="lh-1"> <span className="avatar avatar-rounded avatar-sm"> <img
                                src={face2} alt="img" /> </span> </div>
                            <div className="fw-medium">Linda Klusty</div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            {/* <!-- End:: Company Details Offcanvas --> */}

            {/* <!-- Start:: Add Company --> */}
            <Modal className="modal fade" id="create-contact" tabIndex={-1} aria-hidden="true" centered show={modals["modal"] || false} onHide={() => handleModalClose('modal')} >
                <Modal.Header closeButton>
                    <h6 className="modal-title">Add Company</h6>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <Row className="gy-3">
                        <Col xl={12}>
                            <div className="mb-0 text-center">
                                <span className="avatar avatar-xxl avatar-rounded p-2 bg-light">
                                    <img src={selectedImage || ''} alt=""
                                        id="profile-img" />
                                    <SpkBadge Pill={true} Customclass="badge rounded-pill bg-primary avatar-badge" Onclickfun={openFileInput}>
                                        <input type="file" name="photo" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }}
                                            className="position-absolute w-100 h-100 op-0" id="profile-change" />
                                        <i className="fe fe-camera"></i>
                                    </SpkBadge>
                                </span>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="company-name" className="form-label">Company Name</Form.Label>
                            <Form.Control type="text" id="company-name" placeholder="Contact Name" />
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="company-lead-score" className="form-label">Total Deals</Form.Label>
                            <Form.Control type="number" id="company-lead-score" placeholder="Total Deals" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="company-mail" className="form-label">Email</Form.Label>
                            <Form.Control type="email" id="company-mail" placeholder="Enter Email" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="company-phone" className="form-label">Phone No</Form.Label>
                            <Form.Control type="tel" id="company-phone" placeholder="Enter Phone Number" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="key-contact" className="form-label">Key Contact</Form.Label>
                            <Form.Control type="text" id="key-contact" placeholder="Contact Name" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="form-label">Industry</Form.Label>
                            <SpkSelect name="colors" option={Tags} mainClass="basic-multi-select choices__item"
                                menuplacement='auto' classNameprefix="Select2" placeholder="Select Industry" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="form-label">Company Size</Form.Label>
                            <SpkSelect name="colors" option={companiesSize} mainClass="basic-multi-select choices__item"
                                menuplacement='top' classNameprefix="Select2" placeholder="Company Size" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <SpkButton Buttontype="button" Buttonvariant="light" Customclass="btn" Buttondismiss="modal" onClickfunc={() => handleModalClose('modal')}>Cancel</SpkButton>
                    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn">Create Contact</SpkButton>
                </Modal.Footer>
            </Modal>
            {/* <!-- End:: Add Company --> */}
        </Fragment>
    );
};

export default Companies;