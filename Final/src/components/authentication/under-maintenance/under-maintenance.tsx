

import { Fragment, useEffect } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { DayCounter } from "../../../shared/data/authentication/comingsoondata";
import { Link } from "react-router-dom";
import logo from '../../../assets/images/brand-logos/desktop-logo.png';
import dark from '../../../assets/images/brand-logos/desktop-dark.png';
import png15 from '../../../assets/images/media/png/15.png';


const UnderMaintenance = () => {

    useEffect(() => {
        const body = document.body
        body.classList.add("coming-soon-main");
        return () => {
            body.classList.remove("coming-soon-main");
        };
    }, []);

    return (
        <Fragment>
            <div className="row authentication coming-soon justify-content-center g-0 my-auto">
                <Col xxl={9} xl={8} lg={8} md={10} sm={10} className="col-11 my-auto">
                    <div className="authentication-cover primary-dash-border rounded my-3">
                        <div className="aunthentication-cover-content">
                            <div className="row justify-content-center align-items-center mx-0 g-0">
                                <Col xl={4} className="">
                                    <img src={png15} alt="img" className="auth-img d-md-block d-none pe-5" />
                                </Col>
                                <Col xxl={8} xl={10} lg={10} md={12} sm={12} className="col-12 ps-sm-3">
                                    <div>
                                        <div className="mb-2">
                                            <Link to={`${import.meta.env.BASE_URL}dashboards/sales`}>
                                                <img src={logo} alt="" className="authentication-brand desktop-logo" />
                                                <img src={dark} alt="img" className="authentication-brand desktop-dark" />
                                            </Link>
                                        </div>
                                        <h1 className="mb-3 fw-semibold text-primary auth-main-text">Under Maintenance</h1>
                                        <p className="mb-4 fs-18 op-8">A new adventure is on the way – don’t miss the unveiling of something incredible!</p>
                                        <div className="d-flex gap-3 flex-wrap my-4" id="timer">
                                            <DayCounter />
                                        </div>
                                        <InputGroup>
                                            <Form.Control type="email" className="form-control form-control-lg" placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2" />
                                            <SpkButton Buttonvariant="primary" Customclass="btn" Size="lg" Buttontype="button" Id="button-addon2">Subscribe</SpkButton>
                                        </InputGroup>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </div>
                </Col>
            </div>
        </Fragment>
    );
};

export default UnderMaintenance;