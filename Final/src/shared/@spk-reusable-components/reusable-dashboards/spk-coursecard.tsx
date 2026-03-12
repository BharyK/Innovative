import React from 'react'
import { Card } from 'react-bootstrap';
import type { AnalyticsCardsType } from '../../data/dashboards/coursedata';
import SpkBadge from '../reusable-uielements/spk-badge';


interface SpkCourseCardProps {
    card: AnalyticsCardsType
}

const SpkCourseCard: React.FC<SpkCourseCardProps> = ({ card }) => {
    return (
        <div>
            <Card className={`custom-card overflow-hidden main-custom-card ${card.svgBg}-style p-2`}>
                <Card.Body className={`text-center ${card.boxBorder}-border rounded overflow-hidden`}>
                    <span className={`avatar avatar-lg border border-${card.svgBorder} border-opacity-25 avatar-rounded`}>
                        <span className={`avatar avatar-md ${card.svgBg} avatar-rounded`}>
                            {card.svg}
                        </span>
                    </span>
                    <p className="mb-1 mt-3 fw-medium">{card.title}</p>
                    <h4 className="fw-semibold mb-2">{card.count}</h4>
                    <div className="text-muted fs-13 d-inline-flex align-items-center gap-2 flex-wrap">
                        {card.status}
                        <SpkBadge variant={card.percentBg} Customclass={`mb-0 rounded-pill`}>
                            {card.percent}
                            <i className={`ri-arrow-${card.percenIcon}-line fs-10 align-middle ms-1`} ></i>
                        </SpkBadge>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SpkCourseCard;
