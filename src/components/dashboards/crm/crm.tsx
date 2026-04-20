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
  Modal,
} from "react-bootstrap";
import SpkDatepickr from "../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import "./crm.css";
import { getApi, postApi, putApi } from "../../../api/services";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import AddCustomer from "../../apps/ecommerce/add-products/add-products";
import { toast, ToastContainer } from "react-toastify";
import moment from "moment";

// ─── Types ───────────────────────────────────────────────────────────────────

interface OfferRow {
  year: string;
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

type FileUploadCellProps = {
  file: File | null;
  fileUrl?: string | null;
  value?: {
    fileName?: string;
  };
  onUpload: (f: File) => void;
  onRemove: () => void;
};

const FileUploadCell = ({
  file,
  fileUrl,
  value,
  onUpload,
  onRemove,
}: FileUploadCellProps) => {
  const fileName = file?.name || value?.fileName || "No file";

  const handlePreview = () => {
    if (file) {
      const url = URL.createObjectURL(file);
      window.open(url);
    } else if (fileUrl) {
      window.open(fileUrl);
    }
  };

  return (
    <div className="file-upload-cell">
      <label className="upload-btn">
        {file || fileUrl || value?.fileName ? "upload" : "Upload"}
        <input
          type="file"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onUpload(f);
            e.target.value = "";
          }}
        />
      </label>

      {(file || fileUrl || value?.fileName) && (
        <div className="file-info">
          <div className="file-top">
            <button
              type="button"
              className="btn btn-sm btn-link p-0"
              onClick={handlePreview}
            >
              📄 {fileName}
            </button>

            <button
              type="button"
              className="remove-file-btn"
              onClick={onRemove}
            >
              ✕
            </button>
          </div>

          {file && (
            <span className="file-size">
              {(file.size / 1024).toFixed(1)} KB
            </span>
          )}
        </div>
      )}
    </div>
  );
};

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
  const [offerData, setOfferData] = useState<OfferRow[]>([]);

  // ── Purchase Order state ─────────────────────────────────────────────────
  const [purchaseOrderData, setPurchaseOrderData] = useState<
    PurchaseOrderRow[]
  >([createEmptyPurchaseOrderRow()]);

  // ── Invoice state ────────────────────────────────────────────────────────
  const [invoiceData, setInvoiceData] = useState<InvoiceRow[]>([
    {
      id: 1,
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
    },
  ]);

  // ── Payment state ────────────────────────────────────────────────────────
  const [paymentData, setPaymentData] = useState<PaymentRow[]>([
    {
      id: 1,
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
    currency: [
      "INR",
      "USD",
      "EURO",
      "GBP",
      "Chinese Yuan",
      "Japanese Yen",
      "Dollar",
    ],
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
  const [orderDetailsData, setOrderDetailsData] = useState<any>([]);
  const [invoiceDetailsData, setInvoiceDetailsData] = useState<any>([]);
  const [paymentDetailsData, setPaymentDetailsData] = useState<any>([]);
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
    setLoading(false);
    try {
      const [Utility, Proposal, order, invoice, payment] = await Promise.all([
        getApi("Uitility"),
        getApi("Proposal"),
        getApi("Order"),
        getApi("Invoice"),
        getApi("InvoicePayment"),
      ]);
      console.log("payment", payment);
      setBusinessUnits(Utility.data.businessUnits);
      setDepartments(Utility.data.departments);
      setEmployees(Utility.data.employees);
      //  setCustomerInfo(customer.data);
      setFirms(Utility.data.firms);
      setOrderDetailsData(order.data);
      setInvoiceDetailsData(invoice.data);
      setPaymentDetailsData([payment.data]);
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
      setLoading(false);
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

  const [btnLoading, setBtnLoading] = useState(false);

  const modalSubmit = async () => {
    setBtnLoading(true);
    console.log("proposalData", proposalData);
    const row = proposalData[0];
    const payload = {
      proposalNumber: row.proposalNumber,
      firmId: Number(row.firmId),
      customerId: 0,
      proposalDate: row.proposalDate,
      leadGenerator: row.leadGenerator,
      projectDetails: row.projectDetails,
      departmentId: Number(row.departmentId),
      estimatedHours: Number(row.estimatedHours),
      businessUnitId: Number(row.businessUnitId),
      status: row.status,
      comments: row.comments,
      documentData: row.file?.base64,
      year: row.year,
      fileName: row.file.fileName,
    };
    console.log("row", payload);
    try {
      await postApi("Proposal", payload);

      fetchData();
      setBtnLoading(false);
      setShowProposalModal(false);
      toast.success("Sucessfully proposal data updated", { autoClose: 1500 });
    } catch (err) {
      setBtnLoading(false);
      toast.error("Pease try again", { autoClose: 1500 });
    }
  };
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
      documentData: row.file?.base64,
      year: row.year,
      fileName: row.fileName,
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
  const [addCustomerPopUP, setAddCustomerPopUp] = useState(false);
  const openAddCustomer = () => {
    setAddCustomerPopUp(true);
  };
  const createEmptyRow = () => ({
    id: Date.now(),
    year: "",
    firmId: "",
    proposalNumber: "",
    proposalDate: "",
    customerId: "",
    leadGenerator: "",
    projectDetails: "",
    businessUnitId: "",
    departmentId: "",
    estimatedHours: "",
    status: "",
    comments: "",
    file: null,
    fileUrl: null,
  });

  const updateModalRow = (id, field, value) => {
    setEditProposalData((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );
  };

  const updateAddProposalRow = (id, field, value) => {
    setProposalData((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );
  };

  const [showProposalModal, setShowProposalModal] = useState(false);
  const [proposalData, setProposalData] = useState([]);
  const addProposal = () => {
    setProposalData([createEmptyRow()]); // or [] if no row needed
    setShowProposalModal(true);
  };
  //------Edit row table --------//
  const [showEditModal, setEditModal] = useState(false);
  const [editPropodaData, setEditProposalData] = useState([]);

  const handleEditProposalData = (row) => {
    setEditProposalData([{ ...row }]);
    setEditModal(true);
  };

  const handleUpdateProposalData = async (rows) => {
    try {
      const row = editPropodaData[0];
      console.log("wor", row);
      const payload = {
        proposalNumber: row.proposalNumber,
        firmId: Number(row.firmId),
        customerId: 0,
        proposalDate: row.proposalDate,
        leadGenerator: row.leadGenerator,
        projectDetails: row.projectDetails,
        departmentId: Number(row.departmentId),
        estimatedHours: Number(row.estimatedHours),
        businessUnitId: Number(row.businessUnitId),
        status: row.status,
        comments: row.comments,
        documentData: row.documentData,
        year: row.year,
        fileName: row.fileName,
        proposalId: rows.proposalId,
      };

      await putApi(`Proposal/${rows.proposalId}`, payload);
      fetchData();
      // ✅ Update main table instantly
      // setOfferData((prev) =>
      //   prev.map((row) => (row.id === updatedRow.id ? updatedRow : row)),
      // );

      toast.success("Sucessfully proposal data updated", { autoClose: 1500 });

      setEditModal(false);
    } catch (err) {
      toast.error("Update failed", { autoClose: 1500 });
    }
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

  const [orderDetailsPopUp, setOrderDetailsPopup] = useState(false);
  const [editOrderDetails, setEditOrderDetails] = useState([]);
  const [orderEditDetailsPopUp, setOrderEditDetailsPopup] = useState(false);
  const addOrderDetails = () => {
    setOrderDetailsPopup(true);
  };
  const handleUpdateOrderDetails = async (row: any) => {
    console.log(row);
    const payload = {
      proposalId: row.proposalId,
      orderNumber: row.orderNo,
      orderDate: row.orderDate,
      orderValue: Number(row.orderAmount),
      orderCurrency: row.orderValue,
      orderValueInr: Number(row.orderValueINR),
      conversionRate: Number(row.conversionRate),
      status: row.status,
      invoiceMilestones: row.invoiceMilestone,
      businessUnitId: Number(row.businessUnit),
      projectName: row.projectId,
      comments: row.comments,
    };
    try {
      await postApi("Order", payload);
      toast.success("Sucessfully proposal data updated", { autoClose: 1500 });
      setOrderDetailsPopup(false);
      try {
        const [order] = await Promise.all([getApi("Order")]);
        setOrderDetailsData(order.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    } catch (err) {
      toast.error("Techinicall Error", { autoClose: 1500 });
    }
  };

  const handleEditOrderDetails = async (row: any) => {
    setEditOrderDetails([{ ...row }]);
    setOrderEditDetailsPopup(true);
  };
  const updateEditOrdetailsRow = (
    id: number,
    field: keyof PurchaseOrderRow,
    value: any,
  ) =>
    setEditOrderDetails((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );

  const handleOrderDetailsUpdate = async (row) => {
    console.log("row", row);
    const payload = {
      orderId: row.orderId,
      proposalId: row.proposalId,
      orderNumber: row.orderNumber,
      orderDate: row.orderDate,
      orderValue: row.orderValue,
      orderCurrency: row.orderCurrency,
      orderValueInr: row.orderValueInr,
      conversionRate: row.conversionRate,
      status: row.status,
      invoiceMilestone: row.invoiceMilestone,
      businessUnitId: row.businessUnitId,
      projectName: row.projectName,
      comments: row.comments,
    };
    try {
      await putApi(`Order`, payload);
      toast.success("Sucessfully proposal data updated", { autoClose: 1500 });
      try {
        const [order] = await Promise.all([getApi("Order")]);
        setOrderDetailsData(order.data);
        setLoading(false);
        setOrderEditDetailsPopup(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    } catch (err) {
      toast.error("Update failed", { autoClose: 1500 });
    }
  };

  //-----------Invvoice Details------------/////
  const [invoiceDetailsPopUp, setInvoiceDetailsPopup] = useState(false);
  const [invoiceEditDetails, setInvoiceEditDetails] = useState([]);
  const [invoiceEditDetailsPopUp, setInvoiceEditDetailsPopUp] = useState(false);

  const addInvoiceDetails = () => {
    setInvoiceDetailsPopup(true);
  };

  const handleInvoiceAddDetails = async (row: any) => {
    setInvoiceDetailsPopup(false);
    console.log("row", row);
    const payload = {
      orderId: row.orderId,
      invoiceNumber: row.invoiceNumber,
      invoiceDate: row.invoiceDate,
      milestone: "12",
      invoiceValue: row.invoiceAmount,
      invoiceCurrency: row.invoiceValue,
      conversionRate: Number(row.conversionRate),
      invoiceValueInr: row.invoiceValueINR,
      paymentTerm: row.paymentTerm,
      dueDays: 33,
      dueDate: row.dueDate,
      paymentStatus: row.status,
      comments: row.comments,
    };
    try {
      await postApi(`Invoice`, payload);
      toast.success("Sucessfully proposal data updated", { autoClose: 1500 });
      try {
        const [Invoice] = await Promise.all([getApi("Invoice")]);
        setInvoiceDetailsData(Invoice.data);
        setInvoiceEditDetailsPopUp(false);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    } catch (err) {
      toast.error("Techinicall Error", { autoClose: 1500 });
    }
  };

  const updateInvoiceEdit = (id: number, field: keyof InvoiceRow, value: any) =>
    setInvoiceEditDetails((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );

  const handleInvoiceEditDetails = (row: any) => {
    console.log(row);
    setInvoiceEditDetails([{ ...row }]);
    setInvoiceEditDetailsPopUp(true);
  };

  function toISODate(inputDate) {
    if (!inputDate) return "";

    // Try parsing multiple possible formats
    const parsed = moment(
      inputDate,
      ["D-MM-YYYY", "DD-MM-YYYY", "YYYY-MM-DD", moment.ISO_8601],
      true,
    );

    if (!parsed.isValid()) return "Invalid date";

    return parsed.utc().toISOString();
  }

  const handleInvoiceDetailsUpdate = async (row: any) => {
    console.log(row);
    const payload = {
      invoiceId: row.invoiceId,
      orderId: row.orderId,
      invoiceNumber: row.invoiceNumber,
      invoiceDate: toISODate(row.invoiceDate),
      milestone: "1733",
      invoiceValue: Number(row.invoiceValue),
      invoiceCurrency: row.invoiceCurrency,
      conversionRate: Number(row.invoiceConversionRate),
      invoiceValueInr: Number(row.invoiceValueInr),
      paymentTerm: row.paymentTerm,
      dueDays: row.dueDays,
      dueDate: toISODate(row.dueDate), //row.dueDate,
      paymentStatus: row.paymentStatus,
      comments: row.invoiceComments,
      createdAt: row.invoiceCreatedAt,
      updatedAt: row.invoiceUpdatedAt,
    };
    try {
      await putApi(`Invoice/${row.invoiceId}`, payload);
      toast.success("Sucessfully proposal data updated", { autoClose: 1500 });
      try {
        const [Invoice] = await Promise.all([getApi("Invoice")]);
        setInvoiceDetailsData(Invoice.data);
        setInvoiceEditDetailsPopUp(false);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    } catch (err) {
      toast.error("Techinicall Error", { autoClose: 1500 });
    }
  };

  //----------Payment details -------------//

  const [paymentDetailsPopUp, setPaymentDetailsPayment] = useState(false);
  const [paymentEditPopUp, setPaymentEditPopUP] = useState(false);
  const [paymentEditDetails, setPaymentEditDetails] = useState([]);

  const handlePaymentAddDetails = () => {
    setPaymentDetailsPayment(true);
  };

  const handlePaymentDetailsStore = async (row: any) => {
    console.log(row);
    const payload = {
      invoiceId: row.invoiceId,
      paymentDate: row.realisedDate,
      amountReceived: Number(row.valueReceived),
      currency: row.amountCurrency,
      amountReceivedInr: Number(row.valueReceived),
      conversionRateAtPayment: Number(row.amountValue),
      fluctuationDifference: Number(row.fluctuation),
      paymentMethod: row.paymentStatus,
      referenceNumber: "123",
      comments: row.comments,
    };
    try {
      await postApi(`InvoicePayment`, payload);
      toast.success("Sucessfully invoice payment data updated", {
        autoClose: 1500,
      });
      try {
        const [InvoicePayment] = await Promise.all([getApi("InvoicePayment")]);
        setPaymentData([InvoicePayment.data]);
        setPaymentDetailsPayment(false);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    } catch (err) {
      toast.error("Techinicall Error", { autoClose: 1500 });
    }
  };

  const handlePaymentEditDetails = (row: any) => {
    console.log(row);
    setPaymentEditDetails([{ ...row }]);
    setPaymentEditPopUP(true);
  };

    const updatePaymenteEdit = (id: number, field: keyof PaymentRow, value: any) =>
    setPaymentEditDetails((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );

  const handlePaymentUpdateDetails = async (row:any) => {
    console.log(row);
    const payload = {
      paymentId: row.paymentId,
      paymentDate: "2026-04-20T18:22:31.160Z",//row.paymentDate,
      amountReceived:Number(row.amountReceived),
      currency: row.currency,
      amountReceivedInr: row.amountReceivedInr,
      conversionRateAtPayment: row.conversionRateAtPayment,
      fluctuationDifference: Number(row.fluctuationDifference),
      paymentMethod: row.paymentMethod,
      referenceNumber: row.referenceNumber,
      comments: row.comments,
    };
    try {
      await putApi(`InvoicePayment/${row.invoiceId}`, payload);
      toast.success("Sucessfully invoice payment data updated", {
        autoClose: 1500,
      });
      try {
        const [InvoicePayment] = await Promise.all([getApi("InvoicePayment")]);
        setPaymentData([InvoicePayment.data]);
        setPaymentEditPopUP(false);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    } catch (err) {
      toast.error("Techinicall Error", { autoClose: 1500 });
    }
  };

  const getOrderDetailsGroup =
    orderDetailsData.length > 0 &&
    orderDetailsData.reduce((acc: any, item) => {
      if (!acc[item.proposalNumber]) {
        acc[item.proposalNumber] = [];
      }
      acc[item.proposalNumber].push(item);
      return acc;
    }, {});

  const getInvoiceDeetailsGroup = invoiceDetailsData.reduce(
    (acc: any, item) => {
      const proposalKey = item.proposalNumber;
      const orderKey = String(item.orderNumber);

      if (!acc[proposalKey]) acc[proposalKey] = {};
      if (!acc[proposalKey][orderKey]) acc[proposalKey][orderKey] = [];

      acc[proposalKey][orderKey].push(item);

      return acc;
    },
    {},
  );

  const base64ToBlob = (base64, mimeType) => {
    const sliceSize = 512;
    const byteCharacters = atob(base64);

    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
  };

  const handleFile = (row) => {
    const base64 = row.documentData;

    if (!base64) return;

    const blob = base64ToBlob(base64);

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    document.body.appendChild(a);

    // 🔥 Force correct file name
    let fileName = row.fileName || "document.docx";
    if (!fileName.toLowerCase().endsWith(".docx")) {
      fileName += ".docx";
    }

    a.href = url;
    a.setAttribute("download", fileName);

    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Fragment>
      {!loading ? (
        <Fragment>
          <ToastContainer />
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
                  <div className="d-flex justify-content-between gap-2">
                    <SpkButton
                      Buttonvariant="danger"
                      Size="sm"
                      Customclass="btn"
                      onClickfunc={addProposal}
                    >
                      Add Proposal
                    </SpkButton>
                    <div className="search-box ml-2 mr-2">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
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
                        {filteredOfferData.map((row, index) => (
                          <tr key={row.id}>
                            {/* ID */}
                            <td>{index + 1}</td>

                            {/* Financial Year */}
                            <td>
                              <select
                                className="form-control"
                                value={row.year || ""}
                                disabled
                                onChange={(e) =>
                                  updateOfferRow(row.id, "year", e.target.value)
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
                                disabled
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
                                disabled
                                value={row.proposalNumber}
                                onChange={(e) =>
                                  updateOfferRow(
                                    row.id,
                                    "proposalNumber",
                                    e.target.value,
                                  )
                                }
                              />
                              <button
                                className="btn btn-sm btn-secondary"
                                onClick={() => handleFile(row)}
                              >
                                View and download
                              </button>
                              <br />
                              {row.fileName ? (
                                <small className="text-muted">
                                  📎 {row.fileName}
                                </small>
                              ) : (
                                <small className="text-muted"></small>
                              )}
                            </td>

                            {/* Date */}
                            <td>
                              <SpkDatepickr
                                className="form-control"
                                disabled
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
                                disabled
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
                            </td>

                            {/* Lead Generator */}
                            <td>
                              <select
                                className="form-select"
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                                disabled
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
                              <br />
                              <button
                                className="btn btn-danger btn-sm mt-1"
                                onClick={() => handleEditProposalData(row)}
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
                  {/* <AddRowButton onClick={addOfferRow} /> */}
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
                      className="d-flex justify-content-end px-3 pt-3 pb-2 gap-3"
                      style={{ borderBottom: "1px solid #f0f0f0" }}
                    >
                      <SpkButton
                        Buttonvariant="danger"
                        Size="sm"
                        Customclass="btn"
                        onClickfunc={addOrderDetails}
                      >
                        Add Order Details
                      </SpkButton>
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
                            <th>Order Currency</th>
                            <th>Order Value</th>
                            <th>Conversion Rate</th>
                            <th>Order Value in INR</th>
                            <th>Invoice Milestones</th>
                            <th>Status</th>
                            <th>Comments</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.keys(getOrderDetailsGroup).map(
                            (proposalNumber) => {
                              const rows = getOrderDetailsGroup[proposalNumber];

                              return rows.map((poRow: any, index: number) => (
                                <tr key={poRow.orderId}>
                                  {/* ✅ Proposal Number */}
                                  {index === 0 && (
                                    <td rowSpan={rows.length}>
                                      <input
                                        className="form-control mb-1"
                                        value={proposalNumber}
                                        disabled
                                      />
                                    </td>
                                  )}

                                  {/* ✅ Project ID */}

                                  <td>
                                    <input
                                      className="form-control"
                                      value={poRow.proposalId}
                                      disabled
                                    />
                                  </td>

                                  {/* ✅ Business Unit */}

                                  <td>
                                    <select
                                      className="form-select"
                                      value={poRow.businessUnitId}
                                      disabled
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
                                  {/* 🔽 ORDER LEVEL FIELDS (no merge) */}

                                  {/* Order No */}
                                  <td>
                                    <input
                                      className="form-control mb-1"
                                      value={poRow.orderNumber}
                                      disabled
                                    />
                                  </td>

                                  {/* Order Date */}
                                  <td>
                                    <SpkDatepickr
                                      className="form-control"
                                      disabled
                                      selected={
                                        poRow.orderDate
                                          ? new Date(poRow.orderDate)
                                          : null
                                      }
                                      placeholderText="Choose date"
                                    />
                                  </td>

                                  {/* Currency */}
                                  <td>
                                    <select
                                      className="form-select"
                                      disabled
                                      value={poRow.orderCurrency}
                                    >
                                      <option value="">Currency</option>
                                      {dropdownOptions.currency.map((opt) => (
                                        <option key={opt} value={opt}>
                                          {opt}
                                        </option>
                                      ))}
                                    </select>
                                  </td>

                                  {/* Order Value */}
                                  <td>
                                    <input
                                      className="form-control"
                                      type="number"
                                      value={poRow.orderValue}
                                      disabled
                                    />
                                  </td>

                                  {/* Conversion Rate */}
                                  <td>
                                    <input
                                      className="form-control"
                                      value={poRow.conversionRate}
                                      disabled
                                    />
                                  </td>

                                  {/* INR Value */}
                                  <td>
                                    <input
                                      className="form-control"
                                      value={poRow.orderValueInr}
                                      disabled
                                    />
                                  </td>

                                  {/* Invoice Milestone */}
                                  <td>
                                    <InvoiceMilestoneCell
                                      rowId={poRow.id}
                                      value={poRow.invoiceMilestone}
                                      disabled
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
                                      disabled
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
                                      value={poRow.comments}
                                      disabled
                                    />
                                  </td>

                                  {/* Edit */}
                                  <td className="text-center">
                                    <button
                                      className="btn btn-danger btn-sm mt-1"
                                      onClick={() =>
                                        handleEditOrderDetails(poRow)
                                      }
                                    >
                                      Edit
                                    </button>
                                  </td>
                                </tr>
                              ));
                            },
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* <AddRowButton onClick={addPoRow} /> */}
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
                      className="d-flex justify-content-end px-3 pt-3 pb-2 gap-3"
                      style={{ borderBottom: "1px solid #f0f0f0" }}
                    >
                      <SpkButton
                        Buttonvariant="danger"
                        Size="sm"
                        Customclass="btn"
                        onClickfunc={addInvoiceDetails}
                      >
                        Add Invoice Details
                      </SpkButton>
                      <div className="search-box">
                        <input type="text" placeholder="Search..." />
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table table-bordered app-table mb-0">
                        <thead className="table-primary">
                          <tr>
                            <th>Proposal Number</th>
                            <th>Order Number</th>
                            <th>Invoice Number</th>
                            <th>Invoice Date</th>
                            <th>Invoice Currency</th>
                            <th>Invoice Value</th>
                            <th>Conversion Rate</th>
                            <th>Invoice Value (INR)</th>
                            <th>Payment Term</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Comments</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(getInvoiceDeetailsGroup).map(
                            ([proposalNumber, orders]: any) => {
                              const orderEntries = Object.entries(orders);

                              const proposalRowSpan = orderEntries.reduce(
                                (sum: number, [, rows]: any) =>
                                  sum + rows.length,
                                0,
                              );

                              return orderEntries
                                .map(
                                  (
                                    [orderNumber, rows]: any,
                                    orderIndex: number,
                                  ) => {
                                    return rows.map(
                                      (row: any, rowIndex: number) => (
                                        <tr key={row.id}>
                                          {/* ✅ Proposal Number */}
                                          {orderIndex === 0 &&
                                            rowIndex === 0 && (
                                              <td rowSpan={proposalRowSpan}>
                                                <input
                                                  className="form-control"
                                                  value={proposalNumber}
                                                  disabled
                                                />
                                              </td>
                                            )}

                                          {/* ✅ Order Number */}
                                          {rowIndex === 0 && (
                                            <td rowSpan={rows.length}>
                                              <input
                                                className="form-control"
                                                value={orderNumber}
                                                disabled
                                              />
                                            </td>
                                          )}

                                          {/* 🔽 ALL YOUR FIELDS */}

                                          {/* Invoice Number */}
                                          <td>
                                            <input
                                              className="form-control"
                                              value={row.invoiceNumber}
                                              disabled
                                            />
                                          </td>

                                          {/* Invoice Date */}
                                          <td>
                                            <SpkDatepickr
                                              className="form-control"
                                              disabled
                                              selected={
                                                row.invoiceDate
                                                  ? new Date(row.invoiceDate)
                                                  : null
                                              }
                                            />
                                          </td>

                                          {/* Currency */}
                                          <td>
                                            <select
                                              className="form-select"
                                              disabled
                                              value={row.invoiceCurrency}
                                            >
                                              <option value="">Currency</option>
                                              {dropdownOptions.currency.map(
                                                (opt) => (
                                                  <option key={opt} value={opt}>
                                                    {opt}
                                                  </option>
                                                ),
                                              )}
                                            </select>
                                          </td>

                                          {/* Invoice Value */}
                                          <td>
                                            <input
                                              className="form-control"
                                              type="number"
                                              value={row.invoiceValue}
                                              disabled
                                            />
                                          </td>

                                          {/* Conversion Rate */}
                                          <td>
                                            <input
                                              className="form-control"
                                              value={row.invoiceConversionRate}
                                              disabled
                                            />
                                          </td>

                                          {/* Invoice Value INR */}
                                          <td>
                                            <input
                                              className="form-control"
                                              value={row.invoiceValueInr}
                                              disabled
                                            />
                                          </td>

                                          {/* Payment Term */}
                                          <td>
                                            <input
                                              className="form-control"
                                              value={row.paymentTerm}
                                              disabled
                                            />
                                          </td>

                                          {/* Due Date */}
                                          <td>
                                            <SpkDatepickr
                                              className="form-control"
                                              disabled
                                              selected={
                                                row.dueDate
                                                  ? new Date(row.dueDate)
                                                  : null
                                              }
                                            />
                                          </td>

                                          {/* Status */}
                                          <td>
                                            <select
                                              className="form-select"
                                              value={row.paymentStatus}
                                              disabled
                                            >
                                              <option value="">Select</option>
                                              {dropdownOptions.status.map(
                                                (opt) => (
                                                  <option key={opt} value={opt}>
                                                    {opt}
                                                  </option>
                                                ),
                                              )}
                                            </select>
                                          </td>

                                          {/* Comments */}
                                          <td>
                                            <input
                                              className="form-control"
                                              value={row.invoiceComments}
                                              disabled
                                            />
                                          </td>

                                          {/* Actions */}
                                          <td className="text-center">
                                            <button
                                              className="btn btn-danger btn-sm"
                                              onClick={() =>
                                                handleInvoiceEditDetails(row)
                                              }
                                            >
                                              Edit
                                            </button>
                                          </td>
                                        </tr>
                                      ),
                                    );
                                  },
                                )
                                .flat();
                            },
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* <AddRowButton onClick={addInvoiceRow} /> */}
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
                      className="d-flex justify-content-end px-3 pt-3 pb-2 gap-3"
                      style={{ borderBottom: "1px solid #f0f0f0" }}
                    >
                      <SpkButton
                        Buttonvariant="danger"
                        Size="sm"
                        Customclass="btn"
                        onClickfunc={handlePaymentAddDetails}
                      >
                        Add Payment Details
                      </SpkButton>
                      <div className="search-box">
                        <input type="text" placeholder="Search..." />
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table table-bordered table-hover app-table mb-0">
                        <thead className="table-primary">
                          <tr>
                            <th>Proposal Number</th>
                            <th>Order Number</th>
                            <th>Invoice Number</th>
                            <th>Documents</th>
                            <th>Value Received</th>
                            <th>Currency</th>
                            <th>Amount Realised</th>
                            <th>Realised Date</th>
                            <th>Payment Status</th>
                            <th>Fluctuation Difference</th>
                            <th>Comments</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paymentDetailsData.map((row) => (
                            <tr key={row.id}>
                              {/* Proposal Number */}
                              <td>
                                <input
                                  className="form-control"
                                  value={row.proposalNumber}
                                  placeholder="Proposal number"
                                  disabled
                                  onChange={(e) =>
                                    updatePaymentRow(
                                      row.id,
                                      "proposalNumber",
                                      e.target.value,
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  value={row.orderNumber}
                                  placeholder="Proposal number"
                                  disabled
                                  onChange={(e) =>
                                    updatePaymentRow(
                                      row.id,
                                      "orderNumber",
                                      e.target.value,
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  className="form-control"
                                  value={row.invoiceId}
                                  placeholder="invoiceId number"
                                  disabled
                                  onChange={(e) =>
                                    updatePaymentRow(
                                      row.id,
                                      "invoiceId",
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
                                  value={row.amountReceived}
                                  disabled
                                  onChange={(e) =>
                                    updatePaymentRow(
                                      row.id,
                                      "amountReceived",
                                      e.target.value,
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <select
                                  className="form-select"
                                  style={{ maxWidth: "110px" }}
                                  disabled
                                  value={row.currency}
                                  onChange={(e) =>
                                    updatePaymentRow(
                                      row.id,
                                      "currency",
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
                              </td>
                              {/* Amount Realised (currency + amount) */}
                              <td>
                                <div className="d-flex gap-1">
                                  <input
                                    className="form-control"
                                    disabled
                                    type="number"
                                    placeholder="Amount"
                                    value={row.amountReceivedInr}
                                    onChange={(e) =>
                                      updatePaymentRow(
                                        row.id,
                                        "amountReceivedInr",
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
                                  disabled
                                  selected={
                                    row.paymentDate
                                      ? new Date(row.paymentDate as string)
                                      : null
                                  }
                                  onChange={(date: Date | null) =>
                                    updatePaymentRow(
                                      row.id,
                                      "paymentDate",
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
                                  value={row.paymentMethod}
                                  disabled
                                  onChange={(e) =>
                                    updatePaymentRow(
                                      row.id,
                                      "paymentMethod",
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
                                  disabled
                                  value={row.fluctuationDifference}
                                  onChange={(e) =>
                                    updatePaymentRow(
                                      row.id,
                                      "fluctuationDifference",
                                      e.target.value,
                                    )
                                  }
                                />
                              </td>

                              {/* Comments */}
                              <td>
                                <input
                                  className="form-control"
                                  disabled
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
                                  className="btn btn-danger btn-sm mt-1"
                                  style={{
                                    whiteSpace: "nowrap",
                                    fontSize: "12px",
                                  }}
                                  onClick={() => handlePaymentEditDetails(row)}
                                >
                                  Edit
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* <AddRowButton onClick={addPaymentRow} /> */}
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
      <Modal
        show={addCustomerPopUP}
        onHide={() => setAddCustomerPopUp(false)}
        size="xl"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            style={{ paddingBottom: "22px" }}
          >
            <div className="table-responsive">
              <AddCustomer />
            </div>
          </div>

          {/* <button
            className="btn btn-success btn-sm mt-2"
            onClick={() => setProposalData([...proposalData, createEmptyRow()])}
          >
            Add Row
          </button> */}
        </Modal.Body>
      </Modal>
      <Modal
        show={paymentEditPopUp}
        onHide={() => setPaymentEditPopUP(false)}
        size="xl"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Payment Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            style={{ paddingBottom: "22px" }}
          >
            <div className="table-responsive">
              <table className="table table-bordered table-hover app-table mb-0">
                <thead className="table-primary">
                  <tr>
                    <th>Proposal Number</th>
                    <th>Order Number</th>
                    <th>Invoice Number</th>
                    <th>Documents</th>
                    <th>Value Received</th>
                    <th>Currency</th>
                    <th>Amount Realised</th>
                    <th>Realised Date</th>
                    <th>Payment Status</th>
                    <th>Fluctuation Difference</th>
                    <th>Comments</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentEditDetails.map((row) => (
                    <tr key={row.id}>
                      {/* Proposal Number */}
                      <td>
                        <input
                          className="form-control"
                          disabled
                          value={row.proposalNumber}
                          placeholder="Proposal number"
                          onChange={(e) =>
                            updatePaymenteEdit(
                              row.id,
                              "proposalNumber",
                              e.target.value,
                            )
                          }
                        />
                      </td>
                      <td>
                        <select
                          className="form-select mb-1"
                          value={row.orderId || ""}
                          disabled
                          onChange={(e) => {
                            const selectedId = Number(e.target.value);

                            const selectedOrder = orderDetailsData.find(
                              (item) => item.orderId === selectedId,
                            );

                            updatePaymenteEdit(row.id, "orderId", selectedId);
                            updatePaymenteEdit(
                              row.id,
                              "orderNumber",
                              selectedOrder?.orderNumber || "",
                            );
                          }}
                        >
                          <option value="">Select Order</option>

                          {orderDetailsData.map((item) => (
                            <option key={item.orderId} value={item.orderId}>
                              {item.orderNumber}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select mb-1"
                          disabled
                          value={row.invoiceId || ""}
                          onChange={(e) => {
                            const selectedId = Number(e.target.value);

                            const selectedOrder = invoiceDetailsData.find(
                              (item) => item.invoiceId === selectedId,
                            );

                            updatePaymenteEdit(row.id, "invoiceId", selectedId);
                            updatePaymenteEdit(
                              row.id,
                              "orderNumber",
                              selectedOrder?.invoiceNumber || "",
                            );
                          }}
                        >
                          <option value="">Select Order</option>

                          {invoiceDetailsData.map((item) => (
                            <option key={item.invoiceId} value={item.invoiceId}>
                              {item.invoiceNumber}
                            </option>
                          ))}
                        </select>
                      </td>
                      {/* Documents */}
                      <td>
                        <FileUploadCell
                          file={row.file}
                          onUpload={(f) => updatePaymenteEdit(row.id, "file", f)}
                          onRemove={() =>
                            updatePaymenteEdit(row.id, "file", null)
                          }
                        />
                      </td>

                      {/* Value Received */}
                      <td>
                        <input
                          className="form-control"
                          value={row.amountReceived}
                          onChange={(e) =>
                            updatePaymenteEdit(
                              row.id,
                              "amountReceived",
                              e.target.value,
                            )
                          }
                        />
                      </td>
                      <td>
                        <select
                          className="form-select"
                          style={{ maxWidth: "110px" }}
                          value={row.amountCurrency}
                          onChange={(e) =>
                            updatePaymenteEdit(
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
                      </td>
                      {/* Amount Realised (currency + amount) */}
                      <td>
                        <div className="d-flex gap-1">
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Amount"
                            value={row.amountReceivedInr}
                            onChange={(e) =>
                              updatePaymenteEdit(
                                row.id,
                                "amountReceivedInr",
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
                            row.paymentDate
                              ? new Date(row.paymentDate as string)
                              : null
                          }
                          onChange={(date: Date | null) =>
                            updatePaymenteEdit(row.id, "paymentDate", date)
                          }
                          placeholderText="Choose date"
                        />
                      </td>

                      {/* Payment Status */}
                      <td>
                        <select
                          className="form-select"
                          value={row.paymentMethod}
                          onChange={(e) =>
                            updatePaymenteEdit(
                              row.id,
                              "paymentMethod",
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
                          value={row.fluctuationDifference}
                          onChange={(e) =>
                            updatePaymenteEdit(
                              row.id,
                              "fluctuationDifference",
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
                            updatePaymenteEdit(row.id, "comments", e.target.value)
                          }
                        />
                      </td>

                      {/* Actions */}
                      <td className="text-center">
                        <button
                          className="btn btn-danger btn-sm mt-1"
                          style={{
                            whiteSpace: "nowrap",
                            fontSize: "12px",
                          }}
                          onClick={() => handlePaymentUpdateDetails(row)}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* <button
            className="btn btn-success btn-sm mt-2"
            onClick={() => setProposalData([...proposalData, createEmptyRow()])}
          >
            Add Row
          </button> */}
        </Modal.Body>
      </Modal>
      <Modal
        show={paymentDetailsPopUp}
        onHide={() => setPaymentDetailsPayment(false)}
        size="xl"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Payment Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            style={{ paddingBottom: "22px" }}
          >
            <div className="table-responsive">
              <table className="table table-bordered table-hover app-table mb-0">
                <thead className="table-primary">
                  <tr>
                    <th>Proposal Number</th>
                    <th>Order Number</th>
                    <th>Invoice Number</th>
                    <th>Documents</th>
                    <th>Value Received</th>
                    <th>Currency</th>
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
                        <select
                          className="form-select mb-1"
                          value={row.proposalId || ""}
                          onChange={(e) => {
                            const selectedId = Number(e.target.value);

                            const selectedProposal = offerData.find(
                              (item) => item.proposalId === selectedId,
                            );

                            updatePaymentRow(row.id, "proposalId", selectedId);
                            updatePaymentRow(
                              row.id,
                              "proposalNumber",
                              selectedProposal?.proposalNumber || "",
                            );
                          }}
                        >
                          <option value="">Select Proposal</option>

                          {offerData.map((item) => (
                            <option
                              key={item.proposalId}
                              value={item.proposalId}
                            >
                              {item.proposalNumber}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select mb-1"
                          value={row.orderId || ""}
                          onChange={(e) => {
                            const selectedId = Number(e.target.value);

                            const selectedOrder = orderDetailsData.find(
                              (item) => item.orderId === selectedId,
                            );

                            updatePaymentRow(row.id, "orderId", selectedId);
                            updatePaymentRow(
                              row.id,
                              "orderNumber",
                              selectedOrder?.orderNumber || "",
                            );
                          }}
                        >
                          <option value="">Select Order</option>

                          {orderDetailsData.map((item) => (
                            <option key={item.orderId} value={item.orderId}>
                              {item.orderNumber}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select mb-1"
                          value={row.invoiceId || ""}
                          onChange={(e) => {
                            const selectedId = Number(e.target.value);

                            const selectedOrder = invoiceDetailsData.find(
                              (item) => item.invoiceId === selectedId,
                            );

                            updatePaymentRow(row.id, "invoiceId", selectedId);
                            updatePaymentRow(
                              row.id,
                              "orderNumber",
                              selectedOrder?.invoiceNumber || "",
                            );
                          }}
                        >
                          <option value="">Select Order</option>

                          {invoiceDetailsData.map((item) => (
                            <option key={item.invoiceId} value={item.invoiceId}>
                              {item.invoiceNumber}
                            </option>
                          ))}
                        </select>
                      </td>
                      {/* Documents */}
                      <td>
                        <td>
                          <div>
                            <input
                              type="file"
                              className="form-control mb-1"
                              onChange={(e) => {
                                const f = e.target.files[0];
                                if (!f) return;

                                updatePaymentRow(row.id, "file", {
                                  file: f,
                                  fileName: f.name,
                                });
                              }}
                            />

                            <div className="d-flex justify-content-between align-items-center">
                              <small>
                                {row.file?.fileName
                                  ? row.file.fileName
                                  : "No file selected"}
                              </small>

                              {row.file?.fileName && (
                                <button
                                  type="button"
                                  className="btn btn-sm btn-link text-danger"
                                  onClick={() =>
                                    updatePaymentRow(row.id, "file", null)
                                  }
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        </td>
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
                      <td>
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
                      </td>
                      {/* Amount Realised (currency + amount) */}
                      <td>
                        <div className="d-flex gap-1">
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
                            updatePaymentRow(row.id, "realisedDate", date)
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
                            updatePaymentRow(row.id, "comments", e.target.value)
                          }
                        />
                      </td>

                      {/* Actions */}
                      <td className="text-center">
                        <button
                          className="btn btn-danger btn-sm mt-1"
                          style={{
                            whiteSpace: "nowrap",
                            fontSize: "12px",
                          }}
                          onClick={() => handlePaymentDetailsStore(row)}
                        >
                          Submit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* <button
            className="btn btn-success btn-sm mt-2"
            onClick={() => setProposalData([...proposalData, createEmptyRow()])}
          >
            Add Row
          </button> */}
        </Modal.Body>
      </Modal>
      <Modal
        show={invoiceEditDetailsPopUp}
        onHide={() => setInvoiceEditDetailsPopUp(false)}
        size="xl"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Invoice Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            style={{ paddingBottom: "22px" }}
          >
            <div className="table-responsive">
              <table className="table table-bordered app-table mb-0">
                <thead className="table-primary">
                  <tr>
                    <th>Proposal Number</th>
                    <th>Order Number</th>
                    <th>Invoice Number</th>
                    <th>Invoice Date</th>
                    <th>Invoice Currency</th>
                    <th>Invoice Value</th>
                    <th>Conversion Rate</th>
                    <th>Invoice Value (INR)</th>
                    <th>Payment Term</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Comments</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceEditDetails.map((row) => (
                    <tr key={row.id}>
                      {/* Proposal Number + Upload */}
                      <td>
                        <input
                          className="form-control mb-1"
                          value={row.proposalNumber}
                          placeholder="Proposal number"
                          disabled
                          onChange={(e) =>
                            updateInvoiceEdit(
                              row.id,
                              "proposalNumber",
                              e.target.value,
                            )
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="form-control mb-1"
                          value={row.orderNumber}
                          disabled
                          placeholder="Proposal number"
                          onChange={(e) =>
                            updateInvoiceEdit(
                              row.id,
                              "orderNumber",
                              e.target.value,
                            )
                          }
                        />
                      </td>

                      {/* Invoice Number */}
                      <td>
                        <input
                          className="form-control"
                          value={row.invoiceNumber}
                          onChange={(e) =>
                            updateInvoiceEdit(
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
                            updateInvoiceEdit(row.id, "invoiceDate", date)
                          }
                          placeholderText="Choose date"
                          popperPlacement="bottom-start"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select"
                          style={{ maxWidth: "110px" }}
                          value={row.invoiceCurrency}
                          onChange={(e) =>
                            updateInvoiceEdit(
                              row.id,
                              "invoiceCurrency",
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
                      </td>
                      {/* Invoice Value (currency + amount) */}
                      <td>
                        <div className="d-flex gap-1">
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Amount"
                            value={row.invoiceValue}
                            onChange={(e) =>
                              updateInvoiceEdit(
                                row.id,
                                "invoiceValue",
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
                          value={row.invoiceConversionRate}
                          onChange={(e) =>
                            updateInvoiceEdit(
                              row.id,
                              "invoiceConversionRate",
                              e.target.value,
                            )
                          }
                        />
                      </td>

                      {/* Invoice Value INR (read-only) */}
                      <td>
                        <input
                          className="form-control"
                          value={row.invoiceValueInr}
                          onChange={(e) =>
                            updateInvoiceEdit(
                              row.id,
                              "invoiceValueInr",
                              e.target.value,
                            )
                          }
                        />
                      </td>

                      {/* Payment Term */}
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={row.paymentTerm}
                          onChange={(e) =>
                            updateInvoiceEdit(
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
                            row.dueDate ? new Date(row.dueDate as string) : null
                          }
                          onChange={(date: Date | null) =>
                            updateInvoiceEdit(row.id, "dueDate", date)
                          }
                          placeholderText="Choose date"
                          popperPlacement="bottom-start"
                        />
                      </td>

                      {/* Status */}
                      <td>
                        <select
                          className="form-select"
                          value={row.paymentStatus}
                          onChange={(e) =>
                            updateInvoiceEdit(
                              row.id,
                              "paymentStatus",
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

                      {/* Comments */}
                      <td>
                        <input
                          className="form-control"
                          value={row.invoiceComments}
                          placeholder="Comments"
                          onChange={(e) =>
                            updateInvoiceEdit(
                              row.id,
                              "invoiceComments",
                              e.target.value,
                            )
                          }
                        />
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-danger btn-sm mt-1"
                          style={{
                            whiteSpace: "nowrap",
                            fontSize: "12px",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation(); // 🔥 prevents bubbling issues
                            handleInvoiceDetailsUpdate(row);
                          }}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* <button
            className="btn btn-success btn-sm mt-2"
            onClick={() => setProposalData([...proposalData, createEmptyRow()])}
          >
            Add Row
          </button> */}
        </Modal.Body>
      </Modal>
      <Modal
        show={invoiceDetailsPopUp}
        onHide={() => setInvoiceDetailsPopup(false)}
        size="xl"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Invoice Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            style={{ paddingBottom: "22px" }}
          >
            <div className="table-responsive">
              <table className="table table-bordered app-table mb-0">
                <thead className="table-primary">
                  <tr>
                    <th>Proposal Number</th>
                    <th>Order Nuumber</th>
                    <th>Invoice Number</th>
                    <th>Invoice Date</th>
                    <th>Invoice Currency</th>
                    <th>Invoice Value</th>
                    <th>Conversion Rate</th>
                    <th>Invoice Value (INR)</th>
                    <th>Payment Term</th>
                    {/* <th>Due Day</th> */}
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Comments</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.map((row) => (
                    <tr key={row.id}>
                      {/* Proposal Number + Upload */}
                      <td>
                        <select
                          className="form-select mb-1"
                          value={row.proposalId || ""}
                          onChange={(e) => {
                            const selectedId = Number(e.target.value);

                            const selectedProposal = offerData.find(
                              (item) => item.proposalId === selectedId,
                            );

                            updateInvoiceRow(row.id, "proposalId", selectedId);
                            updateInvoiceRow(
                              row.id,
                              "proposalNumber",
                              selectedProposal?.proposalNumber || "",
                            );
                          }}
                        >
                          <option value="">Select Proposal</option>

                          {offerData.map((item) => (
                            <option
                              key={item.proposalId}
                              value={item.proposalId}
                            >
                              {item.proposalNumber}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select mb-1"
                          value={row.orderId || ""}
                          onChange={(e) => {
                            const selectedId = Number(e.target.value);

                            const selectedOrder = orderDetailsData.find(
                              (item) => item.orderId === selectedId,
                            );

                            updateInvoiceRow(row.id, "orderId", selectedId);
                            updateInvoiceRow(
                              row.id,
                              "orderNumber",
                              selectedOrder?.orderNumber || "",
                            );
                          }}
                        >
                          <option value="">Select Order</option>

                          {orderDetailsData.map((item) => (
                            <option key={item.orderId} value={item.orderId}>
                              {item.orderNumber}
                            </option>
                          ))}
                        </select>
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
                            updateInvoiceRow(row.id, "invoiceDate", date)
                          }
                          placeholderText="Choose date"
                          popperPlacement="bottom-start"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select"
                          style={{ maxWidth: "110px" }}
                          value={row.invoiceCurrency}
                          onChange={(e) =>
                            updateInvoiceRow(
                              row.id,
                              "invoiceCurrency",
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
                      </td>
                      {/* Invoice Value (currency + amount) */}
                      <td>
                        <div className="d-flex gap-1">
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
                          onChange={(e) =>
                            updateInvoiceRow(
                              row.id,
                              "invoiceValueINR",
                              e.target.value,
                            )
                          }
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
                      {/* <td>
                        <input
                          type="number"
                          className="form-control"
                          value={row.dueDays}
                          onChange={(e) =>
                            updateInvoiceRow(row.id, "dueDays", e.target.value)
                          }
                        />
                      </td> */}
                      {/* Due Date */}
                      <td>
                        <SpkDatepickr
                          className="form-control"
                          selected={
                            row.dueDate ? new Date(row.dueDate as string) : null
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
                            updateInvoiceRow(row.id, "status", e.target.value)
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

                      {/* Comments */}
                      <td>
                        <input
                          className="form-control"
                          value={row.comments}
                          placeholder="Comments"
                          onChange={(e) =>
                            updateInvoiceRow(row.id, "comments", e.target.value)
                          }
                        />
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-danger btn-sm mt-1"
                          style={{
                            whiteSpace: "nowrap",
                            fontSize: "12px",
                          }}
                          onClick={() => handleInvoiceAddDetails(row)}
                        >
                          Submit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* <button
            className="btn btn-success btn-sm mt-2"
            onClick={() => setProposalData([...proposalData, createEmptyRow()])}
          >
            Add Row
          </button> */}
        </Modal.Body>
      </Modal>
      <Modal
        show={orderEditDetailsPopUp}
        onHide={() => setOrderEditDetailsPopup(false)}
        size="xl"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Order Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            style={{ paddingBottom: "22px" }}
          >
            <table className="table table-bordered app-table mb-0 pb-4">
              <thead className="table-primary">
                <tr>
                  <th>Proposal Number</th>
                  <th>Project ID</th>
                  <th>Business Unit</th>
                  <th>Order No</th>
                  <th>Order Date</th>
                  <th>Order Currency</th>
                  <th>Order Value</th>
                  <th>Conversion Rate</th>
                  <th>Order Value in INR</th>
                  <th>Invoice Milestones</th>
                  <th>Status</th>
                  <th>Comments</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {editOrderDetails.length > 0 &&
                  editOrderDetails.map((poRow) => (
                    <tr key={poRow.id}>
                      {/* Proposal Number + Upload */}
                      <td>
                        <input
                          className="form-control mb-1"
                          value={poRow.proposalNumber}
                          placeholder="Proposal number"
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "proposalNumber",
                              e.target.value,
                            )
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
                            updateEditOrdetailsRow(
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
                          value={poRow.businessUnitId}
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "businessUnitId",
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
                          value={poRow.orderNumber}
                          placeholder="Order number"
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "orderNumber",
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
                            updateEditOrdetailsRow(poRow.id, "orderDate", date)
                          }
                          placeholderText="Choose date"
                          popperPlacement="bottom-start"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select"
                          style={{ maxWidth: "110px" }}
                          value={poRow.orderCurrency}
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "orderCurrency",
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
                      </td>
                      {/* Order Value (currency + amount) */}
                      <td>
                        <div className="d-flex gap-1">
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Amount"
                            value={poRow.orderValue}
                            onChange={(e) =>
                              updateEditOrdetailsRow(
                                poRow.id,
                                "orderValue",
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
                            updateEditOrdetailsRow(
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
                          value={poRow.orderValueInr}
                          placeholder="INR value"
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "orderValueInr",
                              e.target.value,
                            )
                          }
                        />
                      </td>

                      {/* Invoice Milestone */}
                      <td>
                        <input
                          className="form-control"
                          value={poRow.invoiceMilestone}
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "invoiceMilestone",
                              e.target.value,
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
                            updateEditOrdetailsRow(
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

                      <td>
                        <input
                          className="form-control"
                          value={poRow.comments}
                          placeholder="Comments"
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "comments",
                              e.target.value,
                            )
                          }
                        />
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-danger btn-sm mt-1"
                          style={{
                            whiteSpace: "nowrap",
                            fontSize: "12px",
                          }}
                          onClick={() => handleOrderDetailsUpdate(poRow)}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* <button
            className="btn btn-success btn-sm mt-2"
            onClick={() => setProposalData([...proposalData, createEmptyRow()])}
          >
            Add Row
          </button> */}
        </Modal.Body>
      </Modal>
      <Modal
        show={orderDetailsPopUp}
        onHide={() => setOrderDetailsPopup(false)}
        size="xl"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Order Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            style={{ paddingBottom: "22px" }}
          >
            <table className="table table-bordered app-table mb-0 pb-4">
              <thead className="table-primary">
                <tr>
                  <th>Proposal Number</th>
                  <th>Project ID</th>
                  <th>Business Unit</th>
                  <th>Order No</th>
                  <th>Order Date</th>
                  <th>Order Currency</th>
                  <th>Order Value</th>
                  <th>Conversion Rate</th>
                  <th>Order Value in INR</th>
                  <th>Invoice Milestones</th>
                  <th>Status</th>
                  <th>Comments</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {purchaseOrderData.map((poRow) => (
                  <tr key={poRow.id}>
                    {/* Proposal Number + Upload */}
                    <td>
                      <select
                        className="form-select mb-1"
                        value={poRow.proposalId || ""}
                        onChange={(e) => {
                          const selectedId = Number(e.target.value);

                          const selectedProposal = offerData.find(
                            (item) => item.proposalId === selectedId,
                          );

                          updatePoRow(poRow.id, "proposalId", selectedId);
                          updatePoRow(
                            poRow.id,
                            "proposalNumber",
                            selectedProposal?.proposalNumber || "",
                          );
                        }}
                      >
                        <option value="">Select Proposal</option>

                        {offerData.map((item) => (
                          <option key={item.proposalId} value={item.proposalId}>
                            {item.proposalNumber}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Project ID */}
                    <td>
                      <input
                        className="form-control"
                        value={poRow.projectId}
                        placeholder="Project ID"
                        onChange={(e) =>
                          updatePoRow(poRow.id, "projectId", e.target.value)
                        }
                      />
                    </td>

                    {/* Business Unit */}
                    <td>
                      <select
                        className="form-select"
                        value={poRow.businessUnit}
                        onChange={(e) =>
                          updatePoRow(poRow.id, "businessUnit", e.target.value)
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
                          updatePoRow(poRow.id, "orderNo", e.target.value)
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
                    <td>
                      <select
                        className="form-select"
                        style={{ maxWidth: "110px" }}
                        value={poRow.orderValue}
                        onChange={(e) =>
                          updatePoRow(poRow.id, "orderValue", e.target.value)
                        }
                      >
                        <option value="">Currency</option>
                        {dropdownOptions.currency.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </td>
                    {/* Order Value (currency + amount) */}
                    <td>
                      <div className="d-flex gap-1">
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Amount"
                          value={poRow.orderAmount}
                          onChange={(e) =>
                            updatePoRow(poRow.id, "orderAmount", e.target.value)
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
                          updatePoRow(poRow.id, "orderValueINR", e.target.value)
                        }
                      />
                    </td>

                    {/* Invoice Milestone */}
                    <td>
                      <input
                        className="form-control"
                        value={poRow.invoiceMilestone}
                        onChange={(e) =>
                          updatePoRow(
                            poRow.id,
                            "invoiceMilestone",
                            e.target.value,
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
                          updatePoRow(poRow.id, "status", e.target.value)
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

                    <td>
                      <input
                        className="form-control"
                        value={poRow.comments}
                        placeholder="Comments"
                        onChange={(e) =>
                          updatePoRow(poRow.id, "comments", e.target.value)
                        }
                      />
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-danger btn-sm mt-1"
                        style={{
                          whiteSpace: "nowrap",
                          fontSize: "12px",
                        }}
                        onClick={() => handleUpdateOrderDetails(poRow)}
                      >
                        Submit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <button
            className="btn btn-success btn-sm mt-2"
            onClick={() => setProposalData([...proposalData, createEmptyRow()])}
          >
            Add Row
          </button> */}
        </Modal.Body>
      </Modal>
      <Modal
        show={showProposalModal}
        onHide={() => setShowProposalModal(false)}
        size="xl"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Proposal Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-primary">
                <tr>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Financial Year
                  </th>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Firm
                  </th>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Proposal No
                  </th>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Date
                  </th>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Customer
                  </th>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Lead Generator
                  </th>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Project Details
                  </th>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Business Unit
                  </th>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Department
                  </th>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Efforts
                  </th>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Status
                  </th>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Comments
                  </th>
                  <th className="text-nowrap" style={{ minWidth: "150px" }}>
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {proposalData.map((row) => (
                  <tr key={row.id}>
                    {/* Financial Year */}
                    <td>
                      <select
                        className="form-control"
                        value={row.year || ""}
                        onChange={(e) =>
                          updateAddProposalRow(row.id, "year", e.target.value)
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
                          updateAddProposalRow(row.id, "firmId", e.target.value)
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

                    {/* Proposal No */}
                    <td>
                      <input
                        className="form-control mb-1"
                        value={row.proposalNumber}
                        onChange={(e) =>
                          updateAddProposalRow(
                            row.id,
                            "proposalNumber",
                            e.target.value,
                          )
                        }
                      />
                      <div>
                        <input
                          type="file"
                          className="form-control mb-1"
                          onChange={(e) => {
                            const f = e.target.files[0];
                            if (!f) return;

                            updateAddProposalRow(row.id, "file", {
                              file: f,
                              fileName: f.name,
                            });
                          }}
                        />

                        <div className="d-flex justify-content-between align-items-center">
                          <small>
                            {row.file?.fileName
                              ? row.file.fileName
                              : "No file selected"}
                          </small>

                          {row.file?.fileName && (
                            <button
                              type="button"
                              className="btn btn-sm btn-link text-danger"
                              onClick={() =>
                                updateAddProposalRow(row.id, "file", null)
                              }
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Date */}
                    <td>
                      <SpkDatepickr
                        className="form-control"
                        selected={
                          row.proposalDate ? new Date(row.proposalDate) : null
                        }
                        onChange={(date) =>
                          updateAddProposalRow(row.id, "proposalDate", date)
                        }
                        placeholderText="Choose date"
                      />
                    </td>

                    {/* Customer */}
                    <td>
                      <select
                        className="form-select"
                        value={row.customerId || ""}
                        onChange={(e) =>
                          updateAddProposalRow(
                            row.id,
                            "customerId",
                            e.target.value,
                          )
                        }
                      >
                        <option value="">Select</option>
                        {customerInfo.map((opt) => (
                          <option key={opt.customerId} value={opt.customerId}>
                            {opt.customerName}
                          </option>
                        ))}
                      </select>

                      <button
                        className="btn btn-danger btn-sm mt-1"
                        onClick={openAddCustomer}
                      >
                        Add User
                      </button>
                    </td>

                    {/* Lead Generator */}
                    <td>
                      <select
                        className="form-select"
                        value={row.leadGenerator}
                        onChange={(e) =>
                          updateAddProposalRow(
                            row.id,
                            "leadGenerator",
                            e.target.value,
                          )
                        }
                      >
                        <option value="">Select</option>
                        {employees.map((opt) => (
                          <option key={opt.employeeId} value={opt.employeeId}>
                            {opt.employeeName}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Project Details */}
                    <td>
                      <input
                        className="form-control"
                        value={row.projectDetails}
                        onChange={(e) =>
                          updateAddProposalRow(
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
                          updateAddProposalRow(
                            row.id,
                            "businessUnitId",
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

                    {/* Department */}
                    <td>
                      <select
                        className="form-select"
                        value={row.departmentId}
                        onChange={(e) =>
                          updateAddProposalRow(
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

                    {/* Efforts */}
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={row.estimatedHours}
                        onChange={(e) =>
                          updateAddProposalRow(
                            row.id,
                            "estimatedHours",
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
                          updateAddProposalRow(row.id, "status", e.target.value)
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
                        value={row.comments || ""}
                        onChange={(e) =>
                          updateAddProposalRow(
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
                        onClick={modalSubmit}
                        disabled={btnLoading}
                      >
                        {btnLoading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-1"
                              role="status"
                            ></span>
                            Submitting...
                          </>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <button
            className="btn btn-success btn-sm mt-2"
            onClick={() => setProposalData([...proposalData, createEmptyRow()])}
          >
            Add Row
          </button> */}
        </Modal.Body>
      </Modal>

      <Modal
        show={showEditModal}
        onHide={() => setEditModal(false)}
        size="xl"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Proposal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="table-responsive">
            <div className="table-responsive app-table-wrapper">
              <table className="table table-bordered table-hover app-table">
                <thead className="table-primary">
                  <tr>
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
                  {editPropodaData.map((row) => (
                    <tr key={row.id}>
                      {/* ID */}

                      {/* Financial Year */}
                      <td>
                        <select
                          className="form-control"
                          value={row.year || ""}
                          onChange={(e) => {
                            updateModalRow(row.id, "year", e.target.value);
                            console.log("working", e.target.value);
                          }}
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
                            updateModalRow(row.id, "firmId", e.target.value)
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
                            updateModalRow(
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
                            const base64 = await fileToBase64(f);
                            updateAddProposalRow(row.id, "file", {
                              file: f,
                              base64: base64,
                              fileName: f.name, // store base64 if needed
                              fileUrl: null,
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
                            row.proposalDate ? new Date(row.proposalDate) : null
                          }
                          onChange={(date) => {
                            updateModalRow(row.id, "proposalDate", date);

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
                            updateModalRow(row.id, "firmId", e.target.value)
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
                      </td>

                      {/* Lead Generator */}
                      <td>
                        <select
                          className="form-select"
                          value={row.leadGenerator}
                          onChange={(e) =>
                            updateModalRow(
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
                            updateModalRow(
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
                            updateModalRow(
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
                            updateModalRow(
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
                            updateModalRow(
                              row.id,
                              "estimatedHours",
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
                            updateModalRow(row.id, "status", e.target.value)
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
                            updateModalRow(row.id, "comments", e.target.value)
                          }
                        />
                      </td>

                      {/* Actions */}
                      <td className="text-center">
                        <br />
                        <button
                          className="btn btn-danger btn-sm mt-1"
                          onClick={() => handleUpdateProposalData(row)}
                          style={{
                            whiteSpace: "nowrap",
                            fontSize: "12px",
                          }}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Crm;
