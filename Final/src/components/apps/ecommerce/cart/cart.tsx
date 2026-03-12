

import { Fragment, useState, } from "react";
import { Card, Col, Form, InputGroup, Nav, Row, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Cartdata, type CartdataType } from "../../../../shared/data/apps/ecommerce/productsdata";
import { removeCart } from "../../../../shared/common/ui/redux/action";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkTooltips from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import { Link } from "react-router-dom";


const Cart = () => {
    const CartItems = useSelector((state: { cart: { items: CartdataType[] } }) => state.cart.items)
    const [localData, setLocaldata] = useState(Cartdata)
    const FinalCartItems = [...localData, ...CartItems]
    const dispatch = useDispatch();

    const handleToRemove = (id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Item has been deleted.",
                    icon: "success"
                });
                setLocaldata(localData.filter((item: CartdataType) => item.id !== id))
                dispatch(removeCart(id))
            }
        })
    }
    function dec(el: React.MouseEvent<HTMLButtonElement>) {
        const parent = el.currentTarget.parentElement;
        if (!parent) return;
        const input = parent.querySelector<HTMLInputElement>("input");
        if (!input) return;
        const unit = Number(input.value);

        if (unit === 0) {
            return;
        }

        input.value = String(unit - 1);
    }

    function inc(e: React.MouseEvent<HTMLButtonElement>) {
        const parent = e.currentTarget.parentElement;
        if (!parent) return;

        const input = parent.querySelector<HTMLInputElement>("input");
        if (!input) return;

        const unit = Number(input.value);
        input.value = String(unit + 1);
    }

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Cart" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Cart" activepage="Cart" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9}>
                    {FinalCartItems.length > 0 ?
                        (
                            <Card className="custom-card overflow-hidden" id="cart-container-delete">
                                <Card.Header>
                                    <Card.Title> Cart Items <span className="badge bg-primary ms-1">{FinalCartItems.length} Items</span>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="text-nowrap" Customcheckclass="text-center" header={[{ title: 'Product Name' }, { title: 'Price' }, { title: 'Availability' }, { title: 'Quantity' }, { headerClassname: "text-center", title: 'Total' }, { title: 'Action' }]}>
                                            {FinalCartItems.map((idx, index) => (
                                                <tr key={index}>
                                                    <td className={idx.borderclass}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3 custom-width"> <img
                                                                src={idx.productpicture} alt=""
                                                                className={`product-img p-2 bg-${idx.class}-transparent`} /> </div>
                                                            <div className="flex-fill">
                                                                <div className="mb-2 fs-16 fw-semibold"> <a
                                                                    href="#!">{idx.title}</a>
                                                                </div> <span className="badge bg-primary-transparent fs-11"><i
                                                                    className="ri-discount-percent-line fs-10"></i>{idx.discount1}  OFF</span>
                                                                <div className="my-2"> <span
                                                                    className="me-1 fw-medium text-muted">Color:</span><span
                                                                        className="fw-medium">{idx.color}</span> </div>
                                                                <div> <span
                                                                    className="me-1 fw-medium text-muted">Size:</span><span
                                                                        className="fw-medium">{idx.size}</span> </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={idx.borderclass}>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <div className="fw-semibold fs-20"> {idx.discount} </div> <s
                                                                className="text-muted fs-12"> {idx.price} </s>
                                                        </div>
                                                    </td>
                                                    <td className={idx.borderclass}> <SpkBadge variant={idx.stockColor}> {idx.stock}</SpkBadge> </td>
                                                    <td className={`product-quantity-container ${idx.borderclass}`}>
                                                        <InputGroup className="input-group p-1 rounded border flex-nowrap">
                                                            <SpkButton onClickfunc={dec} Buttonvariant=""
                                                                Customclass="btn bg-light text-default rounded-1 btn-sm p-1 input-group-text flex-fill product-quantity-minus"><i
                                                                    className="ri-subtract-line"></i></SpkButton>
                                                            <Form.Control type="text"
                                                                className="form-control form-control-sm border-0 bg-transparent text-center  w-100"
                                                                aria-label="quantity" id="product-quantity1" defaultValue={idx.items} />
                                                            <SpkButton onClickfunc={inc} Buttonvariant=""
                                                                Customclass="btn bg-light text-default rounded-1 btn-sm p-1 input-group-text flex-fill product-quantity-plus"><i
                                                                    className="ri-add-line"></i></SpkButton>
                                                        </InputGroup>
                                                    </td>
                                                    <td className={`text-center ${idx.borderclass}`}>
                                                        <div className="fs-15 fw-semibold"> {idx.discount} </div>
                                                    </td>
                                                    <td className={idx.borderclass}>
                                                        <SpkTooltips placement='top' title='Move To Wishlist'>
                                                            <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/wishlist`} className="btn btn-icon btn-primary btn-sm me-1">
                                                                <i className="ri-heart-line lh-1 align-middle"></i>
                                                            </Link>
                                                        </SpkTooltips>
                                                        <SpkTooltips placement='top' title='Save For Later' >
                                                            <Link to="#!" className="btn btn-icon btn-secondary btn-sm me-1">
                                                                <i className="ri-bookmark-line lh-1 align-middle"></i>
                                                            </Link>
                                                        </SpkTooltips>
                                                        <SpkTooltips placement='top' title='Remove From Cart' >
                                                            <Link to='#!' className="btn btn-icon btn-danger btn-sm btn-delete" onClick={() => handleToRemove(idx.id)} >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </Link>
                                                        </SpkTooltips>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                            </Card>
                        ) :
                        (<Card className="custom-card shadow-none" id="cart-empty-cart">
                            <Card.Header>
                                <Card.Title>
                                    Empty Cart
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="cart-empty text-center">
                                    <span className="svg-muted">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z" />
                                            <path
                                                d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z" />
                                            <path
                                                d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z" />
                                            <path
                                                d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z" />
                                        </svg>
                                    </span>
                                    <h3 className="fw-bold mb-1">Your Cart is Empty</h3>
                                    <h5 className="mb-3">Add some items to make me happy :)</h5>
                                    <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/products`} className="btn btn-primary btn-wave m-3"
                                        data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                                </div>
                            </Card.Body>
                        </Card>)}
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title> Order Summary </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div
                                className="p-3 border-bottom border-top border-block-end-dashed border-block-start-dashed">
                                <label htmlFor="promo-code" className="fw-semibold fs-15 mb-0">Coupon Code</label>
                                <div className="fs-12 text-primary mb-3">
                                    <i className="ri-checkbox-circle-fill"></i> Coupon
                                    Code Applied
                                    <span className="text-pink"> *SAVE UPTO 20%</span>
                                </div>
                                <div className="input-group mb-0">
                                    <Form.Control type="text" className="form-control form-control-sm fw-medium" id="promo-code" name="promo-code" placeholder="Enter Promo Code"
                                        aria-label="Enter Promo Code" aria-describedby="coupons" defaultValue="ATYV897G00AA" />
                                    <SpkButton Customclass="btn" Buttontype="button" Buttonvariant="primary" Id="coupons">
                                        Apply
                                    </SpkButton>
                                </div>
                            </div>
                            <div className="p-3 text-center">
                                <Tab.Container defaultActiveKey="first">
                                    <Nav className="nav nav-tabs cart-navs mb-3  justify-content-between disaptch-tabs gap-3 border-bottom-0"
                                        role="tablist">
                                        <Nav.Item className="me-0 flex-grow-1" role="presentation">
                                            <Nav.Link eventKey="first"
                                                className="nav-link p-2 text-break border " data-bs-toggle="tab"
                                                role="tab" aria-current="page" href="#employee-vertical"
                                                aria-selected="true">
                                                <span className="avatar avatar-sm bg-light mb-2 avatar-rounded">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                        fill="var(--custom-black)" viewBox="0 0 256 256">
                                                        <path
                                                            d="M216,116.69V216H152V152H104v64H40V116.69l82.34-82.35a8,8,0,0,1,11.32,0Z"
                                                            opacity="0.2"></path>
                                                        <path
                                                            d="M240,208H224V136l2.34,2.34A8,8,0,0,0,237.66,127L139.31,28.68a16,16,0,0,0-22.62,0L18.34,127a8,8,0,0,0,11.32,11.31L32,136v72H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,120l80-80,80,80v88H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48Zm96,88H112V160h32Z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <p className="mb-0">Home Delivery</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="flex-grow-1" role="presentation">
                                            <Nav.Link eventKey="second"
                                                className="nav-link p-2 text-break border" data-bs-toggle="tab" role="tab"
                                                aria-current="page" href="#customers-vertical" aria-selected="false"
                                                tabIndex={-1}>
                                                <span className="avatar avatar-sm bg-light mb-2 avatar-rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="32" height="32" fill="var(--custom-black)" viewBox="0 0 256 256">
                                                        <path
                                                            d="M136,32V216H40V85.35a8,8,0,0,1,3.56-6.66l80-53.33A8,8,0,0,1,136,32Z"
                                                            opacity="0.2"></path>
                                                        <path
                                                            d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <p className="mb-0"> Local Pickup </p>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first" className="text-muted p-0 border-0 show" id="employee-vertical"
                                            role="tabpanel">
                                            <div className="list-group list-group-flush mb-3 border">
                                                <div className="list-group-item d-flex align-items-center justify-content-between">
                                                    <div>Sub Total</div>
                                                    <div className="fw-semibold fs-14">$680.98</div>
                                                </div>
                                                <div className="list-group-item d-flex align-items-center justify-content-between">
                                                    <div>Discount</div>
                                                    <div className="fw-semibold fs-14 text-primary">20% - $136.20</div>
                                                </div>
                                                <div className="list-group-item d-flex align-items-center justify-content-between">
                                                    <div>Delivery Charges</div>
                                                    <div className="fw-semibold fs-14 text-danger">- $35</div>
                                                </div>
                                                <div className="list-group-item d-flex align-items-center justify-content-between">
                                                    <div>Service Tax (18%)</div>
                                                    <div className="fw-semibold fs-14">- $229.56</div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second" className="text-muted p-0 border-0" id="customers-vertical"
                                            role="tabpanel">
                                            <div className="list-group list-group-flush mb-3 border">
                                                <div className="list-group-item d-flex align-items-center justify-content-between">
                                                    <div>Sub Total</div>
                                                    <div className="fw-semibold fs-14">$680.98</div>
                                                </div>
                                                <div className="list-group-item d-flex align-items-center justify-content-between">
                                                    <div>Discount</div>
                                                    <div className="fw-semibold fs-14 text-primary">20% - $136.20</div>
                                                </div>
                                                <div className="list-group-item d-flex align-items-center justify-content-between">
                                                    <div>Delivery Charges</div>
                                                    <div className="fw-semibold fs-14 text-danger">- $5</div>
                                                </div>
                                                <div className="list-group-item d-flex align-items-center justify-content-between">
                                                    <div>Service Tax (18%)</div>
                                                    <div className="fw-semibold fs-14">- $119.56</div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                                <div className="mb-2 fs-15"> Total: </div>
                                <h3 className="mb-3">$562.22 <s className="text-muted fs-12 fw-normal"> $680.98 </s> </h3>
                                <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/products`} className="btn btn-primary d-grid"> Continue Shopping</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

        </Fragment>
    );
};

export default Cart;