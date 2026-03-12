import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { disccoveredleadsType } from '../../data/apps/crm/dealsdata'

interface SpkObjectType {
    obj: disccoveredleadsType
}

const Spkdeals: React.FC<SpkObjectType> = ({ obj }) => {
    return (
        <Card className="custom-card">
            <Card.Body className="">
                <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="d-flex align-items-center gap-1 flex-wrap">
                        <div className="lh-1">
                            <span className="avatar avatar-sm avatar-rounded">
                                <img src={obj.imgSrc} alt="" />
                            </span>
                        </div>
                        <div>
                            <div className="">{obj.title}</div>
                            <div className="text-muted fs-12">{obj.date}</div>
                        </div>
                    </div>
                </div>
                <p className="fw-medium mb-1 fs-14">{obj.text}</p>
                <p className="fw-medium">
                    <span className="text-muted fw-normal">{obj.type}:</span> {obj.amount}
                </p>
                <div className="deal-description">
                    <div className="">
                        <Link to="#!" className="company-name">{obj.companyName}</Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Spkdeals