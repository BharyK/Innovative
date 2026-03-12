import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import type { JobsCardsType } from '../../data/dashboards/jobsdata';

interface SpkJobsCardProps {
  card: JobsCardsType
}

const SpkJobsCard: React.FC<SpkJobsCardProps> = ({ card }) => {
  return (
    <Fragment>
      <Card className={`custom-card main-custom-card ${card.cardBg} overflow-hidden`}>
        <Card.Body>
          <div>
            {card.svg1}
            <div className={`avatar avatar-md ${card.svg2Color} mb-2 avatar-rounded`}>
              {card.svg2}
            </div>
            <span className="d-block mb-1">{card.title}</span>
            <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <h3 className="fw-semibold mb-0">{card.value}</h3>
              <span className="d-block text-muted fs-13">{card.increase ? "Increased By" : "Decreased By"}
                <span className={`text-${card.percentColor}`}><i className={`ti ti-arrow-narrow-${card.percentDirection}`}></i>{card.percent}</span>
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default SpkJobsCard;
