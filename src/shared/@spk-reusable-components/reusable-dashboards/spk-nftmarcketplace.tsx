import React from 'react';
import { Card } from 'react-bootstrap';
import type { TrendingBidsType } from '../../data/apps/nft/marketplacedata';

interface SpkNftMarcketPlaceProps {
    card: TrendingBidsType
}

const SpkNftMarcketPlace: React.FC<SpkNftMarcketPlaceProps> = ({ card }) => {
    return (
        <div>
            <Card className="p-2 border rounded-3  custom-card border-bottom-0">
                <div className="position-relative custom-width">
                    <img src={card.image} alt="" className="img-fluid rounded-3 mb-3 w-100 h-100" />
                    <div className={`nft-category-badge bg-${card.categoryColor}`}>
                        {card.category}
                    </div>
                    <p className="mb-0 border border-white border-opacity-25 bg-white-transparent fw-medium nft-auction-time px-2 rounded-1 fs-14 flex-shrink-0">
                        {card.timeLeft}</p>
                </div>

                <div className="p-1">
                    <p className="fs-14 fw-semibold mb-2">{card.title}</p>
                    <div className="d-flex justify-content-between gap-1 align-items-end flex-wrap">
                        <div>
                            <div className="d-flex align-items-center flex-wrap gap-1 mb-2">
                                <span className="avatar avatar-rounded avatar-xs">
                                    <img src={card.avatar} alt="" />
                                </span>
                                <div className="flex-fill">
                                    <p className="mb-0 fw-medium">{card.creator}</p>
                                </div>
                            </div>
                            <div>
                                <span className="text-muted">Bid: </span><span
                                    className="fs-14 fw-semibold me-2 ms-2">{card.bid}</span>
                            </div>
                        </div>
                        <div className={`btn btn-sm btn-${card.categoryColor}-light nft-place-btn`}>
                            Place a Bid
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default SpkNftMarcketPlace;
