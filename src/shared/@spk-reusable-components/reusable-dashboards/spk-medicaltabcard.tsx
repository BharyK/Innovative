import React, { Fragment } from 'react';
import type { UpcomingAppointmentsType } from '../../data/dashboards/medicaldata';

interface SpkMedicalTabCardProps {
    card: UpcomingAppointmentsType
}

const SpkMedicalTabCard: React.FC<SpkMedicalTabCardProps> = ({ card }) => {
    return (
        <Fragment>
            <li className="list-item" key={card.id}>
                <div className="sh-shedule d-sm-flex align-items-start justify-content-between">
                    <div>
                        <p className="lh-1 mb-1 fw-semibold">{card.title}</p>
                        <span className="text-muted">{card.department}</span>
                    </div>
                    <div className="badge bg-light text-default d-inline-flex">
                        <span><i className="fe fe-clock me-1 fs-13"></i></span>
                        <span>{card.time.start}</span> <span className="mx-2 text-muted">-</span><span>{card.time.end}</span>
                    </div>
                </div>
            </li>
        </Fragment>
    )
}

export default SpkMedicalTabCard;
