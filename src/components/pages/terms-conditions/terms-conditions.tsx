import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import media89 from '../../../assets/images/media/media-89.png'

const TermsConditions = () => {
    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title={"Terms & Conditions"} />
            <Pageheader title="Pages" currentpage="Terms & Conditions" activepage="Terms & Conditions" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row className="justify-content-center">
                <Col xl={9}>
                    <Card className="custom-card overflow-hidden p-2">
                        <div className="terms-card text-center">
                            <h4 className="fw-semibold mb-2">Terms & Conditions</h4>
                            <span className="d-block fw-medium fs-14">Last Updated - 21,May 2024</span>
                            <div className="img-container custom-width">
                                <img src={media89} alt="img" />
                            </div>
                        </div>
                        <Card.Body className="p-4">
                            <h5 className="fw-semibold mb-3">Welcome to Spruko,</h5>
                            <p>By accessing or using our services, you agree to be bound by the following terms and
                                conditions. Please read them carefully:</p>

                            <ul className="terms-list list-unstyled mb-0">
                                <li>
                                    <p className="mb-1"><strong>Acceptance of Terms :</strong></p> By using our
                                    services, you agree to comply with these terms and any additional terms that may
                                    apply.
                                </li>

                                <li>
                                    <p className="mb-1"><strong>Eligibility :</strong></p> You must be at least 18 years
                                    old to use our services. By using our services, you represent and warrant that
                                    you meet this requirement.
                                </li>

                                <li>
                                    <p className="mb-1"><strong>Account Registration :</strong></p> To access certain
                                    features of our services, you may be required to register for an account. You
                                    agree to provide accurate and complete information during the registration
                                    process.
                                </li>

                                <li>
                                    <p className="mb-1"><strong>User Conduct :</strong></p> You are solely responsible
                                    for your conduct while using our services. Unacceptable behavior, including but
                                    not limited to harassment, abuse, or violation of third-party rights, may result
                                    in the suspension or termination of your account.
                                </li>

                                <li>
                                    <p className="mb-1"><strong>Intellectual Property :</strong></p> All content,
                                    trademarks, and intellectual property on our website are owned by [Your Company
                                    Name]. You may not use, reproduce, or distribute any content from our services
                                    without our prior written consent.
                                </li>

                                <li>
                                    <p className="mb-1"><strong>Privacy :</strong></p> We are committed to protecting
                                    your privacy. Our Privacy Policy explains how we collect, use, and disclose your
                                    information. By using our services, you consent to the practices outlined in the
                                    Privacy Policy.
                                    <ul className="mt-2">
                                        <li>We may collect personal information, such as your name, email address,
                                            and location, to provide a personalized experience.</li>
                                        <li>Your information will not be shared with third parties without your
                                            explicit consent.</li>
                                        <li>We use cookies to enhance user experience and track website usage.</li>
                                    </ul>
                                </li>

                                <li>
                                    <p className="mb-1"><strong>Termination :</strong></p> We reserve the right to
                                    terminate or suspend your account at any time for any reason without notice.
                                </li>

                                <li>
                                    <p className="mb-1"><strong>Disclaimer :</strong></p> Our services are provided "as
                                    is" without warranties of any kind. We do not guarantee the accuracy,
                                    completeness, or reliability of the content on our website. Use information at
                                    your own risk.
                                    <ul className="mt-2">
                                        <li>This includes but is not limited to:</li>
                                        <li>Any errors or omissions in the content</li>
                                        <li>Any loss or damage of any kind incurred as a result of the use of the
                                            content</li>
                                        <li>Any unauthorized access to or use of our servers and/or any personal
                                            information stored therein</li>
                                    </ul>
                                </li>

                                <li>
                                    <p className="mb-1"><strong>Changes to Terms :</strong></p> We may update these
                                    terms and conditions from time to time. Any changes will be effective
                                    immediately upon posting. It is your responsibility to review the terms
                                    periodically.
                                </li>

                                <li>
                                    <p className="mb-1"><strong>Contact :</strong></p> If you have any questions or
                                    concerns regarding these terms, please contact us at [Your Contact Email].
                                </li>
                            </ul>
                            <div className="p-3 bg-light rounded mt-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <div>
                                    <div className="form-check mb-2"> <input className="form-check-input" type="checkbox"
                                        value="" id="acceptance1" /> <label
                                            className="form-check-label fw-normal" htmlFor="acceptance1"> I have read
                                            and accept the <span className="text-default fw-semibold">Terms of Service</span>
                                        </label> </div>
                                    <div className="form-check mb-0"> <input className="form-check-input" type="checkbox"
                                        value="" id="acceptance2" /> <label
                                            className="form-check-label fw-normal" htmlFor="acceptance2"> I
                                            acknowledge and accept the <span className="text-default fw-semibold">Privacy
                                                Policy</span> </label> </div>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    <div className="btn btn-danger btn-w-lg me-2"> I Decline </div>
                                    <div className="btn btn-primary btn-w-lg"> I Accept </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default TermsConditions;