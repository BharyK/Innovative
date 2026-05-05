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
import './styles.css'
import { Tabs, Tab } from "react-bootstrap";

const School = () => {
  const companyInfo = {
    name: "Vinnovative Engineering Pvt. Ltd.",
    address1: "No. 26A, Northwest Portion, Near NTTF Circle",
    address2: "Peenya 2nd Phase, Bangalore - 560058, Karnataka",
    gst: "29AAFCV6761M3ZH",
    pan: "AAFCV6761M",
  };

  const [dcDetails, setDcDetails] = useState({
    dcNumber: "V426271001",
    date: "2026-04-23",
    transporter: "By Auto",
    lrNo: "",
    vehicleNo: "",
  });

  const [supplier, setSupplier] = useState({
    name: "",
    address: "",
    gstin: "",
  });

  const [items, setItems] = useState([
    {
      description: "",
      method: "",
      qty: 1,
      unit: "",
    },
  ]);

  const handleSupplier = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };
const [poList, setPoList] = useState([]);
  const handleItem = (index, field, value) => {
    const data = [...items];
    data[index][field] = value;
    setItems(data);
  };

  const addRow = () => {
    setItems([
      ...items,
      {
        description: "",
        method: "",
        qty: 1,
        unit: "",
      },
    ]);
  };

  const removeRow = (index) => {
    const data = items.filter((_, i) => i !== index);
    setItems(data);
  };

  const handleSave = () => {
    const payload = {
      companyInfo,
      dcDetails,
      supplier,
      items,
    };

    console.log("Delivery Challan Payload:", payload);
    alert("Saved Successfully!");
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

  return (
    <Fragment>
      <Seo title={"Delivery Challan"} />

      <Pageheader
        title="Dashboard"
        currentpage="Delivery Challan"
        activepage="Delivery Challan"
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

                  <p className="mb-1">{companyInfo.address1}</p>
                  <p className="mb-1">{companyInfo.address2}</p>

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
                        Delivery Challan
                      </h5>

                      <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={dcDetails.date}
                          onChange={(e) =>
                            setDcDetails({
                              ...dcDetails,
                              date: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>D.C Number</Form.Label>
                        <Form.Control
                          value={dcDetails.dcNumber}
                          onChange={(e) =>
                            setDcDetails({
                              ...dcDetails,
                              dcNumber: e.target.value,
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
              <h5 className="fw-bold mb-3">Supplier Details</h5>

              <Row className="g-3 mb-4">
                <Col md={6}>
                  <Form.Control
                    placeholder="Supplier Name"
                    name="name"
                    value={supplier.name}
                    onChange={handleSupplier}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    placeholder="GSTIN"
                    name="gstin"
                    value={supplier.gstin}
                    onChange={handleSupplier}
                  />
                </Col>

                <Col md={12}>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Address"
                    name="address"
                    value={supplier.address}
                    onChange={handleSupplier}
                  />
                </Col>
              </Row>

              {/* Transport */}
              {/* <h5 className="fw-bold mb-3">Transport Details</h5> */}

              {/* <Row className="g-3 mb-4">
                <Col md={4}>
                  <Form.Control
                    placeholder="Transporter"
                    value={dcDetails.transporter}
                    onChange={(e) =>
                      setDcDetails({
                        ...dcDetails,
                        transporter: e.target.value,
                      })
                    }
                  />
                </Col>

                <Col md={4}>
                  <Form.Control
                    placeholder="LR No & Date"
                    value={dcDetails.lrNo}
                    onChange={(e) =>
                      setDcDetails({
                        ...dcDetails,
                        lrNo: e.target.value,
                      })
                    }
                  />
                </Col>

                <Col md={4}>
                  <Form.Control
                    placeholder="Vehicle Number"
                    value={dcDetails.vehicleNo}
                    onChange={(e) =>
                      setDcDetails({
                        ...dcDetails,
                        vehicleNo: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row> */}

              {/* Items */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Items</h5>

                <Button size="sm" onClick={addRow}>
                  + Add Item
                </Button>
              </div>

              <Table bordered hover responsive>
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th width="350px">Description</th>
                    <th>Method</th>
                    <th>Qty</th>
                    <th>Unit</th>
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
                            handleItem(index, "description", e.target.value)
                          }
                        />
                      </td>

                      <td>
                        <Form.Control
                          value={item.method}
                          onChange={(e) =>
                            handleItem(index, "method", e.target.value)
                          }
                        />
                      </td>

                      <td>
                        <Form.Control
                          type="number"
                          value={item.qty}
                          onChange={(e) =>
                            handleItem(index, "qty", e.target.value)
                          }
                        />
                      </td>

                      <td>
                        <Form.Control
                          value={item.unit}
                          onChange={(e) =>
                            handleItem(index, "unit", e.target.value)
                          }
                        />
                      </td>

                      <td>
                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => removeRow(index)}
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
                      <Col md={12} style={{ borderRight: "1px solid #e9ecef" }}>
                        <div className="p-3" style={{ minHeight: "320px" }}>
                          <Form.Control
                            as="textarea"
                            placeholder="Please add comments....."
                            rows={12}
                            value={""}
                            //onChange={(e) => setComments(e.target.value)}
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
                      Disclaimer: This Delivery Challan is system-generated and does not require a signature.
                    </h6>
                  </Card.Footer>
                </Card>
              </div>
              {/* Footer */}
              <div className="d-flex justify-content-end gap-3 mt-4 pt-3 border-top">
                <Button variant="outline-secondary" onClick={handlePrint}>
                  Print
                </Button>

                <Button variant="success" onClick={handleSave}>
                  Save Challan
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </Fragment>
  );
};

export default School;
