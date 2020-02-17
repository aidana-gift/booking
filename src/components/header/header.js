
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import './header.css'
const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="header" light expand="md">
        <NavbarBrand className="mr-auto">
          <Link to="/"> 
              <h3>Отель Таш-Кумыр</h3> 
          </Link>
        </NavbarBrand>

        <div className={"d-block d-md-none"}>
        <Button className="kg btn"
            // color={"faded"}
            // className={`header-button shadow-none ${
            //   lang === "ru" ? "" : "text-muted"
            // }`}
            // onClick={() => handleChange("ru")}
          >
          </Button>
          <Button className="rus btn">
          </Button>
          <Button className="en btn">
          </Button>
        </div>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className={"w-100 d-flex justify-content-center"}>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to="main">Главная</Link>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to="/about">О нас</Link>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to={"/services"}>Услуги</Link>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to={"/booking"}>Бронирование</Link>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to={"/contacts"}>Контакты</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        
        <div className={"d-none d-md-block"}>
        <Button className="kg btn"
            // color={"faded"}
            // className={`header-button shadow-none ${
            //   lang === "ru" ? "" : "text-muted"
            // }`}
            // onClick={() => handleChange("ru")}
          >
          </Button>
          <Button className="rus btn">
          </Button>
          <Button className="en btn">
          </Button>
        </div>

      </Navbar>
    </div>
  );
}

export default Header;

