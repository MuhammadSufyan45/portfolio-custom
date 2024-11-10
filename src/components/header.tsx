"use client"
import Link from "next/link";
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
          <Link href='/hero' className="menu-link">Home</Link>

          <Link href='/about' className="menu-link">About</Link>

          <Link href='/contact' className="menu-link">Contact</Link>
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
          <Link href="/hero" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
    )
};