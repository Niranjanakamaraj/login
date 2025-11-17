import React from "react";
import { useAuth } from "./App.jsx";
import { useNavigate } from "react-router-dom";

export default function Accounts() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ marginBottom: "20px" }}>Welcome, {user?.name}</h1>
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "1px solid #333",
          backgroundColor: "#f0f0f0"
        }}
      >
        Logout
      </button>
    </div>
  );
}