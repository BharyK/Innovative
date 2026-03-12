
import SpkRibbons from "../../../shared/@spk-reusable-components/reusable-advancedui/spk-ribbons";
import { Ribbon4, Ribbon6, Ribbons2, Ribbons3 } from "../../../shared/data/adavanec-ui/ribbonsdata";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";


const Ribbons = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Ribbons"} />
            <Pageheader title="Advanced Ui" currentpage="Ribbons" activepage="Ribbons" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="pb-0">
                            <Card.Title>
                                Ribbon Style 1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                <div className="col-xl-6">
                                    <div className="card custom-card shadow-none mb-0 ribbon-card primary-dash-border">
                                        <Card.Body className="p-4">
                                            <SpkRibbons ribbonClass="ribbon" ribbonColor="primary" ribbonPosition="ribbon-top-left">
                                                <span>ribbon</span>
                                            </SpkRibbons>
                                            <div className="card-subtitle fw-semibold mb-2 text-end">Top Left Ribbon</div>
                                            <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                        </Card.Body>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="card custom-card shadow-none mb-0 ribbon-card secondary-dash-border">
                                        <Card.Body className="p-4">
                                            <SpkRibbons ribbonClass="ribbon" ribbonColor="secondary" ribbonPosition="ribbon-top-right">
                                                <span>ribbon</span>
                                            </SpkRibbons>
                                            <div className="card-subtitle fw-semibold mb-2 text-start">Top Right Ribbon</div>
                                            <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                        </Card.Body>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="card custom-card shadow-none mb-0 ribbon-card warning-dash-border">
                                        <Card.Body className="p-4">
                                            <SpkRibbons ribbonClass="ribbon" ribbonColor="warning" ribbonPosition="ribbon-bottom-left">
                                                <span>ribbon</span>
                                            </SpkRibbons>
                                            <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                            <div className="card-subtitle fw-semibold mt-2 text-end">Bottom Left Ribbon</div>
                                        </Card.Body>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="card custom-card shadow-none mb-0 ribbon-card danger-dash-border">
                                        <Card.Body className="p-4">
                                            <SpkRibbons ribbonClass="ribbon" ribbonColor="danger" ribbonPosition="ribbon-bottom-right">
                                                <span>ribbon</span>
                                            </SpkRibbons>
                                            <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                            <div className="card-subtitle fw-semibold mt-2 text-start">Bottom Right Ribbon</div>
                                        </Card.Body>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="pb-0">
                            <Card.Title>
                                Ribbon Style 2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <div className="row gy-3">
                                {Ribbons2.map((idx) => (
                                    <Col xl={6} key={idx.id}>
                                        <Card className={`card custom-card shadow-none mb-0 ${idx.color}-dash-border`}>
                                            <Card.Body className="p-4">
                                                <SpkRibbons ribbonClass="ribbon-2" ribbonColor={idx.color} ribbonPosition={`ribbon-${idx.position}`}>
                                                    <span>Congratulations</span>
                                                </SpkRibbons>
                                                <span className="d-block pt-4">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                                <div className={`card-subtitle fw-semibold mt-2 text-${idx.class}`}>{idx.title} Ribbon</div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="pb-0">
                            <Card.Title>
                                Ribbon Style 3
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <div className="row gy-3">
                                {Ribbons3.map((idx) => (
                                    <Col xl={3} key={idx.id}>
                                        <Card className={`custom-card mb-0 ${idx.color}-dash-border`}>
                                            <Card.Body className="p-4">
                                                <SpkRibbons ribbonClass="ribbon-3" ribbonColor={idx.color} ribbonPosition={idx.position}>
                                                    <span><i className="fe fe-zap"></i></span>
                                                </SpkRibbons>
                                                <div className={`card-subtitle fw-semibold mb-2 text-${idx.class}`}>{idx.title} Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="pb-0">
                            <Card.Title>Ribbon Style 4</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                {Ribbon4.map((idx) => (
                                    <Col xl={6} key={idx.id}>
                                        <Card className={`custom-card mb-0 ${idx.color}-dash-border`}>
                                            <Card.Body className="p-4">
                                                <SpkRibbons ribbonClass="ribbon-4" ribbonColor={idx.color} ribbonPosition={idx.position} >
                                                    <span>{idx.color.includes("primary") ? "May" : "Jun"}</span>
                                                </SpkRibbons>
                                                <div className={`card-subtitle fw-semibold mb-2 text-${idx.class}`}>{idx.title}  Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="pb-0">
                            <Card.Title>
                                Ribbon Style 5
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={3}>
                                    <Card className="custom-card mb-0 overflow-hidden primary-dash-border">
                                        <Card.Body className="p-4">
                                            <div className="ribbon-5 ribbon-primary top-left">OFFER</div>
                                            <div className="card-subtitle fw-semibold mb-2 text-end">Top Left Ribbon</div>
                                            <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={3}>
                                    <Card className="custom-card mb-0 overflow-hidden secondary-dash-border">
                                        <Card.Body className="p-4">
                                            <div className="ribbon-5 ribbon-secondary top-right">OPEN</div>
                                            <div className="card-subtitle fw-semibold mb-2 text-start">Top Right Ribbon</div>
                                            <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={3}>
                                    <Card className="custom-card mb-0 overflow-hidden warning-dash-border">
                                        <Card.Body className="p-4">
                                            <div className="ribbon-5 ribbon-warning bottom-left">CLOSE</div>
                                            <span className="d-block mb-2">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                            <div className="card-subtitle fw-semibold text-end">Bottom Left Ribbon</div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={3}>
                                    <Card className="custom-card mb-0 overflow-hidden danger-dash-border">
                                        <Card.Body className="p-4">
                                            <div className="ribbon-5 ribbon-danger bottom-right">SALE</div>
                                            <span className="d-block mb-2">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                            <div className="card-subtitle fw-semibold text-start">Bottom Right Ribbon</div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}

            {/* <!-- Start:: row-6 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="pb-0">
                            <Card.Title>Ribbon Style 6</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                {Ribbon6.map((idx) => (
                                    <Col xl={6} key={idx.id}>
                                        <Card className={`custom-card mb-0 ${idx.color}-dash-border`}>
                                            <Card.Body className="p-4">
                                                <SpkRibbons ribbonClass={`ribbon-6 ribbon-${idx.position} ribbon-${idx.color}`}>{idx.color.includes("primary") ? "Service" : "Offer"}</SpkRibbons>
                                                <div className={`card-subtitle fw-semibold mb-2 text-${idx.class}`}>{idx.title}  Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-6 --> */}
        </Fragment>
    );
};

export default Ribbons;