import { Fragment, useState } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import SpkTooltips from "../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import {
  BrowserActivity,
  RecentOrders,
  RecentTransactions,
  RevenueChannels,
  SalesDataRow1,
  SalesRevenueOptions,
  SalesRevenueSeries,
  TopAudienceLocations,
  TopCategoriesBySales,
  UpcomingSales,
  VisitorsByDevice,
  VisitorsByDeviceOptions,
  VisitorsByDeviceSeries,
} from "../../../shared/data/dashboards/salesdata";
import SpkSalesdashboard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-salesdashboard";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import { Link } from "react-router-dom";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import media9 from "../../../assets/images/media/png/9.png";
import { ExcelReader } from "../../utilities/excel-reader/excel-reader";
import { ExcelReaderDynamic } from "../../utilities/excel-reader/excel-reader-dynamic";
import moment from "moment";

const Sales = () => {
  const [excelData, setExcelData] = useState<ExcelRow[]>([]);
  const [dyanmicaContent, setDynamicContent] = useState<ExcelRow[]>([]);
  const headers =
    dyanmicaContent && dyanmicaContent.length > 0
      ? Object.keys(dyanmicaContent[0])
      : [];
  console.log("dyanmicaContent", dyanmicaContent);
  return (
    <Fragment>
      {/* <!-- Start::page-header --> */}
      <ExcelReader setExcelData={setExcelData} />
      <ExcelReaderDynamic setExcelData={setDynamicContent} />
      <Seo title={"Sales"} />

      <div className="d-flex align-items-center justify-content-between my-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <p className="fw-medium fs-18 mb-0">Hello there, Jack Miller</p>
          <p className="fs-13 text-muted mb-0">
            Let's make today a productive one!
          </p>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <div className="d-flex gap-2">
            <div className="position-relative">
              <Dropdown className="position-relative">
                <Dropdown.Toggle
                  as="button"
                  className="btn btn-primary btn-wave no-caret"
                  type="button"
                  id="dropdownMenuClickableInside"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                  title="Filter"
                >
                  Filter By{" "}
                  <i className="ri-arrow-down-s-fill ms-1" title="Filter"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  as="ul"
                  aria-labelledby="dropdownMenuClickableInside"
                >
                  <li>
                    <Dropdown.Item as="a" href="#!">
                      Today
                    </Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item as="a" href="#!">
                      Yesterday
                    </Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item as="a" href="#!">
                      Last 7 Days
                    </Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item as="a" href="#!">
                      Last 30 Days
                    </Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item as="a" href="#!">
                      Last 6 Months
                    </Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item as="a" href="#!">
                      Last Year
                    </Dropdown.Item>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <SpkTooltips placement="top" title="Download">
              <SpkButton
                Buttonvariant="secondary"
                Customclass=" btn-icon btn-wave"
              >
                <i className="ti ti-download"></i>
              </SpkButton>
            </SpkTooltips>
            <SpkTooltips placement="top" title="Share">
              <SpkButton
                Buttonvariant="danger"
                Customclass=" btn-icon btn-wave"
              >
                <i className="ti ti-share-3"></i>
              </SpkButton>
            </SpkTooltips>
          </div>
        </div>
      </div>
      {/* <!-- End::page-header --> */}

      {/* <!-- Start:: row-1 --> */}
      <Row>
        <Col xxl={9}>
          <Row>
            {SalesDataRow1.map((idx) => (
              <Col xxl={3} md={6} key={idx.id}>
                <SpkSalesdashboard card={idx} />
              </Col>
            ))}
            <Col xxl={8}>
              <Card className="custom-card">
                <Card.Header className=" justify-content-between">
                  <Card.Title>Sales Revenue</Card.Title>
                  <div className="d-flex align-items-center flex-wrap gap-2">
                    <SpkDropdown
                      toggleas="button"
                      Customtoggleclass="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret"
                      Toggletext="Sort By"
                      Icon={true}
                      IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block"
                    >
                      <li>
                        <Dropdown.Item href="#!">New</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Popular</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                      </li>
                    </SpkDropdown>
                    <div>
                      {" "}
                      <SpkButton
                        Buttonvariant="light"
                        Customclass="btn border btn-sm"
                      >
                        Export<i className="ri-share-forward-line ms-1"></i>
                      </SpkButton>{" "}
                    </div>
                  </div>
                </Card.Header>
                <Card.Body className=" pb-0">
                  <div id="salesOverview">
                    <Spkapexcharts
                      chartOptions={SalesRevenueOptions}
                      chartSeries={SalesRevenueSeries}
                      type="line"
                      width={"100%"}
                      height={334}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4} xl={6}>
              <Card className="custom-card">
                <Card.Header className=" justify-content-between">
                  <Card.Title>Visitors By Device</Card.Title>
                  <SpkDropdown
                    toggleas="a"
                    Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret"
                    Toggletext="Sort By"
                    Icon={true}
                    IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block"
                  >
                    <li>
                      <Dropdown.Item href="#!">New</Dropdown.Item>
                    </li>
                    <li>
                      <Dropdown.Item href="#!">Popular</Dropdown.Item>
                    </li>
                    <li>
                      <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                    </li>
                  </SpkDropdown>
                </Card.Header>
                <Card.Body className=" p-0">
                  <div id="visitors-by-device">
                    <Spkapexcharts
                      chartOptions={VisitorsByDeviceOptions}
                      chartSeries={VisitorsByDeviceSeries}
                      type="donut"
                      width={"100%"}
                      height={253}
                    />
                  </div>
                  <div className="table-responsive border-top">
                    <SpkTables tableClass="table text-nowrap">
                      {VisitorsByDevice.map((data, index) => (
                        <tr key={index}>
                          <th
                            className={
                              index === VisitorsByDevice.length - 1
                                ? "border-bottom-0 rounded"
                                : ""
                            }
                          >
                            <div>
                              {" "}
                              <span className="d-block fw-semibold">
                                <i
                                  className={`ri-circle-line text-${data.color} me-2`}
                                ></i>
                                {data.devicetype}
                              </span>
                            </div>
                          </th>
                          <td
                            className={`text-center ${index === VisitorsByDevice.length - 1 ? "border-bottom-0 rounded" : ""}`}
                          >
                            <span
                              className={`text-${data.percentage.includes("1.57") ? "danger" : "primary"} fw-medium ms-1 d-inline-flex align-items-center`}
                            >
                              <i
                                className={`ti ti-arrow-narrow-${data.percentage.includes("1.57") ? "down" : "up"}`}
                              ></i>
                              {data.percentage}
                            </span>
                          </td>
                          <td
                            className={`text-center ${index === VisitorsByDevice.length - 1 ? "border-bottom-0 rounded" : ""}`}
                          >
                            <div className="fs-14 mb-0 fw-semibold">
                              {data.visiterscount}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </SpkTables>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4} xl={6}>
              <Card className="custom-card">
                <Card.Header className=" justify-content-between">
                  <Card.Title>Top Revenue Channels</Card.Title>
                  <Link
                    to="#!"
                    className="fs-12 text-muted fw-medium d-inline-flex align-items-center"
                  >
                    {" "}
                    View All
                    <i className="ti ti-arrow-narrow-right ms-1"></i>{" "}
                  </Link>
                </Card.Header>
                <Card.Body className=" pt-1">
                  <div className="progress-stacked progress-md mb-2 main-custom-progress">
                    <div
                      className="progress-bar progress-bar-striped me-1"
                      role="progressbar"
                      style={{ width: "16%" }}
                      aria-valuenow={16}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                    <div
                      className="progress-bar me-1 bg-secondary progress-bar-striped"
                      role="progressbar"
                      style={{ width: "24%" }}
                      aria-valuenow={24}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                    <div
                      className="progress-bar me-1 bg-danger progress-bar-striped"
                      role="progressbar"
                      style={{ width: "27%" }}
                      aria-valuenow={27}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                    <div
                      className="progress-bar me-1 bg-warning progress-bar-striped"
                      role="progressbar"
                      style={{ width: "15%" }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                    <div
                      className="progress-bar bg-info progress-bar-striped"
                      role="progressbar"
                      style={{ width: "18%" }}
                      aria-valuenow={18}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3 pt-1">
                    <div>Overall Adds</div>
                    <div className="fs-14 fw-semibold mb-0">
                      <span className="text-primary fw-normal me-2 fs-11">
                        2.74%<i className="ti ti-arrow-narrow-up"></i>
                      </span>
                      1,25,875
                    </div>
                  </div>
                  <ListGroup as="ul" className="mt-1">
                    {RevenueChannels.map((data) => (
                      <ListGroup.Item
                        as="li"
                        className="list-group-item"
                        key={data.id}
                      >
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="d-flex align-items-center gap-1">
                            <div className="lh-1">
                              <span
                                className={`avatar avatar-sm avatar-rounded bg-${data.color}-transparent`}
                              >
                                <i className={`ti ti-${data.icon} fs-18`}></i>
                              </span>
                            </div>
                            <div className="fw-semibold">
                              {data.channelname}
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-end gap-2">
                            <div className="fw-semibold">
                              {data.generatedincome}
                            </div>
                            <SpkBadge variant={`${data.color}-transparent`}>
                              {data.percentage}
                            </SpkBadge>
                          </div>
                        </div>
                        <div
                          className="progress progress-xs"
                          role="progressbar"
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className={`progress-bar bg-${data.color} progress-bar-striped`}
                            style={{ width: data.progress }}
                          ></div>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4} xl={6}>
              <Card className="custom-card overflow-hidden recent-transactions">
                <Card.Header className=" justify-content-between">
                  <Card.Title>Recent Transactions</Card.Title>
                  <Link
                    to="#!"
                    className="fs-12 text-muted fw-medium d-inline-flex align-items-center"
                  >
                    {" "}
                    View All
                    <i className="ti ti-arrow-narrow-right ms-1"></i>{" "}
                  </Link>
                </Card.Header>
                <Card.Body className=" p-0">
                  <div className="table-responsive">
                    <SpkTables tableClass="table text-nowrap custom-cardTable">
                      {RecentTransactions.map((data) => (
                        <tr key={data.id}>
                          <td>
                            <div className="d-flex align-items-start gap-2">
                              <div>
                                {" "}
                                <span
                                  className={`avatar avatar-md avatar-rounded bg-${data.color}-transparent`}
                                >
                                  <i className={`${data.icon} fs-20`}></i>
                                </span>{" "}
                              </div>
                              <div>
                                {" "}
                                <span className="d-block fw-semibold mb-0">
                                  {data.paymentmethod}
                                </span>
                                <span className="d-block fs-13 text-muted">
                                  {data.paymentmode}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end">
                            <div>
                              {" "}
                              <span className="d-block fw-semibold mb-1 fs-14">
                                {data.payamout}
                              </span>
                              <span className="d-block fs-13 text-muted">
                                {data.paydate}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </SpkTables>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4} xl={6}>
              <Card className="custom-card">
                <Card.Header className=" justify-content-between pb-0">
                  <Card.Title>Upcoming Sales</Card.Title>
                  <Link
                    to="#!"
                    className="fs-12 text-muted fw-medium d-inline-flex align-items-center"
                  >
                    {" "}
                    View All
                    <i className="ti ti-arrow-narrow-right ms-1"></i>{" "}
                  </Link>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled upcoming-sales-list">
                    {UpcomingSales.map((data) => (
                      <li key={data.id}>
                        <div className="d-flex align-items-center gap-3">
                          <div className="flex-fill upcoming-sales-date_time-area">
                            <span className="fs-12 text-muted fw-medium d-block">
                              {data.saledate}
                            </span>
                            <span className="fw-semibold d-block">
                              {data.saleyear}
                            </span>
                          </div>
                          <div className="px-3 py-2 w-75 border rounded ms-3">
                            <div className="fw-semibold mb-1">
                              <Link to="#!">{data.salename}</Link> -{" "}
                              <SpkBadge variant={`${data.color}-transparent`}>
                                {data.saleoffer}
                              </SpkBadge>
                            </div>
                            <div className="fs-12 text-muted fw-medium">
                              {data.salepalceandcustomers}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card overflow-hidden">
                <Card.Header className=" pb-2 justify-content-between">
                  <Card.Title>Recent Orders - {excelData.length}</Card.Title>
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    <div>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="Search Here"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    <SpkDropdown
                      toggleas="a"
                      Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret"
                      Toggletext="Sort By"
                      Icon={true}
                      IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block"
                    >
                      <li>
                        <Dropdown.Item href="#!">New</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Popular</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                      </li>
                    </SpkDropdown>
                  </div>
                </Card.Header>
                <Card.Body className=" p-0">
                  <div className="table-responsive">
                    <SpkTables
                      tableClass="table text-nowrap table-hover"
                      header={[
                        { title: "Ordered Date" },
                        { title: "Particular" },
                        {
                          title: "VCH Type",
                          headerClassname: "text-center",
                        },
                        { title: "VCH #" },
                        { title: "Debit" },
                        { title: "Credit" },
                        { title: "Actions" },
                      ]}
                    >
                      {excelData.map((data, index) => (
                        <tr key={index}>
                          {/* Customer */}

                          {/* Date */}
                          <td>
                            <span className="fw-semibold">
                              {data.date && moment(data.date).isValid()
                                ? moment(data.date).format(
                                    "DD MMM YYYY, hh:mm A",
                                  )
                                : ""}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="ms-2">
                                <p className="fw-semibold fs-13 mb-0">
                                  <Link to="#!">{data.party}</Link>
                                </p>
                              </div>
                            </div>
                          </td>
                          {/* Type */}
                          <td className="text-center">{data.type}</td>

                          <td className="text-center">{data.number}</td>
                          <td className="text-center">{data.debit}</td>
                          <td className="text-end">
                            {" "}
                            {data.credit.toFixed(2)}
                          </td>
                          <td>
                            <div className="btn-list">
                              <SpkTooltips placement="top" title="View">
                                <SpkButton
                                  Buttonvariant="primary-light"
                                  Customclass="btn btn-icon btn-sm"
                                >
                                  <i className="ri-eye-line"></i>
                                </SpkButton>
                              </SpkTooltips>
                              <SpkTooltips placement="top" title="Download">
                                <SpkButton
                                  Buttonvariant="danger-light"
                                  Customclass="btn btn-icon btn-sm"
                                >
                                  <i className="ri-download-2-line"></i>
                                </SpkButton>
                              </SpkTooltips>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </SpkTables>
                  </div>
                </Card.Body>
                <Card.Footer className="border-top-0">
                  <div className="d-flex align-items-center">
                    <div>
                      {" "}
                      Showing 5 Entries{" "}
                      <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                    </div>
                    <div className="ms-auto">
                      <nav
                        aria-label="Page navigation"
                        className="pagination-style-4"
                      >
                        <ul className="pagination mb-0">
                          <li className="page-item disabled">
                            {" "}
                            <Link className="page-link" to="#!">
                              {" "}
                              Prev{" "}
                            </Link>{" "}
                          </li>
                          <li className="page-item active">
                            <Link className="page-link" to="#!">
                              1
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#!">
                              2
                            </Link>
                          </li>
                          <li className="page-item">
                            {" "}
                            <Link className="page-link text-primary" to="#!">
                              {" "}
                              next{" "}
                            </Link>{" "}
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card overflow-hidden">
                {/* HEADER */}
                <Card.Header className="pb-2 justify-content-between">
                  <Card.Title>
                    Dynamic Header - {dyanmicaContent.length}
                  </Card.Title>

                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    <div>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="Search Here"
                      />
                    </div>

                    <Dropdown>
                      <Dropdown.Toggle className="btn btn-primary btn-sm btn-wave waves-effect waves-light">
                        Sort By
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>New</Dropdown.Item>
                        <Dropdown.Item>Popular</Dropdown.Item>
                        <Dropdown.Item>Relevant</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Header>

                {/* BODY */}
                <Card.Body className="p-0">
                  <div className="table-responsive">
                    <table className="table text-nowrap table-hover">
                      {/* Dynamic Header */}
                      <thead>
                        <tr>
                          {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                          ))}
                          <th>Actions</th>
                        </tr>
                      </thead>

                      {/* Dynamic Rows */}
                      <tbody>
                        {dyanmicaContent.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {headers.map((key, colIndex) => (
                              <td key={colIndex}>{row[key]}</td>
                            ))}

                            {/* Actions */}
                            <td>
                              <div className="btn-list">
                                <button className="btn btn-icon btn-sm btn-primary-light">
                                  <i className="ri-eye-line"></i>
                                </button>

                                <button className="btn btn-icon btn-sm btn-danger-light">
                                  <i className="ri-download-2-line"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card.Body>

                {/* FOOTER */}
                <Card.Footer className="border-top-0">
                  <div className="d-flex align-items-center">
                    <div>Showing {excelData.length} Entries</div>

                    <div className="ms-auto">
                      <nav className="pagination-style-4">
                        <ul className="pagination mb-0">
                          <li className="page-item disabled">
                            <Link className="page-link" to="#!">
                              Prev
                            </Link>
                          </li>

                          <li className="page-item active">
                            <Link className="page-link" to="#!">
                              1
                            </Link>
                          </li>

                          <li className="page-item">
                            <Link className="page-link" to="#!">
                              2
                            </Link>
                          </li>

                          <li className="page-item">
                            <Link className="page-link text-primary" to="#!">
                              Next
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>

            <Col xl={12}>
              <Card className="custom-card overflow-hidden">
                <Card.Header className=" pb-2 justify-content-between">
                  <Card.Title>Recent Orders</Card.Title>
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    <div>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="Search Here"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    <SpkDropdown
                      toggleas="a"
                      Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret"
                      Toggletext="Sort By"
                      Icon={true}
                      IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block"
                    >
                      <li>
                        <Dropdown.Item href="#!">New</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Popular</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                      </li>
                    </SpkDropdown>
                  </div>
                </Card.Header>
                <Card.Body className=" p-0">
                  <div className="table-responsive">
                    <SpkTables
                      tableClass="table text-nowrap table-hover"
                      header={[
                        { title: "Particular" },
                        { title: "Ordered Date" },
                        {
                          title: "Total Items",
                          headerClassname: "text-center",
                        },
                        { title: "Status" },
                        { title: "Total Amount" },
                        { title: "Payment Method" },
                        { title: "Actions" },
                      ]}
                    >
                      {RecentOrders.map((data) => (
                        <tr key={data.id}>
                          <td>
                            <div className="d-flex">
                              <span className="avatar avatar-md">
                                <img src={data.image} className="" alt="..." />
                              </span>
                              <div className="ms-2">
                                <p className="fw-semibold fs-13 mb-0 d-flex align-items-center">
                                  <Link to="#!">{data.ordereditem}</Link>
                                </p>
                                <p className="fs-12 text-muted mb-0">
                                  {data.orderedbrand}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="fw-semibold d-block">
                              {data.ordereddate}
                            </span>
                            <span className="fs-12 text-muted">
                              {data.orderedtime}
                            </span>
                          </td>
                          <td className="text-center">{data.totalitems}</td>
                          <td>
                            <SpkBadge
                              variant={`${data.statusclass}-transparent`}
                            >
                              {data.status}
                            </SpkBadge>
                          </td>
                          <td>{data.totalamount}</td>
                          <td>
                            <div>
                              <i className="ri-bank-card-line me-1 fs-14"></i>
                              {data.paymentmethod}
                            </div>
                            <div className="fs-12 text-muted">
                              {data.paymentmethoddetails}
                            </div>
                          </td>
                          <td>
                            <div className="btn-list">
                              <SpkTooltips placement="top" title="View">
                                <SpkButton
                                  Buttonvariant="primary-light"
                                  Customclass="btn btn-icon btn-sm"
                                >
                                  <i className="ri-eye-line"></i>
                                </SpkButton>
                              </SpkTooltips>
                              <SpkTooltips placement="top" title="Download">
                                <SpkButton
                                  Buttonvariant="danger-light"
                                  Customclass="btn btn-icon btn-sm"
                                >
                                  <i className="ri-download-2-line"></i>
                                </SpkButton>
                              </SpkTooltips>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </SpkTables>
                  </div>
                </Card.Body>
                <Card.Footer className="border-top-0">
                  <div className="d-flex align-items-center">
                    <div>
                      {" "}
                      Showing 5 Entries{" "}
                      <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                    </div>
                    <div className="ms-auto">
                      <nav
                        aria-label="Page navigation"
                        className="pagination-style-4"
                      >
                        <ul className="pagination mb-0">
                          <li className="page-item disabled">
                            {" "}
                            <Link className="page-link" to="#!">
                              {" "}
                              Prev{" "}
                            </Link>{" "}
                          </li>
                          <li className="page-item active">
                            <Link className="page-link" to="#!">
                              1
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#!">
                              2
                            </Link>
                          </li>
                          <li className="page-item">
                            {" "}
                            <Link className="page-link text-primary" to="#!">
                              {" "}
                              next{" "}
                            </Link>{" "}
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={3}>
          <Row>
            <Col xl={12}></Col>

            <Col xl={12}>
              <Card className="custom-card browser-activity">
                <Card.Header className=" pb-2 justify-content-between">
                  <Card.Title>Browser Activity</Card.Title>
                  <Link
                    to="#!"
                    className="fs-12 text-muted fw-medium d-inline-flex align-items-center"
                  >
                    {" "}
                    View All
                    <i className="ti ti-arrow-narrow-right ms-1"></i>{" "}
                  </Link>
                </Card.Header>
                <Card.Body className=" p-0">
                  <div className="table-responsive">
                    <SpkTables
                      tableClass="table text-nowrap"
                      header={[
                        { title: "Browser" },
                        { title: "Sessions", headerClassname: "text-center" },
                        {
                          title: "Bounce Rate",
                          headerClassname: "text-center",
                        },
                      ]}
                    >
                      {BrowserActivity.map((data, index) => (
                        <tr key={data.id}>
                          <th
                            className={`${index === BrowserActivity.length - 1 ? "border-bottom-0 rounded" : ""}`}
                          >
                            <div className="d-flex align-items-center gap-2">
                              <div>
                                <span className="avatar avatar-rounded avatar-md p-1 bg-light border border-warning border-opacity-10">
                                  <img src={data.src} alt="" />
                                </span>
                              </div>
                              <div>
                                <span className="fw-medium">
                                  {data.browsername}
                                </span>
                                <span className="d-block text-muted fs-12">
                                  {data.company}
                                </span>
                              </div>
                            </div>
                          </th>
                          <td
                            className={`text-center ${index === BrowserActivity.length - 1 ? "border-bottom-0 rounded" : ""}`}
                          >
                            {data.session}
                          </td>
                          <td
                            className={`text-center ${index === BrowserActivity.length - 1 ? "border-bottom-0 rounded" : ""}`}
                          >
                            {data.bouncerate}
                          </td>
                        </tr>
                      ))}
                    </SpkTables>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Header className=" pb-2 justify-content-between">
                  <Card.Title>Top Categories By Sales</Card.Title>
                  <Link
                    to="#!"
                    className="fs-12 text-muted fw-medium d-inline-flex align-items-center"
                  >
                    {" "}
                    View All
                    <i className="ti ti-arrow-narrow-right ms-1"></i>{" "}
                  </Link>
                </Card.Header>
                <Card.Body>
                  <div className="row gy-4">
                    {TopCategoriesBySales.map((data) => (
                      <div className="col-xl-6" key={data.id}>
                        <div className="p-3 border border-dashed rounded main-custom-card">
                          <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                            <div className="lh-1">
                              <span
                                className={`avatar avatar-md ${data.iconClass}`}
                              >
                                {data.svg}
                              </span>
                            </div>
                            <div>
                              <span className="d-block fs-12">
                                {data.category}
                              </span>
                              <p className="fw-semibold fs-15 mb-0">
                                {data.totalsales}
                              </p>
                            </div>
                          </div>
                          <div className="fs-12 text-muted">
                            {data.increasedBy.includes("7.45")
                              ? "Decreased"
                              : "Increased"}{" "}
                            By{" "}
                            <span
                              className={`text-${data.increasedBy.includes("7.45") ? "danger" : "primary"} ms-1`}
                            >
                              {data.increasedBy}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card overflow-hidden audiencelocations">
                <Card.Header className=" justify-content-between mb-1">
                  <Card.Title>Top Audience Locations</Card.Title>
                  <Link
                    to="#!"
                    className="fs-12 text-muted fw-medium d-inline-flex align-items-center"
                  >
                    {" "}
                    View All
                    <i className="ti ti-arrow-narrow-right ms-1"></i>{" "}
                  </Link>
                </Card.Header>
                <Card.Body className=" p-0">
                  <div className="table-responsive">
                    <SpkTables tableClass="table text-nowrap">
                      {TopAudienceLocations.map((data) => (
                        <tr key={data.id}>
                          <td className={data.borderClass}>
                            <div className="d-flex align-items-start gap-2">
                              <div>
                                {" "}
                                <span className="avatar avatar-md avatar-rounded bg-light border">
                                  <span className="avatar avatar-xs avatar-rounded">
                                    <img src={data.image} alt="" />
                                  </span>
                                </span>{" "}
                              </div>
                              <div>
                                {" "}
                                <span className="d-block fw-semibold mb-0">
                                  {data.countryname}
                                </span>{" "}
                                <span className="d-block fs-13 text-muted">
                                  {data.populationpercentage}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className={data.borderClass}>
                            <span
                              className={`text-${data.viewerspercenttagecolor} ms-2 fs-13 fw-medium`}
                            >
                              <i
                                className={`ri-arrow-${data.viewerspercenttagecolor === "primary" ? "up" : "down"}-line`}
                              ></i>
                              {data.viewerspercentage}
                            </span>
                          </td>
                          <td className={`text-end ${data.borderClass}`}>
                            <div>
                              <span className="d-block fw-semibold mb-0">
                                {data.totalviewers}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </SpkTables>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!-- End:: row-1 --> */}
    </Fragment>
  );
};

export default Sales;
