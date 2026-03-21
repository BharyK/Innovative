import { Fragment, useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import ExcelMultiTab from "../../utilities/excel-reader/excel-multi-tab";

const Ecommerce = () => {
  const [excelData, setExcelData] = useState({});
  const [activeSheet, setActiveSheet] = useState("");

  // ✅ Separate states
  const [columnFilters1, setColumnFilters1] = useState({});
  const [columnFilters2, setColumnFilters2] = useState({});

  // ✅ Separate dropdown control
  const [openDropdown, setOpenDropdown] = useState({
    table: null,
    column: null,
  });

  // 🔥 Load Excel
  const handleExcelData = (data) => {
    setExcelData(data);

    const sheets = Object.keys(data);
    const selected = sheets.includes("Revenue")
      ? "Revenue"
      : sheets[1] || sheets[0];

    setActiveSheet(selected);
  };

  const fullData = excelData[activeSheet] || [];

  const allHeaders = fullData.length > 0 ? Object.keys(fullData[0]) : [];

  // 🔍 Find indexes
  const findIndex = (name) =>
    allHeaders.findIndex((h) => h.toLowerCase().includes(name.toLowerCase()));

  const statusIndex = findIndex("status");
  const orderIndex = findIndex("order");

  // 🔥 Split headers
  const headers1 =
    statusIndex !== -1 ? allHeaders.slice(0, statusIndex + 1) : allHeaders;

  const headers2 = orderIndex !== -1 ? allHeaders.slice(orderIndex) : [];

  // 🔥 Split data
  const table1Data = fullData.map((row) => {
    const obj = {};
    headers1.forEach((k) => (obj[k] = row[k]));
    return obj;
  });

  const table2Data = fullData.map((row) => {
    const obj = {};
    headers2.forEach((k) => (obj[k] = row[k]));
    return obj;
  });

  // 🔽 Unique values
  const getUniqueValues = (data, column) => {
    return [...new Set(data.map((row) => row[column]))].filter(Boolean);
  };

  // 🔽 Checkbox handler
  const handleCheckboxChange = (table, column, value) => {
    const setFilter = table === 1 ? setColumnFilters1 : setColumnFilters2;

    setFilter((prev) => {
      const selected = prev[column] || [];

      if (selected.includes(value)) {
        return {
          ...prev,
          [column]: selected.filter((v) => v !== value),
        };
      } else {
        return {
          ...prev,
          [column]: [...selected, value],
        };
      }
    });
  };

  // 🔽 Apply filter
  const applyFilters = (data, filters) => {
    return data.filter((row) =>
      Object.keys(filters).every((col) => {
        const selected = filters[col];
        if (!selected || selected.length === 0) return true;
        return selected.includes(row[col]);
      }),
    );
  };

  const filteredTable1 = applyFilters(table1Data, columnFilters1);
  const filteredTable2 = applyFilters(table2Data, columnFilters2);

  // 🔽 Close dropdown
  useEffect(() => {
    const close = () => setOpenDropdown({ table: null, column: null });
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <Fragment>
      <ExcelMultiTab onDataExtracted={handleExcelData} />
     <div className="d-flex align-items-center justify-content-between my-3 page-header-breadcrumb flex-wrap gap-2">
        <div>
          <p className="fw-medium fs-18 mb-0">Hello there, Jack Miller</p>
          <p className="fs-13 text-muted mb-0">
            Let's make today a productive one!
          </p>
        </div>
        </div>
      <Col xl={12}>
        <Card className="custom-card">
          <Card.Header>
            {activeSheet} ({fullData.length})
          </Card.Header>

          <Card.Body>
            {/* 🔷 TABLE 1 */}
            <h6>Main Details</h6>
            <div className="table-responsive mb-4">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    {headers1.map((h, i) => (
                      <th key={i} style={{ position: "relative" }}>
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdown({
                              table: 1,
                              column: h,
                            });
                          }}
                        >
                          {h} ⏷
                        </div>

                        {openDropdown.table === 1 &&
                          openDropdown.column === h && (
                            <div
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                position: "absolute",
                                top: "100%",
                                left: 0,
                                background: "#fff",
                                border: "1px solid #e5e7eb",
                                borderRadius: "8px",
                                padding: "8px",
                                zIndex: 1000,
                                width: "220px",
                                maxHeight: "260px",
                                overflowY: "auto",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                              }}
                            >
                              {getUniqueValues(fullData, h).map((val, idx) => (
                                <div
                                  key={idx}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "4px 6px",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                  }}
                                  onMouseEnter={(e) =>
                                    (e.currentTarget.style.background =
                                      "#f3f4f6")
                                  }
                                  onMouseLeave={(e) =>
                                    (e.currentTarget.style.background =
                                      "transparent")
                                  }
                                >
                                  <input
                                    type="checkbox"
                                    checked={
                                      columnFilters1[h]?.includes(val) || false
                                    }
                                    onChange={() =>
                                      handleCheckboxChange(1, h, val)
                                    }
                                  />

                                  <span
                                    style={{
                                      fontSize: "13px",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      whiteSpace: "nowrap",
                                      maxWidth: "150px",
                                    }}
                                    title={val}
                                  >
                                    {val}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {filteredTable1.map((row, i) => (
                    <tr key={i}>
                      {headers1.map((key, j) => (
                        <td key={j}>{row[key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
</Card.Body>
        </Card>
          </Col>

            <Col xl={12}>
            <Card className="custom-card">
            <Card.Header>
            Order details
          </Card.Header>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    {headers2.map((h, i) => (
                      <th key={i} style={{ position: "relative" }}>
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdown({
                              table: 2,
                              column: h,
                            });
                          }}
                        >
                          {h} ⏷
                        </div>

                        {openDropdown.table === 2 &&
                          openDropdown.column === h && (
                            <div
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                position: "absolute",
                                background: "#fff",
                                border: "1px solid #ccc",
                                padding: "10px",
                                zIndex: 10,
                                maxHeight: "220px",
                                overflowY: "auto",
                                minWidth: "200px",
                                whiteSpace: "nowrap",
                                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                              }}
                            >
                              {getUniqueValues(fullData, h).map((val, idx) => (
                                <div
                                  key={idx}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    checked={
                                      columnFilters2[h]?.includes(val) || false
                                    }
                                    onChange={() =>
                                      handleCheckboxChange(2, h, val)
                                    }
                                  />
                                  <span
                                    style={{
                                      maxWidth: "150px",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                    }}
                                    title={val}
                                  >
                                    {val}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {filteredTable2.map((row, i) => (
                    <tr key={i}>
                      {headers2.map((key, j) => (
                        <td key={j}>{row[key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </Card>
            </Col>
          
    
    </Fragment>
  );
};

export default Ecommerce;
