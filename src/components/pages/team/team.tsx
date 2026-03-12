import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Link } from "react-router-dom";
import { CategoriesData, TeamMembers } from "../../../shared/data/pages/teamdata";

const Team = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Team"} />
            <Pageheader title="Pages" currentpage="Team" activepage="Team" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row className="justify-content-center">
                <Col xl={10}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="pb-0 justify-content-between">
                                    <Card.Title>
                                        Categories
                                    </Card.Title>
                                    <div className="d-flex gap-2 align-items-center">
                                        <Link to='#!' className="categories-arrow left bg-primary-transparent">
                                            <i className="ri-arrow-left-s-line text-primary"></i>
                                        </Link>
                                        <Link to='#!' className="categories-arrow right bg-primary text-fixed-white">
                                            <i className="ri-arrow-right-s-line text-fixed-white"></i>
                                        </Link>
                                    </div>
                                </Card.Header>
                                <Card.Body className="d-flex align-items-center gap-4 flex-wrap">
                                    {CategoriesData.map((idx) => (
                                        <div className={`nft-tag p-1 nft-tag-${idx.color} ${idx.isActive ? 'active' : ''}`} key={idx.id}>
                                            <Link to="#!" className="stretched-link"></Link>
                                            <span className=""><i className={`ri-${idx.icon} lh-1 fs-18 align-middle nft-tag-icon`}></i></span>
                                            <span className="nft-tag-text">{idx.label}</span>
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>
                        {TeamMembers.map((idx) => (
                            <Col xxl={3} xl={4} lg={4} sm={6} key={idx.id}>
                                <Card className={`custom-card team-member ${idx.cardClass}`}>
                                    <Card.Body className="text-center p-4">
                                        <div className="team-profile">
                                            <span className="avatar avatar-xxl avatar-rounded">
                                                <img alt="" src={idx.src} className="custom-team-card" />
                                            </span>
                                        </div>
                                        <div className="text-center profile-cantainer">
                                            <div>
                                                <h6 className="mb-2 fw-medium">{idx.name}</h6>
                                                <p className={`mb-0 text-${idx.cardClass} fw-semibold`}>{idx.position}</p>
                                                <div className="d-flex justify-content-center mt-4">
                                                    <Link aria-label="anchor" to="#!" className="btn btn-icon btn-primary btn-wave btn-sm waves-effect waves-light">
                                                        <i className="ri-twitter-x-fill"></i>
                                                    </Link>
                                                    <Link aria-label="anchor" to="#!" className="btn btn-icon btn-secondary btn-wave btn-sm ms-2 waves-effect waves-light">
                                                        <i className="ri-facebook-fill"></i>
                                                    </Link>
                                                    <Link aria-label="anchor" to="#!" className="btn btn-icon btn-danger btn-wave btn-sm ms-2 waves-effect waves-light">
                                                        <i className="ri-instagram-line"></i>
                                                    </Link>
                                                    <Link aria-label="anchor" to="#!" className="btn btn-icon btn-warning btn-wave btn-sm ms-2 waves-effect waves-light">
                                                        <i className="ri-linkedin-fill"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    );
};

export default Team;