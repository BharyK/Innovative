import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';
import type { DailyStatsType } from '../../data/dashboards/cryptodata';

interface SpkCryptocardProps {
  card: DailyStatsType;
  CustomCard: string
}

const SpkCryptocard: React.FC<SpkCryptocardProps> = ({ card, CustomCard}) => {

  return (
    <Fragment>
      <Card className={`custom-card ${CustomCard}`}>
        <Card.Body className={` border border-${card.borderColor} border-opacity-10`}>
          <div className="d-flex align-items-start gap-3">
            <div>
              <span className={`avatar avatar-md ${card.avatarColor}`}>
                {card.svg}
              </span>
            </div>
            <div
              className="d-flex align-items-start justify-content-between flex-fill flex-wrap">
              <div>
                <span className="d-block mb-1 fw-medium">{card.title}</span>
                <h4 className="fw-semibold mb-2">{card.value}</h4>
                <div className={`fs-13 ${card.customPadding}`}>
                  <span
                    className={`text-${card.changeColor} me-1 d-inline-flex align-items-center`}><i
                      className={`ti ti-arrow-${card.changeDirection} me-1`}></i>{card.change}</span>
                  <span className="text-muted fs-13">{card.description}</span>
                </div>
              </div>
              <div className="position-relative d-flex align-items-center justify-content-center">
                <div id={card.chartId}>
                  <Spkapexcharts chartOptions={card.chartOptions} chartSeries={card.chartSeries} type="donut" width={70} height={70} />
                </div>
                <h5 className={`fw-semibold mb-0 chart-value text-${card.borderColor}`}>{card.chartValue}</h5>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkCryptocard;
