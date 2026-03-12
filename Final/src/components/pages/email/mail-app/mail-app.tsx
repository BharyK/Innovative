import { Fragment, useEffect, useState } from "react";
import { Col, Dropdown, Form, Modal, Offcanvas, Row } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkSunEditor from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-suneditor";
import { Link } from "react-router-dom";
import { EmailsData, Labels, Maildata, MailTypes, Recipients } from "../../../../shared/data/pages/email/maildata";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkTooltips from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import face4 from '../../../../assets/images/faces/4.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import media67 from '../../../../assets/images/media/media-67.jpg';
import media68 from '../../../../assets/images/media/media-68.jpg';
import media69 from '../../../../assets/images/media/media-69.jpg';
import media70 from '../../../../assets/images/media/media-70.jpg';

const MailApp = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [mailshow, setMailshow] = useState(false);

    const handleClose1 = () => setMailshow(false);
    const Mailshow = () => setMailshow(true);

    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleVisibility = () => {
        if (isMobile) {
            setIsVisible((prev) => !prev);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();

        window.addEventListener('resize', handleResize);


        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Mail App"} />
            <Pageheader title="Pages" subtitle='Email' currentpage="Mail App" activepage="Mail App" />
            {/* <!-- Page Header Close --> */}

            <div className="main-mail-container mb-2 gap-2 d-flex">
                <div className="mail-navigation border" onClick={toggleVisibility} style={{ display: isMobile ? (isVisible ? 'block' : 'none') : 'block', }}>
                    <div className="d-grid align-items-top p-3 border-bottom">
                        <SpkButton Buttonvariant="secondary" Customclass="btn d-flex align-items-center justify-content-center" onClickfunc={Mailshow} data-bs-toggle="modal" data-bs-target="#mail-Compose">
                            <i className="ri-add-circle-line fs-16 align-middle me-1"></i>Compose Mail
                        </SpkButton>
                        <Modal show={mailshow} onHide={handleClose1} className="modal-lg fade" id="mail-Compose" tabIndex={-1} aria-labelledby="mail-ComposeLabel">
                            <div className="modal-content">
                                <Modal.Header>
                                    <h6 className="modal-title" id="mail-ComposeLabel">Compose Mail</h6>
                                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal" onClickfunc={handleClose1}
                                        aria-label="Close"></SpkButton>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row className="">
                                        <Col xl={6} className=" mb-2">
                                            <Form.Label htmlFor="fromMail" className="">From<sup><i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
                                            <Form.Control type="email" className="" id="fromMail" defaultValue="henrymilo2345@gmail.com" />
                                        </Col>
                                        <Col xl={6} className=" mb-2">
                                            <Form.Label htmlFor="toMail" className="">To<sup><i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
                                            <SpkSelect id="blog-tags" multi name="blog-tags" option={Maildata} mainClass="block w-full text-[0.875rem] !rounded-md"
                                                menuplacement='auto' classNameprefix="Select2" placeholder="Select Category" defaultvalue={[Maildata[0]]}
                                            />
                                        </Col>
                                        <Col xl={6} className=" mb-2">
                                            <Form.Label htmlFor="mailCC" className=" text-dark fw-medium">Cc</Form.Label>
                                            <Form.Control type="email" className="" id="mailCC" />
                                        </Col>
                                        <Col xl={6} className=" mb-2">
                                            <Form.Label htmlFor="mailBcc" className=" text-dark fw-medium">Bcc</Form.Label>
                                            <Form.Control type="email" className="" id="mailBcc" />
                                        </Col>
                                        <Col xl={12} className="mb-2">
                                            <Form.Label htmlFor="Subject" className="">Subject</Form.Label>
                                            <Form.Control type="text" className="" id="Subject" placeholder="Subject" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label className="col-form-label">Content :</Form.Label>
                                            <div className="mail-compose">
                                                <div id="mail-compose-editor">
                                                    <SpkSunEditor setoptions={{
                                                        buttonList: [
                                                            ["undo", "redo"],
                                                            ["font", "fontSize"],
                                                            [
                                                                "bold",
                                                                "underline",
                                                                "italic",
                                                                "strike",
                                                                "subscript",
                                                                "superscript"
                                                            ],
                                                            ["fontColor", "hiliteColor"],
                                                            ["align", "list", "lineHeight"],
                                                            ["outdent", "indent"],
                                                            ["table", "link", "image", "video"],
                                                            ["preview", "print"],
                                                            ["removeFormat"]
                                                        ],
                                                        defaultTag: "div",
                                                        minHeight: "200px",
                                                        showPathLabel: false,
                                                        font: ["Arial", "Comic Sans MS", "Courier New", "Impact"],
                                                        defaultStyle: 'font-family: Arial; font-size: 16px;',
                                                    }} height={'200px'} /></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer className="modal-footer">
                                    <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose1}
                                        Buttondismiss="modal">Cancel</SpkButton>
                                    <SpkButton Buttonvariant="primary" Buttontype="button">Send</SpkButton>
                                </Modal.Footer>
                            </div>
                        </Modal>

                    </div>
                    <div className="d-flex gap-3 align-items-center p-3 bg-light">
                        <div>
                            <span className="avatar avatar-md online avatar-rounded">
                                <img src={face9} alt="" />
                            </span>
                        </div>
                        <div>
                            <p className="fw-semibold fs-15 mb-0">Amelia Turner</p>
                            <p className="fs-13 mb-0">ameliat1992@gmail.com</p>
                        </div>
                    </div>
                    <SimpleBar>
                        <ul className="list-unstyled mail-main-nav" id="mail-main-nav">
                            <li className="px-0 pt-0">
                                <span className="fs-11 text-muted op-7 fw-medium">MAILS</span>
                            </li>
                            <li className="active mail-type">
                                <Link to="#!">
                                    <div className="d-flex align-items-center">
                                        <span className="me-2 lh-1">
                                            <i className="ri-inbox-archive-line align-middle fs-14"></i>
                                        </span>
                                        <span className="flex-fill text-nowrap">
                                            All Mails
                                        </span>
                                        <span className="badge bg-primary rounded-pill">6,446</span>
                                    </div>
                                </Link>
                            </li>
                            {MailTypes.map((idx) => (
                                <li className="mail-type" key={idx.id}>
                                    <Link to="#!">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i className={`ri-${idx.iconClass} align-middle fs-14`}></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                {idx.label}
                                            </span>
                                            {idx.badge ? (<span className={`badge bg-${idx.badgeClass} rounded-pill`}>{idx.badge}</span>) : ''}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                            <li className="px-0">
                                <span className="fs-11 text-muted op-7 fw-medium">SETTINGS</span>
                            </li>
                            <li>
                                <Link to="#!">
                                    <div className="d-flex align-items-center">
                                        <span className="me-2 lh-1">
                                            <i className="ri-settings-3-line align-middle fs-14"></i>
                                        </span>
                                        <span className="flex-fill text-nowrap">
                                            Settings
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="px-0">
                                <span className="fs-11 text-muted op-7 fw-medium">LABELS</span>
                            </li>
                            {Labels.map((idx) => (
                                <li key={idx.id}>
                                    <Link to="#!">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i className={`ri-circle-fill align-middle fs-10 fw-medium text-${idx.iconClass}`}></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                {idx.name}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                            <li className="px-0">
                                <span className="fs-11 text-muted op-7 fw-medium">ONLINE USERS</span>
                            </li>
                            <li>
                                <Link to="#!">
                                    <div className="d-flex align-items-top lh-1">
                                        <div className="me-2">
                                            <span className="avatar avatar-sm online avatar-rounded">
                                                <img src={face4} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-default fw-medium mb-1">Angelica</p>
                                            <p className="fs-12 text-muted mb-0">Hello this is angelica.</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#!">
                                    <div className="d-flex align-items-top lh-1">
                                        <div className="me-2">
                                            <span className="avatar avatar-sm online avatar-rounded">
                                                <img src={face6} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-default fw-medium mb-1">Rexha</p>
                                            <p className="fs-12 text-muted mb-0">Thanks for sharing file &#128512;.</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </SimpleBar>
                </div>
                <div className="total-mails border" style={{ display: isMobile ? (isVisible ? 'none' : 'block') : 'block', }}>
                    <div className="p-3 d-flex align-items-center border-bottom flex-wrap gap-2">
                        <div className="me-3 ps-1">
                            <input className="form-check-input" type="checkbox" id="checkAll" value="" aria-label="..." />
                        </div>
                        <div className="flex-fill">
                            <h6 className="fw-medium mb-0">All Mails</h6>
                        </div>
                        <div className="d-flex gap-2">
                            <div className="input-group">
                                <input type="text" className="form-control shadow-none" placeholder="Search Email" aria-describedby="button-addon" />
                                <SpkButton Buttonvariant="primary" Customclass="btn" Buttontype="button" Id="button-addon" ><i className="ri-search-line"></i></SpkButton>
                            </div>
                            <SpkButton Buttonvariant="light" Customclass="btn btn-icon me-1 d-lg-none d-block total-mails-close" onClickfunc={toggleVisibility}>
                                <i className="ri-close-line"></i>
                            </SpkButton>
                            <SpkDropdown toggleas='a' Menuclass='mt-1' Customtoggleclass="btn btn-icon btn-light btn-wave no-caret" Icon={true} IconClass="ti ti-dots-vertical">
                                <li><Dropdown.Item href="#!">Recent</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Unread</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Mark All Read</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Spam</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Delete All</Dropdown.Item></li>
                            </SpkDropdown>
                        </div>
                    </div>
                    <SimpleBar className="mail-messages" id="mail-messages">
                        <div className="table-responsive mail-messages-container">
                            <SpkTables tableClass="table text-nowrap table-hover">
                                {EmailsData.map((idx) => (
                                    <tr key={idx.id} className={`${idx.selected ? "mail-selected" : ''}`}>
                                        <td className={idx.borderClass}>
                                            <input className="form-check-input mail-check-input" type="checkbox" id="mail1" defaultChecked={idx.selected} aria-label="..." />
                                        </td>
                                        <td className={idx.borderClass}>
                                            <div className="d-flex align-items-center gap-4">
                                                <SpkTooltips placement="top" title="Star">
                                                    <Link className={`mail-starred ${idx.starred}`} to="#!" >
                                                        <i className="ti ti-star-filled"></i>
                                                    </Link>
                                                </SpkTooltips>
                                                <SpkTooltips placement="top" title="Mark As Important">
                                                    <Link className="mail-important" to="#!">
                                                        <i className="ti ti-bookmark"></i>
                                                    </Link>
                                                </SpkTooltips>
                                            </div>
                                        </td>
                                        <td className={idx.borderClass}>
                                            <div className="d-flex align-items-center gap-2 mail-user-container" onClick={handleShow} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm avatar-rounded mail-msg-avatar">
                                                        <img src={idx.avatar} alt="" />
                                                    </span>
                                                </div>
                                                <div>{idx.sender}</div>
                                            </div>
                                        </td>
                                        <td className={idx.borderClass}>
                                            <div className="mail-msg" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleShow}>
                                                <span className="d-block mb-0 fw-medium text-truncate w-75">{idx.subject}{idx.badge ? (<span className={`badge bg-${idx.color} ms-2`}>{idx.badge}</span>) : ''}</span>

                                                <div className="text-muted text-wrap text-truncate mail-msg-content d-block">{idx.content}
                                                </div>
                                            </div>
                                        </td>
                                        <td className={idx.borderClass}><span className="mail-received-time">{idx.receivedTime}</span></td>
                                    </tr>
                                ))}
                            </SpkTables>
                        </div>
                    </SimpleBar>
                </div>
                <div className="mail-recepients border">
                    <div className="p-3 border-bottom">
                        <SpkTooltips placement="top" title="Add Recepient">
                            <SpkButton Buttonvariant="light" Customclass="btn btn-icon rounded-pill"><i className="ri-add-line"></i></SpkButton>
                        </SpkTooltips>
                    </div>
                    <SimpleBar className="p-3 d-flex flex-column align-items-center total-mail-recepients" id="mail-recepients">
                        {Recipients.map((idx) => (
                            <Link to="#!" className="mail-recepeint-person" key={idx.id}>
                                <span className={`avatar ${idx.status} avatar-rounded`}>
                                    <SpkTooltips placement="top" title={idx.name}>
                                        <img src={idx.image} alt="" />
                                    </SpkTooltips>
                                </span>
                            </Link>
                        ))}
                    </SimpleBar>
                </div>
            </div>


            {/* <!-- Start::mail information offcanvas --> */}
            <Offcanvas className=" offcanvas-end mail-info-offcanvas" tabIndex={-1} id="offcanvasRight" placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Body className=" p-0">
                    <div className="mails-information">
                        <div className="mail-info-header d-flex flex-wrap gap-2 align-items-center">
                            <div className="me-1">
                                <span className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar">
                                    <img src={face12} alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <h6 className="mb-0 fw-medium">Benjamin</h6>
                                <span className="text-muted fs-12">benjamin2194@gmail.com</span>
                            </div>
                            <div className="mail-action-icons">
                                <SpkTooltips title="Starred" placement="left">
                                    <SpkButton Buttonvariant="outline-light" Customclass="btn btn-icon border d-inline-flex align-items-center justify-content-center">
                                        <i className="ri-star-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkTooltips title="Archive" placement="left">
                                    <SpkButton Buttonvariant="outline-light" Customclass="btn btn-icon border d-inline-flex align-items-center justify-content-center ms-1" >
                                        <i className="ri-inbox-archive-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkTooltips title="Report spam" placement="left">
                                    <SpkButton Buttonvariant="outline-light" Customclass="btn btn-icon border d-inline-flex align-items-center justify-content-center ms-1">
                                        <i className="ri-spam-2-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkTooltips title="Delete" placement="left">
                                    <SpkButton Buttonvariant="outline-light" Customclass="btn btn-icon border d-inline-flex align-items-center justify-content-center ms-1">
                                        <i className="ri-delete-bin-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkTooltips title="Reply" placement="right">
                                    <SpkButton Buttonvariant="outline-light" Customclass="btn btn-icon border d-inline-flex align-items-center justify-content-center ms-1">
                                        <i className="ri-reply-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn btn-icon border ms-1 d-inline-flex align-items-center justify-content-center" data-bs-dismiss="offcanvas" onClickfunc={handleClose} aria-label="Close">
                                    <i className="ri-close-line"></i>
                                </SpkButton>
                            </div>
                            <div className="responsive-mail-action-icons">
                                <SpkDropdown Togglevariant="light" Customtoggleclass="btn btn-icon btn-wave waves-light waves-effect waves-light no-caret" Icon={true} IconClass="ti ti-dots-vertical">
                                    <li><Dropdown.Item href="#!"><i className="ri-star-line me-1 align-middle d-inline-block"></i>Starred</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!"><i className="ri-inbox-archive-line me-1 align-middle d-inline-block"></i>Archive</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-1 align-middle d-inline-block"></i>Report Spam</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!"><i className="ri-reply-line me-1 align-middle d-inline-block"></i>Reply</Dropdown.Item></li>
                                </SpkDropdown>
                                <SpkButton Buttonvariant="light" Customclass="btn btn-icon ms-1 close-button" data-bs-dismiss="offcanvas" aria-label="Close" onClickfunc={handleClose}>
                                    <i className="ri-close-line"></i>
                                </SpkButton>
                            </div>
                        </div>
                        <SimpleBar className="mail-info-body p-4" id="mail-info-body">
                            <div className="d-sm-flex d-block align-items-center justify-content-between mb-4">
                                <div>
                                    <p className="fs-20 fw-medium mb-0">Strategic Insights Webinar: Navigating Future Trends.</p>
                                </div>
                                <div className="float-end">
                                    <span className="me-2 fs-12 text-muted">Oct-22-2024,03:05PM</span>
                                </div>
                            </div>
                            <div className="main-mail-content mb-4">
                                <p className="fs-14 fw-medium mb-4">Greetings Mr Jack &#128400;,</p>
                                <p className="mb-2 ">We're excited to invite you to our upcoming webinar, "Navigating Future Trends," where industry experts will share strategic insights to help you stay ahead in an ever-evolving landscape. Join us on [Date] at [Time] for an engaging session that promises to provide actionable knowledge and valuable perspectives.</p>
                                <span className="d-block  fw-meidum">Key Highlights :</span>
                                <ul className=" my-3">
                                    <li className="mb-2">Expert analysis of emerging trends</li>
                                    <li className="mb-2">Practical strategies for staying competitive</li>
                                    <li className="mb-2">Q&A session for personalized insights</li>
                                </ul>
                                <p className="mb-2 ">Earth has a diameter of roughly 8,000 miles (13,000 kilometers) and is mostly round because gravity generally pulls matter into a ball. But the spin of our home planet causes it to be squashed at its poles and swollen at the equator, making the true shape of the Earth an "oblate spheroid.".</p>
                                <p className="mb-0 mt-4">
                                    <span className="d-block">Best Regards,</span>
                                    <span className="d-block">Benjamin</span>
                                </p>
                            </div>
                            <div className="mail-attachments mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="mb-0">
                                        <span className="fs-14 fw-medium"><i className="ri-attachment-2 me-1 align-middle"></i>Attachments (1.8mb):</span>
                                    </div>
                                    <div className="btn-list">
                                        <SpkButton Buttonvariant="warning-light" Customclass="btn btn-sm">View All</SpkButton>
                                        <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-sm">Download All</SpkButton>
                                    </div>
                                </div>
                                <div className="mt-2 d-flex flex-wrap gap-3">
                                    <Link to="#!">
                                        <span className="avatar avatar-xl shadow-sm">
                                            <img src={media67} alt="" />
                                        </span>
                                    </Link>
                                    <Link to="#!">
                                        <span className="avatar avatar-xl shadow-sm">
                                            <img src={media68} alt="" />
                                        </span>
                                    </Link>
                                    <Link to="#!">
                                        <span className="avatar avatar-xl shadow-sm">
                                            <img src={media69} alt="" />
                                        </span>
                                    </Link>
                                    <Link to="#!">
                                        <span className="avatar avatar-xl shadow-sm">
                                            <img src={media70} alt="" />
                                        </span>
                                    </Link>
                                    <Link to="#!">
                                        <span className="avatar avatar-xl bg-primary-transparent">
                                            15+
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="fs-14 fw-medium"><i className="ri-reply-all-line me-1 align-middle d-inline-block"></i>Reply:</span>
                            </div>
                            <div className="mail-reply">
                                <div id="mail-reply-editor"><SpkSunEditor height={'200px'} /></div>
                            </div>
                        </SimpleBar>
                        <div className="mail-info-footer d-flex flex-wrap gap-2 align-items-center justify-content-between">
                            <div>
                                <SpkTooltips title="Print">
                                    <SpkButton Buttonvariant="primary-light" Customclass="btn btn-icon d-inline-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" >
                                        <i className="ri-printer-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkTooltips title="Mark as read">
                                    <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-icon d-inline-flex align-items-center justify-content-center ms-1">
                                        <i className="ri-mail-open-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkTooltips title="Reload">
                                    <SpkButton Buttonvariant="danger-light" Customclass="btn btn-icon d-inline-flex align-items-center justify-content-center ms-1">
                                        <i className="ri-refresh-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                            </div>
                            <div>
                                <SpkButton Buttonvariant="secondary" Customclass="btn">
                                    <i className="ri-share-forward-line me-1 d-inline-block align-middle"></i>Forward
                                </SpkButton>
                                <SpkButton Buttonvariant="danger" Customclass="btn ms-1">
                                    <i className="ri-reply-all-line me-1 d-inline-block align-middle"></i>Reply
                                </SpkButton>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            {/* <!-- End::mail information offcanvas --> */}
        </Fragment>
    );
};

export default MailApp;