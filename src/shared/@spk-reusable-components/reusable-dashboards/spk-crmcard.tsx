import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import { CrmCardSeries, type CardType } from '../../data/dashboards/crmdata';
import SpkBadge from '../reusable-uielements/spk-badge';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';

interface SpkCrmcardProps {
  card: CardType
  CustomCardClass?: string
  CardBodyClass?: string
  Chart?: boolean
  AvatarSize?: string;
  DflexClass?: string;
}

const SpkCrmcard: React.FC<SpkCrmcardProps> = ({ card, CustomCardClass, CardBodyClass, Chart, AvatarSize, DflexClass }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${CustomCardClass}`}>
        <Card.Body className={CardBodyClass}>
          <div className={`d-flex ${DflexClass}`}>
            <div>
              <span className={`avatar avatar-${AvatarSize} ${card.svgBg} ${Chart ? 'crm-icon' : ''}`}>
                {card.svg}
              </span>
            </div>
            <div className="flex-fill">
              {Chart ? (<>
                <span className="d-block mb-1">{card.title}</span>
                <h3 className="fs-22 fw-semibold mb-1">{card.count}</h3>
              </>) : (<>
                <h4 className="fw-semibold mb-1">{card.count}</h4>
                <span className="">{card.title}</span>
              </>)}
            </div>
            <div className="text-end">
              {Chart ? '' : (<span className="d-block text-muted fs-13 mb-1">Today</span>)}
              <SpkBadge variant={`${card.percentBg}`}><i className={`ti ti-arrow-narrow-${card.percentIndicator} me-${card.percentIndicatorMargin}`}></i>{card.percent}</SpkBadge>
            </div>
          </div>
          {Chart ? (
            <div id="crm-total-customers">
              <Spkapexcharts chartOptions={card.chartOptions} chartSeries={CrmCardSeries} type="area" width={"100%"} height={50} />
            </div>
          ) : ''}

        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default SpkCrmcard;
