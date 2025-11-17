import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./App.jsx";

const DUMMY_EMAIL = "test@gmail.com";
const DUMMY_PASSWORD = "123456";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  const dummyEmail = process.env.REACT_APP_DUMMY_EMAIL;

  // Only allow access if user exists and email matches env
  if (!user || user.email !== dummyEmail) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
