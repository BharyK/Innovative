import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import type { AnalyticscardType } from '../../data/dashboards/analyticsdata'
import SpkBadge from '../reusable-uielements/spk-badge'


interface SpkAnalyticsProps {
    card: AnalyticscardType
}

const SpkAnalytics: React.FC<SpkAnalyticsProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className={`custom-card main-custom-card ${card.borderColor}-border`}>
                <Card.Body className=" p-4">
                    <div className="d-flex align-items-start justify-content-between">
                        <div>
                            <span className="fw-medium fs-13 mb-1">{card.title}</span>
                            <p className="fs-22 fw-semibold mb-0">{card.count}</p>
                        </div>
                        <span className={`avatar avatar-md ${card.svgBgColor}`}>
                            {card.svgIcon}
                        </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <SpkBadge variant={`${card.percentBgColor}`}>
                            {card.percent}
                        </SpkBadge>
                        <span className="fs-13 text-muted">This Month</span>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkAnalytics
