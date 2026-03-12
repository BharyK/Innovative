import React, { Fragment, useRef, useState, type ChangeEvent, } from "react";
import { Card, Col, Form, Modal, Offcanvas } from "react-bootstrap";
import { contacts, leads, Tags, type contactsType } from "../../../../shared/data/apps/crm/contactdata";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkTooltips from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkDatepickr from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import face2 from '../../../../assets/images/faces/2.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face10 from '../../../../assets/images/faces/10.jpg';


const Contacts = () => {
    const [contactsList, setContactsList] = useState(contacts);
    const handleRemove = (id: number) => {
        const list = contactsList.filter((idx: contactsType) => idx.id !== id)
        setContactsList(list);
    }
    const [dates, setDates] = useState<{ [key: string]: Date | string | null }>({});
    const handleDateChange = (key: string, date: Date | null) => {
        if (date) {
            setDates((prevDates) => ({
                ...prevDates,
                [key]: date,
            }));
        } else {
            setDates((prevDates) => {
                const { [key]: removedKey, ...rest } = prevDates;
                return rest;
            });
        }
    };

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
            setSelectedItems(contactsList.map((idx: { id: number; }) => idx.id));
        } else {
            setSelectedItems([]);
        }
    };


    const [selectedImage, setSelectedImage] = useState(face2);

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
                setSelectedImage(event.target?.result as string);
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
            <Seo title={"Contacts"} />
            <Pageheader title="Apps" subtitle="CRM" currentpage="Contacts" activepage="Contacts" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <div className="row">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <Card.Title>
                                Contacts<span
                                    className="badge bg-light text-default rounded ms-1 fs-12 align-middle">28</span>
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkButton Size="sm" Buttonvariant="primary" Customclass="btn" Buttontoggle="modal" onClickfunc={() => handleModalOpen('modal')}
                                    Buttontarget="#create-contact">
                                    <i className="ri-add-line me-1 fw-medium align-middle"></i>Create Contact
                                </SpkButton>
                                <SpkButton Size="sm" Buttonvariant="secondary-light" Customclass="btn">Export As CSV</SpkButton>
                                <SpkDropdown Togglevariant="" Toggletext=" Sort By" Arrowicon={true} Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret">
                                    <li><Link className="dropdown-item" to="#!">Newest</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Date Added</Link></li>
                                    <li><Link className="dropdown-item" to="#!">A - Z</Link></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap table-hover" onChange={handleSelectAll} checked={selectedItems.length === contactsList.length} showCheckbox={true}
                                    header={[{ title: 'Contact Name' }, { title: 'Email' }, { title: 'Company' }, { title: 'Lead Score' }, { title: 'Priority' }, { title: 'Phone' }, { title: 'Tags' }, { title: 'Lead Source' }, { title: 'Actions' }]} >
                                    {contactsList.map((idx, index) => (
                                        <tr className="crm-contact contacts-list" key={index}>
                                            <td className="contacts-checkbox">
                                                <Form.Check className="" onChange={() => handleCheckboxClick(idx.id)}
                                                    checked={selectedItems.includes(idx.id)}
                                                    type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src={idx.avatar} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <Link data-bs-toggle="offcanvas" onClick={() => handleModalOpen('offcanvas')} to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                                            <span className="d-block fw-medium">{idx.name}</span>
                                                        </Link>
                                                        <SpkTooltips title="Last Contacted" tooltipClass='tooltip-primary' >
                                                            <span className="d-block text-muted fs-11">
                                                                <i className="ri-account-circle-line me-1 fs-13 align-middle"></i>{idx.lastContacted}
                                                            </span>
                                                        </SpkTooltips>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div> <span className="d-block mb-1"><i
                                                    className="ri-mail-line me-2 align-middle fs-14 text-muted"></i>{idx.email}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1"> <span
                                                        className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                        <img src={idx.companyLogo} alt="" />
                                                    </span> </div>
                                                    <div>{idx.company}</div>
                                                </div>
                                            </td>
                                            <td> {idx.score} </td>
                                            <td> <SpkBadge variant={`${idx.bgColor}-transparent`}>{idx.priority}</SpkBadge>
                                            </td>
                                            <td>
                                                <div> <span className="d-block"><i
                                                    className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{idx.phone}</span>
                                                </div>
                                            </td>
                                            <td> <span className="badge bg-primary-transparent">{idx.tags}</span> </td>
                                            <td> {idx.source} </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Link data-bs-toggle="offcanvas" onClick={() => handleModalOpen('offcanvas')} to="#offcanvasExample" role="button" aria-controls="offcanvasExample"
                                                        className="btn btn-sm btn-primary-light btn-icon">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <SpkButton Buttonvariant="" Customclass="btn btn-sm btn-info-light btn-icon">
                                                        <i className="ri-pencil-line"></i>
                                                    </SpkButton>
                                                    <SpkButton Size="sm" Buttonvariant="" onClickfunc={() => handleRemove(idx.id)} Customclass="btn-secondary-light btn-icon contact-delete">
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
                                    Showing {contactsList.length} Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
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
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </div>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: Contact Details Offcanvas --> */}
            <Offcanvas className="offcanvas-end" placement="end" tabIndex={-1} id="offcanvasExample" show={modals["offcanvas"] || false} onHide={() => handleModalClose('offcanvas')}
                aria-labelledby="offcanvasExample">
                <Offcanvas.Body className="p-0">
                    <div
                        className="d-flex align-items-top bg-primary-transparent p-3 primary-dash-border m-2 main-profile-cover position-relative">
                        <span className="avatar avatar-xxl p-1 bg-white avatar-rounded me-3 flex-shrink-0">
                            <img src={face2} alt="" />
                        </span>
                        <div className="flex-fill main-profile-info">
                            <div className="d-flex align-items-start justify-content-between">
                                <h6 className="fw-medium mb-1">Ethan Thompson
                                </h6> <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close crm-contact-close-btn p-0" onClickfunc={() => handleModalClose('offcanvas')}
                                    Buttondismiss="offcanvas" Buttonlabel="Close"></SpkButton>
                            </div>
                            <p className="mb-2 text-muted fs-12">Chief Financial Officer (CFO)</p>
                            <div className="d-flex gap-2 fs-15 mt-1">
                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-danger-light">
                                    <i className="ri-phone-line"></i>
                                </Link>
                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-info-light">
                                    <i className="ri-mail-line"></i>
                                </Link>
                                <Link to="#!" className="btn btn-icon btn-sm rounded-pill btn-secondary-light">
                                    <i className="ri-message-line"></i>
                                </Link>
                                <SpkDropdown Togglevariant="" Menuclass="dropdown-menu-end" Icon={true} IconClass="ri-more-fill" Customtoggleclass="btn btn-icon btn-sm rounded-pill btn-warning-light no-caret">
                                    <li><Link className="dropdown-item" to="#!">Size </Link></li>
                                    <li><Link className="dropdown-item" to="#!">Deals</Link></li>
                                    <li><Link className="dropdown-item" to="#!">Status</Link></li>
                                </SpkDropdown>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-3 gap-3 p-1 py-0 border-bottom border-block-end-dashed">
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-shake-hands-line p-2 fs-5 rounded-circle lh-1 bg-primary-transparent"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">253</p>
                            <p className="mb-0 text-muted">Deals</p>
                        </div>
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-money-dollar-circle-line p-2 fs-5 rounded-circle lh-1 bg-secondary-transparent"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">$12k</p>
                            <p className="mb-0 text-muted">Contributions</p>
                        </div>
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-thumb-up-line p-2 fs-5 rounded-circle lh-1 bg-warning-transparent"></i>
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
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-danger-transparent">
                                        <i className="ri-mail-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div> ethanthompson@example.com
                                    <SpkTooltips title="Copy">
                                        <span className="text-muted lh-1 rounded-circle ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Copy">
                                            <i className="ri-file-copy-fill"></i>
                                        </span>
                                    </SpkTooltips>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-info-transparent">
                                        <i className="ri-phone-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div> +(333) 555-1234 </div>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-secondary-transparent">
                                        <i className="ri-map-pin-line align-middle fs-14"></i>
                                    </span>
                                </div>
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
                            <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn-icon btn-wave waves-effect waves-light mb-0">
                                <i className="ri-facebook-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Size="sm" Buttonvariant="secondary-light" Customclass="btn-icon btn-wave waves-effect waves-light mb-0">
                                <i className="ri-twitter-x-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Size="sm" Buttonvariant="info-light" Customclass="btn-icon btn-wave waves-effect waves-light mb-0">
                                <i className="ri-instagram-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Size="sm" Buttonvariant="warning-light" Customclass="btn-icon btn-wave waves-effect waves-light mb-0">
                                <i className="ri-github-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Size="sm" Buttonvariant="danger-light" Customclass="btn-icon  btn-wave waves-effect waves-light mb-0">
                                <i className="ri-youtube-line fw-medium"></i>
                            </SpkButton>
                        </div>
                    </div>
                    <div
                        className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 me-4 fw-medium">Tags :</p>
                        <div>
                            <SpkBadge variant="primary-transparent me-1">New Lead</SpkBadge>
                            <SpkBadge variant="primary-transparent">Others</SpkBadge>
                        </div>
                    </div>
                    <div className="p-3">
                        <p className="fs-14 mb-2 fw-medium">Relationship Manager :
                            <Link className="bg-primary-transparent fs-12 p-1 pe-2 rounded-1 mb-0 float-end"
                                to="#!">
                                <i className="ri-add-line me-1 align-middle"></i>Add
                                Manager</Link>
                        </p>
                        <div className="avatar-list-stacked">
                            <span className="avatar avatar-sm avatar-rounded">
                                <img src={face2} alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded">
                                <img src={face8} alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded">
                                <img src={face2} alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded">
                                <img src={face10} alt="img" />
                            </span>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            {/* <!-- End:: Contact Details Offcanvas --> */}

            {/* <!-- Start:: Create Contact --> */}
            <Modal centered show={modals["modal"] || false} onHide={() => handleModalClose('modal')} className="modal fade" id="create-contact" tabIndex={-1} aria-hidden="true">
                <Modal.Header className="modal-header" closeButton>
                    <h6 className="modal-title">Create Contact</h6>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <div className="row gy-3">
                        <Col xl={12}>
                            <div className="mb-0 text-center">
                                <span className="avatar avatar-xxl avatar-rounded">
                                    <img src={selectedImage || ''} alt="" id="profile-img" />
                                    <SpkBadge Customclass="badge rounded-pill bg-primary avatar-badge" Onclickfun={openFileInput}>
                                        <input type="file" name="photo" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }}
                                            className="position-absolute w-100 h-100 op-0" id="profile-change" />
                                        <i className="fe fe-camera"></i>
                                    </SpkBadge>
                                </span>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="deal-title" className="form-label">Deal Title</Form.Label>
                            <Form.Control type="text" className="form-control" id="deal-title"
                                placeholder="Deal Title" />
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="contact-lead-score" className="form-label">Lead Score</Form.Label>
                            <Form.Control type="number" className="form-control" id="contact-lead-score"
                                placeholder="Lead Score" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="contact-mail" className="form-label">Email</Form.Label>
                            <Form.Control type="email" className="form-control" id="contact-mail"
                                placeholder="Enter Email" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="contact-phone" className="form-label">Phone No</Form.Label>
                            <Form.Control type="tel" className="form-control" id="contact-phone"
                                placeholder="Enter Phone Number" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="company-name" className="form-label">Company Name</Form.Label>
                            <Form.Control type="text" className="form-control" id="company-name"
                                placeholder="Company Name" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="form-label">Lead Source</Form.Label>
                            <SpkSelect name="colors" option={leads} mainClass="basic-multi-select"
                                menuplacement='auto' classNameprefix="Select2"
                            />
                        </Col>
                        <Col xl={6}>
                            <Form.Label className="form-label">Last Contacted</Form.Label>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-muted"> <i
                                        className="ri-calendar-line"></i> </div>
                                    <SpkDatepickr placeholderText="Choose date and time" className="form-control" selected={dates["LastContacted"] ? new Date(dates["LastContacted"]) : null} onChange={(date: Date | null) => handleDateChange("LastContacted", date)} dateFormat="yy/MM/dd h:mm aa" showTimeInput />
                                </div>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <Form.Label className="form-label">Tags</Form.Label>
                            <SpkSelect name="colors" option={Tags} multi mainClass="basic-multi-select choices__item"
                                menuplacement='top' classNameprefix="Select2" placeholder="Select Tag"
                            />
                        </Col>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <SpkButton Buttontype="button" Buttonvariant="light" Customclass="btn" Buttondismiss="modal" onClickfunc={() => handleModalClose('modal')}>Cancel</SpkButton>
                    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn">Create Contact</SpkButton>
                </Modal.Footer>
            </Modal>
            {/* <!-- End:: Create Contact --> */}
        </Fragment>
    );
};

export default Contacts;