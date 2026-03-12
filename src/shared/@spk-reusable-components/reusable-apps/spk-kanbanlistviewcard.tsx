import { Card, ProgressBar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import SpkBadge from "../reusable-uielements/spk-badge"
import SpkButton from "../reusable-uielements/spk-button"
import type { newtaskType } from "../../data/apps/tasks/kanbanboarddata"



interface SpkObjectType {
    obj: newtaskType
    cardClass?: string
}

const SpkkanbanListcard: React.FC<SpkObjectType> = ({ obj, cardClass }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${obj.cardClass} ${cardClass}`}>
                <div className="card-body d-flex gap-5 align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-center flex-wrap">
                        <div>
                            <Link to="#!" className="fw-medium fs-14 d-block text-truncate project-list-title mb-1">{obj.title} </Link>
                            <div className="task-badges">
                                <SpkBadge variant="primary-transparent">ID: {obj.id}</SpkBadge>
                                {obj.badges.map(({ label, bdgclass }, index) => (
                                    <SpkBadge variant={bdgclass} Customclass="ms-1" key={index}>{label}</SpkBadge>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                        <span className={`avatar avatar-md avatar-rounded p-1 bg-${obj.cardClass}-transparent`}>
                            <img src={obj.avatar} alt="img" />
                        </span>
                        <div>
                            <div className="fw-medium">{obj.name}</div>
                            <div className="text-muted fs-10">{obj.role}</div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="fs-12">
                            <span className="fw-semibold">Start Date:</span> {obj.startdate}
                        </div>
                        <div className="fs-12">
                            <span className="fw-semibold">End Date:</span> {obj.enddate}
                        </div>
                    </div>
                    <div className="d-flex gap-1 flex-wrap">
                        <ProgressBar className='progress-stacked progress-xs flex-grow-1 w-100 flex-shrink-0 my-auto gap-1'>
                            <ProgressBar variant="primary" now={obj.status} className='rounded' />
                            <ProgressBar variant="danger" now={100 - obj.status} className='rounded' />
                        </ProgressBar>
                        <div className="flex-shrink-0">
                            <span className="text-primary fw-medium me-1">{obj.status}%</span>
                            Completed</div>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="fs-12"><span className="fw-semibold">Priority Level:</span></div>
                        <SpkBadge variant={obj.priority === "Low" ? "primary" : obj.priority === "Medium" ? "warning" : "danger"}>{obj.priority}</SpkBadge>
                    </div>
                    <div className="d-flex gap-2 flex-wrap">
                        <SpkButton Size="sm" Buttonvariant='primary-light' Customclass="btn btn-icon rounded-circle">
                            <i className="ri-eye-line lh-1 align-middle"></i>
                        </SpkButton>
                        <SpkButton Size="sm" Buttonvariant='info-light' Customclass="btn btn-icon rounded-circle">
                            <i className="ri-pencil-line lh-1 align-middle"></i>
                        </SpkButton>
                        <SpkButton Size="sm" Buttonvariant='danger-light' Customclass="btn btn-icon rounded-circle">
                            <i className="ri-delete-bin-line lh-1 align-middle"></i>
                        </SpkButton>
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

export default SpkkanbanListcard