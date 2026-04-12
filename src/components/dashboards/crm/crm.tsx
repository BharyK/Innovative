import { Fragment, useState, useRef, useEffect } from "react";
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
  Accordion,
} from "react-bootstrap";
import SpkDatepickr from "../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import "./crm.css";
import { getApi, postApi } from "../../../api/services";
import moment from "moment";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import Swal from "sweetalert2";
import AddCustomer from "../../apps/ecommerce/add-products/add-products";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// ─── Types ───────────────────────────────────────────────────────────────────

interface OfferRow {
  id: number;
  firmId: string;
  file: File | null;
  proposalNumber: string;
  proposalDate: string;
  customer: string;
  leadGenerator: string;
  projectDetails: string;
  departmentId: string;
  hours: number | string;
  businessUnitId: string;
  status: string;
  financialYear?: string | Date | null;
  comments?: string;
}

interface PurchaseOrderRow {
  id: number;
  orderNo: string;
  orderValue: string;
  orderAmount: string;
  conversionRate: string;
  orderValueINR: string;
  invoiceMilestone: string;
  status: string;
  file: File | null;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const createEmptyOfferRow = (id: number): OfferRow => ({
  id,
  firmId: "",
  file: null,
  proposalNumber: ``,
  proposalDate: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }),
  customer: "",
  leadGenerator: "",
  projectDetails: "",
  departmentId: "",
  hours: "",
  businessUnitId: "",
  status: "",
  financialYear: null,
  comments: "",
});

const createEmptyPurchaseOrderRow = (id: number): PurchaseOrderRow => ({
  id,
  orderNo: "",
  orderValue: "",
  orderAmount: "",
  conversionRate: "",
  orderValueINR: "",
  invoiceMilestone: "",
  status: "",
  file: null,
});

// ─── Initial Data ─────────────────────────────────────────────────────────────

const initialData: OfferRow[] = [
  {
    id: 1,
    firmId: "",
    file: null,
    proposalNumber: "",
    proposalDate: moment().format("DD/MM/YYYY"),
    customer: "",
    leadGenerator: "",
    projectDetails: "",
    department: "",
    hours: 0,
    businessUnit: "",
    status: "",
    financialYear: "",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Crm = () => {
  const [data, setData] = useState<OfferRow[]>(initialData);
  const [dates, setDates] = useState<{ [key: string]: Date | string | null }>(
    {},
  );
  const [search, setSearch] = useState("");
  const [submittedJSON, setSubmittedJSON] = useState<any[] | null>(null);

  const [activeAccordionKeys, setActiveAccordionKeys] = useState<string[]>([]);
  const [bustinessUnits, setBusinessUnits] = useState<
    { businessUnitId: string; businessUnitName: string }[]
  >([]);
  const [departments, setDepartments] = useState<
    { departmentId: string; departmentName: string }[]
  >([]);
  const [employees, setEmployees] = useState<
    { employeeId: string; employeeName: string }[]
  >([]);
  const [firms, setFirms] = useState<{ firmId: string; firmName: string }[]>(
    [],
  );

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
      status: "",
      file: null as File | null,
    },
    {
      id: 2,
      invoiceNumber: "V224251001",
      invoiceValue: "",
      conversionRate: "",
      invoiceValueINR: "",
      paymentTerm: "30",
      status: "",
      file: null as File | null,
    },
  ]);

  const [paymentData, setPaymentData] = useState([
    {
      id: 1,
      valueReceived: "₹ 1,480,000.00",
      paymentStatus: "Received",
      fluctuation: "₹ 252,600.00",
      comments: "",
      status: "",
    },
    {
      id: 2,
      valueReceived: "₹ 239,400.00",
      paymentStatus: "Received",
      fluctuation: "₹ 9,120.00",
      comments: "",
      status: "",
    },
    {
      id: 3,
      valueReceived: "13,000 €",
      paymentStatus: "Received",
      fluctuation: "0.00 €",
      comments: "",
      status: "",
    },
  ]);

  // Purchase Order rows — independent from offer rows
  const [purchaseOrderData, setPurchaseOrderData] = useState<
    PurchaseOrderRow[]
  >(initialData.map((row) => createEmptyPurchaseOrderRow(row.id)));

  // ─── Filter ───────────────────────────────────────────────────────────────

  const filteredData = data.filter((row) =>
    Object.values(row).join(" ").toLowerCase().includes(search.toLowerCase()),
  );

  // ─── Update Helpers ───────────────────────────────────────────────────────

  const updateRow = (id: number, field: string, value: any) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const updatePurchaseOrderRow = (id: number, field: string, value: any) => {
    setPurchaseOrderData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const updateInvoiceRow = (id: number, field: string, value: any) => {
    setInvoiceData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const updatePaymentRow = (id: number, field: string, value: any) => {
    setPaymentData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const handleDateChange = (key: string, date: Date | null) => {
    const formatted = date ? date.toISOString().split("T")[0] : null;
    setDates((prev) => ({ ...prev, [key]: formatted }));
  };

  // ─── Add Row — Offer Details ──────────────────────────────────────────────

  const addNewRow = () => {
    const validIds = data.map((r) => Number(r.id)).filter((id) => !isNaN(id));

    const newId = validIds.length > 0 ? Math.max(...validIds) + 1 : 1;

    console.log("validIds:", validIds, "newId:", newId);

    setData((prev) => [...prev, createEmptyOfferRow(newId)]);
  };

  // ─── Add Row — Purchase Order ─────────────────────────────────────────────

  const addNewPurchaseOrderRow = () => {
    const newId =
      purchaseOrderData.length > 0
        ? Math.max(...purchaseOrderData.map((r) => r.id)) + 1
        : 1;
    setPurchaseOrderData((prev) => [
      ...prev,
      createEmptyPurchaseOrderRow(newId),
    ]);
  };

  // ─── Submit ───────────────────────────────────────────────────────────────

  const handleSubmit = () => {
    const payload = data.map(({ file, ...rest }) => ({
      ...rest,
      fileName: file ? file.name : null,
      fileSize: file ? `${(file.size / 1024).toFixed(1)} KB` : null,
    }));
    setSubmittedJSON(payload);
  };

  // ─── Accordion Toggle ─────────────────────────────────────────────────────

  const toggleAccordion = (key: string) => {
    setActiveAccordionKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  // ─── Add Row Button (reusable style) ──────────────────────────────────────

  const AddRowButton = ({ onClick }: { onClick: () => void }) => (
    <div className="px-3 py-2">
      <button
        onClick={onClick}
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
    </div>
  );

  // ─── Reusable File Upload Cell ────────────────────────────────────────────

  const FileUploadCell = ({
    file,
    onUpload,
    onRemove,
  }: {
    file: File | null;
    onUpload: (f: File) => void;
    onRemove: () => void;
  }) => (
    <div className="file-upload-cell">
      <label className="upload-btn">
        {file ? "Replace" : "Upload"}
        <input
          type="file"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onUpload(f);
          }}
        />
      </label>
      {file && (
        <div className="file-info">
          <div className="file-top">
            <span className="file-name">📄 {file.name}</span>
            <button className="remove-file-btn" onClick={onRemove}>
              ✕
            </button>
          </div>
          <span className="file-size">{(file.size / 1024).toFixed(1)} KB</span>
        </div>
      )}
    </div>
  );

  // ─── Invoice Milestone Cell ───────────────────────────────────────────────

  function InvoiceMilestoneCell({
    row,
    updateRow,
  }: {
    row: any;
    updateRow: (id: number, field: string, value: any) => void;
  }) {
    const [tempValue, setTempValue] = useState(row.invoiceMilestone ?? "");
    const overlayRef = useRef<any>(null);

    return (
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        rootClose
        ref={overlayRef}
        onToggle={(show) => {
          if (show) setTempValue(row.invoiceMilestone ?? "");
        }}
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

  const base64ToBlobUrl = (base64, mimeType = "application/pdf") => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length)
      .fill(0)
      .map((_, i) => byteCharacters.charCodeAt(i));

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });

    return URL.createObjectURL(blob);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [Uitility, Proposal] = await Promise.all([
        getApi("Uitility"),
        getApi("Proposal"),
      ]);
      setBusinessUnits(Uitility.data.businessUnits);
      setDepartments(Uitility.data.departments);
      setEmployees(Uitility.data.employees);
      setFirms(Uitility.data.firms);
      const mappedData = Proposal.data.map((item) => ({
        ...item,
        fileUrl: item.documentData ? base64ToBlobUrl(item.documentData) : null,
      }));
      setData(mappedData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleOfferDetails = async (row: any) => {
    console.log("row", row);
    const payload = {
      proposalNumber: row.proposalNumber,
      firmId: Number(row.firmId),
      customerId: 1,
      proposalDate: moment(row.proposalDate).format("YYYY-MM-DD[T]HH:mm:ss"),
      leadGenerator: row.leadGenerator,
      projectDetails: row.projectDetails,
      departmentId: Number(row.departmentId),
      estimatedHours: Number(row.estimatedHours), //Null
      businessUnitId: Number(row.businessUnitId),
      status: row.status,
      comments: row.comments,
      documentData: row.file,
    };

    try {
      const [postData] = await Promise.all([postApi("Proposal", payload)]);
      console.log("data", postData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleOfferDetailsRemoveFile = (id) => {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          // cleanup blob URL
          if (item.fileUrl) {
            URL.revokeObjectURL(item.fileUrl);
          }

          return {
            ...item,
            file: null,
            fileUrl: null,
            documentData: null, // also clear API data
          };
        }
        return item;
      }),
    );
  };

  const handleUpload = (rowId: any, f) => {
    const blob = new Blob([f], { type: f.type });

    updateRow(rowId.id, "file", blob);
  };

  const Imagealert = () => {
    let root;

    Swal.fire({
      html: `<div id="react-child"></div>`,
      width: "90%",
      padding: "1rem",
      didOpen: () => {
        const container = document.getElementById("react-child");
        root = ReactDOM.createRoot(container);

        root.render(
          <BrowserRouter>
            <AddCustomer />
          </BrowserRouter>,
        );
      },
      willClose: () => {
        if (root) root.unmount();
      },
    });
  };

  return (
    <Fragment>
      <Seo title={"Revenue"} />
      <Pageheader
        title="Dashboard"
        currentpage="Revenue"
        activepage="Revenue"
      />

      {/* ══════════════════════════════════════════════════════════════════════
          OFFER DETAILS
      ══════════════════════════════════════════════════════════════════════ */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="pb-2 justify-content-between table-toolbar">
              <Card.Title className="">OFFER DETAILS</Card.Title>
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
                      <th>Financial Year</th>
                      <th>Firm</th>
                      <th>Proposal No</th>
                      <th>Date</th>
                      <th>Customer</th>
                      <th>Lead Generator</th>
                      <th>Project Details</th>
                      <th>Business Unit</th>
                      <th>Department</th>
                      <th>Efforts</th>
                      <th>Status</th>
                      <th>Comments</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>
                          <SpkDatepickr
                            className="form-control"
                            dateFormat="yyyy"
                            showYearPicker
                            selected={
                              row.financialYear
                                ? new Date(row.financialYear, 0)
                                : null
                            }
                            onChange={(date) =>
                              updateRow(
                                row.id,
                                "financialYear",
                                date ? date.getFullYear() : null,
                              )
                            }
                          />
                        </td>
                        {/* Firm */}
                        <td>
                          <select
                            className="form-select"
                            value={row.firmId}
                            onChange={(e) =>
                              updateRow(row.id, "firmId", e.target.value)
                            }
                          >
                            <option value="">Select All</option>
                            {firms.length > 0 ? (
                              firms.map((opt) => (
                                <option key={opt.firmId} value={opt.firmId}>
                                  {opt.firmName}
                                </option>
                              ))
                            ) : (
                              <option value="">No options available</option>
                            )}
                          </select>
                        </td>

                        {/* Proposal No + Upload */}
                        <td>
                          <input
                            className="form-control"
                            value={row.proposalNumber}
                            onChange={(e) =>
                              updateRow(
                                row.id,
                                "proposalNumber",
                                e.target.value,
                              )
                            }
                          />

                          {/* Upload */}
                          <FileUploadCell
                            file={row.file}
                            onUpload={(f) => handleUpload(row.id, f)}
                            onRemove={() => updateRow(row.id, "file", null)}
                          />

                          {/* ✅ Show File */}
                          {(row.fileUrl || row.file) && (
                            <div className="mt-1 d-flex gap-2 align-items-center">
                              {/* View */}
                              <button
                                className="btn btn-sm btn-link p-0"
                                onClick={() => {
                                  if (row.fileUrl) {
                                    window.open(row.fileUrl); // API file
                                  } else if (row.file) {
                                    const tempUrl = URL.createObjectURL(
                                      row.file,
                                    );
                                    window.open(tempUrl); // uploaded file
                                  }
                                }}
                              >
                                📄 Upload file
                              </button>

                              {/* Remove */}
                              {/* <button
                                className="btn btn-sm btn-danger p-0 px-2"
                                onClick={() => handleOfferDetailsRemoveFile(row.id)}
                              >
                                ✖
                              </button> */}
                            </div>
                          )}
                        </td>

                        {/* Date */}
                        <td>
                          <SpkDatepickr
                            className="form-control"
                            dateFormat="yy/MM/dd"
                            selected={
                              row.proposalDate
                                ? new Date(row.proposalDate)
                                : null
                            }
                            onChange={(date: Date | null) =>
                              updateRow(row.id, "proposalDate", date)
                            }
                            placeholderText="Choose date"
                            popperPlacement="bottom-start"
                          />
                        </td>

                        {/* Customer */}
                        <td>
                          <input
                            className="form-control"
                            value={row.customer}
                            onChange={(e) =>
                              updateRow(row.id, "customer", e.target.value)
                            }
                          />
                          <SpkButton
                            Buttonvariant="danger"
                            Size="sm"
                            Customclass="btn"
                            Id="alert-image"
                            onClickfunc={Imagealert}
                          >
                            Add User
                          </SpkButton>
                        </td>

                        {/* Lead Generator */}
                        <td>
                          <select
                            className="form-select"
                            value={row.leadGenerator}
                            onChange={(e) =>
                              updateRow(row.id, "leadGenerator", e.target.value)
                            }
                          >
                            <option value="">Select All</option>
                            {employees.length > 0 ? (
                              employees.map((opt) => (
                                <option
                                  key={opt.employeeId}
                                  value={opt.employeeId}
                                >
                                  {opt.employeeName}
                                </option>
                              ))
                            ) : (
                              <option value="">No options available</option>
                            )}
                          </select>
                        </td>

                        {/* Project Details */}
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
                        {/* Business Unit */}
                        <td>
                          <select
                            className="form-select"
                            value={row.businessUnitId}
                            onChange={(e) =>
                              updateRow(
                                row.id,
                                "businessUnitId",
                                e.target.value,
                              )
                            }
                          >
                            <option value="">Select All</option>
                            {bustinessUnits.length > 0 ? (
                              bustinessUnits.map((opt) => (
                                <option
                                  key={opt.businessUnitId}
                                  value={opt.businessUnitId}
                                >
                                  {opt.businessUnitName}
                                </option>
                              ))
                            ) : (
                              <option value="">No options available</option>
                            )}
                          </select>
                        </td>

                        {/* Department */}
                        <td>
                          <select
                            className="form-select"
                            value={row.departmentId}
                            onChange={(e) =>
                              updateRow(row.id, "departmentId", e.target.value)
                            }
                          >
                            <option value="">Select All</option>
                            {departments.map((opt) => (
                              <option
                                key={opt.departmentId}
                                value={opt.departmentId}
                              >
                                {opt.departmentName}
                              </option>
                            ))}
                          </select>
                        </td>

                        {/* Hours */}
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

                        {/* Status */}
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
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            value={row.comments}
                            placeholder="Comments"
                            onChange={(e) =>
                              updateRow(row.id, "comments", e.target.value)
                            }
                          />
                        </td>
                        {/* Actions */}
                        <td className="text-center">
                          <button
                            className="btn btn-primary btn-sm"
                            style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                            onClick={() => handleOfferDetails(row)}
                          >
                            Submit
                          </button>
                          <br />
                          <button
                            className="btn btn-danger btn-sm mt-1"
                            style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                            onClick={handleSubmit}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Add Row */}
              <div className="d-flex align-items-center justify-content-between mt-3">
                <button
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
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "#0d6efd";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#0d6efd";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "#6c757d";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#495057";
                  }}
                >
                  <span style={{ fontSize: "18px", lineHeight: 1 }}>+</span>
                  Add Row
                </button>
              </div>

              {/* JSON Output Table */}
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
                  <div
                    className="table-responsive"
                    style={{
                      border: "1px solid #d1e7dd",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <table
                      className="table table-sm table-bordered mb-0"
                      style={{ fontSize: "12px" }}
                    >
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
                          <th>Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        {submittedJSON.map((row: any) => (
                          <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>
                              {row.firm || (
                                <span className="text-muted">—</span>
                              )}
                            </td>
                            <td>{row.proposalNumber}</td>
                            <td>{row.proposalDate}</td>
                            <td>
                              {row.customer || (
                                <span className="text-muted">—</span>
                              )}
                            </td>
                            <td>
                              {row.leadGenerator || (
                                <span className="text-muted">—</span>
                              )}
                            </td>
                            <td>
                              {row.projectDetails || (
                                <span className="text-muted">—</span>
                              )}
                            </td>
                            <td>
                              {row.department || (
                                <span className="text-muted">—</span>
                              )}
                            </td>
                            <td>
                              {row.hours || (
                                <span className="text-muted">—</span>
                              )}
                            </td>
                            <td>
                              {row.businessUnit || (
                                <span className="text-muted">—</span>
                              )}
                            </td>
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
                            <td>
                              {row.fileName || (
                                <span className="text-muted">—</span>
                              )}
                            </td>
                            <td>
                              {row.fileSize || (
                                <span className="text-muted">—</span>
                              )}
                            </td>
                            <td>
                              <input
                                className="form-control"
                                value={""}
                                placeholder="Comments"
                                onChange={(e) =>
                                  updatePaymentRow(
                                    row.id,
                                    "valueReceived",
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
                  <details className="mt-2">
                    <summary
                      style={{
                        fontSize: "12px",
                        cursor: "pointer",
                        color: "#6c757d",
                      }}
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
          ACCORDION  —  Purchase Order  |  Invoice  |  Payment Details
      ══════════════════════════════════════════════════════════════════════ */}
      <Row>
        <Col xl={12}>
          <Accordion alwaysOpen activeKey={activeAccordionKeys}>
            {/* ── 1. Purchase Order Details ─────────────────────────────── */}
            <Accordion.Item
              eventKey="purchase-order"
              className="custom-card mb-3"
              style={{ border: "1px solid #dee2e6", borderRadius: "8px" }}
            >
              <Accordion.Header
                onClick={() => toggleAccordion("purchase-order")}
              >
                <span
                  className="fw-semibold"
                  style={{ fontSize: "13px", letterSpacing: "0.04em" }}
                >
                  PURCHASE ORDER DETAILS
                </span>
              </Accordion.Header>

              <Accordion.Body className="p-0">
                {/* Search inside accordion */}
                <div
                  className="d-flex justify-content-end px-3 pt-3 pb-2"
                  style={{ borderBottom: "1px solid #f0f0f0" }}
                >
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-bordered app-table mb-0">
                    <thead className="table-primary">
                      <tr>
                        <th>Proposal Number</th>
                        <th>Project ID</th>
                        <th>Business Unit</th>
                        <th>Order No</th>
                        <th>Order Date</th>
                        <th>Order Value</th>
                        <th>Conversion Rate</th>
                        <th>Order Value in INR</th>
                        <th>Invoice Milestones</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchaseOrderData.map((poRow) => (
                        <tr key={poRow.id}>
                          {/* Proposal Number */}
                          <td>
                            <input
                              className="form-control"
                              value={poRow.proposalNumber}
                              onChange={(e) =>
                                updatePurchaseOrderRow(
                                  poRow.id,
                                  "proposalNumber",
                                  e.target.value,
                                )
                              }
                            />
                            <FileUploadCell
                              file={poRow.file}
                              onUpload={(f) =>
                                updatePurchaseOrderRow(poRow.id, "file", f)
                              }
                              onRemove={() =>
                                updatePurchaseOrderRow(poRow.id, "file", null)
                              }
                            />
                          </td>
                          {/* Order No + Upload */}
                          <td>
                            <input
                              className="form-control mb-1"
                              value={poRow.orderNo}
                              placeholder="Project ID"
                              onChange={(e) =>
                                updatePurchaseOrderRow(
                                  poRow.id,
                                  "orderNo",
                                  e.target.value,
                                )
                              }
                            />
                          </td>
                          <td>
                            <select
                              className="form-select"
                              value={poRow.businessUnit}
                              onChange={(e) =>
                                updatePurchaseOrderRow(
                                  poRow.id,
                                  "businessUnit",
                                  e.target.value,
                                )
                              }
                            >
                              <option value="">Select All</option>
                              {bustinessUnits.map((opt) => (
                                <option
                                  key={opt.businessUnitId}
                                  value={opt.businessUnitName}
                                >
                                  {opt.businessUnitName}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <input
                              className="form-control mb-1"
                              value={poRow.orderNo}
                              placeholder="Order number"
                              onChange={(e) =>
                                updatePurchaseOrderRow(
                                  poRow.id,
                                  "orderNo",
                                  e.target.value,
                                )
                              }
                            />
                            <FileUploadCell
                              file={poRow.file}
                              onUpload={(f) =>
                                updatePurchaseOrderRow(poRow.id, "file", f)
                              }
                              onRemove={() =>
                                updatePurchaseOrderRow(poRow.id, "file", null)
                              }
                            />
                          </td>

                          {/* Order Date */}
                          <td>
                            <SpkDatepickr
                              className="form-control"
                              dateFormat="yy/MM/dd"
                              selected={
                                dates[`poDate_${poRow.id}`]
                                  ? new Date(
                                      dates[`poDate_${poRow.id}`] as string,
                                    )
                                  : null
                              }
                              onChange={(date: Date | null) =>
                                handleDateChange(`poDate_${poRow.id}`, date)
                              }
                              placeholderText="Choose date"
                              popperPlacement="bottom-start"
                            />
                          </td>

                          {/* Order Value (currency + amount) */}
                          <td>
                            <div className="d-flex gap-1">
                              <select
                                className="form-select"
                                style={{ maxWidth: "110px" }}
                                value={poRow.orderValue}
                                onChange={(e) =>
                                  updatePurchaseOrderRow(
                                    poRow.id,
                                    "orderValue",
                                    e.target.value,
                                  )
                                }
                              >
                                <option value="">Currency</option>
                                {dropdownOptions.currecny.map((opt) => (
                                  <option key={opt}>{opt}</option>
                                ))}
                              </select>
                              <input
                                className="form-control"
                                type="number"
                                placeholder="Amount"
                                value={poRow.orderAmount}
                                onChange={(e) =>
                                  updatePurchaseOrderRow(
                                    poRow.id,
                                    "orderAmount",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                          </td>

                          {/* Conversion Rate */}
                          <td>
                            <input
                              className="form-control"
                              value={poRow.conversionRate}
                              placeholder="Rate"
                              onChange={(e) =>
                                updatePurchaseOrderRow(
                                  poRow.id,
                                  "conversionRate",
                                  e.target.value,
                                )
                              }
                            />
                          </td>

                          {/* Order Value INR */}
                          <td>
                            <input
                              className="form-control"
                              value={poRow.orderValueINR}
                              placeholder="INR value"
                              onChange={(e) =>
                                updatePurchaseOrderRow(
                                  poRow.id,
                                  "orderValueINR",
                                  e.target.value,
                                )
                              }
                            />
                          </td>

                          {/* Invoice Milestones */}
                          <td>
                            <InvoiceMilestoneCell
                              row={poRow}
                              updateRow={updatePurchaseOrderRow}
                            />
                          </td>

                          {/* Status */}
                          <td>
                            <select
                              className="form-select"
                              value={poRow.status}
                              onChange={(e) =>
                                updatePurchaseOrderRow(
                                  poRow.id,
                                  "status",
                                  e.target.value,
                                )
                              }
                            >
                              <option value="">Select All</option>
                              {dropdownOptions.status.map((opt) => (
                                <option key={opt}>{opt}</option>
                              ))}
                            </select>
                          </td>
                          <td className="text-center">
                            <button
                              className="btn btn-primary btn-sm"
                              style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                              onClick={handleSubmit}
                            >
                              Submit
                            </button>
                            <br />
                            <button
                              className="btn btn-danger btn-sm mt-1"
                              style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                              onClick={handleSubmit}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <input
                              className="form-control"
                              value={""}
                              placeholder="Comments"
                              onChange={(e) =>
                                updatePaymentRow(
                                  row.id,
                                  "valueReceived",
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

                {/* ── Add Row — Purchase Order ── */}
                <AddRowButton onClick={addNewPurchaseOrderRow} />
              </Accordion.Body>
            </Accordion.Item>

            {/* ── 2. Invoice Details ────────────────────────────────────── */}
            <Accordion.Item
              eventKey="invoice"
              className="custom-card mb-3"
              style={{ border: "1px solid #dee2e6", borderRadius: "8px" }}
            >
              <Accordion.Header onClick={() => toggleAccordion("invoice")}>
                <span
                  className="fw-semibold d-none"
                  style={{ fontSize: "13px", letterSpacing: "0.04em" }}
                >
                  INVOICE DETAILS
                </span>
              </Accordion.Header>

              <Accordion.Body className="p-0">
                <div
                  className="d-flex justify-content-end px-3 pt-3 pb-2"
                  style={{ borderBottom: "1px solid #f0f0f0" }}
                >
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-bordered app-table mb-0">
                    <thead className="table-primary">
                      <tr>
                        <th>Proposal Number</th>
                        <th>Invoice Number</th>
                        <th>Invoice Date</th>
                        <th>Invoice Value</th>
                        <th>Conversion Rate</th>
                        <th>Invoice Value (INR)</th>
                        <th>Payment Term</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceData.map((row) => (
                        <tr key={row.id}>
                          {/* Invoice Number + Upload */}
                          <td>
                            <input
                              className="form-control"
                              value={row.proposalNumber}
                              onChange={(e) =>
                                updatePurchaseOrderRow(
                                  row.id,
                                  "proposalNumber",
                                  e.target.value,
                                )
                              }
                            />
                            <FileUploadCell
                              file={row.file}
                              onUpload={(f) =>
                                updatePurchaseOrderRow(row.id, "file", f)
                              }
                              onRemove={() =>
                                updatePurchaseOrderRow(row.id, "file", null)
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="form-control mb-1"
                              value={row.invoiceNumber}
                              onChange={(e) =>
                                updateInvoiceRow(
                                  row.id,
                                  "invoiceNumber",
                                  e.target.value,
                                )
                              }
                            />
                            <FileUploadCell
                              file={row.file}
                              onUpload={(f) =>
                                updateInvoiceRow(row.id, "file", f)
                              }
                              onRemove={() =>
                                updateInvoiceRow(row.id, "file", null)
                              }
                            />
                          </td>

                          {/* Invoice Date */}
                          <td>
                            <SpkDatepickr
                              className="form-control"
                              dateFormat="yy/MM/dd"
                              selected={
                                dates[`invDate_${row.id}`]
                                  ? new Date(
                                      dates[`invDate_${row.id}`] as string,
                                    )
                                  : null
                              }
                              onChange={(date: Date | null) =>
                                handleDateChange(`invDate_${row.id}`, date)
                              }
                              placeholderText="Choose date"
                              popperPlacement="bottom-start"
                            />
                          </td>

                          {/* Invoice Value (currency + amount) */}
                          <td>
                            <div className="d-flex gap-1">
                              <select
                                className="form-select"
                                style={{ maxWidth: "110px" }}
                                value={row.invoiceValue}
                                onChange={(e) =>
                                  updateInvoiceRow(
                                    row.id,
                                    "invoiceValue",
                                    e.target.value,
                                  )
                                }
                              >
                                <option value="">Currency</option>
                                {dropdownOptions.currecny.map((opt) => (
                                  <option key={opt}>{opt}</option>
                                ))}
                              </select>
                              <input
                                className="form-control"
                                placeholder="Amount"
                              />
                            </div>
                          </td>

                          {/* Conversion Rate */}
                          <td>
                            <input
                              className="form-control"
                              value={row.conversionRate}
                              onChange={(e) =>
                                updateInvoiceRow(
                                  row.id,
                                  "conversionRate",
                                  e.target.value,
                                )
                              }
                            />
                          </td>

                          {/* Invoice Value INR (read-only) */}
                          <td>
                            <input
                              className="form-control"
                              value={row.invoiceValueINR}
                              readOnly
                            />
                          </td>

                          {/* Payment Term */}
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              value={row.paymentTerm}
                              onChange={(e) =>
                                updateInvoiceRow(
                                  row.id,
                                  "paymentTerm",
                                  e.target.value,
                                )
                              }
                            />
                          </td>

                          {/* Due Date */}
                          <td>
                            <SpkDatepickr
                              className="form-control"
                              dateFormat="yy/MM/dd"
                              selected={
                                dates[`dueDate_${row.id}`]
                                  ? new Date(
                                      dates[`dueDate_${row.id}`] as string,
                                    )
                                  : null
                              }
                              onChange={(date: Date | null) =>
                                handleDateChange(`dueDate_${row.id}`, date)
                              }
                              placeholderText="Choose date"
                              popperPlacement="bottom-start"
                            />
                          </td>

                          {/* Status */}
                          <td>
                            <select
                              className="form-select"
                              value={row.status || ""}
                              onChange={(e) =>
                                updateInvoiceRow(
                                  row.id,
                                  "status",
                                  e.target.value,
                                )
                              }
                            >
                              <option value="">Select All</option>
                              {dropdownOptions.status.map((opt) => (
                                <option key={opt}>{opt}</option>
                              ))}
                            </select>
                          </td>
                          <td className="text-center">
                            <button
                              className="btn btn-primary btn-sm"
                              style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                              onClick={handleSubmit}
                            >
                              Submit
                            </button>
                            <br />
                            <button
                              className="btn btn-danger btn-sm mt-1"
                              style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                              onClick={handleSubmit}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <input
                              className="form-control"
                              value={""}
                              placeholder="Comments"
                              onChange={(e) =>
                                updatePaymentRow(
                                  row.id,
                                  "valueReceived",
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
              </Accordion.Body>
            </Accordion.Item>

            {/* ── 3. Payment Details ────────────────────────────────────── */}
            <Accordion.Item
              eventKey="payment"
              className="custom-card mb-3"
              style={{ border: "1px solid #dee2e6", borderRadius: "8px" }}
            >
              <Accordion.Header onClick={() => toggleAccordion("payment")}>
                <span
                  className="fw-semibold d-none"
                  style={{ fontSize: "13px", letterSpacing: "0.04em" }}
                >
                  PAYMENT DETAILS
                </span>
              </Accordion.Header>

              <Accordion.Body className="p-0">
                <div
                  className="d-flex justify-content-end px-3 pt-3 pb-2"
                  style={{ borderBottom: "1px solid #f0f0f0" }}
                >
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-bordered table-hover app-table mb-0">
                    <thead className="table-primary">
                      <tr>
                        <th>Proposal Number</th>
                        <th>Documents</th>
                        <th>Value Received</th>
                        <th>Amount Realised</th>
                        <th>Realised Date</th>
                        <th>Payment Status</th>
                        <th>Fluctuation Difference</th>
                        <th>Comments</th>
                        <th>Actions</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentData.map((row) => (
                        <tr key={row.id}>
                          {/* Value Received */}
                          <td>
                            <input
                              className="form-control"
                              value={row.proposalNumber}
                              onChange={(e) =>
                                updatePurchaseOrderRow(
                                  row.id,
                                  "proposalNumber",
                                  e.target.value,
                                )
                              }
                            />
                            <FileUploadCell
                              file={row.file}
                              onUpload={(f) =>
                                updatePurchaseOrderRow(row.id, "file", f)
                              }
                              onRemove={() =>
                                updatePurchaseOrderRow(row.id, "file", null)
                              }
                            />
                          </td>
                          <td>
                            <FileUploadCell
                              file={row.file}
                              onUpload={(f) =>
                                updatePurchaseOrderRow(row.id, "file", f)
                              }
                              onRemove={() =>
                                updatePurchaseOrderRow(row.id, "file", null)
                              }
                            />
                          </td>
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

                          {/* Amount Realised (currency + amount) */}
                          <td>
                            <div className="d-flex gap-1">
                              <select
                                className="form-select"
                                style={{ maxWidth: "110px" }}
                                value={row.status || ""}
                                onChange={(e) =>
                                  updatePaymentRow(
                                    row.id,
                                    "status",
                                    e.target.value,
                                  )
                                }
                              >
                                <option value="">Currency</option>
                                {dropdownOptions.currecny.map((opt) => (
                                  <option key={opt}>{opt}</option>
                                ))}
                              </select>
                              <input
                                className="form-control"
                                placeholder="Amount"
                              />
                            </div>
                          </td>

                          {/* Realised Date */}
                          <td>
                            <SpkDatepickr
                              className="form-control"
                              dateFormat="yy/MM/dd"
                              selected={
                                dates[`realised_${row.id}`]
                                  ? new Date(
                                      dates[`realised_${row.id}`] as string,
                                    )
                                  : null
                              }
                              onChange={(date: Date | null) =>
                                handleDateChange(`realised_${row.id}`, date)
                              }
                              placeholderText="Choose date"
                            />
                          </td>

                          {/* Payment Status */}
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

                          {/* Fluctuation */}
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

                          {/* Comments */}
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
                          <td className="text-center">
                            <button
                              className="btn btn-primary btn-sm"
                              style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                              onClick={handleSubmit}
                            >
                              Submit
                            </button>
                            <br />
                            <button
                              className="btn btn-danger btn-sm mt-1"
                              style={{ whiteSpace: "nowrap", fontSize: "12px" }}
                              onClick={handleSubmit}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <input
                              className="form-control"
                              value={""}
                              placeholder="Comments"
                              onChange={(e) =>
                                updatePaymentRow(
                                  row.id,
                                  "valueReceived",
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
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Crm;
