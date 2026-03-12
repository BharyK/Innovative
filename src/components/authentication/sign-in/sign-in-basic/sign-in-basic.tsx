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


const SignInBasic = () => {
    const [passwordShow, setPasswordShow] = useState(false);

    const [err, setError] = useState("");
    const [data, setData] = useState({
        "email": "adminnext@gmail.com",
        "password": "1234567890",
    });

    const { email, password } = data;
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("")
    };
    const navigate = useNavigate();
    const Login1 = (e: React.FormEvent) => {
        e.preventDefault();
        if (data.email == "adminnext@gmail.com" && data.password == "1234567890") {
            toast.success('Login Successful!', {
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
            setError("The Auction details did not Match");
            toast.error('Invalid Credentials!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setData({
                "email": "adminnext@gmail.com",
                "password": "1234567890",
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
                                {/* <div className="my-5 d-flex justify-content-center">
                                    <Link to={`${import.meta.env.BASE_URL}dashboards/sales`}>
                                        <img src={logo} alt="" className="authentication-brand desktop-logo" />
                                        <img src={dark} alt="img" className="authentication-brand desktop-dark" />
                                    </Link>
                                </div> */}
                                <Card className="custom-card my-4">
                                    <Card.Body className="p-5">
                                        <p className="h4 mb-2 fw-semibold">Sign In</p>
                                        <p className="mb-4 text-muted fw-normal">Welcome back, We're glad to see you again!</p>
                                        {err &&
                                            <SpkAlert variant="danger">{err}</SpkAlert>
                                        }
                                        <Form onSubmit={Login1}>
                                            <Row className="gy-3">
                                                <Col xl={12}>
                                                    <label htmlFor="signin-username" className="form-label text-default">User Name</label>
                                                    <Form.Control autoComplete="false" type="text" className="form-control-lg" id="signin-username" defaultValue={email} onChange={changeHandler}
                                                        placeholder="user name" />
                                                </Col>
                                                <Col xl={12} className="mb-2">
                                                    <label htmlFor="signin-password" className="form-label text-default d-block">Password<Link
                                                        to={`${import.meta.env.BASE_URL}authentication/reset-password/reset-basic`}
                                                        className="float-end  link-danger op-5 fw-medium fs-12">Forget password
                                                        ?</Link></label>
                                                    <div className="position-relative">
                                                        <Form.Control autoComplete="false" type={(passwordShow) ? 'text' : "password"} className="form-control-lg" id="signin-password"
                                                            placeholder="password" defaultValue={password} onChange={changeHandler} />
                                                        <Link to="#!" className="show-password-button text-muted" id="button-addon2" onClick={() => setPasswordShow(!passwordShow)}>
                                                            <i className={`${passwordShow ? 'ri-eye-line' : 'ri-eye-off-line'} mt-1 align-middle`}></i>
                                                        </Link>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                id="defaultCheck1" />
                                                            <label className="form-check-label fw-normal fs-13"
                                                                htmlFor="defaultCheck1">
                                                                Remember password ?
                                                            </label>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="d-grid mt-4">
                                                <SpkButton Buttontype="submit" Size="lg" Buttonvariant="primary" Customclass="btn">Sign In</SpkButton>
                                            </div>
                                        </Form>
                                        <div className="text-center">
                                            <p className="text-muted mt-3 mb-0">Dont have an account? <Link to={`${import.meta.env.BASE_URL}authentication/sign-up/sign-up-basic`}
                                                className="text-primary fw-medium">Sign Up</Link></p>
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

export default SignInBasic;