// src/Header.js
import React from "react";
import "./Header.css";
import { FaLock } from "react-icons/fa";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <FaLock className="logo" />
        <h1 className="title">The Secret Keeper</h1>
      </div>
    </header>
  );
};

export default Header;
