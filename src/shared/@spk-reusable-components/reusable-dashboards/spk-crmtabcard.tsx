import { Link } from "react-router-dom"
import type { TasksListType } from "../../data/dashboards/crmdata"
import SpkTooltips from "../reusable-uielements/spk-tooltips"
import SpkBadge from "../reusable-uielements/spk-badge"


interface SpkCrmTabCardProps {
    card: TasksListType
}

const SpkCrmTabCard: React.FC<SpkCrmTabCardProps> = ({ card }) => {
    return (
        <div>
            <li className={card.liclass}>
                <div className="todolist d-flex">
                    <div className="mb-3 form-check  me-2"> <input type="checkbox" className="form-check-input" defaultChecked={card.completed} /> </div>
                    <div className="flex-fill w-100">
                        <div className="d-flex align-items-start justify-content-between">
                            <span className="d-block fw-semibold">{card.title}</span>
                            <div className="">
                                <SpkTooltips placement="top" title="Delete">
                                    <Link to="#!" className="text-danger" card-bs-toggle="tooltip" title="" card-bs-original-title="Delete" aria-label="Delete">
                                        <i className="ti ti-trash"></i>
                                    </Link>
                                </SpkTooltips>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="text-muted mb-0 fs-13">{card.description}</p>
                            <SpkBadge variant={`${card.statusBg}`}>{card.status}</SpkBadge>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default SpkCrmTabCard
