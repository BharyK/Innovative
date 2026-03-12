import React, { Fragment } from 'react'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';
import { Card } from 'react-bootstrap';
import { StockCardSeries, type StockCardsType } from '../../data/dashboards/stocksdata';

interface SpkStocksSwiperProps {
    card: StockCardsType
}

const SpkStocksSwiper: React.FC<SpkStocksSwiperProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card overflow-hidden main-custom-card p-2">
                <Card.Body className="border border-primary border-opacity-25 rounded">
                    <div
                        className="d-flex gap-2 flex-wrap align-items-start justify-content-between mb-1">
                        <div>
                            <div className="fs-14 mb-1">
                                {card.name}<span className="text-muted"> {`(${card.symbol})`} </span>
                            </div>
                            <div className="fs-22 fw-semibold mb-2 d-inline-flex align-items-center">
                                {card.value}
                                <span className={`fs-12 fw-normal ms-1 text-${card.change.percentColor}`}>
                                    <i className={`ti ti-trending-${card.change.direction}`}></i> {card.change.percent}
                                </span>
                            </div>
                        </div>
                        <div className="ms-auto">
                            <span className={`avatar avatar-lg bg-${card.avatarBg} avatar-rounded`}>
                                <span className={`avatar avatar-rounded ${card.avatarColor} avatar-md`}>
                                    {card.svg}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex flex-fill align-items-end gap-2 justify-content-between">
                        <div>
                            <span className={`text-${card.lastMonthChange.percentColor} fw-semibold`}>{card.lastMonthChange.percent}
                                <i className={`ri-arrow-${card.lastMonthChange.direction}-line lh-1 align-center fs-14 fw-normal`}></i>
                            </span>
                            <span className="fw-medium fs-12 text-muted ms-1">From Last Month</span>
                        </div>
                        <div className="text-end">
                            <div id="btn-coin-chart">
                                <Spkapexcharts chartOptions={card.chartOptions} chartSeries={StockCardSeries} type="line" width={120} height={50} />
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkStocksSwiper
