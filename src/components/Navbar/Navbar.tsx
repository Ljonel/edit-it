import React from "react";
import { Nav, Logo, Links } from "./NavbarStyles";
import { RiArrowDownSLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <Nav>
      <div className="wave" style={{ height: "150px", overflow: " hidden" }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
          <path d="M-87.47,156.42 C144.47,168.26 251.69,-65.62 549.66,100.17 L579.57,-39.95 L0.00,0.00 Z" style={{ stroke: "none", fill: "#b9bdfe" }}></path>
        </svg>
      </div>
      <Logo>
        <p>EditIT</p>
      </Logo>
      <Links>
        <ul>
          <li style={{ color: "#878dff" }}>Oferty</li>
          <li>Profile użytkowników</li>
          <li>
            Zaloguj się
            <RiArrowDownSLine />
          </li>
        </ul>
      </Links>
    </Nav>
  );
};

export default Navbar;
