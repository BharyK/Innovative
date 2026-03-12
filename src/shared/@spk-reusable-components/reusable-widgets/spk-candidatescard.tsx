import React, { Fragment } from 'react'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts'
import SpkTables from '../reusable-tables/spk-tables'
import type { CandidatesType } from '../../data/dashboards/jobsdata';
import type { ApexOptions } from 'apexcharts';

interface SpkCandidatesCardProps {
    card: CandidatesType;
    chartOptions: ApexOptions;
    chartSeries: number[];
    ChartId: string
}

const SpkCandidatesCard: React.FC<SpkCandidatesCardProps> = ({ card, chartOptions, chartSeries, ChartId }) => {
    return (
        <Fragment>
            <div id={ChartId} className="my-2">
                <Spkapexcharts chartOptions={chartOptions} chartSeries={chartSeries} type="donut" width={'100%'} height={272} />
            </div>
            <div className="table-responsive border-top">
                <SpkTables tableClass="table text-nowrap">
                    {card.map((idx) => (
                        <tr key={idx.id}>
                            <th>
                                <div> <span className="d-block fw-semibold"><i
                                    className={`ri-circle-line ${idx.iconColor} me-2`}></i>{idx.label}</span>
                                </div>
                            </th>
                            <td className="text-center">
                                <span className={`${idx.percentColor} fw-medium ms-1 d-inline-flex align-items-center`}>
                                    <i className={`ti ti-arrow-narrow-${idx.percentDirection}`}></i>{idx.percent}
                                </span>
                            </td>
                            <td className="text-center">
                                <div className="fs-14 mb-0 fw-semibold">{idx.count}</div>
                            </td>
                        </tr>
                    ))}
                </SpkTables>
            </div>
        </Fragment>
    )
}

export default SpkCandidatesCard;
