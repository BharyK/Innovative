import React, { Fragment, useEffect, useState, type FormEvent } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Snowfall from "../../../../shared/data/authentication/showndata";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import logo from '../../../../assets/images/brand-logos/desktop-logo.png';
import dark from '../../../../assets/images/brand-logos/desktop-dark.png';
import face15 from '../../../../assets/images/faces/15.jpg';

const LockBasic = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setPassword(val);
        if (val.length >= 8) {
            setErrors(prev => ({ ...prev, password: undefined }));
        }
    };

    const validate = (): boolean => {
        const errs: { password?: string; confirmPassword?: string } = {};

        if (!password) {
            errs.password = 'Password is required';
        } else if (password.length <= 8) {
            errs.password = 'Password must be at least 8 characters';
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
                                <Card className="custom-card">
                                    <Card.Body className="p-5">
                                        <p className="h4 mb-2 fw-semibold">Lock Screen</p>
                                        <p className="mb-3 text-muted fw-normal">Secure your device by locking it to prevent unauthorized access.</p>
                                        <div className="d-flex gap-2 align-items-center mb-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face15} alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-dark fw-medium">millerjack@gmail.com</p>
                                            </div>
                                        </div>
                                        <Form onSubmit={handleSubmit}>
                                            <Row className="gy-3">
                                                <Col xl={12} className="mb-2">
                                                    <label htmlFor="lockscreen-password"
                                                        className="form-label text-default">Password</label>
                                                    <div className="position-relative">
                                                        <Form.Control autoComplete="false" type={(passwordShow) ? 'text' : "password"} className="form-control-lg" id="lockscreen-password"
                                                            placeholder="password" value={password} onChange={handlePasswordChange} />
                                                        <Link to="#!" className="show-password-button text-muted"
                                                            onClick={() => setPasswordShow(!passwordShow)}
                                                            id="button-addon2"><i className={`${passwordShow ? 'ri-eye-line' : 'ri-eye-off-line'} mt-1 align-middle`}></i></Link>
                                                    </div>
                                                    {errors.password && <p className="text-danger mt-1 mb-0">{errors.password}</p>}
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
                                                <Col xl={12} className="d-grid mt-2">
                                                    <SpkButton Buttontype="submit" Size="lg" Buttonvariant="primary" Customclass="btn">Unlock</SpkButton>
                                                </Col>
                                            </Row>
                                        </Form>
                                        <div className="text-center">
                                            <p className="fs-13 mt-3 mb-0">Try unlock with <Link className="text-success" to="#!"><u className="fw-medium">Finger print</u></Link> / <Link className="text-success" to="#!"><u className="fw-medium">Face Id</u></Link></p>
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

export default LockBasic;