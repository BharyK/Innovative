import React, { Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SpkBadge from '../reusable-uielements/spk-badge';
import type { CategoryType } from '../../data/pages/blog/blogdata';


interface SpkBlogCategoriesProps {
    card: CategoryType
}

const SpkBlogCategories: React.FC<SpkBlogCategoriesProps> = ({ card }) => {
    return (
        <Fragment>
            <ListGroup.Item>
                <Link to="#!">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div>
                                <span className={`text-${card.badgeColor} me-1`}>
                                    <i className={`ri-${card.icon} fs-16`}></i>
                                </span>
                            </div>
                            <div>
                                <span className="fw-medium ms-2">{card.name}</span>
                            </div>
                        </div>
                        <div>
                            <SpkBadge variant={card.badgeColor} Customclass="rounded-pill">{card.itemCount} Items</SpkBadge>
                        </div>
                    </div>
                </Link>
            </ListGroup.Item>
        </Fragment>
    )
}

export default SpkBlogCategories
