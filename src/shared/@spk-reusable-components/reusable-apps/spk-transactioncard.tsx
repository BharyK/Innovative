import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import parse from 'html-react-parser';
import type { CardsdataType } from '../../data/apps/crypto/transactiondata';

interface SpkObjectType {
    obj: CardsdataType
}

const Spktransactioncard: React.FC<SpkObjectType> = ({ obj }) => {

    return (
        <Fragment>
            <Card className={`custom-card ${obj.cardClass}`}>
                <Card.Body className={`p-4 ${obj.cardbodyClass}`}>
                    <div className="d-flex align-items-start justify-content-between flex-wrap gap-2">
                        <div>
                            <span className="d-block mb-2">{obj.title}</span>
                            <h3 className="fw-semibold lh-1 mb-0 fs-22">{obj.text}
                                <span className={`text-${obj.color} fs-13 fw-semibold ms-1 d-inline-flex align-items-center`}>
                                    <i className={`ti ti-arrow-narrow-${obj.color==="danger"?"down":"up"}`}></i>{obj.percentage}</span>
                            </h3>
                        </div>
                        <div className={`p-1 lh-1 bg-${obj.svgcolor}-transparent rounded`}>
                            <span className={`avatar avatar-md avatar-rounded ${obj.svgcolor}`}>
                                {parse(obj.svg)}
                            </span>
                        </div>
                    </div>
                </Card.Body>
            </Card>

        </Fragment>
    )
}

export default Spktransactioncard