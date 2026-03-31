import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function SettingsPage() {
  const { user, logout } = useAuth();

  return (
    <div className="page">
      <div className="card" style={{ alignItems: "flex-start" }}>
        <h1 className="page-title">Settings</h1>

        <div className="settings-section">
          <p className="settings-section-label">Account</p>
          <div className="settings-row">
            <span className="settings-row-label">Email</span>
            <span className="settings-row-value">{user.email}</span>
          </div>
          <div className="settings-row">
            <span className="settings-row-label">Name</span>
            <span className="settings-row-value">{user.name}</span>
          </div>
        </div>

        <div className="btn-row">
          <Link to="/dashboard" className="btn">
            ← Dashboard
          </Link>
          <button className="btn-outline" onClick={logout}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
