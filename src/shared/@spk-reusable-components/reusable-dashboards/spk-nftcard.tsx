import React, { Fragment } from 'react'
import { Card } from "react-bootstrap"
import parse from 'html-react-parser';
import SpkDropdown from '../reusable-uielements/spk-dropdown';
import { Link } from 'react-router-dom';

interface CardData {
  svgIcon: string;
  title?: string;
  text?: string;
  avatarclor?: string;
  percentColor?: string;
  percent?: string;
  color?: string;
  trend?: string;
}

interface SpkNftCardProps {
  cardClass?: string;
  bodyClass?: string;
  titleClass?: string;
  MaindivClass?: string;
  card: CardData;
  showProductList?: boolean
  showDashboard?: boolean
  showDropdown?: boolean
}

const SpkNftcard: React.FC<SpkNftCardProps> = ({ cardClass, titleClass, bodyClass, card, showProductList = false, showDashboard = false, showDropdown = false, MaindivClass }) => {
  return (
    <Fragment>
      <Card className={`custom-card main-custom-card ${cardClass}`}>
        <Card.Body className={bodyClass}>
          <div className={`d-flex ${MaindivClass}`}>
            <div> <span className={`avatar avatar-md ${card.avatarclor}`}>
              {parse(card.svgIcon)}
            </span> </div>
            <div className="flex-fill">



              {showProductList ?
                <>
                  <span className={`d-block ${titleClass}`}>{card.title}</span>
                  <h5 className="fw-semibold mb-2 lh-1">{card.text}
                    <span className={`text-${card.trend === 'up' ? 'primary' : 'danger'} fw-semibold fs-12 d-inline-flex align-items-center`}>
                      <i className={`ti ti-arrow-narrow-${card.trend}`}></i>{card.percent}</span>
                  </h5>
                </>
                : <>
                  <span className={`d-block ${titleClass}`}>{card.title}</span>
                  <p className="fw-semibold mb-2 lh-1 fs-22">{card.text} </p>
                </>}
            </div>
            {showDropdown ?
              <SpkDropdown Togglevariant='' Customtoggleclass='no-caret border-0 p-0' Icon={true} IconClass='ri-more-2-fill fs-18 text-muted' >
                <li><Link className="dropdown-item" to="#!">Week</Link></li>
                <li><Link className="dropdown-item" to="#!">Day</Link></li>
                <li><Link className="dropdown-item" to="#!">Year</Link></li>
              </SpkDropdown>
              : ""}
            {showDashboard ? <span className={`text-${card.trend === 'up' ? 'primary' : 'danger'} me-1 d-inline-flex align-items-center`}><i className={`ti ti-arrow-narrow-${card.trend}`}></i>{card.percent}</span> : ""}
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default SpkNftcard
