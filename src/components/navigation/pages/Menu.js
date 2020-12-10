import React from "react";
import "./Menu.css";
import logo from "../../logo/covid.svg";
import { Link, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";

function Menu() {
  const location = useLocation();
  let navbar = [
    {
      path: "/indonesia",
      menu: "Indonesia",
      style:
        location.pathname === "/indonesia"
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
      <NavItem className="ml-3">
        <Link to={curr.path} style={{ textDecoration: "none" }}>
          <a className="HomeMenu" rel="noopener noreferrer" style={curr.style}>
            {curr.menu}
          </a>
        </Link>
      </NavItem>
    );
  });
  return (
    <Navbar className="nav">
      <NavbarBrand href="/" className="mr-auto p-2">
        <Link to="/">
          <img src={logo} alt="logo" className="img-fluid" width="50%" />
        </Link>
      </NavbarBrand>
      {navBar}
    </Navbar>
  );
}

export default Menu;
