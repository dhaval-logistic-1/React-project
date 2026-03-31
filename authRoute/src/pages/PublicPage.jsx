import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function PublicPage() {
  const { user } = useAuth();

  return (
    <div className="page">
      <div className="card">
        <h1 className="page-title">Welcome</h1>
        <p className="page-sub">This page is public — no login needed.</p>

        {user ? (
          <Link to="/dashboard" className="btn">
            Go to Dashboard →
          </Link>
        ) : (
          <Link to="/login" className="btn">
            Sign in →
          </Link>
        )}
      </div>
    </div>
  );
}
