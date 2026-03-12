import React, { Fragment, useEffect, useState, type ChangeEvent } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Snowfall from "../../../../shared/data/authentication/showndata";
import SpkAlert from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-alert";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import logo from '../../../../assets/images/brand-logos/desktop-logo.png';
import dark from '../../../../assets/images/brand-logos/desktop-dark.png';
import google from '../../../../assets/images/media/apps/google.png';
import facebook from '../../../../assets/images/media/apps/facebook.png';
import twitter from '../../../../assets/images/media/apps/twitter.png';

const SignUpBasic = () => {
    const [inputpassWord, setInputPassword] = useState(false);
    const [err, setError] = useState("");
    const [data, setData] = useState({
        "email": "adminnext@gmail.com",
        "password": "1234567890",
        "confirmpassword": "1234567890",
    });
    const { email, password, confirmpassword } = data;
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("")
    };
    const navigate = useNavigate();
    const Login1 = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            toast.error('Passwords do not match!', {
                position: 'top-right',
                autoClose: 3000,
                pauseOnHover: true,
                closeOnClick: true,
            });
            setData({
                "email": "adminnext@gmail.com",
                "password": "1234567890",
                "confirmpassword": "1234567890",
            });
            return;  // Stop further execution if passwords don't match
        }
        if (data.email == "adminnext@gmail.com" && data.password == "1234567890") {
            toast.success('Created Successful!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            let path = `${import.meta.env.BASE_URL}dashboards/sales`;
            navigate(path);
        }
        else {
            toast.error('Invalid email or password', {
                position: "top-right",
                autoClose: 3000,
                pauseOnHover: true,
                closeOnClick: true,
            });
            setError("The Auction details did not Match");
            setData({
                "email": "adminnext@gmail.com",
                "password": "1234567890",
                "confirmpassword": "1234567890",
            });
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
            <ToastContainer />
            <div className="container-lg">
                <Snowfall />
                <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
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
                                        <p className="h4 mb-2 fw-semibold">Sign Up</p>
                                        <p className="mb-4 text-muted">Sign up now to create a free account and join us!</p>
                                        {err &&
                                            <SpkAlert variant="danger">{err}</SpkAlert>
                                        }
                                        <Form onSubmit={Login1}>
                                            <Row className="gy-3">
                                                <Col xl={12}>
                                                    <label htmlFor="signup-firstname" className="form-label text-default">Email
                                                        Address</label>
                                                    <Form.Control autoComplete="false" type="email" className="form-control-lg" id="signup-firstname"
                                                        placeholder="Enter Email ID" defaultValue={email} onChange={changeHandler} />
                                                </Col>
                                                <Col xl={12}>
                                                    <label htmlFor="signup-password" className="form-label text-default">Password</label>
                                                    <div className="position-relative">
                                                        <Form.Control autoComplete="false" className="form-control-lg" id="signup-password"
                                                            placeholder="Password" type={(inputpassWord) ? 'text' : "password"} defaultValue={password} onChange={changeHandler} />
                                                        <Link to="#!" className="show-password-button text-muted" onClick={() => setInputPassword(!inputpassWord)}
                                                            id="button-addon2"> <i className={`${inputpassWord ? 'ri-eye-line' : 'ri-eye-off-line'} mt-1 align-middle`}></i></Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="d-grid mt-4">
                                                <SpkButton Buttontype="submit" Size="lg" Buttonvariant="primary" Customclass="btn">Create Account</SpkButton>
                                            </div>
                                        </Form>
                                        <div className="text-center">
                                            <p className="mt-3 mb-0">Already have an account? <Link
                                                to={`${import.meta.env.BASE_URL}dashboards/sales`} className="fw-medium text-primary">Sign In</Link></p>
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
                </Row>
            </div>
        </Fragment>
    );
};

export default SignUpBasic;