import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./App.jsx";

const DUMMY_EMAIL = "test@gmail.com";
const DUMMY_PASSWORD = "123456";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === DUMMY_EMAIL && password.trim() === DUMMY_PASSWORD) {
      setUser({ name, email });
      navigate("/accounts");
    } else {
      setError("Invalid credentials!");
    }
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
      <h1 style={{ marginBottom: "20px" }}>Login</h1>
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        gap: "15px"
      }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#333",
          color: "#fff",
          cursor: "pointer"
        }}>
          Submit
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}
    </div>
  );
}
