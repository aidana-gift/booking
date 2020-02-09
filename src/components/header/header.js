
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import './header.css'
const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="header" light expand="md">
        <NavbarBrand href="/" className="mr-auto"><h3>Отель Таш-Кумыр</h3></NavbarBrand>

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
                {/* <Link to={"/about"}>{t("aboutProject")}</Link> */}
                <a href="#">Главная</a>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                {/* <Link to={"/about"}>{t("aboutProject")}</Link> */}
                <a href="#">О нас</a>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                {/* <Link to={"/about"}>{t("aboutProject")}</Link> */}
                <a href="#">Услуги</a>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                {/* <Link to={"/about"}>{t("aboutProject")}</Link> */}
                <a href="#">Бронирование</a>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                {/* <Link to={"/about"}>{t("aboutProject")}</Link> */}
                <a href="#">Контакты</a>
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

