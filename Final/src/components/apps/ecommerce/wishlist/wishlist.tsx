import { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { wishListData, type ProductInfoType } from "../../../../shared/data/apps/ecommerce/productsdata";
import { addCart } from "../../../../shared/common/ui/redux/action";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";


const Wishlist = () => {
    const wishList = useSelector((state: { wishList: { items: ProductInfoType[] } }) => state.wishList.items);
    const [localWishList, _setLocalWishList] = useState(wishListData);
    const wishListdata = [...localWishList, ...wishList];
    const dispatch = useDispatch();

    //  adding items to cart
    const handleAddToCart = (item: ProductInfoType) => {
        dispatch(addCart(item));
    }

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Wishlist" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Wishlist" activepage="Wishlist" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
                                <div className="">
                                    <div className="d-flex">
                                        <h5 className="fw-semibold mb-0"><span className="fw-normal">Showing</span> 3456
                                            Items</h5>
                                    </div>
                                </div>
                                <div className="custom-form-group mb-0 w-sm-50 w-100">
                                    <Form.Control type="text" className="form-control form-control-md py-2" placeholder="Search Product.." aria-label="Search Hear.." />
                                    <SpkButton Buttonvariant="primary" Size="sm" Customclass="btn border-0 custom-form-btn px-3" Buttontype="button">Search</SpkButton>
                                </div>
                                <div className="text-sm-end text-start">
                                    <SpkDropdown Togglevariant="" Customtoggleclass="btn btn-outline-light border dropdown-toggle" Toggletext="Sort By" iconPosition="before" Icon={true} IconClass="ti ti-sort-descending-2 me-1 mx-1">
                                        <li><Link className="dropdown-item" to="#!">Date  Published</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Most Relevant</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Price Low to High</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Price High to Low</Link></li>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {wishListdata.map((idx) => (
                    <Col xxl={3} xl={6} md={6} className="" key={idx.id}>
                        <Card className="custom-card card-style-3">
                            <Card.Body className="p-3">
                                <Row>
                                    <div className="col-4">
                                        <div className={`rounded-2 bg-${idx.color}-transparent ${idx.color}-dash-border`}>
                                            <Link to="#!">
                                                <img src={idx.productpicture} alt="img" className="img-fluid w-100 rounded" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div>
                                            <h6 className="fs-16 mb-1 fw-semibold"><Link to={`${import.meta.env.BASE_URL}apps/ecommerce/product-details`}>{idx.title}</Link></h6>
                                            <div>
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-2 d-flex align-items-start justify-content-between flex-wrap mt-2">
                                                <div className="d-flex align-items-baseline">
                                                    <h6 className="fs-20 fw-semibold mb-0">{idx.discount}</h6>
                                                    <span className="fs-13 ms-2 text-muted text-decoration-line-through">{idx.price}</span>
                                                </div>
                                            </div>
                                            <span className={`text-${idx.stockColor} fw-semibold mb-2`}>{idx.stock}</span>
                                            <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/cart/`} onClick={() => handleAddToCart(idx)} className={`btn btn-${idx.color} btn-sm float-end`}><i className="ti ti-shopping-cart-plus me-1"></i> Move To Cart</Link>
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default Wishlist;