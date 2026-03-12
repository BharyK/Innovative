import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import type { CryptoCardsType } from '../../data/dashboards/cryptodata';

interface SpkCryptoSwiperCardProps {
    card: CryptoCardsType
    Chart?: boolean
}

const SpkCryptoSwiperCard: React.FC<SpkCryptoSwiperCardProps> = ({ card, Chart }) => {
    return (
        <Fragment>
            <Card className={`custom-card overflow-hidden border border-${card.avatarBg} border-opacity-10 bg-${card.avatarBg}-grad`}>
                <Card.Body>
                    <div>
                        {card.svg1}
                    </div>
                    <div className="d-flex align-items-center mb-3 gap-2 justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                            <div className={`lh-1 avatar avatar-lg border border-${card.avatarBg} border-opacity-25 avatar-rounded`}>
                                <span className={`avatar avatar-md bg-${card.avatarBg} avatar-rounded`}>
                                    {card.svg2}
                                </span>
                            </div>
                            <div>
                                <div className="text-muted fs-13 fw-medium">{card.symbol}</div>
                                <span className="d-block fw-semibold">{card.name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className={Chart ? 'd-inline-flex' : ''}>
                            <p className="fw-semibold mb-3 lh-1 fs-22">{card.amount}</p>
                            <div className={`badge bg-${card.avatarBg}-transparent d-inline-flex align-items-center`}>
                                <i className={`ti ti-trending-${card.changeDirection} me-1 align-middle`}></i>{card.change}
                            </div>
                        </div>
                        {/* {Chart ? (
                            <div id={card.chartId}><Spkapexcharts chartOptions={card.chartOptions} chartSeries={card.chartSeries} type={card.type} width={'100%'} height={card.height} /></div>
                        ) : ''} */}

                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkCryptoSwiperCard
