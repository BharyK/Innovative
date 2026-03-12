import { Fragment, useState } from "react";
import { Card, Col, Form, ListGroup, Modal, Nav, Row, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Link } from "react-router-dom";
import SpkListgroup from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-listgroup";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import png5 from '../../../../assets/images/ecommerce/png/5.png';
import png6 from '../../../../assets/images/ecommerce/png/6.png';
import png8 from '../../../../assets/images/ecommerce/png/8.png';
import png11 from '../../../../assets/images/ecommerce/png/11.png';
import png14 from '../../../../assets/images/ecommerce/png/14.png';
import png15 from '../../../../assets/images/ecommerce/png/15.png';
import type { ProductInfoType } from "../../../../shared/data/apps/ecommerce/productsdata";



const Checkout = () => {
    const { buyCart } = useSelector((state: { buyCart: ProductInfoType[] }) => state.buyCart);
    const { buyNow } = useSelector((state: { buyNow: ProductInfoType[] }) => state.buyNow);



    const [checkout, setCheckout] = useState(false);
    const handleShow = () => setCheckout(true);
    const handleClose = () => setCheckout(false);

    const [key, setKey] = useState('first');

    const handleTabSelect = (selectedKey: string | null) => {
        if (selectedKey) {
            setKey(selectedKey);
        }
    };

    const handleNext = () => {
        switch (key) {
            case 'first':
                setKey('second');
                break;
            case 'second':
                setKey('third');
                break;
            case 'third':
                setKey('fourth');
                break;
            default:
                break;
        }
    }

    const handlePrevious = () => {
        switch (key) {
            case 'second':
                setKey('first');
                break;
            case 'third':
                setKey('second');
                break;
            case 'fourth':
                setKey('third');
            default:
                break;
        }
    }

    const GiftData = [
        { label: 'Free Delivery', value: 1 },
        { label: 'Custom Gift Set', value: 2 },
        { label: 'Sweater Subscription', value: 3 },
        { label: 'Wrapped with Elegance', value: 4 },
    ]
    const ServiceData = [
        { label: 'Care+Package($10.00)', value: 1 },
        { label: 'Environmental Friendly($2.00)', value: 2 },
        { label: 'Golden Guard($5.00)', value: 3 },
    ]
    const cityData = [
        { label: 'Georgetown', value: 1 },
        { label: 'Alexandria', value: 2 },
        { label: 'Rockville', value: 3 },
        { label: 'Frederick', value: 4 },
    ]
    const StateData = [
        { label: 'Washington,D.C', value: 1 },
        { label: 'California', value: 2 },
        { label: 'Texas', value: 3 },
        { label: 'Alaska', value: 4 },
    ]
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Checkout" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Checkout" activepage="Checkout" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Checkout</Card.Title>
                        </Card.Header>
                        <Card.Body className="py-0">
                            <Row>
                                <Tab.Container defaultActiveKey="first" activeKey={key} onSelect={handleTabSelect}>
                                    <Col xl={12}>
                                        <div className="p-2 bg-light rounded">
                                            <Nav className=" nav-pills product-checkout-nav p-3 gap-4 bg-white rounded border justify-content-center"
                                                role="tablist">
                                                <Nav.Item className="m-0" role="presentation">
                                                    <Nav.Link eventKey="first" className="w-100 text-center" id="order-tab"
                                                        data-bs-toggle="tab" data-bs-target="#order-tab-pane"
                                                        href="#personal-info" aria-selected="true" role="tab">
                                                        <span className="avatar avatar-lg border avatar-rounded">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                                    viewBox="0 0 24 24" width="24px" fill="#000">
                                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                                    <path
                                                                        d="M8 16h12V4H8v12zm2-10h8v2h-8V6zm0 3h8v2h-8V9zm0 3h4v2h-4v-2z"
                                                                        opacity=".8" fill="#fff" />
                                                                    <path
                                                                        d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2zM6 4v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zm14 12H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <div>
                                                            <p className="mb-1 fs-15">Shipping</p>
                                                            <span className="text-muted fs-13">Add Shipping Adress</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className="me-sm-4 me-0" role="presentation">
                                                    <Nav.Link eventKey="second" className="w-100 text-center" id="confirmed-tab"
                                                        data-bs-toggle="tab" data-bs-target="#confirm-tab-pane"
                                                        role="tab" aria-controls="confirm-tab-pane" href="#personal-info"
                                                        aria-selected="false" tabIndex={-1}>
                                                        <span className="avatar avatar-lg border avatar-rounded">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                                    viewBox="0 0 24 24" width="24px" fill="#000">
                                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                                    <path
                                                                        d="M10.21 16.83l-1.96-2.36L5.5 18h11l-3.54-4.71z" />
                                                                    <path
                                                                        d="M16.5 18h-11l2.75-3.53 1.96 2.36 2.75-3.54L16.5 18zM17 7h-3V6H4v14h14V10h-1V7z"
                                                                        opacity=".8" fill="#fff" />
                                                                    <path
                                                                        d="M20 4V1h-2v3h-3v2h3v2.99h2V6h3V4zm-2 16H4V6h10V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10h-2v10z" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <div>
                                                            <p className="mb-1 fs-15">Personal Details</p>
                                                            <span className="text-muted fs-13">Add Personal Details</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className="me-sm-4 me-0" role="presentation">
                                                    <Nav.Link eventKey="third" className="w-100 text-center" id="shipped-tab"
                                                        data-bs-toggle="tab" data-bs-target="#shipped-tab-pane"
                                                        role="tab" aria-controls="shipped-tab-pane"
                                                        href="#personal-info" aria-selected="false" tabIndex={-1}>
                                                        <span className="avatar avatar-lg border avatar-rounded">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                                    viewBox="0 0 24 24" width="24px" fill="#000">
                                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                                    <path
                                                                        d="M13 17c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6V5H5v14h14v-2h-6z"
                                                                        opacity=".8" fill="#fff" />
                                                                    <path
                                                                        d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
                                                                    <circle cx="16" cy="12" r="1.5" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <div>
                                                            <p className="mb-1 fs-15">Payment</p>
                                                            <span className="text-muted fs-13">Add Payment Details</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className="me-sm-4 me-0" role="presentation">
                                                    <Nav.Link eventKey="fourth" className="w-100 text-center" id="delivered-tab"
                                                        data-bs-toggle="tab" data-bs-target="#delivery-tab-pane"
                                                        role="tab" aria-controls="delivery-tab-pane"
                                                        aria-selected="false" href="#personal-info" tabIndex={-1}>
                                                        <span className="avatar avatar-lg border avatar-rounded">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                                    viewBox="0 0 24 24" width="24px" fill="#000">
                                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                                    <path d="M6.26 9L12 13.47 17.74 9 12 4.53z"
                                                                        opacity=".8" fill="#fff" />
                                                                    <path
                                                                        d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <div>
                                                            <p className="mb-1 fs-15">Confirmation</p>
                                                            <span className="text-muted fs-13">Your Order Is
                                                                Completed</span>
                                                        </div>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <Card className="custom-card shadow-none">
                                            <Tab.Content className="product-checkout border border-dashed rounded mt-3">
                                                <Tab.Pane eventKey="first" className="show p-0 border-0" id="order-tab-pane"
                                                    role="tabpanel" aria-labelledby="account" tabIndex={0}>
                                                    <div className="p-sm-4 p-2">
                                                        <div
                                                            className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                            <div>Shipping Address :</div>
                                                            <div className="mt-sm-0 mt-2">
                                                                <SpkButton Buttonvariant="secondary" onClickfunc={handleShow} Customclass="btn btn-secondary btn-sm">
                                                                    <i className="ri-add-line me-1 align-middle fs-14 fw-semibold"></i>Add
                                                                    New Address
                                                                </SpkButton>
                                                                <Modal centered show={checkout} size='lg' onHide={handleClose} className="modal fade" id="modal-new-address" tabIndex={-1} >
                                                                    <Modal.Header closeButton>
                                                                        <h6 className="modal-title"
                                                                            id="staticBackdropLabel">New Address
                                                                        </h6>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <div className="row gy-3">
                                                                            <Col xl={6} className="custom-input-class">
                                                                                <Form.Label htmlFor="fullname-new" className="form-label">Full Name</Form.Label>
                                                                                <Form.Control type="text" className="form-control" id="fullname-new" placeholder="Full Name" />
                                                                            </Col>
                                                                            <Col xl={6} className="custom-input-class">
                                                                                <Form.Label htmlFor="email-new" className="form-label">Email</Form.Label>
                                                                                <Form.Control type="email" className="form-control" id="email-new" placeholder="email" />
                                                                            </Col>
                                                                            <Col xl={6} className="custom-input-class">
                                                                                <Form.Label htmlFor="phonenumber-new" className="form-label">Phone  Number</Form.Label>
                                                                                <Form.Control type="number" className="form-control" id="phonenumber-new" placeholder="Phone" />
                                                                            </Col>
                                                                            <Col xl={6} className="custom-input-class">
                                                                                <Form.Label htmlFor="address-new" className="form-label">Address</Form.Label>
                                                                                <Form.Control type="text" className="form-control" id="address-new" placeholder="Address" />
                                                                            </Col>
                                                                            <Col xl={12}>
                                                                                <Row>
                                                                                    <Col xl={3} className="custom-input-class">
                                                                                        <Form.Label htmlFor="pincode-new" className="form-label">Pincode</Form.Label>
                                                                                        <Form.Control type="number" className="form-control" id="pincode-new" placeholder="pincode" />
                                                                                    </Col>
                                                                                    <Col xl={3} className="custom-input-class">
                                                                                        <Form.Label htmlFor="city-new" className="form-label">City</Form.Label>
                                                                                        <Form.Control type="text" className="form-control" id="city-new" placeholder="City" />
                                                                                    </Col>
                                                                                    <Col xl={3} className="custom-input-class">
                                                                                        <Form.Label htmlFor="state-new" className="form-label">State</Form.Label>
                                                                                        <Form.Control type="text" className="form-control" id="state-new" placeholder="State" />
                                                                                    </Col>
                                                                                    <Col xl={3} className="custom-input-class">
                                                                                        <Form.Label htmlFor="country-new" className="form-label">Country</Form.Label>
                                                                                        <Form.Control type="text" className="form-control" id="country-new" placeholder="Country" />
                                                                                    </Col>
                                                                                </Row>
                                                                            </Col>
                                                                        </div>
                                                                    </Modal.Body>
                                                                    <Modal.Footer>
                                                                        <SpkButton Buttontype="button" Buttonvariant="light" Customclass="btn" Buttondismiss="modal" onClickfunc={handleClose}>Close</SpkButton>
                                                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn">Save Address</SpkButton>
                                                                    </Modal.Footer>
                                                                </Modal>
                                                            </div>
                                                        </div>
                                                        <Row>
                                                            <Col md={6}>
                                                                <Card className="custom-card border card-style-6">
                                                                    <Card.Body className="p-3">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between mb-3">
                                                                            <div className="flex-grow-1">
                                                                                <div
                                                                                    className="d-flex align-items-center gap-2 card-style-6-avatar">
                                                                                    <div className="min-w-fit-content">
                                                                                        <span
                                                                                            className="avatar rounded-circle"><i
                                                                                                className="ti ti-home fs-16"></i></span>
                                                                                    </div>
                                                                                    <h6 className="fs-16 mb-0 fw-semibold">
                                                                                        Home</h6>
                                                                                </div>
                                                                            </div>
                                                                            <div className="min-w-fit-content">
                                                                                <div className="d-flex gap-2">
                                                                                    <input className="form-check-input" type="radio" id="address1" name="default-address" defaultChecked />
                                                                                    <label
                                                                                        className="form-check-label cursor-pointer"
                                                                                        htmlFor="address1">Default</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h6 className="mb-1 fw-semibold">Laura Benson</h6>
                                                                        <p className="mb-1 fw-500 fs-13">
                                                                            laura.benson@example.com</p>
                                                                        <p className="mb-2 fw-500 fs-13">+1-202-555-0147</p>
                                                                        <p className="mb-0">
                                                                            Elm Tower, 7th Floor, Suite 22, Maple
                                                                            Avenue, Brookville, NY 11545, United States
                                                                            of America
                                                                        </p>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                            <Col md={6}>
                                                                <Card className="custom-card border card-style-6">
                                                                    <Card.Body className="p-3">
                                                                        <div
                                                                            className="d-flex align-items-center justify-content-between mb-3">
                                                                            <div className="flex-grow-1">
                                                                                <div
                                                                                    className="d-flex align-items-center gap-2 card-style-6-avatar">
                                                                                    <div className="min-w-fit-content">
                                                                                        <span
                                                                                            className="avatar rounded-circle"><i
                                                                                                className="ti ti-briefcase fs-16"></i></span>
                                                                                    </div>
                                                                                    <h6 className="fs-16 mb-0 fw-semibold">
                                                                                        Work</h6>
                                                                                </div>
                                                                            </div>
                                                                            <div className="min-w-fit-content">
                                                                                <div className="d-flex gap-2">
                                                                                    <input className="form-check-input"
                                                                                        type="radio" id="address2"
                                                                                        name="default-address" />
                                                                                    <label
                                                                                        className="form-check-label cursor-pointer"
                                                                                        htmlFor="address2">Default</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h6 className="mb-1 fw-semibold">Laura Benson</h6>
                                                                        <p className="mb-1 fw-500 fs-13">
                                                                            laura.benson@example.com</p>
                                                                        <p className="mb-2 fw-500 fs-13"> +44-20-7946-0958
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            Horizon Plaza, 5th Floor, Office 12, Cherry
                                                                            Creek, Denver, CO 80206, United States of
                                                                            America
                                                                        </p>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                        <div className="row gy-3">
                                                            <p className="fs-15 fw-semibold mb-1">Delivery Methods :</p>
                                                            <Col xl={4}>
                                                                <div className="form-check shipping-method-container mb-0">
                                                                    <input id="shipping-method1" name="shipping-methods"
                                                                        type="radio" className="form-check-input"
                                                                        defaultChecked />
                                                                    <div className="form-check-label">
                                                                        <div
                                                                            className="d-sm-flex align-items-center justify-content-between flex-wrap">
                                                                            <div className="me-2">
                                                                                <span className="avatar avatar-md">
                                                                                    <img src={png5} alt="" />
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="shipping-partner-details me-sm-5 me-0">
                                                                                <p className="mb-0 fw-semibold">DTP
                                                                                    Deliveries</p>
                                                                                <p className="text-muted fs-11 mb-0">
                                                                                    Expected By
                                                                                    24,Nov 2022</p>
                                                                            </div>
                                                                            <div className="fw-semibold me-sm-5 me-0">
                                                                                $9.99
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col xl={4}>
                                                                <div className="form-check shipping-method-container mb-0">
                                                                    <input id="shipping-method2" name="shipping-methods"
                                                                        type="radio" className="form-check-input" />
                                                                    <div className="form-check-label">
                                                                        <div
                                                                            className="d-sm-flex align-items-center justify-content-between flex-wrap">
                                                                            <div className="me-2">
                                                                                <span className="avatar avatar-md">
                                                                                    <img src={png6} alt="" />
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="shipping-partner-details me-sm-5 me-0">
                                                                                <p className="mb-0 fw-semibold">UPS
                                                                                    Deliveries</p>
                                                                                <p className="text-muted fs-11 mb-0">
                                                                                    Expected By
                                                                                    22,Nov 2022</p>
                                                                            </div>
                                                                            <div className="fw-semibold me-sm-5 me-0">
                                                                                $10.49
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col xl={4}>
                                                                <div className="form-check shipping-method-container mb-0">
                                                                    <input id="shipping-method3" name="shipping-methods"
                                                                        type="radio" className="form-check-input" />
                                                                    <div className="form-check-label">
                                                                        <div
                                                                            className="d-sm-flex align-items-center justify-content-between flex-wrap">
                                                                            <div className="me-2">
                                                                                <span className="avatar avatar-md">
                                                                                    <img src={png8} alt="" />
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className="shipping-partner-details me-sm-5 me-0">
                                                                                <p className="mb-0 fw-semibold">FedEx Fast
                                                                                    Deliveries</p>
                                                                                <p className="text-muted fs-11 mb-0">
                                                                                    Expected
                                                                                    Tomorrow</p>
                                                                            </div>
                                                                            <div className="fw-semibold me-sm-5 me-0">
                                                                                $12.29
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </div>
                                                        <div className="row gy-3 mt-2">
                                                            <Col xl={6}>
                                                                <p className="fs-15 fw-semibold mb-3">Gift Option :</p>
                                                                <SpkSelect name="colors" option={GiftData} mainClass="basic-multi-select"
                                                                    menuplacement='auto' classNameprefix="Select2" placeholder={"This is a placeholder set in the config"} />
                                                            </Col>
                                                            <Col xl={6}>
                                                                <p className="fs-15 fw-semibold mb-3">Additional Services :
                                                                </p>
                                                                <SpkSelect name="colors" option={ServiceData} mainClass="basic-multi-select"
                                                                    menuplacement='auto' classNameprefix="Select2" placeholder={"This is a placeholder set in the config"} />
                                                            </Col>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                                                        <SpkButton Customclass="btn" Buttonvariant="primary" onClickfunc={handleNext} Id="personal-details-trigger">
                                                            Personal Details
                                                            <i className="ri-user-3-line ms-2 align-middle d-inline-block lh-1"></i>
                                                        </SpkButton>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second" className="p-0 border-0" id="confirm-tab-pane" role="tabpanel"
                                                    aria-labelledby="images-tab" tabIndex={0}>
                                                    <div className="p-sm-4 p-2">
                                                        <div
                                                            className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                            <div>Personal Details :</div>
                                                        </div>
                                                        <Row className="gy-4">
                                                            <Col xl={6}>
                                                                <Form.Label htmlFor="firstname-personal" className="form-label">First
                                                                    Name</Form.Label>
                                                                <Form.Control type="text" className="form-control" id="firstname-personal" placeholder="First Name" defaultValue="Meisha" />
                                                            </Col>
                                                            <Col xl={6}>
                                                                <Form.Label htmlFor="lastname-personal" className="form-label">Last
                                                                    Name</Form.Label>
                                                                <Form.Control type="text" className="form-control" id="lastname-personal" placeholder="Last Name" defaultValue="Kerr" />
                                                            </Col>
                                                            <Col xl={6}>
                                                                <Form.Label htmlFor="email-personal" className="form-label">Email</Form.Label>
                                                                <Form.Control type="email" className="form-control" id="email-personal" placeholder="xyz@example.com" />
                                                            </Col>
                                                            <Col xl={6}>
                                                                <Form.Label htmlFor="phoneno-personal" className="form-label">Phone no</Form.Label>
                                                                <Form.Control type="text" className="form-control" id="phoneno-personal" placeholder="(555)-555-1234" />
                                                            </Col>
                                                            <Col xl={12}>
                                                                <label htmlFor="text-area"
                                                                    className="form-label">Address</label>
                                                                <textarea className="form-control" id="text-area"
                                                                    rows={4}></textarea>
                                                                <div className="form-check mt-1">
                                                                    <input className="form-check-input" type="checkbox"
                                                                        id="invalidCheck1" required
                                                                        defaultChecked />
                                                                    <label className="form-check-label text-muted fs-12"
                                                                        htmlFor="invalidCheck1">
                                                                        Same as Shipping Address Address ?
                                                                    </label>
                                                                </div>
                                                            </Col>
                                                            <Col xl={3}>
                                                                <Form.Label htmlFor="pincode-personal"
                                                                    className="form-label">Pincode</Form.Label>
                                                                <Form.Control type="text" className="form-control"
                                                                    id="pincode-personal" placeholder="200017" />
                                                            </Col>
                                                            <Col xl={3}>
                                                                <Form.Label htmlFor="choices-single-default3"
                                                                    className="form-label">City</Form.Label>
                                                                <SpkSelect name="colors" option={cityData} mainClass="basic-multi-select"
                                                                    menuplacement='auto' classNameprefix="Select2" placeholder="Company Size" defaultvalue={[cityData[0]]} />
                                                            </Col>
                                                            <Col xl={3}>
                                                                <Form.Label htmlFor="choices-single-default4"
                                                                    className="form-label">State</Form.Label>
                                                                <SpkSelect name="colors" option={StateData} mainClass="basic-multi-select"
                                                                    menuplacement='auto' classNameprefix="Select2" placeholder="Company Size" defaultvalue={[StateData[0]]} />
                                                            </Col>
                                                            <Col xl={3}>
                                                                <Form.Label htmlFor="country-personal"
                                                                    className="form-label">Country</Form.Label>
                                                                <Form.Control type="text" className="form-control"
                                                                    id="country-personal" placeholder="Country"
                                                                    defaultValue="USA" />
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div
                                                        className="px-4 pt-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                                        <SpkButton Customclass="btn mb-2 me-2" Buttonvariant="secondary" onClickfunc={handlePrevious} Id="back-shipping-trigger">
                                                            <i className="ri-truck-line me-2 align-middle lh-1 d-inline-block"></i>Back
                                                            To Shipping</SpkButton>
                                                        <SpkButton Customclass="btn  mt-sm-0 mb-2" Buttonvariant="primary" onClickfunc={handleNext} Id="payment-trigger">
                                                            Continue To Payment<i className="bi bi-credit-card-2-front align-middle ms-2 d-inline-block"></i>
                                                        </SpkButton>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third" className="p-0 border-0" id="shipped-tab-pane"
                                                    role="tabpanel" aria-labelledby="notification-tab" tabIndex={0}>
                                                    <div className="p-sm-4 p-2">
                                                        <div
                                                            className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                            <div>Payment Details :</div>
                                                        </div>
                                                        <Row>
                                                            <Col xl={12}>
                                                                <div
                                                                    className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                                    <div>Choose Payment Methods </div>
                                                                </div>
                                                                <div className="ps-2">
                                                                    <div className="text-primary fs-13 fw-semibold mb-3">
                                                                        Express Checkout:</div>
                                                                    <div className="mb-3">
                                                                        <div className="row gy-3">
                                                                            <Col xl={4}>
                                                                                <div
                                                                                    className="p-3 border d-flex gap-2 align-items-center rounded flex-wrap payment-method">
                                                                                    <span
                                                                                        className="avatar avatar-lg bg-primary-transparent svg-primary">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                                            width="32" height="32"
                                                                                            fill="#000000"
                                                                                            viewBox="0 0 256 256">
                                                                                            <path
                                                                                                d="M16,152H48v56H16a8,8,0,0,1-8-8V160A8,8,0,0,1,16,152ZM204,56a28,28,0,0,0-12,2.71h0A28,28,0,1,0,176,85.29h0A28,28,0,1,0,204,56Z"
                                                                                                opacity="0.2"></path>
                                                                                            <path
                                                                                                d="M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM164,96a36,36,0,0,0,5.9-.48,36,36,0,1,0,28.22-47A36,36,0,1,0,164,96Zm60-12a20,20,0,1,1-20-20A20,20,0,0,1,224,84ZM164,40a20,20,0,0,1,19.25,14.61,36,36,0,0,0-15,24.93A20.42,20.42,0,0,1,164,80a20,20,0,0,1,0-40Z">
                                                                                            </path>
                                                                                        </svg> </span>
                                                                                    <div>
                                                                                        <p
                                                                                            className="mb-1 fw-semibold fs-14">
                                                                                            Cash On Delivery</p>
                                                                                        <p className="mb-0 text-danger">$20
                                                                                            Extra On this Delivery</p>
                                                                                    </div>
                                                                                    <input id="cashondelivery"
                                                                                        name="payment" type="radio"
                                                                                        className="form-check-input ms-auto"
                                                                                        defaultChecked />
                                                                                </div>
                                                                            </Col>
                                                                            <Col xl={4}>
                                                                                <div
                                                                                    className="p-3 border d-flex gap-2 align-items-center rounded flex-wrap payment-method">
                                                                                    <span
                                                                                        className="avatar avatar-lg bg-secondary-transparent svg-secondary">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                                            width="32" height="32"
                                                                                            fill="#000000"
                                                                                            viewBox="0 0 256 256">
                                                                                            <path
                                                                                                d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"
                                                                                                opacity="0.2"></path>
                                                                                            <path
                                                                                                d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z">
                                                                                            </path>
                                                                                        </svg> </span>
                                                                                    <div>
                                                                                        <p
                                                                                            className="mb-1 fw-semibold fs-14">
                                                                                            UPI Payment</p>
                                                                                        <p className="mb-0 text-primary">10%
                                                                                            Extra Discount</p>
                                                                                    </div>
                                                                                    <input id="upipayment"
                                                                                        name="payment" type="radio"
                                                                                        className="form-check-input ms-auto" />
                                                                                </div>
                                                                            </Col>
                                                                            <Col xl={4}>
                                                                                <div
                                                                                    className="p-3 border d-flex gap-2 align-items-center rounded flex-wrap payment-method">
                                                                                    <span
                                                                                        className="avatar avatar-lg bg-danger-transparent svg-danger">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                                            width="32" height="32"
                                                                                            fill="#000000"
                                                                                            viewBox="0 0 256 256">
                                                                                            <path
                                                                                                d="M232,96v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V96Z"
                                                                                                opacity="0.2"></path>
                                                                                            <path
                                                                                                d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z">
                                                                                            </path>
                                                                                        </svg> </span>
                                                                                    <div>
                                                                                        <p
                                                                                            className="mb-1 fw-semibold fs-14">
                                                                                            Credit/Debit Card</p>
                                                                                        <p className="mb-0 text-primary">
                                                                                            Upto $100 Cashback</p>
                                                                                    </div>
                                                                                    <input id="creditcart"
                                                                                        name="payment" type="radio"
                                                                                        className="form-check-input ms-auto" />
                                                                                </div>
                                                                            </Col>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-primary fs-13 fw-semibold mb-3">Pay
                                                                        with card(Credit/Debit Card):</div>
                                                                    <div>
                                                                        <div className="row gy-3 mb-3">
                                                                            <Col xl={12}>
                                                                                <Form.Label htmlFor="payment-card-number" className="form-label">Card  Number</Form.Label>
                                                                                <Form.Control type="text" className="form-control" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX" />
                                                                            </Col>
                                                                            <Col xl={12}>
                                                                                <Form.Label htmlFor="payment-card-name" className="form-label">Name On Card</Form.Label>
                                                                                <Form.Control type="text" className="form-control" id="payment-card-name" placeholder="Name On Card" defaultValue="JSON TAYLOR" />
                                                                            </Col>
                                                                            <Col xl={4}>
                                                                                <Form.Label htmlFor="payment-cardexpiry-date" className="form-label">Expiration Date</Form.Label>
                                                                                <Form.Control type="text" className="form-control" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024" />
                                                                            </Col>
                                                                            <Col xl={4}>
                                                                                <Form.Label htmlFor="payment-cvv" className="form-label">CVV</Form.Label>
                                                                                <Form.Control type="text" className="form-control" id="payment-cvv" placeholder="XXX" defaultValue="341" />
                                                                            </Col>
                                                                            <Col xl={4}>
                                                                                <label htmlFor="payment-security" className="form-label">O.T.P</label>
                                                                                <Form.Control type="text" className="form-control" id="payment-security" placeholder="XXXXXX" defaultValue="183467" />
                                                                                <label htmlFor="payment-security" className="form-label mt-1 mb-0 text-danger fs-11">
                                                                                    <sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone
                                                                                </label>
                                                                            </Col>
                                                                            <Col xl={12}>
                                                                                <div className="form-check">
                                                                                    <input className="form-check-input form-checked-success" type="checkbox" id="payment-card-save" defaultChecked />
                                                                                    <label className="form-check-label" htmlFor="payment-card-save"> Save this card </label>
                                                                                </div>
                                                                            </Col>
                                                                        </div>
                                                                        <div className="p-3 border border-dashed rounded">
                                                                            <div
                                                                                className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                                                <div className="lh-1">Saved Cards :</div>
                                                                            </div>
                                                                            <div
                                                                                className="row gy-3 justify-content-center">
                                                                                <Col xxl={4} xl={6}>
                                                                                    <div
                                                                                        className="border rounded border-dashed p-2 px-2 bg-light">
                                                                                        <div className="form-check mb-0">
                                                                                            <input id="payment-card1" name="payment-cards" type="radio" className="form-check-input mt-2" defaultChecked />
                                                                                            <div
                                                                                                className="form-check-label">
                                                                                                <div
                                                                                                    className="d-flex align-items-center gap-2 flex-wrap">
                                                                                                    <div
                                                                                                        className="me-2 d-flex align-items-center">
                                                                                                        <i
                                                                                                            className="ri-mastercard-fill text-primary fs-25"></i>
                                                                                                        <p
                                                                                                            className="mb-0 fw-semibold ms-2">
                                                                                                            (XXXX XXXX
                                                                                                            XXXX 2547)
                                                                                                        </p>
                                                                                                    </div>
                                                                                                    <p
                                                                                                        className="mb-0 fw-semibold ms-auto">
                                                                                                        Master Card</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Col>
                                                                                <Col xxl={4} xl={6}>
                                                                                    <div
                                                                                        className="border rounded border-dashed p-1 px-2 bg-light">
                                                                                        <div className="form-check mb-0">
                                                                                            <input id="payment-card2"
                                                                                                name="payment-cards"
                                                                                                type="radio"
                                                                                                className="form-check-input mt-3" />
                                                                                            <div
                                                                                                className="form-check-label">
                                                                                                <div
                                                                                                    className="d-flex align-items-center gap-2 flex-wrap">
                                                                                                    <div
                                                                                                        className="me-2 d-flex align-items-center">
                                                                                                        <i
                                                                                                            className="ri-visa-line text-secondary fs-30"></i>
                                                                                                        <p
                                                                                                            className="mb-0 fw-semibold ms-2">
                                                                                                            (XXXX XXXX
                                                                                                            XXXX 2547)
                                                                                                        </p>
                                                                                                    </div>
                                                                                                    <p
                                                                                                        className="mb-0 fw-semibold ms-auto">
                                                                                                        VISA Card</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Col>
                                                                                <Col xxl={4} xl={6}>
                                                                                    <div
                                                                                        className="border rounded border-dashed p-2 px-2 bg-light">
                                                                                        <div className="form-check my-1">
                                                                                            <input id="payment-card3"
                                                                                                name="payment-cards"
                                                                                                type="radio"
                                                                                                className="form-check-input mt-2" />
                                                                                            <div
                                                                                                className="form-check-label">
                                                                                                <div
                                                                                                    className="d-flex align-items-center gap-2 flex-wrap">
                                                                                                    <div
                                                                                                        className="me-2 d-flex align-items-center">
                                                                                                        <i
                                                                                                            className="ri-paypal-fill text-danger fs-20"></i>
                                                                                                        <p
                                                                                                            className="mb-0 fw-semibold ms-2">
                                                                                                            (XXXX XXXX
                                                                                                            XXXX 2547)
                                                                                                        </p>
                                                                                                    </div>
                                                                                                    <p
                                                                                                        className="mb-0 fw-semibold ms-auto">
                                                                                                        PayPal
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Col>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div
                                                        className="px-4 pt-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                                        <SpkButton Buttonvariant="secondary" Customclass="btn mb-2 me-2" Id="back-personal-trigger" onClickfunc={handlePrevious}>
                                                            <i className="ri-user-3-line me-2 lh-1 align-middle d-inline-block"></i>
                                                            Back To Personal Info
                                                        </SpkButton>
                                                        <SpkButton Buttonvariant="primary" Customclass="btn mt-sm-0 mb-2" onClickfunc={handleNext} Id="continue-payment-trigger">
                                                            Continue Payment
                                                            <i className="bi bi-credit-card-2-front align-middle ms-2 d-inline-block"></i>
                                                        </SpkButton>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fourth" className="p-0 border-0" id="delivery-tab-pane"
                                                    role="tabpanel" aria-labelledby="security-tab" tabIndex={0}>
                                                    <div className="row justify-content-center">
                                                        <div className="col-xl-5">
                                                            <div className="border rounded">
                                                                <div className="p-3 text-center">
                                                                    <span
                                                                        className="avatar avatar-xxl bg-primary-transparent avatar-rounded mb-3">
                                                                        <span
                                                                            className="avatar avatar-md bg-primary avatar-rounded">
                                                                            <i className="ri-check-line fs-2"></i>
                                                                        </span>
                                                                    </span>
                                                                    <h5 className="fw-semibold">Payment
                                                                        Successful...&#129309;
                                                                    </h5>
                                                                    <p className="mb-0 text-muted">Payment was received successfully. Thank you for your payment.</p>
                                                                </div>
                                                                <div className="p-0 text-center border-top">
                                                                    <div className="table-responsive">
                                                                        <table
                                                                            className="table table-borderless text-nowrap">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th scope="col" className="text-start">
                                                                                        Detail Transaction :</th>
                                                                                    <th></th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        className="text-start fs-14 fw-semibold">
                                                                                        <span>Transaction Id :</span>
                                                                                    </td>
                                                                                    <td className="text-end text-muted">
                                                                                        721648463420585
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className="text-start fs-14 fw-semibold">
                                                                                        <span>Date :</span>
                                                                                    </td>
                                                                                    <td className="text-end text-muted">
                                                                                        8:30 AM , 10 May 2024
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className="text-start fs-14 fw-semibold">
                                                                                        <span>Type Of transaction
                                                                                            :</span>
                                                                                    </td>
                                                                                    <td className="text-end text-muted">
                                                                                        <span
                                                                                            className="text-primary">e-money</span>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className="text-start fs-14 fw-semibold">
                                                                                        <span>Status :</span>
                                                                                    </td>
                                                                                    <td className="text-end text-muted">
                                                                                        <span
                                                                                            className="badge rounded-pill bg-primary-transparent">Success</span>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className="text-start fs-14 fw-semibold">
                                                                                        <span>Total Amount :</span>
                                                                                    </td>
                                                                                    <td className="text-end fs-18">
                                                                                        <span
                                                                                            className="fw-semibold">$12,756</span>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="p-3 text-center border-top d-flex align-items-center gap-2 flex-wrap justify-content-center">
                                                                    <SpkButton Buttonvariant="primary-light" Customclass="btn mb-sm-0 mb-2">
                                                                        Download Reciept
                                                                    </SpkButton>
                                                                    <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/products`} className="btn btn-primary">
                                                                        Continue Shopping
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card>
                                    </Col>
                                </Tab.Container>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="pb-0 justify-content-between">
                            <Card.Title> Checkout Summary </Card.Title>
                            <SpkBadge variant="secondary">03 Items</SpkBadge>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="p-3 text-center">
                                {((buyNow && buyNow.length > 0) || (buyCart && buyCart.length > 0)) ?
                                    ([...buyNow, ...buyCart].map((item, index) => (
                                        <ListGroup className="list-group mb-0 border-0 rounded-0" key={item.id || index}>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <span className="avatar avatar-lg bg-primary-transparent me-2">
                                                        <img src={item.productpicture} alt={item.title} />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <p className="mb-1 fw-semibold">{item.title}
                                                            <span className="fs-12 fw-normal text-muted"> ({item.quantity} qty)</span>
                                                        </p>
                                                        <span className="badge bg-primary-transparent fs-11">
                                                            <i className="ri-discount-percent-line fs-10 me-1"></i>{item.discount1} OFF
                                                        </span>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <p className="mb-0 text-end">
                                                            <Link to="#!" className="close-item">
                                                                <i className="ri-close-line fs-16 text-muted"></i>
                                                            </Link>
                                                        </p>
                                                        <p className="mb-0 fs-14 fw-semibold text-primary"> {item.discount} <span
                                                            className="ms-1 text-muted fs-11 d-inline-block fw-normal"><s>{item.price}</s></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    ))) : (
                                        <SpkListgroup CustomClass="list-group mb-3 rounded text-start">
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <span className="avatar avatar-lg bg-primary-transparent me-2">
                                                        <img src={png14} alt="" />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <p className="mb-1 fw-semibold">Ladies handbag
                                                            <span className="fs-12 fw-normal text-muted"> (1 qty)</span>
                                                        </p>
                                                        <span className="badge bg-primary-transparent fs-11">
                                                            <i className="ri-discount-percent-line fs-10 me-1"></i>20 OFF
                                                        </span>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <p className="mb-0 text-end">
                                                            <Link to="#!" className="close-item">
                                                                <i className="ri-close-line fs-16 text-muted"></i>
                                                            </Link>
                                                        </p>
                                                        <p className="mb-0 fs-14 fw-semibold text-primary">$168 <span
                                                            className="ms-1 text-muted fs-11 d-inline-block fw-normal"><s>$180</s></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <span className="avatar avatar-lg bg-secondary-transparent me-2">
                                                        <img src={png15} alt="" />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <p className="mb-1 fw-semibold">Men's Casual Sneakers
                                                            <span className="fs-12 fw-normal text-muted"> (2 qty)</span>
                                                        </p>
                                                        <span className="badge bg-primary-transparent fs-11">
                                                            <i className="ri-discount-percent-line fs-10 me-1"></i>30 OFF
                                                        </span>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <p className="mb-0 text-end">
                                                            <Link to="#!" className="close-item">
                                                                <i className="ri-close-line fs-16 text-muted"></i>
                                                            </Link>
                                                        </p>
                                                        <p className="mb-0 fs-14 fw-semibold text-secondary">$450 <span
                                                            className="ms-1 text-muted fs-11 d-inline-block fw-normal"><s>$600</s></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <span className="avatar avatar-lg bg-danger-transparent me-2">
                                                        <img src={png11} alt="" />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <p className="mb-1 fw-semibold">Samsung Headset
                                                            <span className="fs-12 fw-normal text-muted"> (1 qty)</span>
                                                        </p>
                                                        <span className="badge bg-primary-transparent fs-11">
                                                            <i className="ri-discount-percent-line fs-10 me-1"></i>75 OFF
                                                        </span>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <p className="mb-0 text-end">
                                                            <Link to="#!" className="close-item">
                                                                <i className="ri-close-line fs-16 text-muted"></i>
                                                            </Link>
                                                        </p>
                                                        <p className="mb-0 fs-14 fw-semibold text-danger">$199 <span
                                                            className="ms-1 text-muted fs-11 d-inline-block fw-normal"><s>$200</s></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </SpkListgroup>
                                    )}
                                <div
                                    className="d-flex gap-1 justify-content-between mb-3 align-items-center px-3 py-2 bg-secondary-transparent secondary-dash-border rounded flex-wrap">
                                    <div className="fw-medium">Coupon Applied :</div>
                                    <SpkBadge variant="secondary" Customclass="fs-11 ms-3">ATYV897G00AA</SpkBadge>
                                </div>
                                <ListGroup className="list-group-flush border rounded mb-3">
                                    <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                        <div className="text-muted">Sub Total</div>
                                        <div className="fw-semibold fs-14">$680.98</div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                        <div className="text-muted">Discount</div>
                                        <div className="fw-semibold fs-14 text-primary">20% - $136.20</div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                        <div className="text-muted">Delivery Charges</div>
                                        <div className="fw-semibold fs-14 text-danger">- $5</div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                        <div className="text-muted">Service Tax (18%)</div>
                                        <div className="fw-semibold fs-14">- $119.56</div>
                                    </ListGroup.Item>
                                </ListGroup>
                                <div className="text-muted mb-2 fs-14"> Total: </div>
                                <h3 className="mb-3">$420.22 <s className="text-muted fs-12 fw-normal"> $680.98 </s> </h3>
                                <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/products`} className="btn btn-primary btn-wave d-grid waves-effect waves-light">Continue Shopping</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default Checkout;