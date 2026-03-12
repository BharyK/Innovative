import { Fragment } from "react";
import { Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkListgroup from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-listgroup";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import png14 from '../../../../assets/images/ecommerce/png/14.png';
import png15 from '../../../../assets/images/ecommerce/png/15.png';
import png12 from '../../../../assets/images/ecommerce/png/12.png';
import png2 from "../../../../assets/images/media/png/2.png";


const OrderDetails = () => {
    const print = () => {
        window.print();
    };
    const tabledata = [
        { id: "01", image: png14, imgcolor: "primary-transparent", productname: "Women's Sling Bag", off: "20 OFF", color: 'Grey', size: 'Compact', oldpr: '$854.00', newprice: "$545", qty: "01", trackid: '#18A78Y65K62O2P49P', },
        { id: "02", image: png15, imgcolor: "secondary-transparent", productname: "Adidas Men's Shoe", off: "15% OFF", color: 'Violet', size: '6 ft', oldpr: '$3,532.00', newprice: "$2,645", qty: "02", trackid: '#87492652JTTD8969', },
        { id: "03", image: png12, imgcolor: "pink-transparent", productname: 'Pink Ladies Bag', off: "17% OFF", color: 'Pink', size: 'Compact', oldpr: '$800.00', newprice: "$799", qty: "05", trackid: '#87492652JTTD8969', },
    ]
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Orderdetails" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Order Details" activepage="Order Details" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={9}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="d-flex justify-content-between">
                                    <Card.Title> Ordered Products </Card.Title>
                                    <div className="d-flex flex-wrap gap-2">
                                        <div> <Form.Control className="form-control form-control-sm" type="text"
                                            placeholder="Search Here" aria-label=".form-control-sm example" />
                                        </div>
                                        <SpkDropdown Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext=" Sort By" Arrowicon={true}>
                                            <li><Link className="dropdown-item" to="#!">Low
                                                Price</Link></li>
                                            <li><Link className="dropdown-item" to="#!">High
                                                Price</Link></li>
                                            <li><Link className="dropdown-item" to="#!">Quantity</Link>
                                            </li>
                                        </SpkDropdown>
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="text-nowrap" header={[{ title: 'S.no' }, { title: 'Product Name' }, { title: 'Price' }, { title: 'Quantity' }, { title: 'Tracking ID' }, { headerClassname: 'text-center', title: 'Total' },]}>
                                            {tabledata.map((idx) => (
                                                <tr key={idx.id}>
                                                    <td className="fw-semibold"> {idx.id} </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3"> <img
                                                                src={idx.image}
                                                                alt=""
                                                                className={`product-img p-2 bg-${idx.imgcolor}`} />
                                                            </div>
                                                            <div className="flex-fill">
                                                                <div className="mb-2 fs-16 fw-semibold"> <a
                                                                    href="#!">{idx.productname}</a> </div><span
                                                                        className="badge bg-primary-transparent fs-11"><i
                                                                            className="ri-discount-percent-line fs-10"></i>{idx.off}</span>
                                                                <div className="my-2"> <span
                                                                    className="me-1 fw-medium text-muted">Color:</span><span
                                                                        className="fw-medium">{idx.color}</span> </div>
                                                                <div> <span
                                                                    className="me-1 fw-medium text-muted">Size:</span><span
                                                                        className="fw-medium">{idx.size}</span> </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <div className="fw-semibold fs-20"> {idx.newprice
                                                            } </div> <s
                                                                className="text-muted fs-12"> {idx.oldpr}</s>
                                                        </div>
                                                    </td>
                                                    <td> {idx.qty}</td>
                                                    <td> <span className="badge bg-light text-default">
                                                        {idx.trackid}</span> </td>
                                                    <td className="text-center">
                                                        <div className="fs-15 fw-semibold"> {idx.newprice} </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="border-top-0 d-flex align-items-center justify-content-between gap-2">
                                    <SpkButton Buttonvariant="primary-light" Customclass="btn  btn-wave  waves-effect waves-light" onClickfunc={() => print()}>
                                        <i className="ri-printer-line me-1 align-middle d-inline-block"></i>Print
                                    </SpkButton>
                                    <SpkButton Buttonvariant="primary" Customclass="primary btn-wave  waves-effect waves-light">
                                        <i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Share
                                        Details</SpkButton>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Order Status:
                                    </Card.Title>
                                    <p className="mb-0"> <span className="">Order ID :</span> <span
                                        className="text-secondary">#115876</span> </p>
                                </Card.Header>
                                <Card.Body className="pt-0">
                                    <p className="badge bg-secondary mb-2">Out For Delivery</p>
                                    <p className="mb-4"> <span className="text-muted">Estimated Delivery Date :</span> <span className="text-default fw-semibold">Monday, Jun 20</span> </p>
                                    <div className="row justify-content-between flex-column flex-sm-row">
                                        <div className="order-tracking text-center completed"> <span
                                            className="is-complete mb-3 avatar avatar-sm"> </span>
                                            <p className="mb-1 fw-semibold">01</p>
                                            <p className="mb-1 fw-semibold">Order Placed</p>
                                            <p>05th, Mar 2024</p>
                                        </div>
                                        <div className="order-tracking text-center completed"> <span
                                            className="is-complete mb-3 avatar avatar-sm"></span>
                                            <p className="mb-1 fw-semibold">02</p>
                                            <p className="mb-1 fw-semibold">Confirmed</p>
                                            <p>08th, Mar 2024</p>
                                        </div>
                                        <div className="order-tracking text-center completed"> <span
                                            className="is-complete mb-3 avatar avatar-sm"></span>
                                            <p className="mb-1 fw-semibold">03</p>
                                            <p className="mb-1 fw-semibold">Shipped</p>
                                            <p>05th, Mar 2024</p>
                                        </div>
                                        <div className="order-tracking text-center"> <span
                                            className="is-complete mb-3 avatar avatar-sm"></span>
                                            <p className="mb-1 fw-semibold">04</p>
                                            <p className="mb-1 fw-semibold">Delivered </p>
                                            <p>16th, Mar 2024</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card primary-dash-border">
                        <p className="fs-15 mb-0 fw-semibold p-3">Logistic Details :</p>
                        <Card.Body className="d-flex flex-column justify-content-center text-center pt-0">
                            <span className="mx-auto mb-3">
                                <img src={png2} alt="" />
                            </span>
                            <p className="fs-15 mb-2 fw-semibold">XYZ Transport Solutions</p>
                            <p className="fs-13 mb-1">ID:MFDS1400457854</p>
                            <span className="fs-13 text-muted">Payment Method: Debit Card</span>
                        </Card.Body>
                    </Card>
                    <div>
                        <div className="fs-15 fw-semibold mb-2">Order Summary: </div>
                        <SpkListgroup CustomClass="list-group list-group-flush card custom-card">
                            <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                <div>Sub Total</div>
                                <div className="fw-semibold fs-14">$680.98</div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                <div>Discount</div>
                                <div className="fw-semibold fs-14 text-primary">20% - $136.20</div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                <div>Delivery Charges</div>
                                <div className="fw-semibold fs-14 text-danger">- $5</div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                <div>Service Tax (18%)</div>
                                <div className="fw-semibold fs-14">- $119.56</div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                <div className="mb-2 fs-14">Total:</div>
                                <h4 className="mb-0"> <s className="text-muted fs-12 fw-normal me-1"> $680.98 </s>$420.22
                                </h4>
                            </ListGroup.Item>
                        </SpkListgroup>
                    </div>
                    <div>
                        <div className="fs-15 fw-semibold mb-2">Order Info: </div>
                        <SpkListgroup CustomClass="list-group list-group-flush card custom-card">
                            <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                <div>Order ID :</div>
                                <div className="fw-semibold fs-14">#477945119</div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                <div>Total Items :</div>
                                <div className="badge bg-info rounded-pill">02 Products</div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                <div>Order Date :</div>
                                <div className="fw-semibold fs-14">05th Mar, 2024</div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                <div>Delivered By:</div>
                                <div className="fw-semibold fs-14">16th Mar, 2024</div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center justify-content-between">
                                <div className="mb-2 fs-14">Status:</div>
                                <SpkBadge variant="primary" Pill={true}>Shipping...</SpkBadge>
                            </ListGroup.Item>
                        </SpkListgroup>
                    </div>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

        </Fragment>
    );
};

export default OrderDetails;