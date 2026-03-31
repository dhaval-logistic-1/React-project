import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="page">
      <div className="card">
        <div className="avatar">{user.name[0].toUpperCase()}</div>
        <h1 className="page-title">Dashboard</h1>
        <p className="welcome">Welcome back, <strong>{user.name}</strong></p>

        <div className="stats-row">
          {[
            { label: "Orders",    value: "42"    },
            { label: "Revenue",   value: "$8.4k" },
            { label: "Customers", value: "198"   },
          ].map(({ label, value }) => (
            <div key={label} className="stat">
              <span className="stat-num">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="btn-row">
          <Link to="/settings" className="btn">Settings →</Link>
          <button className="btn-outline" onClick={logout}>Sign out</button>
        </div>
      </div>
    </div>
  );
}