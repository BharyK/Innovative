import { Fragment, useState } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import SpkTooltips from "../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import {
  BrowserActivity,
  RecentOrders,
  RecentTransactions,
  RevenueChannels,
  SalesDataRow1,
  SalesRevenueOptions,
  SalesRevenueSeries,
  TopAudienceLocations,
  TopCategoriesBySales,
  UpcomingSales,
  VisitorsByDevice,
  VisitorsByDeviceOptions,
  VisitorsByDeviceSeries,
} from "../../../shared/data/dashboards/salesdata";
import SpkSalesdashboard from "../../../shared/@spk-reusable-components/reusable-dashboards/spk-salesdashboard";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import { Link } from "react-router-dom";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import media9 from "../../../assets/images/media/png/9.png";
import { ExcelReader } from "../../utilities/excel-reader/excel-reader";
import { ExcelReaderDynamic } from "../../utilities/excel-reader/excel-reader-dynamic";
import ExcelMultiTab from '../../utilities/excel-reader/excel-multi-tab'
import moment from "moment";

const Sales = () => {
 const [excelData, setExcelData] = useState({});
  const [activeSheet, setActiveSheet] = useState("");

    const handleExcelData = (data) => {
    console.log("🔥 Full Excel JSON:", data);

    setExcelData(data);

    const firstSheet = Object.keys(data)[0];
    setActiveSheet(firstSheet);
  };

  // 🔥 Dynamic data
  const dyanmicaContent = excelData[activeSheet] || [];
  const headers =
    dyanmicaContent.length > 0
      ? Object.keys(dyanmicaContent[0])
      : [];
  return (
    <Fragment>
      {/* <!-- Start::page-header --> */}
      {/* <ExcelReader setExcelData={setExcelData} />
      <ExcelReaderDynamic setExcelData={setDynamicContent} /> */}
       <ExcelMultiTab onDataExtracted={handleExcelData} />
      <Seo title={"Sales"} />

      <div className="d-flex align-items-center justify-content-between my-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <p className="fw-medium fs-18 mb-0">Hello there, Jack Miller</p>
          <p className="fs-13 text-muted mb-0">
            Let's make today a productive one!
          </p>
        </div>
        </div>
       <Col xl={12}>
        <Card className="custom-card overflow-hidden">

          {/* HEADER */}
          <Card.Header className="pb-2 justify-content-between">
            <Card.Title>
              {activeSheet} - {dyanmicaContent.length}
            </Card.Title>

            <div className="d-flex flex-wrap gap-2 align-items-center">
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="Search Here"
              />

              <Dropdown>
                <Dropdown.Toggle className="btn btn-primary btn-sm">
                  Sort By
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>New</Dropdown.Item>
                  <Dropdown.Item>Popular</Dropdown.Item>
                  <Dropdown.Item>Relevant</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card.Header>

          {/* 🔥 SHEET TABS */}
          <div className="p-2">
            {Object.keys(excelData).map((sheet) => (
              <button
                key={sheet}
                onClick={() => setActiveSheet(sheet)}
                className={`btn btn-sm me-2 ${
                  activeSheet === sheet ? "btn-primary" : "btn-light"
                }`}
              >
                {sheet}
              </button>
            ))}
          </div>

          {/* BODY */}
          <Card.Body className="p-0">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap table-hover">

                <thead>
                  <tr>
                    {headers.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {dyanmicaContent.length > 0 ? (
                    dyanmicaContent.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {headers.map((key, colIndex) => (
                          <td key={colIndex}>{row[key]}</td>
                        ))}

                        <td>
                          <div className="btn-list">
                            <button className="btn btn-icon btn-sm btn-primary-light">
                              <i className="ri-eye-line"></i>
                            </button>

                            <button className="btn btn-icon btn-sm btn-danger-light">
                              <i className="ri-download-2-line"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={headers.length + 1} className="text-center">
                        No Data Available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Card.Body>

          {/* FOOTER */}
          <Card.Footer className="border-top-0">
            <div className="d-flex align-items-center">
              <div>Showing {dyanmicaContent.length} Entries</div>

              <div className="ms-auto">
                <ul className="pagination mb-0">
                  <li className="page-item disabled">
                    <Link className="page-link" to="#!">
                      Prev
                    </Link>
                  </li>

                  <li className="page-item active">
                    <Link className="page-link" to="#!">
                      1
                    </Link>
                  </li>

                  <li className="page-item">
                    <Link className="page-link" to="#!">
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Card.Footer>

        </Card>
      </Col>
    </Fragment>
  );
};

export default Sales;
