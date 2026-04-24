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
  });

  const [items, setItems] = useState([
    { description: "", qty: 1, unitPrice: 0, total: 0 },
  ]);

  const handleSupplierChange = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;

    const qty = parseFloat(newItems[index].qty) || 0;
    const unitPrice = parseFloat(newItems[index].unitPrice) || 0;
    newItems[index].total = qty * unitPrice;

    setItems(newItems);
  };

  const addItem = () => {
    setItems([
      ...items,
      { description: "", qty: 1, unitPrice: 0, total: 0 },
    ]);
  };

  const removeItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const subTotal = items.reduce((acc, item) => acc + item.total, 0);
  const gst = subTotal * 0.18;
  const grandTotal = subTotal + gst;

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

    console.log("Payload:", payload);
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

      <Container className="my-4" style={{ maxWidth: "1100px" }}>
        <Card className="border-0 shadow rounded-4 overflow-hidden">
          {/* Header */}
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
                      <Form.Control
                        type="date"
                        value={poDetails.date}
                        onChange={(e) =>
                          setPoDetails({
                            ...poDetails,
                            date: e.target.value,
                          })
                        }
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

          {/* Body */}
          <Card.Body className="p-4">
            {/* Supplier */}
            <h5 className="fw-bold text-dark mb-3">
              Supplier Information
            </h5>

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
                  placeholder="Kind Attention"
                  name="attention"
                  value={supplier.attention}
                  onChange={handleSupplierChange}
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

            {/* Items */}
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
                  <th>Description</th>
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
                        value={item.description}
                        placeholder="Description"
                        onChange={(e) =>
                          handleItemChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </td>

                    <td>
                      <Form.Control
                        type="number"
                        value={item.qty}
                        onChange={(e) =>
                          handleItemChange(
                            index,
                            "qty",
                            e.target.value
                          )
                        }
                      />
                    </td>

                    <td>
                      <Form.Control
                        type="number"
                        value={item.unitPrice}
                        onChange={(e) =>
                          handleItemChange(
                            index,
                            "unitPrice",
                            e.target.value
                          )
                        }
                      />
                    </td>

                    <td className="fw-bold">
                      ₹{item.total.toFixed(2)}
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

            {/* Totals */}
            <Row className="justify-content-end mt-4">
              <Col md={5}>
                <Card className="border-0 bg-light">
                  <Card.Body>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal</span>
                      <strong>₹{subTotal.toFixed(2)}</strong>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <span>GST (18%)</span>
                      <strong>₹{gst.toFixed(2)}</strong>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0 text-primary">
                        Grand Total
                      </h5>
                      <h5 className="mb-0 text-primary">
                        ₹{grandTotal.toFixed(2)}
                      </h5>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Footer Buttons */}
            <div className="d-flex justify-content-end gap-3 mt-4 pt-3 border-top">
              <Button
                variant="outline-secondary"
                onClick={handlePrint}
              >
                Print
              </Button>

              <Button
                variant="success"
                onClick={handleSave}
              >
                Save Order
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </Fragment>
  );
};

export default SocialMedia;