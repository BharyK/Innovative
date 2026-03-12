import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import SpkCarouselComponent from '../reusable-advancedui/spk-carousel';
import { BlogSlidecarousel, type BlogCardDataType } from '../../data/pages/blog/blogdata';
import { Link } from 'react-router-dom';
import SpkBadge from '../reusable-uielements/spk-badge';


interface SpkObject {
    card: BlogCardDataType;
    Title?: boolean
    CustomCardClass?: string
    CardBodyClass?: string
}

const SpkBlogCard: React.FC<SpkObject> = ({ card, Title, CustomCardClass, CardBodyClass }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${CustomCardClass}`}>
                <Card.Body className={CardBodyClass}>
                    {Title ? (<SpkCarouselComponent items={BlogSlidecarousel} mainClass="carousel slide" controls={false} interval={1500} wrap={true} />) : ''}
                    {Title ? '' : (<Link to={`${import.meta.env.BASE_URL}pages/blog/blog-details`} className="h6 fw-semibold mb-2 d-block lh-base">{card.title}</Link>)}
                    {Title ? '' : (
                        <Link to="#!">
                            <div className="blog-image custom-width">
                                <img src={card.src} className="card-img-top rounded card-img" alt="..." />
                            </div>
                        </Link>
                    )}
                    <div className="d-flex align-items-center gap-2 flex-wrap mb-3 mt-3 justify-content-between">
                        {Title ? (<h5 className="fw-semibold"><Link to={`${import.meta.env.BASE_URL}pages/blog/blog-details`}>A Journey Through Classic Cartoons</Link></h5>) : ''}
                        <div className='d-flex align-items-center gap-2 flex-wrap'>
                            <SpkBadge variant="" Customclass="border border-primary border-opacity-25 text-primary">
                                <i className="ri-thumb-up-line me-1"></i>{card.likes}
                            </SpkBadge>
                            <SpkBadge variant="" Customclass="border border-secondary border-opacity-25 text-secondary">
                                <i className="ri-chat-4-line me-1"></i>{card.comments}
                            </SpkBadge>
                        </div>
                    </div>
                    <p className="mb-4">{card.description}<Link to="#!" className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline d-inline-block">Read  More ?</Link></p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="avatar avatar-xs avatar-rounded me-2">
                                <img src={card.authorSrc} alt="" />
                            </div>
                            <div>
                                <p className="mb-0 fw-medium">{card.name}</p>
                            </div>
                        </div>
                        <span className="text-muted fs-12 mb-0">18,Aug 2024 - 11:25</span>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkBlogCard