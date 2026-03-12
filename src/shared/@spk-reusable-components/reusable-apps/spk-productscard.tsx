import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import SpkBadge from '../reusable-uielements/spk-badge';
import SpkTooltips from '../reusable-uielements/spk-tooltips';
import { Link } from 'react-router-dom';


interface SpkProductsProps {
    color: string;
    imgclass: string;
    discount1: string;
    productPicture: string;
    title: string;
    status: string;
    price: string;
    discount: string;
    onclick?: () => void;
    cartClick?: () => void;
    detailsClick?: () => void;
    idx:''
}

const SpkProducts: React.FC<SpkProductsProps> = ({ imgclass, discount1, productPicture, title, status, price, discount, onclick, cartClick, idx }) => {

    return (
        <Fragment>
            <Card className="custom-card card-style-2">
                <Card.Body className="p-0">
                    <SpkBadge Customclass={`badge bg-${imgclass} rounded py-1 top-left-badge`}>{discount1} Off</SpkBadge>
                    <div className="card-img-top p-2 border-bottom border-block-end-dashed">
                        <div className="btns-container-1 align-items-center gap-1">
                            <SpkTooltips placement='top' title='Quick View' >
                                <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/product-details`} className="btn btn-icon btn-secondary rounded-pill">
                                    <i className="ti ti-eye"></i></Link>
                            </SpkTooltips>
                            <SpkTooltips placement='top' title='Add to Wishlist'>
                                <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/wishlist`} onClick={onclick} className="btn btn-icon btn-danger rounded-pill"
                                ><i className="ti ti-heart align-center"></i></Link>
                            </SpkTooltips>
                            <SpkTooltips placement='top' title='Move To Cart' >
                                <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/cart`} onClick={cartClick} className="btn btn-icon btn-warning rounded-pill"
                                ><i className="ti ti-shopping-cart"></i></Link>
                            </SpkTooltips>
                        </div>
                        <div className={`img-box-2 bg-${imgclass}-transparent`}>
                            <img src={productPicture} alt="img" className="img-fluid w-100 rounded scale-img" />
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="d-flex justify-content-between">
                            <Link to="#!" className="text-muted fs-12">{status}</Link>
                            <div className="min-w-fit-content fs-11">
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
                                    <i className="bi bi-star"></i>
                                </span>
                            </div>
                        </div>
                        <h6 className="mt-1 mb-2 fw-semibold fs-14">
                            <Link to={`${idx}`}>{title} </Link>
                        </h6>
                        <div className="d-flex gap-2 align-items-center mb-2">
                            <div className="fw-semibold fs-20">{discount} </div> <s
                                className="text-muted fs-12"> {price} </s>
                        </div>
                        <div className="d-flex gap-1 justify-content-between flex-wrap">
                            <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/checkout`} className="btn btn-secondary-light btn-sm">Buy Now </Link>
                            <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/cart`} onClick={cartClick} className="btn btn-primary btn-sm">
                                <i className="ri-shopping-cart-2-line"></i> Add to Cart
                            </Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>

        </Fragment>
    )
}

export default SpkProducts