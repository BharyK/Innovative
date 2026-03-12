import { Fragment, useEffect, useState } from "react";
import { data$, getState } from "../../../shared/services/switcherServices";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Cards, EcpmmersSwiperCard, MonthlyIncomeOptions, MonthlyIncomeSeries, RecentOrders, SalesHistory, TopSellers, TopSellingCategories, TopSellingCategoriesOptions, TopSellingCategoriesSeries, TopSellingProducts, TrackOrder } from "../../../shared/data/dashboards/ecommercedata";
import SpkEcommercecard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-ecommercecard";
import { Link } from "react-router-dom";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkSwiperJs from "../../../shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkTooltips from "../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import png3 from '../../../assets/images/ecommerce/png/3.png'
import png14 from '../../../assets/images/media/png/14.png'
import media76 from '../../../assets/images/media/media-76.png'


const Ecommerce = () => {
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        770: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
    const breakpoints1 = {
        500: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1800: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    }




    let [variable, setVariable] = useState(getState());
    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            setVariable(e);
        });

        return () => subscription.unsubscribe();
    }, [variable]);


    let breakPoints = variable.dataWidth === 'boxed' ? breakpoints1 : breakpoints
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Summary"} />

            <Pageheader title="Dashboard" currentpage="Summary" activepage="Summary" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={8}>
                    <Row>
                        <Col xl={12}>
                            <Row>
                                {Cards.map((data) => (
                                    <Col md={6} key={data.id}>
                                        <SpkEcommercecard CustomCardClass='main-custom-card' card={data} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> Sales History </Card.Title>
                                    <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table text-nowrap custom-cardTable" >
                                            {SalesHistory.map((data) => (
                                                <tr key={data.id}>
                                                    <td>
                                                        <div className="d-flex align-items-start gap-2">
                                                            <div> <span
                                                                className={`avatar avatar-md avatar-rounded bg-${data.imageBg}`}>
                                                                <img src={data.image} alt="" />
                                                            </span> </div>
                                                            <div> <span className="d-block fw-semibold mb-0 sales-history-item">{data.product}</span>
                                                                <span className="d-block fs-13 text-muted">{data.country}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <div>
                                                            <span className="d-block fw-semibold mb-1 fs-14">{data.price}</span>
                                                            <span className="d-block fs-12 text-muted">{data.time}</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={8}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title> Monthly Income </Card.Title>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret " Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                            <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Relevant</Dropdown.Item> </li>
                                        </SpkDropdown>
                                        <div>
                                            <SpkButton Buttonvariant="light" Customclass="btn border btn-sm">Export<i className="ri-share-forward-line ms-1"></i></SpkButton>
                                        </div>
                                    </div>
                                </Card.Header>
                                <Card.Body className=" pb-0">
                                    <div id="revenue-overview">
                                        <Spkapexcharts chartOptions={MonthlyIncomeOptions} chartSeries={MonthlyIncomeSeries} type="area" width={"100%"} height={385} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between pb-2">
                            <Card.Title>
                                Track Order
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-icon btn-sm btn-light no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                <li><Dropdown.Item href="#!">Action</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Another action</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Something else here</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex gap-3 border-bottom pb-3">
                                <span className="avatar avatar-lg bg-light">
                                    <img src={png3} alt="" />
                                </span>
                                <div>
                                    <p className="mb-0 fs-15 fw-semibold">Wired Headset With Mic(Black)</p>
                                    <span className="fs-14 text-primary fw-semibold">$12,756<span className="text-muted fs-13 ms-2">(Qty:02)</span></span>
                                </div>
                            </div>
                            <ul className="list-unstyled mb-0 track-order pt-3">
                                {TrackOrder.map((status) => (
                                    <li className={`d-flex ${status.liclass}`} key={status.id}>
                                        <div className={`avatar-md p-1 ${status.wrapperBg} avatar avatar-rounded flex-shrink-0 me-3`}>
                                            <span className={`avatar-sm avatar avatar-rounded ${status.iconBg}`}>
                                                <i className={`${status.icon} fs-18`}></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex flex-wrap gap-1">
                                                <div className="flex-grow-1">
                                                    <p className="mb-1 fs-14 fw-medium">{status.title}</p>
                                                    <p className="text-muted fs-13 mb-0">{status.description}</p>
                                                </div>
                                                <div className="ms-auto text-end flex-shrink-0">
                                                    <p className="fs-12 mb-0">{status.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between d-flex gap-2 flex-wrap">
                            <Card.Title>
                                Top Selling Products
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret " Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap mb-0" tBodyClass="top-selling" header={[{ title: 'Id.no', headerClassname: 'text-center' }, { title: 'Product Name' }, { title: 'Date' }, { title: 'Category' }, { title: 'Stock' }, { title: 'Total Sales' },]}>
                                    {TopSellingProducts.map((data) => (
                                        <tr key={data.id}>
                                            <td className={`text-center lh-1 ${data.borderClass}`}>{data.orderId}</td>
                                            <td className={data.borderClass}>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-sm me-2 my-1">
                                                        <img src={data.image}
                                                            className={`rounded-pill ${data.imageBg}`} alt="" />
                                                    </span>
                                                    {data.title}
                                                </div>
                                            </td>
                                            <td className={data.borderClass}>{data.date}</td>
                                            <td className={data.borderClass}>{data.category}</td>
                                            <td className={data.borderClass}>
                                                <SpkBadge variant={`${data.stockStatusBg}-transparent`} Customclass={`text-${data.stockStatusBg}`}>
                                                    {data.stockStatus}
                                                </SpkBadge>
                                            </td>
                                            <td className={data.borderClass}>
                                                <span className="fw-semibold">{data.quantity}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Top Selling Categories
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret " Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="pt-1 p-0">
                            <div id="top-categories">
                                <Spkapexcharts chartOptions={TopSellingCategoriesOptions} chartSeries={TopSellingCategoriesSeries} type="donut" width={"100%"} height={262} />
                            </div>
                            <div className="table-responsive border-top">
                                <SpkTables tableClass="table text-nowrap">
                                    {TopSellingCategories.map((data) => (
                                        <tr key={data.id}>
                                            <th className={data.borderClass}>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <span className={`avatar avatar-sm bg-${data.iconBg}`}>
                                                        <i className={`${data.icon} fs-18`}></i>
                                                    </span>
                                                    <span className="d-block fw-semibold">{data.category}</span>
                                                </div>
                                            </th>
                                            <td className={`text-center ${data.borderClass}`}>
                                                <span className={`text-${data.percentageTextColor} fw-medium ms-1 d-inline-flex align-items-center`}><i
                                                    className={`ti ti-arrow-narrow-${data.percentageIcon}`}></i>{data.percentage}</span></td>
                                            <td className={`text-center ${data.borderClass}`}>
                                                <div className="fs-14 mb-0 fw-semibold">{data.count}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between border-bottom-0">
                            <Card.Title>
                                Recent Orders
                            </Card.Title>
                            <div className="d-flex flex-wrap ms-auto gap-2">
                                <div className="me-1">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search"
                                        aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret " Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap table-bordered" header={[{ title: 'Order Id' }, { title: 'Product Title' }, { title: 'Category' }, { title: 'Status' }, { title: 'Price' }, { title: 'Ordered Date' }, { title: 'Actions' },]}>
                                    {RecentOrders.map((data) => (
                                        <tr key={data.id}>
                                            <td>
                                                <span className="fw-medium">{data.orderId}</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm">
                                                            <img src={data.image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fs-14">{data.productName}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{data.category}</span>
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${data.statusBg}`}>{data.status}</SpkBadge>
                                            </td>
                                            <td className="fw-medium"> {data.price} </td>
                                            <td>
                                                <span>{data.date}</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkTooltips placement="top" title="Edit">
                                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-icon">
                                                            <i className="ri-pencil-line lh-1 align-middle"></i>
                                                        </SpkButton>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <SpkButton Buttonvariant="danger-light" Customclass="btn btn-sm btn-icon ">
                                                            <i className="ri-delete-bin-line lh-1 align-middle"></i>
                                                        </SpkButton>
                                                    </SpkTooltips>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" border-top-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled"><Link className="page-link" to="#!">Prev</Link></li>
                                            <li className="page-item active"><Link className="page-link" to="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#!">2</Link></li>
                                            <li className="page-item"><Link className="page-link text-primary" to="#!"> next</Link> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    );
};

export default Ecommerce;