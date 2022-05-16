import Navigation from "./Navigation";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
} from "reactstrap";

const Header = () => {
  return (
    <header className="header">
      <Navbar color="light" expand="md" full light>
        <NavbarBrand href="/">
          <NavLink tag={RRNavLink} to="/">
            Kilian De Bock
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Navigation />
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
