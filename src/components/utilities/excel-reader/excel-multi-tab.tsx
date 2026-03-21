import { useEffect } from "react";
import * as XLSX from "xlsx";

const ExcelMultiTab = ({ onDataExtracted }) => {
  useEffect(() => {
    const fetchExcel = async () => {
      try {
        console.log("📥 Fetching Excel...");

        const response = await fetch("/VASM Inputs.xlsx");
        const arrayBuffer = await response.arrayBuffer();

        const wb = XLSX.read(arrayBuffer, { type: "array" });

        const allSheetsData = {};

        wb.SheetNames.forEach((name) => {
          const sheet = wb.Sheets[name];
          const jsonData = XLSX.utils.sheet_to_json(sheet, {
            defval: "",
          });
          allSheetsData[name] = jsonData;
        });

        console.log("🚀 Sending to parent", allSheetsData);

        onDataExtracted?.(allSheetsData);
      } catch (err) {
        console.error("❌ Excel error:", err);
      }
    };

    fetchExcel();
  }, [onDataExtracted]);

  return null; // 🔥 IMPORTANT (no UI)
};

export default ExcelMultiTab;