
import { Bgcolor, bggradient, bgoutline, bgtransparent, bordercolors, OpacityValues, Othercolors, TextColors } from "../../../shared/data/utilities/colorsdata";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Colors = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Colors"} />

            <Pageheader title="Utilities" currentpage="Colors" activepage="Colors" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col lg={12} sm={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Background Colors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div className="row row-cols-12 d-flex align-items-center">
                                {Bgcolor.map((idx, index) => (
                                    <div className="p-3 col" key={index}>
                                        <div className={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Background gradients
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div className="row row-cols-12 d-flex align-items-center">
                                {bggradient.map((idx, index) => (
                                    <div className="p-2 col" key={index}>
                                        <div className={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Background transparent colors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div className="row row-cols-12 d-flex align-items-center">
                                {bgtransparent.map((idx, index) => (
                                    <div className="p-3 col" key={index}>
                                        <div className={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Background outline colors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div className="row row-cols-12 d-flex align-items-center">
                                {bgoutline.map((idx, index) => (
                                    <div className="p-3 col" key={index}>
                                        <div className={`m-2 bg-${idx.color} mx-auto color-container`}><i className="bi bi-emoji-smile fs-18"></i></div>
                                        <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Border Colors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div className="row row-cols-12 d-flex align-items-center">
                                {bordercolors.map((idx, index) => (
                                    <div className="p-3 col" key={index}>
                                        <div className={`m-2 border ${idx.color} mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Background Opacity
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div className="row row-cols-12 d-flex align-items-center">
                                {OpacityValues.map((idx) => (
                                    <div className="p-3 col" key={idx.id}>
                                        <div className={`m-2 bg-primary bg-opacity-${idx.value} text-fixed-${idx.color} mx-auto color-container`}>{idx.value}%</div>
                                        <p className="pb-0 mb-0 fw-medium text-center"><code>.bg-opacity-{idx.value}</code></p>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Text Colors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div className="row row-cols-12 d-flex align-items-center">
                                {TextColors.map((color) => (
                                    <Col key={color.id} className="p-3">
                                        <div className={`m-2 ${color.className} fw-medium fs-14 text-center`}>
                                            {color.label}
                                        </div>
                                        <p className="pb-0 mb-0 fw-medium text-center">
                                            <code>{`.${color.className}`}</code>
                                        </p>
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
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Text Opacity
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                                    <div className="row row-cols-12 d-flex align-items-center">
                                        {OpacityValues.map((opacity) => (
                                            <div key={opacity.id} className="p-3 col">
                                                <div className={`m-2 text-primary fw-medium text-opacity-${opacity.value} fs-14 text-center bg-opacity-${opacity.value} `} >
                                                    Opacity-{opacity.value}
                                                </div>
                                                <p className="pb-0 mb-0 fw-medium text-center">
                                                    <code>.text-opacity-{opacity.value}</code>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Callout
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div className="callout">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. </div>
                            <div className="callout callout-info">Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit. </div>
                            <div className="callout callout-warning">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit. </div>
                            <div className="callout callout-danger">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit.
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}
            <h6 className="mb-3">Other Colors:</h6>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="border border-dashed m-2 rounded-1 d-xl-flex flex-wrap">
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-blue-${idx.data}`} key={index}>$blue-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-blue">$blue</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="border border-dashed m-2 rounded-1 d-xl-flex flex-wrap">
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-indigo-${idx.data}`} key={index}>$indigo-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-indigo">$indigo</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="border border-dashed m-2 rounded-1 d-xl-flex flex-wrap">
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-purple-${idx.data}`} key={index}>$purple-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-purple">$purple</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="border border-dashed m-2 rounded-1 d-xl-flex flex-wrap">
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-pink-${idx.data}`} key={index}>$pink-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-pink">$pink</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="border border-dashed m-2 rounded-1 d-xl-flex flex-wrap">
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-red-${idx.data}`} key={index}>$red-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-red">$red</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="border border-dashed m-2 rounded-1 d-xl-flex flex-wrap">
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-orange-${idx.data}`} key={index}>$orange-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-orange">$orange</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="border border-dashed m-2 rounded-1 d-xl-flex flex-wrap">
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-yellow-${idx.data}`} key={index}>$yellow-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-yellow">$yellow</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="border border-dashed m-2 rounded-1 d-xl-flex flex-wrap">
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-green-${idx.data}`} key={index}>$green-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-green">$green</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="border border-dashed m-2 rounded-1 d-xl-flex flex-wrap">
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-teal-${idx.data}`} key={index}>$teal-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-teal">$teal</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="border border-dashed m-2 rounded-1 d-xl-flex flex-wrap">
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-cyan-${idx.data}`} key={index}>$cyan-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-cyan">$cyan</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="border border-dashed m-2 rounded-1 d-xl-flex flex-wrap">
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-gray-${idx.data}`} key={index}>$gray-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-gray">$gray</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}
        </Fragment>
    );
};

export default Colors;