import { Fragment, useEffect, useReducer, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Isotope from "isotope-layout";
import { Categories, MenuItems, OrderSummeryProducts } from "../../../shared/data/dashboards/possystemdata";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Link } from "react-router-dom";
import SpkPosysytem from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-posysytem";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";


const PosSystem = () => {

    const isotope = useRef<Isotope | null>(null); // For Isotope instance
    const grid = useRef<HTMLDivElement | null>(null); // For grid element
    const [activeFilter, setActiveFilter] = useState("*"); // State for active filter

    useEffect(() => {
        let Isotope; // Declare variable for Isotope

        const initializeIsotope = async () => {
            const module = await import("isotope-layout"); // Dynamically import Isotope
            Isotope = module.default;
            if (grid.current) {
                isotope.current = new Isotope(grid.current, {
                    itemSelector: ".card-item",
                    layoutMode: "masonry",
                    fitWidth: true, // Automatically adjusts item widths based on container size
                    percentPosition: true,
                });
            }
        };

        initializeIsotope();

        // Cleanup on component unmount
        return () => {
            isotope.current?.destroy();
            isotope.current = null;
        };
    }, []);

    const handleTabClick = (filter: string) => {
        setActiveFilter(filter); // Update active filter state
        isotope.current?.arrange({ filter }); // Trigger Isotope filtering
    };

    // Order Summery Calculation
    const subtotal = OrderSummeryProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = subtotal * 0.10;
    const deliveryCharges = 29;
    const serviceTax = subtotal * 0.18;
    const totalPayable = subtotal - discount + deliveryCharges + serviceTax;

    type State = { count1: number; count2: number; count3: number };
    type Action = "add1" | "sub1" | "add2" | "sub2" | "add3" | "sub3";

    const initialState: State = { count1: 1, count2: 1, count3: 1 };

    const reducer = (state: State, action: Action): State => {
        switch (action) {
            case "add1":
                return state = {
                    ...state, count1: state.count1 + 1
                }
                break;
            case "sub1":
                return state = {
                    ...state, count1: state.count1 > 1 ? state.count1 - 1 : 0
                }
                break;
            case "add2":
                return state = {
                    ...state, count2: state.count2 + 1
                }
                break;
            case "sub2":
                return state = {
                    ...state, count2: state.count2 > 1 ? state.count2 - 1 : 0
                }
                break;
            case "add3":
                return state = {
                    ...state, count3: state.count3 + 1
                }
            case "sub3":
                return state = {
                    ...state, count3: state.count3 > 1 ? state.count3 - 1 : 0
                }

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}

            <Seo title={"POS System"} />

            <Pageheader title="Dashboard" currentpage="POS System" activepage="POS System" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={9}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        CATEGORY
                                    </Card.Title>
                                    <Link to="#!" className="btn btn-sm btn-secondary"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body className=" pb-0 mt-0 m-3 bg-light rounded">
                                    <Row className="justify-content-center pos-category" id="filter">
                                        {Categories.map((data) => (
                                            <Col key={data.id} onClick={() => handleTabClick(data.filter)}>
                                                <Card className={`custom-card mb-0 shadow-none bg-transparent pos-category-card  ${activeFilter === data.filter ? "active" : ""}`}>
                                                    <Card.Body className="">
                                                        <Link to="#!" className="stretched-link categories"
                                                            data-filter="*">
                                                            <div className="d-flex gap-3">
                                                                <span className={`avatar avatar-lg ${data.avatarBg}-main avatar-rounded`}>
                                                                    <span className={`avatar avatar-md avatar-rounded ${data.avatarBg}`}>
                                                                        {data.svg}
                                                                    </span>
                                                                </span>
                                                                <div>
                                                                    <span className="fw-medium">{data.name}</span>
                                                                    <span className="fs-12 d-block fw-medium text-muted">{data.items}  Items</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h6 className="fw-medium mb-0">Select Item</h6>
                                <Link to="#!" className="btn btn-sm btn-primary"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </div>
                            <Row className="list-wrapper" ref={grid}>
                                {MenuItems.map((data) => (
                                    <Col key={data.id} xxl={3} xl={4} lg={4} md={4} sm={6} className={`col-12 card-item ${data.category}`} data-category={data.category}>
                                        <SpkPosysytem card={data} />
                                    </Col>
                                ))}
                            </Row>
                            <nav aria-label="Page navigation">
                                <ul className="pagination float-end mb-4">
                                    <li className="page-item disabled"> <Link to='#!' className="page-link">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">1</Link></li>
                                    <li className="page-item active" aria-current="page"><Link className="page-link" to="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">Next</Link></li>
                                </ul>
                            </nav>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Order Summery </Card.Title> <span className="badge bg-danger-transparent rounded-pill"> 05 Items </span>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="p-3 border-bottom">
                                <div className="custom-form-group mb-0">
                                    <input type="text" className="form-control form-control-md  py-2" placeholder="Search Product.." aria-label="Search Hear.." />
                                    <SpkButton Buttonvariant="secondary" Customclass="btn btn-sm border-0 custom-form-btn  px-3" Buttontype="button">Search</SpkButton>
                                </div>
                            </div>
                            <ul className="list-group mb-0 border-0 rounded-0">
                                {OrderSummeryProducts.map((data) => {
                                    const key = `count${data.id}`;
                                    const countValue = state[key] ?? 0;

                                    return (

                                        <li className="list-group-item border-top-0 border-start-0 border-end-0" key={data.id}>
                                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                                <div className="me-3 lh-1"> <span className="avatar avatar-xxl bg-light">
                                                    <img src={data.image} alt="" /> </span> </div>
                                                <div className="flex-fill">
                                                    <span className="fs-13 text-muted">{data.category}</span>
                                                    <p className="mb-2 fs-14 fw-medium">{data.name}</p>
                                                    <p className="mb-0 fs-16 fw-semibold">${`${data.price}`}<span className="ms-1 text-muted fw-normal fs-11 d-inline-block">
                                                        <span>${data.originalPrice}</span>
                                                    </span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <div className="p-1 rounded-pill border flex-nowrap pos-qty-input">
                                                        <SpkButton Buttonvariant="light" Customclass="btn text-default rounded-pill btn-sm input-group-text flex-fill product-quantity-minus" onClickfunc={() => dispatch(`sub${data.id}`)}><i className="ri-subtract-line"></i></SpkButton>
                                                        <input type="text" className="form-control form-control-sm border-0 text-center" aria-label="quantity" id={`product-quantity-${data.id}`}
                                                            key={countValue}
                                                            defaultValue={countValue} />
                                                        <SpkButton Buttonvariant="light" Customclass="btn text-default rounded-pill btn-sm  input-group-text flex-fill product-quantity-plus" onClickfunc={() => dispatch(`add${data.id}`)}><i className="ri-add-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                                )}
                            </ul>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="d-flex align-items-center justify-content-between flex-wrap p-2 rounded bg-primary bg-opacity-05 primary-dash-border">
                                    <div className="text-primary">COUPON APPLIED</div>
                                    <div className="fs-12 fw-medium bg-primary text-fixed-white p-1 px-2 rounded">SPRUKO25</div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="p-3 bg-light rounded">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>Sub Total</div>
                                        <div className="fw-medium fs-14">${subtotal.toFixed(2)}</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>Discount</div>
                                        <div className="fw-medium fs-14">10% - ${discount.toFixed(2)}</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>Delivery Charges</div>
                                        <div className="fw-medium fs-14">+ ${deliveryCharges.toFixed(2)}</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>Service Tax (18%)</div>
                                        <div className="fw-medium fs-14">+ ${serviceTax.toFixed(2)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-15">Total :</div>
                                    <div className="fw-semibold fs-16 text-dark">${totalPayable.toFixed(2)}</div>
                                </div>
                                <div className="btn-list d-grid mt-4">
                                    <SpkButton Buttonvariant="secondary-light" Customclass="btn  btn-wave waves-effect waves-light">Save For  Later</SpkButton>
                                    <SpkButton Buttonvariant="primary" Customclass="btn  btn-wave waves-effect waves-light">Pay Now</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    );
};

export default PosSystem;