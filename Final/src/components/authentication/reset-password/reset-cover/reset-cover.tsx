import React, { Fragment, useEffect, useState, type FormEvent } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import logo from '../../../../assets/images/brand-logos/desktop-logo.png';
import dark from '../../../../assets/images/brand-logos/desktop-dark.png';
import google from '../../../../assets/images/media/apps/google.png';
import facebook from '../../../../assets/images/media/apps/facebook.png';
import twitter from '../../../../assets/images/media/apps/twitter.png';
import png4 from '../../../../assets/images/media/png/4.png';

const ResetCover = () => {
    const [passwordVisibility, setPasswordVisibility] = useState<{ [key: string]: boolean }>({});

    const togglePasswordVisibility = (field: string) => {
        setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
    };
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [errors, setErrors] = useState<{ password?: string; newPassword?: string; confirmPassword?: string, }>({});

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
        if (val === confirmPassword) {
            setErrors(prev => ({ ...prev, confirmPassword: undefined }));
        }
    };
    const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setNewPassword(val);
        if (val.length >= 8) {
            setErrors(prev => ({ ...prev, newPassword: undefined }));
        }
        if (val === newPassword) {
            setErrors(prev => ({ ...prev, newPassword: undefined }));
        }
    };

    const validate = (): boolean => {
        const errs: { password?: string; newPassword?: string; confirmPassword?: string; } = {};

        if (!password) {
            errs.password = 'Password is required';
        } else if (password.length < 8) {
            errs.password = 'Password must be at least 8 characters';
        }

        if (!newPassword) {
            errs.newPassword = 'New  Password is required';
        } else if (newPassword.length < 8) {
            errs.password = 'Password must be at least 8 characters';
        }

        if (!confirmPassword) {
            errs.confirmPassword = 'Confirm Password is required';
        }
        else if (confirmPassword !== newPassword) {
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
        body.classList.add("bg-white");
        return () => {
            body.classList.remove("bg-white");
        };
    }, []);
    return (
        <Fragment>
            <div className="row authentication authentication-cover-main mx-0">
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
                                    <p className="h4 mb-2 fw-semibold">Reset Password</p>
                                    <p className="mb-4 text-muted fw-normal">Enter your email, and we'll send you a link to reset your password.</p>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-3">
                                            <Col xl={12}>
                                                <label htmlFor="reset-password" className="form-label text-default">Current Password</label>
                                                <div className="position-relative">
                                                    <Form.Control autoComplete="false" type={passwordVisibility.password ? 'text' : 'password'} className="form-control form-control-lg" id="reset-password" placeholder="current password"
                                                        value={password} onChange={handlePasswordChange} />
                                                    <Link to="#!" className="show-password-button text-muted" id="button-addon2" onClick={() => togglePasswordVisibility('password')}>
                                                        <i className={`${passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'}  mt-1 align-middle`}></i>
                                                    </Link>
                                                </div>
                                                {errors.password && <p className="text-danger mt-1 mb-0">{errors.password}</p>}
                                            </Col>
                                            <Col xl={12}>
                                                <label htmlFor="reset-newpassword" className="form-label text-default">New Password</label>
                                                <div className="position-relative">
                                                    <Form.Control autoComplete="false" type={(passwordVisibility.passwords) ? 'text' : "password"} className="form-control form-control-lg" id="reset-newpassword" placeholder="new password"
                                                        value={newPassword} onChange={handleNewPasswordChange} />
                                                    <Link to="#!" className="show-password-button text-muted" id="button-addon21" onClick={() => togglePasswordVisibility('passwords')}>
                                                        <i className={`${passwordVisibility.passwords ? 'ri-eye-line' : 'ri-eye-off-line'} mt-1 align-middle`}></i>
                                                    </Link>
                                                </div>
                                                {errors.newPassword && <p className="text-danger mt-1 mb-0">{errors.newPassword}</p>}
                                            </Col>
                                            <Col xl={12}>
                                                <label htmlFor="reset-confirmpassword" className="form-label text-default">Confirm Password</label>
                                                <div className="position-relative">
                                                    <Form.Control autoComplete="false" type={(passwordVisibility.passwordss) ? 'text' : "password"} className="form-control form-control-lg" id="reset-confirmpassword" placeholder="confirm password"
                                                        value={confirmPassword} onChange={handleConfirmPasswordChange} />
                                                    <Link to="#!" className="show-password-button text-muted" id="button-addon22" onClick={() => togglePasswordVisibility('passwordss')}>
                                                        <i className={`${passwordVisibility.passwordss ? 'ri-eye-line' : 'ri-eye-off-line'} mt-1 align-middle`}></i>
                                                    </Link>
                                                </div>
                                                {errors.confirmPassword && <p className="text-danger mt-1 mb-0">{errors.confirmPassword}</p>}
                                                <div className="mt-3">
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
                                            <SpkButton Buttontype="submit" Size="lg" Buttonvariant="primary" Customclass="btn">Create</SpkButton>
                                        </div>
                                    </Form>
                                    <div className="text-center">
                                        <p className="text-muted mt-3 mb-0">Already have an account? <Link to={`${import.meta.env.BASE_URL}authentication/sign-in/sign-in-basic`} className="text-primary">Sign In</Link></p>
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
        </Fragment>
    );
};

export default ResetCover;