import React, { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../../../assets/images/brand-logos/desktop-logo.png';
import dark from '../../../../assets/images/brand-logos/desktop-dark.png';
import png4 from '../../../../assets/images/media/png/4.png';


const TwoStepCover = () => {
    const [inputValues, setInputValues] = useState({
        one: "",
        two: "",
        three: "",
        four: "",
    });
    const [_codeError, setCodeError] = useState<string | null>(null);
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
        body.classList.add("bg-white");
        return () => {
            body.classList.remove("bg-white");
        };
    }, []);
    return (
        <Fragment>
            <div className="row authentication two-step-verification authentication-cover-main mx-0">
                <Col xxl={7} xl={7} lg={12} className="d-xl-block d-none px-0">
                    <div className="authentication-cover overflow-hidden text-center">
                        <div className="authentication-cover-logo">
                            <Link to={`${import.meta.env.BASE_URL}dashboards/sales`}>
                                <img src={logo} alt="" className="authentication-brand desktop-logo" />
                                <img src={dark} alt="img" className="authentication-brand desktop-dark" />
                            </Link>
                        </div>
                        <h3 className="fw-semibold mt-3">Welcome to Innovative</h3>
                        <span className="fs-15 text-muted">Streamline Your Work and Life for Maximum Productivity</span>
                        <div className="mt-5">
                            <img src={png4} alt="img" className="auth-cover-img" />
                        </div>
                        <div className="auth-cover-bg"></div>
                    </div>
                </Col>
                <Col xxl={5} xl={5}>
                    <Row className="justify-content-center align-items-center h-100">
                        <Col xxl={8} xl={8} lg={6} md={6} sm={8} className="col-12">
                            <Card className="custom-card shadow-none my-auto border-0">
                                <Card.Body className="p-5">
                                    <p className="h4 mb-2 fw-semibold">Verify Your Account</p>
                                    <p className="mb-4 text-muted fw-normal">Enter the 4 digit code sent to the registered email Id.</p>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-3">
                                            <Col xl={12} className="mb-2">
                                                <div className="row">
                                                    <div className="col-3">
                                                        <Form.Control value={inputValues.one}
                                                            onChange={(e) => handleChange('one', inputRefs.two, e.target.value)}
                                                            maxLength={1}
                                                            ref={inputRefs.one} type="text" className="form-control-lg text-center" id="one" />
                                                    </div>
                                                    <div className="col-3">
                                                        <Form.Control value={inputValues.two}
                                                            onChange={(e) => handleChange('two', inputRefs.three, e.target.value)}
                                                            maxLength={1}
                                                            ref={inputRefs.two} type="text" className="form-control-lg text-center" id="two" />
                                                    </div>
                                                    <div className="col-3">
                                                        <Form.Control value={inputValues.three}
                                                            onChange={(e) => handleChange('three', inputRefs.four, e.target.value)}
                                                            maxLength={1}
                                                            ref={inputRefs.three} type="text" className="form-control-lg text-center" id="three" />
                                                    </div>
                                                    <div className="col-3">
                                                        <Form.Control value={inputValues.four}
                                                            onChange={(e) => handleChange('four', inputRefs.one, e.target.value)}
                                                            maxLength={1}
                                                            ref={inputRefs.four} type="text" className="form-control-lg text-center" id="four" />
                                                    </div>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                    <label className="form-check-label fw-normal fs-13" htmlFor="defaultCheck1">
                                                        Did not recieve a code ?<Link to={`${import.meta.env.BASE_URL}pages/email/mail-app`} className="text-primary ms-2 d-inline-block fw-medium">Resend</Link>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col xl={12} className="d-grid mt-3">
                                                <SpkButton Buttontype="submit" Size="lg" Buttonvariant="primary" Customclass="btn">Verify</SpkButton>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <div className="text-center">
                                        <p className="fs-12 text-danger mt-3 mb-0"><sup><i className="ri-asterisk"></i></sup>Don't share the verification code with anyone !</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </div>
        </Fragment>
    );
};

export default TwoStepCover;