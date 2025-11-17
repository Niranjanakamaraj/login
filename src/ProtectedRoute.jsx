import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./App.jsx";

const DUMMY_EMAIL = "test@gmail.com";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // Only allow access if user exists and email matches env
  if (!user || user.email !== DUMMY_EMAIL) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
