// AboutWebsite.jsx
import React from "react";
import { Info, Users, Shield } from "lucide-react";

export default function AboutWebsite() {
  return (
    <section className="py-5" style={{ background: "linear-gradient(to bottom, #f0f5ff, #fff0f6)" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            About <span style={{ background: "linear-gradient(to right, #7f00ff, #e100ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Our Platform</span>
          </h2>
          <p className="text-secondary fs-5">
            Your smart tax dashboard that helps you calculate taxes, manage filings, and stay financially secure with AI-powered insights.
          </p>
        </div>

        {/* Features */}
        <div className="row g-4">
          {/* Feature 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 text-center" style={{ background: "linear-gradient(to right, #cfe0ff, #e6f0ff)" }}>
              <div className="card-body">
                <div className="mb-3">
                  <Info className="text-primary" size={40} />
                </div>
                <h5 className="card-title fw-bold">Smart Calculations</h5>
                <p className="card-text text-secondary">
                  Easily compute your income tax, GST, and deductions with a smart, interactive calculator.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 text-center" style={{ background: "linear-gradient(to right, #d4ffe6, #e6fff2)" }}>
              <div className="card-body">
                <div className="mb-3">
                  <Users className="text-success" size={40} />
                </div>
                <h5 className="card-title fw-bold">AI Tax Advisor</h5>
                <p className="card-text text-secondary">
                  Get personalized recommendations for tax savings and planning, powered by intelligent heuristics.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 text-center" style={{ background: "linear-gradient(to right, #ffe0e6, #fff0f2)" }}>
              <div className="card-body">
                <div className="mb-3">
                  <Shield className="text-danger" size={40} />
                </div>
                <h5 className="card-title fw-bold">Secure & Reliable</h5>
                <p className="card-text text-secondary">
                  Bank-level encryption ensures that your sensitive financial data remains safe and private.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-5 text-center">
          <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "800px" }}>
            Our platform combines <span className="fw-bold text-primary">simplicity</span>, 
            <span className="fw-bold text-success"> security</span>, and 
            <span className="fw-bold text-danger"> AI intelligence</span> to help you manage your taxes efficiently. Stay on top of deadlines, maximize savings, and make informed financial decisions with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
