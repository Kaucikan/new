import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
);

function Dashboard() {
  const storedData = JSON.parse(localStorage.getItem("taxData")) || {};
  const [name, setName] = useState(storedData.name || "");
  const [income, setIncome] = useState(Number(storedData.income) || 0);
  const [expenditure, setExpenditure] = useState(Number(storedData.expenditure) || 0);
  const [age, setAge] = useState(Number(storedData.age) || 0);
  const [pan, setPan] = useState(storedData.pan || "");
  const [deductions, setDeductions] = useState(storedData.deductions || { section80C: 0, section80D: 0, others: 0 });

  const [taxableIncome, setTaxableIncome] = useState(0);
  const [tax, setTax] = useState(0);
  const [gst, setGst] = useState(0);

  useEffect(() => {
    const inc = Number(income);
    const exp = Number(expenditure);
    const totalDeductions = 
      Number(deductions.section80C) + 
      Number(deductions.section80D) + 
      Number(deductions.others);

    const taxable = Math.max(0, inc - totalDeductions);
    setTaxableIncome(taxable);

    let calculatedTax = 0;
    if (taxable <= 250000) calculatedTax = 0;
    else if (taxable <= 500000) calculatedTax = (taxable - 250000) * 0.05;
    else if (taxable <= 1000000) calculatedTax = 12500 + (taxable - 500000) * 0.2;
    else calculatedTax = 112500 + (taxable - 1000000) * 0.3;

    setTax(calculatedTax);
    setGst(exp * 0.18);
  }, [income, expenditure, deductions]);

  const handleDownload = () => {
    const data = `
📄 Tax Report
--------------------
Name: ${name}
Income: ₹${income}
Expenditure: ₹${expenditure}
Age: ${age}
PAN: ${pan}
Deductions:
  Section 80C: ₹${deductions.section80C}
  Section 80D: ₹${deductions.section80D}
  Others: ₹${deductions.others}

Taxable Income: ₹${taxableIncome.toFixed(2)}
Income Tax: ₹${tax.toFixed(2)}
GST on Expenditure: ₹${gst.toFixed(2)}
`;
    const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "TaxReport.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const barData = {
    labels: ["Income", "Expenditure", "Taxable Income", "Income Tax", "GST"],
    datasets: [
      {
        label: "Financial Breakdown",
        data: [income, expenditure, taxableIncome, tax, gst],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#F44336", "#9C27B0"],
      },
    ],
  };

  const pieData = {
    labels: ["Income", "Expenditure", "Income Tax", "GST"],
    datasets: [
      {
        data: [income, expenditure, tax, gst],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336", "#2196F3"],
      },
    ],
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">📊 Tax Report Dashboard</h2>

        <div className="mb-4">
          <h5>👤 User Details:</h5>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>PAN:</strong> {pan}</p>
          <p><strong>Deductions:</strong> 80C: ₹{deductions.section80C}, 80D: ₹{deductions.section80D}, Others: ₹{deductions.others}</p>
        </div>

        <div className="mb-4">
          <h5>💰 Calculated Details:</h5>
          <p><strong>Taxable Income:</strong> ₹{taxableIncome.toFixed(2)}</p>
          <p><strong>Income Tax:</strong> ₹{tax.toFixed(2)}</p>
          <p><strong>GST on Expenditure:</strong> ₹{gst.toFixed(2)}</p>
        </div>

        <div className="row mb-3">
          <div className="col-md-6 d-flex flex-column align-items-center">
            <h6 className="text-center">Bar Chart</h6>
            <div style={{ width: "250px", height: "250px" }}>
              <Bar data={barData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center">
            <h6 className="text-center">Pie Chart</h6>
            <div style={{ width: "250px", height: "250px" }}>
              <Pie data={pieData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        <div className="d-grid">
          <button className="btn btn-primary" onClick={handleDownload}>
            💾 Download Tax Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
