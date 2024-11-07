"use client"
import "../style/header.css";
import React from "react";
import { useState } from "react";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="navbar">
      {/* Desktop Menu */}
      <div className="desktop-menu">
        <div className="logo">Portfolio</div>
        <div className="menu-items">
          <a href='#home' className="menu-link">Home</a>

          <a href='#about' className="menu-link">About</a>

          <a href='#contact' className="menu-link">Contact</a>
        </div>
        <button className="hire-button">Hire Me!</button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="mobile-menu">
        <div className="logo">Portfolio</div>
        <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
          {isOpen ? (
            <span className="icon">✖</span>
          ) : (
            <span className="icon">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-dropdown">
          <a href="#home" className="mobile-link">Home</a>
          <a href="#about" className="mobile-link">About</a>
          <a href="#contact" className="mobile-link">Contact</a>
        </div>
      )}
    </nav>
    )
};