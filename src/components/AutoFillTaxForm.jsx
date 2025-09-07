import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AutoFillForm() {
  const defaultData = {
    name: "",
    pan: "",
    annualSalary: 600000,
    otherIncome: 0,
    deductions: 150000,
  };

  const [formData, setFormData] = useState(defaultData);
  const [suggestions, setSuggestions] = useState([]);

  // Auto-fill form on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userTaxData"));
    if (storedData) {
      setFormData(storedData);
      generateSuggestions(storedData);
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Save & generate suggestions
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("userTaxData", JSON.stringify(formData));
    generateSuggestions(formData);
    alert("Form saved successfully ✅");
  };

  // Simple AI heuristic for suggestions
  const generateSuggestions = (data) => {
    const arr = [];
    if (parseInt(data.annualSalary) > 1000000) arr.push("Consider Section 80C investments for tax saving.");
    if (parseInt(data.deductions) < 150000) arr.push("You may be under-claiming deductions like HRA or LTA.");
    if (!data.pan) arr.push("PAN is required to file taxes.");
    if (arr.length === 0) arr.push("All looks good! You can submit the form.");
    setSuggestions(arr);
  };

  const resetForm = () => {
    setFormData(defaultData);
    setSuggestions([]);
    localStorage.removeItem("userTaxData");
  };

  return (
    <div className="container my-5">
      <div className="card shadow-sm p-4">
        <h4 className="card-title mb-3">📝 Auto-Fill Tax Form</h4>

        <form onSubmit={handleSave}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">PAN Number</label>
            <input
              type="text"
              className="form-control"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              placeholder="Enter PAN"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Annual Salary (₹)</label>
            <input
              type="number"
              className="form-control"
              name="annualSalary"
              value={formData.annualSalary}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Other Income (₹)</label>
            <input
              type="number"
              className="form-control"
              name="otherIncome"
              value={formData.otherIncome}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Deductions (₹)</label>
            <input
              type="number"
              className="form-control"
              name="deductions"
              value={formData.deductions}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">Save & Generate Suggestions</button>
            <button type="button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
          </div>
        </form>

        {suggestions.length > 0 && (
          <div className="mt-4">
            <h6>💡 Suggestions:</h6>
            <ul className="list-group">
              {suggestions.map((s, i) => (
                <li key={i} className="list-group-item">{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
