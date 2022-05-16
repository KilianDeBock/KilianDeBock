import { NavLink as RRNavLink } from "react-router-dom";

import { Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    <Nav className="me-auto" navbar>
      <NavItem>
        <NavLink tag={RRNavLink} to="/">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/about">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to="/contact">
          Contact
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Navigation;
