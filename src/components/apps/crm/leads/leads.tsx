import React, { Fragment, useRef, useState, type ChangeEvent, } from "react";
import { Card, Col, Form, Modal, Pagination, Row } from "react-bootstrap";
import { ContactLeads, Leadssource, Leadsstatus, Tags, type contactleadsType } from "../../../../shared/data/apps/crm/leadsdata";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import face9 from '../../../../assets/images/faces/9.jpg'


const Leads = () => {
    const [contactsList, setContactsList] = useState(ContactLeads);

    const handleRemove = (id: number) => {
        const list = contactsList.filter((idx: contactleadsType) => idx.id !== id)
        setContactsList(list);
    }

    const [leads, setLeads] = useState(false);
    const handleClose = () => setLeads(false);
    const handleShow = () => setLeads(true);

    const [selectedItems, setSelectedItems] = useState<any>([]);


    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedItems(contactsList.map((idx: { id: number; }) => idx.id));
        } else {
            setSelectedItems([]);
        }
    };

    const [selectedImage, setSelectedImage] = useState(face9);

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
    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}
            <Seo title={"Leads"} />
            <Pageheader title="Apps" subtitle="CRM" currentpage="Leads" activepage="Leads" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <div className="card-title">
                                Leads
                                <SpkBadge variant="light" Customclass="text-default rounded ms-1 fs-12 align-middle">30</SpkBadge>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkButton Size="sm" Customclass="btn" Buttonvariant="primary" Buttontoggle="modal" onClickfunc={handleShow}
                                    Buttontarget="#create-contact"><i
                                        className="ri-add-line me-1 fw-medium align-middle"></i>Create Lead</SpkButton>
                                <SpkButton Size="sm" Buttonvariant="secondary-light" Customclass="btn">Export As CSV</SpkButton>
                                <SpkDropdown Togglevariant="" Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By"
                                    Arrowicon={true}>
                                    <li><a className="dropdown-item" href="#!">Newest</a></li>
                                    <li><a className="dropdown-item" href="#!">Date Added</a></li>
                                    <li><a className="dropdown-item" href="#!">A - Z</a></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap" showCheckbox={true} onChange={handleSelectAll} checked={selectedItems.length === contactsList.length}
                                    header={[{ title: 'Contact Name' }, { title: 'Company' }, { title: 'Email' }, { title: 'Lead Status' }, { title: 'Phone' }, { title: 'Lead Source' }, { title: 'Owner' }, { title: 'Last Contracted' }, { title: 'Actions' }]} >
                                    {contactsList.map((idx) => (
                                        <tr className="crm-contact leads-list" key={idx.id}>
                                            <td className="leads-checkbox">
                                                <Form.Check className="" type="checkbox" id="checkboxNoLabel01" value=""
                                                    aria-label="..." />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src={idx.avatar} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-medium">{idx.name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                            <img src={idx.companyLogo} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>{idx.company}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block mb-1">
                                                        <i className="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block"></i>
                                                        {idx.email}
                                                    </span>
                                                </div>
                                            </td>
                                            <td> <SpkBadge variant={`${idx.bgColor}-transparent`}>{idx.status}</SpkBadge> </td>
                                            <td>
                                                <div>
                                                    <span className="d-block">
                                                        <i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>
                                                        {idx.phone}
                                                    </span>
                                                </div>
                                            </td>
                                            <td> {idx.source}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src={idx.owner} alt="Avatar" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-medium">{idx.ownername}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="fw-medium">{idx.date}</td>
                                            <td>
                                                <div className="btn-list">
                                                    <a className="btn btn-sm btn-primary-light btn-icon">
                                                        <i className="ri-eye-line"></i>
                                                    </a>
                                                    <SpkButton Size="sm" Buttonvariant="info-light" Customclass="btn btn-icon">
                                                        <i className="ri-pencil-line"></i>
                                                    </SpkButton>
                                                    <SpkButton Size="sm" Buttonvariant="secondary-light" Customclass="btn btn-icon contact-delete" onClickfunc={() => handleRemove(idx.id)}>
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
                                        <Pagination className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#!">
                                                    Prev
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link"
                                                href="#!">1</a></li>
                                            <li className="page-item"><a className="page-link"
                                                href="#!">2</a></li>
                                            <li className="page-item">
                                                <a className="page-link text-primary" href="#!">
                                                    next
                                                </a>
                                            </li>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: Create Contact --> */}
            <Modal className="modal fade" id="create-contact" centered tabIndex={-1} aria-hidden="false" show={leads} onHide={handleClose} >
                <Modal.Header closeButton className="modal-header">
                    <h6 className="modal-title">Create Lead</h6>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <Row className="gy-3">
                        <Col xl={12}>
                            <div className="mb-0 text-center">
                                <span className="avatar avatar-xxl avatar-rounded">
                                    <img src={selectedImage || ''} alt="" id="profile-img" />
                                    <SpkBadge variant="primary" Pill={true} Customclass="avatar-badge" Onclickfun={openFileInput}>
                                        <input type="file" name="photo" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }}
                                            className="position-absolute w-100 h-100 op-0" id="profile-change" />
                                        <i className="fe fe-camera"></i>
                                    </SpkBadge>
                                </span>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="contact-name" className="form-label">Contact Name</Form.Label>
                            <Form.Control type="text" className="form-control" id="contact-name"
                                placeholder="Contact Name" />
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
                            <Form.Label className="form-label">Lead Status</Form.Label>
                            <SpkSelect name="colors" option={Leadsstatus} placeholder="Select Status"
                                menuplacement='auto' classNameprefix="Select2"
                            />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="form-label">Lead Source</Form.Label>
                            <SpkSelect name="colors" option={Leadssource}
                                menuplacement='auto' classNameprefix="Select2" defaultvalue={[Leadssource[0]]}
                            />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="form-label">Tags</Form.Label>
                            <SpkSelect multi name="colors" option={Tags}
                                menuplacement='top' classNameprefix="Select2" placeholder="Select Tag"
                            />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <SpkButton Buttontype="button" Buttonvariant="light" Customclass="btn" Buttondismiss="modal" onClickfunc={handleClose} >Cancel</SpkButton>
                    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn">Create Contact</SpkButton>
                </Modal.Footer>
            </Modal>
            {/* <!-- End:: Create Contact --> */}
        </Fragment>
    );
};

export default Leads;