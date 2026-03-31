import { Fragment, useState, useRef } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import {
  Card,
  Col,
  Row,
  OverlayTrigger,
  Popover,
  Button,
  Form,
} from "react-bootstrap";
import SpkDatepickr from "../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import "./crm.css";

// ─── Types ───────────────────────────────────────────────────────────────────

interface OfferRow {
  id: number;
  firm: string;
  file: File | null;
  proposalNumber: string;
  proposalDate: string;
  customer: string;
  leadGenerator: string;
  projectDetails: string;
  department: string;
  hours: number | string;
  businessUnit: string;
  status: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const createEmptyOfferRow = (id: number): OfferRow => ({
  id,
  firm: "",
  file: null,
  proposalNumber: `V24250${String(id).padStart(4, "0")}`,
  proposalDate: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }),
  customer: "",
  leadGenerator: "",
  projectDetails: "",
  department: "",
  hours: "",
  businessUnit: "",
  status: "",
});

// ─── Initial Data ─────────────────────────────────────────────────────────────

const initialData: OfferRow[] = [
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

// ─── Component ────────────────────────────────────────────────────────────────

const Crm = () => {
  const [data, setData] = useState<OfferRow[]>(initialData);
  const [dates, setDates] = useState<{ [key: string]: Date | string | null }>({});
  const [search, setSearch] = useState("");
  const [submittedJSON, setSubmittedJSON] = useState<OfferRow[] | null>(null);

  const dropdownOptions = {
    firm: ["Vinnovative India", "Vinnovative GmbH", "Vinnovative LLC"],
    leadGenerator: ["Vijay", "Guru", "Santhosh", "Ashok", "Chandan"],
    department: [
      "Design Engineering",
      "Robotics Simulation",
      "Manufacturing",
      "Control Engineering",
      "Staffing Engineering",
      "IT",
      "Plant Support",
      "Onsite Support",
      "Tech Pub",
      "Documentation",
      "NPD",
      "Aerospace",
      "Design team",
      "Simulation team",
      "Company",
    ],
    businessUnit: [
      "Management BU1",
      "Company BU2",
      "Vijay BU3",
      "Guru BU4",
      "Santhosh BU5",
      "Ashok BU6",
      "Design team BU7",
      "Simulation team BU8",
    ],
    status: ["Approved", "Pending", "Rejected"],
    currecny: ["INR", "USD", "EURO", "GBP", "Chinese Yuan", "Japanese Yen"],
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

  // ─── Filter ───────────────────────────────────────────────────────────────

  const filteredData = data.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // ─── Update Helpers ───────────────────────────────────────────────────────

  const updateRow = (id: number, field: string, value: any) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const updateInvoiceRow = (id: number, field: string, value: any) => {
    setInvoiceData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const updatePaymentRow = (id: number, field: string, value: any) => {
    setPaymentData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleDateChange = (key: string, date: Date | null) => {
    const formatted = date ? date.toISOString().split("T")[0] : null;
    setDates((prev) => ({ ...prev, [key]: formatted }));
  };

  // ─── Add Row ──────────────────────────────────────────────────────────────

  const addNewRow = () => {
    const newId = data.length > 0 ? Math.max(...data.map((r) => r.id)) + 1 : 1;
    setData((prev) => [...prev, createEmptyOfferRow(newId)]);
  };

  // ─── Submit ───────────────────────────────────────────────────────────────

  const handleSubmit = () => {
    // Serialize rows (exclude non-serializable File object)
    const payload = data.map(({ file, ...rest }) => ({
      ...rest,
      fileName: file ? file.name : null,
      fileSize: file ? `${(file.size / 1024).toFixed(1)} KB` : null,
    }));
    setSubmittedJSON(payload as any);
  };

  // ─── Invoice Milestone Cell ───────────────────────────────────────────────

  function InvoiceMilestoneCell({ row, updateRow }: { row: any; updateRow: any }) {
    const [tempValue, setTempValue] = useState(row.invoiceMilestone ?? "");
    const overlayRef = useRef<any>(null);

    return (
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        rootClose
        ref={overlayRef}
        onToggle={(show) => { if (show) setTempValue(row.invoiceMilestone ?? ""); }}
        overlay={
          <Popover>
            <Popover.Header as="h3">Edit Invoice Milestone</Popover.Header>
            <Popover.Body>
              <Form.Control
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                autoFocus
              />
              <Button
                size="sm"
                className="mt-2 w-100"
                onClick={() => {
                  updateRow(row.id, "invoiceMilestone", tempValue);
                  overlayRef.current?.hide();
                }}
              >
                Save
              </Button>
            </Popover.Body>
          </Popover>
        }
      >
        <Form.Control
          value={row.invoiceMilestone ?? ""}
          readOnly
          placeholder="Click to edit..."
          style={{ cursor: "pointer" }}
        />
      </OverlayTrigger>
    );
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <Fragment>
      <Seo title={"Revenue"} />
      <Pageheader title="Dashboard" currentpage="Revenue" activepage="Revenue" />

      {/* ══════════════════════════════════════════════════════════════════════
          OFFER DETAILS
      ══════════════════════════════════════════════════════════════════════ */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="pb-2 justify-content-between table-toolbar">
              <Card.Title>OFFER DETAILS</Card.Title>
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
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredData.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>

                        {/* Firm */}
                        <td>
                          <select
                            className="form-select"
                            value={row.firm}
                            onChange={(e) => updateRow(row.id, "firm", e.target.value)}
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.firm.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        {/* Proposal No + File Upload */}
                        <td>
                           <input
                            className="form-control"
                            value={row.proposalNumber}
                            onChange={(e) => updateRow(row.id, "customer", e.target.value)}
                          />
                          <div className="file-upload-cell">
                            <label className="upload-btn">
                              Upload
                              <input
                                type="file"
                                hidden
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  updateRow(row.id, "file", file);
                                }}
                              />
                            </label>
                            {row.file && (
                              <div className="file-info">
                                <div className="file-top">
                                  <span className="file-name">📄 {row.file.name}</span>
                                  <button
                                    className="remove-file-btn"
                                    onClick={() => updateRow(row.id, "file", null)}
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

                        {/* Date */}
                        <td>
                         <SpkDatepickr
                            className="form-control"
                            dateFormat="yy/MM/dd"
                            selected={dates[`orderDate_${row.id}`] ? new Date(dates[`orderDate_${row.id}`] as string) : null}
                            onChange={(date: Date | null) => handleDateChange(`orderDate_${row.id}`, date)}
                            placeholderText="Choose date"
                            popperPlacement="bottom-start"/>
                            </td>
                        {/* Customer */}
                        <td>
                          <input
                            className="form-control"
                            value={row.customer}
                            onChange={(e) => updateRow(row.id, "customer", e.target.value)}
                          />
                        </td>

                        {/* Lead Generator */}
                        <td>
                          <select
                            className="form-select"
                            value={row.leadGenerator}
                            onChange={(e) => updateRow(row.id, "leadGenerator", e.target.value)}
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.leadGenerator.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        {/* Project Details */}
                        <td>
                          <input
                            className="form-control"
                            value={row.projectDetails}
                            onChange={(e) => updateRow(row.id, "projectDetails", e.target.value)}
                          />
                        </td>

                        {/* Department */}
                        <td>
                          <select
                            className="form-select"
                            value={row.department}
                            onChange={(e) => updateRow(row.id, "department", e.target.value)}
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.department.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        {/* Hours */}
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={row.hours}
                            onChange={(e) => updateRow(row.id, "hours", e.target.value)}
                          />
                        </td>

                        {/* Business Unit */}
                        <td>
                          <select
                            className="form-select"
                            value={row.businessUnit}
                            onChange={(e) => updateRow(row.id, "businessUnit", e.target.value)}
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.businessUnit.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        {/* Status */}
                        <td>
                          <select
                            className="form-select"
                            value={row.status}
                            onChange={(e) => updateRow(row.id, "status", e.target.value)}
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.status.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        {/* ✅ Actions */}
                        <td className="text-center">
                          <button
                            className="btn btn-primary btn-sm"
                            style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ✅ Add Row + Submit All Row */}
              <div className="d-flex align-items-center justify-content-between mt-3">
                <button
                  className="add-row-btn"
                  onClick={addNewRow}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    fontWeight: 500,
                    border: "1.5px dashed #6c757d",
                    borderRadius: "6px",
                    background: "transparent",
                    color: "#495057",
                    padding: "6px 16px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#0d6efd";
                    (e.currentTarget as HTMLButtonElement).style.color = "#0d6efd";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#6c757d";
                    (e.currentTarget as HTMLButtonElement).style.color = "#495057";
                  }}
                >
                  <span style={{ fontSize: "18px", lineHeight: 1 }}>+</span>
                  Add Row
                </button>

                <button
                  className="btn btn-success btn-sm px-4"
                  onClick={handleSubmit}
                >
                  Submit All
                </button>
              </div>

              {/* ✅ JSON Output Table */}
              {submittedJSON && (
                <div className="mt-4">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="mb-0 fw-semibold text-success">
                      ✓ Submitted Data
                    </h6>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => setSubmittedJSON(null)}
                    >
                      Clear
                    </button>
                  </div>

                  {/* JSON Table */}
                  <div
                    className="table-responsive"
                    style={{
                      border: "1px solid #d1e7dd",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <table className="table table-sm table-bordered mb-0" style={{ fontSize: "12px" }}>
                      <thead style={{ background: "#d1e7dd" }}>
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
                          <th>File Name</th>
                          <th>File Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        {submittedJSON.map((row: any) => (
                          <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.firm || <span className="text-muted">—</span>}</td>
                            <td>{row.proposalNumber}</td>
                            <td>{row.proposalDate}</td>
                            <td>{row.customer || <span className="text-muted">—</span>}</td>
                            <td>{row.leadGenerator || <span className="text-muted">—</span>}</td>
                            <td>{row.projectDetails || <span className="text-muted">—</span>}</td>
                            <td>{row.department || <span className="text-muted">—</span>}</td>
                            <td>{row.hours || <span className="text-muted">—</span>}</td>
                            <td>{row.businessUnit || <span className="text-muted">—</span>}</td>
                            <td>
                              {row.status ? (
                                <span
                                  className={`badge ${
                                    row.status === "Approved"
                                      ? "bg-success"
                                      : row.status === "Rejected"
                                      ? "bg-danger"
                                      : "bg-warning text-dark"
                                  }`}
                                >
                                  {row.status}
                                </span>
                              ) : (
                                <span className="text-muted">—</span>
                              )}
                            </td>
                            <td>{row.fileName || <span className="text-muted">—</span>}</td>
                            <td>{row.fileSize || <span className="text-muted">—</span>}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Raw JSON toggle */}
                  <details className="mt-2">
                    <summary
                      style={{ fontSize: "12px", cursor: "pointer", color: "#6c757d" }}
                    >
                      View raw JSON
                    </summary>
                    <pre
                      style={{
                        background: "#f8f9fa",
                        border: "1px solid #dee2e6",
                        borderRadius: "6px",
                        padding: "12px",
                        fontSize: "11px",
                        maxHeight: "200px",
                        overflowY: "auto",
                        marginTop: "6px",
                      }}
                    >
                      {JSON.stringify(submittedJSON, null, 2)}
                    </pre>
                  </details>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* ══════════════════════════════════════════════════════════════════════
          PURCHASE ORDER DETAILS
      ══════════════════════════════════════════════════════════════════════ */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="pb-2 justify-content-between table-toolbar">
              <Card.Title>PURCHASE ORDER DETAILS</Card.Title>
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
                      <th>Order No</th>
                      <th>Order Date</th>
                      <th>Order Value</th>
                      <th>Conversation Rate</th>
                      <th>Order Value in INR</th>
                      <th>Invoice Milestones</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((row) => (
                      <tr key={row.id}>
                        <td>
                          <input
                            className="form-control"
                            value={""}
                            onChange={(e) => updateRow(row.id, "customer", e.target.value)}/>
                          <div className="file-upload-cell">
                            <label className="upload-btn">
                              Upload
                              <input
                                type="file"
                                hidden
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  updateRow(row.id, "file", file);
                                }}
                              />
                            </label>
                            {row.file && (
                              <div className="file-info">
                                <div className="file-top">
                                  <span className="file-name">📄 {row.file.name}</span>
                                  <button className="remove-file-btn" onClick={() => updateRow(row.id, "file", null)}>✕</button>
                                </div>
                                <span className="file-size">{(row.file.size / 1024).toFixed(1)} KB</span>
                              </div>
                            )}
                          </div>
                        </td>

                        <td>
                          <SpkDatepickr
                            className="form-control"
                            dateFormat="yy/MM/dd"
                            selected={dates[`orderDate_${row.id}`] ? new Date(dates[`orderDate_${row.id}`] as string) : null}
                            onChange={(date: Date | null) => handleDateChange(`orderDate_${row.id}`, date)}
                            placeholderText="Choose date"
                            popperPlacement="bottom-start"
                          />
                        </td>

                        <td>
                          <select
                            className="form-select"
                            value={row.status || ""}
                            onChange={(e) => updateRow(row.id, "status", e.target.value)}
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.currecny.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>
 <td>
                          <input
                            className="form-control"
                            value={row.customer ?? ""}
                            onChange={(e) => updateRow(row.id, "customer", e.target.value)}
                          />
                        </td>

                        <td>
                          <input
                            className="form-control"
                            value={row.customer ?? ""}
                            onChange={(e) => updateRow(row.id, "customer", e.target.value)}
                          />
                        </td>

                        <td>
                          <InvoiceMilestoneCell row={row} updateRow={updateRow} />
                        </td>

                        <td>
                          <select
                            className="form-select"
                            value={row.status ?? ""}
                            onChange={(e) => updateRow(row.id, "status", e.target.value)}
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

      {/* ══════════════════════════════════════════════════════════════════════
          INVOICE DETAILS
      ══════════════════════════════════════════════════════════════════════ */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="pb-2 justify-content-between table-toolbar">
              <Card.Title>INVOICE DETAILS</Card.Title>
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
                      <th>Invoice Number</th>
                      <th>Invoice Date</th>
                      <th>Invoice Value</th>
                      <th>Conversion Rate</th>
                      <th>Invoice Value (INR)</th>
                      <th>Payment Term</th>
                      <th>Due Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.map((row) => (
                      <tr key={row.id}>
                        <td>
                          <input
                            className="form-control"
                            value={row.invoiceNumber}
                            onChange={(e) => updateInvoiceRow(row.id, "invoiceNumber", e.target.value)}
                          />
                          <div className="file-upload-cell">
                            <label className="upload-btn">
                              {row.file ? "Replace" : "Upload"}
                              <input
                                type="file"
                                hidden
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  updateInvoiceRow(row.id, "file", file);
                                }}
                              />
                            </label>
                            {row.file && (
                              <div className="file-info">
                                <div className="file-top">
                                  <span className="file-name">📄 {(row.file as File).name}</span>
                                  <button className="remove-file-btn" onClick={() => updateInvoiceRow(row.id, "file", null)}>✕</button>
                                </div>
                                <span className="file-size">{((row.file as File).size / 1024).toFixed(1)} KB</span>
                              </div>
                            )}
                          </div>
                        </td>

                        <td>
                          <SpkDatepickr
                            className="form-control"
                            dateFormat="yy/MM/dd"
                            selected={dates[`invDate_${row.id}`] ? new Date(dates[`invDate_${row.id}`] as string) : null}
                            onChange={(date: Date | null) => handleDateChange(`invDate_${row.id}`, date)}
                            placeholderText="Choose date"
                            popperPlacement="bottom-start"
                          />
                        </td>

                        <td>
                          <select
                            className="form-select"
                            value={(row as any).status || ""}
                            onChange={(e) => updateInvoiceRow(row.id, "status", e.target.value)}
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.currecny.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        <td>
                          <input
                            className="form-control"
                            value={row.conversionRate}
                            onChange={(e) => updateInvoiceRow(row.id, "conversionRate", e.target.value)}
                          />
                        </td>

                        <td>
                          <input className="form-control" value={row.invoiceValueINR} readOnly />
                        </td>

                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={row.paymentTerm}
                            onChange={(e) => updateInvoiceRow(row.id, "paymentTerm", e.target.value)}
                          />
                        </td>

                        <td>Pending</td>

                        <td>
                          <select
                            className="form-select"
                            value={(row as any).status || ""}
                            onChange={(e) => updateInvoiceRow(row.id, "status", e.target.value)}
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

      {/* ══════════════════════════════════════════════════════════════════════
          PAYMENT DETAILS
      ══════════════════════════════════════════════════════════════════════ */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="pb-2 justify-content-between able-toolbar">
              <Card.Title>PAYMENT DETAILS</Card.Title>
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
                      <th>Value Received</th>
                      <th>Amount Realised</th>
                      <th>Realised Date</th>
                      <th>Payment Status</th>
                      <th>Fluctuation Difference</th>
                      <th>Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentData.map((row) => (
                      <tr key={row.id}>
                        <td>
                          <input
                            className="form-control"
                            value={row.valueReceived}
                            onChange={(e) => updatePaymentRow(row.id, "valueReceived", e.target.value)}
                          />
                        </td>

                        <td>
                          <select
                            className="form-select"
                            value={(row as any).status || ""}
                            onChange={(e) => updatePaymentRow(row.id, "status", e.target.value)}
                          >
                            <option value="">Select All</option>
                            {dropdownOptions.currecny.map((opt) => (
                              <option key={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        <td>
                          <SpkDatepickr
                            className="form-control"
                            dateFormat="yy/MM/dd"
                            selected={dates[`realised_${row.id}`] ? new Date(dates[`realised_${row.id}`] as string) : null}
                            onChange={(date: Date | null) => handleDateChange(`realised_${row.id}`, date)}
                            placeholderText="Choose date"
                          />
                        </td>

                        <td>
                          <select
                            className="form-select"
                            value={row.paymentStatus || ""}
                            onChange={(e) => updatePaymentRow(row.id, "paymentStatus", e.target.value)}
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

                        <td>
                          <input
                            className="form-control"
                            value={row.fluctuation}
                            onChange={(e) => updatePaymentRow(row.id, "fluctuation", e.target.value)}
                          />
                        </td>

                        <td>
                          <input
                            className="form-control"
                            value={row.comments}
                            onChange={(e) => updatePaymentRow(row.id, "comments", e.target.value)}
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