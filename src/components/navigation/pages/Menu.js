import React, { useState } from "react";
import "./Menu.css";
import logo from "../../logo/covid.svg";
import { NavLink as Link, useLocation } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavLink,
  NavbarBrand,
  Collapse,
  NavbarToggler,
} from "reactstrap";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();
  let navbar = [
    {
      key: "country",
      path: "/country",
      menu: "Negara",
      style:
        location.pathname === "/country"
          ? { color: "#eee" }
          : { color: "#81b3d2" },
    },
    {
      key: "province",
      path: "/province",
      menu: "Provinsi",
      style:
        location.pathname === "/province"
          ? { color: "#eee" }
          : { color: "#81b3d2" },
    },
    {
      key: "zona",
      path: "/zona",
      menu: "Zona",
      style:
        location.pathname === "/zona"
          ? { color: "#eee" }
          : { color: "#81b3d2" },
    },
    {
      key: "about",
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
      <NavLink
        key={curr.key}
        className="ml-5 p-2 mb-2 HomeMenu"
        to={curr.path}
        tag={Link}
        style={curr.style}
      >
        {curr.menu}
      </NavLink>
    );
  });
  return (
    <Navbar className="nav" dark expand="md">
      <NavbarBrand href="/" to="/" tag={Link} className="p-2">
        <img src={logo} alt="logo" className="img-fluid" width="50%" />
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
