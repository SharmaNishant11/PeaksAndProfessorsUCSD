import { ReactElement } from "react";
import logo from '../assets/logo.png';

const Header = (): ReactElement => {
  return (
    <header style={{ padding: "16px", borderBottom: "1px solid #ffffff"}}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* logo */}
        <a href="/">
          <img 
          src={logo}
          alt="Logo"
          style={{ height: "160px" }}
          />
        </a>

        {/* centering */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "20%",
            display: "flex",
            gap: "5rem",
          }}
        >
          <a href="/spotlight" style={{ textDecoration: "none", color: "black", fontSize: "25px", fontFamily: "Verdana, sans-serif" }}>Spotlight</a>
          <a href="/History" style={{ textDecoration: "none", color: "black", fontSize: "25px", fontFamily: "Verdana, sans-serif" }}>History</a>
          <a href="/" style={{ textDecoration: "none", color: "black", fontSize: "25px", fontFamily: "Verdana, sans-serif" }}>Home</a>
          <a href="/contact" style={{ textDecoration: "none", color: "black", fontSize: "25px", fontFamily: "Verdana, sans-serif" }}>Contact</a>
          <a href="/faq" style={{ textDecoration: "none", color: "black", fontSize: "25px", fontFamily: "Verdana, sans-serif" }}>FAQ</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;