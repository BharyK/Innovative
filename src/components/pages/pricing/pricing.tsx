import { Fragment, useState } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Plans, Plans1, PricingCardData, PricingCardData1, PricingPlans } from "../../../shared/data/pages/pricingdata";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkPricingCard from "../../../shared/@spk-reusable-components/reusable-pages/spk-pricingcard";
import media83 from '../../../assets/images/media/media-83.jpg'


const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };
    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title={"Pricing"} />
            <Pageheader title="Pages" currentpage="Pricing" activepage="Pricing" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row className="d-flex align-items-center justify-content-center mb-5">
                <Tab.Container defaultActiveKey='monthly1'>
                    <Col xl={12}>
                        <h5 className="fw-semibold text-center"> Easy Pricing Options </h5>
                        <p className="text-muted text-center">Pick the plan that fits your business, with flexible options that grow as you do.</p>
                        <div className="d-flex justify-content-center mb-4">
                            <Nav as='ul' className="nav-tabs mb-3 tab-style-6 bg-primary-transparent" id="myTab1" role="tablist">
                                <Nav.Item as='li' className="" role="presentation">
                                    <Nav.Link as='button' eventKey='monthly1' className="nav-link" id="pricing-monthly1" data-bs-toggle="tab" data-bs-target="#pricing-monthly1-pane" type="button" role="tab" aria-controls="pricing-monthly1-pane" aria-selected="true">Monthly</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as='li' className="" role="presentation">
                                    <Nav.Link as='button' eventKey='yearly1' className="nav-link" id="pricing-yearly1" data-bs-toggle="tab" data-bs-target="#pricing-yearly1-pane" type="button" role="tab" aria-controls="pricing-yearly1-pane" aria-selected="false" tabIndex={1}>Yearly</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                    <Col xl={12}>
                        <Tab.Content id="myTabContent1">
                            <Tab.Pane eventKey='monthly1' className="p-0 border-0" id="pricing-monthly1-pane" role="tabpanel" aria-labelledby="pricing-monthly1" tabIndex={0}>
                                <Row className="justify-content-center">
                                    {PricingCardData.map((idx) => (
                                        <Col lg={8} xl={4} xxl={3} md={8} sm={12} key={idx.id}>
                                            <Card className="custom-card pricing-card p-2">
                                                {idx.ribben ? (<span className="badge pricing-badge">Most Popular Pricing</span>) : ''}
                                                <Card.Body className={` p-4 ${idx.color}`}>
                                                    <div className="text-center">
                                                        <h4 className="fw-medium mb-1">{idx.title}</h4>
                                                        <span className="mb-1 d-block">{idx.lable}</span>
                                                        <h2 className={`mb-0 fw-bold d-block text-${idx.color}`}>{idx.monthlyPrice}/
                                                            <span className="fs-12 text-default fw-medium ms-1">Price Per {idx.month}</span>
                                                        </h2>
                                                    </div>
                                                    <hr className="border-top my-4" />
                                                    <ul className="list-unstyled pricing-body">
                                                        {idx.features.map((data, index) => (
                                                            <li key={index}>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs svg-success">
                                                                        <i className={`ri-checkbox-circle-line text-${idx.color} fs-15`}></i>
                                                                    </span>
                                                                    <span className="ms-2 my-auto flex-fill">
                                                                        {data.name}
                                                                    </span>
                                                                    {data.badgeText ? (<span className={data.badgeClass}>{data.iconText ? (<i className="ri-flashlight-fill text-warning me-1"></i>) : ''}{data.badgeText}</span>) : ''}
                                                                    {data.trialPeriod ? (<span className={`fs-12 fw-medium ${data.badgeClass}`}>{data.trialPeriod}</span>) : ''}
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <hr className="border-top my-4" />
                                                    <SpkButton Buttonvariant={idx.color} Buttontype="button" Customclass="btn d-grid w-100 btn-wave">
                                                        <span className="ms-4 me-4">Start Today</span>
                                                    </SpkButton>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='yearly1' className="p-0 border-0" id="pricing-yearly1-pane" role="tabpanel" aria-labelledby="pricing-yearly1" tabIndex={0}>
                                <Row className="justify-content-center">
                                    {PricingCardData1.map((idx) => (
                                        <Col lg={8} xl={4} xxl={3} md={8} sm={12} key={idx.id}>
                                            <Card className="custom-card pricing-card p-2">
                                                {idx.ribben ? (<span className="badge pricing-badge">Most Popular Pricing</span>) : ''}
                                                <Card.Body className={` p-4 ${idx.color}`}>
                                                    <div className="text-center">
                                                        <h4 className="fw-medium mb-1">{idx.title}</h4>
                                                        <span className="mb-1 d-block">{idx.lable}</span>
                                                        <h2 className={`mb-0 fw-bold d-block text-${idx.color}`}>{idx.yearlyPrice}/
                                                            <span className="fs-12 text-default fw-medium ms-1">Price Per {idx.year}</span>
                                                        </h2>
                                                    </div>
                                                    <hr className="border-top my-4" />
                                                    <ul className="list-unstyled pricing-body">
                                                        {idx.features.map((data, index) => (
                                                            <li key={index}>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs svg-success">
                                                                        <i className={`ri-checkbox-circle-line text-${idx.color} fs-15`}></i>
                                                                    </span>
                                                                    <span className="ms-2 my-auto flex-fill">
                                                                        {data.name}
                                                                    </span>
                                                                    {data.badgeText ? (<span className={data.badgeClass}>{data.iconText ? (<i className="ri-flashlight-fill text-warning me-1"></i>) : ''}{data.badgeText}</span>) : ''}
                                                                    {data.trialPeriod ? (<span className={`fs-12 fw-medium ${data.badgeClass}`}>{data.trialPeriod}</span>) : ''}
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <hr className="border-top my-4" />
                                                    <SpkButton Buttonvariant={idx.color} Buttontype="button" Customclass="btn d-grid w-100 btn-wave">
                                                        <span className="ms-4 me-4">Start Today</span>
                                                    </SpkButton>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row className="mb-4">
                <Col xl={12} id="convertable-pricing">
                    <div className="d-flex justify-content-center mb-4">
                        <div className="switcher-box">
                            <span>Monthly</span>
                            <div className="switcher-pricing text-center">
                                <input type="checkbox" className="pricing-toggle" checked={!isMonthly} onChange={handleToggle} />
                            </div>
                            <span>Yearly</span>
                        </div>
                    </div>
                    <div className={`tab-content ${isMonthly ? 'show' : ''}`} id="monthly1">
                        <Row className="d-flex justify-content-center">
                            <div className="col-xxl-7">
                                {PricingPlans.map((idx) => (
                                    <Card className="custom-card main-custom-card" key={idx.id}>
                                        <Card.Body className=" p-4">
                                            <Row>
                                                <Col xl={4} lg={3} sm={4}>
                                                    <div className="d-flex gap-2 justify-content-between mb-1 flex-wrap">
                                                        <span className={`avatar avatar-lg ${idx.color}-dash-border avatar-rounded me-2`}>
                                                            <span className={`avatar avatar-md ${idx.color}  avatar-rounded`}>
                                                                {idx.icon}
                                                            </span>
                                                        </span>
                                                        <div className="flex-grow-1">
                                                            <h6 className="fw-semibold">{idx.name}</h6>
                                                            <span className="fs-13 text-muted">{idx.description}</span>
                                                            <div className="d-flex gap-1 align-items-center mt-3 mb-3 pt-1">
                                                                <div className={`fs-30  fw-bold lh-1`}> <sup className="fs-16 op-7 align-middle fw-medium me-1 d-inline-block">$</sup>{idx.price}<span className="op-7 fw-semibold fs-12 ms-1 align-end d-inline-block">.99</span>
                                                                </div> <span className="badge bg-light text-default fs-11 fw-normal mt-2">{idx.billed} </span>
                                                            </div>
                                                            <span className={`text-${idx.color} fw-medium`}>{idx.discountText}</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={5} lg={5} sm={6} className=" ps-4">
                                                    <p className="fs-14 fw-medium mb-2">Featured Include :</p>
                                                    <ul className="list-unstyled pricing-body">
                                                        {idx.features.map((data, index) => (
                                                            <li key={index}>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs svg-success">
                                                                        <i className="ri-check-double-line text-primary fs-15"></i>
                                                                    </span>
                                                                    <span className="ms-2 my-auto flex-fill">
                                                                        {data}
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Col>
                                                <Col xl={3} lg={4} sm={2} className=" my-auto">
                                                    <span className="fs-12 text-muted">Promo Code</span>
                                                    <input type="text" className="form-control mt-1" id="input-placeholder" placeholder={idx.promoPlaceholder} />
                                                    <SpkButton Buttonvariant={idx.color} Customclass="btn mt-3">Get Started<i className="ri-arrow-right-line ms-2"></i></SpkButton>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                            <Col xxl={3}>
                                <Card className="custom-card">
                                    <div className="p-4">
                                        <h5 className="fw-semibold">Find the Perfect Plan for Your Business!</h5>
                                        <p className="fw-semibold mb-2">Tailored solutions to help you grow and scale.
                                        </p>
                                        <p className="text-muted">Whether you're a startup or an enterprise, choose from
                                            flexible plans that fit your needs and grow.Choose the plan that best
                                            suits your current requirements.</p>
                                        <div className="btn btn-primary-light mb-4"> Compare Plans </div>
                                        <div className="text-center rounded">
                                            <img src={media83} alt="" className="img-fluid mx-auto rounded" /> </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className={`tab-content ${isMonthly ? '' : 'show'}`} id="yearly1">
                        <Row className="d-flex justify-content-center">
                            <Col xl={7}>
                                {PricingPlans.map((idx) => (
                                    <Card className="custom-card main-custom-card" key={idx.id}>
                                        <Card.Body className=" p-4">
                                            <Row>
                                                <Col xl={4} lg={3} sm={4}>
                                                    <div className="d-flex gap-2 justify-content-between mb-1 flex-wrap">
                                                        <span
                                                            className={`avatar avatar-lg ${idx.color}-dash-border avatar-rounded me-2`}>
                                                            <span className={`avatar avatar-md ${idx.color}  avatar-rounded`}>
                                                                {idx.icon}
                                                            </span>
                                                        </span>
                                                        <div className="flex-grow-1">
                                                            <h6 className="fw-semibold">{idx.name}</h6>
                                                            <span className="fs-13 text-muted">{idx.description}</span>
                                                            <div className="d-flex gap-1 align-items-center mt-3 mb-3 pt-1">
                                                                <div className={`fs-30  fw-bold lh-1`}> <sup className="fs-16 op-7 align-middle fw-medium me-1 d-inline-block">$</sup>{idx.yearlyPrice}<span className="op-7 fw-semibold fs-12 ms-1 align-end d-inline-block">.99</span>
                                                                </div> <span className="badge bg-light text-default fs-11 fw-normal mt-2">{idx.yearlyBilled} </span>
                                                            </div>
                                                            <span className={`text-${idx.color} fw-medium`}>{idx.discountText}</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={5} lg={5} sm={6} className=" ps-4">
                                                    <p className="fs-14 fw-medium mb-2">Featured Include :</p>
                                                    <ul className="list-unstyled pricing-body">
                                                        {idx.features.map((data, index) => (
                                                            <li key={index}>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs svg-success">
                                                                        <i className="ri-check-double-line text-primary fs-15"></i>
                                                                    </span>
                                                                    <span className="ms-2 my-auto flex-fill">
                                                                        {data}
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Col>
                                                <Col xl={3} lg={4} sm={2} className=" my-auto">
                                                    <span className="fs-12 text-muted">Promo Code</span>
                                                    <input type="text" className="form-control mt-1" id="input-placeholder" placeholder={idx.promoPlaceholder} />
                                                    <SpkButton Buttonvariant={idx.color} Customclass="btn mt-3">Get Started<i className="ri-arrow-right-line ms-2"></i></SpkButton>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Col>
                            <div className="col-xl-3">
                                <Card className="custom-card">
                                    <div className="p-4">
                                        <h5 className="fw-semibold">Find the Perfect Plan for Your Business!</h5>
                                        <p className="fw-semibold mb-2">Tailored solutions to help you grow and scale.
                                        </p>
                                        <p className="text-muted">Whether you're a startup or an enterprise, choose from
                                            flexible plans that fit your needs and grow.Choose the plan that best
                                            suits your current requirements.</p>
                                        <div className="btn btn-primary-light mb-4"> Compare Plans </div>
                                        <div className="text-center rounded">
                                            <img src={media83} alt="" className="img-fluid mx-auto rounded" />
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </Row>
                    </div>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row className="justify-content-center">
                <Col xl={12}>
                    <Tab.Container defaultActiveKey='pillsmonthly'>
                        <div className="text-center mb-5">
                            <div className="tab-style-1 border p-1 bg-white shadow-sm rounded-pill d-inline-block">
                                <Nav as='ul' className="nav-pills" role="tablist">
                                    <Nav.Item as='li' className="" role="presentation">
                                        <Nav.Link as='button' eventKey='pillsmonthly' type="button" className="rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-monthly" aria-selected="true" role="tab">Monthly</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' className="" role="presentation">
                                        <Nav.Link as='button' eventKey='pillsyearly' type="button" className="rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-yearly" aria-selected="false" tabIndex={1} role="tab">Annually </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                        <Tab.Content>
                            <Tab.Pane eventKey='pillsmonthly' className="p-0 border-0" id="pills-monthly" role="tabpanel">
                                <Row className="justify-content-center">
                                    {Plans.map((idx) => (
                                        <Col lg={8} xl={4} xxl={3} md={8} sm={12} key={idx.id}>
                                            <SpkPricingCard card={idx} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='pillsyearly' className="p-0 border-0" id="pills-yearly" role="tabpanel">
                                <Row className="justify-content-center">
                                    {Plans1.map((idx) => (
                                        <Col lg={8} xl={4} xxl={3} md={8} sm={12} key={idx.id}>
                                            <SpkPricingCard card={idx} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    );
};

export default Pricing;