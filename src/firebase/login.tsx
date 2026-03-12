import { Fragment, useEffect, useState } from 'react';
import { Alert, Card, Col, Container, Form, Nav, Row, Tab, } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo6 from '../assets/images/brand-logos/react.png';
import logo7 from '../assets/images/brand-logos/firbase.png';
import { auth } from './auth';
import SpkButton from '../shared/@spk-reusable-components/reusable-uielements/spk-button';
import SpkTooltips from '../shared/@spk-reusable-components/reusable-uielements/spk-tooltips';
import Snowfall from '../shared/data/authentication/showndata';
import google from '../assets/images/media/apps/google.png';
import facebook from '../assets/images/media/apps/facebook.png';
import twitter from '../assets/images/media/apps/twitter.png';
import { toast, ToastContainer } from 'react-toastify';

const Signin = () => {
  const navigate = useNavigate();
  const [email1, setEmail1] = useState('Adminreact@domain.com');
  const [password1, setPassword1] = useState('spruko@123');
  const [rememberMe, _setRememberMe] = useState(true);
  const [loading1, setLoading1] = useState(false);
  const [error1, setError1] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleSignIn = async (event: React.MouseEvent) => {
    event.preventDefault();
    setLoading1(true);
    setError1(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!email1.trim() || !password1.trim()) {
        setError1('Email and Password are required.');
        return;
      }

      if (!rememberMe) {
        setError1('Please check the "Remember me" box.');
        return;
      }

      if (email1 !== 'Adminreact@domain.com' || password1 !== 'spruko@123') {
        setError1('Invalid email or password.');
        return;
      }

      toast.success('Login successful', { autoClose: 1500 });  // ✅ added
      navigate(`${import.meta.env.BASE_URL}dashboards/sales/`);
    } catch (error) {
    } finally {
      setLoading1(false);
    }
  };


  const [data, setData] = useState({ email: 'adminreact@gmail.com', password: '1234567890' });
  const [firebaseError, setFirebaseError] = useState('');
  const [firebaseLoading, setFirebaseLoading] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setFirebaseError('');
  };

  const firebaseLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    setFirebaseLoading(true);

    try {
      await auth.signInWithEmailAndPassword(data.email, data.password);
      toast.success('Firebase login successful', { autoClose: 1500 });  // ✅ added
      navigate(`${import.meta.env.BASE_URL}dashboards/sales/`);
    } catch (err) {
      setFirebaseError(err.message);
      toast.error('Invalid Firebase credentials', { autoClose: 1500 });  // ✅ added
    } finally {
      setFirebaseLoading(false);
    }
  };
  


  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);


  useEffect(() => {
    const body = document.body
    body.classList.add("authentication-background");
    return () => {
      body.classList.remove("authentication-background");
    };
  }, []);
  const routeChange = () => navigate(`${import.meta.env.BASE_URL}dashboards/sales`);
  // Firebase Login Handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(data.email, data.password);
      toast.success('Login successful', { autoClose: 1500 });
      setTimeout(routeChange, 1200);
    } catch (err) {
      setError(err.message || 'Login failed');
      toast.error('Invalid login credentials', { autoClose: 1500 });
    }
  };

  // React Mock Login (hardcoded)
  const handleMockLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = data;

    if (email === 'adminnextjs@gmail.com' && password === '1234567890') {
      toast.success('Login successful', { autoClose: 1500 });
      setTimeout(routeChange, 1200);
    } else {
      setError('The login credentials did not match.');
      toast.error('Invalid login credentials', { autoClose: 1500 });
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <Container>
        <Snowfall />
        <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
          <Col xxl={5} xl={5} lg={5} md={6} sm={8} className="col-12">
            <Tab.Container defaultActiveKey="first">
              {/* <Nav className="justify-content-center p-0 custom-login pt-5">
                <SpkTooltips placement="top" title="React">
                  <Nav.Item>
                    <Nav.Link eventKey="first"><img src={logo6} alt="react" /></Nav.Link>
                  </Nav.Item>
                </SpkTooltips>
                <SpkTooltips placement="top" title="Firebase">
                  <Nav.Item>
                    <Nav.Link eventKey="second"><img src={logo7} alt="Firebase" /></Nav.Link>
                  </Nav.Item>
                </SpkTooltips>
              </Nav> */}

              <Tab.Content>

                <Tab.Pane eventKey="first" className="border-0 p-0">



                  <Card className="custom-card my-4">
                    <Card.Body className="p-5">
                      <p className="h4 mb-2 fw-semibold">Sign In</p>
                      <p className="mb-4 text-muted fw-normal">Welcome back, We're glad to see you again!</p>
                      {error1 && <Alert variant="danger" onClose={() => setError1(null)} dismissible>{error1}</Alert>}

                      <Form onSubmit={handleMockLogin}>
                        <Row className="gy-3">
                          <Col xl={12}>
                            <label htmlFor="signin-username" className="form-label text-default">User Name</label>
                            <Form.Control autoComplete="false" type="text" className="form-control-lg" id="signin-username" value={email1} onChange={(e) => setEmail1(e.target.value)} placeholder="user name" />
                          </Col>
                          <Col xl={12} className="mb-2">
                            <label htmlFor="signin-password" className="form-label text-default d-block">Password
                              <Link to={`${import.meta.env.BASE_URL}authentication/reset-password/reset-basic`} className="float-end  link-danger op-5 fw-medium fs-12">Forget password ?</Link></label>
                            <div className="position-relative">
                              <Form.Control autoComplete="false" type={showPassword ? 'text' : 'password'} className="form-control-lg" id="signin-password"
                                placeholder="password" value={password1} onChange={(e) => setPassword1(e.target.value)} />
                              <Link to="#!" className="show-password-button text-muted" id="button-addon2" onClick={() => setShowPassword(!showPassword)}>
                                <i className={`ri-${showPassword ? 'eye-line' : 'eye-off-line '} mt-1 align-middle`}></i>
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
                        <button onClick={handleSignIn} disabled={loading1} className="btn-wave btn btn btn-primary btn-lg w-100">
                          {loading1 && <i className="fa fa-spinner fa-spin me-2" />}
                          Sign In
                        </button>
                      </Form>
                      <div className="text-center mt-2">
                        <p className="text-muted">Don't have an account? <Link to={`${import.meta.env.BASE_URL}authentication/sign-up/sign-up-basic`} className="text-primary">Sign Up</Link></p>
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
                </Tab.Pane>

                <Tab.Pane eventKey="second" className="border-0 p-0">
                  <Card className="custom-card my-4">
                    <Card.Body className="p-5">
                      <p className="h4 mb-2 fw-semibold">Sign In</p>
                      <p className="mb-4 text-muted fw-normal">Welcome back, John! We're glad to see you again!</p>
                      {firebaseError && <Alert variant="danger">{firebaseError}</Alert>}

                      <Form onSubmit={handleLogin}>
                        <Row className="gy-3">
                          <Col xl={12}>
                            <label htmlFor="signin-username" className="form-label text-default">User Name</label>
                            <Form.Control autoComplete="false" type="text" className="form-control-lg" id="signin-username" value={data.email} onChange={changeHandler} placeholder="user name" />
                          </Col>
                          <Col xl={12} className="mb-2">
                            <label htmlFor="signin-password" className="form-label text-default d-block">Password
                              <Link to={`${import.meta.env.BASE_URL}authentication/reset-password/reset-basic`} className="float-end  link-danger op-5 fw-medium fs-12">Forget password ?</Link></label>
                            <div className="position-relative">
                              <Form.Control autoComplete="false" type={showPassword1 ? 'text' : 'password'} className="form-control-lg" id="signin-password"
                                placeholder="password" value={data.password} onChange={changeHandler} />
                              <Link to="#!" className="show-password-button text-muted" id="button-addon2" onClick={() => setShowPassword1(!showPassword1)}>
                                <i className={`ri-${showPassword1 ? 'eye-line' : 'eye-off-line'} align-middle mt-1`} ></i>
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
                        <button onClick={firebaseLogin} disabled={firebaseLoading} className="btn-wave btn btn btn-primary btn-lg w-100" >
                          {firebaseLoading && <span className="spinner-border spinner-border-sm me-2" />}
                          Sign In
                        </button>
                      </Form>
                      <div className="text-center mt-2">
                        <p className="text-muted">Don't have an account? <Link to={`${import.meta.env.BASE_URL}authentication/sign-up/sign-up-basic`} className="text-primary">Sign Up</Link></p>
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
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Signin;
