// AITaxAdvisorBootstrap.jsx
import React, { useState } from "react";
import { Brain } from "lucide-react";

export default function AITaxAdvisorBootstrap() {
  const [showTips, setShowTips] = useState(false);

  const tips = [
    "💡 Invest in tax-saving instruments under Section 80C (ELSS, PPF, NSC).",
    "💡 Claim HRA exemptions if you live in a rented house.",
    "💡 Utilize NPS for additional tax benefits under Section 80CCD(1B).",
    "💡 Keep receipts of medical insurance for deductions under 80D.",
    "💡 Review eligible business expenses if self-employed."
  ];

  return (
    <div className="card shadow-lg border-primary mx-auto my-4" style={{ maxWidth: "400px" }}>
      {/* Card Header */}
      <div className="card-header d-flex align-items-center bg-gradient rounded-top" style={{ background: "linear-gradient(90deg, #EDE7F6, #D1C4E9)" }}>
        <div className="d-flex align-items-center">
          <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: "36px", height: "36px" }}>
            <Brain className="w-5 h-5" />
          </div>
          <h5 className="mb-0">AI Tax Advisor</h5>
        </div>
        <span className="badge bg-primary ms-auto">Smart</span>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <p className="card-text">
          Get personalized tax-saving tips and planning recommendations powered by AI insights.
        </p>

        {showTips && (
          <ul className="list-group list-group-flush mb-3">
            {tips.map((tip, index) => (
              <li key={index} className="list-group-item">
                {tip}
              </li>
            ))}
          </ul>
        )}

        {/* Toggle Button */}
        <button
          className="btn btn-primary w-100"
          onClick={() => setShowTips(!showTips)}
        >
          {showTips ? "Hide Tips" : "Show AI Tips"}
        </button>
      </div>

      {/* Card Footer */}
      <div className="card-footer text-muted text-center">
        Updating soon...
      </div>
    </div>
  );
}
