import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import type { SocialStatsType } from '../../data/dashboards/socialmediadata';

interface SocialMediaCardProps {
  card: SocialStatsType
}

const SpkSocialmediacard: React.FC<SocialMediaCardProps> = ({ card }) => {
  return (
    <Fragment>
      <Card className="custom-card custom-social-card">
        <Card.Body className=" p-4 d-flex gap-2 align-items-center flex-wrap">
          <div className={`avatar ${card.borderColor} avatar-lg border border-${card.borderColor} border-opacity-10 bg-${card.avatarBg}`}>
            <i className={`${card.iconClass} fs-24`}></i>
          </div>
          <div className="lh-1 ms-2">
            <span className="d-block mb-2 fs-14">{card.platform}</span>
            <div className="d-flex gap-2 align-items-center">
              <p className="mb-2 fs-22 fw-semibold">{card.followers}</p>
              <span className={`text-${card.changeColor}`}>{card.change}
                <i className={`ti ti-arrow-narrow-${card.changeDirection} ms-1 d-inline-block`}></i>
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default SpkSocialmediacard
