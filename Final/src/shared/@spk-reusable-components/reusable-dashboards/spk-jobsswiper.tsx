import { Fragment } from "react/jsx-runtime";
import SpkButton from "../reusable-uielements/spk-button";
import type { UpcomingInterviewtype } from "../../data/dashboards/jobsdata";


interface SpkJobsSwiperprops {
    card: UpcomingInterviewtype
}

const SpkJobsSwiper: React.FC<SpkJobsSwiperprops> = ({ card }) => {
    return (
        <Fragment>
            <div className="d-flex align-items-center gap-2 p-3 border-bottom flex-wrap">
                <span className="avatar avatar-md avatar-rounded">
                    <img src={card.avatar} alt="img" />
                </span>
                <div className="flex-grow-1">
                    <p className="mb-0 fw-semibold">{card.name}</p>
                    <span className="fs-13 text-muted">{card.email}</span>
                </div>
                <SpkButton Buttonvariant='light' Customclass="btn btn-icon btn-sm"><i className="ri-arrow-right-s-line rtl-rotate"></i></SpkButton>
            </div>
            <div className="px-3 py-2 d-flex align-items-center flex-wrap gap-1">
                <span className="fs-13 text-muted pe-2 border-end"><i className="ti ti-calendar me-1 fs-16 mx-1"></i>{card.date}</span>
                <span className="fs-13 text-muted ps-1 flex-grow-1"><i className="ti ti-clock-hour-3 me-1 fs-16 mx-1"></i>{card.time}</span>
                <SpkButton Buttonvariant={card.actionBg} Customclass={`btn btn-sm`}>{card.action}</SpkButton>
            </div>
        </Fragment>
    )
}

export default SpkJobsSwiper;
