import { Card, Col, Dropdown, Row } from "react-bootstrap";
import { Fragment, useState } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import ExcelMultiTab from "../../utilities/excel-reader/excel-multi-tab";
import { Link } from "react-router-dom";

const Podcast = () => {
  const [excelData, setExcelData] = useState({});
  const [activeSheet, setActiveSheet] = useState("");

  const handleExcelData = (data) => {
    console.log("🔥 Full Excel JSON:", data);

    setExcelData(data);

    const firstSheet = Object.keys(data)[3];
    setActiveSheet(firstSheet);
  };

  // 🔥 Dynamic data
  const dyanmicaContent = excelData[activeSheet] || [];
  const headers =
    dyanmicaContent.length > 0 ? Object.keys(dyanmicaContent[3]) : [];
  return (
    <Fragment>
      {/* <!-- Start::page-header --> */}
      <Seo title={"Expenses"} />
      <ExcelMultiTab onDataExtracted={handleExcelData} />
      <Pageheader
        title="Dashboard"
        currentpage="Expenses"
        activepage="Expenses"
      />
      <Col xl={12}>
        <Card className="custom-card overflow-hidden">
          {/* HEADER */}
          <Card.Header className="pb-2 justify-content-between">
            <Card.Title>
              {activeSheet} - {dyanmicaContent.length}
            </Card.Title>
          </Card.Header>

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
                    dyanmicaContent.map(
                      (
                        row: {
                          [x: string]:
                            | string
                            | number
                            | bigint
                            | boolean
                            | ReactElement<
                                unknown,
                                string | JSXElementConstructor<any>
                              >
                            | Iterable<ReactNode>
                            | ReactPortal
                            | Promise<
                                | string
                                | number
                                | bigint
                                | boolean
                                | ReactPortal
                                | ReactElement<
                                    unknown,
                                    string | JSXElementConstructor<any>
                                  >
                                | Iterable<ReactNode>
                                | null
                                | undefined
                              >
                            | null
                            | undefined;
                        },
                        rowIndex: Key | null | undefined,
                      ) => (
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
                      ),
                    )
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

export default Podcast;
