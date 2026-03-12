import { Card, ProgressBar } from "react-bootstrap";
import SpkBadge from "../reusable-uielements/spk-badge";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import type { ProjectType } from "../../data/apps/projects/projectlistsdata";

interface SpkObjectType {
    item: ProjectType;
    show: string[],
    index: number;
}

const SpkProjectlistcard: React.FC<SpkObjectType> = ({ item, show, index, }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${item.color}`}>
                <Card.Body>
                    <div className="d-flex align-items-start mb-3 gap-1 flex-wrap">
                        <div className="me-2"> <span
                            className={`avatar avatar-lg avatar-rounded p-1 bg-${item.color}-transparent`}>
                            <img src={item.logo} alt="" />
                        </span> </div>
                        <div className="flex-fill">
                            <a href="#!" className="fw-semibold fs-14 d-block text-truncate project-list-title mb-1">{item.title}</a>
                            <span className="text-muted d-block fs-13">
                                <strong className={`text-${item.color} me-1 d-inline-block`}>{item.task}</strong>
                                tasks completed
                            </span>
                        </div>
                    </div>
                    <div
                        className="d-flex mb-3 justify-content-between gap-2 p-3 bg-light rounded flex-wrap">
                        <div className="flex-shrink-0">
                            <div className="fs-12 mb-2"><span className="fw-semibold">Start
                                Date:</span> {item.startDate}</div>
                            <div className="fs-12"><span className="fw-semibold">End Date:</span> {item.endDate}</div>
                        </div>
                        <div className="flex-shrink-0 text-end">
                            <div className="fs-12 mb-2"><span className="fw-semibold">Priority
                                Level:</span></div>
                            <SpkBadge variant={item.priority === "Medium" ? "warning" : item.priority === "Low" ? "primary" : item.priority === "Normal" ? "info" : "danger"}>{item.priority}</SpkBadge>
                        </div>
                    </div>
                    <div className="d-flex gap-1 flex-wrap">
                        <div> <span className="mb-2"><span
                            className="text-primary fw-medium me-1">{item.progress1}%</span>
                            Completed</span>
                            <ProgressBar className='progress-stacked progress-xs my-auto gap-1 mt-1'>
                                <ProgressBar now={item.progress1} variant='primary' className='rounded' />
                                <ProgressBar now={100 - item.progress1} variant='danger' className='rounded' />
                            </ProgressBar>
                        </div>
                        <div className="avatar-list-stacked ms-auto">
                            {item.avatars?.map((img, imgIndex) => {
                                if (imgIndex < 3 || show[index]) {
                                    return <span className="avatar avatar-sm avatar-rounded" key={imgIndex}>
                                        <img src={img.img} alt="img" />
                                    </span>
                                }
                            })}
                            {item.avatars?.length > 2 && (
                                show[index] ? (<Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#!">
                                    -
                                </Link>) : (
                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#!">
                                        +{item.avatars?.length - 1}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>

    )
}

export default SpkProjectlistcard;