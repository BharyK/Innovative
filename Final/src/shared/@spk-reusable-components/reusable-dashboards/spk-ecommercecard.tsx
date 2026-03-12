import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import type { CardsType } from '../../data/dashboards/ecommercedata';
import SpkBadge from '../reusable-uielements/spk-badge';


interface SpkEcommercecardProps {
  card: CardsType
  CardBodyClass?: string
  CustomCardClass?: string
}

const SpkEcommercecard: React.FC<SpkEcommercecardProps> = ({ card, CardBodyClass, CustomCardClass }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${CustomCardClass}`}>
        <Card.Body className={CardBodyClass}>
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-1">
            <div>
              <div className="fw-medium fs-13 mb-1">{card.title}</div>
              <p className="fs-22 fw-semibold mb-1">
                {card.count}
              </p>
              <div className="d-flex gap-2 justify-content-between flex-wrap align-items-center">
                <div className="fs-12 mb-0 text-muted">{card.status}</div>
                <SpkBadge variant={card.percentageBg} Customclass={`rounded-pill`}>
                  {card.percentage}
                </SpkBadge>
              </div>
            </div>
            <div className={`text-${card.wrapperTextColor} p-1 rounded-circle border border-${card.wrapperBorder} border-opacity-25 ms-auto`}>
              <span className={`avatar avatar-md rounded-circle ${card.svgColor}`}>
                {card.svg}
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default SpkEcommercecard;
