// BankSecurityInfo.jsx
import React from "react";
import { Shield } from "lucide-react";

export default function BankSecurityInfo() {
  return (
    <div className="max-w-md mx-auto p-6 rounded-xl shadow-lg border border-blue-100
      bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50
      animate-gradient-x hover:shadow-2xl transition-shadow duration-500
      relative overflow-hidden"
      style={{ backgroundSize: "200% 200%" }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 opacity-30 blur-3xl animate-gradient-x" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full bg-blue-100 group hover:bg-blue-200 transition-colors duration-300">
            <Shield className="w-6 h-6 text-blue-600 group-hover:scale-110 transform transition-transform duration-300" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Bank-Level Security</h3>
          <span className="ml-auto bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">Trusted</span>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          End-to-end encryption ensures your financial data stays completely protected. Your sensitive data is safe, secure, and private.
        </p>

        {/* Features */}
        <ul className="text-gray-600 text-sm mb-4 space-y-1">
          <li>✅ AES-256 Bit Encryption</li>
          <li>✅ Two-Factor Authentication (2FA)</li>
          <li>✅ Regular Security Audits</li>
        </ul>

        {/* Call to Action */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
