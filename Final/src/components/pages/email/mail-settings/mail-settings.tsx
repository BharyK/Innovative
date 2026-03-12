import { Fragment, useState, type ChangeEvent } from "react";
import { Card, Col, Dropdown, ListGroup, Nav, Row, Tab } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Accountoptions, Countryoptions, Devices, Languageoptions, Maximumoptions, MaxLimitoptions } from "../../../../shared/data/pages/email/mailsettingdata";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import face9 from '../../../../assets/images/faces/9.jpg'

const MailSettings = () => {

    const [toggles, setToggles] = useState<{ [key: string]: string }>({});

    const toggle = (toggleKey: string) => {
        setToggles((prevState) => {
            const currentState = prevState[toggleKey];
            const isCurrentlyOn = currentState === 'on' || currentState === undefined;
            return {
                ...prevState,
                [toggleKey]: isCurrentlyOn ? 'off' : 'on',
            };
        });
    };
    const [_images, setImages] = useState<File[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setSelectedImage(reader.result);
                }
            };
            reader.readAsDataURL(file);
            setImages((prev) => [...prev, file]);
        }
    };
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Mail Setting"} />
            <Pageheader title="Pages" subtitle='Email' currentpage="Mail Setting" activepage="Mail Setting" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Tab.Container defaultActiveKey='personal'>
                    <Col xxl={3} xl={4}>
                        <Card className="custom-card mb-5">
                            <Card.Body className=" text-center primary-dash-border m-3 mb-0 bg-light">
                                <span className="avatar avatar-xxl avatar-rounded">
                                    <img src={selectedImage || face9} alt="" id="profile-img" />
                                    <span className="badge rounded-pill bg-primary avatar-badge">
                                        <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" onChange={handleFileChange} />
                                        <i className="fe fe-camera"></i>
                                    </span>
                                </span>
                                <h6 className="fw-semibold mt-3 mb-1">Jhon Doe</h6>
                                <span className="d-block fs-13 tex-muted">jhondoe3125@gmail.com</span>
                                <div className="btn-list mt-3">
                                    <SpkButton Buttonvariant="primary" Customclass="btn btn-sm btn-w-sm">Edit</SpkButton>
                                    <SpkButton Buttonvariant="danger" Customclass="btn btn-sm btn-w-sm">Delete</SpkButton>
                                </div>
                            </Card.Body>
                            <Card.Body className=" p-0">
                                <Nav as='ul' className="flex-column nav-pills add-product-details-nav py-3" role="tablist">
                                    <Nav.Item as='li' className="m-1" role="presentation">
                                        <Nav.Link as='a' eventKey='personal' className="nav-link d-inline-flex w-100 mb-3 gap-2 align-items-center" id="account" data-bs-toggle="tab" data-bs-target="#personal-info" href="#personal-info" aria-selected="true" role="tab">
                                            <span className="avatar avatar-lg border avatar-rounded">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        enableBackground="new 0 0 24 24" height="24px"
                                                        viewBox="0 0 24 24" width="24px" fill="#000">
                                                        <g>
                                                            <rect fill="none" height="24" width="24" />
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M12 4c-4.42 0-8 3.58-8 8 0 1.95.7 3.73 1.86 5.12C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C19.3 15.73 20 13.95 20 12c0-4.42-3.58-8-8-8zm0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13z"
                                                                    enableBackground="new" opacity=".8" fill="#fff" />
                                                                <path
                                                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5zm6.14-2.88C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z" />
                                                                <path
                                                                    d="M12 5.93c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </span>
                                            <div>
                                                <p className="mb-1 fs-15 fw-semibold">Personal Information</p>
                                                <span className="text-muted fs-13">Add Personal Details</span>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' className="m-1" role="presentation">
                                        <Nav.Link as='a' eventKey='account' className="nav-link d-inline-flex w-100 gap-2 mb-3" id="images-tab"
                                            data-bs-toggle="tab" data-bs-target="#account-settings" role="tab"
                                            aria-controls="account-settings" href="#account-settings"
                                            aria-selected="false" tabIndex={-1}>
                                            <span className="avatar avatar-lg border avatar-rounded">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 0 24 24" width="24px" fill="#000">
                                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                                        <path
                                                            d="M19.28 8.6l-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73 0-.21-.02-.43-.05-.73l-.14-1.13.89-.7 1.1-.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                                                            opacity=".8" fill="#fff" />
                                                        <path
                                                            d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                                    </svg>
                                                </span>
                                            </span>
                                            <div>
                                                <p className="mb-1 fs-15 fw-semibold">Account Settings</p>
                                                <span className="text-muted fs-13">Add Account Settings</span>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' className="m-1" role="presentation">
                                        <Nav.Link as='a' eventKey='email' className="nav-link d-inline-flex w-100 gap-2 mb-3" id="notification-tab"
                                            data-bs-toggle="tab" data-bs-target="#email-settings" role="tab"
                                            aria-controls="email-settings" href="#email-settings" aria-selected="false"
                                            tabIndex={-1}>
                                            <span className="avatar avatar-lg border avatar-rounded">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 0 24 24" width="24px" fill="#000">
                                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                                        <path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity=".8"
                                                            fill="#fff" />
                                                        <path
                                                            d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" />
                                                    </svg>
                                                </span>
                                            </span>
                                            <div>
                                                <p className="mb-1 fs-15 fw-semibold">Email Settings</p>
                                                <span className="text-muted fs-13">Add Product Pricing Details</span>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' className="m-1" role="presentation">
                                        <Nav.Link as='a' eventKey='lables' className="nav-link d-inline-flex w-100 mb-3 gap-2" id="security-tab"
                                            data-bs-toggle="tab" data-bs-target="#labels" role="tab"
                                            aria-controls="labels" aria-selected="false" href="#labels" tabIndex={-1}>
                                            <span className="avatar avatar-lg border avatar-rounded">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 0 24 24" width="24px" fill="#000">
                                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                                        <path d="M13 13l-3-2.25L7 13V4H6v16h12V4h-5z" opacity=".8"
                                                            fill="#fff" />
                                                        <path
                                                            d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z" />
                                                    </svg>
                                                </span>
                                            </span>
                                            <div>
                                                <p className="mb-1 fs-15 fw-semibold">Labels</p>
                                                <span className="text-muted fs-13">Add Product Specification</span>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' className="m-1" role="presentation">
                                        <Nav.Link as='a' eventKey='notifactions' className="nav-link d-inline-flex w-100 mb-3 gap-2" id="otherinfo-tab"
                                            data-bs-toggle="tab" data-bs-target="#notification-settings" role="tab"
                                            aria-controls="notification-settings" aria-selected="false"
                                            href="#notification-settings" tabIndex={-1}> <span
                                                className="avatar avatar-lg border avatar-rounded">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 0 24 24" width="24px" fill="#000">
                                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                                        <path
                                                            d="M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z"
                                                            opacity=".8" fill="#ffff" />
                                                        <path
                                                            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                                                    </svg>
                                                </span>
                                            </span>
                                            <div>
                                                <p className="mb-1 fs-15 fw-semibold">Notification</p>
                                                <span className="text-muted fs-13">Add Any Other Information</span>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' className="m-1" role="presentation">
                                        <Nav.Link as='a' eventKey='security' className="nav-link d-inline-flex w-100 mb-0 gap-2" id="otherinfo-tab"
                                            data-bs-toggle="tab" data-bs-target="#security" role="tab"
                                            aria-controls="security" aria-selected="false" href="#security"
                                            tabIndex={-1}> <span className="avatar avatar-lg border avatar-rounded">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 0 24 24" width="24px" fill="#000">
                                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                                        <path
                                                            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" />
                                                        <path
                                                            d="M5 6.3V11c0 4.52 2.98 8.69 7 9.93 4.02-1.23 7-5.41 7-9.93V6.3l-7-3.11L5 6.3zM18 9l-8 8-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"
                                                            opacity=".8" fill="#fff" />
                                                    </svg>
                                                </span>
                                            </span>
                                            <div>
                                                <p className="mb-1 fs-15 fw-semibold">Security</p>
                                                <span className="text-muted fs-13">Add Any Other Information</span>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={9} xl={8}>
                        <Card className="custom-card">
                            <Card.Body>
                                <Tab.Content>
                                    <Tab.Pane eventKey='personal' id="personal-info" role="tabpanel">
                                        <div className="p-sm-3 p-0">
                                            <h6 className="fw-medium mb-3">
                                                Profile :
                                            </h6>
                                            <Row className="gy-4 mb-4">
                                                <Col xl={6}>
                                                    <label htmlFor="first-name" className="form-label">First Name</label>
                                                    <input type="text" className="form-control" id="first-name" placeholder="First Name" />
                                                </Col>
                                                <Col xl={6}>
                                                    <label htmlFor="last-name" className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" id="last-name" placeholder="Last Name" />
                                                </Col>
                                                <Col xl={12}>
                                                    <label className="form-label">User Name</label>
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-text" id="basic-addon3">user2413@gmail.com</span>
                                                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <h6 className="fw-medium mb-3">
                                                Personal information :
                                            </h6>
                                            <Row className="gy-4 mb-4">
                                                <Col xl={6}>
                                                    <label htmlFor="email-address" className="form-label">Email Address :</label>
                                                    <input type="text" className="form-control" id="email-address" placeholder="xyz@gmail.com" />
                                                </Col>
                                                <Col xl={6}>
                                                    <label htmlFor="Contact-Details" className="form-label">Contact Details :</label>
                                                    <input type="text" className="form-control" id="Contact-Details" placeholder="contact details" />
                                                </Col>
                                                <Col xl={6}>
                                                    <label htmlFor="language" className="form-label">Language :</label>
                                                    <SpkSelect multi name="colors" option={Languageoptions}
                                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Languageoptions[0]]}
                                                    />
                                                </Col>
                                                <Col xl={6}>
                                                    <label className="form-label">Country :</label>
                                                    <SpkSelect option={Countryoptions} mainClass="mb-4 default basic-multi-select" id="choices-multiple-default"
                                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Countryoptions[0]]}
                                                    />
                                                </Col>
                                                <Col xl={12} className="mt-0">
                                                    <label htmlFor="bio" className="form-label">Bio :</label>
                                                    <textarea className="form-control" id="bio" rows={5} defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!'></textarea>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='account' id="account-settings" role="tabpanel">
                                        <Row className="gy-3">
                                            <Col xxl={7}>
                                                <Card className="custom-card shadow-none mb-0 border">
                                                    <Card.Body>
                                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                            <div className="w-75">
                                                                <p className="fs-14 mb-1 fw-medium">Two Step Verification</p>
                                                                <p className="fs-12 text-muted mb-0">Two step verificatoin
                                                                    is very secured and restricts in happening faulty
                                                                    practices.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-primary ${toggles['twostep'] === 'on' || !toggles['twostep'] ? 'on' : ''}`} onClick={() => toggle('twostep')}>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                            <div className="mb-sm-0 mb-2 w-75">
                                                                <p className="fs-14 mb-2 fw-medium">Authentication</p>
                                                                <div className="mb-0 authentication-btn-group">
                                                                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
                                                                        <label className="btn btn-outline-light" htmlFor="btnradio1"><i className="ri-lock-unlock-line me-1 align-middle d-inline-block"></i>Pin</label>
                                                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                                                        <label className="btn btn-outline-light" htmlFor="btnradio2"><i className="ri-lock-password-line me-1 align-middle d-inline-block"></i>Password</label>
                                                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                                                                        <label className="btn btn-outline-light" htmlFor="btnradio3"><i className="ri-fingerprint-line me-1 align-middle d-inline-block"></i>Finger Print</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-primary ${toggles['authentication'] === 'on' || !toggles['authentication'] ? 'on' : ''}`} onClick={() => toggle('authentication')}>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                            <div className="w-75">
                                                                <p className="fs-14 mb-1 fw-medium">Recovery Mail</p>
                                                                <p className="fs-12 text-muted mb-0">Incase of forgetting
                                                                    password mails are sent to heifo@gmail.com</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-primary ${toggles['recovery'] === 'on' || !toggles['recovery'] ? 'on' : ''}`} onClick={() => toggle('recovery')} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">SMS Recovery</p>
                                                                <p className="fs-12 text-muted mb-0">SMS are sent to
                                                                    9102312xx in case of recovery</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-primary ${toggles['smsrecovery'] === 'on' || !toggles['smsrecovery'] ? 'on' : ''}`} onClick={() => toggle('smsrecovery')} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">Reset Password</p>
                                                                <p className="fs-12 text-muted">Password should be min of <b className="text-primary">8
                                                                    digits<sup>*</sup></b>,atleast <b
                                                                        className="text-primary">One Capital
                                                                        letter<sup>*</sup></b> and <b
                                                                            className="text-primary">One Special
                                                                        Character<sup>*</sup></b> included.</p>
                                                                <div className="mb-2">
                                                                    <label htmlFor="current-password"
                                                                        className="form-label">Current Password</label>
                                                                    <input type="text" className="form-control" id="current-password" placeholder="Current Password" />
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="new-password" className="form-label">New  Password</label>
                                                                    <input type="text" className="form-control" id="new-password" placeholder="New Password" />
                                                                </div>
                                                                <div className="mb-0">
                                                                    <label htmlFor="confirm-password"
                                                                        className="form-label">Confirm Password</label>
                                                                    <input type="text" className="form-control" id="confirm-password" placeholder="Confirm Password" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xxl={5}>
                                                <Card className="custom-card shadow-none mb-0 border">
                                                    <div className="card-header justify-content-between d-sm-flex d-block">
                                                        <div className="card-title">Registered Devices</div>
                                                        <div className="mt-sm-0 mt-2">
                                                            <SpkButton Buttonvariant="primary" Customclass="btn btn-sm">Signout from all  devices</SpkButton>
                                                        </div>
                                                    </div>
                                                    <Card.Body>
                                                        <ListGroup>
                                                            {Devices.map((idx) => (
                                                                <ListGroup.Item key={idx.id}>
                                                                    <div className="d-sm-flex d-block align-items-top">
                                                                        <div className="lh-1 mb-sm-0 mb-2"><i className={`bi bi-${idx.icon} me-2 fs-16 align-middle text-muted`}></i></div>
                                                                        <div className="lh-1 flex-fill">
                                                                            <p className="mb-1">
                                                                                <span className="fw-medium">{idx.name}</span>
                                                                            </p>
                                                                            <p className="mb-0">
                                                                                <span className="text-muted fs-11">{idx.location} {idx.date}</span>
                                                                            </p>
                                                                        </div>
                                                                        <SpkDropdown toggleas='a' Customclass="mt-sm-0 mt-2" Customtoggleclass="btn btn-icon btn-sm btn-light no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                                                            <li><Dropdown.Item href="#!">Action</Dropdown.Item></li>
                                                                            <li><Dropdown.Item href="#!">Another action</Dropdown.Item></li>
                                                                            <li><Dropdown.Item href="#!">Something else here</Dropdown.Item></li>
                                                                        </SpkDropdown>
                                                                    </div>
                                                                </ListGroup.Item>
                                                            ))}
                                                        </ListGroup>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='email' className=" p-0" id="email-settings" role="tabpanel">
                                        <ListGroup className=" list-group-flush rounded">
                                            <ListGroup.Item>
                                                <Row className="gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3} lg={3} md={3} sm={12}>
                                                        <span className="fs-14 fw-medium mb-0">Menu View :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                Default View
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                Advanced View
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end toggle-danger ${toggles['advancedview'] === 'on' || !toggles['advancedview'] ? 'on' : ''}`} onClick={() => toggle('advancedview')}>
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row className="gy-3 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Language :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <label htmlFor="mail-language" className="form-label">Languages
                                                            :</label>
                                                        <SpkSelect multi name="colors" option={Languageoptions}
                                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Languageoptions[0]]}
                                                        />
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['languages'] === 'off' ? 'on' : ''}`} onClick={() => toggle('languages')} >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row className="gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Images :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="images-open" id="images-open1" />
                                                            <label className="form-check-label" htmlFor="images-open1">
                                                                Always Open Images
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="images-open" id="images-hide2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="images-hide2">
                                                                Ask For Permission
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['images'] === 'off' ? 'on' : ''}`} onClick={() => toggle('images')}  >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row className=" gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Keyboard Shortcuts :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="keyboard-enable" id="keyboard-enable1" />
                                                            <label className="form-check-label" htmlFor="keyboard-enable1">
                                                                Keyboard Shortcuts Enable
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="keyboard-enable" id="keyboard-disable2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="keyboard-disable2">
                                                                Keyboard Shortcuts Disable
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end  toggle-success ${toggles['keyboard'] === 'off' ? 'on' : ''}`} onClick={() => toggle('keyboard')}  >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row className=" gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Notifications :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="desktop-notifications" defaultChecked />
                                                            <label className="form-check-label" htmlFor="desktop-notifications">
                                                                Desktop Notifications
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="mobile-notifications" />
                                                            <label className="form-check-label" htmlFor="mobile-notifications">
                                                                Mobile Notifications
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="float-sm-end">
                                                            <Link to="#!" className="btn btn-success-ghost btn-sm">Learn-more</Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row className="gy-3 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Maximum Mails Per Page  :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <SpkSelect name="colors" option={Maximumoptions} mainClass="basic-multi-select"
                                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Maximumoptions[0]]}
                                                        />
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['maximum'] === 'off' ? 'on' : ''}`} onClick={() => toggle('maximum')}  >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row className="gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Mail Composer :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="mail-composer" id="mail-composeron1" />
                                                            <label className="form-check-label" htmlFor="mail-composeron1">
                                                                Mail Composer On
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="mail-composer" id="mail-composeroff2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="mail-composeroff2">
                                                                Mail Composer Off
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['mailcomposer'] === 'off' ? 'on' : ''}`} onClick={() => toggle('mailcomposer')}  >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row className="gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Auto Correct :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="auto-correct" id="auto-correcton1" />
                                                            <label className="form-check-label" htmlFor="auto-correcton1">
                                                                Auto Correct On
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio"
                                                                name="auto-correct" id="auto-correctoff2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="auto-correctoff2">
                                                                Auto Correct Off
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['autocorrect'] === 'off' ? 'on' : ''}`} onClick={() => toggle('autocorrect')}  >
                                                            <span></span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row className="gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-medium mb-0">Mail Send Action :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox"
                                                                id="on-keyboard" defaultChecked />
                                                            <label className="form-check-label" htmlFor="on-keyboard">
                                                                On Keyboard Action
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox"
                                                                id="on-buttonclick" />
                                                            <label className="form-check-label" htmlFor="on-buttonclick">
                                                                On Button Click
                                                            </label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="float-sm-end">
                                                            <Link to="#!"
                                                                className="btn btn-success-ghost btn-sm">Learn-more</Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='lables' id="labels" role="tabpanel">
                                        <p className="fs-14 fw-medium mb-3">Mail Labels :</p>
                                        <Row className="gy-2">
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2"
                                                            htmlFor="label-all-mails">All Mails</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox"
                                                                role="switch" id="label-all-mails" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-sent">Inbox</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-sent" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-sent2">Sent</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-sent2" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-drafts">Drafts</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-drafts" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-spam">Spam</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-spam" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-important">Important</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-important" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-trash">Trash</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-trash" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-archive">Archive</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-archive" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-starred">Starred</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-starred" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <p className="fs-14 fw-medium mb-3">Settings :</p>
                                        <Row className="gy-2">
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-settings">Settings</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-settings" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <p className="fs-14 fw-medium mb-3">Custom Labels :</p>
                                        <Row className="gy-2">
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-mail">Mail</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-mail" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-home">Home</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-home" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-work">Work</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-work" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                <Card className="custom-card shadow-none border border-dashed">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <label className="form-check-label fw-medium ms-2" htmlFor="label-friends">Friends</label>
                                                        <div className="form-check form-check-md form-switch mb-0">
                                                            <input className="form-check-input" type="checkbox" role="switch" id="label-friends" defaultChecked />
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='notifactions' className=" p-0" id="notification-settings" role="tabpanel">
                                        <ListGroup className=" list-group-flush list-unstyled rounded">
                                            <ListGroup.Item>
                                                <Row className="gx-5 gy-3">
                                                    <Col xl={5}>
                                                        <p className="fs-16 mb-1 fw-medium">Email Notifications</p>
                                                        <p className="fs-12 mb-0 text-muted">Email notifications are the
                                                            notifications you will receeive when you are offline, you
                                                            can customize them by enabling or disabling them.</p>
                                                    </Col>
                                                    <Col xl={7}>
                                                        <div
                                                            className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Updates & Features</p>
                                                                <p className="fs-12 mb-0 text-muted">Notifications about new
                                                                    updates and their features.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['features'] === 'on' || !toggles['features'] ? 'on' : ''}`} onClick={() => toggle('features')} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Early Access</p>
                                                                <p className="fs-12 mb-0 text-muted">Users are selected for
                                                                    beta testing of new update,notifications relating or
                                                                    participate in any of paid product promotion.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['early'] === 'off' ? 'on' : ''}`} onClick={() => toggle('early')} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Email Shortcuts</p>
                                                                <p className="fs-12 mb-0 text-muted">Shortcut notifications
                                                                    for email.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['emailshortcuts'] === 'on' || !toggles['emailshortcuts'] ? 'on' : ''}`} onClick={() => toggle('emailshortcuts')} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">New Mails</p>
                                                                <p className="fs-12 mb-0 text-muted">Notifications related
                                                                    to new mails received.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['newmails'] === 'on' || !toggles['newmails'] ? 'on' : ''}`} onClick={() => toggle('newmails')} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Mail Chat Messages</p>
                                                                <p className="fs-12 mb-0 text-muted">Any of new messages are
                                                                    received will be updated through notifications.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['mailchat'] === 'on' || !toggles['mailchat'] ? 'on' : ''}`} onClick={() => toggle('mailchat')} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row className="gx-5 gy-3">
                                                    <Col xl={5}>
                                                        <p className="fs-16 mb-1 fw-medium">Push Notifications</p>
                                                        <p className="fs-12 mb-0 text-muted">Push notifications are recieved
                                                            when you are online, you can customize them by enabling or
                                                            disabling them.</p>
                                                    </Col>
                                                    <Col xl={7}>
                                                        <div className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">New Mails</p>
                                                                <p className="fs-12 mb-0 text-muted">Notifications related
                                                                    to new mails received.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['newmails'] === 'on' || !toggles['newmails'] ? 'on' : ''}`} onClick={() => toggle('newmails')} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Mail Chat Messages</p>
                                                                <p className="fs-12 mb-0 text-muted">Any of new messages are
                                                                    received will be updated through notifications.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['mailchatupdate'] === 'on' || !toggles['mailchatupdate'] ? 'on' : ''}`} onClick={() => toggle('mailchatupdate')} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Mail Extensions</p>
                                                                <p className="fs-12 mb-0 text-muted">Notifications related
                                                                    to the extensions received by new emails and thier
                                                                    propertied also been displayed.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['mailextension'] === 'off' ? 'on' : ''}`} onClick={() => toggle('mailextension')}  >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='security' className=" p-0" id="security" role="tabpanel">
                                        <ListGroup className=" list-group-flush list-unstyled rounded">
                                            <ListGroup.Item>
                                                <Row className="gx-5 gy-3">
                                                    <Col xl={4}>
                                                        <p className="fs-16 mb-1 fw-medium">Logging In</p>
                                                        <p className="fs-12 mb-0 text-muted">Security settings related to
                                                            logging into our email account and taking down account if
                                                            any mischevious action happended.</p>
                                                    </Col>
                                                    <div className="col-xl-8">
                                                        <div
                                                            className="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3">
                                                            <div className="mail-security-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Max Limit for login
                                                                    attempts</p>
                                                                <p className="fs-12 mb-0 text-muted mb-sm-0">Account will
                                                                    freeze for 24hrs while attempt to login with wrong
                                                                    credentials for selected number of times</p>
                                                            </div>
                                                            <div className="loginAttempts">
                                                                <SpkSelect name="colors" option={MaxLimitoptions} mainClass="basic-multi-select"
                                                                    menuplacement='auto' classNameprefix="Select2" defaultvalue={[MaxLimitoptions[0]]}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">Account Freeze time
                                                                    management</p>
                                                                <p className="fs-12 mb-0 text-muted mb-sm-0">You can change
                                                                    the time for the account freeze when attempts for
                                                                </p>
                                                            </div>
                                                            <div className="loginAccount">
                                                                <SpkSelect name="colors" option={Accountoptions} mainClass="basic-multi-select"
                                                                    menuplacement='auto' classNameprefix="Select2" defaultvalue={[Accountoptions[0]]}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row className="gx-5 gy-3">
                                                    <Col xl={4}>
                                                        <p className="fs-16 mb-1 fw-medium">Password Requirements</p>
                                                        <p className="fs-12 mb-0 text-muted">Security settings related to
                                                            password strength.</p>
                                                    </Col>
                                                    <div className="col-xl-8">
                                                        <div
                                                            className="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3 gap-3">
                                                            <div className="mail-security-settings">
                                                                <p className="fs-14 mb-1 fw-medium">Minimum number of
                                                                    characters in the password</p>
                                                                <p className="fs-12 mb-0 text-muted">There should be a
                                                                    minimum number of characters for a password to be
                                                                    validated that shouls be set here.</p>
                                                            </div>
                                                            <div>
                                                                <input type="text" className="form-control" defaultValue="8" />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">Contain A Number</p>
                                                                <p className="fs-12 mb-0 text-muted">Password should contain
                                                                    a number.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['password'] === 'on' || !toggles['password'] ? 'on' : ''}`} onClick={() => toggle('password')}>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">Contain A Special
                                                                    Character</p>
                                                                <p className="fs-12 mb-0 text-muted">Password should contain
                                                                    a special Character.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['special'] === 'on' || !toggles['special'] ? 'on' : ''}`} onClick={() => toggle('special')}>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">Atleast One Capital
                                                                    Letter</p>
                                                                <p className="fs-12 mb-0 text-muted">Password should contain
                                                                    atleast one capital letter.</p>
                                                            </div>
                                                            <div className={`toggle mb-0 float-sm-end toggle-success ${toggles['atleastone'] === 'off' ? 'on' : ''}`} onClick={() => toggle('atleastone')} >
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-medium">Maximum Password Length
                                                                </p>
                                                                <p className="fs-12 mb-0 text-muted">Maximum password lenth
                                                                    should be selected here.</p>
                                                            </div>
                                                            <div>
                                                                <input type="text" className="form-control" defaultValue="16" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row className="gx-5 gy-3">
                                                    <Col xl={4}>
                                                        <p className="fs-16 mb-1 fw-medium">Unknown Chats</p>
                                                        <p className="fs-12 mb-0 text-muted">Security settings related to
                                                            unknown chats.</p>
                                                    </Col>
                                                    <div className="col-xl-8">
                                                        <div className="btn-group float-sm-end" role="group"
                                                            aria-label="Basic radio toggle button group">
                                                            <input type="radio" className="btn-check" name="btnunknownchats"
                                                                id="unknown-chats-show" defaultChecked />
                                                            <label className="btn btn-outline-light"
                                                                htmlFor="unknown-chats-show">Show</label>
                                                            <input type="radio" className="btn-check" name="btnunknownchats"
                                                                id="unknown-chats-hide" />
                                                            <label className="btn btn-outline-light"
                                                                htmlFor="unknown-chats-hide">Hide</label>
                                                        </div>
                                                    </div>
                                                </Row>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                            <Card.Footer>
                                <div className="float-end">
                                    <SpkButton Buttonvariant="light" Customclass="btn m-1">
                                        Restore Defaults
                                    </SpkButton>
                                    <SpkButton Buttonvariant="primary" Customclass="btn m-1">
                                        Save Changes
                                    </SpkButton>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Tab.Container>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default MailSettings;