import React, { Fragment, useState } from "react";
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

const SocialMedia = () => {
  const companyInfo = {
    name: "Vinnovative Engineering Pvt. Ltd.",
    addressLine1: "No. 26A, Northwest Portion, Near NTTF Circle",
    addressLine2: "Peenya 2nd Phase, Bangalore - 560058",
    gst: "29AAFCV6761M3ZH",
    pan: "AAFCV6761M",
  };

  const [poDetails, setPoDetails] = useState({
    poNumber: "V126271001",
    date: "2026-04-23",
    quotationNo: "",
    quotationDate: "",
  });

  const [supplier, setSupplier] = useState({
    name: "",
    address: "",
    gstin: "",
    attention: "",
    date: "",
  });

  const [items, setItems] = useState([
    {
      description: "",
      qty: "",
      unitPrice: "",
      total: "",
    },
  ]);
  const [comments, setComments] = useState();

  const [gstPercent, setGstPercent] = useState("");
  const subTotalGST = items.reduce(
    (acc, item) => acc + (Number(item.total) || 0),
    0,
  );
  const gstAmount = subTotalGST * ((Number(gstPercent) || 0) / 100);

  const grandTotal = subTotalGST + gstAmount;

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
        qty: "",
        unitPrice: "",
        total: "",
      },
    ]);
  };

  const removeItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const subTotal = items.reduce(
    (acc, item) => acc + (Number(item.total) || 0),
    0,
  );

  const handleSave = () => {
    const payload = {
      companyInfo,
      poDetails,
      supplier,
      items,
      summary: {
        subTotal,
        gst,
        grandTotal,
      },
    };

    console.log(payload);
    alert("Saved Successfully!");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Fragment>
      <Seo title={"Release of Purchase Orders"} />

      <Pageheader
        title="Dashboard"
        currentpage="Release of Purchase Orders"
        activepage="Release of Purchase Orders"
      />
      <Container fluid className="py-4 bg-light">
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
                          onChange={(e) =>
                            setPoDetails({
                              ...poDetails,
                              date: e.target.value,
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
                    selected={supplier.date ? new Date(supplier.date) : null}
                    onChange={(e) =>
                      setPoDetails({
                        ...supplier,
                        date: e.target.value,
                      })
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
                            handleItemChange(index, "unitPrice", e.target.value)
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
              <div style={{ clear: "both" }}></div>
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
                      <Col md={8} style={{ borderRight: "1px solid #e9ecef" }}>
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
                      <Col md={4}>
                        <div className="p-3" style={{ minHeight: "320px" }}>
                          <div className="d-flex justify-content-between mb-3">
                            <span>Subtotal</span>
                            <strong>₹{subTotal.toFixed(2)}</strong>
                          </div>

                          <Form.Group className="mb-3">
                            <Form.Label>GST %</Form.Label>

                            <Form.Control
                              type="number"
                              value={gstPercent}
                              placeholder="Enter GST %"
                              onChange={(e) => setGstPercent(e.target.value)}
                            />
                          </Form.Group>

                          <div className="d-flex justify-content-between mb-3">
                            <span>GST Amount</span>
                            <strong>₹{gstAmount.toFixed(2)}</strong>
                          </div>

                          <hr />

                          <div className="d-flex justify-content-between">
                            <h5 className="text-primary mb-0">Grand Total</h5>

                            <h5 className="text-primary mb-0">
                              ₹{grandTotal.toFixed(2)}
                            </h5>
                          </div>
                        </div>
                      </Col>
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
                      Disclaimer: This Purchase Order is auto-generated and does
                      not require a signature
                    </h6>
                  </Card.Footer>
                </Card>
              </div>
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
      </Container>
    </Fragment>
  );
};

export default SocialMedia;
