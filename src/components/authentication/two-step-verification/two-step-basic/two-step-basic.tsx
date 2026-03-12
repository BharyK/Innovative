import React, { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import Snowfall from "../../../../shared/data/authentication/showndata";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../../../assets/images/brand-logos/desktop-logo.png';
import dark from '../../../../assets/images/brand-logos/desktop-dark.png';


const TwoStepBasic = () => {
    const [inputValues, setInputValues] = useState({
        one: "",
        two: "",
        three: "",
        four: "",
    });
    const [codeError, setCodeError] = useState<string | null>(null);
    const inputRefs = {
        one: useRef<HTMLInputElement | null>(null),
        two: useRef<HTMLInputElement | null>(null),
        three: useRef<HTMLInputElement | null>(null),
        four: useRef<HTMLInputElement | null>(null),
    };

    const handleChange = (
        field: keyof typeof inputValues,
        nextInputRef: React.RefObject<HTMLInputElement | null>,
        value: string
    ) => {
        if (/^[0-9]?$/.test(value)) { // Only allow 1 digit or empty
            setInputValues((prev) => ({ ...prev, [field]: value }));

            if (value && nextInputRef.current) {
                nextInputRef.current.focus();
            }
        }
    };

    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const codeComplete = Object.values(inputValues).every((val) => val !== '');

        if (!codeComplete) {
            setCodeError('Please enter the complete 4-digit code.');
        } else {
            setCodeError(null);
            let path = `${import.meta.env.BASE_URL}dashboards/sales`;
            navigate(path);
        }
    };

    useEffect(() => {
        const body = document.body
        body.classList.add("authentication-background");
        return () => {
            body.classList.remove("authentication-background");
        };
    }, []);
    return (
        <Fragment>
            <div className="container-lg">
                <Snowfall />
                <div className="row justify-content-center align-items-center authentication two-step-verification authentication-basic h-100">
                    <Col xl={11}>
                        <Row className="row justify-content-center">
                            <Col xxl={5} xl={5} lg={5} md={6} sm={8} className="col-12">
                                <div className="my-5 d-flex justify-content-center">
                                    <Link to={`${import.meta.env.BASE_URL}dashboards/sales`}>
                                        <img src={logo} alt="" className="authentication-brand desktop-logo" />
                                        <img src={dark} alt="img" className="authentication-brand desktop-dark" />
                                    </Link>
                                </div>
                                <Card className="custom-card my-4">
                                    <Card.Body className="p-5">
                                        <p className="h4 mb-2 fw-semibold">Verify Your Account</p>
                                        <p className="mb-4 text-muted fw-normal">Enter the 4 digit code sent to the registered email
                                            Id.</p>
                                        <Form onSubmit={handleSubmit}>
                                            <Row className="gy-3">
                                                <Col xl={12} className="mb-2">
                                                    <Row>
                                                        <div className="col-3">
                                                            <Form.Control type="text" className="form-control form-control-lg text-center" id="one"
                                                                value={inputValues.one}
                                                                onChange={(e) => handleChange('one', inputRefs.two, e.target.value)}
                                                                maxLength={1}
                                                                ref={inputRefs.one} />
                                                        </div>
                                                        <div className="col-3">
                                                            <Form.Control type="text" className="form-control form-control-lg text-center" id="two"
                                                                value={inputValues.two}
                                                                onChange={(e) => handleChange('two', inputRefs.three, e.target.value)}
                                                                maxLength={1}
                                                                ref={inputRefs.two} />
                                                        </div>
                                                        <div className="col-3">
                                                            <Form.Control type="text" className="form-control form-control-lg text-center" id="three"
                                                                value={inputValues.three}
                                                                onChange={(e) => handleChange('three', inputRefs.four, e.target.value)}
                                                                maxLength={1}
                                                                ref={inputRefs.three} />
                                                        </div>
                                                        <div className="col-3">
                                                            <Form.Control type="text" className="form-control form-control-lg text-center" id="four"
                                                                value={inputValues.four}
                                                                onChange={(e) => handleChange('four', inputRefs.one, e.target.value)}
                                                                maxLength={1}
                                                                ref={inputRefs.four} />
                                                        </div>
                                                    </Row>
                                                    {codeError && <div className="text-danger mb-3">{codeError}</div>}
                                                    <div className="form-check mt-2">
                                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                        <label className="form-check-label fw-normal fs-13"
                                                            htmlFor="defaultCheck1">
                                                            Did not recieve a code ?<Link to={`${import.meta.env.BASE_URL}pages/email/mail-app`}
                                                                className="text-primary ms-2 d-inline-block fw-medium">Resend</Link>
                                                        </label>
                                                    </div>
                                                </Col>
                                                <Col xl={12} className="d-grid mt-3">
                                                    <SpkButton Buttontype="submit" Size="lg" Buttonvariant="primary" Customclass="btn">Verify</SpkButton>
                                                </Col>
                                            </Row>
                                        </Form>
                                        <div className="text-center">
                                            <p className="fs-13 text-danger mt-3 mb-0"><sup><i className="ri-asterisk"></i></sup>Don't
                                                share the verification code with anyone !</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </div>
        </Fragment>
    );
};

export default TwoStepBasic;