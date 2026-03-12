

import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import type { PremierProductSelectionType } from './ecommercedata'

interface SpkEcommersSwiperProps {
    card: PremierProductSelectionType
}

const SpkEcommersSwiper: React.FC<SpkEcommersSwiperProps> = ({ card }) => {
    return (
        <Fragment>
            <div className={`border border-${card.bgcolor} border-opacity-10 p-3 rounded-2 align-items-center d-block gap-2 text-center bg-${card.bgcolor}-transparent posotion-relative overflow-hidden`}>
                <div className="d-flex align-items-center justify-content-center">
                    <img src={card.image} alt="" className="img-fluid avatar avatar-xxl mb-3" />
                </div>
                <div className="text-center ms-auto">
                    <span>{card.discount}</span>
                    <p className="fw-medium mb-1 text-default">{card.name}</p>
                    <div className="ratings mb-3">
                        <span className="text-warning fs-10 lh-1 custom-star">
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-fill me-1"></i>
                            <i className="ri-star-half-fill"></i>
                        </span>
                        <span className="text-muted fs-12 d-block"> ({card.reviews} reviews)</span>
                    </div>
                    <Link to='#!' className={`btn btn-${card.bgcolor} btn-sm`}>View Product</Link>
                </div>
            </div>
        </Fragment >
    )
}

export default SpkEcommersSwiper
