import React, { useState } from "react";
import "./Menu.css";
import logo from "../../logo/covid.svg";
import { Link, useLocation } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Collapse,
  NavbarToggler,
} from "reactstrap";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();
  let navbar = [
    {
      path: "/country",
      menu: "Negara",
      style:
        location.pathname === "/country"
          ? { color: "#eee" }
          : { color: "#81b3d2" },
    },
    {
      path: "/province",
      menu: "Provinsi",
      style:
        location.pathname === "/province"
          ? { color: "#eee" }
          : { color: "#81b3d2" },
    },
    {
      path: "/about",
      menu: "Tentang Kami",
      style:
        location.pathname === "/about"
          ? { color: "#eee" }
          : { color: "#81b3d2" },
    },
  ];
  const navBar = navbar.map((curr) => {
    return (
      <NavItem className="ml-5">
        <Link to={curr.path} style={{ textDecoration: "none" }}>
          <a className="HomeMenu" rel="noopener noreferrer" style={curr.style}>
            {curr.menu}
          </a>
        </Link>
      </NavItem>
    );
  });
  return (
    <Navbar className="nav" dark expand="md">
      <NavbarBrand href="/" className="p-2">
        <Link to="/">
          <img src={logo} alt="logo" className="img-fluid" width="50%" />
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {navBar}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Menu;
