import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import type { SalesDataRow1Type } from '../../data/dashboards/salesdata';

interface SalesDashboardProps {
  card: SalesDataRow1Type
}

const SpkSalesdashboard: React.FC<SalesDashboardProps> = ({ card }) => {
  return (
    <Fragment>
      <Card className="custom-card overflow-hidden main-custom-card">
        <Card.Body>
          <div className="d-flex gap-3">
            <div className={`avatar avatar-md ${card.avatarClass}`}>
              {card.svgIcon}
            </div>
            <div className="flex-fill">
              <div className="flex-fill fw-medium fs-13 mb-1">{card.title}</div>
              <div className="fs-22 fw-semibold mb-1">{card.value}</div>
              <div className="d-flex align-items-center fs-12">
                <span className={`text-${card.arrow === 'up' ? 'primary' : 'danger'} fw-semibold me-1 d-inline-flex align-items-center`}>
                  <i className={`ti ti-trending-${card.arrow} me-1 fw-medium align-middle`}></i>{card.percentage}
                </span>
                <span className="text-muted">This Month</span>
              </div>
            </div>
            {card.bgsvg}
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default SpkSalesdashboard;
