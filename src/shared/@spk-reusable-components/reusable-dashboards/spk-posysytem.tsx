import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import type { MenuItemsType } from '../../data/dashboards/possystemdata';
import { Link } from 'react-router-dom';
import SpkTooltips from '../reusable-uielements/spk-tooltips';
import SpkButton from '../reusable-uielements/spk-button';


interface SpkPosysytemProps {
    card: MenuItemsType
}

const SpkPosysytem: React.FC<SpkPosysytemProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className={`custom-card p-2 bg-${card.cardBg}`}>
                <img src={card.image} className="card-img-top" alt="..." />
                <Card.Body className=" p-2 pt-3">
                    <div className="mb-2">
                        <Link to="#!" className="fw-medium fs-16">{card.title}</Link>
                        <span className="fs-12 d-block">{card.subcategory}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center gap-2">
                            <h5 className="fw-semibold mb-0">${card.price}</h5>
                            <span className="text-muted fs-13 text-decoration-line-through">${card.originalPrice}</span>
                        </div>
                        <div>
                            <SpkTooltips placement="top" title="Add To Cart">
                                <SpkButton Disabled={card.Disabled} Buttonvariant={card.btn_clr} Customclass={`btn btn-sm btn-wave`}>
                                    <i className="ri-add-fill"></i>
                                    Add To Cart
                                </SpkButton>
                            </SpkTooltips>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default SpkPosysytem;
