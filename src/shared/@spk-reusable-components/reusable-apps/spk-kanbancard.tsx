import React, { Fragment } from 'react'
import { Card, Dropdown } from 'react-bootstrap'
import SpkBadge from '../reusable-uielements/spk-badge'
import SpkDropdown from '../reusable-uielements/spk-dropdown'
import { Link } from 'react-router-dom'
import type { newtaskType } from '../../data/apps/tasks/kanbanboarddata'


interface SpkObjectType {
    obj: newtaskType
}

const Spkkanbancard: React.FC<SpkObjectType> = ({ obj }) => {
    return (
        <Fragment>
            <Card className={`custom-card`}>
                <Card.Header className="justify-content-between">
                    <div className="task-badges">
                        <SpkBadge variant="primary-transparent">ID:{obj.id}</SpkBadge>
                        {obj.badges.map(({ label, bdgclass }, index) => (
                            <SpkBadge variant={bdgclass} Customclass="ms-1" key={index}>{label}</SpkBadge>
                        ))}
                    </div>
                    <SpkDropdown Togglevariant="" Customtoggleclass="btn btn-sm btn-light no-caret" Icon={true} IconClass="ri-more-2-fill">
                        <li><Dropdown.Item href="#!">View</Dropdown.Item></li>
                        <li><Dropdown.Item href="#!">Edit</Dropdown.Item></li>
                        <li><Dropdown.Item href="#!">Delete</Dropdown.Item></li>
                    </SpkDropdown>
                </Card.Header>
                <Card.Body className="">
                    <Link to="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <h6 className="fw-medium mb-1 fs-15">{obj.title}</h6>
                    </Link>
                    <p className="kanban-task-description">{obj.description}</p>
                    <div className="mb-1"> <span className="fw-medium">Priority: </span>
                        <SpkBadge variant={obj.priority === "Low" ? "primary" : obj.priority === "Medium" ? "warning" : "danger"}>{obj.priority}</SpkBadge>
                    </div>
                    <div>
                        <span className="fw-medium">Status: </span>
                        <span className="fs-11 text-muted">{obj.status}%  Completed
                            <i className="bi bi-bar-chart-fill mx-1 text-pink"></i>
                        </span>
                    </div>
                </Card.Body>
                <div className="p-3 border-top border-block-start-dashed">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-2 align-items-center">
                            <span className="avatar avatar-md avatar-rounded">
                                <img src={obj.avatar} alt="img" />
                            </span>
                            <div>
                                <div className="fw-medium">{obj.name}</div>
                                <div className="text-muted fs-10">{obj.role}</div>
                            </div>
                        </div>
                        <div>
                            <Link to="#!" className="me-2 text-primary">
                                <span className="me-1">
                                    <i className="ri-user-line align-center fw-normal lh-1"></i>
                                </span>
                                <span className="fw-medium fs-12">{obj.contacts}</span>
                            </Link>
                            <Link to="#!" className="me-2 text-secondary">
                                <span className="me-1">
                                    <i className="ri-attachment-line align-middle fw-normal"></i>
                                </span>
                                <span className="fw-medium fs-12">{obj.images}</span>
                            </Link>
                            <Link to="#!" className="text-info">
                                <span className="me-1">
                                    <i className="ri-message-2-line align-middle fw-normal"></i>
                                </span>
                                <span className="fw-medium fs-12">{obj.messages}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

export default Spkkanbancard