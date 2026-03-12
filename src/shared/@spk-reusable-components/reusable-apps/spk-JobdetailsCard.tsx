import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SpkTooltips from '../reusable-uielements/spk-tooltips'
import SpkBadge from '../reusable-uielements/spk-badge'
import type { JobOpening } from '../../data/apps/jobs/searchjobdata'



interface SpkObjectType {
    item: JobOpening
}

const SpkJobdetailsCard: React.FC<SpkObjectType> = ({ item }) => {
    return (
        <Card className="card custom-card featured-jobs mb-4 p-2">
            <Card.Body className={`${item.color}-dash-border`}>
                <div className="d-flex mb-3 flex-wrap gap-2 flex-xxl-nowrap">
                    <div>
                        <span className={`avatar avatar-lg bg-${item.color} bg-opacity-20`}>
                            <span className="avatar avatar-md bg-white p-1">
                                <img src={item.image} alt="" />
                            </span>
                        </span>
                    </div>
                    <div className="ms-1 flex-grow-1 w-75 text-truncate">
                        <h6
                            className="fw-medium mb-1 d-flex align-items-center text-truncate w-75">
                            <Link to="#!" className="text-truncate">{item.title}</Link>
                        </h6>
                        <div className="fs-13 fw-normal text-muted mb-0 text-truncate">{item.companyname}
                            <SpkTooltips title='Verified'>
                                <i className="bi bi-patch-check-fill text-primary align-middle lh-1 mx-1"></i>
                            </SpkTooltips>
                        </div>
                    </div>
                    <div className="ms-auto d-flex gap-1 flex-wrap flex-xxl-nowrap">
                        <SpkTooltips title='Add to Bookmark'>
                            <Link to="#!" className="btn btn-sm btn-icon btn-light text-secondary">
                                <span><i className="ri-bookmark-line fs-13 lh-1 align-middle"></i></span>
                            </Link>
                        </SpkTooltips>
                        <SpkTooltips title='View Details'>
                            <Link to="#!" className="btn btn-sm btn-icon btn-light text-danger">
                                <span><i className="ri-eye-line fs-13 lh-1 align-middle"></i></span>
                            </Link>
                        </SpkTooltips>
                    </div>
                </div>
                <div
                    className="d-flex gap-2 justify-content-between flex-wrap align-items-center">
                    <div className="mt-1 mb-3">
                        <div
                            className="popular-tags d-flex gap-1 flex-wrap flex-xxl-nowrap">
                            <SpkBadge variant='danger-transparent' Pill={true} Customclass="fs-11">{item.jobtype}</SpkBadge>
                            <SpkBadge variant='secondary-transparent' Pill={true} Customclass="fs-11">{item.worklocation}</SpkBadge>
                            <SpkBadge variant='primary-transparent' Pill={true} Customclass="fs-11">{item.position}</SpkBadge>
                        </div>
                    </div>
                    <div className="text-muted fs-13">
                        <i className="ri-map-pin-line me-1"></i>{item.location}
                    </div>
                </div>
                <div
                    className="d-flex gap-2 justify-content-between flex-wrap align-items-center">
                    <h6 className="fw-medium mb-0 fw-semibold fs-14">{item.salary}
                    </h6>
                    <Link to="#!" className={`btn btn-sm btn-${item.color}`}>
                        Apply Now
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default SpkJobdetailsCard