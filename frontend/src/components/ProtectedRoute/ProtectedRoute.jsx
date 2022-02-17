import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

export default function ProtectedRoute({ children }) {
  const user = useUser();
  const location = useLocation();

  if (user == null) return <Navigate to="/" state={{ from: location }} />;
  return children;
}
