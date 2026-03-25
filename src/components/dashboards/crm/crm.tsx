import { Fragment, useState } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import SpkDatepickr from "../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import "./crm.css";

const initialData = [
  {
    id: 1,
    firm: "",
    file: null,
    proposalNumber: "V242502001",
    proposalDate: "02/04/24",
    customer: "Vinnovative GmbH",
    leadGenerator: "",
    projectDetails: "20381 ET MRA1 MFA Package 03",
    department: "",
    hours: 800,
    businessUnit: "",
    status: "",
  },
  {
    id: 2,
    firm: "",
    file: null,
    proposalNumber: "V242502002",
    proposalDate: "05/04/24",
    customer: "iRob International",
    leadGenerator: "",
    projectDetails: "IR056589 BS1 L461 Staubli Approval",
    department: "",
    hours: 152,
    businessUnit: "",
    status: "",
  },
];

const Crm = () => {
  const [data, setData] = useState(initialData);
  const [dates, setDates] = useState<{ [key: string]: Date | string | null }>(
    {},
  );
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const dropdownOptions = {
    firm: ["Vinnovative India", "Vinnovative GmbH", "Vinnovative LLC"],
    leadGenerator: ["Vijay", "Guru", "Santhosh", "Ashok", "Chandan"],
    department: [
      "Design Engineering",
      "Robotics Simulation",
      "Manufacturing",
      "Control Engineering",
    ],
    businessUnit: ["BU1", "BU2", "BU3", "BU4", "BU5"],
    status: ["Approved", "Pending", "Rejected"],
  };
  const [invoiceData, setInvoiceData] = useState([
    {
      id: 1,
      invoiceNumber: "V224251020",
      invoiceValue: "",
      conversionRate: "",
      invoiceValueINR: "",
      paymentTerm: "30",
      file: null,
    },
    {
      id: 2,
      invoiceNumber: "V224251001",
      invoiceValue: "",
      conversionRate: "",
      invoiceValueINR: "",
      paymentTerm: "30",
      file: null,
    },
  ]);
  const [paymentData, setPaymentData] = useState([
    {
      id: 1,
      valueReceived: "₹ 1,480,000.00",
      paymentStatus: "Received",
      fluctuation: "₹ 252,600.00",
      comments: "",
    },
    {
      id: 2,
      valueReceived: "₹ 239,400.00",
      paymentStatus: "Received",
      fluctuation: "₹ 9,120.00",
      comments: "",
    },
    {
      id: 3,
      valueReceived: "13,000 €",
      paymentStatus: "Received",
      fluctuation: "0.00 €",
      comments: "",
    },
  ]);
  // ------------------ FILTER LOGIC ------------------
  const filteredData = data.filter((row) => {
    const matchesSearch = Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilters = Object.keys(filters).every((key) => {
      if (!filters[key]) return true;
      return row[key] === filters[key];
    });

    return matchesSearch && matchesFilters;
  });
  // ------------------ UPDATE CELL ------------------
  const updateRow = (id, field, value) => {
    const updated = data.map((item) =>
      item.id === id ? { ...item, [field]: value } : item,
    );
    setData(updated);
  };

  const handleDateChange = (key: string, date: Date | null) => {
    const formatted = date
      ? date.toISOString().split("T")[0] // YYYY-MM-DD
      : null;

    setDates((prev) => ({
      ...prev,
      [key]: formatted,
    }));
  };

  return (
    <Fragment>
      {/* <!-- Start::page-header --> */}
      <Seo title={"Revenue"} />

      <Pageheader
        title="Dashboard"
        currentpage="Revenue"
        activepage="Revenue"
      />

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="pb-2 justify-content-between table-toolbar">
              <Card.Title>Responsible BU Head</Card.Title>
               <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
            </Card.Header>

            <Card.Body>
              
              <div className="table-responsive app-table-wrapper">
                <table className="table table-bordered table-hover app-table">
                  <thead className="table-primary">
                    <tr>
                      <th>ID</th>
                      <th>Firm</th>
                      <th>Proposal No</th>
                      <th>Date</th>
                      <th>Customer</th>
                      <th>Lead Generator</th>
                      <th>Project Details</th>
                      <th>Department</th>
                      <th>Hours</th>
                      <th>Business Unit</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredData.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>

                        {/* Firm Dropdown */}
                        <td>
                          <select
                            className="form-select"
                            value={row.firm}
                            onChange={(e) =>
                              updateRow(row.id, "firm", e.target.value)
                            }
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.firm.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        <td>
                          {row.proposalNumber}

                          <div className="file-upload-cell">
                            {/* Upload Button */}
                            <label className="upload-btn">
                              Upload
                              <input
                                type="file"
                                hidden
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  if (!file) return;

                                  updateRow(row.id, "file", file);
                                }}
                              />
                            </label>

                            {/* File Info + Remove */}
                            {row.file && (
                              <div className="file-info">
                                <div className="file-top">
                                  <span className="file-name">
                                    📄 {row.file.name}
                                  </span>

                                  {/* ❌ Remove Button */}
                                  <button
                                    className="remove-file-btn"
                                    onClick={() =>
                                      updateRow(row.id, "file", null)
                                    }
                                  >
                                    ✕
                                  </button>
                                </div>

                                <span className="file-size">
                                  {(row.file.size / 1024).toFixed(1)} KB
                                </span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td>{row.proposalDate}</td>

                        {/* Customer Free Entry */}
                        <td>
                          <input
                            className="form-control"
                            value={row.customer}
                            onChange={(e) =>
                              updateRow(row.id, "customer", e.target.value)
                            }
                          />
                        </td>

                        {/* Lead Generator Dropdown */}
                        <td>
                          <select
                            className="form-select"
                            value={row.leadGenerator}
                            onChange={(e) =>
                              updateRow(row.id, "leadGenerator", e.target.value)
                            }
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.leadGenerator.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        {/* Project Details Free Entry */}
                        <td>
                          <input
                            className="form-control"
                            value={row.projectDetails}
                            onChange={(e) =>
                              updateRow(
                                row.id,
                                "projectDetails",
                                e.target.value,
                              )
                            }
                          />
                        </td>

                        {/* Department Dropdown */}
                        <td>
                          <select
                            className="form-select"
                            value={row.department}
                            onChange={(e) =>
                              updateRow(row.id, "department", e.target.value)
                            }
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.department.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        {/* Hours Free Entry */}
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={row.hours}
                            onChange={(e) =>
                              updateRow(row.id, "hours", e.target.value)
                            }
                          />
                        </td>

                        {/* BU Dropdown */}
                        <td>
                          <select
                            className="form-select"
                            value={row.businessUnit}
                            onChange={(e) =>
                              updateRow(row.id, "businessUnit", e.target.value)
                            }
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.businessUnit.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        {/* Status Dropdown */}
                        <td>
                          <select
                            className="form-select"
                            value={row.status}
                            onChange={(e) =>
                              updateRow(row.id, "status", e.target.value)
                            }
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.status.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="pb-2 justify-content-between table-toolbar">
              <Card.Title>Responsible BU Head and Chandan</Card.Title>
               <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
            </Card.Header>

            <Card.Body>
            
              <div className="app-table-wrapper">
                <table className="table table-bordered app-table">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Order No</th>
                      <th>Order Date</th>
                      <th>Order Value</th>
                      <th>Order Value (INR)</th>
                      <th>Invoice Milestones</th>
                      <th>Invoice Number</th>
                      <th>Attachment</th> {/* ✅ Separate column */}
                    </tr>
                  </thead>

                  <tbody>
                    {filteredData.map((row) => (
                      <tr key={row.id}>
                        {/* STATUS DROPDOWN */}
                        <td>
                          <select
                            className="form-select"
                            value={row.status || ""}
                            onChange={(e) =>
                              updateRow(row.id, "status", e.target.value)
                            }
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.status.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        <td>{row.orderNo}</td>

                        <td>
                          <SpkDatepickr
                            className="form-control"
                            dateFormat="yy/MM/dd"
                            selected={
                              dates[`orderDate_${row.id}`]
                                ? new Date(dates[`orderDate_${row.id}`])
                                : null
                            }
                            onChange={(date) =>
                              handleDateChange(`orderDate_${row.id}`, date)
                            }
                            placeholderText="Choose date"
                            popperPlacement="bottom-start"
                          />
                        </td>

                        <td>
                          <input
                            className="form-control"
                            value={row.orderValue}
                            onChange={(e) =>
                              updateRow(row.id, "orderValue", e.target.value)
                            }
                          />
                        </td>

                        <td>
                          <input
                            className="form-control"
                            value={row.orderValueINR}
                            onChange={(e) =>
                              updateRow(row.id, "orderValueINR", e.target.value)
                            }
                          />
                        </td>

                        <td>
                          <input
                            className="form-control"
                            value={row.invoiceMilestones}
                            onChange={(e) =>
                              updateRow(
                                row.id,
                                "invoiceMilestones",
                                e.target.value,
                              )
                            }
                          />
                        </td>

                        <td>
                          <input
                            className="form-control"
                            value={row.invoiceNumber}
                            onChange={(e) =>
                              updateRow(row.id, "invoiceNumber", e.target.value)
                            }
                          />
                        </td>

                        {/* 📎 FILE UPLOAD COLUMN */}
                        <td>
                          <div className="file-upload-cell">
                            <label className="upload-btn">
                              {row.file ? "Replace" : "Upload"}
                              <input
                                type="file"
                                hidden
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  if (!file) return;
                                  updateRow(row.id, "file", file);
                                }}
                              />
                            </label>

                            {row.file && (
                              <div className="file-info">
                                <div className="file-top">
                                  <span className="file-name">
                                    📄 {row.file.name}
                                  </span>

                                  <button
                                    className="remove-file-btn"
                                    onClick={() =>
                                      updateRow(row.id, "file", null)
                                    }
                                  >
                                    ✕
                                  </button>
                                </div>

                                <span className="file-size">
                                  {(row.file.size / 1024).toFixed(1)} KB
                                </span>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="pb-2 justify-content-between table-toolbar">
              <Card.Title>Responsible Accounts</Card.Title>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </Card.Header>
            <Card.Body>
              {/* 📊 TABLE */}
              <div className="app-table-wrapper">
                <table className="table table-bordered app-table">
                  {/* 🔷 HEADER */}
                  <thead>
                    <tr>
                      <th>Invoice Number</th>
                      <th>Invoice Date</th>
                      <th>Invoice Value</th>
                      <th>Conversion Rate</th>
                      <th>Invoice Value (INR)</th>
                      <th>Payment Term</th>
                      <th>Due Date</th>
                    </tr>
                  </thead>

                  {/* 🔹 BODY */}
                  <tbody>
                    {invoiceData.map((row) => (
                      <tr key={row.id}>
                        {/* Invoice Number */}
                        <td>
                          <input
                            className="form-control"
                            value={row.invoiceNumber}
                            onChange={(e) =>
                              updateRow(row.id, "invoiceNumber", e.target.value)
                            }
                          />
                        </td>

                        {/* Date */}
                        <td>
                          <SpkDatepickr
                            className="form-control"
                            dateFormat="yy/MM/dd"
                            selected={
                              dates[`invDate_${row.id}`]
                                ? new Date(dates[`invDate_${row.id}`])
                                : null
                            }
                            onChange={(date) =>
                              handleDateChange(`invDate_${row.id}`, date)
                            }
                            placeholderText="Choose date"
                            popperPlacement="bottom-start"
                          />
                        </td>

                        {/* Value */}
                        <td>
                          <input
                            className="form-control"
                            placeholder="€, £, ₹"
                            value={row.invoiceValue}
                            onChange={(e) =>
                              updateRow(row.id, "invoiceValue", e.target.value)
                            }
                          />
                        </td>

                        {/* Conversion */}
                        <td>
                          <input
                            className="form-control"
                            value={row.conversionRate}
                            onChange={(e) =>
                              updateRow(
                                row.id,
                                "conversionRate",
                                e.target.value,
                              )
                            }
                          />
                        </td>

                        {/* INR */}
                        <td>
                          <input
                            className="form-control"
                            value={row.invoiceValueINR}
                            readOnly
                          />
                        </td>

                        {/* Payment */}
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={row.paymentTerm}
                            onChange={(e) =>
                              updateRow(row.id, "paymentTerm", e.target.value)
                            }
                          />
                        </td>

                        {/* FILE */}
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="pb-2 justify-content-between able-toolbar">
              <Card.Title>Responsible Accounts</Card.Title>
               <div className="search-box">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </Card.Header>
            

            <Card.Body>
              {/* 📊 TABLE */}
              <div className="table-responsive app-table-wrapper">
                <table className="table table-bordered table-hover app-table">
                  {/* 🔷 HEADER */}
                  <thead className="table-primary">
                    <tr>
                      <th>Value Received</th>
                      <th>Realised Date</th>
                      <th>Payment Status</th>
                      <th>Fluctuation Difference</th>
                      <th>Comments</th>
                    </tr>
                  </thead>

                  {/* 🔹 BODY */}
                  <tbody>
                    {paymentData.map((row) => (
                      <tr key={row.id}>
                        {/* VALUE RECEIVED */}
                        <td>
                          <input
                            className="form-control"
                            value={row.valueReceived}
                            onChange={(e) =>
                              updatePaymentRow(
                                row.id,
                                "valueReceived",
                                e.target.value,
                              )
                            }
                          />
                        </td>

                        {/* DATE */}
                        <td>
                          <SpkDatepickr
                            className="form-control"
                            dateFormat="yy/MM/dd"
                            selected={
                              dates[`realised_${row.id}`]
                                ? new Date(dates[`realised_${row.id}`])
                                : null
                            }
                            onChange={(date) =>
                              handleDateChange(`realised_${row.id}`, date)
                            }
                            placeholderText="Choose date"
                          />
                        </td>

                        {/* STATUS DROPDOWN */}
                        <td>
                          <select
                            className="form-select"
                            value={row.paymentStatus || ""}
                            onChange={(e) =>
                              updatePaymentRow(
                                row.id,
                                "paymentStatus",
                                e.target.value,
                              )
                            }
                          >
                            <option value="">Select All</option>
                            <option>Received</option>
                            <option>Pending</option>
                            <option>Cancelled</option>
                            <option>On Hold</option>
                            <option>Partially Paid</option>
                            <option>Extra Paid</option>
                            <option>Credit Note Issued</option>
                            <option>Advance Received</option>
                            <option>Reversed</option>
                          </select>
                        </td>

                        {/* FLUCTUATION */}
                        <td>
                          <input
                            className="form-control"
                            value={row.fluctuation}
                            onChange={(e) =>
                              updatePaymentRow(
                                row.id,
                                "fluctuation",
                                e.target.value,
                              )
                            }
                          />
                        </td>

                        {/* COMMENTS */}
                        <td>
                          <input
                            className="form-control"
                            value={row.comments}
                            onChange={(e) =>
                              updatePaymentRow(
                                row.id,
                                "comments",
                                e.target.value,
                              )
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Crm;
