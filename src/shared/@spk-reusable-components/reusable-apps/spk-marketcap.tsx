import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';
import SpkBadge from '../reusable-uielements/spk-badge';
import type { CryptoDataType } from '../../data/apps/crypto/currencyexchangedata';


interface SpkMarketcapProps {
    type?: string;
    width?: string;
    height?: number;
    obj: CryptoDataType;
}

const SpkMarketcap: React.FC<SpkMarketcapProps> = ({ width, height, obj, type }) => {
    return (
        <Fragment>
            <Card className="custom-card overflow-hidden">
                <Card.Body className="mb-4">
                    <div className="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                        <div>
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <div className="lh-1">
                                    <span className="avatar avatar-rounded avatar-md">
                                        <img src={obj.img} alt="" />
                                    </span>
                                </div>
                                <div>
                                    <h6 className="fw-medium mb-0">{obj.title}</h6>
                                    <span className="fs-12 text-muted">-{obj.type}</span>
                                </div>
                            </div>
                            <span className="fs-25 d-flex align-items-center">{obj.changePercent}
                                <span className="fs-12 text-warning op-7 ms-2">
                                    {obj.changeValue}
                                    <i className="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i>
                                </span>
                                {
                                    obj.Badgetag ?
                                        <SpkBadge variant='success-transparent' Customclass="fs-10 ms-2">24H</SpkBadge> : ""

                                }
                            </span>
                        </div>
                        <div className="text-end d-flex gap-2">
                            <span className="d-block fs-14 mb-1">{obj.price2}</span>
                            <span className="d-block text-primary fw-medium">{obj.price3}</span>
                        </div>
                    </div>
                </Card.Body>
                <div id="btc-currency-chart" className="mt-1 w-100">
                    <Spkapexcharts chartOptions={obj.chartoption} chartSeries={obj.chartseries} type={type} width={width} height={height} />
                </div>
            </Card>
        </Fragment>
    );
};

export default SpkMarketcap;
