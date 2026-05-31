import React, { Fragment, useEffect, useState, type ChangeEvent } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Snowfall from "../../../../shared/data/authentication/showndata";
import SpkAlert from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-alert";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import logo from "../../../../assets/images/brand-logos/desktop-logo.png";
import dark from "../../../../assets/images/brand-logos/desktop-dark.png";
import { getApi, postApi } from "../../../../api/services";

const SignUpBasic = () => {
  const [inputpassWord, setInputPassword] = useState(false);
  const [errors, setErrors] = useState({
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  password: "",
  confirmpassword: "",
  roleIds: "",
});
const [data, setData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  userName: "",
  password: "",
  confirmpassword: "",
  roleIds: [] as number[],
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

const mobileRegex = /^[0-9]{10}$/;

const [countryCode, setCountryCode] = useState("+91");

const [roles, setRoles] = useState<any[]>([]);
  
const changeHandler = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setData((prev) => ({
    ...prev,
    [name]: value,
  }));

  switch (name) {
    case "email":
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value)
          ? ""
          : "Please enter a valid email address",
      }));
      break;

    case "mobileNumber":
      setErrors((prev) => ({
        ...prev,
        mobileNumber: mobileRegex.test(value)
          ? ""
          : "Mobile number must be exactly 10 digits",
      }));
      break;

    case "password":
      setErrors((prev) => ({
        ...prev,
        password: passwordRegex.test(value)
          ? ""
          : "Password must contain uppercase, lowercase, number and special character",
        confirmpassword:
          data.confirmpassword &&
          value !== data.confirmpassword
            ? "Passwords do not match"
            : "",
      }));
      break;

    case "confirmpassword":
      setErrors((prev) => ({
        ...prev,
        confirmpassword:
          value === data.password
            ? ""
            : "Passwords do not match",
      }));
      break;

    default:
      break;
  }
};
  const navigate = useNavigate();
  const fetchRoles = async () => {
    try {
      const response = await getApi("/Uitility");
      setRoles(response.data.roles);
      console.log(response.data.roles);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
  useEffect(() => {
    fetchRoles();
  }, []);
const Login1 = async (e: React.FormEvent) => {
  e.preventDefault();
if (!emailRegex.test(data.email)) {
  toast.error("Please enter a valid email address");
  return;
}

if (!mobileRegex.test(data.mobileNumber)) {
  toast.error("Mobile number must be 10 digits");
  return;
}

if (data.password !== data.confirmpassword) {
  toast.error("Passwords do not match");
  return;
}

if (!data.roleIds.length) {
  toast.error("Please select a role");
  return;
}
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (!passwordRegex.test(data.password)) {
    setErrors((prev) => ({
      ...prev,
      password:
        "Password must contain 8+ characters, uppercase, lowercase, number and special character.",
    }));

    return;
  }

  if (data.password !== data.confirmpassword) {
    setErrors((prev) => ({
      ...prev,
      confirmpassword: "Passwords do not match.",
    }));

    toast.error("Passwords do not match!");
    return;
  }

  const payload = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    mobileNumber: data.mobileNumber,
    userName: data.email,
    password: data.password,
    roleIds: [Number(data.roleIds[0])],
  };

  console.log("Payload => ", payload);

  try {
    const response = await postApi("/UserProfile/register", payload);

    toast.success("Account Created Successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    console.log(payload);
  } catch (error) {
    toast.error("Failed to create account");
    console.error(error);
  }
};
  useEffect(() => {
    const body = document.body;
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
          <Col xl={12}>
            <Row className="justify-content-center">
              <Col xxl={5} xl={12} lg={6} md={10} sm={12} className="col-12">
                <div className="my-5 d-flex justify-content-center">
                  <Link to={`${import.meta.env.BASE_URL}dashboards/sales`}>
                    <img
                      src={logo}
                      alt=""
                      className="authentication-brand desktop-logo"
                    />
                    <img
                      src={dark}
                      alt="img"
                      className="authentication-brand desktop-dark"
                    />
                  </Link>
                </div>
                <Card className="custom-card my-4">
                  <Card.Body className="p-5">
                    <p className="h4 mb-2 fw-semibold">Sign Up</p>
                    <p className="mb-4 text-muted">
                      Sign up now to create a account and join us!
                    </p>
                    {/* {err && <SpkAlert variant="danger">{err}</SpkAlert>} */}
                    <Form onSubmit={Login1}>
                      <Row className="gy-3">
  <Col xl={4}>
    <label htmlFor="signup-firstname" className="form-label text-default">
      First Name
    </label>
    <Form.Control
      type="text"
      name="firstName"
      value={data.firstName}
     // className="form-control-lg"
      id="signup-firstname"
      placeholder="Enter First Name"
      onChange={changeHandler}
    />
  </Col>

  <Col xl={4}>
    <label htmlFor="signup-lastname" className="form-label text-default">
      Last Name
    </label>
    <Form.Control
      type="text"
      name="lastName"
      value={data.lastName}
     // className="form-control-lg"
      id="signup-lastname"
      placeholder="Enter Last Name"
      onChange={changeHandler}
    />
  </Col>

  <Col xl={4}>
    <label className="form-label text-default">
      Mobile Number
    </label>

    <div className="d-flex gap-2">
      <Form.Select
        style={{ maxWidth: "110px" }}
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
      >
        <option value="+91">🇮🇳 +91</option>
        <option value="+1">🇺🇸 +1</option>
        <option value="+44">🇬🇧 +44</option>
        <option value="+971">🇦🇪 +971</option>
      </Form.Select>

      <Form.Control
        type="text"
        name="mobileNumber"
        value={data.mobileNumber}
        maxLength={10}
        placeholder="Enter Mobile Number"
        onChange={changeHandler}
      />
    </div>

    {errors.mobileNumber && (
      <small className="text-danger">
        {errors.mobileNumber}
      </small>
    )}
  </Col>

  <Col xl={4}>
    <label htmlFor="signup-email" className="form-label text-default">
      Email Address
    </label>

    <Form.Control
      type="email"
      name="email"
      value={data.email}
     // className="form-control-lg"
      id="signup-email"
      placeholder="Enter Email ID"
      onChange={changeHandler}
    />

    {errors.email && (
      <small className="text-danger">
        {errors.email}
      </small>
    )}
  </Col>

  <Col xl={4}>
    <label htmlFor="signup-password" className="form-label text-default">
      Password
    </label>

    <div className="position-relative">
      <Form.Control
        type={inputpassWord ? "text" : "password"}
        name="password"
        value={data.password}
       // className="form-control-lg"
        id="signup-password"
        placeholder="Password"
        onChange={changeHandler}
      />

      <Link
        to="#!"
        className="show-password-button text-muted"
        onClick={() => setInputPassword(!inputpassWord)}
      >
        <i
          className={`${
            inputpassWord ? "ri-eye-line" : "ri-eye-off-line"
          } mt-1 align-middle`}
        />
      </Link>
    </div>

    {errors.password && (
      <small className="text-danger">
        {errors.password}
      </small>
    )}
  </Col>

  <Col xl={4}>
    <label
      htmlFor="signup-confirm-password"
      className="form-label text-default"
    >
      Confirm Password
    </label>

    <div className="position-relative">
      <Form.Control
        type={inputpassWord ? "text" : "password"}
        name="confirmpassword"
        value={data.confirmpassword}
       // className="form-control-lg"
        id="signup-confirm-password"
        placeholder="Confirm Password"
        onChange={changeHandler}
      />

      <Link
        to="#!"
        className="show-password-button text-muted"
        onClick={() => setInputPassword(!inputpassWord)}
      >
        <i
          className={`${
            inputpassWord ? "ri-eye-line" : "ri-eye-off-line"
          } mt-1 align-middle`}
        />
      </Link>
    </div>

    {errors.confirmpassword && (
      <small className="text-danger">
        {errors.confirmpassword}
      </small>
    )}
  </Col>

  <Col xl={4}>
    <label className="form-label text-default">
      Role
    </label>

    <Form.Select
      value={data.roleIds[0] || ""}
      onChange={(e) =>
        setData((prev) => ({
          ...prev,
          roleIds: [Number(e.target.value)],
        }))
      }
    >
      <option value="">Select Role</option>

      {roles.map((role) => (
        <option key={role.roleId} value={role.roleId}>
          {role.roleName}
        </option>
      ))}
    </Form.Select>
  </Col>
</Row>
                      <div className="d-grid mt-4">
                        <SpkButton
                          Buttontype="submit"
                          Size="lg"
                          Buttonvariant="primary"
                          Customclass="btn"
                        >
                          Create Account
                        </SpkButton>
                      </div>
                    </Form>
                    <div className="text-center">
                      <p className="mt-3 mb-0">
                        Already have an account?{" "}
                        <Link
                          to={`${import.meta.env.BASE_URL}`}
                          className="fw-medium text-primary"
                        >
                          Sign In
                        </Link>
                      </p>
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
