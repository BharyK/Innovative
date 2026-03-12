import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import SpkTooltips from '../reusable-uielements/spk-tooltips'
import { Link } from 'react-router-dom'
import SpkBadge from '../reusable-uielements/spk-badge'
import type { jobcandidateType } from '../../data/apps/jobs/candidatedetailsdata'

interface SpkObjectType {
    obj: jobcandidateType
}

const Spksearchcandidate: React.FC<SpkObjectType> = ({ obj }) => {
    return (
        <Card className="custom-card p-2">
            <Card.Body className="border border-dashed">
                <div className="float-end d-flex gap-1 align-items-center flex-wrap">
                    <SpkTooltips title='View'>
                        <Link to="#!" className="btn btn-sm btn-primary-light">
                            <i className="ri-eye-line fs-13 lh-1 align-middle"></i>
                        </Link>
                    </SpkTooltips>
                    <SpkTooltips title='Bookmark'>
                        <Link to="#!" className="btn btn-sm btn-danger-light">
                            <i className="ri-bookmark-line fs-13 lh-1 align-middle"></i>
                        </Link>
                    </SpkTooltips>
                </div>
                <div className="d-flex align-items-start flex-wrap gap-2 mb-3">
                    <span
                        className={`avatar avatar-lg bg-${obj.avatarcolor}-transparent shadow-sm border border-${obj.avatarcolor} border-opacity-25 p-1 avatar-rounded`}>
                        <img src={obj.image} alt="Profile Picture" />
                    </span>
                    <div className="ms-2">
                        <h6 className="fw-medium mb-1 d-flex align-items-center">
                            {obj.name}
                            <SpkTooltips title="Verified">
                                <i className="bi bi-patch-check-fill text-primary align-middle lh-1 mx-1"></i>
                            </SpkTooltips>
                        </h6>
                        <div className="d-flex gap-2 align-items-center">
                            <div className="fw-medium fs-12">
                                <i className="ri-briefcase-line text-muted fs-13"></i> Job:
                                <span className="fw-normal mx-1">{obj.role}</span>
                            </div>
                            <div className="popular-tags d-flex gap-1 flex-wrap flex-xxl-nowrap">
                                <SpkBadge Pill={true} variant="primary" Customclass="fs-11">
                                    {obj.badge1}
                                </SpkBadge>
                                <SpkBadge Pill={true} variant="warning" Customclass="fs-11">
                                    {obj.badge2}
                                </SpkBadge>
                                <SpkBadge Pill={true} variant="danger" Customclass="fs-11">
                                    {obj.badge3}
                                </SpkBadge>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 bg-light rounded-1">
                    <Row className="gy-3 gy-xxl-0">
                        <Col xxl={6} xl={6}>
                            <div className="fw-medium mb-1">
                                <i className="ri-map-pin-line text-danger fs-15"></i> Location:
                                <span className="fw-normal ms-1 d-inline-block">{obj.location}</span>
                            </div>
                            <div className="fw-medium">
                                <i className="ri-book-open-line text-primary fs-15 me-1"></i>
                                Qualification:
                                <span className="fw-normal ms-1 d-inline-block">{obj.qualification}</span>
                            </div>
                        </Col>
                        <Col xxl={6} xl={6}>
                            <div className="fw-medium mb-1">
                                <i className="ri-wallet-3-line text-info fs-15"></i> Expected
                                Salary:
                                <span className="fw-normal ms-1 d-inline-block"> {obj.salary}</span>
                            </div>
                            <div className="fw-medium">
                                <i className="ri-time-line text-pink fs-15"></i> Employment Type:
                                <span className="fw-normal ms-1 d-inline-block">{obj.jobtype}</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Spksearchcandidate