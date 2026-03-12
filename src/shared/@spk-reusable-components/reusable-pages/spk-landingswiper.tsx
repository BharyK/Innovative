import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import type { TestimonialType } from '../../data/pages/landinfdata';

interface SpkLandingswiperProps {
    card: TestimonialType
}

const SpkLandingswiper: React.FC<SpkLandingswiperProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className={`custom-card bg-white testimonial-style-2-card ${card.theme} border-0`}>
                <Card.Body className="p-5">
                    <h5 className="fw-semibold mb-3">{card.category}</h5>
                    <div className="mb-3 text-muted">
                        {card.description}
                    </div>
                    <div className="d-flex align-items-end justify-content-between flex-wrap gap-2">
                        <div className="lh-1">
                            <span className="avatar rounded-circle me-2">
                                <img src={card.image} alt="" className="img-fluid rounded-circle" />
                            </span>
                        </div>
                        <div className="flex-fill">
                            <span className="d-block fw-semibold text-default">{card.name}</span>
                            <span className="text-default">{card.title}</span>
                        </div>
                        <div className="star-icon text-warning d-block ms-1">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-half-line"></i>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkLandingswiper;
