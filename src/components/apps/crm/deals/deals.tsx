import { Fragment, useEffect, useRef, useState, type ChangeEvent, } from "react";
import { Card, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { contactInitiatedLeads, dealFinalizedLeads, discoveredLeads, needsIdentifiedLeads, negotiationLeads, qualifiedLeads } from "../../../../shared/data/apps/crm/dealsdata";
import Spkdeals from "../../../../shared/@spk-reusable-components/reusable-apps/spk-dealscard";
import SpkDatepickr from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import dragula from "dragula";
import face9 from '../../../../assets/images/faces/9.jpg'


const Deals = () => {
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

    const [deal, setDeal] = useState(false);

    const handleClose = () => setDeal(false);
    const handleShow = () => setDeal(true);

    const containerRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const containers = containerRefs.current.filter(
            (el): el is HTMLElement => el !== null
        );

        if (containers.length < 2) return;

        const drake = dragula(containers);

        return () => {
            drake.destroy();
        };
    }, []);

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
            <Seo title="Crm-Deals" />

            <Pageheader title="Apps" subtitle="CRM" currentpage="Deals" activepage="Deals" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="fw-medium fs-16 me-1">Deals</span>
                                    <SpkBadge variant="primary-transparent" Customclass="align-middle">16 Active Deals</SpkBadge>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    <SpkButton Customclass="btn btn-primary btn-sm" Buttontoggle="modal" onClickfunc={handleShow}
                                        Buttontarget="#create-contact">
                                        <i className="ri-add-line me-1 fw-medium align-middle"></i>New Deal</SpkButton>
                                    <SpkButton Buttonvariant="secondary" Size="sm" Customclass="btn">Export As CSV</SpkButton>
                                    <SpkDropdown Togglevariant="" Toggletext="Sort By" Arrowicon={true} Customtoggleclass="btn btn-warning btn-sm btn-wave waves-effect waves-light no-caret">
                                        <li><a className="dropdown-item" href="#!">Newest</a></li>
                                        <li><a className="dropdown-item" href="#!">Date Added</a></li>
                                        <li><a className="dropdown-item" href="#!">A - Z</a></li>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row className="gy-4 mb-4">
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <div className="leads-discoveredcontainer" >
                        <div className="d-flex align-items-top flex-wrap justify-content-between m-1">
                            <div>
                                <h6 className="fw-medium mb-0"><i
                                    className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-primary-transparent text-primary me-2 align-middle"></i>Leads
                                    Discovered</h6>
                            </div>
                            <div className="ms-auto text-center"> <span className="badge bg-primary">24</span>
                            </div>
                        </div>
                        <div ref={(el: HTMLElement | null) => (containerRefs.current[0] = el)} id="leads-discovered" className="mt-3 pb-3">
                            {discoveredLeads.map((idx, index) => (
                                <Spkdeals obj={idx} key={index} />
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <div className="leads-qualifiedcontainer" >
                        <div className="d-flex align-items-top flex-wrap justify-content-between m-1">
                            <div>
                                <h6 className="fw-medium mb-0"><i
                                    className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-secondary-transparent text-secondary me-2 align-middle"></i>Qualified
                                    Leads</h6>
                            </div>
                            <div> <span className=" badge bg-secondary text-fixed-white">17</span> </div>
                        </div>
                        <div ref={(el: HTMLElement | null) => (containerRefs.current[1] = el)} id="leads-qualified" className="mt-3 pb-3" >
                            {qualifiedLeads.map((idx, index) => (
                                <Spkdeals obj={idx} key={index} />
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <div className="contact-initiatedcontainer" >
                        <div className="d-flex align-items-top flex-wrap justify-content-between m-1">
                            <div>
                                <h6 className="fw-medium mb-0"><i
                                    className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-danger-transparent text-danger me-2 align-middle"></i>Contact
                                    Initiated</h6>
                            </div>
                            <div> <span className=" badge bg-danger text-fixed-white">5</span> </div>
                        </div>
                        <div  ref={(el: HTMLElement | null) => (containerRefs.current[2] = el)} id="contact-initiated" className="mt-3 pb-3">
                            {contactInitiatedLeads.map((idx, index) => (
                                <Spkdeals obj={idx} key={index} />
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <div className="needs-identifiedcontainer">
                        <div className="d-flex align-items-top flex-wrap justify-content-between m-1">
                            <div>
                                <h6 className="fw-medium mb-0"><i
                                    className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-warning-transparent text-warning me-2 align-middle"></i>Needs
                                    Identified</h6>
                            </div>
                            <div> <span className=" badge bg-warning text-fixed-white">43</span> </div>
                        </div>
                        <div ref={(el: HTMLElement | null) => (containerRefs.current[3] = el)} id="needs-identified" className="mt-3 pb-3">
                            {needsIdentifiedLeads.map((idx, index) => (
                                <Spkdeals obj={idx} key={index} />
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <div className="negotiationcontainer" >
                        <div className="d-flex align-items-top flex-wrap justify-content-between m-1">
                            <div>
                                <h6 className="fw-medium mb-0"><i
                                    className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-info-transparent text-info me-2 align-middle"></i>Negotiation
                                </h6>
                            </div>
                            <div> <span className="badge bg-info text-fixed-white">15</span> </div>
                        </div>
                        <div  ref={(el: HTMLElement | null) => (containerRefs.current[4] = el)} id="negotiation" className="mt-3 pb-3">
                            {negotiationLeads.map((idx, index) => (
                                <Spkdeals obj={idx} key={index} />
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xxl={2} xl={3} lg={4} sm={6}>
                    <div className="deal-finalizedcontainer" >
                        <div className="d-flex align-items-top flex-wrap justify-content-between m-1">
                            <div>
                                <h6 className="fw-medium mb-0"><i
                                    className="ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-orange-transparent text-orange me-2 align-middle"></i>Deals
                                    Finalized</h6>
                            </div>
                            <div> <span className=" badge bg-orange text-fixed-white">127</span> </div>
                        </div>
                        <div  ref={(el: HTMLElement | null) => (containerRefs.current[5] = el)} id="deal-finalized" className="mt-3 pb-3">
                            {dealFinalizedLeads.map((idx, index) => (
                                <Spkdeals obj={idx} key={index} />
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start:: New Deal --> */}
            <Modal centered show={deal} onHide={handleClose} className="modal fade" id="create-contact" tabIndex={-1} aria-hidden="false">
                <Modal.Header closeButton className="">
                    <h6 className="modal-title">New Deal</h6>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <Row className="gy-3">
                        <Col xl={12}>
                            <div className="mb-0 text-center">
                                <span className="avatar avatar-xxl avatar-rounded">
                                    <img src={selectedImage || ''} alt="" id="profile-img" />
                                    <SpkBadge variant="primary" Customclass="rounded-pill avatar-badge" Onclickfun={openFileInput}>
                                        <input type="file" name="photo" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }}
                                            className="position-absolute w-100 h-100 op-0" id="profile-change" />
                                        <i className="fe fe-camera"></i>
                                    </SpkBadge>
                                </span>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="deal-name" className="form-label">Contact Name</Form.Label>
                            <Form.Control type="text" id="deal-name"
                                placeholder="Contact Name" />
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="deal-lead-score" className="form-label">Deal Value</Form.Label>
                            <Form.Control type="number" id="deal-lead-score"
                                placeholder="Deal Value" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="company-name" className="form-label">Company Name</Form.Label>
                            <Form.Control type="text" id="company-name"
                                placeholder="Company Name" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="form-label">Last Contacted</Form.Label>
                            <InputGroup className="custom-inputgroupfield">
                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                </div>
                                <SpkDatepickr placeholderText="Choose date and time" className="form-control" dateFormat="yy/MM/dd h:mm aa" selected={dates["LastContacted"] ? new Date(dates["LastContacted"]) : null} onChange={(date: Date | null) => handleDateChange("LastContacted", date)} showTimeInput />
                            </InputGroup>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="">
                    <SpkButton Buttontype="button" Buttonvariant="light" Customclass="btn" Buttondismiss="modal" onClickfunc={handleClose}>Cancel</SpkButton>
                    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn">Create Deal</SpkButton>
                </Modal.Footer>
            </Modal>
            {/* <!-- End:: New Deal --> */}
        </Fragment>
    );
};

export default Deals;