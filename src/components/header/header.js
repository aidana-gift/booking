
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './header.css'

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const { t, i18n} = useTranslation();
  const [lang,setLang] = useState(localStorage.getItem('language'));
  const toggleNavbar = () => setCollapsed(!collapsed);

  const handleChange = (language) => {
    localStorage.setItem('language',language);
    setLang(language);
    window.location.reload(true);
    i18n.changeLanguage(language);
  };

  return (
    <div className="header" >
      <Navbar light expand="md">
        <NavbarBrand tag={'div'} className  ="mr-auto span"  >
          <Link to={"/"}> 
              <h3 className="hotel-name">Отель Таш-Кумыр</h3> 
          </Link>
        </NavbarBrand>

        <div className={"d-block d-md-none"}>
        <Button className="kg btn"
            // color={"faded"}1
            // className={`header-button shadow-none ${
            //   lang === "ru" ? "" : "text-muted"
            // }`}
                onClick={() => handleChange("kg")}
          >
          </Button>

          <Button className="rus btn" 
                  className = {`${
              lang === "ru" ? "" : "text-muted"
            }`}
                  onClick={() => handleChange("ru") }>
          </Button>

          <Button className="en btn"
                  onClick={() => handleChange("en")}>
          </Button>
        </div>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className={"w-100 d-flex justify-content-center"}>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to={"/"}>Главная</Link>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to={"/about"}>О нас</Link>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to={"/results"}>Бронирование</Link>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to={"/contacts"}>Контакты</Link>
              </NavLink>
            </NavItem>
            <NavItem className="item">
              <NavLink tag={"p"} className={"mb-0"}>
                <Link to={"/admin"}>Админ</Link>
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

