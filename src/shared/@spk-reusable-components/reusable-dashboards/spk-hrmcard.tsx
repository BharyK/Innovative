import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import type { HrmCardType } from '../../data/dashboards/hrmdata';

interface SpkHrmCardProps {
  card: HrmCardType
}



const SpkHrmcard: React.FC<SpkHrmCardProps> = ({ card }) => {
  return (
    <Fragment>
      <Card className={`custom-card main-custom-card dashboard-main-card overflow-hidden ${card.svgColor}`}>
        <Card.Body className=" p-4">
          <div className="d-flex align-items-start gap-3">
            <div className="flex-fill">
              <span className="fs-13 fw-medium">{card.title}</span>
              <h4 className="fw-semibold my-2 lh-1">{card.value}</h4>
              <div className="d-flex align-items-center justify-content-between">
                <span className="fs-12 d-block text-muted"><span className={`text-${card.percentColor} me-1 fw-semibold d-inline-flex align-items-center`}><i className={`ti ti-trending-${card.direction} me-1 fw-semibold align-middle`}></i>{card.percent}%</span>{card.timeline}</span>
              </div>
            </div>
            <div>
              <span className={`avatar avatar-md ${card.svgColor}`}>
                {card.svg}
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default SpkHrmcard;
