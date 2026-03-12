import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import SpkTooltips from '../reusable-uielements/spk-tooltips';
import SpkButton from '../reusable-uielements/spk-button';
import type { PlanType } from '../../data/pages/pricingdata';



interface SpkObject {
    card: PlanType
}

const SpkPricingCard: React.FC<SpkObject> = ({ card }) => {
    return (
        <Fragment>
            <div className={`card custom-card ${card.colorClass}-pricing-card text-center`}>
                {card.bgsvg}
                <Card.Body className=" p-4 z-3">
                    <span className="avatar avatar-xl avatar-rounded">
                        {card.icon}
                    </span>
                    <h5 className="mb-1 mt-3 fw-semibold">{card.title}</h5>
                    <p className="fs-13 text-muted">{card.description}</p>
                    <h2 className={`mb-0 fw-bold d-block text-${card.colorClass}`}>${card.price}/<span className="fs-12 text-default fw-medium ms-1">Price Per {card.plan}</span></h2>
                    <hr className="border-top my-4" />
                    <ul className="list-unstyled pricing-body p-3 pt-0 mb-3">
                        {card.features.map((data, index) => (
                            <li key={index}>
                                <div className="d-flex align-items-center">
                                    <span className="me-2 fs-14 lh-1"> <i className={`ri-check-double-line fw-medium fs-18 text-${card.colorClass}`}></i></span>
                                    <span>{data.bold ? (<strong className="me-1 d-inline-block">{data.bold}</strong>) : ''} {data.title} </span>
                                    {data.tooltip ? (<SpkTooltips placement="top" title={data.tooltip}><span className="align-middle ms-auto" ><i className="fe fe-info text-muted  fw-medium"></i></span></SpkTooltips>) : ''}
                                    {data.badge ? (<div className="ms-auto">
                                        <div className={`badge bg-${data.badgeClass} rounded-pill`}>{data.badge}</div>
                                    </div>) : ''}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="fs-13 text-muted px-2 mb-4">{card.footer}</p>
                    <SpkButton Buttonvariant={card.colorClass} Buttontype="button" Customclass="btn  btn-wave waves-effect waves-light rounded-pill"> Choose Plan </SpkButton>
                </Card.Body>
            </div>
        </Fragment>
    )
}

export default SpkPricingCard