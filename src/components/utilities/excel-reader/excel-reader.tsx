import React, { useEffect } from "react";
import * as XLSX from "xlsx";

export const ExcelReader = ({ setExcelData }) => {
  useEffect(() => {
    const fetchExcel = async () => {
      const response = await fetch("/monthly_report.xlsx");
      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        header: ["date", "party", "type", "number", "debit", "credit"],
        range: 7,
      });
      const cleanedData = jsonData.slice(1);
      setExcelData(cleanedData);
    };

    fetchExcel();
  }, [setExcelData]);

  return null;
};
