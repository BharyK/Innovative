import { Fragment, useEffect } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DayCounter } from "../../../shared/data/authentication/comingsoondata";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import logo from '../../../assets/images/brand-logos/desktop-logo.png';
import dark from '../../../assets/images/brand-logos/desktop-dark.png';
import png17 from '../../../assets/images/media/png/17.png';

const ComingSoon = () => {

    useEffect(() => {
        const body = document.body
        body.classList.add("coming-soon-main");
        return () => {
            body.classList.remove("coming-soon-main");
        };
    }, []);

    return (
        <Fragment>
            <Row className="authentication coming-soon justify-content-center g-0 my-4">
                <Col xxl={9} xl={8} lg={8} md={10} sm={10} className="col-11 my-auto">
                    <div className="authentication-cover primary-dash-border rounded my-3">
                        <div className="aunthentication-cover-content">
                            <Row className="justify-content-center align-items-center mx-0 g-0">
                                <Col xl={5}>
                                    <img src={png17} alt="img" className="auth-img d-md-block d-none" />
                                </Col>
                                <Col xxl={7} xl={10} lg={10} md={12} sm={12} className="col-12 ps-sm-3">
                                    <div>
                                        <div className="mb-2">
                                            <Link to={`${import.meta.env.BASE_URL}dashboards/sales`}>
                                                <img src={logo} alt="" className="authentication-brand desktop-logo" />
                                                <img src={dark} alt="img" className="authentication-brand desktop-dark" />
                                            </Link>
                                        </div>
                                        <h1 className="mb-3 fw-semibold text-primary auth-main-text">Coming Soon</h1>
                                        <p className="mb-4 fs-18 op-8">Exciting things are coming your way – get ready for the launch of a brand-new experience!</p>
                                        <div className="d-flex gap-3 flex-wrap my-4" id="timer">
                                            <DayCounter />
                                        </div>
                                        <InputGroup>
                                            <Form.Control type="email" className="form-control-lg" placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2" />
                                            <SpkButton Buttonvariant="primary" Customclass="btn" Size="lg" Buttontype="button" Id="button-addon2">Subscribe</SpkButton>
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ComingSoon;