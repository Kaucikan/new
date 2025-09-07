import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const DEFAULT_TAX_SLABS = {
  newRegime: [
    { upTo: 300000, rate: 0 },
    { upTo: 600000, rate: 0.05 },
    { upTo: 900000, rate: 0.10 },
    { upTo: 1200000, rate: 0.15 },
    { upTo: 1500000, rate: 0.20 },
    { upTo: null, rate: 0.30 },
  ],
  oldRegime: [
    { upTo: 250000, rate: 0 },
    { upTo: 500000, rate: 0.05 },
    { upTo: 1000000, rate: 0.20 },
    { upTo: null, rate: 0.30 },
  ],
};

function calculateTax(taxableIncome, slabs) {
  let remaining = taxableIncome;
  let tax = 0;
  let lastLimit = 0;

  for (const slab of slabs) {
    const limit = slab.upTo;
    if (limit == null) {
      tax += remaining * slab.rate;
      break;
    }

    const bracket = Math.max(0, Math.min(remaining, limit - lastLimit));
    tax += bracket * slab.rate;
    remaining -= bracket;
    lastLimit = limit;

    if (remaining <= 0) break;
  }

  const cess = tax * 0.04;
  return { tax: Math.round(tax), cess: Math.round(cess), total: Math.round(tax + cess) };
}

function currency(num) {
  if (num == null || isNaN(num)) return "-";
  return Number(num).toLocaleString("en-IN", { maximumFractionDigits: 2 });
}

export default function SmartTaxCalculator() {
  const [annualSalary, setAnnualSalary] = useState(600000);
  const [otherIncome, setOtherIncome] = useState(0);
  const [deductions, setDeductions] = useState(150000);
  const [regime, setRegime] = useState("newRegime");

  const [taxResult, setTaxResult] = useState(null);

  const handleCalculate = () => {
    const taxableIncome = Math.max(0, annualSalary + Number(otherIncome) - Number(deductions));
    const slabs = DEFAULT_TAX_SLABS[regime];
    const result = calculateTax(taxableIncome, slabs);
    setTaxResult({ ...result, taxableIncome });
  };

  const resetAll = () => {
    setAnnualSalary(600000);
    setOtherIncome(0);
    setDeductions(150000);
    setRegime("newRegime");
    setTaxResult(null);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm p-4 mb-4">
            <h4 className="card-title mb-3">💸 Smart Income Tax Calculator</h4>

            <div className="mb-3">
              <label className="form-label">Annual Salary (₹)</label>
              <input type="number" className="form-control" value={annualSalary} onChange={(e) => setAnnualSalary(Number(e.target.value))} />
            </div>

            <div className="mb-3">
              <label className="form-label">Other Income (₹)</label>
              <input type="number" className="form-control" value={otherIncome} onChange={(e) => setOtherIncome(Number(e.target.value))} />
            </div>

            <div className="mb-3">
              <label className="form-label">Deductions (₹)</label>
              <input type="number" className="form-control" value={deductions} onChange={(e) => setDeductions(Number(e.target.value))} />
            </div>

            <div className="mb-3">
              <label className="form-label me-3">Regime:</label>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="regime" id="newRegime" value="newRegime"
                  checked={regime === "newRegime"} onChange={() => setRegime("newRegime")} />
                <label className="form-check-label" htmlFor="newRegime">New</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="regime" id="oldRegime" value="oldRegime"
                  checked={regime === "oldRegime"} onChange={() => setRegime("oldRegime")} />
                <label className="form-check-label" htmlFor="oldRegime">Old</label>
              </div>
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-primary" onClick={handleCalculate}>Calculate</button>
              <button className="btn btn-secondary" onClick={resetAll}>Reset</button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {taxResult && (
            <div className="card shadow-sm p-4">
              <h5 className="mb-3">💰 Tax Summary</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  Taxable Income
                  <span>₹ {currency(taxResult.taxableIncome)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Tax Before Cess
                  <span>₹ {currency(taxResult.tax)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Cess (4%)
                  <span>₹ {currency(taxResult.cess)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between fw-bold">
                  Total Tax
                  <span>₹ {currency(taxResult.total)}</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
