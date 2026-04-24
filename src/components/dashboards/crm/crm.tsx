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
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkTooltips from "../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import { CustomProgress2data } from "../../../shared/data/ui-elements/progressdata";

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
      const [Utility, Proposal, order, invoice, payment, customer] =
        await Promise.all([
          getApi("Uitility"),
          getApi("Proposal"),
          getApi("Order"),
          getApi("Invoice"),
          getApi("InvoicePayment"),
          getApi("Customers"),
        ]);
      console.log("payment", payment);
      setBusinessUnits(Utility.data.businessUnits);
      setDepartments(Utility.data.departments);
      setEmployees(Utility.data.employees);
      setFirms(Utility.data.firms);
      setOrderDetailsData(order.data);
      setInvoiceDetailsData(invoice.data);
      setPaymentDetailsData(payment.data);
      setCustomerInfo(customer.data);
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
      prev.map((r) => {
        if (r.id !== id) return r;

        const updatedRow = { ...r, [field]: value };

        // ✅ AUTO CALCULATE DUE DATE
        if (
          (field === "invoiceDate" || field === "paymentTerm") &&
          updatedRow.invoiceDate &&
          updatedRow.paymentTerm
        ) {
          const baseDate = new Date(updatedRow.invoiceDate);
          baseDate.setDate(baseDate.getDate() + Number(updatedRow.paymentTerm));

          updatedRow.dueDate = baseDate;
        }

        return updatedRow;
      }),
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

  const removeOfferFile = (proposalId: number) => {
    setEditProposalData((prev) =>
      prev.map((r) => {
        if (r.proposalId !== proposalId) return r;
        if (r.fileUrl) URL.revokeObjectURL(r.fileUrl);
        return {
          ...r,
          file: null,
          fileUrl: null,
          documentData: null,
          fileName: null,
        };
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

  const updatePaymenteEdit = (
    id: number,
    field: keyof PaymentRow,
    value: any,
  ) =>
    setPaymentEditDetails((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
    );

  const handlePaymentUpdateDetails = async (row: any) => {
    console.log(row);
    const payload = {
      paymentId: row.paymentId,
      paymentDate: "2026-04-20T18:22:31.160Z", //row.paymentDate,
      amountReceived: Number(row.amountReceived),
      currency: row.amountCurrency,
      amountReceivedInr: row.amountReceivedInr,
      conversionRateAtPayment: row.conversionRateAtPayment,
      fluctuationDifference: Number(row.fluctuationDifference),
      paymentMethod: row.paymentMethod,
      referenceNumber: row.referenceNumber,
      comments: row.comments,
    };
    try {
      await putApi(`InvoicePayment/${row.paymentId}`, payload);
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

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Approved":
        return "primary-transparent";
      case "Pending":
        return "warning-transparent";
      case "Rejected":
        return "danger-transparent";
      case "Active":
        return "secondary-transparent";
      default:
        return "secondary-transparent";
    }
  };

  const uniqueProposals = [
    ...new Map(
      orderDetailsData.map((item) => [item.proposalId, item]),
    ).values(),
  ];

  const handleCustomerAdded = async (payload: any) => {
    try {
      await postApi("Customers", payload);

      toast.success("Customer updated successfully", { autoClose: 1500 });

      setAddCustomerPopUp(false);
      setShowProposalModal(false);
      const response = await getApi("Customers");

      setCustomerInfo([...(response.data || [])]); // ✅ safe + fresh reference
    } catch (err) {
      console.error("API ERROR:", err);
    }
  };

  const [orderSearch, setOrderSearch] = useState("");
  const [invoiceSearch, setInvoiceSearch] = useState("");
  const [paymentSearch, setPaymentSearch] = useState("");

  const filteredOrderData = orderDetailsData.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(orderSearch.toLowerCase()),
  );
  const getOrderDetailsGroup =
    filteredOrderData.length > 0 &&
    filteredOrderData.reduce((acc: any, item) => {
      if (!acc[item.proposalNumber]) acc[item.proposalNumber] = [];
      acc[item.proposalNumber].push(item);
      return acc;
    }, {});

  const filteredInvoiceData = invoiceDetailsData.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(invoiceSearch.toLowerCase()),
  );
  const getInvoiceDetailsGroup = filteredInvoiceData.reduce(
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

  const filteredPaymentData = paymentDetailsData.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(paymentSearch.toLowerCase()),
  );

  const groupedPayments = Object.entries(
    filteredPaymentData.reduce((acc: any, row: any) => {
      if (!acc[row.proposalNumber]) acc[row.proposalNumber] = {};

      if (!acc[row.proposalNumber][row.orderNumber])
        acc[row.proposalNumber][row.orderNumber] = {};

      if (!acc[row.proposalNumber][row.orderNumber][row.invoiceId])
        acc[row.proposalNumber][row.orderNumber][row.invoiceId] = [];

      acc[row.proposalNumber][row.orderNumber][row.invoiceId].push(row);

      return acc;
    }, {}),
  );

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
                      Buttonvariant="primary"
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
                              <div className="fw-semibold d-block">
                                {row.year}
                              </div>
                            </td>

                            {/* Firm */}
                            <td>
                              <div className="fw-seminormal d-block">
                                {firms.find((f) => f.firmId === row.firmId)
                                  ?.firmName || "Unknown"}
                              </div>
                            </td>

                            {/* Proposal No + Upload */}
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <SpkTooltips placement="top" title="Download">
                                  <SpkButton
                                    Buttonvariant="danger-light"
                                    Customclass="btn btn-icon btn-sm"
                                    onClick={() => handleFile(row)}
                                  >
                                    <i className="ri-download-2-line"></i>
                                  </SpkButton>
                                </SpkTooltips>
                                <span className="text-primary">
                                  {row.proposalNumber}
                                </span>
                              </div>

                              {row.fileName ? (
                                <small className="text-muted fs-12 mt-1">
                                  📎 {row.fileName}
                                </small>
                              ) : (
                                <small className="text-muted"></small>
                              )}
                            </td>

                            {/* Date */}
                            <td>
                              <div className="fw-semibold d-block">
                                {moment(row.proposalDate).format(
                                  "MMMM DD, YYYY",
                                )}
                              </div>
                            </td>

                            {/* Customer */}
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-sm me-2 avatar-rounded">
                                  <span className="avatar-text">
                                    {row.customerName?.charAt(0).toUpperCase()}
                                  </span>
                                </div>

                                <div>
                                  <div className="lh-1">
                                    <span>{row.customerName}</span>
                                  </div>
                                </div>
                              </div>
                            </td>

                            {/* Lead Generator */}
                            <td>
                              <div className="d-flex align-items-center">
                                <div
                                  className="d-flex align-items-center justify-content-center me-2 rounded-circle bg-secondary text-white"
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    fontSize: "14px",
                                  }}
                                >
                                  {employees
                                    .find(
                                      (e) => e.employeeId === row.leadGenerator,
                                    )
                                    ?.employeeName?.charAt(0)
                                    .toUpperCase() || "?"}
                                </div>

                                <div>
                                  <div className="lh-1">
                                    <span>
                                      {employees.find(
                                        (e) =>
                                          e.employeeId === row.leadGenerator,
                                      )?.employeeName || "Unknown"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>

                            {/* Project Details */}
                            <td>
                              <div className="fw-seminormal d-block text-left">
                                {row.projectDetails}
                              </div>
                            </td>

                            {/* Business Unit */}
                            <td>
                              <div className="d-flex align-items-center">
                                <div
                                  className="d-flex align-items-center justify-content-center me-2 rounded-circle bg-primary  text-white"
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    fontSize: "14px",
                                  }}
                                >
                                  {businessUnits
                                    .find(
                                      (u) =>
                                        u.businessUnitId === row.businessUnitId,
                                    )
                                    ?.businessUnitName?.charAt(0)
                                    .toUpperCase() || "?"}
                                </div>

                                <div>
                                  <div className="lh-1">
                                    <span>
                                      {businessUnits.find(
                                        (u) =>
                                          u.businessUnitId ===
                                          row.businessUnitId,
                                      )?.businessUnitName || "Unknown"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>

                            {/* Department */}
                            <td>
                              <div className="fw-seminormal d-block">
                                {departments.find(
                                  (d) => d.departmentId === row.departmentId,
                                )?.departmentName || "Unknown"}
                              </div>
                            </td>

                            {/* Efforts / Hours */}
                            <td>
                              <SpkBadge variant="badge bg-primary" size="lg">
                                {row.estimatedHours}
                              </SpkBadge>
                            </td>

                            {/* Status */}
                            <td>
                              <SpkBadge
                                variant={getStatusVariant(row.status)}
                                size="lg"
                              >
                                {row.status}
                              </SpkBadge>
                            </td>

                            {/* Comments */}
                            <td>
                              <div className="fw-seminormal d-block">
                                {row.comments}
                              </div>
                            </td>

                            {/* Actions */}
                            <td className="text-center">
                              <br />
                              <button
                                className="btn btn-primary btn-sm mt-1"
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
                        Buttonvariant="primary"
                        Size="sm"
                        Customclass="btn"
                        onClickfunc={addOrderDetails}
                      >
                        Add Order Details
                      </SpkButton>
                      <div className="search-box">
                        <input
                          type="text"
                          placeholder="Search..."
                          value={orderSearch}
                          onChange={(e) => setOrderSearch(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table table-bordered app-table mb-0">
                        <thead className="table-primary">
                          <tr>
                            <th>Proposal Number</th>
                            <th>Order No</th>
                            <th>Project ID</th>
                            <th>Business Unit</th>

                            <th>Order Date</th>
                            <th>Order Currency</th>
                            <th>Order Value</th>
                            <th>Conversion Rate</th>
                            <th>Order Value in Local Currency</th>
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
                                      <span className="text-primary">
                                        {proposalNumber}
                                      </span>
                                    </td>
                                  )}

                                  {/* ✅ Project ID */}
                                  {/* Order No */}
                                  <td>
                                    <div className="fw-semibold d-block">
                                      {poRow.orderNumber}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="fw-semibold d-block">
                                      {poRow.proposalId}
                                    </div>
                                  </td>

                                  {/* ✅ Business Unit */}
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <div
                                        className="d-flex align-items-center justify-content-center me-2 rounded-circle bg-primary  text-white"
                                        style={{
                                          width: "32px",
                                          height: "32px",
                                          fontSize: "14px",
                                        }}
                                      >
                                        {businessUnits
                                          .find(
                                            (u) =>
                                              u.businessUnitId ===
                                              poRow.businessUnitId,
                                          )
                                          ?.businessUnitName?.charAt(0)
                                          .toUpperCase() || "?"}
                                      </div>

                                      <div>
                                        <div className="lh-1">
                                          <span>
                                            {businessUnits.find(
                                              (u) =>
                                                u.businessUnitId ===
                                                poRow.businessUnitId,
                                            )?.businessUnitName || "Unknown"}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  {/* 🔽 ORDER LEVEL FIELDS (no merge) */}

                                  {/* Order Date */}
                                  <td>
                                    <div className="fw-semibold d-block">
                                      {" "}
                                      {moment(poRow.orderDate).format(
                                        "MMMM DD, YYYY",
                                      )}
                                    </div>
                                  </td>

                                  {/* Currency */}
                                  <td>
                                    <div className="fw-semibold d-block">
                                      {poRow.orderCurrency}
                                    </div>
                                  </td>

                                  {/* Order Value */}
                                  <td>
                                    <div className="fw-semibold d-block">
                                      {poRow.orderValue}
                                    </div>
                                  </td>

                                  {/* Conversion Rate */}
                                  <td>
                                    <div className="fw-semibold d-block">
                                      {poRow.conversionRate}
                                    </div>
                                  </td>

                                  {/* INR Value */}
                                  <td>
                                    <div className="fw-semibold d-block">
                                      ₹
                                      {(
                                        (poRow.conversionRate || 0) *
                                        (poRow.orderValue || 0)
                                      ).toLocaleString("en-IN", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      })}
                                    </div>
                                  </td>

                                  {/* Invoice Milestone */}
                                  <td>
                                    <div className="fw-semibold d-block">
                                      {poRow.invoiceMilestone}
                                    </div>
                                  </td>

                                  {/* Status */}
                                  <td>
                                    <SpkBadge
                                      variant={getStatusVariant(poRow.status)}
                                      size="lg"
                                    >
                                      {poRow.status}
                                    </SpkBadge>
                                  </td>

                                  {/* Comments */}
                                  <td>
                                    <div className="fw-seminormal d-block">
                                      {poRow.comments}
                                    </div>
                                  </td>

                                  {/* Edit */}
                                  <td className="text-center">
                                    <button
                                      className="btn btn-primary btn-sm mt-1"
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
                        Buttonvariant="primary"
                        Size="sm"
                        Customclass="btn"
                        onClickfunc={addInvoiceDetails}
                      >
                        Add Invoice Details
                      </SpkButton>
                      <div className="search-box">
                        <input
                          type="text"
                          placeholder="Search..."
                          value={invoiceSearch}
                          onChange={(e) => setInvoiceSearch(e.target.value)}
                        />
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
                            <th>Invoice Value Local Currency</th>
                            <th>Payment Term</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Comments</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(getInvoiceDetailsGroup).map(
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
                                                <span className="text-primary">
                                                  {proposalNumber}
                                                </span>
                                              </td>
                                            )}

                                          {/* ✅ Order Number */}
                                          {rowIndex === 0 && (
                                            <td rowSpan={rows.length}>
                                              <div className="fw-seminormal d-block">
                                                {orderNumber}
                                              </div>
                                            </td>
                                          )}

                                          {/* 🔽 ALL YOUR FIELDS */}

                                          {/* Invoice Number */}
                                          <td>
                                            <div className="fw-seminormal d-block">
                                              {row.invoiceNumber}
                                            </div>
                                          </td>

                                          {/* Invoice Date */}
                                          <td>
                                            <div className="fw-seminormal d-block">
                                              {row.invoiceDate}
                                            </div>
                                          </td>

                                          {/* Currency */}
                                          <td>
                                            <div className="fw-seminormal d-block">
                                              {row.invoiceCurrency}
                                            </div>
                                          </td>

                                          {/* Invoice Value */}
                                          <td>
                                            <div className="fw-seminormal d-block">
                                              {row.invoiceValue}
                                            </div>
                                          </td>

                                          {/* Conversion Rate */}
                                          <td>
                                            <div className="fw-seminormal d-block">
                                              {row.invoiceConversionRate}
                                            </div>
                                          </td>

                                          {/* Invoice Value INR */}
                                          <td>
                                            <div className="fw-seminormal d-block">
                                              ₹{" "}
                                              {new Intl.NumberFormat(
                                                "en-IN",
                                              ).format(
                                                (
                                                  Number(
                                                    row.invoiceValue || 0,
                                                  ) -
                                                  Number(
                                                    row.invoiceConversionRate ||
                                                      0,
                                                  )
                                                ).toFixed(2),
                                              )}
                                            </div>
                                          </td>

                                          {/* Payment Term */}
                                          <td>
                                            <div className="fw-seminormal d-block">
                                              {row.paymentTerm}
                                            </div>
                                          </td>

                                          {/* Due Date */}
                                          <td>
                                            <div className="fw-semibold d-block">
                                              {moment(row.dueDate).format(
                                                "MMMM DD, YYYY",
                                              )}
                                            </div>
                                          </td>

                                          {/* Status */}
                                          <td>
                                            <SpkBadge
                                              variant={getStatusVariant(
                                                row.status,
                                              )}
                                              size="lg"
                                            >
                                              {row.paymentStatus}
                                            </SpkBadge>
                                          </td>

                                          {/* Comments */}
                                          <td>
                                            <div className="fw-seminormal d-block">
                                              {row.invoiceComments}
                                            </div>
                                          </td>

                                          {/* Actions */}
                                          <td className="text-center">
                                            <button
                                              className="btn btn-primary btn-sm"
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
                        Buttonvariant="primary"
                        Size="sm"
                        Customclass="btn"
                        onClickfunc={handlePaymentAddDetails}
                      >
                        Add Payment Details
                      </SpkButton>
                      <div className="search-box">
                        <input
                          type="text"
                          placeholder="Search..."
                          value={paymentSearch}
                          onChange={(e) => setPaymentSearch(e.target.value)}
                        />
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
                          {groupedPayments.map(
                            ([proposalNumber, orders]: any) => {
                              const orderEntries = Object.entries(orders);

                              // total rows for proposal
                              const proposalRowSpan = orderEntries.reduce(
                                (sum: number, [, invoices]: any) =>
                                  sum +
                                  Object.values(invoices).reduce(
                                    (s: number, rows: any) => s + rows.length,
                                    0,
                                  ),
                                0,
                              );

                              return orderEntries.flatMap(
                                (
                                  [orderNumber, invoices]: any,
                                  orderIndex: number,
                                ) => {
                                  const invoiceEntries =
                                    Object.entries(invoices);

                                  const orderRowSpan = invoiceEntries.reduce(
                                    (sum: number, [, rows]: any) =>
                                      sum + rows.length,
                                    0,
                                  );

                                  return invoiceEntries.flatMap(
                                    (
                                      [invoiceId, rows]: any,
                                      invoiceIndex: number,
                                    ) => {
                                      return rows.map(
                                        (row: any, rowIndex: number) => (
                                          <tr key={row.paymentId}>
                                            {/* ✅ Proposal */}
                                            {orderIndex === 0 &&
                                              invoiceIndex === 0 &&
                                              rowIndex === 0 && (
                                                <td rowSpan={proposalRowSpan}>
                                                  <span className="text-primary">
                                                    {proposalNumber}
                                                  </span>
                                                </td>
                                              )}

                                            {/* ✅ Order */}
                                            {invoiceIndex === 0 &&
                                              rowIndex === 0 && (
                                                <td rowSpan={orderRowSpan}>
                                                  <span className="fw-semibold d-block">
                                                    {orderNumber}
                                                  </span>
                                                </td>
                                              )}

                                            {/* ✅ Invoice */}
                                            {rowIndex === 0 && (
                                              <td rowSpan={rows.length}>
                                                <span className="fw-semibold d-block">
                                                  {invoiceId}
                                                </span>
                                              </td>
                                            )}

                                            {/* 🔽 Rest normal fields */}
                                            <td>
                                              <FileUploadCell
                                                file={row.file}
                                                onUpload={(f) =>
                                                  updatePaymentRow(
                                                    row.id,
                                                    "file",
                                                    f,
                                                  )
                                                }
                                                onRemove={() =>
                                                  updatePaymentRow(
                                                    row.id,
                                                    "file",
                                                    null,
                                                  )
                                                }
                                              />
                                            </td>

                                            <td>{row.amountReceived}</td>
                                            <td>{row.currency}</td>
                                            <td>{row.amountReceivedInr}</td>
                                            <td>{row.paymentDate}</td>
                                            <td>{row.paymentMethod}</td>
                                            <td>{row.fluctuationDifference}</td>
                                            <td>{row.comments}</td>

                                            <td className="text-center">
                                              <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() =>
                                                  handlePaymentEditDetails(row)
                                                }
                                              >
                                                Edit
                                              </button>
                                            </td>
                                          </tr>
                                        ),
                                      );
                                    },
                                  );
                                },
                              );
                            },
                          )}
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
        //dialogClassName="custom-full-modal"
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
              <AddCustomer handleCustomerAdded={handleCustomerAdded} />
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
        fullscreen
        dialogClassName="custom-full-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Payment Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            //style={{ paddingBottom: "22px" }}
          >
            <div className="container">
              {paymentEditDetails.map((row) => (
                <div key={row.id} className="card mb-3 p-3 shadow-sm">
                  <div className="row g-3">
                    {/* ROW 1 */}
                    <div className="col-md-4">
                      <label className="form-label">Proposal Number</label>
                      <input
                        className="form-control"
                        disabled
                        value={row.proposalNumber || ""}
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Order Number</label>
                      <select
                        className="form-select"
                        disabled
                        value={row.orderId || ""}
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
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Invoice Number</label>
                      <select
                        className="form-select"
                        disabled
                        value={row.invoiceId || ""}
                        onChange={(e) => {
                          const selectedId = Number(e.target.value);

                          const selectedInvoice = invoiceDetailsData.find(
                            (item) => item.invoiceId === selectedId,
                          );

                          updatePaymenteEdit(row.id, "invoiceId", selectedId);
                          updatePaymenteEdit(
                            row.id,
                            "invoiceNumber",
                            selectedInvoice?.invoiceNumber || "",
                          );
                        }}
                      >
                        <option value="">Select Invoice</option>
                        {invoiceDetailsData.map((item) => (
                          <option key={item.invoiceId} value={item.invoiceId}>
                            {item.invoiceNumber}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* ROW 2 */}
                    <div className="col-md-4">
                      <label className="form-label">Documents</label>
                      <FileUploadCell
                        file={row.file}
                        onUpload={(f) => updatePaymenteEdit(row.id, "file", f)}
                        onRemove={() =>
                          updatePaymenteEdit(row.id, "file", null)
                        }
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Value Received</label>
                      <input
                        className="form-control"
                        value={row.amountReceived || ""}
                        onChange={(e) =>
                          updatePaymenteEdit(
                            row.id,
                            "amountReceived",
                            e.target.value,
                          )
                        }
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Currency</label>
                      <select
                        className="form-select"
                        value={row.amountCurrency || ""}
                        onChange={(e) =>
                          updatePaymenteEdit(
                            row.id,
                            "amountCurrency",
                            e.target.value,
                          )
                        }
                      >
                        <option value="">Select</option>
                        {dropdownOptions.currency.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* ROW 3 */}
                    <div className="col-md-4">
                      <label className="form-label">Amount Realised</label>
                      <input
                        type="number"
                        className="form-control"
                        value={row.amountReceivedInr || ""}
                        onChange={(e) =>
                          updatePaymenteEdit(
                            row.id,
                            "amountReceivedInr",
                            e.target.value,
                          )
                        }
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Payment Date</label>
                      <SpkDatepickr
                        className="form-control"
                        selected={
                          row.paymentDate ? new Date(row.paymentDate) : null
                        }
                        onChange={(date) =>
                          updatePaymenteEdit(row.id, "paymentDate", date)
                        }
                        placeholderText="Choose date"
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Payment Method</label>
                      <select
                        className="form-select"
                        value={row.paymentMethod || ""}
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
                    </div>

                    {/* ROW 4 */}
                    <div className="col-md-4">
                      <label className="form-label">
                        Fluctuation Difference
                      </label>
                      <input
                        className="form-control"
                        value={row.fluctuationDifference || ""}
                        onChange={(e) =>
                          updatePaymenteEdit(
                            row.id,
                            "fluctuationDifference",
                            e.target.value,
                          )
                        }
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Comments</label>
                      <input
                        className="form-control"
                        value={row.comments || ""}
                        onChange={(e) =>
                          updatePaymenteEdit(row.id, "comments", e.target.value)
                        }
                      />
                    </div>

                    <div className="col-md-4 d-flex align-items-end">
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => handlePaymentUpdateDetails(row)}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
        fullscreen
        dialogClassName="custom-full-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Payment Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            style={{ paddingBottom: "22px" }}
          >
            <div className="table-responsive pb-4">
              <div className="container">
                {paymentData.map((row) => (
                  <div key={row.id} className="card mb-3 p-3 shadow-sm">
                    <div className="row g-3">
                      {/* ROW 1 (3 fields) */}
                      <div className="col-md-4">
                        <label className="form-label">Proposal Number</label>
                        <select
                          className="form-select"
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
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Order Number</label>
                        <select
                          className="form-select"
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
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Invoice Number</label>
                        <select
                          className="form-select"
                          value={row.invoiceId || ""}
                          onChange={(e) => {
                            const selectedId = Number(e.target.value);

                            const selectedInvoice = invoiceDetailsData.find(
                              (item) => item.invoiceId === selectedId,
                            );

                            updatePaymentRow(row.id, "invoiceId", selectedId);
                            updatePaymentRow(
                              row.id,
                              "invoiceNumber",
                              selectedInvoice?.invoiceNumber || "",
                            );
                          }}
                        >
                          <option value="">Select Invoice</option>
                          {invoiceDetailsData.map((item) => (
                            <option key={item.invoiceId} value={item.invoiceId}>
                              {item.invoiceNumber}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* ROW 2 */}
                      <div className="col-md-4">
                        <label className="form-label">Documents</label>

                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) => {
                            const f = e.target.files[0];
                            if (!f) return;

                            updatePaymentRow(row.id, "file", {
                              file: f,
                              fileName: f.name,
                            });
                          }}
                        />

                        <div className="d-flex justify-content-between align-items-center mt-1">
                          <small>
                            {row.file?.fileName || "No file selected"}
                          </small>

                          {row.file?.fileName && (
                            <button
                              type="button"
                              className="btn btn-sm btn-link text-danger p-0"
                              onClick={() =>
                                updatePaymentRow(row.id, "file", null)
                              }
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Value Received</label>
                        <input
                          className="form-control"
                          value={row.valueReceived || ""}
                          onChange={(e) =>
                            updatePaymentRow(
                              row.id,
                              "valueReceived",
                              e.target.value,
                            )
                          }
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Currency</label>
                        <select
                          className="form-select"
                          value={row.amountCurrency || ""}
                          onChange={(e) =>
                            updatePaymentRow(
                              row.id,
                              "amountCurrency",
                              e.target.value,
                            )
                          }
                        >
                          <option value="">Select</option>
                          {dropdownOptions.currency.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* ROW 3 */}
                      <div className="col-md-4">
                        <label className="form-label">Amount Realised</label>
                        <input
                          type="number"
                          className="form-control"
                          value={row.amountValue || ""}
                          onChange={(e) =>
                            updatePaymentRow(
                              row.id,
                              "amountValue",
                              e.target.value,
                            )
                          }
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Realised Date</label>
                        <SpkDatepickr
                          className="form-control"
                          selected={
                            row.realisedDate ? new Date(row.realisedDate) : null
                          }
                          onChange={(date) =>
                            updatePaymentRow(row.id, "realisedDate", date)
                          }
                          placeholderText="Choose date"
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Payment Status</label>
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
                          <option value="">Select</option>
                          {dropdownOptions.paymentStatus.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* ROW 4 */}
                      <div className="col-md-4">
                        <label className="form-label">
                          Fluctuation Difference
                        </label>
                        <input
                          className="form-control"
                          value={row.fluctuation || ""}
                          onChange={(e) =>
                            updatePaymentRow(
                              row.id,
                              "fluctuation",
                              e.target.value,
                            )
                          }
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Comments</label>
                        <input
                          className="form-control"
                          value={row.comments || ""}
                          onChange={(e) =>
                            updatePaymentRow(row.id, "comments", e.target.value)
                          }
                        />
                      </div>

                      <div className="col-md-4 d-flex align-items-end">
                        <button
                          className="btn btn-primary w-100"
                          onClick={() => handlePaymentDetailsStore(row)}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
        dialogClassName="custom-full-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Invoice Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            style={{ paddingBottom: "22px" }}
          >
            <div className="table-responsive pb-4">
              <div className="container">
                {invoiceEditDetails.map((row) => (
                  <div key={row.id} className="card mb-3 p-3 shadow-sm">
                    <div className="row g-3">
                      {/* Row 1 */}
                      <div className="col-md-4">
                        <label className="form-label">Proposal Number</label>
                        <input
                          className="form-control"
                          value={row.proposalNumber}
                          disabled
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Order Number</label>
                        <input
                          className="form-control"
                          value={row.orderNumber}
                          disabled
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Invoice Number</label>
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
                      </div>

                      {/* Row 2 */}
                      <div className="col-md-4">
                        <label className="form-label">Invoice Date</label>
                        <SpkDatepickr
                          className="form-control"
                          selected={
                            row.invoiceDate ? new Date(row.invoiceDate) : null
                          }
                          onChange={(date) =>
                            updateInvoiceEdit(row.id, "invoiceDate", date)
                          }
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Currency</label>
                        <select
                          className="form-select"
                          value={row.invoiceCurrency}
                          onChange={(e) =>
                            updateInvoiceEdit(
                              row.id,
                              "invoiceCurrency",
                              e.target.value,
                            )
                          }
                        >
                          <option value="">Select</option>
                          {dropdownOptions.currency.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Invoice Value</label>
                        <input
                          type="number"
                          className="form-control"
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

                      {/* Row 3 */}
                      <div className="col-md-4">
                        <label className="form-label">Conversion Rate</label>
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
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">
                          Invoice Value (Local Currency)
                        </label>
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
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Payment Term</label>
                        <input
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
                      </div>

                      {/* Row 4 */}
                      <div className="col-md-4">
                        <label className="form-label">Due Date</label>
                        <SpkDatepickr
                          className="form-control"
                          selected={row.dueDate ? new Date(row.dueDate) : null}
                          onChange={(date) =>
                            updateInvoiceEdit(row.id, "dueDate", date)
                          }
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Status</label>
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
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Comments</label>
                        <textarea
                          className="form-control"
                          rows={2}
                          value={row.invoiceComments || ""}
                          onChange={(e) =>
                            updateInvoiceEdit(
                              row.id,
                              "invoiceComments",
                              e.target.value,
                            )
                          }
                        />
                      </div>

                      {/* Action */}
                      <div className="col-12 text-end">
                        <button
                          className="btn btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleInvoiceDetailsUpdate(row);
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
        fullscreen
        dialogClassName="custom-full-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Invoice Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            style={{ paddingBottom: "22px" }}
          >
            <div className="table-responsive pb-4">
              <div className="container">
                {invoiceData.map((row) => {
                  // ✅ place it here (inside map, before return)
                  const filteredOrders = (orderDetailsData || []).filter(
                    (item) => item.proposalId === row.proposalId,
                  );

                  return (
                    <div key={row.id} className="card mb-3 p-3 shadow-sm">
                      <div className="row g-3">
                        {/* Row 1 */}
                        <div className="col-md-4">
                          <label className="form-label">Proposal Number</label>
                          <select
                            className="form-select"
                            value={row.proposalId || ""}
                            onChange={(e) => {
                              const selectedId = Number(e.target.value);

                              updateInvoiceRow(
                                row.id,
                                "proposalId",
                                selectedId,
                              );

                              // Reset order when proposal changes
                              updateInvoiceRow(row.id, "orderId", "");
                              updateInvoiceRow(row.id, "orderNumber", "");
                            }}
                          >
                            <option value="">Select</option>
                            {uniqueProposals.map((item) => (
                              <option
                                key={item.proposalId}
                                value={item.proposalId}
                              >
                                {item.proposalNumber}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Order Number</label>
                          <select
                            className="form-select"
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
                            disabled={!row.proposalId}
                          >
                            <option value="">Select</option>
                            {filteredOrders.map((item) => (
                              <option key={item.orderId} value={item.orderId}>
                                {item.orderNumber}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Invoice Number</label>
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
                        </div>

                        {/* Row 2 */}
                        <div className="col-md-4">
                          <label className="form-label">Invoice Date</label>
                          <SpkDatepickr
                            className="form-control"
                            selected={
                              row.invoiceDate ? new Date(row.invoiceDate) : null
                            }
                            onChange={(date) =>
                              updateInvoiceRow(row.id, "invoiceDate", date)
                            }
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Currency</label>
                          <select
                            className="form-select"
                            value={row.invoiceCurrency}
                            onChange={(e) =>
                              updateInvoiceRow(
                                row.id,
                                "invoiceCurrency",
                                e.target.value,
                              )
                            }
                          >
                            <option value="">Select</option>
                            {dropdownOptions.currency.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Invoice Value</label>
                          <input
                            type="number"
                            className="form-control"
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

                        {/* Row 3 */}
                        <div className="col-md-4">
                          <label className="form-label">Conversion Rate</label>
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
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">
                            Invoice Value Local Currency
                          </label>
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
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">
                            Payment Term (days)
                          </label>
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
                        </div>

                        {/* Row 4 */}
                        <div className="col-md-4">
                          <label className="form-label">Due Date</label>
                          <SpkDatepickr
                            className="form-control"
                            selected={
                              row.dueDate ? new Date(row.dueDate) : null
                            }
                            onChange={(date) =>
                              updateInvoiceRow(row.id, "dueDate", date)
                            }
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Status</label>
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
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Comments</label>
                          <textarea
                            className="form-control"
                            rows={2}
                            value={row.comments || ""}
                            onChange={(e) =>
                              updateInvoiceRow(
                                row.id,
                                "comments",
                                e.target.value,
                              )
                            }
                          />
                        </div>

                        {/* Actions */}
                        <div className="col-12 text-end">
                          <button
                            className="btn btn-primary"
                            onClick={() => handleInvoiceAddDetails(row)}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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
        fullscreen
        dialogClassName="custom-full-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Order Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            style={{ paddingBottom: "22px" }}
          >
            <div className="container">
              {editOrderDetails.length > 0 &&
                editOrderDetails.map((poRow) => (
                  <div key={poRow.id} className="card mb-3 p-3 shadow-sm">
                    <div className="row g-3">
                      {/* Row 1 */}
                      <div className="col-md-4">
                        <label className="form-label">Proposal Number</label>
                        <input
                          className="form-control"
                          value={poRow.proposalNumber}
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "proposalNumber",
                              e.target.value,
                            )
                          }
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Project ID</label>
                        <input
                          className="form-control"
                          value={poRow.projectId}
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "projectId",
                              e.target.value,
                            )
                          }
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Business Unit</label>
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
                      </div>

                      {/* Row 2 */}
                      <div className="col-md-4">
                        <label className="form-label">Order No</label>
                        <input
                          className="form-control"
                          value={poRow.orderNumber}
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "orderNumber",
                              e.target.value,
                            )
                          }
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Order Date</label>
                        <SpkDatepickr
                          className="form-control"
                          selected={
                            poRow.orderDate ? new Date(poRow.orderDate) : null
                          }
                          onChange={(date) =>
                            updateEditOrdetailsRow(poRow.id, "orderDate", date)
                          }
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Currency</label>
                        <select
                          className="form-select"
                          value={poRow.orderCurrency}
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "orderCurrency",
                              e.target.value,
                            )
                          }
                        >
                          <option value="">Select</option>
                          {dropdownOptions.currency.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Row 3 */}
                      <div className="col-md-4">
                        <label className="form-label">Order Value</label>
                        <input
                          type="number"
                          className="form-control"
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

                      <div className="col-md-4">
                        <label className="form-label">Conversion Rate</label>
                        <input
                          className="form-control"
                          value={poRow.conversionRate}
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "conversionRate",
                              e.target.value,
                            )
                          }
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">
                          Order Value in Local Currency
                        </label>
                        <input
                          className="form-control"
                          value={poRow.orderValueInr}
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "orderValueInr",
                              e.target.value,
                            )
                          }
                        />
                      </div>

                      {/* Row 4 */}
                      <div className="col-md-4">
                        <label className="form-label">Invoice Milestone</label>
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
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Status</label>
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
                      </div>

                      <div className="col-md-4">
                        <label className="form-label">Comments</label>
                        <textarea
                          className="form-control"
                          rows={2}
                          value={poRow.comments || ""}
                          onChange={(e) =>
                            updateEditOrdetailsRow(
                              poRow.id,
                              "comments",
                              e.target.value,
                            )
                          }
                        />
                      </div>

                      {/* Actions */}
                      <div className="col-12 text-end">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleOrderDetailsUpdate(poRow)}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
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
        show={orderDetailsPopUp}
        onHide={() => setOrderDetailsPopup(false)}
        fullscreen
        dialogClassName="custom-full-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Order Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            className="table-responsive pb-16"
            style={{ paddingBottom: "22px" }}
          >
            <div className="container">
              {purchaseOrderData.map((poRow) => (
                <div key={poRow.id} className="card mb-3 p-3 shadow-sm">
                  <div className="row g-3">
                    {/* Row 1 */}
                    <div className="col-md-4">
                      <label className="form-label">Proposal Number</label>
                      <select
                        className="form-select"
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
                        <option value="">Select</option>
                        {offerData.map((item) => (
                          <option key={item.proposalId} value={item.proposalId}>
                            {item.proposalNumber}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Project ID</label>
                      <input
                        className="form-control"
                        value={poRow.projectId}
                        onChange={(e) =>
                          updatePoRow(poRow.id, "projectId", e.target.value)
                        }
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Business Unit</label>
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
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Order No</label>
                      <input
                        className="form-control"
                        value={poRow.orderNo}
                        onChange={(e) =>
                          updatePoRow(poRow.id, "orderNo", e.target.value)
                        }
                      />
                    </div>

                    {/* Row 2 */}
                    <div className="col-md-4">
                      <label className="form-label">Order Date</label>
                      <SpkDatepickr
                        className="form-control"
                        selected={
                          poRow.orderDate ? new Date(poRow.orderDate) : null
                        }
                        onChange={(date) =>
                          updatePoRow(poRow.id, "orderDate", date)
                        }
                        placeholderText="Choose date"
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Currency</label>
                      <select
                        className="form-select"
                        value={poRow.orderCurrency || ""}
                        onChange={(e) =>
                          updatePoRow(poRow.id, "orderCurrency", e.target.value)
                        }
                      >
                        <option value="">Select</option>
                        {dropdownOptions.currency.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Order Value</label>
                      <input
                        type="number"
                        className="form-control"
                        value={poRow.orderAmount}
                        onChange={(e) =>
                          updatePoRow(poRow.id, "orderAmount", e.target.value)
                        }
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Conversion Rate</label>
                      <input
                        className="form-control"
                        value={poRow.conversionRate}
                        onChange={(e) =>
                          updatePoRow(
                            poRow.id,
                            "conversionRate",
                            e.target.value,
                          )
                        }
                      />
                    </div>

                    {/* Row 3 */}
                    <div className="col-md-4">
                      <label className="form-label">
                        Order Value in Local Currency
                      </label>
                      <input
                        className="form-control"
                        value={poRow.orderValueINR}
                        onChange={(e) =>
                          updatePoRow(poRow.id, "orderValueINR", e.target.value)
                        }
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Invoice Milestone</label>
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
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Status</label>
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
                    </div>

                    {/* Comments full row */}
                    <div className="col-md-4">
                      <label className="form-label">Comments</label>
                      <textarea
                        className="form-control"
                        rows={2}
                        value={poRow.comments || ""}
                        onChange={(e) =>
                          updatePoRow(poRow.id, "comments", e.target.value)
                        }
                      />
                    </div>

                    {/* Submit */}
                    <div className="col-12 text-end">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleUpdateOrderDetails(poRow)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
        show={showProposalModal}
        onHide={() => setShowProposalModal(false)}
        dialogClassName="custom-full-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Proposal Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="table-responsive pb-4">
            <div className="container">
              {proposalData.map((row) => (
                <div key={row.id} className="card mb-3 p-3 shadow-sm">
                  <div className="row g-3">
                    {/* ROW 1 (3 columns) */}
                    <div className="col-md-4">
                      <label className="form-label">Financial Year</label>
                      <select
                        className="form-select"
                        value={row.year || ""}
                        onChange={(e) =>
                          updateAddProposalRow(row.id, "year", e.target.value)
                        }
                      >
                        <option value="">Select</option>
                        {financialYears.map((fy) => (
                          <option key={fy} value={fy}>
                            {fy}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Firm</label>
                      <select
                        className="form-select"
                        value={row.firmId || ""}
                        onChange={(e) => {
                          updateAddProposalRow(
                            row.id,
                            "firmId",
                            e.target.value,
                          );
                          sessionStorage.setItem(
                            "selectedFirmId",
                            e.target.value,
                          );
                        }}
                      >
                        <option value="">Select</option>
                        {firms.map((opt) => (
                          <option key={opt.firmId} value={opt.firmId}>
                            {opt.firmName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Proposal No</label>
                      <input
                        className="form-control"
                        value={row.proposalNumber}
                        onChange={(e) =>
                          updateAddProposalRow(
                            row.id,
                            "proposalNumber",
                            e.target.value,
                          )
                        }
                      />
                    </div>

                    {/* ROW 2 (3 columns) */}
                    <div className="col-md-4">
                      <label className="form-label">Date</label>
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
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Customer</label>
                      <select
                        className="form-select"
                        key={customerInfo.length}
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
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Lead Generator</label>
                      <select
                        className="form-select"
                        value={row.leadGenerator || ""}
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
                    </div>

                    {/* ROW 3 (3 columns) */}
                    <div className="col-md-4">
                      <label className="form-label">Business Unit</label>
                      <select
                        className="form-select"
                        value={row.businessUnitId || ""}
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
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Department</label>
                      <select
                        className="form-select"
                        value={row.departmentId || ""}
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
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Efforts (hrs)</label>
                      <input
                        type="number"
                        className="form-control"
                        value={row.estimatedHours || ""}
                        onChange={(e) =>
                          updateAddProposalRow(
                            row.id,
                            "estimatedHours",
                            e.target.value,
                          )
                        }
                      />
                    </div>

                    {/* ROW 4 (3 columns) */}
                    <div className="col-md-4">
                      <label className="form-label">Status</label>
                      <select
                        className="form-select"
                        value={row.status || ""}
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
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Project Details</label>
                      <textarea
                        className="form-control"
                        rows={2}
                        value={row.projectDetails || ""}
                        onChange={(e) =>
                          updateAddProposalRow(
                            row.id,
                            "projectDetails",
                            e.target.value,
                          )
                        }
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">Comments</label>
                      <textarea
                        className="form-control"
                        rows={2}
                        value={row.comments || ""}
                        onChange={(e) =>
                          updateAddProposalRow(
                            row.id,
                            "comments",
                            e.target.value,
                          )
                        }
                      />
                    </div>

                    {/* ROW 5 (full width file upload) */}
                    <div className="col-md-12">
                      <label className="form-label">Upload File</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          const f = e.target.files[0];
                          if (!f) return;

                          updateAddProposalRow(row.id, "file", {
                            file: f,
                            fileName: f.name,
                          });
                        }}
                      />

                      {row.file?.fileName && (
                        <div className="d-flex justify-content-between mt-1">
                          <small>{row.file.fileName}</small>
                          <button
                            type="button"
                            className="btn btn-link text-danger p-0"
                            onClick={() =>
                              updateAddProposalRow(row.id, "file", null)
                            }
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>

                    {/* SUBMIT */}
                    <div className="col-12 text-end">
                      <button
                        className="btn btn-primary"
                        onClick={() => modalSubmit(row)}
                        disabled={btnLoading}
                      >
                        {btnLoading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
        show={showEditModal}
        onHide={() => setEditModal(false)}
        dialogClassName="custom-full-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Proposal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="table-responsive">
            <div className="table-responsive app-table-wrapper pb-4">
              <div className="container">
                {editPropodaData.map((row) => (
                  <div key={row.id} className="card mb-3 p-3 shadow-sm">
                    <div className="row g-3">
                      {/* Row 1 */}
                      <div className="col-md-3">
                        <label className="form-label">Financial Year</label>
                        <select
                          className="form-select"
                          value={row.year || ""}
                          onChange={(e) =>
                            updateModalRow(row.id, "year", e.target.value)
                          }
                        >
                          <option value="">Select</option>
                          {financialYears.map((fy) => (
                            <option key={fy} value={fy}>
                              {fy}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-3">
                        <label className="form-label">Firm</label>
                        <select
                          className="form-select"
                          value={row.firmId}
                          onChange={(e) =>
                            updateModalRow(row.id, "firmId", e.target.value)
                          }
                        >
                          <option value="">Select</option>
                          {firms.map((opt) => (
                            <option key={opt.firmId} value={opt.firmId}>
                              {opt.firmName}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-3">
                        <label className="form-label">Proposal No</label>
                        <input
                          className="form-control"
                          value={row.proposalNumber}
                          onChange={(e) =>
                            updateModalRow(
                              row.id,
                              "proposalNumber",
                              e.target.value,
                            )
                          }
                        />
                      </div>

                      <div className="col-md-3">
                        <label className="form-label">Date</label>
                        <SpkDatepickr
                          className="form-control"
                          selected={
                            row.proposalDate ? new Date(row.proposalDate) : null
                          }
                          onChange={(date) =>
                            updateModalRow(row.id, "proposalDate", date)
                          }
                          placeholderText="Choose date"
                        />
                      </div>

                      {/* Row 2 */}
                      <div className="col-md-3">
                        <label className="form-label">Customer</label>
                        <select
                          className="form-select"
                          value={row.customerId || ""}
                          onChange={(e) =>
                            updateModalRow(row.id, "customerId", e.target.value)
                          }
                        >
                          <option value="">Select</option>
                          {customerInfo.map((opt) => (
                            <option key={opt.customerId} value={opt.customerId}>
                              {opt.customerName}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-3">
                        <label className="form-label">Lead Generator</label>
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
                          {employees.map((opt) => (
                            <option key={opt.employeeId} value={opt.employeeId}>
                              {opt.employeeName}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Project Details + Comments SAME ROW */}
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-6">
                            <label className="form-label">
                              Project Details
                            </label>
                            <textarea
                              className="form-control"
                              rows={4}
                              value={row.projectDetails}
                              onChange={(e) =>
                                updateModalRow(
                                  row.id,
                                  "projectDetails",
                                  e.target.value,
                                )
                              }
                            />
                          </div>

                          <div className="col-6">
                            <label className="form-label">Comments</label>
                            <textarea
                              className="form-control"
                              rows={4}
                              value={row.comments ?? ""}
                              onChange={(e) =>
                                updateModalRow(
                                  row.id,
                                  "comments",
                                  e.target.value,
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="col-md-3">
                        <label className="form-label">Business Unit</label>
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
                          {businessUnits.map((opt) => (
                            <option
                              key={opt.businessUnitId}
                              value={opt.businessUnitId}
                            >
                              {opt.businessUnitName}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-3">
                        <label className="form-label">Department</label>
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
                      </div>

                      <div className="col-md-3">
                        <label className="form-label">Efforts (hrs)</label>
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
                      </div>

                      <div className="col-md-3">
                        <label className="form-label">Status</label>
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
                      </div>

                      {/* Row 4 - File Upload */}
                      <div className="col-md-6">
                        <label className="form-label">Upload File</label>

                        <FileUploadCell
                          file={row.file}
                          fileUrl={row.fileUrl}
                          value={row}
                          onUpload={async (f) => {
                            const base64 = await fileToBase64(f);

                            updateModalRow(row.id, "file", f);
                            updateModalRow(row.id, "fileName", f.name);
                            updateModalRow(
                              row.id,
                              "fileUrl",
                              URL.createObjectURL(f),
                            );
                            updateModalRow(row.id, "documentData", base64);
                          }}
                          onRemove={() => removeOfferFile(row.proposalId)}
                        />
                      </div>

                      {/* Actions */}
                      <div className="col-12 text-end">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleUpdateProposalData(row)}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Crm;
