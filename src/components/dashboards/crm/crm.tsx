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
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import Swal from "sweetalert2";
import AddCustomer from "../../apps/ecommerce/add-products/add-products";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";

// ─── Types ───────────────────────────────────────────────────────────────────

interface OfferRow {
  id: number;
  firmId: string;
  file: File | null;
  fileUrl?: string | null;
  documentData?: string | null;
  proposalNumber: string;
  proposalDate: string | Date | null;
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
  proposalNumber: string;
  projectId: string;
  businessUnit: string;
  orderNo: string;
  orderDate: string | Date | null;
  orderValue: string; // currency
  orderAmount: string;
  conversionRate: string;
  orderValueINR: string;
  invoiceMilestone: string;
  status: string;
  file: File | null;
  comments: string;
}

interface InvoiceRow {
  id: number;
  proposalNumber: string;
  invoiceNumber: string;
  invoiceDate: string | Date | null;
  invoiceValue: string; // currency
  invoiceAmount: string;
  conversionRate: string;
  invoiceValueINR: string;
  paymentTerm: string;
  dueDate: string | Date | null;
  status: string;
  file: File | null;
  comments: string;
}

interface PaymentRow {
  id: number;
  proposalNumber: string;
  file: File | null;
  valueReceived: string;
  amountCurrency: string;
  amountValue: string;
  realisedDate: string | Date | null;
  paymentStatus: string;
  fluctuation: string;
  comments: string;
  actionComments: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

let _nextOfferId = 2;
const nextOfferId = () => _nextOfferId++;

const createEmptyOfferRow = (): OfferRow => ({
  id: nextOfferId(),
  firmId: "",
  file: null,
  fileUrl: null,
  documentData: null,
  proposalNumber: "",
  proposalDate: null,
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

let _nextPoId = 2;
const nextPoId = () => _nextPoId++;

const createEmptyPurchaseOrderRow = (): PurchaseOrderRow => ({
  id: nextPoId(),
  proposalNumber: "",
  projectId: "",
  businessUnit: "",
  orderNo: "",
  orderDate: null,
  orderValue: "",
  orderAmount: "",
  conversionRate: "",
  orderValueINR: "",
  invoiceMilestone: "",
  status: "",
  file: null,
  comments: "",
});

const createEmptyInvoiceRow = (): InvoiceRow => ({
  id: Date.now(),
  proposalNumber: "",
  invoiceNumber: "",
  invoiceDate: null,
  invoiceValue: "",
  invoiceAmount: "",
  conversionRate: "",
  invoiceValueINR: "",
  paymentTerm: "30",
  dueDate: null,
  status: "",
  file: null,
  comments: "",
});

const createEmptyPaymentRow = (): PaymentRow => ({
  id: Date.now(),
  proposalNumber: "",
  file: null,
  valueReceived: "",
  amountCurrency: "",
  amountValue: "",
  realisedDate: null,
  paymentStatus: "",
  fluctuation: "",
  comments: "",
  actionComments: "",
});

// ─── Reusable File Upload Cell ────────────────────────────────────────────────

const FileUploadCell = ({
  file,
  fileUrl,
  onUpload,
  onRemove,
  value,
}: {
  file: File | null;
  fileUrl?: string | null;
  onUpload: (f: File) => void;
  onRemove: () => void;
}) => (
  <div className="file-upload-cell">
    <label className="upload-btn">
      {file || fileUrl ? "Replace" : "Upload"}
      <input
        type="file"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onUpload(f);
        }}
      />
    </label>
    {(file || fileUrl) && (
      <div className="file-info">
        <div className="file-top">
          <button
            className="btn btn-sm btn-link p-0"
            onClick={() => {
              if (file) {
                const url = URL.createObjectURL(file);
                window.open(url);
              } else if (fileUrl) {
                window.open(fileUrl);
              }
            }}
          >
            📄 {file ? file.name : value.fileName}
          </button>
          <button className="remove-file-btn" onClick={onRemove}>
            ✕
          </button>
        </div>
        {file && (
          <span className="file-size">{(file.size / 1024).toFixed(1)} KB</span>
        )}
      </div>
    )}
  </div>
);

// ─── Invoice Milestone Cell ───────────────────────────────────────────────────

function InvoiceMilestoneCell({
  rowId,
  value,
  onSave,
}: {
  rowId: number;
  value: string;
  onSave: (val: string) => void;
}) {
  const [tempValue, setTempValue] = useState(value);
  const overlayRef = useRef<any>(null);

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      rootClose
      ref={overlayRef}
      onToggle={(show) => {
        if (show) setTempValue(value);
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
                onSave(tempValue);
                document.body.click(); // close popover
              }}
            >
              Save
            </Button>
          </Popover.Body>
        </Popover>
      }
    >
      <Form.Control
        value={value}
        readOnly
        placeholder="Click to edit..."
        style={{ cursor: "pointer" }}
      />
    </OverlayTrigger>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

const Crm = () => {
  // ── Offer Details state ──────────────────────────────────────────────────
  const [offerData, setOfferData] = useState<OfferRow[]>([
    {
      id: 1,
      firmId: "",
      file: null,
      fileUrl: null,
      documentData: null,
      proposalNumber: "",
      proposalDate: null,
      customer: "",
      leadGenerator: "",
      projectDetails: "",
      departmentId: "",
      hours: "",
      businessUnitId: "",
      status: "",
      financialYear: null,
      comments: "",
    },
  ]);

  // ── Purchase Order state ─────────────────────────────────────────────────
  const [purchaseOrderData, setPurchaseOrderData] = useState<
    PurchaseOrderRow[]
  >([createEmptyPurchaseOrderRow()]);

  // ── Invoice state ────────────────────────────────────────────────────────
  const [invoiceData, setInvoiceData] = useState<InvoiceRow[]>([
    {
      id: 1,
      proposalNumber: "",
      invoiceNumber: "V224251020",
      invoiceDate: null,
      invoiceValue: "",
      invoiceAmount: "",
      conversionRate: "",
      invoiceValueINR: "",
      paymentTerm: "30",
      dueDate: null,
      status: "",
      file: null,
      comments: "",
    },
    {
      id: 2,
      proposalNumber: "",
      invoiceNumber: "V224251001",
      invoiceDate: null,
      invoiceValue: "",
      invoiceAmount: "",
      conversionRate: "",
      invoiceValueINR: "",
      paymentTerm: "30",
      dueDate: null,
      status: "",
      file: null,
      comments: "",
    },
  ]);

  // ── Payment state ────────────────────────────────────────────────────────
  const [paymentData, setPaymentData] = useState<PaymentRow[]>([
    {
      id: 1,
      proposalNumber: "",
      file: null,
      valueReceived: "₹ 1,480,000.00",
      amountCurrency: "",
      amountValue: "",
      realisedDate: null,
      paymentStatus: "Received",
      fluctuation: "₹ 252,600.00",
      comments: "",
      actionComments: "",
    },
    {
      id: 2,
      proposalNumber: "",
      file: null,
      valueReceived: "₹ 239,400.00",
      amountCurrency: "",
      amountValue: "",
      realisedDate: null,
      paymentStatus: "Received",
      fluctuation: "₹ 9,120.00",
      comments: "",
      actionComments: "",
    },
    {
      id: 3,
      proposalNumber: "",
      file: null,
      valueReceived: "13,000 €",
      amountCurrency: "",
      amountValue: "",
      realisedDate: null,
      paymentStatus: "Received",
      fluctuation: "0.00 €",
      comments: "",
      actionComments: "",
    },
  ]);

  // ── Lookup data ──────────────────────────────────────────────────────────
  const [businessUnits, setBusinessUnits] = useState<
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

  const [search, setSearch] = useState("");
  const [activeAccordionKeys, setActiveAccordionKeys] = useState<string[]>([]);

  const dropdownOptions = {
    status: ["Approved", "Pending", "Rejected"],
    currency: ["INR", "USD", "EURO", "GBP", "Chinese Yuan", "Japanese Yen"],
    paymentStatus: [
      "Received",
      "Pending",
      "Cancelled",
      "On Hold",
      "Partially Paid",
      "Extra Paid",
      "Credit Note Issued",
      "Advance Received",
      "Reversed",
    ],
  };

  // ── Fetch ────────────────────────────────────────────────────────────────
  const [loading, setLoading] = useState<boolean>(true);
  const [customerInfo, setCustomerInfo] = useState<any>([]);
  const base64ToBlobUrl = (base64: string, mimeType = "application/pdf") => {
    const byteCharacters = atob(base64);
    const byteArray = new Uint8Array(
      Array.from(byteCharacters, (c) => c.charCodeAt(0)),
    );
    return URL.createObjectURL(new Blob([byteArray], { type: mimeType }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [Utility, Proposal, customer] = await Promise.all([
        getApi("Uitility"),
        getApi("Proposal"),
        getApi("api/Customers"),
      ]);
      setBusinessUnits(Utility.data.businessUnits);
      setDepartments(Utility.data.departments);
      setEmployees(Utility.data.employees);
      setCustomerInfo(customer.data);
      setFirms(Utility.data.firms);

      const mapped: OfferRow[] = Proposal.data.map(
        (item: any, index: number) => ({
          ...JSON.parse(JSON.stringify(item)), // ✅ deep clone
          id: item.id || Date.now() + index,
          file: null,
          fileUrl: item.documentData
            ? base64ToBlobUrl(item.documentData)
            : null,
        }),
      );
      setOfferData(mapped);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  // ── Generic row updaters (each touches only its own state) ───────────────

  const updateOfferRow = (id: number, field: keyof OfferRow, value: any) =>
    setOfferData((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );

  const updatePoRow = (id: number, field: keyof PurchaseOrderRow, value: any) =>
    setPurchaseOrderData((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );

  const updateInvoiceRow = (id: number, field: keyof InvoiceRow, value: any) =>
    setInvoiceData((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );

  const updatePaymentRow = (id: number, field: keyof PaymentRow, value: any) =>
    setPaymentData((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );

  // ── Add Row ──────────────────────────────────────────────────────────────

  const addOfferRow = () =>
    setOfferData((prev) => [...prev, createEmptyOfferRow()]);
  const addPoRow = () =>
    setPurchaseOrderData((prev) => [...prev, createEmptyPurchaseOrderRow()]);
  const addInvoiceRow = () =>
    setInvoiceData((prev) => [...prev, createEmptyInvoiceRow()]);
  const addPaymentRow = () =>
    setPaymentData((prev) => [...prev, createEmptyPaymentRow()]);

  // ── Submit offer row ─────────────────────────────────────────────────────

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const result = reader.result;

        // ✅ remove prefix
        const base64 = result.split(",")[1];

        resolve(base64);
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const handleOfferSubmit = async (row: OfferRow) => {
    console.log("row", row);
    const payload = {
      proposalNumber: row.proposalNumber,
      firmId: Number(row.firmId),
      customerId: 0,
      proposalDate: row.proposalDate,
      leadGenerator: row.leadGenerator,
      projectDetails: row.projectDetails,
      departmentId: Number(row.departmentId),
      estimatedHours: Number(row.hours),
      businessUnitId: Number(row.businessUnitId),
      status: row.status,
      comments: row.comments,
      documentData: row.file?.file,
    };
    console.log("row", payload);
    try {
      await postApi("Proposal", payload);
      toast.success("Sucessfully proposal data updated", { autoClose: 1500 });
      fetchData();
    } catch (err) {
      toast.error("Sucessfully proposal data updated", { autoClose: 1500 });
    }
  };

  // ── Remove file (offer) ──────────────────────────────────────────────────

  const removeOfferFile = (id: number) => {
    setOfferData((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        if (r.fileUrl) URL.revokeObjectURL(r.fileUrl);
        return { ...r, file: null, fileUrl: null, documentData: null };
      }),
    );
  };

  // ── Accordion ────────────────────────────────────────────────────────────

  const toggleAccordion = (key: string) =>
    setActiveAccordionKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );

  // ── Add Customer popup ───────────────────────────────────────────────────

  const openAddCustomer = () => {
    let root: ReactDOM.Root | null = null;
    Swal.fire({
      html: `<div id="react-child"></div>`,
      width: "90%",
      padding: "1rem",
      didOpen: () => {
        const container = document.getElementById("react-child");
        if (container) {
          root = ReactDOM.createRoot(container);
          root.render(
            <BrowserRouter>
              <AddCustomer />
            </BrowserRouter>,
          );
        }
      },
      willClose: () => {
        root?.unmount();
      },
    });
  };

  // ── Add Row Button ───────────────────────────────────────────────────────

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

  // ── Filtered offer data ──────────────────────────────────────────────────

  const filteredOfferData = offerData.filter((row) =>
    Object.values(row).join(" ").toLowerCase().includes(search.toLowerCase()),
  );

  const getFinancialYears = (): string[] => {
    const currentYear = new Date().getFullYear();

    const startYear = currentYear - 10;
    const endYear = currentYear + 3;

    const years: string[] = [];

    for (let year = startYear; year <= endYear; year++) {
      years.push(`${year}-${year + 1}`);
    }

    return years;
  };
  const financialYears = getFinancialYears();
  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <Fragment>
      {!loading ? (
        <Fragment>
          <Seo title={"Revenue"} />
          <Pageheader
            title="Dashboard"
            currentpage="Revenue"
            activepage="Revenue"
          />

          {/* ════════════════════════════════════════════════════════════════════
          OFFER DETAILS
      ════════════════════════════════════════════════════════════════════ */}
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
                        {filteredOfferData.map((row) => (
                          <tr key={row.id}>
                            {/* ID */}
                            <td>{row.id}</td>

                            {/* Financial Year */}
                            <td>
                              <select
                                className="form-control"
                                value={row.financialYear || ""}
                                onChange={(e) =>
                                  updateOfferRow(
                                    row.id,
                                    "financialYear",
                                    e.target.value,
                                  )
                                }
                              >
                                <option value="">Select Financial Year</option>

                                {financialYears.map((fy) => (
                                  <option key={fy} value={fy}>
                                    {fy}
                                  </option>
                                ))}
                              </select>
                            </td>

                            {/* Firm */}
                            <td>
                              <select
                                className="form-select"
                                value={row.firmId}
                                onChange={(e) =>
                                  updateOfferRow(
                                    row.id,
                                    "firmId",
                                    e.target.value,
                                  )
                                }
                              >
                                <option value="">Select</option>
                                {firms.length > 0 ? (
                                  firms.map((opt) => (
                                    <option key={opt.firmId} value={opt.firmId}>
                                      {opt.firmName}
                                    </option>
                                  ))
                                ) : (
                                  <option disabled>No options available</option>
                                )}
                              </select>
                            </td>

                            {/* Proposal No + Upload */}
                            <td>
                              <input
                                className="form-control mb-1"
                                value={row.proposalNumber}
                                onChange={(e) =>
                                  updateOfferRow(
                                    row.id,
                                    "proposalNumber",
                                    e.target.value,
                                  )
                                }
                              />
                              <FileUploadCell
                                file={row.file}
                                fileUrl={row.fileUrl}
                                value={row}
                                onUpload={async (f) => {
                                  console.log("original file:", f);

                                  const base64 = await fileToBase64(f);

                                  console.log("base64:", base64);

                                  updateOfferRow(row.id, "file", {
                                    file: base64,
                                    base64: base64, // store base64 if needed
                                  });
                                }}
                                onRemove={() => removeOfferFile(row.id)}
                              />
                            </td>

                            {/* Date */}
                            <td>
                              <SpkDatepickr
                                className="form-control"
                                selected={
                                  row.proposalDate
                                    ? new Date(row.proposalDate)
                                    : null
                                }
                                onChange={(date) => {
                                  updateOfferRow(row.id, "proposalDate", date);

                                  console.log(date); // ✅ correct
                                }}
                                placeholderText="Choose date"
                              />
                            </td>

                            {/* Customer */}
                            <td>
                              <select
                                className="form-select"
                                value={row.firmId}
                                onChange={(e) =>
                                  updateOfferRow(
                                    row.id,
                                    "firmId",
                                    e.target.value,
                                  )
                                }
                              >
                                <option value="">Select</option>
                                {customerInfo.length > 0 ? (
                                  customerInfo.map((opt) => (
                                    <option
                                      key={opt.customerId}
                                      value={opt.customerId}
                                    >
                                      {opt.customerName}
                                    </option>
                                  ))
                                ) : (
                                  <option disabled>No options available</option>
                                )}
                              </select>
                              {/* <input
                                className="form-control mb-1"
                                value={row.customer}
                                onChange={(e) =>
                                  updateOfferRow(
                                    row.id,
                                    "customer",
                                    e.target.value,
                                  )
                                }
                              /> */}
                              <SpkButton
                                Buttonvariant="danger"
                                Size="sm"
                                Customclass="btn"
                                onClickfunc={openAddCustomer}
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
                                  updateOfferRow(
                                    row.id,
                                    "leadGenerator",
                                    e.target.value,
                                  )
                                }
                              >
                                <option value="">Select</option>
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
                                  <option disabled>No options available</option>
                                )}
                              </select>
                            </td>

                            {/* Project Details */}
                            <td>
                              <input
                                className="form-control"
                                value={row.projectDetails}
                                onChange={(e) =>
                                  updateOfferRow(
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
                                  updateOfferRow(
                                    row.id,
                                    "businessUnitId",
                                    e.target.value,
                                  )
                                }
                              >
                                <option value="">Select</option>
                                {businessUnits.length > 0 ? (
                                  businessUnits.map((opt) => (
                                    <option
                                      key={opt.businessUnitId}
                                      value={opt.businessUnitId}
                                    >
                                      {opt.businessUnitName}
                                    </option>
                                  ))
                                ) : (
                                  <option disabled>No options available</option>
                                )}
                              </select>
                            </td>

                            {/* Department */}
                            <td>
                              <select
                                className="form-select"
                                value={row.departmentId}
                                onChange={(e) =>
                                  updateOfferRow(
                                    row.id,
                                    "departmentId",
                                    e.target.value,
                                  )
                                }
                              >
                                <option value="">Select</option>
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

                            {/* Efforts / Hours */}
                            <td>
                              <input
                                type="number"
                                className="form-control"
                                value={row.estimatedHours}
                                onChange={(e) =>
                                  updateOfferRow(
                                    row.id,
                                    "hours",
                                    e.target.value,
                                  )
                                }
                              />
                            </td>

                            {/* Status */}
                            <td>
                              <select
                                className="form-select"
                                value={row.status}
                                onChange={(e) =>
                                  updateOfferRow(
                                    row.id,
                                    "status",
                                    e.target.value,
                                  )
                                }
                              >
                                <option value="">Select</option>
                                {dropdownOptions.status.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            </td>

                            {/* Comments */}
                            <td>
                              <input
                                className="form-control"
                                value={row.comments ?? ""}
                                placeholder="Comments"
                                onChange={(e) =>
                                  updateOfferRow(
                                    row.id,
                                    "comments",
                                    e.target.value,
                                  )
                                }
                              />
                            </td>

                            {/* Actions */}
                            <td className="text-center">
                              <button
                                className="btn btn-primary btn-sm"
                                style={{
                                  whiteSpace: "nowrap",
                                  fontSize: "12px",
                                }}
                                onClick={() => handleOfferSubmit(row)}
                              >
                                Submit
                              </button>
                              <br />
                              <button
                                className="btn btn-danger btn-sm mt-1"
                                style={{
                                  whiteSpace: "nowrap",
                                  fontSize: "12px",
                                }}
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
                  <AddRowButton onClick={addOfferRow} />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* ════════════════════════════════════════════════════════════════════
          ACCORDION  —  Purchase Order | Invoice | Payment Details
      ════════════════════════════════════════════════════════════════════ */}
          <Row>
            <Col xl={12}>
              <Accordion alwaysOpen activeKey={activeAccordionKeys}>
                {/* ── 1. Purchase Order Details ──────────────────────────────── */}
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
                    <div
                      className="d-flex justify-content-end px-3 pt-3 pb-2"
                      style={{ borderBottom: "1px solid #f0f0f0" }}
                    >
                      <div className="search-box">
                        <input type="text" placeholder="Search..." />
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
                              {/* Proposal Number + Upload */}
                              <td>
                                <input
                                  className="form-control mb-1"
                                  value={poRow.proposalNumber}
                                  placeholder="Proposal number"
                                  onChange={(e) =>
                                    updatePoRow(
                                      poRow.id,
                                      "proposalNumber",
                                      e.target.value,
                                    )
                                  }
                                />
                                <FileUploadCell
                                  file={poRow.file}
                                  onUpload={(f) =>
                                    updatePoRow(poRow.id, "file", f)
                                  }
                                  onRemove={() =>
                                    updatePoRow(poRow.id, "file", null)
                                  }
                                />
                              </td>

                              {/* Project ID */}
                              <td>
                                <input
                                  className="form-control"
                                  value={poRow.projectId}
                                  placeholder="Project ID"
                                  onChange={(e) =>
                                    updatePoRow(
                                      poRow.id,
                                      "projectId",
                                      e.target.value,
                                    )
                                  }
                                />
                              </td>

                              {/* Business Unit */}
                              <td>
                                <select
                                  className="form-select"
                                  value={poRow.businessUnit}
                                  onChange={(e) =>
                                    updatePoRow(
                                      poRow.id,
                                      "businessUnit",
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="">Select</option>
                                  {businessUnits.map((opt) => (
                                    <option
                                      key={opt.businessUnitId}
                                      value={opt.businessUnitId}
                                    >
                                      {opt.businessUnitName}
                                    </option>
                                  ))}
                                </select>
                              </td>

                              {/* Order No */}
                              <td>
                                <input
                                  className="form-control mb-1"
                                  value={poRow.orderNo}
                                  placeholder="Order number"
                                  onChange={(e) =>
                                    updatePoRow(
                                      poRow.id,
                                      "orderNo",
                                      e.target.value,
                                    )
                                  }
                                />
                              </td>

                              {/* Order Date */}
                              <td>
                                <SpkDatepickr
                                  className="form-control"
                                  selected={
                                    poRow.orderDate
                                      ? new Date(poRow.orderDate as string)
                                      : null
                                  }
                                  onChange={(date: Date | null) =>
                                    updatePoRow(poRow.id, "orderDate", date)
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
                                      updatePoRow(
                                        poRow.id,
                                        "orderValue",
                                        e.target.value,
                                      )
                                    }
                                  >
                                    <option value="">Currency</option>
                                    {dropdownOptions.currency.map((opt) => (
                                      <option key={opt} value={opt}>
                                        {opt}
                                      </option>
                                    ))}
                                  </select>
                                  <input
                                    className="form-control"
                                    type="number"
                                    placeholder="Amount"
                                    value={poRow.orderAmount}
                                    onChange={(e) =>
                                      updatePoRow(
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
                                    updatePoRow(
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
                                    updatePoRow(
                                      poRow.id,
                                      "orderValueINR",
                                      e.target.value,
                                    )
                                  }
                                />
                              </td>

                              {/* Invoice Milestone */}
                              <td>
                                <InvoiceMilestoneCell
                                  rowId={poRow.id}
                                  value={poRow.invoiceMilestone}
                                  onSave={(val) =>
                                    updatePoRow(
                                      poRow.id,
                                      "invoiceMilestone",
                                      val,
                                    )
                                  }
                                />
                              </td>

                              {/* Status */}
                              <td>
                                <select
                                  className="form-select"
                                  value={poRow.status}
                                  onChange={(e) =>
                                    updatePoRow(
                                      poRow.id,
                                      "status",
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="">Select</option>
                                  {dropdownOptions.status.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                                </select>
                              </td>

                              {/* Actions */}
                              <td className="text-center">
                                <button
                                  className="btn btn-primary btn-sm"
                                  style={{
                                    whiteSpace: "nowrap",
                                    fontSize: "12px",
                                  }}
                                >
                                  Submit
                                </button>
                                <br />
                                <button
                                  className="btn btn-danger btn-sm mt-1"
                                  style={{
                                    whiteSpace: "nowrap",
                                    fontSize: "12px",
                                  }}
                                >
                                  Edit
                                </button>
                              </td>

                              {/* Comments */}
                              <td>
                                <input
                                  className="form-control"
                                  value={poRow.comments}
                                  placeholder="Comments"
                                  onChange={(e) =>
                                    updatePoRow(
                                      poRow.id,
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

                    <AddRowButton onClick={addPoRow} />
                  </Accordion.Body>
                </Accordion.Item>

                {/* ── 2. Invoice Details ─────────────────────────────────────── */}
                <Accordion.Item
                  eventKey="invoice"
                  className="custom-card mb-3"
                  style={{ border: "1px solid #dee2e6", borderRadius: "8px" }}
                >
                  <Accordion.Header onClick={() => toggleAccordion("invoice")}>
                    <span
                      className="fw-semibold"
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
                        <input type="text" placeholder="Search..." />
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
                              {/* Proposal Number + Upload */}
                              <td>
                                <input
                                  className="form-control mb-1"
                                  value={row.proposalNumber}
                                  placeholder="Proposal number"
                                  onChange={(e) =>
                                    updateInvoiceRow(
                                      row.id,
                                      "proposalNumber",
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

                              {/* Invoice Number */}
                              <td>
                                <input
                                  className="form-control"
                                  value={row.invoiceNumber}
                                  onChange={(e) =>
                                    updateInvoiceRow(
                                      row.id,
                                      "invoiceNumber",
                                      e.target.value,
                                    )
                                  }
                                />
                              </td>

                              {/* Invoice Date */}
                              <td>
                                <SpkDatepickr
                                  className="form-control"
                                  selected={
                                    row.invoiceDate
                                      ? new Date(row.invoiceDate as string)
                                      : null
                                  }
                                  onChange={(date: Date | null) =>
                                    updateInvoiceRow(
                                      row.id,
                                      "invoiceDate",
                                      date,
                                    )
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
                                    {dropdownOptions.currency.map((opt) => (
                                      <option key={opt} value={opt}>
                                        {opt}
                                      </option>
                                    ))}
                                  </select>
                                  <input
                                    className="form-control"
                                    type="number"
                                    placeholder="Amount"
                                    value={row.invoiceAmount}
                                    onChange={(e) =>
                                      updateInvoiceRow(
                                        row.id,
                                        "invoiceAmount",
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
                                  selected={
                                    row.dueDate
                                      ? new Date(row.dueDate as string)
                                      : null
                                  }
                                  onChange={(date: Date | null) =>
                                    updateInvoiceRow(row.id, "dueDate", date)
                                  }
                                  placeholderText="Choose date"
                                  popperPlacement="bottom-start"
                                />
                              </td>

                              {/* Status */}
                              <td>
                                <select
                                  className="form-select"
                                  value={row.status}
                                  onChange={(e) =>
                                    updateInvoiceRow(
                                      row.id,
                                      "status",
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="">Select</option>
                                  {dropdownOptions.status.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                                </select>
                              </td>

                              {/* Actions */}
                              <td className="text-center">
                                <button
                                  className="btn btn-primary btn-sm"
                                  style={{
                                    whiteSpace: "nowrap",
                                    fontSize: "12px",
                                  }}
                                >
                                  Submit
                                </button>
                                <br />
                                <button
                                  className="btn btn-danger btn-sm mt-1"
                                  style={{
                                    whiteSpace: "nowrap",
                                    fontSize: "12px",
                                  }}
                                >
                                  Edit
                                </button>
                              </td>

                              {/* Comments */}
                              <td>
                                <input
                                  className="form-control"
                                  value={row.comments}
                                  placeholder="Comments"
                                  onChange={(e) =>
                                    updateInvoiceRow(
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

                    <AddRowButton onClick={addInvoiceRow} />
                  </Accordion.Body>
                </Accordion.Item>

                {/* ── 3. Payment Details ─────────────────────────────────────── */}
                <Accordion.Item
                  eventKey="payment"
                  className="custom-card mb-3"
                  style={{ border: "1px solid #dee2e6", borderRadius: "8px" }}
                >
                  <Accordion.Header onClick={() => toggleAccordion("payment")}>
                    <span
                      className="fw-semibold"
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
                        <input type="text" placeholder="Search..." />
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
                          </tr>
                        </thead>
                        <tbody>
                          {paymentData.map((row) => (
                            <tr key={row.id}>
                              {/* Proposal Number */}
                              <td>
                                <input
                                  className="form-control"
                                  value={row.proposalNumber}
                                  placeholder="Proposal number"
                                  onChange={(e) =>
                                    updatePaymentRow(
                                      row.id,
                                      "proposalNumber",
                                      e.target.value,
                                    )
                                  }
                                />
                              </td>

                              {/* Documents */}
                              <td>
                                <FileUploadCell
                                  file={row.file}
                                  onUpload={(f) =>
                                    updatePaymentRow(row.id, "file", f)
                                  }
                                  onRemove={() =>
                                    updatePaymentRow(row.id, "file", null)
                                  }
                                />
                              </td>

                              {/* Value Received */}
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
                                    value={row.amountCurrency}
                                    onChange={(e) =>
                                      updatePaymentRow(
                                        row.id,
                                        "amountCurrency",
                                        e.target.value,
                                      )
                                    }
                                  >
                                    <option value="">Currency</option>
                                    {dropdownOptions.currency.map((opt) => (
                                      <option key={opt} value={opt}>
                                        {opt}
                                      </option>
                                    ))}
                                  </select>
                                  <input
                                    className="form-control"
                                    type="number"
                                    placeholder="Amount"
                                    value={row.amountValue}
                                    onChange={(e) =>
                                      updatePaymentRow(
                                        row.id,
                                        "amountValue",
                                        e.target.value,
                                      )
                                    }
                                  />
                                </div>
                              </td>

                              {/* Realised Date */}
                              <td>
                                <SpkDatepickr
                                  className="form-control"
                                  selected={
                                    row.realisedDate
                                      ? new Date(row.realisedDate as string)
                                      : null
                                  }
                                  onChange={(date: Date | null) =>
                                    updatePaymentRow(
                                      row.id,
                                      "realisedDate",
                                      date,
                                    )
                                  }
                                  placeholderText="Choose date"
                                />
                              </td>

                              {/* Payment Status */}
                              <td>
                                <select
                                  className="form-select"
                                  value={row.paymentStatus}
                                  onChange={(e) =>
                                    updatePaymentRow(
                                      row.id,
                                      "paymentStatus",
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="">Select</option>
                                  {dropdownOptions.paymentStatus.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
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
                                  placeholder="Comments"
                                  onChange={(e) =>
                                    updatePaymentRow(
                                      row.id,
                                      "comments",
                                      e.target.value,
                                    )
                                  }
                                />
                              </td>

                              {/* Actions */}
                              <td className="text-center">
                                <button
                                  className="btn btn-primary btn-sm"
                                  style={{
                                    whiteSpace: "nowrap",
                                    fontSize: "12px",
                                  }}
                                >
                                  Submit
                                </button>
                                <br />
                                <button
                                  className="btn btn-danger btn-sm mt-1"
                                  style={{
                                    whiteSpace: "nowrap",
                                    fontSize: "12px",
                                  }}
                                >
                                  Edit
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <AddRowButton onClick={addPaymentRow} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Fragment>
      ) : (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-light"
          style={{ zIndex: 9999 }}
        >
          <div className="spinner-border text-primary" role="status" />
        </div>
      )}
    </Fragment>
  );
};

export default Crm;
