import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import SpkDropdown from '../reusable-uielements/spk-dropdown';
import SpkBadge from '../reusable-uielements/spk-badge';

interface SpkOrdersProps {
    orderId: string;
    src1: string;
    product: string;
    date: string;
    color: string;
    status: string;
    src2: string;
    customer: string;
    newprice: string;
    oldprice: string;
}
interface SpkOrders {
    obj: SpkOrdersProps;
}

const SpkOrders: React.FC<SpkOrders> = (
    {
        obj
    }
) => {

    return (
        <Fragment>
            <Card className={`custom-card ${obj.color}`}>
                <Card.Body>
                    <div className="d-flex align-items-start mb-2 gap-1 flex-wrap">
                        <div className="me-2">
                            <span className="avatar avatar-xl p-1">
                                <img src={obj.src1} alt="img" />
                            </span>
                        </div>
                        <div className="flex-fill">
                            <p className="mb-1 fw-semibold fs-15 text-default">{obj.product}</p>
                            <div className="d-flex gap-2 align-items-center">
                                <div className="fw-semibold fs-15  text-default"> {obj.newprice}
                                </div> <s className="text-muted fs-12"> {obj.oldprice}</s>
                            </div>
                        </div>
                        <SpkDropdown Togglevariant={`${obj.color}-light`} Customtoggleclass='btn btn-sm btn-icon btn-wave waves-effect waves-light no-caret' Icon={true} IconClass='ri-more-2-fill'>
                            <li><a className="dropdown-item" href="#!">View Price</a></li>
                            <li><a className="dropdown-item" href="#!">Download Price</a></li>
                            <li><a className="dropdown-item" href="#!">Delete</a></li>
                        </SpkDropdown>
                    </div>
                    <div className="d-flex mb-2 justify-content-between gap-2 p-3 bg-light rounded">
                        <div className="flex-shrink-0">
                            <div className="fs-12 mb-2"><span className="fw-semibold">Order Id:
                                :</span></div>
                            <span className="fw-semibold">ID : {obj.orderId}</span>
                        </div>
                        <div className="flex-shrink-0 text-end">
                            <div className="fs-12 mb-2"><span className="fw-semibold">Status
                                :</span></div>
                            <SpkBadge variant={obj.color}>{obj.status}</SpkBadge>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center  text-default">
                            <span className="avatar avatar-sm me-2 avatar-rounded p-1 bg-light">
                                <img src={obj.src2} alt="img" />
                            </span>{obj.customer}
                        </div>
                        <span className="text-default fs-13">{obj.date}</span>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkOrders;