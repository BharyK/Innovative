
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import type { DoctorCardDataType } from '../../data/widgets/widgetsdata'

interface SpkDoctorCardProps {
    card: DoctorCardDataType
}

const SpkDoctorCard: React.FC<SpkDoctorCardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body className=" p-2">
                    <div className={`p-3 d-flex align-items-center gap-3 rounded bg-${card.bgColor} bg-opacity-10 flex-wrap`}>
                        <span className={`avatar avatar-lg bg-white svg-${card.bgColor} ${card.bgColor}-dash-border avatar-rounded`}>
                            {card.icon}
                        </span>
                        <div>
                            <p className="fw-semibold mb-0 fs-20">{card.number}</p>
                            <span className="fs-13">{card.label}</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkDoctorCard;
