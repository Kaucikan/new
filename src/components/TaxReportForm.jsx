import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function TaxReportForm() {
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");
  const [expenditure, setExpenditure] = useState("");
  const [age, setAge] = useState("");
  const [pan, setPan] = useState("");
  const [section80C, setSection80C] = useState("");
  const [section80D, setSection80D] = useState("");
  const [others, setOthers] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      income: Number(income),
      expenditure: Number(expenditure),
      age: Number(age),
      pan,
      deductions: {
        section80C: Number(section80C),
        section80D: Number(section80D),
        others: Number(others),
      },
    };

    localStorage.setItem("taxData", JSON.stringify(userData));

    navigate("/dashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">📝 Tax Report Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Income</label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="form-control"
              placeholder="Enter your income"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Expenditure</label>
            <input
              type="number"
              value={expenditure}
              onChange={(e) => setExpenditure(e.target.value)}
              className="form-control"
              placeholder="Enter your expenditure"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-control"
              placeholder="Enter your age"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">PAN Number</label>
            <input
              type="text"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className="form-control"
              placeholder="Enter PAN Number"
              required
            />
          </div>

          <h5 className="mt-3">Deductions</h5>
          <div className="mb-3">
            <label className="form-label">Section 80C</label>
            <input
              type="number"
              value={section80C}
              onChange={(e) => setSection80C(e.target.value)}
              className="form-control"
              placeholder="Enter amount"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Section 80D</label>
            <input
              type="number"
              value={section80D}
              onChange={(e) => setSection80D(e.target.value)}
              className="form-control"
              placeholder="Enter amount"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Other Deductions</label>
            <input
              type="number"
              value={others}
              onChange={(e) => setOthers(e.target.value)}
              className="form-control"
              placeholder="Enter amount"
            />
          </div>

          <div className="d-grid mt-3">
            <button type="submit" className="btn btn-success">✅ Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaxReportForm;
