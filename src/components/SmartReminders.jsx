// SmartReminders.jsx
import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";

export default function SmartReminders() {
  const [notifications, setNotifications] = useState([]);

  // Example deadlines (date strings)
  const deadlines = [
    { title: "Income Tax Filing", date: "2025-07-31" },
    { title: "GST Return Filing", date: "2025-08-20" },
    { title: "Quarterly TDS Payment", date: "2025-09-07" },
  ];

  useEffect(() => {
    const checkDeadlines = () => {
      const today = new Date();
      const alerts = deadlines.filter((d) => {
        const deadlineDate = new Date(d.date);
        const diff = Math.floor((deadlineDate - today) / (1000 * 60 * 60 * 24));
        return diff >= 0 && diff <= 7; // Notify 7 days before
      });
      setNotifications(alerts);

      // Optional: Browser notification
      alerts.forEach((alert) => {
        if (Notification.permission === "granted") {
          new Notification(`Reminder: ${alert.title} is coming soon!`);
        }
      });
    };

    // Ask for notification permission
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    checkDeadlines(); // initial check
    const interval = setInterval(checkDeadlines, 60 * 60 * 1000); // check every hour
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card shadow-lg mx-auto my-4" style={{ maxWidth: "400px" }}>
      <div className="card-header d-flex align-items-center bg-light">
        <Bell className="me-2" />
        <h5 className="mb-0">Smart Reminders</h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          Never miss filing deadlines with intelligent notifications.
        </p>

        {notifications.length === 0 ? (
          <div className="alert alert-success text-center">No upcoming deadlines!</div>
        ) : (
          <ul className="list-group">
            {notifications.map((n, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                {n.title}
                <span className="badge bg-danger rounded-pill">
                  {Math.floor((new Date(n.date) - new Date()) / (1000 * 60 * 60 * 24))} days left
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="card-footer text-muted text-center">
        Updates every hour. Enable browser notifications for real-time alerts.
      </div>
    </div>
  );
}
