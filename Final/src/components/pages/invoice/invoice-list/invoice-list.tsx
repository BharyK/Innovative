import { Fragment, useState } from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { InvoiceCards, InvoicesListData } from "../../../../shared/data/pages/invoice/invoicelist";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";


const InvoiceList = () => {
    const [invoice, setInvoice] = useState(InvoicesListData)

    const handleDelete = (id: number) => {
        const Delete = invoice.filter((item) => item.id !== id);
        setInvoice(Delete)
    }
    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}

            <Seo title={"Invoice List"} />
            <Pageheader title="Pages" currentpage="Invoice List" activepage="Invoice List" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Row>
                        <Col xl={12}>
                            <Row>
                                {InvoiceCards.map((idx) => (
                                    <Col xxl={3} md={6} key={idx.id}>
                                        <Card className={`custom-card invoice-card ${idx.bgClass}`}>
                                            <Card.Body className=" p-4">
                                                <div className="d-flex justify-content-between mb-2">
                                                    <p className="mb-0">{idx.title}</p>
                                                    <SpkBadge variant={`${idx.badgeIconClass === 'up' ? 'primary' : 'danger'}-transparent`}>
                                                        <i className={`ri-arrow-${idx.badgeIconClass}-s-line me-1 align-middle`}></i>{idx.percentageChange}
                                                    </SpkBadge>
                                                </div>
                                                <h4 className="fw-semibold mb-3 invoice-count">$ <CountUp end={idx.amount} /> k </h4>
                                                <div className="d-flex justify-content-between">
                                                    <p className="fs-13 text-muted mb-0">
                                                        <SpkBadge Customclass="me-2" variant={`${idx.bgClass}`}>{idx.invoiceCount}</SpkBadge> {idx.invoiceStatus}
                                                    </p>
                                                    {idx.svgContent}
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Invoice Management </Card.Title>
                            <div className="d-flex">
                                <Link to={`${import.meta.env.BASE_URL}pages/invoice/create-invoice`} className="btn btn-sm btn-primary btn-wave waves-light waves-effect waves-light">
                                    <i className="ri-add-line fw-medium align-middle me-1"></i> Generate Invoice
                                </Link>
                                <SpkDropdown toggleas='a' Customclass="ms-2" Customtoggleclass="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light waves-effect waves-light no-caret" Icon={true} IconClass="ti ti-dots-vertical">
                                    <li><Dropdown.Item href="#!">View All Invoices</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">CompletedPayments</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Pending Payments</Dropdown.Item> </li>
                                    <li><Dropdown.Item href="#!">Overdue Payments</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'Client Name' }, { title: 'Invoice Number' }, { title: 'Date Issued' }, { title: 'Amount Due' }, { title: 'Payment Status' }, { title: 'Due Date' }, { title: 'Actions' },]}>
                                    {invoice.map((idx) => (
                                        <tr className="invoice-list" key={idx.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src={idx.avatar} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">{idx.clientName}</p>
                                                        <p className="mb-0 fs-12 text-muted">{idx.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="#!" className="fw-medium text-primary">
                                                    {idx.invoiceNumber}
                                                </Link>
                                            </td>
                                            <td>{idx.dateIssued}</td>
                                            <td className="fw-semibold">{idx.amountDue}</td>
                                            <td><SpkBadge variant={`${idx.badgecolor}`}>{idx.paymentStatus}</SpkBadge></td>
                                            <td>{idx.dueDate}</td>
                                            <td>
                                                <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-icon btn-sm me-1"> <i className="ri-printer-line"></i> </SpkButton>
                                                <SpkButton Buttonvariant="danger-light" Customclass="btn btn-icon ms-1 btn-sm invoice-btn" onClickfunc={() => handleDelete(idx.id)}><i className="ri-delete-bin-5-line"></i> </SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0 float-end">
                                    <li className="page-item disabled"> <Link to='#!' className="page-link">Previous</Link> </li>
                                    <li className="page-item"><Link className="page-link" to="#!">1</Link></li>
                                    <li className="page-item active" aria-current="page"> <Link className="page-link" to="#!">2</Link> </li>
                                    <li className="page-item"><Link className="page-link" to="#!">3</Link></li>
                                    <li className="page-item"> <Link className="page-link" to="#!">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default InvoiceList;