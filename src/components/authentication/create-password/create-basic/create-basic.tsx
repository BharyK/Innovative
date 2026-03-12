import React, { Fragment, useEffect, useState, type FormEvent } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Snowfall from "../../../../shared/data/authentication/showndata";
import { Link, useNavigate } from "react-router-dom";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import logo from '../../../../assets/images/brand-logos/desktop-logo.png';
import dark from '../../../../assets/images/brand-logos/desktop-dark.png';
import google from '../../../../assets/images/media/apps/google.png';
import facebook from '../../../../assets/images/media/apps/facebook.png';
import twitter from '../../../../assets/images/media/apps/twitter.png';


const CreateBasic = () => {
    const [passwordVisibility, setPasswordVisibility] = useState<{ [key: string]: boolean }>({});

    const togglePasswordVisibility = (field: string) => {
        setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
    };
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setPassword(val);
        if (val.length >= 8) {
            setErrors(prev => ({ ...prev, password: undefined }));
        }
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setConfirmPassword(val);
        if (val.length >= 8) {
            setErrors(prev => ({ ...prev, confirmPassword: undefined }));
        }
        if (val === password) {
            setErrors(prev => ({ ...prev, confirmPassword: undefined }));
        }
    };

    const validate = (): boolean => {
        const errs: { password?: string; confirmPassword?: string } = {};

        if (!password) {
            errs.password = 'Password is required';
        } else if (password.length < 8) {
            errs.password = 'Password must be at least 8 characters';
        }

        if (!confirmPassword) {
            errs.confirmPassword = 'Confirm Password is required';
        } else if (confirmPassword !== password) {
            errs.confirmPassword = 'Passwords do not match';
        }

        setErrors(errs);
        return Object.keys(errs).length === 0;
    };


    const navigate = useNavigate();



    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (validate()) {
            navigate(`${import.meta.env.BASE_URL}dashboards/sales`);
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
                <div className="row justify-content-center authentication authentication-basic align-items-center h-100">
                    <Col xl={11}>
                        <Row className="justify-content-center">
                            <Col xxl={5} xl={5} lg={5} md={6} sm={8} className="col-12">
                                <div className="my-5 d-flex justify-content-center">
                                    <Link to={`${import.meta.env.BASE_URL}dashboards/sales`}>
                                        <img src={logo} alt="" className="authentication-brand desktop-logo" />
                                        <img src={dark} alt="img" className="authentication-brand desktop-dark" />
                                    </Link>
                                </div>
                                <Card className="custom-card my-4">
                                    <Card.Body className="p-5">
                                        <p className="h4 fw-semibold mb-2">Create Password</p>
                                        <p className="mb-4 text-muted fw-normal">Set a secure password to protect your account.</p>
                                        <Form onSubmit={handleSubmit}>
                                            <Row className="gy-3">
                                                <Col xl={12}>
                                                    <label htmlFor="create-password" className="form-label text-default">Password</label>
                                                    <div className="position-relative custom-input-class">
                                                        <Form.Control type={passwordVisibility.password ? 'text' : 'password'} className="form-control-lg" id="create-password" placeholder="password" value={password}
                                                            onChange={handlePasswordChange} />
                                                        <Link to="#!" className="show-password-button text-muted" onClick={() => togglePasswordVisibility('password')}><i className={`${passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'}  align-middle`}></i></Link>
                                                    </div>
                                                    {errors.password && <p className="text-danger mt-1 mb-0">{errors.password}</p>}
                                                </Col>
                                                <Col xl={12}>
                                                    <label htmlFor="create-confirmpassword" className="form-label text-default">Confirm Password</label>
                                                    <div className="position-relative custom-input-class">
                                                        <Form.Control type={passwordVisibility.passwords ? 'text' : 'password'} className="form-control-lg" id="create-confirmpassword" placeholder="password" value={confirmPassword}
                                                            onChange={handleConfirmPasswordChange} />
                                                        <Link to="#!" className="show-password-button text-muted" onClick={() => togglePasswordVisibility('passwords')}>
                                                            <i className={`${passwordVisibility.passwords ? 'ri-eye-line' : 'ri-eye-off-line'}  align-middle`}></i>
                                                        </Link>
                                                    </div>
                                                    {errors.confirmPassword && <p className="text-danger mt-1 mb-0">{errors.confirmPassword}</p>}
                                                    <div className="mt-2">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                            <label className="form-check-label fw-normal fs-13" htmlFor="defaultCheck1">
                                                                Remember password ?
                                                            </label>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="d-grid mt-4">
                                                <SpkButton Buttontype="submit" Size="lg" Buttonvariant="primary" Customclass="btn">Save Password</SpkButton>
                                            </div>
                                        </Form>
                                        <div className="text-center">
                                            <p className="mt-3 mb-0">Want to go back to the homepage? <Link to={`${import.meta.env.BASE_URL}dashboards/sales`} className="text-primary fw-medium">Click Here</Link></p>
                                        </div>
                                        <div className="text-center my-4 authentication-barrier">
                                            <span className="text-muted fs-12">Or SignIn With</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between gap-3 mb-3 flex-wrap">
                                            <SpkButton Buttonvariant="" Customclass="btn primary-dash-border auth-google-icon btn-lg  border d-flex align-items-center justify-content-center flex-fill">
                                                <span className="avatar avatar-xs">
                                                    <img src={google} alt="" />
                                                </span>
                                                <span className="lh-1 ms-2 fs-13 text-default fw-medium">Google</span>
                                            </SpkButton>
                                            <SpkButton Buttonvariant="" Customclass="btn secondary-dash-border auth-facebook-icon btn-lg  border d-flex align-items-center justify-content-center flex-fill">
                                                <span className="avatar avatar-xs">
                                                    <img src={facebook} alt="" />
                                                </span>
                                                <span className="lh-1 ms-2 fs-13 text-default fw-medium">Facebook</span>
                                            </SpkButton>
                                            <SpkButton Buttonvariant="" Customclass="btn danger-dash-border auth-twitter-icon btn-lg  border d-flex align-items-center justify-content-center flex-fill">
                                                <span className="avatar avatar-xs">
                                                    <img src={twitter} alt="" className="invert-1" />
                                                </span>
                                                <span className="lh-1 ms-2 fs-13 text-default fw-medium">Twitter</span>
                                            </SpkButton>
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

export default CreateBasic;