import { Fragment, useReducer, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkDatepickr from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import logo from '../../../../assets/images/brand-logos/desktop-logo.png'
import dark from '../../../../assets/images/brand-logos/desktop-dark.png'


const CreateInvoice = () => {

    type State = { count1: number; count2: number };

    type Action =
        | 'addition'
        | 'subtraction'
        | 'addition1'
        | 'subtraction1';

    const initialState = { count1: 1, count2: 1 };

    const reducer = (state: State, action: Action): State => {
        switch (action) {

            case "addition":
                return { ...state, count1: state.count1 + 1 };

            case "subtraction":
                return {
                    ...state,
                    count1: state.count1 > 0 ? state.count1 - 1 : 0,
                };

            case "addition1":
                return { ...state, count2: state.count2 + 1 };

            case "subtraction1":
                return {
                    ...state,
                    count2: state.count2 > 0 ? state.count2 - 1 : 0,
                };

            default:
                return state;
        }
    };
    const [count, dispatch] = useReducer(reducer, initialState)

    //Date picker
    const [dates, setDates] = useState<{ [key: string]: Date | string | null }>({});
    const handleDateChange = (key: string, date: Date | null) => {
        if (date) {
            setDates((prevDates) => ({
                ...prevDates,
                [key]: date,
            }));
        } else {
            setDates((prevDates) => {
                const { [key]: removedKey, ...rest } = prevDates;
                return rest;
            });
        }
    };
    //Currency select data
    const Currencydata = [
        { value: 'BHD - (Bahraini Dinar)', label: 'BHD - (Bahraini Dinar)' },
        { value: 'KWD - (Kuwaiti Dinar)', label: 'KWD - (Kuwaiti Dinar)' },
        { value: 'CHF - (Swiss Franc)', label: 'CHF - (Swiss Franc)' },
        { value: 'USD - (United States Dollar)', label: 'USD - (United States Dollar)' },
    ]
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Invoice Create"} />
            <Pageheader title="Pages" currentpage="Invoice Create" activepage="Invoice Create" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Body className=" p-4">
                            <div className="p-4 bg-primary-transparent rounded mb-3">
                                <Row>
                                    <Col xl={6}>
                                        <div className="mb-3">
                                            <img src={logo} alt="" className="invoice-logo" />
                                            <img src={dark} alt="" className="invoice-dark-logo" />
                                        </div>
                                        <p className="fw-medium mb-1 text-default">Suite 204, 310 Green Street Tokyo Animation Studios.</p>
                                        <p className="fw-medium mb-1 text-default">San Francisco, CA 94107, USA</p>
                                        <p className="fw-medium mb-1 text-default">+1 (415) 555 1122, +44 (703) 999 1234</p>
                                    </Col>
                                    <Col xl={6} className="text-xl-end">
                                        <Row className=" mb-3 align-items-center justify-content-end">
                                            <Col xl={3}>
                                                <h5 className="fw-semibold text-primary">INVOICE :</h5>
                                            </Col>
                                            <Col xl={6}>
                                                <input type="text" className="form-control" placeholder="Invoice ID" defaultValue="INVOICE ID" />
                                            </Col>
                                        </Row>
                                        <Row className=" gy-2 mb-2 align-items-center justify-content-end">
                                            <Col xl={3}>
                                                <p className="text-default mb-0">Due Date :</p>
                                            </Col>
                                            <Col xl={4}>
                                                <SpkDatepickr className="form-control" selected={dates["DueDate1"] ? new Date(dates["DueDate1"]) : null} dateFormat="yyyy-MM-dd" onChange={(date: Date | null) => handleDateChange("DueDate1", date)} />
                                            </Col>
                                        </Row>
                                        <Row className=" gy-2 align-items-center justify-content-end">
                                            <Col xl={3}>
                                                <p className="text-default mb-0">Invoice Date :</p>
                                            </Col>
                                            <Col xl={4}>
                                                <SpkDatepickr className="form-control" selected={dates["InvoiceDate"] ? new Date(dates["InvoiceDate"]) : null} dateFormat="yyyy-MM-dd" onChange={(date: Date | null) => handleDateChange("InvoiceDate", date)} />

                                            </Col>
                                        </Row>
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
                                                    <Col xl={12} className=" mb-1">
                                                        <input type="text" className="form-control" id="Company-Name" placeholder="Company Name" defaultValue="NEXTECH SOLUTIONS" />
                                                    </Col>
                                                    <p className="fw-bold mb-1">
                                                        <textarea className="form-control" id="company-address" placeholder="Enter Address" rows={3}></textarea>
                                                    </p>
                                                    <p className="mb-1 text-muted">
                                                        <input type="text" className="form-control" id="company-mail" placeholder="Company Email" />
                                                    </p>
                                                    <p className="mb-1 text-muted"> <input type="text" className="form-control" id="company-phone" placeholder="Phone Number" /> </p>
                                                    <p className="mb-0 text-muted"> <textarea className="form-control" id="invoice-subject" placeholder="Subject" rows={4}></textarea> </p>
                                                </Col>
                                            </Row>
                                            <Row className=" flex-fill text-end">
                                                <Col xl={5}>
                                                    <p className="mb-2 fw-semibold"> Billing From: </p>
                                                </Col>
                                                <Col xl={7}>
                                                    <Col xl={12} className=" mb-1">
                                                        <input type="text" className="form-control" id="Company-Name11" placeholder="Company Name" defaultValue="Priya Verma" />
                                                    </Col>
                                                    <p className="fw-bold mb-1">
                                                        <input type="text" className="form-control" id="customer-mail" placeholder="Customer Email" />
                                                    </p>
                                                    <p className="mb-1 text-muted">
                                                        <textarea className="form-control" id="customer-address" placeholder="Enter Address" rows={3}></textarea>
                                                    </p>
                                                    <p className="mb-1 text-muted">
                                                        <input type="text" className="form-control" id="customer-phone" placeholder="Phone Number" />
                                                    </p>
                                                    <p className="mb-1 text-muted">
                                                        <input type="text" className="form-control" id="zip-code" placeholder="Zip Code" />
                                                    </p>
                                                    <div className="text-start">
                                                        <p className="fw-semibold mb-2 mt-2 text-start"> Currency : </p>
                                                        <SpkSelect name="colors" option={Currencydata} mainClass="basic-multi-select  bg-light"
                                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select Currency"
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <Row className="gy-2 p-3 bg-light rounded mt-2">
                                        <Col xl={3} className="mt-0">
                                            <label htmlFor="invoice-number" className="form-label">Invoice ID</label>
                                            <input type="text" className="form-control" id="invoice-number" placeholder="Inv No" defaultValue="#SPK120219890" />
                                        </Col>
                                        <Col xl={3} className="mt-0">
                                            <div className="custom-inputfield">
                                                <label htmlFor="invoice-date-issued" className="form-label">Date Issued</label>
                                                <SpkDatepickr className="form-control" selected={dates["IsuueDate"] ? new Date(dates["IsuueDate"]) : null} dateFormat="yyyy-MM-dd" onChange={(date: Date | null) => handleDateChange("IsuueDate", date)} />
                                            </div>
                                        </Col>
                                        <Col xl={3} className="mt-0">
                                            <div className="custom-inputfield">
                                                <label htmlFor="invoice-date-due" className="form-label">Due Date</label>
                                                <SpkDatepickr className="form-control" selected={dates["DueDate"] ? new Date(dates["DueDate"]) : null} dateFormat="yyyy-MM-dd" onChange={(date: Date | null) => handleDateChange("DueDate", date)} />
                                            </div>
                                        </Col>
                                        <Col xl={3} className="mt-0">
                                            <div>
                                                <label htmlFor="invoice-due-amount" className="form-label">Due Amount</label>
                                                <input type="text" className="form-control" id="invoice-date-due" defaultValue="$12,983.78" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12}>
                                    <div className="table-responsive">
                                        <table className="table nowrap text-nowrap border mt-3 invoice-table">
                                            <thead>
                                                <tr>
                                                    <th>PRODUCT NAME</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>QUANTITY</th>
                                                    <th>PRICE PER UNIT</th>
                                                    <th>TOTAL</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input type="text" className="form-control" placeholder="Enter Product Name" />
                                                    </td>
                                                    <td>
                                                        <textarea rows={1} className="form-control" placeholder="Enter Description"></textarea>
                                                    </td>
                                                    <td className="invoice-quantity-container">
                                                        <div className="input-group border rounded flex-nowrap">
                                                            <SpkButton Buttonvariant="primary" Customclass="btn btn-icon input-group-text flex-fill product-quantity-minus" onClickfunc={() => dispatch('subtraction')}><i className="ri-subtract-line"></i></SpkButton>
                                                            <input type="text" className="form-control form-control-sm border-0 text-center w-100" aria-label="quantity" id="product-quantity4" key={count.count1} defaultValue={count.count1} />
                                                            <SpkButton Buttonvariant="primary" Customclass="btn btn-icon input-group-text flex-fill product-quantity-plus" onClickfunc={() => dispatch('addition')}><i className="ri-add-line"></i></SpkButton>
                                                        </div>
                                                    </td>
                                                    <td><input className="form-control" placeholder="" type="text" defaultValue="$60.00" /></td>
                                                    <td><input className="form-control" placeholder="" type="text" defaultValue="$120.00" /></td>
                                                    <td>
                                                        <SpkButton Buttonvariant="danger-light" Customclass="btn btn-sm btn-icon"><i className="ri-delete-bin-5-line"></i></SpkButton>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="text" className="form-control" placeholder="Enter Product Name" />
                                                    </td>
                                                    <td>
                                                        <textarea rows={1} className="form-control" placeholder="Enter Description"></textarea>
                                                    </td>
                                                    <td className="invoice-quantity-container">
                                                        <div className="input-group border rounded flex-nowrap">
                                                            <SpkButton Buttonvariant="primary" Customclass="btn btn-icon input-group-text flex-fill product-quantity-minus" onClickfunc={() => dispatch('subtraction1')}><i className="ri-subtract-line"></i></SpkButton>
                                                            <input type="text" className="form-control form-control-sm border-0 text-center w-100" aria-label="quantity" id="product-quantity5" key={count.count2} defaultValue={count.count2} />
                                                            <SpkButton Buttonvariant="primary" Customclass="btn btn-icon input-group-text flex-fill product-quantity-plus" onClickfunc={() => dispatch('addition1')}><i className="ri-add-line"></i></SpkButton>
                                                        </div>
                                                    </td>
                                                    <td><input className="form-control" placeholder="Enter Amount" type="text" /></td>
                                                    <td><input className="form-control" placeholder="Enter Amount" type="text" /></td>
                                                    <td>
                                                        <SpkButton Buttonvariant="danger-light" Customclass="btn btn-sm btn-icon"><i className="ri-delete-bin-5-line"></i></SpkButton>
                                                    </td>
                                                </tr>
                                                <tr className="border-bottom">
                                                    <td colSpan={6} className="border-bottom-0"><Link className="btn btn-light" to="#!"><i className="bi bi-plus-lg"></i> Add Product</Link></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={4}></td>
                                                    <td colSpan={2}>
                                                        <table
                                                            className="table table-sm text-nowrap mb-0 table-borderless">
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-medium">Sub Total :</div>
                                                                    </th>
                                                                    <td>
                                                                        <input type="text" className="form-control invoice-amount-input" placeholder="Enter Amount" defaultValue="$1209.89" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-medium">Avail Discount : </div>
                                                                    </th>
                                                                    <td>
                                                                        <input type="text" className="form-control invoice-amount-input" placeholder="Enter Amount" defaultValue="$29.98" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-medium">Coupon Discount
                                                                            <span className="text-primary ms-1">(10%)</span> :
                                                                        </div>
                                                                    </th>
                                                                    <td>
                                                                        <input type="text" className="form-control invoice-amount-input" placeholder="Enter Amount" defaultValue="$129.00" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-medium">Vat
                                                                            <span className="text-danger ms-1">(20%)</span> :
                                                                        </div>
                                                                    </th>
                                                                    <td>
                                                                        <input type="text" className="form-control invoice-amount-input" placeholder="Enter Amount" defaultValue="$258.00" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-medium">Due Till Date :</div>
                                                                    </th>
                                                                    <td>
                                                                        <input type="text" className="form-control invoice-amount-input" placeholder="Enter Amount" defaultValue="$0.00" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fs-14 fw-medium">Total :</div>
                                                                    </th>
                                                                    <td>
                                                                        <input type="text" className="form-control invoice-amount-input" placeholder="Enter Amount" defaultValue="$1,071.89" />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div>
                                        <label htmlFor="invoice-note" className="form-label">Note:</label>
                                        <textarea className="form-control bg-light" id="invoice-note" rows={3} defaultValue='Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment'></textarea>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="text-end">
                            <SpkButton Buttonvariant="secondary" Customclass="btn m-1"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>Preview</SpkButton>
                            <SpkButton Buttonvariant="primary" Customclass="btn m-1">Send Invoice <i className="ri-send-plane-2-line ms-1 align-middle d-inline-block"></i></SpkButton>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" pb-2">
                            <Card.Title>
                                Mode Of Payment
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className=" gy-3">
                                <Col xl={12}>
                                    <Row className=" gy-2 gx-3">
                                        <Col md={6}>
                                            <Card className="custom-card mb-0 border card-style-6">
                                                <Card.Body className=" px-3 py-2">
                                                    <div className="d-flex align-items-center justify-content-between mb-0 gap-2 flex-wrap">
                                                        <div className="flex-grow-1"> UPI Payment </div>
                                                        <div className="min-w-fit-content">
                                                            <div className="d-flex gap-2">
                                                                <input className="form-check-input" type="radio" id="address1" name="default-address" defaultChecked />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={6}>
                                            <Card className="custom-card border mb-0 card-style-6">
                                                <Card.Body className=" px-3 py-2">
                                                    <div className="d-flex align-items-center justify-content-between mb-0 gap-2 flex-wrap">
                                                        <div className="flex-grow-1"> Credit Card </div>
                                                        <div className="min-w-fit-content">
                                                            <div className="d-flex gap-2">
                                                                <input className="form-check-input" type="radio" id="address2" name="default-address" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12}>
                                    <div className="p-3 bg-light rounded">
                                        <Row className=" gy-2 gx-3">
                                            <Col xl={12}>
                                                <input type="text" className="form-control" placeholder="Card Holder Name" />
                                            </Col>
                                            <Col xl={12}>
                                                <input type="text" className="form-control" id="invoice-payment-cardname" placeholder="Card Number" defaultValue="1234 5678 9087 XXXX" />
                                                <label htmlFor="invoice-payment-cardname" className="form-label mb-0">
                                                    <Link className="text-danger fs-11" to="#!">Enter valid card  number*</Link>
                                                </label>
                                            </Col>
                                            <Col xl={6}>
                                                <input type="text" className="form-control mb-2" placeholder="Enter Expiry Date" />
                                            </Col>
                                            <Col xl={6}>
                                                <input type="text" className="form-control mb-2" placeholder="Enter CVV" />
                                            </Col>
                                            <Col xl={12}>
                                                <input type="text" className="form-control mb-2" placeholder="Enter OTP" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div className="alert alert-secondary" role="alert">
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

export default CreateInvoice;