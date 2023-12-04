import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import reactLogo from "../../assets/imgs/logo.png";
import "./publiclayout.css";
import { useNavigate } from "react-router-dom";

export function PublicLayouts() {

  const navigate = useNavigate()

  return (
    <div>
      <div className="Navigation">
        <img src={reactLogo} alt="react logo"  onClick={() => navigate("/")} />
        <div className="Navigation__contaiuner">  
          <Navigation />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
