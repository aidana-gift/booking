import React from 'react';
import { Button} from 'reactstrap';
import './footer.css';
import '../pages/contacts/contacts.css';
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
            <Button className="img-icons-inst"></Button>
            <Button className="img-icons-fb"></Button>
        </div>
    </div>
  );
}

export default Footer;

