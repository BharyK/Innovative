import { Fragment } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { AccountManagementFaqs, CustomerSupportFaqs, Orderingfaqs, Paymentfaqs, RefundFaqs, ShippingFaqs } from "../../../shared/data/pages/faqsdata";
import { Link } from "react-router-dom";
import SpkAccordions from "../../../shared/@spk-reusable-components/reusable-advancedui/spk-accordions";
import png13 from "../../../assets/images/media/png/13.png";

const Faqs = () => {
    return (
        <Fragment>
            <div className="container">
                {/* <!-- Page Header --> */}
                <Seo title={"Faq's"} />
                <Pageheader title="Pages" currentpage="Faq's" activepage="Faq's" />
                {/* <!-- Page Header Close --> */}

                {/* <!-- Start:: row-1 --> */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card main-custom-card faq-container-card">
                            <Card.Body className=" p-4">
                                <Row>
                                    <Col xxl={9} lg={8}>
                                        <div className="mb-4">
                                            <p className="h5 text-primary mb-2 fw-medium">Frequently Asked Questions</p>
                                            <span>Browse Through The Most Frequently Asked Questions</span>
                                        </div>
                                        <Row className="gy-2 row-cols-xxl-3 row-cols-xl-2 row-cols-1">
                                            <Col>
                                                <div className="p-3 border rounded d-flex gap-3 primary-dash-border">
                                                    <div className="avatar avatar-md primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            enableBackground="new 0 0 24 24" height="24px"
                                                            viewBox="0 0 24 24" width="24px" fill="#000">
                                                            <g>
                                                                <path d="M0,0h24v24H0V0z" fill="none" />
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="M8,4v12h12V4H8z M14.74,14.69C14.54,14.9,14.3,15,14.01,15c-0.29,0-0.54-0.1-0.74-0.31 c-0.21-0.21-0.31-0.45-0.31-0.74c0-0.29,0.1-0.54,0.31-0.74c0.21-0.2,0.45-0.3,0.74-0.3c0.29,0,0.54,0.1,0.74,0.3 c0.2,0.2,0.3,0.45,0.3,0.74C15.05,14.24,14.94,14.49,14.74,14.69z M16.51,8.83c-0.23,0.34-0.54,0.69-0.92,1.06 c-0.3,0.27-0.51,0.52-0.64,0.75c-0.12,0.23-0.18,0.49-0.18,0.78v0.4h-1.52v-0.56c0-0.42,0.09-0.78,0.26-1.09 C13.69,9.85,14,9.5,14.46,9.1c0.32-0.29,0.55-0.54,0.69-0.74c0.14-0.2,0.21-0.44,0.21-0.72c0-0.36-0.12-0.65-0.36-0.87 c-0.24-0.23-0.57-0.34-0.99-0.34c-0.4,0-0.72,0.12-0.97,0.36c-0.25,0.24-0.42,0.53-0.53,0.87l-1.37-0.57 c0.18-0.55,0.52-1.03,1-1.45C12.63,5.21,13.25,5,13.99,5c0.56,0,1.05,0.11,1.49,0.33c0.44,0.22,0.78,0.53,1.02,0.93 c0.24,0.4,0.36,0.84,0.36,1.33C16.86,8.08,16.75,8.49,16.51,8.83z"
                                                                    opacity=".8" fill="#fff" />
                                                                <path
                                                                    d="M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4 C22,2.9,21.1,2,20,2z M20,16H8V4h12V16z M13.51,10.16c0.41-0.73,1.18-1.16,1.63-1.8c0.48-0.68,0.21-1.94-1.14-1.94 c-0.88,0-1.32,0.67-1.5,1.23l-1.37-0.57C11.51,5.96,12.52,5,13.99,5c1.23,0,2.08,0.56,2.51,1.26c0.37,0.6,0.58,1.73,0.01,2.57 c-0.63,0.93-1.23,1.21-1.56,1.81c-0.13,0.24-0.18,0.4-0.18,1.18h-1.52C13.26,11.41,13.19,10.74,13.51,10.16z M12.95,13.95 c0-0.59,0.47-1.04,1.05-1.04c0.59,0,1.04,0.45,1.04,1.04c0,0.58-0.44,1.05-1.04,1.05C13.42,15,12.95,14.53,12.95,13.95z" />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <Link to="#!" className="mb-1 fw-medium fs-14 d-block">Explore Our
                                                            Help
                                                            Center</Link>
                                                        <span className="text-muted fs-13">FAQs, and guides to assist
                                                            you!</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="p-3 border rounded d-flex gap-3 secondary-dash-border">
                                                    <div className="avatar avatar-md secondary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 0 24 24" width="24px" fill="#000">
                                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                                            <path
                                                                d="M8 16h12V4H8v12zm2-10h8v2h-8V6zm0 3h8v2h-8V9zm0 3h4v2h-4v-2z"
                                                                opacity=".8" fill="#fff" />
                                                            <path
                                                                d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2zM6 4v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zm14 12H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <Link to="#!" className="mb-1 fw-medium fs-14 d-block">Schedule a
                                                            Demo</Link>
                                                        <span className="text-muted fs-13">Experience our solution
                                                            firsthand</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="p-3 border rounded d-flex gap-3 danger-dash-border">
                                                    <div className="avatar avatar-md danger">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                            viewBox="0 0 24 24" width="24px" fill="#000">
                                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                                            <path
                                                                d="M4 18l2-2h14V4H4v14zm11-9h2v2h-2V9zm-4 0h2v2h-2V9zM7 9h2v2H7V9z"
                                                                opacity=".8" fill="#fff" />
                                                            <path
                                                                d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <Link to="#!" className="mb-1 fw-medium fs-14 d-block">Instant Live
                                                            Chat
                                                            Support</Link>
                                                        <span className="text-muted fs-13">Get real-time assistance</span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xxl={3} lg={4} className="faq-img">
                                        <img alt="" src={png13} className="faq-img d-xl-block d-none" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <!-- End:: row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <Row>
                    <Tab.Container defaultActiveKey='order'>
                        <Col xl={3}>
                            <Card className="custom-card">
                                <Card.Body className="">
                                    <Nav as='ul' className="nav-tabs flex-column nav-tabs-header mb-0 d-sm-flex d-inline-block" role="tablist">
                                        <Nav.Item as='li' className="m-1" role="presentation">
                                            <Nav.Link as='a' eventKey='order' className=" " data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#theme-customization" aria-selected="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                    height="24" color="#000000" fill="none">
                                                    <path
                                                        d="M4.34085 16.8781L3.17786 9.93557C2.98869 8.8063 2.89411 8.24167 3.18537 7.87083C3.47662 7.5 4.01468 7.5 5.09079 7.5H18.9092C19.9853 7.5 20.5234 7.5 20.8146 7.87083C21.1059 8.24167 21.0113 8.8063 20.8221 9.93557L19.6591 16.8781C19.249 19.3264 19.044 20.5505 18.2319 21.2752C17.4199 22 16.2534 22 13.9204 22H10.0796C7.74664 22 6.58014 22 5.76809 21.2752C4.95603 20.5505 4.75097 19.3264 4.34085 16.8781Z"
                                                        stroke="currentColor" strokeWidth="1.5" />
                                                    <path
                                                        d="M7 7.5V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V7.5"
                                                        stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M4.5 17.5H19.5" stroke="currentColor" strokeWidth="1.5" />
                                                </svg>
                                                Ordering</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as='li' className="m-1" role="presentation">
                                            <Nav.Link as='a' eventKey='payments' className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#user-management" aria-selected="false" tabIndex={-1}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                    height="24" color="#000000" fill="none">
                                                    <path
                                                        d="M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z"
                                                        stroke="currentColor" strokeWidth="1.5" />
                                                    <path
                                                        d="M15.0038 7.80257C9.57619 7.42647 5.1047 6.62109 3 5.99976V15.0612C3 17.0556 3 18.0528 3.61958 18.8661C4.23916 19.6794 5.08923 19.9091 6.78937 20.3685C9.53623 21.1107 12.4235 21.5527 15.0106 21.8055C17.6919 22.0675 19.0325 22.1985 20.0163 21.2995C21 20.4005 21 18.9564 21 16.068V14.0544C21 11.2495 21 9.84706 20.1929 8.97664C19.3859 8.10622 17.9252 8.005 15.0038 7.80257Z"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                                </svg>
                                                Payment</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as='li' className="m-1" role="presentation">
                                            <Nav.Link as='a' eventKey='shppping' className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#data-export" aria-selected="false" tabIndex={-1}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                    height="24" color="#000000" fill="none">
                                                    <circle cx="17" cy="18" r="2" stroke="currentColor"
                                                        strokeWidth="1.5" />
                                                    <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                    <path
                                                        d="M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2.24536 16.7809 2.08222 16.0967 2.02755 15M9 18H15M19 17.9724C20.0967 17.9178 20.7809 17.7546 21.2678 17.2678C22 16.5355 22 15.357 22 13V11H17.3C16.5555 11 16.1832 11 15.882 10.9021C15.2731 10.7043 14.7957 10.2269 14.5979 9.61803C14.5 9.31677 14.5 8.94451 14.5 8.2C14.5 7.08323 14.5 6.52485 14.3532 6.07295C14.0564 5.15964 13.3404 4.44358 12.4271 4.14683C11.9752 4 11.4168 4 10.3 4H2"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M2 8H8" stroke="currentColor" strokeWidth="1.5"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M2 11H6" stroke="currentColor" strokeWidth="1.5"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                    <path
                                                        d="M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                Shipping & Delivery</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as='li' className="m-1" role="presentation">
                                            <Nav.Link as='a' eventKey='return' className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#security-authentication" aria-selected="false" tabIndex={-1}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                    height="24" color="#000000" fill="none">
                                                    <path
                                                        d="M3 13V8H21V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13Z"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M3 8L3.86538 6.07692C4.53654 4.58547 4.87211 3.83975 5.55231 3.41987C6.23251 3 7.105 3 8.85 3H15.15C16.895 3 17.7675 3 18.4477 3.41987C19.1279 3.83975 19.4635 4.58547 20.1346 6.07692L21 8"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M12 8V3" stroke="currentColor" strokeWidth="1.5"
                                                        strokeLinecap="round" />
                                                    <path
                                                        d="M8.5 13.5H14C15.1046 13.5 16 14.3954 16 15.5C16 16.6046 15.1046 17.5 14 17.5H13M10 11.5L8 13.5L10 15.5"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                Returns & Refunds</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as='li' className="m-1" role="presentation">
                                            <Nav.Link as='a' eventKey='account' className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#general-settings" aria-selected="false" tabIndex={-1}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                    height="24" color="#000000" fill="none">
                                                    <path
                                                        d="M7 2C4.23858 2 2 4.23858 2 7C2 8.85071 3.0055 10.4666 4.5 11.3311V17.8431C4.5 18.6606 4.5 19.0694 4.65224 19.4369C4.80448 19.8045 5.09351 20.0935 5.67157 20.6716L7 22L9.10819 19.8918C9.20542 19.7946 9.25407 19.7459 9.2944 19.6932C9.40031 19.5547 9.46816 19.3909 9.49122 19.218C9.5 19.1522 9.5 19.0834 9.5 18.9459C9.5 18.8346 9.5 18.779 9.4941 18.7249C9.47864 18.5831 9.43303 18.4463 9.36035 18.3236C9.33263 18.2768 9.29924 18.2323 9.23246 18.1433L8 16.5L8.7 15.5667C9.09649 15.038 9.29473 14.7737 9.39737 14.4658C9.5 14.1579 9.5 13.8275 9.5 13.1667V11.3311C10.9945 10.4666 12 8.85071 12 7C12 4.23858 9.76142 2 7 2Z"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                                    <path d="M7 7H7.00898" stroke="currentColor" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                    <path
                                                        d="M13 14H19C19.9319 14 20.3978 14 20.7654 14.1522C21.2554 14.3552 21.6448 14.7446 21.8478 15.2346C22 15.6022 22 16.0681 22 17C22 17.9319 22 18.3978 21.8478 18.7654C21.6448 19.2554 21.2554 19.6448 20.7654 19.8478C20.3978 20 19.9319 20 19 20H13"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path
                                                        d="M15 5H19C19.9319 5 20.3978 5 20.7654 5.15224C21.2554 5.35523 21.6448 5.74458 21.8478 6.23463C22 6.60218 22 7.06812 22 8C22 8.93188 22 9.39782 21.8478 9.76537C21.6448 10.2554 21.2554 10.6448 20.7654 10.8478C20.3978 11 19.9319 11 19 11H15"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                Account Management</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as='li' className="m-1" role="presentation">
                                            <Nav.Link as='a' eventKey='customer' className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#troubleshooting" aria-selected="false" tabIndex={-1}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                    height="24" color="#000000" fill="none">
                                                    <path
                                                        d="M17 13.8045C17 13.4588 17 13.286 17.052 13.132C17.2032 12.6844 17.6018 12.5108 18.0011 12.3289C18.45 12.1244 18.6744 12.0222 18.8968 12.0042C19.1493 11.9838 19.4022 12.0382 19.618 12.1593C19.9041 12.3198 20.1036 12.6249 20.3079 12.873C21.2512 14.0188 21.7229 14.5918 21.8955 15.2236C22.0348 15.7334 22.0348 16.2666 21.8955 16.7764C21.6438 17.6979 20.8485 18.4704 20.2598 19.1854C19.9587 19.5511 19.8081 19.734 19.618 19.8407C19.4022 19.9618 19.1493 20.0162 18.8968 19.9958C18.6744 19.9778 18.45 19.8756 18.0011 19.6711C17.6018 19.4892 17.2032 19.3156 17.052 18.868C17 18.714 17 18.5412 17 18.1955V13.8045Z"
                                                        stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M9.5 21C10.8807 22.3333 13.1193 22.3333 14.5 21"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M7 13.8045C7 13.3693 6.98778 12.9782 6.63591 12.6722C6.50793 12.5609 6.33825 12.4836 5.99891 12.329C5.55001 12.1246 5.32556 12.0224 5.10316 12.0044C4.43591 11.9504 4.07692 12.4058 3.69213 12.8731C2.74875 14.0189 2.27706 14.5918 2.10446 15.2236C1.96518 15.7334 1.96518 16.2666 2.10446 16.7764C2.3562 17.6979 3.15152 18.4702 3.74021 19.1852C4.11129 19.6359 4.46577 20.0472 5.10316 19.9956C5.32556 19.9776 5.55001 19.8754 5.99891 19.6709C6.33825 19.5164 6.50793 19.4391 6.63591 19.3278C6.98778 19.0218 7 18.6307 7 18.1954V13.8045Z"
                                                        stroke="currentColor" strokeWidth="1.5" />
                                                    <path
                                                        d="M2 16V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12L22.0001 16"
                                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                Customer Support</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={9}>
                            <Row>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Body className="">
                                            <Tab.Content>
                                                <Tab.Pane eventKey='order' className="border-0 p-0" id="theme-customization" role="tabpanel">
                                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                                        <p className="fs-16 fw-medium mb-0">Ordering Faq's</p>
                                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm">View All <i className="ti ti-arrow-narrow-right"></i></SpkButton>
                                                    </div>
                                                    <SpkAccordions items={Orderingfaqs} accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='payments' className="border-0 p-0" id="user-management" role="tabpanel">
                                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                                        <p className="fs-16 fw-medium mb-0">Payment Faq's</p>
                                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm">View All <i className="ti ti-arrow-narrow-right"></i></SpkButton>
                                                    </div>
                                                    <SpkAccordions items={Paymentfaqs} accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='shppping' className="border-0 p-0" id="data-export" role="tabpanel">
                                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                                        <p className="fs-16 fw-medium mb-0">Shipping & Delivery Faq's</p>
                                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm">View All <i className="ti ti-arrow-narrow-right"></i></SpkButton>
                                                    </div>
                                                    <SpkAccordions items={ShippingFaqs} accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='return' className="border-0 p-0" id="security-authentication"
                                                    role="tabpanel">
                                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                                        <p className="fs-16 fw-medium mb-0">Return & Refund Faq's</p>
                                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm">View All <i className="ti ti-arrow-narrow-right"></i></SpkButton>
                                                    </div>
                                                    <SpkAccordions items={RefundFaqs} accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='account' className="border-0 p-0" id="general-settings" role="tabpanel">
                                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                                        <p className="fs-16 fw-medium mb-0">Account Management Faq's</p>
                                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm">View All <i className="ti ti-arrow-narrow-right"></i></SpkButton>
                                                    </div>
                                                    <SpkAccordions items={AccountManagementFaqs} accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='customer' className="border-0 p-0" id="troubleshooting" role="tabpanel">
                                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                                        <p className="fs-16 fw-medium mb-0">Customer Support Faq's</p>
                                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm">View All <i className="ti ti-arrow-narrow-right"></i></SpkButton>
                                                    </div>
                                                    <SpkAccordions items={CustomerSupportFaqs} accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-seperate" />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Tab.Container>
                </Row>
                {/* <!-- End:: row-2 --> */}

                {/* <!-- Start:: row-3 --> */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card main-custom-card">
                            <Card.Body className="">
                                <div className="p-4 border rounded-3">
                                    <div className="text-center">
                                        <span className="avatar avatar-md bg-primary-transparent avatar-rounded mb-2"><i
                                            className="ri-questionnaire-line fs-18"></i></span>
                                        <div>
                                            <h5 className="fw-semibold mb-2">Any Questions?</h5> <span
                                                className="d-block fs-12 text-muted"> Write your question below and we'll
                                                get back to you shortly. </span>
                                        </div>
                                    </div>
                                    <Row className="gy-3 mt-3">
                                        <Col xl={2}>
                                            <label htmlFor="user-name" className="form-label">Your Name :</label>
                                        </Col>
                                        <Col xl={10}>
                                            <input type="text" className="form-control form-control-light border" id="user-name" placeholder="Enter Your Name" />
                                        </Col>
                                        <Col xl={2}>
                                            <label htmlFor="user-email" className="form-label">Email Id :</label>
                                        </Col>
                                        <Col xl={10}>
                                            <input type="text" className="form-control form-control-light border" id="user-email" placeholder="Enter Email" />
                                        </Col>
                                        <Col xl={2}>
                                            <label htmlFor="text-area" className="form-label">Textarea :</label>
                                        </Col>
                                        <Col xl={10} className="text-start">
                                            <textarea className="form-control form-control-light border" placeholder="Enter your query here" id="text-area" rows={3}></textarea>
                                            <SpkButton Buttonvariant="secondary" Customclass="btn btn-wave waves-effect waves-light mt-3" Buttontype="button" Id="send">Send your question</SpkButton>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <!-- End:: row-3 --> */}
            </div>
        </Fragment>
    );
};

export default Faqs;