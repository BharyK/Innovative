import { Fragment, useState } from "react";
import { Card, Col, Nav, Pagination, Row, Tab } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import OrdersTable, { DeliveryOptions, Ordertable, StatusOptions } from "../../../../shared/data/apps/ecommerce/ordersdata";
import SpkOrders from "../../../../shared/@spk-reusable-components/reusable-apps/spk-orderscard";


const Orders = () => {

    const [paymentFilter, setPaymentFilter] = useState("All Status");
    const [deliveryFilter, setDeliveryFilter] = useState("All Status");
    const [searchText, setSearchText] = useState("");

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Orders" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Orders" activepage="Orders" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Card className="custom-card">
                <Card.Header className="justify-content-between">
                    <Card.Title>
                        All Orders List
                    </Card.Title>
                    <SpkDropdown Customtoggleclass="btn btn-secondary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                        <li><Link className="dropdown-item" to="#!">Low Price</Link></li>
                        <li><Link className="dropdown-item" to="#!">High Price</Link></li>
                        <li><Link className="dropdown-item" to="#!">Quantity</Link> </li>
                    </SpkDropdown>
                </Card.Header>
                <Card.Body className="py-0">
                    <Tab.Container defaultActiveKey="first">
                        <div className="p-3 mb-4 bg-light rounded d-flex gap-2 flex-wrap">
                            {/* <!-- Tab Navigation --> */}
                            <Nav as="ul" className="nav nav-pills order-nab-tab" role="tablist">
                                <Nav.Item as="li" className="nav-item flex-grow-1" role="presentation">
                                    <Nav.Link eventKey="first" className="nav-link bg-primary-transparent text-center" data-bs-toggle="tab"
                                        role="tab" aria-current="page" href="#fill-pill-about" aria-selected="true">
                                        <i className="ri-list-check me-1 fs-14"></i>Grid View</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item flex-grow-1" role="presentation">
                                    <Nav.Link eventKey="second" className="nav-link bg-primary-transparent text-center" data-bs-toggle="tab"
                                        role="tab" aria-current="page" href="#fill-pill-home" aria-selected="false">
                                        <i className="ri-layout-grid-line me-1 fs-14"></i>List View</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            {/* <!-- Search and Filters --> */}
                            <div className="d-flex gap-2 flex-grow-1 flex-wrap justify-content-between">
                                <div className="input-group w-sm-50">
                                    <input className="form-control" type="search" id="search-input" placeholder="Search Product" aria-label="search-product" onChange={(e) => setSearchText(e.target.value)} />
                                    <button className="btn btn-primary z-0"><i className="ti ti-search"></i> Search</button>
                                </div>

                                {/* <!-- Filters Section --> */}
                                <div className="d-flex gap-2 flex-wrap justify-content-end ms-auto align-items-center">
                                    {/* <!-- Category Filter --> */}
                                    <div>
                                        <SpkDropdown Customclass="d-grid" Togglevariant="primary-light" Customtoggleclass="btn dropdown-toggle " Toggletext="Export" Icon={true} iconPosition="before" IconClass="ri-upload-2-line me-1">
                                            <li><Link className="dropdown-item" to="#!"><i className="bi bi-file-earmark-excel me-2"></i>Excel</Link></li>
                                            <li><Link className="dropdown-item" to="#!"><i className="bi bi-file-earmark-excel me-2"></i>Csv</Link></li>
                                            <li><Link className="dropdown-item" to="#!"><i className="bi bi-filetype-pdf me-2"></i>PDF</Link></li>
                                            <li><Link className="dropdown-item" to="#!"><i className="bi bi-file-zip me-2"></i>Zip</Link></li>
                                        </SpkDropdown>
                                    </div>

                                    {/* <!-- Status Filter --> */}
                                    <div>
                                        <SpkSelect name="colors" option={StatusOptions} mainClass="basic-multi-select orderPayment-status"
                                            menuplacement='auto' classNameprefix="Select2" placeholder="Payment Status" onChange={(e) => setPaymentFilter(e.value)}
                                        />
                                    </div>

                                    {/* <!-- Stock Filter --> */}
                                    <div>
                                        <SpkSelect name="colors" option={DeliveryOptions} mainClass="basic-multi-select orderDelivery-status"
                                            menuplacement='auto' classNameprefix="Select2" placeholder="Delivery Status" onChange={(e) => setDeliveryFilter(e.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Tab.Content className="project-list-tab">
                            <Tab.Pane eventKey="first" className="show  text-muted p-0 border-0" id="fill-pill-about"
                                role="tabpanel">
                                <Row>
                                    {Ordertable.map((idx) => (
                                        <Col xxl={3} xl={4} md={6} key={idx.id}>
                                            <SpkOrders obj={idx} />
                                        </Col>
                                    ))}
                                    <Col xl={12}>
                                        <div className="p-3 pb-4 pt-0">
                                            <div className="d-flex align-items-center flex-wrap overflow-auto">
                                                <div className="mb-2 mb-sm-0 text-default">
                                                    Showing <b>1</b> to <b>10</b> of <b>{Ordertable.length}</b> entries <i
                                                        className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                                </div>
                                                <div className="ms-auto">
                                                    <Pagination className="mb-0 overflow-auto">
                                                        <Pagination.Item disabled>Previous</Pagination.Item>
                                                        <Pagination.Item active aria-current="page">1</Pagination.Item>
                                                        <Pagination.Item >2</Pagination.Item>
                                                        <Pagination.Item >3</Pagination.Item>
                                                        <Pagination.Item >4</Pagination.Item>
                                                        <Pagination.Item >Next</Pagination.Item>
                                                    </Pagination>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" className="text-muted p-0 border-0" id="fill-pill-home"
                                role="tabpanel">
                                <Card className="custom-card shadow-none">
                                    <Card.Body className="pt-0">
                                        <div id="orders-table" className="grid-card-table">
                                            {/* <OrdersTable /> */}
                                            <OrdersTable
                                                paymentFilter={paymentFilter}
                                                deliveryFilter={deliveryFilter}
                                                searchText={searchText}
                                            />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Card.Body>
            </Card>
            {/* <!--End::row-1 --> */}

        </Fragment>
    );
};

export default Orders;