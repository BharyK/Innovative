import React, { Fragment } from 'react';
import { Dropdown } from 'react-bootstrap';
import SpkDropdown from '../reusable-uielements/spk-dropdown';
import type { LatestCoursestype } from '../../data/dashboards/coursedata';

interface SpkCoursesSwiperProps {
    card: LatestCoursestype
}

const SpkCoursesSwiper: React.FC<SpkCoursesSwiperProps> = ({ card }) => {
    return (
        <Fragment>
            <div className="d-flex gap-3 p-3 border rounded bg-white mb-4">
                <div className="lh-1">
                    <span className={`avatar avatar-xl bg-${card.categoryBg}`}>
                        <img  src={card.imageSrc} alt="Course Image" />
                    </span>
                </div>
                <div className="flex-grow-1 w-75 text-truncate">
                    <div>
                        <div className="min-w-fit fs-12 text-default d-inline-flex mb-1">
                            <span>
                                <i className={`${card.ratingIcon}`}></i>
                                {card.rating}
                            </span>
                        </div>
                        <div className="fw-semibold mb-2 text-truncate w-75">
                            {card.title}
                        </div>
                        <div className="d-flex gap-1 flex-wrap">
                            <span className="text-muted fs-13">
                                Category:
                            </span>
                            <span className={`badge bg-${card.categoryBg} rounded-pill`}>
                                {card.category}
                            </span>
                        </div>
                    </div>
                </div>
                <SpkDropdown toggleas='a' Customtoggleclass='btn btn-sm btn-icon btn-light no-caret' Icon={true} IconClass='ri-more-2-fill'>
                    <li> <Dropdown.Item href="#!"> Week</Dropdown.Item></li>
                    <li> <Dropdown.Item href="#!"> Year </Dropdown.Item></li>
                </SpkDropdown>
            </div>
        </Fragment>
    )
}

export default SpkCoursesSwiper

