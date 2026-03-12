import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Notifications, Timeline01, Timeline02 } from "../../../shared/data/pages/timelinedata";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";

const Timeline = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Timeline"} />
            <Pageheader title="Pages" currentpage="Timeline" activepage="Timeline" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col lg={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title> Timeline 01 </Card.Title>
                        </Card.Header>
                        <Card.Body className=" pt-5">
                            <div className="timeline container">
                                <Row>
                                    <Col lg={12}>
                                        <div className="timeline-container">
                                            <div className="timeline-continue pt-0">
                                                {Timeline01.map((idx) => (
                                                    <div className="timeline-right" key={idx.id}>
                                                        <div className={`timeline-content ${idx.theme}`}>
                                                            <div className="timline-time-container border rounded overflow-hidden p-1">
                                                                <div className={`timeline-end p-2 bg-${idx.theme} text-fixed-white d-grid rounded-1`}>
                                                                    <span>  {idx.date} </span>
                                                                </div>
                                                                <p className="timeline-date text-muted mb-0 p-2">  {idx.time} </p>
                                                            </div>
                                                            <div className={`rounded-2 overflow-hidden p-2 bg-${idx.theme}-transparent mb-4`}>
                                                                <div className="p-2 d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                                    <div className="d-flex gap-3 flex-wrap">
                                                                        <h6 className={`timeline-main-title ${idx.theme}`}>{idx.title}</h6>
                                                                        <div>
                                                                            {idx.badges.map((data, index) => (
                                                                                <span key={index} className={`badge bg-${data.class} me-1`}>{data.label}</span>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <SpkButton Buttonvariant="outline-secondary" Customclass="btn btn-sm me-2 py-0">{idx.comments}<i className="ri-chat-3-line ms-2"></i></SpkButton>
                                                                        <SpkButton Buttonvariant="outline-danger" Customclass="btn btn-sm py-0">{idx.likes}<i className="ri-thumb-up-line ms-2"></i></SpkButton>
                                                                    </div>
                                                                </div>
                                                                <div className="timeline-box text-default">
                                                                    <p className="mb-2">
                                                                        <span className="text-default"><b>{idx.commenter}</b>  {idx.innertext}
                                                                            <Link to="#!" className={`text-${idx.theme} fw-medium text-decoration-underline mx-1`}>{idx.postOwner}</Link>'s Post
                                                                        </span>.
                                                                    </p>
                                                                    <p className="mb-0">{idx.description} </p>
                                                                    {idx.media ? (
                                                                        <p className="profile-activity-media mb-0">
                                                                            {idx.media.map((img, index) => (
                                                                                <Link to="#!" key={index}> <img src={img.src} alt="media 1" className="mb-0 img-fluid rounded-3" /></Link>
                                                                            ))}
                                                                        </p>
                                                                    ) : ''}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
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
                            <Card.Title>TIMELINE 02</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="time-steps-main-card">
                                <div className="timeline-steps">
                                    {Timeline02.map((idx) => (
                                        <div className={`timeline-step text-center ${idx.isComplete ? 'mb-0 not-complate' : ''}`} key={idx.id}>
                                            <div className="timeline-content" data-toggle="popover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                                                <span className={`avatar avatar-lg avatar-rounded bg-${idx.outerClass}-transparent border`}>
                                                    <span className={`avatar avatar-md avatar-rounded timeline-avatar-${idx.outerClass}`}>
                                                        {idx.svg}
                                                    </span>
                                                </span>
                                                <div className={`p-2 rounded bg-${idx.outerClass}${idx.isComplete ? '' : '-transparent'} mt-3`}>
                                                    <div className="text-default bg-white">
                                                        <div className={`px-2 pt-1 pb-2 bg-${idx.outerClass}${idx.isComplete ? '' : '-transparent'}`}>
                                                            <p className="fw-medium mb-0">{idx.date}</p>
                                                        </div>
                                                        <div className="p-3">
                                                            <p className="mb-2 fw-semibold">{idx.title}</p>
                                                            <p className="mb-0 mb-lg-0">{idx.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row className=" justify-content-center timeline-3">
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Timeline 03 </Card.Title>
                        </Card.Header>
                        <ul className="notification container px-3">
                            {Notifications.map((idx) => (
                                <li key={idx.id}>
                                    <Row>
                                        {idx.alignment === 'right' ? (
                                            <>
                                                <Col xl={6} className=" text-end">
                                                    <div className="notification-time d-flex align-items-center gap-2 d-inline-flex p-1 bg-light border rounded-1 text-default px-2 content-end">
                                                        <span className="date">{idx.date}</span>
                                                        <span className="time">{idx.time}</span>
                                                    </div>
                                                    <div className="notification-icon">
                                                        <Link to="#!" className={idx.borderColor}></Link>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <div className={`notification-body notification-body-end ${idx.borderColor}-dash-border`}>
                                                        <div className="d-flex align-items-start gap-3 flex-wrap">
                                                            <div className={`avatar avatar-xl bg-${idx.bgColor} avatar-rounded p-2`}>
                                                                <img src={idx.avatar} alt="" />
                                                            </div>
                                                            <div className="flex-fill w-50">
                                                                <h5 className="mb-1 fs-15 fw-bold">{idx.title}</h5>
                                                                <p className="mb-0 fs-13 text-muted" dangerouslySetInnerHTML={{ __html: idx.description }} ></p>
                                                            </div>
                                                            <div>
                                                                <SpkBadge variant={`${idx.bgColor}`}>{idx.day}</SpkBadge>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </>
                                        ) : (
                                            <>
                                                <Col xl={6}>
                                                    <div className={`notification-body ${idx.borderColor}-dash-border`}>
                                                        <div className="d-flex align-items-start gap-3 flex-wrap">
                                                            <div className={`avatar avatar-xl bg-${idx.bgColor} avatar-rounded p-2`}>
                                                                <img src={idx.avatar} alt="" />
                                                            </div>
                                                            <div className="flex-fill w-50">
                                                                <h5 className="mb-1 fs-15 fw-bold">{idx.title}</h5>
                                                                <p className="mb-0 text-muted" dangerouslySetInnerHTML={{ __html: idx.description }} ></p>
                                                            </div>
                                                            <div>
                                                                <SpkBadge variant={`${idx.bgColor}`}>{idx.day}</SpkBadge>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <div className="notification-time d-flex align-items-center gap-2 d-inline-flex p-1 bg-light border rounded-1 text-default px-2">
                                                        <span className="date">{idx.date}</span>
                                                        <span className="time">{idx.time}</span>
                                                    </div>
                                                    <div className="notification-icon">
                                                        <Link to="#!" className={idx.borderColor}></Link>
                                                    </div>
                                                </Col>
                                            </>
                                        )}
                                    </Row>
                                </li>
                            ))}
                        </ul>
                        <div className="text-center mb-4">
                            <SpkButton Buttonvariant="primary-light" Customclass="btn  btn-loader mx-auto">
                                <span className="me-2">Loading</span> <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                            </SpkButton>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

        </Fragment>
    );
};

export default Timeline;