import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import type { MetricCardsType } from '../../data/dashboards/projectsdata';



interface SpkProjectsCardProps {
  card: MetricCardsType
  AvatarRounded?: string
  CardBorder?: boolean
}

const SpkProjectscard: React.FC<SpkProjectsCardProps> = ({ card, AvatarRounded, CardBorder }) => {
  return (
    <Fragment>
      <Card className={`custom-card main-custom-card ${CardBorder ? `${card.svgColor}-dash-border` : ''}`}>
        <Card.Body className=" p-4">
          <div className="d-flex align-items-start justify-content-between flex-wrap gap-2">
            <div> <span className="d-block mb-2">{card.title}</span>
              <h3 className="fw-semibold lh-1 mb-0 fs-22">{card.value}<span className={`text-${card.changeColor} fs-13 fw-semibold ms-1 d-inline-flex align-items-center`}><i className={`ti ti-arrow-narrow-${card.changeDirection}`}></i>{card.change}</span></h3>
            </div>
            <div className={`p-1 lh-1 bg-${card.bgColor} rounded`}>
              <span className={`avatar avatar-md ${AvatarRounded} ${card.svgColor}`}>
                {card.svg}
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkProjectscard;
