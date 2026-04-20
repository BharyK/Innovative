import { Fragment, useState } from "react";
import { Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkDatepickr from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import { genderTagOption } from "../../../../shared/data/apps/ecommerce/editproductsdata";
import { postApi } from "../../../../api/services";
import { toast, ToastContainer } from "react-toastify";
// ── Types ────────────────────────────────────────────────────────────────────

interface DeptContact {
  contactPerson: string;
  designation: string;
  primaryContactNumber: string;
  emailAddress: string;
  departmentDescription: string;
}

interface DeptState {
  primary: DeptContact;
  secondary: DeptContact;
}

const emptyContact = (): DeptContact => ({
  contactPerson: "",
  designation: "",
  primaryContactNumber: "",
  emailAddress: "",
  departmentDescription: "",
});

const emptyDept = (): DeptState => ({
  primary: emptyContact(),
  secondary: emptyContact(),
});

// departmentTypeId mapping
const DEPT_ID = { purchase: 1, account: 2, technical: 3 } as const;

// ── Component ────────────────────────────────────────────────────────────────

const AddProduct = () => {
  // ── General info state ──────────────────────────────────────────────────
  const [generalData, setGeneralData] = useState({
    customerName: "",
    geography: "",
    internalCustomerNumber: "",
    tradingCurrency: "",
    date: null as Date | null,
    serviceIds: [] as number[],
    customerDescription: "",
    gstNumber: "",
    vatNumber: "",
    paymentTerms: "",
    registeredAddress: "",
    billingAddress: "",
    shippingAddress: "",
  });

  // ── Department contacts state ───────────────────────────────────────────
  const [purchaseDept, setPurchaseDept] = useState<DeptState>(emptyDept());
  const [accountDept, setAccountDept] = useState<DeptState>(emptyDept());
  const [technicalDept, setTechnicalDept] = useState<DeptState>(emptyDept());

  // ── Helpers ─────────────────────────────────────────────────────────────
  const handleGeneralChange = (key: string, value: any) => {
    setGeneralData((prev) => ({ ...prev, [key]: value }));
  };

  /** Generic dept setter — setter is the useState setter for that dept */
  const handleDeptChange = (
    setter: React.Dispatch<React.SetStateAction<DeptState>>,
    contactType: "primary" | "secondary",
    key: keyof DeptContact,
    value: string,
  ) => {
    setter((prev) => ({
      ...prev,
      [contactType]: { ...prev[contactType], [key]: value },
    }));
  };

  // ── Build payload & save ─────────────────────────────────────────────────
  const handleSave = async () => {
    /** Flatten one dept into two departmentContacts entries (primary + secondary) */
    const buildContacts = (
      dept: DeptState,
      departmentTypeId: number,
    ) => [
      {
        departmentTypeId,
        contactPerson: dept.primary.contactPerson,
        designation: dept.primary.designation,
        primaryContactNumber: dept.primary.primaryContactNumber,
        secondaryContactNumber: "",          // not collected for primary row
        emailAddress: dept.primary.emailAddress,
        isPrimaryContact: true,
        departmentDescription: dept.primary.departmentDescription,
      },
      {
        departmentTypeId,
        contactPerson: dept.secondary.contactPerson,
        designation: dept.secondary.designation,
        primaryContactNumber: "",            // not collected for secondary row
        secondaryContactNumber: dept.secondary.primaryContactNumber, // reused field
        emailAddress: dept.secondary.emailAddress,
        isPrimaryContact: false,
        departmentDescription: dept.primary.departmentDescription, // shared description
      },
    ];

    const payload = {
      // ── General ──────────────────────────────────────────────────────
      customerName: generalData.customerName,
      geography: generalData.geography,
      internalCustomerNumber: generalData.internalCustomerNumber,
      tradingCurrency: generalData.tradingCurrency,
      serviceIds: generalData.serviceIds,
      customerDescription: generalData.customerDescription,
      gstNumber: generalData.gstNumber,
      vatNumber: generalData.vatNumber,
      paymentTerms: generalData.paymentTerms,
       billingAddress:generalData.billingAddress,
      shippingAddress: generalData.shippingAddress,
      registeredAddress:generalData.registeredAddress,
      // Department contacts

      // ── Department contacts ───────────────────────────────────────────
      departmentContacts: [
        ...buildContacts(purchaseDept,  DEPT_ID.purchase),
        ...buildContacts(accountDept,   DEPT_ID.account),
        ...buildContacts(technicalDept, DEPT_ID.technical),
      ],

      // ── Address (separate as required) ───────────────────────────────

    };
try {
        await postApi('api/Customer', payload)
        toast.success("Sucessfully proposal data updated", { autoClose: 1500 });
      } catch(err){
         toast.error("Pease try again", { autoClose: 1500 });
      }
    console.log("Save payload →", JSON.stringify(payload, null, 2));
    // TODO: replace with your actual API call, e.g.:
    // await createCustomer(payload);
  };

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <Fragment>
      <ToastContainer/>
      <Row>
        <Col xl={12}>
          <Card className="custom-card p-0">
            <Card.Header className="border-bottom justify-content-between">
              <Card.Title>Add Customer</Card.Title>
            </Card.Header>
            <Card.Body className="py-0">
              <Row>
                <Tab.Container defaultActiveKey="first">
                  {/* ── Sidebar nav (UI unchanged) ── */}
                  <Col xxl={3} xl={4} className="">
                    <Nav
                      as="ul"
                      className="nav flex-column nav-pills add-product-details-nav pt-3"
                      role="tablist"
                    >
                      <Nav.Item as="li" className="nav-item m-1" role="presentation">
                        <Nav.Link
                          eventKey="first"
                          className="d-inline-flex w-100 mb-3 gap-2 align-items-center"
                          id="account"
                          data-bs-toggle="tab"
                          data-bs-target="#account-pane"
                          href={undefined}
                          aria-selected="true"
                          role="tab"
                        >
                          <span className="avatar avatar-lg border avatar-rounded bg-white">
                            <span className="avatar avatar-md avatar-rounded">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M8 16h12V4H8v12zm2-10h8v2h-8V6zm0 3h8v2h-8V9zm0 3h4v2h-4v-2z" opacity=".8" fill="#fff" />
                                <path d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2zM6 4v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zm14 12H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z" />
                              </svg>
                            </span>
                          </span>
                          <div className="text-start">
                            <p className="mb-1 fs-15 fw-semibold text-left">Basic Information</p>
                            <span className="text-muted fs-13">Add Basic Customer Details</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item as="li" className="nav-item m-1" role="presentation">
                        <Nav.Link
                          eventKey="second"
                          className="d-inline-flex w-100 gap-2 mb-3"
                          id="images-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#images-tab-pane"
                          role="tab"
                          aria-controls="images-tab-pane"
                          
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          <span className="avatar avatar-lg border avatar-rounded bg-white">
                            <span className="avatar avatar-md avatar-rounded">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M10.21 16.83l-1.96-2.36L5.5 18h11l-3.54-4.71z" />
                                <path d="M16.5 18h-11l2.75-3.53 1.96 2.36 2.75-3.54L16.5 18zM17 7h-3V6H4v14h14V10h-1V7z" opacity=".8" fill="#fff" />
                                <path d="M20 4V1h-2v3h-3v2h3v2.99h2V6h3V4zm-2 16H4V6h10V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10h-2v10z" />
                              </svg>
                            </span>
                          </span>
                          <div className="text-start">
                            <p className="mb-1 fs-15 fw-semibold">Purchase Department Information</p>
                            <span className="text-muted fs-13">Add Purchase Department Info</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item as="li" className="nav-item m-1" role="presentation">
                        <Nav.Link
                          eventKey="third"
                          className="d-inline-flex w-100 gap-2 mb-3"
                          id="notification-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#notification-tab-pane"
                          role="tab"
                          aria-controls="notification-tab-pane"
                          
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          <span className="avatar avatar-lg border avatar-rounded bg-white">
                            <span className="avatar avatar-md avatar-rounded">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M13 17c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6V5H5v14h14v-2h-6z" opacity=".8" fill="#fff" />
                                <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
                                <circle cx="16" cy="12" r="1.5" />
                              </svg>
                            </span>
                          </span>
                          <div className="text-start">
                            <p className="mb-1 fs-15 fw-semibold">Account Department Information</p>
                            <span className="text-muted fs-13">Add Department Details</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item as="li" className="nav-item m-1" role="presentation">
                        <Nav.Link
                          eventKey="fourth"
                          className="d-inline-flex w-100 mb-3 gap-2"
                          id="security-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#security-tab-pane"
                          role="tab"
                          aria-controls="security-tab-pane"
                          aria-selected="false"
                          
                          tabIndex={-1}
                        >
                          <span className="avatar avatar-lg border avatar-rounded bg-white">
                            <span className="avatar avatar-md avatar-rounded">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".8" fill="#fff" />
                                <path d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z" />
                              </svg>
                            </span>
                          </span>
                          <div className="text-start">
                            <p className="mb-1 fs-15 fw-semibold">Techinical Department Information</p>
                            <span className="text-muted fs-13">Techinical Department Info</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item as="li" className="nav-item m-1" role="presentation">
                        <Nav.Link
                          eventKey="fifth"
                          className="d-inline-flex w-100 mb-0 gap-2"
                          id="otherinfo-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#otherinfo-tab-pane"
                          role="tab"
                          aria-controls="otherinfo-tab-pane"
                          aria-selected="false"
                          
                          tabIndex={-1}
                        >
                          <span className="avatar avatar-lg border avatar-rounded bg-white">
                            <span className="avatar avatar-md avatar-rounded">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M19.28 8.6l-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73 0-.21-.02-.43-.05-.73l-.14-1.13.89-.7 1.1-.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" opacity=".8" fill="#fff" />
                                <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                              </svg>
                            </span>
                          </span>
                          <div className="text-start">
                            <p className="mb-1 fs-15 fw-semibold">Add Customer Address</p>
                            <span className="text-muted fs-13">Add Customer Address</span>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>

                  {/* ── Tab content ── */}
                  <Col xxl={9} xl={8} className="add-product-content">
                    <Card className="custom-card shadow-none">
                      <Tab.Content className="p-3 border-bottom border-block-end-dashed tab-content">

                        {/* ── Tab 1 : Basic Information ── */}
                        <Tab.Pane eventKey="first" className="show p-0 border-0" id="account-pane" role="tabpanel" aria-labelledby="account" tabIndex={0}>
                          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                            <div className="fw-semibold d-block fs-15">General Information :</div>
                          </div>
                          <Row className="gy-3">
                            <Col xl={12}>
                              <Form.Label className="text-start d-block">Customer Name</Form.Label>
                              <Form.Control type="text" placeholder="Name" value={generalData.customerName || ""} onChange={(e) => handleGeneralChange("customerName", e.target.value)} />
                            </Col>
                            <Col xl={6}>
                              <Form.Label className="text-start d-block">Geography</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Geography" value={generalData.geography} onChange={(e) => handleGeneralChange("geography", e.target.value)} />
                            </Col>
                            <Col xl={6}>
                              <Form.Label className="text-start d-block">Internal Customer Number</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Internal Customer Number" value={generalData.internalCustomerNumber} onChange={(e) => handleGeneralChange("internalCustomerNumber", e.target.value)} />
                            </Col>
                            <Col xl={6}>
                              <Form.Label className="text-start d-block">Trading Currency</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Trading Currency" value={generalData.tradingCurrency} onChange={(e) => handleGeneralChange("tradingCurrency", e.target.value)} />
                            </Col>
                            <Col xl={6}>
                              <Form.Label className="text-start d-block">Date</Form.Label>
                              <SpkDatepickr className="form-control" selected={generalData.date} onChange={(date: Date | null) => handleGeneralChange("date", date)} placeholderText="Choose date" />
                            </Col>
                            <Col xl={6}>
                              <Form.Label className="text-start d-block">Service Offered</Form.Label>
                              <SpkSelect
                                option={genderTagOption}
                                isMulti
                                placeholder="Select"
                                onChange={(selected: any) => {
                                  const ids = selected ? selected.map((s: any) => s.value) : [];
                                  handleGeneralChange("serviceIds", ids);
                                }}
                                styles={{
                                  multiValue: (s: any) => ({ ...s, backgroundColor: "rgb(3, 181, 98)" }),
                                  multiValueLabel: (s: any) => ({ ...s, color: "#fff" }),
                                  multiValueRemove: (s: any) => ({ ...s, color: "#fff", ":hover": { backgroundColor: "rgb(2, 150, 80)", color: "#fff" } }),
                                  control: (s: any, state: any) => ({ ...s, borderColor: state.isFocused ? "rgb(3, 181, 98)" : s.borderColor, boxShadow: state.isFocused ? "0 0 0 1px rgb(3, 181, 98)" : s.boxShadow, ":hover": { borderColor: "rgb(3, 181, 98)" } }),
                                  option: (s: any, state: any) => ({ ...s, backgroundColor: state.isSelected ? "rgb(3, 181, 98)" : state.isFocused ? "rgba(3, 181, 98, 0.2)" : "#fff", color: state.isSelected ? "#fff" : "#000" }),
                                }}
                              />
                            </Col>
                            <Col xl={12}>
                              <Form.Label className="text-start d-block">Customer Description</Form.Label>
                              <textarea className="form-control" rows={2} value={generalData.customerDescription} onChange={(e) => handleGeneralChange("customerDescription", e.target.value)} />
                              <Form.Text className="text-muted">*Description should not exceed 500 letters</Form.Text>
                            </Col>
                          </Row>
                        </Tab.Pane>

                        {/* ── Tab 2 : Purchase Department (departmentTypeId = 1) ── */}
                        <Tab.Pane eventKey="second" className="p-0 border-0" id="images-tab-pane" role="tabpanel" aria-labelledby="images-tab" tabIndex={0}>
                          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                            <div className="fw-semibold d-block fs-15">Purchase Department Information</div>
                          </div>
                          <Row className="gy-3">
                            {/* PRIMARY */}
                            <Col xl={6} className="text-start">
                              <Form.Label className="text-start">Primary Contact Person</Form.Label>
                              <Form.Control type="text" placeholder="Enter Primary Contact Person" onChange={(e) => handleDeptChange(setPurchaseDept, "primary", "contactPerson", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label className="text-start">Primary Contact Number</Form.Label>
                              <Form.Control type="text" placeholder="Enter Primary Contact Number" onChange={(e) => handleDeptChange(setPurchaseDept, "primary", "primaryContactNumber", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Designation</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Designation" onChange={(e) => handleDeptChange(setPurchaseDept, "primary", "designation", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Email Address</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Email Address" onChange={(e) => handleDeptChange(setPurchaseDept, "primary", "emailAddress", e.target.value)} />
                            </Col>

                            <hr className="my-2 mt-4" />

                            {/* SECONDARY */}
                            <Col xl={6} className="text-start">
                              <Form.Label>Secondary Contact Person</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Secondary Contact Person" onChange={(e) => handleDeptChange(setPurchaseDept, "secondary", "contactPerson", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Secondary Contact Number</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Secondary Contact Number" onChange={(e) => handleDeptChange(setPurchaseDept, "secondary", "primaryContactNumber", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Designation</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Designation" onChange={(e) => handleDeptChange(setPurchaseDept, "secondary", "designation", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Email" onChange={(e) => handleDeptChange(setPurchaseDept, "secondary", "emailAddress", e.target.value)} />
                            </Col>
                            <Col xl={12} className="text-start">
                              <Form.Label htmlFor="purchase-desc">Purchase Description</Form.Label>
                              <textarea className="form-control" id="purchase-desc" rows={2} onChange={(e) => handleDeptChange(setPurchaseDept, "primary", "departmentDescription", e.target.value)} />
                              <Form.Label className="form-label mt-1 fs-12 text-muted mb-0">*Description should not exceed 500 letters</Form.Label>
                            </Col>
                          </Row>
                        </Tab.Pane>

                        {/* ── Tab 3 : Account Department (departmentTypeId = 2) ── */}
                        <Tab.Pane eventKey="third" className="p-0 border-0" id="notification-tab-pane" role="tabpanel" aria-labelledby="notification-tab" tabIndex={0}>
                          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                            <div className="fw-semibold d-block fs-15">Account Department Information</div>
                          </div>
                          <Row className="gy-3">
                            {/* PRIMARY */}
                            <Col xl={12} className="text-start">
                              <Form.Label className="text-start">Primary Contact Person</Form.Label>
                              <Form.Control type="text" placeholder="Enter Primary Contact Person" onChange={(e) => handleDeptChange(setAccountDept, "primary", "contactPerson", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Designation</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Designation" onChange={(e) => handleDeptChange(setAccountDept, "primary", "designation", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Email Address</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Email Address" onChange={(e) => handleDeptChange(setAccountDept, "primary", "emailAddress", e.target.value)} />
                            </Col>

                            <hr className="my-2 mt-4" />

                            {/* SECONDARY */}
                            <Col xl={12} className="text-start">
                              <Form.Label>Secondary Contact Person</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Secondary Contact Person" onChange={(e) => handleDeptChange(setAccountDept, "secondary", "contactPerson", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Designation</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Designation" onChange={(e) => handleDeptChange(setAccountDept, "secondary", "designation", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Email" onChange={(e) => handleDeptChange(setAccountDept, "secondary", "emailAddress", e.target.value)} />
                            </Col>
                            <Col xl={12} className="text-start">
                              <Form.Label htmlFor="account-desc">Purchase Description</Form.Label>
                              <textarea className="form-control" id="account-desc" rows={2} onChange={(e) => handleDeptChange(setAccountDept, "primary", "departmentDescription", e.target.value)} />
                              <Form.Label className="form-label mt-1 fs-12 text-muted mb-0">*Description should not exceed 500 letters</Form.Label>
                            </Col>
                          </Row>
                        </Tab.Pane>

                        {/* ── Tab 4 : Technical Department (departmentTypeId = 3) ── */}
                        <Tab.Pane eventKey="fourth" className="p-0 border-0" id="security-tab-pane" role="tabpanel" aria-labelledby="security-tab" tabIndex={0}>
                          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                            <div className="fw-semibold d-block fs-15">Technical Department Information</div>
                          </div>
                          <Row className="gy-3">
                            {/* PRIMARY */}
                            <Col xl={12} className="text-start">
                              <Form.Label className="text-start">Primary Contact Person</Form.Label>
                              <Form.Control type="text" placeholder="Enter Primary Contact Person" onChange={(e) => handleDeptChange(setTechnicalDept, "primary", "contactPerson", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Designation</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Designation" onChange={(e) => handleDeptChange(setTechnicalDept, "primary", "designation", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Email Address</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Email Address" onChange={(e) => handleDeptChange(setTechnicalDept, "primary", "emailAddress", e.target.value)} />
                            </Col>

                            <hr className="my-2 mt-4" />

                            {/* SECONDARY */}
                            <Col xl={12} className="text-start">
                              <Form.Label>Secondary Contact Person</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Secondary Contact Person" onChange={(e) => handleDeptChange(setTechnicalDept, "secondary", "contactPerson", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Designation</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Designation" onChange={(e) => handleDeptChange(setTechnicalDept, "secondary", "designation", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="text" placeholder="Enter the Email" onChange={(e) => handleDeptChange(setTechnicalDept, "secondary", "emailAddress", e.target.value)} />
                            </Col>
                            <Col xl={12} className="text-start">
                              <Form.Label htmlFor="technical-desc">Purchase Description</Form.Label>
                              <textarea className="form-control" id="technical-desc" rows={2} onChange={(e) => handleDeptChange(setTechnicalDept, "primary", "departmentDescription", e.target.value)} />
                              <Form.Label className="form-label mt-1 fs-12 text-muted mb-0">*Description should not exceed 500 letters</Form.Label>
                            </Col>
                          </Row>
                        </Tab.Pane>

                        {/* ── Tab 5 : Address ── */}
                        <Tab.Pane eventKey="fifth" className="p-0 border-0" id="otherinfo-tab-pane" role="tabpanel" aria-labelledby="otherinfo-tab" tabIndex={0}>
                          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                            <div className="fw-semibold d-block fs-15">Add Customer Address</div>
                          </div>
                          <Col xl={12} className="text-start">
                            <Form.Label>Registered Address</Form.Label>
                            <textarea className="form-control" rows={4} value={generalData.registeredAddress} onChange={(e) => handleGeneralChange("registeredAddress", e.target.value)} />
                          </Col>
                          <Col xl={12} className="text-start mt-4">
                            <Form.Label>Billing Address</Form.Label>
                            <textarea className="form-control" rows={4} value={generalData.billingAddress} onChange={(e) => handleGeneralChange("billingAddress", e.target.value)} />
                          </Col>
                          <Col xl={12} className="text-start mt-4">
                            <Form.Label>Shipping Address</Form.Label>
                            <textarea className="form-control" rows={4} value={generalData.shippingAddress} onChange={(e) => handleGeneralChange("shippingAddress", e.target.value)} />
                          </Col>
                          <Row>
                            <Col xl={6} className="text-start mt-3">
                              <Form.Label>GST Number</Form.Label>
                              <Form.Control type="text" placeholder="Enter the GST NO" value={generalData.gstNumber} onChange={(e) => handleGeneralChange("gstNumber", e.target.value)} />
                            </Col>
                            <Col xl={6} className="text-start mt-3">
                              <Form.Label>VAT Number</Form.Label>
                              <Form.Control type="text" placeholder="Enter the VAT NO" value={generalData.vatNumber} onChange={(e) => handleGeneralChange("vatNumber", e.target.value)} />
                            </Col>
                          </Row>
                          <Col xl={12} className="text-start mt-4">
                            <Form.Label>Payment Terms</Form.Label>
                            <textarea className="form-control" rows={4} value={generalData.paymentTerms} onChange={(e) => handleGeneralChange("paymentTerms", e.target.value)} />
                          </Col>
                        </Tab.Pane>

                      </Tab.Content>

                      <Card.Footer className="border-top-0">
                        <div className="btn-list float-end" onClick={handleSave}>
                          <SpkButton Buttonvariant="primary" Customclass="btn">
                            Save Customer Information
                            <i className="bi bi-download ms-2"></i>
                          </SpkButton>
                        </div>
                      </Card.Footer>
                    </Card>
                  </Col>
                </Tab.Container>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AddProduct;
