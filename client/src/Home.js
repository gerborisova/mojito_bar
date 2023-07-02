import logo from "./assets/mojito.gif";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Home.scss";

function Home() {
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate("/profile");
  };
  return (
    <div className="App">
      <header className="header">
        <h1 className="app-title">The Mojito Bar</h1>
        <img className="logo" src={logo} alt="logo" />
        <button className="connect-btn" onClick={() => navigateToProfile()}>
          CONNECT WALLET
        </button>
      </header>
    </div>
  );
}

export default Home;
