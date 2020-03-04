import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './footer.css';
const Footer = () => {
    const name = "Отель Таш-Кумыр";
    const address = "г. Жалал-Абад, ул. Ленина";
    const number = "+996707591000";

  return (
    <div className="footer" >
        <div className="footer-info">
            <div className="footer-text-item">{name}</div>
            <div className="footer-text-item">{address}</div>
            <div className="footer-text-item">{number}</div>
        </div>
    </div>
  );
}

export default Footer;

