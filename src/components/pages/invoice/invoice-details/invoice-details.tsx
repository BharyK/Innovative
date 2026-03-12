import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Link } from "react-router-dom";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import logo from '../../../../assets/images/brand-logos/desktop-logo.png'
import dark from '../../../../assets/images/brand-logos/desktop-dark.png'

const InvoiceDetails = () => {

    const InvoiceItems = [
        { id: 1, brandName: 'Dapzem & Co (Sweatshirt)', description: 'Branded hoodie ethnic style', quantity: 2, pricePerUnit: 60, total: 120 },
        { id: 2, brandName: 'Denim Winjo (Jacket)', description: 'Vintage pure leather Jacket', quantity: 1, pricePerUnit: 249, total: 249 },
        { id: 3, brandName: 'Jimmy Lolfiger (Winter Coat)', description: 'Unisex jacket for men & women', quantity: 1, pricePerUnit: 499, total: 499 },
        { id: 4, brandName: 'Blueberry & Co', description: 'Light colored sweater form blueberry', quantity: 3, pricePerUnit: 299, total: 897 },
        { id: 5, brandName: 'Denim Corporation', description: 'Flap pockets denim jackets for men', quantity: 1, pricePerUnit: 599, total: 599 }
    ];

    const print = () => {
        window.print();
    };

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Invoice Details"} />
            <Pageheader title="Pages" currentpage="Invoice Details" activepage="Invoice Details" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Body className=" p-4">
                            <div className="p-4 bg-primary-transparent rounded mb-3">
                                <Row>
                                    <Col xl={6}>
                                        <img src={logo} alt="" className="invoice-logo mb-3" />
                                        <img src={dark} alt="" className="invoice-dark-logo mb-3" />
                                        <p className="fw-medium mb-1 text-default">Suite 204, 310 Green Street Tokyo
                                            Animation Studios.</p>
                                        <p className="fw-medium mb-1 text-default">San Francisco, CA 94107, USA</p>
                                        <p className="fw-medium mb-1 text-default">+1 (415) 555 1122, +44 (703) 999 1234
                                        </p>
                                    </Col>
                                    <Col xl={6} className="text-end">
                                        <h5 className="fw-semibold text-primary mb-3">INVOICE <span className=" op-7 fw-semibold">#1570</span></h5>
                                        <p className="fw-medium mb-1 text-default">Due Date : <span className="op-8 ms-1">15, July 2024</span></p>
                                        <p className="fw-medium mb-0 text-default">Invoice Date : <span className="op-8 ms-1">1, July 2024</span></p>
                                    </Col>
                                </Row>
                            </div>
                            <Row className=" gy-3">
                                <Col xl={12}>
                                    <div className="p-4 border-top border-bottom border-block-start-dashed border-block-end-dashed">
                                        <div className="d-flex justify-content-between gap-5 flex-wrap">
                                            <Row className=" flex-fill">
                                                <Col xl={3}>
                                                    <p className="mb-2 fw-semibold"> Billing To: </p>
                                                </Col>
                                                <Col xl={8}>
                                                    <p className="fw-bold mb-1"> NEXTECH SOLUTIONS </p>
                                                    <p className="mb-1 "> 1234, Elm Street, Suite 567 </p>
                                                    <p className="mb-1 "> San Francisco, CA, USA, 94103 </p>
                                                    <p className="mb-1 "> nextechsolutions@support.com </p>
                                                    <p className="mb-1 "> (415) 789-1234 </p>
                                                    <p className=" mb-0">For more information, check <Link to="#!" className="text-primary fw-medium"><u>Tax Details</u></Link>. </p>
                                                </Col>
                                            </Row>
                                            <Row className=" flex-fill text-end gx-0">
                                                <Col xl={5}>
                                                    <p className="mb-2 fw-semibold"> Billing From: </p>
                                                </Col>
                                                <Col xl={7}>
                                                    <p className="fw-bold mb-1"> Priya Verma </p>
                                                    <p className="mb-1"> A-202, Zenith Towers </p>
                                                    <p className="mb-1"> Mumbai, India, 400001 </p>
                                                    <p className="mb-1"> priya.verma@zenithmail.com </p>
                                                    <p className="mb-0"> +91 987-654-3210 </p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <Row className=" p-3 bg-light rounded">
                                        <Col xl={3}>
                                            <p className="fw-medium mb-1">Invoice ID :</p>
                                            <p className="fs-15 mb-1">#SPK120219890</p>
                                        </Col>
                                        <Col xl={3}>
                                            <p className="fw-medium mb-1">Date Issued :</p>
                                            <p className="fs-15 mb-1">29,Nov 2024 - <span
                                                className="text-muted fs-12">12:42PM</span></p>
                                        </Col>
                                        <Col xl={3}>
                                            <p className="fw-medium mb-1">Due Date :</p>
                                            <p className="fs-15 mb-1">29,Dec 2024</p>
                                        </Col>
                                        <Col xl={3}>
                                            <p className="fw-medium mb-1">Due Amount :</p>
                                            <p className="fs-16 mb-1 fw-medium">$2,570.42</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12}>
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table nowrap text-nowrap border mt-4" header={[{ title: 'BRAND NAME' }, { title: 'DESCRIPTION' }, { title: 'QUANTITY' }, { title: 'PRICE PER UNIT' }, { title: 'TOTAL' },]}>
                                            {InvoiceItems.map((idx) => (
                                                <tr key={idx.id}>
                                                    <td>
                                                        <div className="fw-medium">
                                                            {idx.brandName}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            {idx.description}
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        {idx.quantity}
                                                    </td>
                                                    <td>
                                                        ${idx.pricePerUnit}
                                                    </td>
                                                    <td>
                                                        ${idx.total}
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td colSpan={3}></td>
                                                <td colSpan={2}>
                                                    <table
                                                        className="table table-sm text-nowrap mb-0 table-borderless">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <p className="mb-0">Sub Total :</p>
                                                                </th>
                                                                <td>
                                                                    <p className="mb-0 fw-medium fs-15">$2,364</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <p className="mb-0">Avail Discount :</p>
                                                                </th>
                                                                <td>
                                                                    <p className="mb-0 fw-medium fs-15">$29.98</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <p className="mb-0">Coupon Discount <span
                                                                        className="text-primary">(10%)</span> :
                                                                    </p>
                                                                </th>
                                                                <td>
                                                                    <p className="mb-0 fw-medium fs-15">$236.40</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <p className="mb-0">Vat <span
                                                                        className="text-danger">(20%)</span> :
                                                                    </p>
                                                                </th>
                                                                <td>
                                                                    <p className="mb-0 fw-medium fs-15">$472.80</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <p className="mb-0">Due Till Date :</p>
                                                                </th>
                                                                <td>
                                                                    <p className="mb-0 fw-medium fs-15">$0</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <p className="mb-0 fs-14">Total :</p>
                                                                </th>
                                                                <td>
                                                                    <p
                                                                        className="mb-0 fw-medium fs-16 text-primary">
                                                                        $2,570.42</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </SpkTables>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div>
                                        <label htmlFor="invoice-note" className="form-label">Note:</label>
                                        <textarea className="form-control form-control-light" id="invoice-note" rows={3} defaultValue='Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment'></textarea>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className=" text-end d-flex flex-wrap gap-2 justify-content-end">
                            <SpkButton Buttonvariant="primary" Customclass="btn me-1" onClickfunc={print} >Print<i className="ri-printer-line ms-1 align-middle d-inline-block"></i></SpkButton>
                            <SpkButton Buttonvariant="secondary" Customclass="btn me-1">Save As PDF<i className="ri-file-pdf-line ms-1 align-middle d-inline-block"></i></SpkButton>
                            <SpkButton Buttonvariant="danger" Customclass="btn">Download <i className="ri-download-2-line ms-1 align-middle"></i></SpkButton>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" pb-0">
                            <Card.Title>
                                Payment Details
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="border border-dashed bg-light rounded text-center">
                                <div className="p-3">
                                    <span className="avatar avatar-lg avatar-rounded bg-secondary-transparent border border-secondary border-opacity-25"><i className="ri-file-list-3-line fs-20"></i></span>
                                    <h4 className="fw-semibold mb-2 mt-2">11.566 USD</h4>
                                    <span>No.INV2322-02-1287</span>
                                </div>
                                <div className="border-top p-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p className="mb-0">Status:</p>
                                        <SpkBadge variant="primary-transparent">Paid</SpkBadge>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0">Payment Date:</p>
                                        <span className="fs-13 text-muted">03 Jul,2024</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Mode Of Payment
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className=" gy-3">
                                <Col xl={12}>
                                    <p className="fs-14 fw-medium">
                                        Credit/Debit Card
                                    </p>
                                    <p>
                                        <span className="fw-medium fs-12">Name On Card :</span> Jack Miller
                                    </p>
                                    <p>
                                        <span className="fw-medium fs-12">Card Number :</span> 1234 5678 9087
                                        XXXX
                                    </p>
                                    <p>
                                        <span className="fw-medium fs-12">Card Expiry Date :</span>
                                        <span className="text-danger fs-12 fw-medium mx-1">Mar/2025</span>
                                    </p>
                                    <p>
                                        <span className="fw-medium fs-12">Card CVV : <span
                                        >0825</span></span>
                                    </p>
                                    <p>
                                        <span className="fw-medium fs-12">Total Amount :</span> <span
                                            className="text-primary fw-medium fs-14">$2570.42</span>
                                    </p>
                                    <div className="alert alert-warning" role="alert">
                                        Please Make sure to pay the invoice bill within 30 days.
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default InvoiceDetails;