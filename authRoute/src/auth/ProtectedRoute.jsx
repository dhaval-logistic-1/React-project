import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Save the page they tried to visit so we can redirect after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}