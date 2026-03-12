import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import SpkTooltips from "../reusable-uielements/spk-tooltips"
import SpkBadge from "../reusable-uielements/spk-badge"
import type { JobDataType } from "../../data/apps/jobs/searchcompanydata"


interface SpkObjectType {
    item: JobDataType
}

const Spkjobcompany: React.FC<SpkObjectType> = ({ item }) => {
    return (
        <Card className="custom-card">
            <Card.Body className="text-center">
                <div>
                    <span className={`avatar avatar-xl bg-${item.color}-transparent shadow-sm border border-${item.color} border-opacity-25 avatar-rounded`}>
                        <span className="avatar avatar-md bg-white avatar-rounded p-1">
                            <img src={item.image} alt="" />
                        </span>
                    </span>
                    <div className="ms-2 mt-2">
                        <h5 className="fw-semibold mb-0 d-flex align-items-center justify-content-center">
                            <Link
                                to="#!">{item.title}
                                <SpkTooltips title="Verified company">
                                    <i className="bi bi-check-circle-fill text-primary fs-16 ms-1"></i>
                                </SpkTooltips>
                            </Link>
                        </h5>
                        <div>
                            <Link to="#!">
                                <i className="bi bi-geo-alt fs-11 me-1"></i>
                                Kondapur, Hyderabad,
                            </Link>
                        </div>
                        <div className="d-flex align-items-center fs-13 mt-2 mb-1 text-muted justify-content-center">
                            <div className="min-w-fit-content ms-2">
                                <span className="text-warning me-1">
                                    <i className="bi bi-star-fill"></i>
                                </span>
                                <span className="text-warning me-1">
                                    <i className="bi bi-star-fill"></i>
                                </span>
                                <span className="text-warning me-1">
                                    <i className="bi bi-star-fill"></i>
                                </span>
                                <span className="text-warning me-1">
                                    <i className="bi bi-star-fill"></i>
                                </span>
                                <span className="text-warning">
                                    <i className="bi bi-star-half"></i>
                                </span>
                            </div>
                            <Link to="#!"
                                className="ms-1 min-w-fit-content text-muted">
                                <span>(142)</span>
                                <span> Ratings</span>
                            </Link>
                        </div>
                        <SpkBadge Pill={true} variant={`${item.color}-transparent`} Customclass="fs-11 d-inline-flex align-items-center"><i className="ti ti-tag me-1 fs-13"></i>{item.badge}</SpkBadge>
                    </div>
                </div>
                <div className="border-top border-block-start-dashed mt-3 pt-2 custom-btn-active">
                    <span className="fs-13 text-muted fw-medium">{item.text}</span>
                    <Link to="#!" className={`btn btn-${item.color} d-block mt-2`}>
                        View Profile <i className="ri-arrow-right-line align-middle"></i>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Spkjobcompany