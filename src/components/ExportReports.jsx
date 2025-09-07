// ExportReports.jsx
import React from "react";
import { Download } from "lucide-react";

export default function ExportReports() {
  // Get tax data from localStorage (dashboard data)
  const taxData = JSON.parse(localStorage.getItem("taxData")) || null;

  // Function to download JSON
  const downloadJSON = () => {
    if (!taxData) return alert("No data available to export!");
    const blob = new Blob([JSON.stringify(taxData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tax_report_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Function to download CSV (Excel compatible)
  const downloadCSV = () => {
    if (!taxData) return alert("No data available to export!");
    const headers = Object.keys(taxData).join(",");
    const values = Object.values(taxData).join(",");
    const csvContent = `${headers}\n${values}`;
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tax_report_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Function to preview data in dashboard
  const viewDashboard = () => {
    if (!taxData) return alert("No data available to view!");
    // Navigate to dashboard or show modal
    alert("Navigate to dashboard to view the report"); 
    // You can replace alert with a router navigation
    // e.g., navigate("/dashboard") if using react-router
  };

  return (
    <div className="card shadow-lg mx-auto my-4" style={{ maxWidth: "400px" }}>
      <div className="card-header d-flex align-items-center bg-light">
        <Download className="me-2" />
        <h5 className="mb-0">Export Reports</h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          Download detailed reports in <strong>JSON</strong> or <strong>Excel</strong> formats.
        </p>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" onClick={downloadJSON}>
            Download JSON
          </button>
          <button className="btn btn-success" onClick={downloadCSV}>
            Download Excel (CSV)
          </button>
          <button className="btn btn-outline-secondary" onClick={viewDashboard}>
            View in Dashboard
          </button>
        </div>
      </div>
      <div className="card-footer text-muted text-center">
        Reports are generated from your latest tax data.
      </div>
    </div>
  );
}
