import React, { useEffect } from "react";
import * as XLSX from "xlsx";

export const ExcelReaderDynamic = ({ setExcelData }) => {
  useEffect(() => {
    const fetchExcel = async () => {
      const response = await fetch("/monthly_report.xlsx");
      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // ✅ Get header row dynamically
      const headerRow = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        range: 7,
      })[0];

      const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        header: headerRow, // dynamic headers
        range: 7,
        raw: false
      });

      const cleanedData = jsonData.slice(1);

      setExcelData(cleanedData);
    };

    fetchExcel();
  }, [setExcelData]);

  return null;
};