import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navigation.css";
import { Button } from "antd";

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="Button-container">
      <Button type={location.pathname.includes("posts") ? "primary" : "dashed"} onClick={() => navigate("/posts")}>Posts</Button>
      <Button type={location.pathname.includes("products") ? "primary" : "dashed"} onClick={() => navigate("/products")}>Products</Button>
    </div>
  );
}
