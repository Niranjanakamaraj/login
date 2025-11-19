import React, { useEffect } from "react";
import { useAuth } from "./App.jsx";
import { useNavigate } from "react-router-dom";

export default function Accounts() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Google Tag script injection
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-01CS90BQJ5";

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-01CS90BQJ5');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

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
