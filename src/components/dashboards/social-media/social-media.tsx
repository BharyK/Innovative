import React, { Fragment, useEffect, useState, useMemo } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import {
  Container,
  Row,
  Col,
  Form,
  Table,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SpkDatepickr from "../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import "./style.css";
import { getApi, postApi, putApi, deleteApi } from "../../../api/services";
import { toast, ToastContainer } from "react-toastify";
import moment from "moment";
import { Tabs, Tab } from "react-bootstrap";
import './style.css'

const SocialMedia = () => {
  const companyInfo = {
    name: "Vinnovative Engineering Pvt. Ltd.",
    addressLine1: "No. 26A, Northwest Portion, Near NTTF Circle",
    addressLine2: "Peenya 2nd Phase, Bangalore - 560058",
    gst: "29AAFCV6761M3ZH",
    pan: "AAFCV6761M",
  };

  const [poDetails, setPoDetails] = useState({
    poNumber: "",
    date: moment().format("DD/MM/YYYY"),
    quotationNo: "",
    quotationDate: "",
  });

  const [supplier, setSupplier] = useState({
    name: "",
    address: "",
    gstin: "",
    attention: "",
    date: moment().format("DD/MM/YYYY"),
  });

  const [items, setItems] = useState([
    {
      description: "",
      qty: "",
      unitPrice: "",
      total: "",
    },
  ]);
  const [poList, setPoList] = useState([]);

  const [comments, setComments] = useState();

  const handleSupplierChange = (e) => {
    setSupplier({
      ...supplier,
      [e.target.name]: e.target.value,
    });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        description: "",
        quantity: "",
        unitPrice: "",
        total: "",
      },
    ]);
  };

  const removeItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  useEffect(() => {
    handleGetDetails();
  }, []);
  const [poListData, setPoListData] = useState([]);

  const handleGetDetails = async () => {
    try {
      const res = await getApi("Order/purchase-order");

      // ✅ handle both possible response shapes
      const data = res?.data || res;

      setPoListData(Array.isArray(data) ? data : []);
      console.log(data);
    } catch (err) {
      toast.error("Please try again", { autoClose: 1500 });
    }
  };

  const initialPoDetails = {
    poNumber: "",
    date: moment().format("DD/MM/YYYY"),
    quotationNo: "",
    quotationDate: "",
  };

  const initialSupplier = {
    name: "",
    address: "",
    gstin: "",
    attention: "",
    date: moment().format("DD/MM/YYYY"),
  };

  const initialItems = [
    {
      description: "",
      qty: "",
      unitPrice: "",
      total: "",
    },
  ];

  const handleSave = async () => {
    const doc = {
      poNumber: poDetails.poNumber,
      poDate: moment(poDetails.date).toISOString(),
      supplierName: supplier.name,
      quotationNumber: poDetails.quotationNo,
      quotationDate: moment(poDetails.quotationDate).toISOString(),
      gstin: supplier.gstin,
      address: supplier.address,
      items,
      comments: comments,
    };

    try {
      await postApi("Order/purchase-order", doc);

      toast.success("Successfully data updated", { autoClose: 1500 });

      // ✅ RESET EVERYTHING
      setPoDetails(initialPoDetails);
      setSupplier(initialSupplier);
      setItems(initialItems);
    } catch (err) {
      toast.error("Please try again", { autoClose: 1500 });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const fetchPOList = async () => {
    try {
      const res = await getApi("Order/purchase-order");
      setPoList(res || []);
    } catch (err) {
      toast.error("Failed to fetch data");
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = useMemo(() => {
    if (!searchTerm) return poListData;

    const term = searchTerm.toLowerCase();

    return poListData.filter((po) =>
      [
        po.poNumber,
        po.supplierName,
        po.quotationNumber,
        po.gstin,
        po.address,
      ]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [searchTerm, poListData]);

  return (
    <Fragment>
      <Seo title={"Release of Purchase Orders"} />
      <ToastContainer />
      <Pageheader
        title="Dashboard"
        currentpage="Release of Purchase Orders"
        activepage="Release of Purchase Orders"
      />
      <Container fluid className="py-4 bg-light">
        <Tabs defaultActiveKey="form" className="mb-3">
          <Tab eventKey="form" title="Form Fill">
            <Container className="my-4" style={{ maxWidth: "1100px" }}>
              <Card className="border-0 shadow rounded-4 overflow-hidden">
                <div className="bg-white  p-3 mb-4 text-center">
                  <img
                    src="https://vinnovative.co.in/wp-content/uploads/2017/02/logo.png"
                    alt="Vinnovative Engineering Pvt Ltd."
                    style={{
                      maxHeight: "70px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="bg-success text-white p-4">
                  <Row className="align-items-center">
                    <Col md={7}>
                      <h2 className="fw-bold mb-1">{companyInfo.name}</h2>
                      <p className="mb-1">{companyInfo.addressLine1}</p>
                      <p className="mb-0">{companyInfo.addressLine2}</p>

                      <div className="mt-3 d-flex gap-2 flex-wrap">
                        <Badge bg="light" text="dark">
                          GSTIN: {companyInfo.gst}
                        </Badge>

                        <Badge bg="light" text="dark">
                          PAN: {companyInfo.pan}
                        </Badge>
                      </div>
                    </Col>

                    <Col md={5}>
                      <Card className="border-0 shadow-sm">
                        <Card.Body>
                          <h5 className="text-success fw-bold mb-3">
                            Purchase Order
                          </h5>

                          <Form.Group className="mb-2">
                            <Form.Label>Date</Form.Label>
                            <SpkDatepickr
                              className="form-control"
                              selected={
                                poDetails.date ? new Date(poDetails.date) : null
                              }
                              onChange={(date) =>
                                setPoDetails({
                                  ...poDetails,
                                  date: moment(date).toISOString(),
                                })
                              }
                              placeholderText="Choose date"
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>P.O Number</Form.Label>

                            <Form.Control
                              value={poDetails.poNumber}
                              onChange={(e) =>
                                setPoDetails({
                                  ...poDetails,
                                  poNumber: e.target.value,
                                })
                              }
                            />
                          </Form.Group>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>

                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">Supplier Information</h5>

                  <Row className="g-3 mb-4">
                    <Col md={6}>
                      <Form.Control
                        placeholder="Supplier Name"
                        name="name"
                        value={supplier.name}
                        onChange={handleSupplierChange}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Control
                        placeholder="Quatitaion No."
                        name="attention"
                        value={supplier.attention}
                        onChange={handleSupplierChange}
                      />
                    </Col>
                    <Col md={6}>
                      <SpkDatepickr
                        className="form-control"
                        selected={
                          supplier.date ? new Date(supplier.date) : null
                        }
                        onChange={(date) =>
                          setPoDetails((prev) => ({
                            ...prev,
                            date: moment(date).toISOString(),
                          }))
                        }
                        placeholderText="Choose date"
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control
                        placeholder="GSTIN"
                        name="gstin"
                        value={supplier.gstin}
                        onChange={handleSupplierChange}
                      />
                    </Col>

                    <Col md={12}>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="Address"
                        name="address"
                        value={supplier.address}
                        onChange={handleSupplierChange}
                      />
                    </Col>
                  </Row>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0">Order Items</h5>

                    <Button size="sm" onClick={addItem}>
                      + Add Item
                    </Button>
                  </div>

                  <Table bordered hover responsive>
                    <thead className="table-light">
                      <tr>
                        <th>#</th>
                        <th width="350px">Description</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {items.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>

                          <td>
                            <Form.Control
                              as="textarea"
                              rows={4}
                              value={item.description}
                              placeholder="Description"
                              onChange={(e) =>
                                handleItemChange(
                                  index,
                                  "description",
                                  e.target.value,
                                )
                              }
                            />
                          </td>

                          <td>
                            <Form.Control
                              type="number"
                              value={item.qty}
                              placeholder="Qty"
                              onChange={(e) =>
                                handleItemChange(index, "qty", e.target.value)
                              }
                            />
                          </td>

                          <td>
                            <Form.Control
                              type="number"
                              value={item.unitPrice}
                              placeholder="Unit Price"
                              onChange={(e) =>
                                handleItemChange(
                                  index,
                                  "unitPrice",
                                  e.target.value,
                                )
                              }
                            />
                          </td>

                          <td>
                            <Form.Control
                              type="number"
                              value={item.total}
                              placeholder="Total"
                              onChange={(e) =>
                                handleItemChange(index, "total", e.target.value)
                              }
                            />
                          </td>

                          <td>
                            <Button
                              size="sm"
                              variant="outline-danger"
                              onClick={() => removeItem(index)}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <div className="fw-bold mb-3 comments-print-page">
                    <Card
                      className="mt-4 rounded-0"
                      style={{ border: "1px solid #e9ecef" }}
                    >
                      <Card.Header
                        className="fw-bold mb-3 comments-print-page"
                        style={{ borderBottom: "1px solid #e9ecef" }}
                      >
                        Other Comments or Special Instructions
                      </Card.Header>

                      <Card.Body className="p-0">
                        <Row className="g-0">
                          {/* Left Comments Section */}
                          <Col
                            md={12}
                            style={{ borderRight: "1px solid #e9ecef" }}
                          >
                            <div className="p-3" style={{ minHeight: "320px" }}>
                              <Form.Control
                                as="textarea"
                                placeholder="Please add comments....."
                                rows={12}
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                                className="border-0 shadow-none h-100"
                                style={{
                                  resize: "none",
                                  fontSize: "18px",
                                  fontWeight: "500",
                                }}
                              />
                            </div>
                          </Col>

                          {/* Right GST Section */}
                        </Row>

                        {/* Bottom Contact Text */}
                        <div
                          className="text-center py-4"
                          style={{ borderTop: "1px solid #e9ecef" }}
                        >
                          <h6 className="fw-normal">
                            If you have any questions about this purchase order,
                            please contact
                          </h6>

                          <h6 className="fw-normal mt-2">
                            [Person Name, Phone +91, E-mail]
                          </h6>
                        </div>
                      </Card.Body>

                      <Card.Footer
                        className="text-center py-4 bg-white"
                        style={{ borderTop: "1px solid #e9ecef" }}
                      >
                        <h6 className="fw-normal mb-0">
                          Disclaimer: This Delivery Challan is system-generated
                          and does not require a signature.
                        </h6>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div style={{ clear: "both" }}></div>

                  <div className="d-flex justify-content-end gap-3 mt-4 pt-3 border-top">
                    <Button variant="outline-secondary" onClick={handlePrint}>
                      Print
                    </Button>

                    <Button variant="success" onClick={handleSave}>
                      Save Order
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Container>
          </Tab>
          {/* ✅ VIEW TAB */}
          <Tab eventKey="view" title="View Details" onEnter={fetchPOList}>
            <Card className="border-0 shadow rounded-4">
              <Card.Body>
               

               <div className="container-fluid">

      {/* 🔷 Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h4 className="mb-1 fw-semibold">Purchase Orders</h4>
          <small className="text-muted">
            View and manage all purchase orders
          </small>
        </div>

        <div className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search PO, Supplier, GSTIN..."
            style={{ width: "250px" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* <button className="btn btn-primary">
            + Create PO
          </button> */}
        </div>
      </div>

      {/* 🔷 Table */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">

          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light text-muted small">
              <tr>
                <th style={{ width: "50px" }}>#</th>
                <th>PO Number</th>
                <th>Date</th>
                <th>Supplier</th>
                <th>Quotation</th>
                <th>GSTIN</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length ? (
                filteredData.map((po, index) => (
                  <tr key={po.purchaseOrderId || index}>
                    <td className="text-muted">{index + 1}</td>

                    <td className="fw-semibold">
                      {po.poNumber || "--"}
                    </td>

                    <td className="text-muted">
                      {po.poDate
                        ? moment(po.poDate).format("DD MMM YYYY")
                        : "--"}
                    </td>

                    <td>{po.supplierName || "--"}</td>

                    <td className="text-muted">
                      {po.quotationNumber || "--"}
                    </td>

                    <td className="text-muted small">
                      {po.gstin || "--"}
                    </td>

                    <td
                      className="text-truncate text-muted"
                      style={{ maxWidth: "220px" }}
                      title={po.address}
                    >
                      {po.address || "--"}
                    </td>

                    <td className="text-end">
                      <button className="btn btn-sm btn-light">
                        ⋮
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-5">
                    <div className="text-muted">
                      <div style={{ fontSize: "40px" }}>🔍</div>
                      <div className="fw-semibold mt-2">
                        No results found
                      </div>
                      <small>
                        Try a different keyword
                      </small>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

        </div>
      </div>
    </div>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Container>
    </Fragment>
  );
};

export default SocialMedia;
