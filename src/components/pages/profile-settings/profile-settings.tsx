import { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkSelect from "../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Languagedata, Timezones } from "../../../shared/data/pages/profilesettingdata";
import { Link } from "react-router-dom";
import face9 from '../../../assets/images/faces/9.jpg'

const ProfileSettingd = () => {

    const [success1, setsuccess1] = useState("on");
    const [success2, setsuccess2] = useState("on");
    const [success3, setsuccess3] = useState("off");
    const [success4, setsuccess4] = useState("on");

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Profile Settings"} />
            <Pageheader title="Pages" currentpage="Profile Settings" activepage="Profile Settings" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                PROFILE SETTINGS
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" p-4">
                            <span className="fw-semibold mb-3 d-block">ACCOUNT :</span>
                            <Row className=" gy-3 mb-4">
                                <Col xl={12}>
                                    <div className="d-flex align-items-start flex-wrap gap-3">
                                        <div>
                                            <span className="avatar avatar-xxl">
                                                <img src={face9} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="fw-medium d-block mb-2">Profile Picture</span>
                                            <div className="btn-list mb-1">
                                                <SpkButton Buttonvariant="primary" Customclass="btn btn-sm btn-wave"><i className="ri-upload-2-line me-1"></i>Change Image</SpkButton>
                                                <SpkButton Buttonvariant="light" Customclass="btn btn-sm btn-wave"><i className="ri-delete-bin-line me-1"></i>Remove</SpkButton>
                                            </div>
                                            <span className="d-block fs-12 text-muted">Use JPEG, PNG, or GIF. Best size: 200x200 pixels. Keep it under 5MB</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <label htmlFor="profile-user-name" className="form-label">User Name :</label>
                                    <input type="text" className="form-control" id="profile-user-name" placeholder="Enter Name" />
                                </Col>
                                <Col xl={6}>
                                    <label htmlFor="profile-email" className="form-label">Email :</label>
                                    <input type="email" className="form-control" id="profile-email" placeholder="Enter Email" />
                                </Col>
                                <Col xl={6}>
                                    <label htmlFor="profile-phn-no" className="form-label">Phone No :</label>
                                    <input type="text" className="form-control" id="profile-phn-no" placeholder="Enter Number" />
                                </Col>
                                <Col xl={3}>
                                    <label htmlFor="profile-age" className="form-label">Age :</label>
                                    <input type="number" className="form-control" id="profile-age" placeholder="Enter Age" />
                                </Col>
                                <Col xl={3}>
                                    <label htmlFor="profile-designation" className="form-label">Designation :</label>
                                    <input type="text" className="form-control" id="profile-designation" placeholder="Enter Designation" />
                                </Col>
                                <Col xl={12}>
                                    <label htmlFor="profile-address" className="form-label">Address :</label>
                                    <textarea className="form-control" id="profile-address" rows={3}></textarea>
                                </Col>
                                <Col xl={6}>
                                    <label htmlFor="profile-language" className="form-label">Language :</label>
                                    <SpkSelect searchable name="colors" option={Languagedata}
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Languagedata[2]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <label htmlFor="profile-timezone" className="form-label">Timezone :</label>
                                    <SpkSelect searchable name="colors" option={Timezones}
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Timezones[2]]}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <div className="mb-sm-0 mb-2 w-75">
                                        <label htmlFor="profile-age" className="form-label">Verification :</label>
                                        <div className="mb-0 authentication-btn-group">
                                            <div className="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
                                                <label className="btn btn-outline-light btn-sm" htmlFor="btnradio1"><i className="ri-mail-line me-1 align-middle d-inline-block"></i>Email</label>
                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                                <label className="btn btn-outline-light btn-sm" htmlFor="btnradio2"><i className="ri-chat-4-line me-1 align-middle d-inline-block"></i>Sms</label>
                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                                                <label className="btn btn-outline-light btn-sm" htmlFor="btnradio3"><i className="ri-phone-line me-1 align-middle d-inline-block"></i>Phone</label>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className=" gy-3 mb-4">
                                <Col xl={12}>
                                    <span className="fw-semibold mb-3 d-block">SECURITY SETTINGS :</span>
                                    <div className="d-sm-flex d-block align-items-top justify-content-between">
                                        <div className="w-50">
                                            <p className="fs-14 mb-1 fw-medium">Login Verification</p>
                                            <p className="fs-12 mb-0 text-muted">This helps protect accounts from unauthorized access, even if a password is compromised.</p>
                                        </div>
                                        <Link to="#!" className="link-primary text-decoration-underline">Set Up Verification</Link>
                                    </div>
                                    <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                        <div className="w-50">
                                            <p className="fs-14 mb-1 fw-medium">Password Verification</p>
                                            <p className="fs-12 mb-0 text-muted">This additional step helps ensure that the person attempting to modify account details is the legitimate account owner.</p>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="personal-details" />
                                            <label className="form-check-label" htmlFor="personal-details">
                                                Require Personal Details
                                            </label>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <span className="fw-semibold mb-3 d-block">NOTIFICATIONS :</span>
                                    <Row className=" gx-5 gy-3">
                                        <Col xl={12}>
                                            <p className="fs-14 mb-1 fw-medium">Configure Notifications</p>
                                            <p className="fs-12 mb-0 text-muted">By configuring notifications, users can tailor their experience to receive alerts for the types of events that matter to them.</p>
                                        </Col>
                                        <Col xl={12}>
                                            <div className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="fs-14 mb-1 fw-medium">In-App Notifications</p>
                                                    <p className="fs-12 mb-0 text-muted">Alerts that appear within the application interface.</p>
                                                </div>
                                                <div className={`toggle mb-0 float-sm-end  toggle-primary ${success1}`} onClick={() => { success1 == "on" ? setsuccess1("off") : setsuccess1("on"); }}
                                                    id="push-notifications">
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="fs-14 mb-1 fw-medium">Email Notifications</p>
                                                    <p className="fs-12 mb-0 text-muted">Messages sent to the user's email address.</p>
                                                </div>
                                                <div className={`toggle mb-0 float-sm-end  toggle-primary ${success2}`} onClick={() => { success2 == "on" ? setsuccess2("off") : setsuccess2("on"); }}
                                                    id="push-notifications">
                                                    <span></span>
                                                </div>

                                            </div>
                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="fs-14 mb-1 fw-medium">Push Notifications</p>
                                                    <p className="fs-12 mb-0 text-muted">Alerts sent to the user's mobile device or desktop.</p>
                                                </div>
                                                <div className={`toggle mb-0 float-sm-end  toggle-primary ${success3}`} onClick={() => { success3 == "on" ? setsuccess3("off") : setsuccess3("on"); }}
                                                    id="push-notifications">
                                                    <span></span>
                                                </div>

                                            </div>
                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="fs-14 mb-1 fw-medium">SMS Notifications</p>
                                                    <p className="fs-12 mb-0 text-muted">Text messages sent to the user's mobile phone.</p>
                                                </div>
                                                <div className={`toggle mb-0 float-sm-end  toggle-primary ${success4}`} onClick={() => { success4 == "on" ? setsuccess4("off") : setsuccess4("on"); }}
                                                    id="push-notifications">
                                                    <span></span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <div className="btn-list float-end">
                                <SpkButton Buttonvariant="danger" Customclass="btn btn-wave">Deactivate Account</SpkButton>
                                <SpkButton Buttonvariant="light" Customclass="btn  btn-wave">Restore Defaults</SpkButton>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment >
    );
};

export default ProfileSettingd;