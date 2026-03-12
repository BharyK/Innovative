import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import type { DashboardStatsType } from '../../data/dashboards/schooldata';
import { Link } from 'react-router-dom';

interface SpkSchoolCardProps {
    card: DashboardStatsType;
    CustomCardClass?: string;
    CardBodyClass?: string;
    ShowFooter?: boolean
    DflexClass?: string;
}

const SpkSchoolCard: React.FC<SpkSchoolCardProps> = ({ card, CustomCardClass, CardBodyClass, ShowFooter, DflexClass }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${CustomCardClass} `}>
                {ShowFooter ? '' : (
                    <span className={`icon svg-${card.svgColor}`}>
                        {card.svg1}
                    </span>)}
                <Card.Body className={CardBodyClass}>
                    <div className={`d-flex ${DflexClass}`}>
                        <div className={`avatar avatar-lg bg-${card.avatarBg} border border-${card.containerBorder} border-opacity-10 ${ShowFooter ? `${card.svgColor}-dash-border ` : ''}`}>
                            <div className={`avatar avatar-md ${card.svgColor}`}>
                                {card.svg2}
                            </div>
                        </div>
                        <div className="lh-1">
                            <span className="d-block mb-2 fw-medium">{card.title}</span>
                            <h4 className="fw-semibold mb-1">{card.value}</h4>
                            {ShowFooter ? '' : (
                                <span className="fs-13 text-muted mb-0">
                                    <span className={`text-${card.percentColor} fw-semibold fs-12`}>
                                        {card.percent}
                                        <i className={`ri-arrow-${card.trend}-s-line align-middle mx-1`}></i>
                                    </span>
                                    {card.period}
                                </span>
                            )}
                        </div>
                    </div>
                    {ShowFooter ? (
                        <div className="d-flex justify-content-between py-2 px-3 m-2 border border-dashed rounded-1 flex-wrap">
                            <div className="d-flex align-items-center gap-1 mb-1">
                                <span className={`badge rounded-pill bg-${card.arrowIconClass === 'up' ? 'primary' : 'danger'}-transparent me-2`}><i
                                    className={`ri-arrow-left-${card.arrowIconClass}-line fs-11`}></i></span>
                                <span className="fs-14">{card.percentage}</span>
                                <p className="fs-11 text-muted mb-0">This Month</p>
                            </div>
                            <Link to="#!" className="text-primary text-decoration-underline">View More</Link>
                        </div>
                    ) : ''}
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkSchoolCard;
