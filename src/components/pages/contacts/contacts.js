import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ScrollToTopControlller from '../../sroll-to-top/scroll-to-top';
import './contacts.css';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { getData, postData} from '../../../request/request.js';
import { Link } from 'react-router-dom';

const address = "г. Жалал-Абад ул.Ленина д.65";
const phone = "+996 770 591 000";

const Contacts = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const { t } = useTranslation();

        function handleClick(){
        if((name && email && subject && message)){
             alert("Спасибо за обратную связь!");
        }
        else  return alert("Заполните обязательные поля");

        axios.post('https://neobis-booking.herokuapp.com/feedback/', {
       "name": name,
       "email": email,
       "subject": subject,
       "message": message
   })
        .then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
      }
   
    return (
        <div className="container">
            <div className="row contacts">
                <div className="info col-6">
                    <ScrollToTopControlller />
                    <div className="contact-header">{t("contactInfo")}</div>
                    <div className="label">{t("ourAddress")}:   {address}</div>
                    <div className="label">{t("phoneToReach")}:   {phone}</div>
                    <div className="label">{t("ourSocialSites")}:
                        <Link to="https://www.instagram.com/kokartjalalabad1/"><Button className="img-icons-inst"></Button></Link>
                        <Button className="img-icons-fb"></Button>
                    </div>
                </div>
                <div className="feedback col-4">
                    <div className="contact-header">{t("writeToUs")}</div>
                    <Form>
                        <FormGroup>
                            <Label for="examplePassword">{t("name")}</Label>
                            <Input 
                                type="name" 
                                name="name" 
                                id="exampleName" 
                                placeholder={t("name")}
                                value={name}
                                onChange={e => setName(e.target.value)}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleEmail">Email
                    <span className="required">*</span>
                            </Label>
                            <Input 
                                type="email" 
                                name="email" 
                                id="exampleEmail" 
                                placeholder="email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="examplePassword">{t("themeOfMsg")}</Label>
                            <Input 
                                type="name" 
                                name="name" 
                                id="exampleName" 
                                placeholder={t("themeOfMsg")}
                                value={subject}
                                onChange={e => setSubject(e.target.value)}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleText">{t("yourMsg")}</Label>
                            <Input 
                                type="textarea" 
                                name="text" 
                                id="exampleText" 
                                value={message}
                                onChange={e => setMessage(e.target.value)}/>
                        </FormGroup>

                        <Button outline color="info" className="search-btn" type="button" onClick={handleClick}>
                            <span>{t("submit")}</span>
                        </Button>
                    </Form>
                </div>
                <div className="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.054578741603!2d72.22184015910717!3d41.34622197568572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2fb3399e58191a76!2z0LPQvtGB0YLQuNC90LjRhtCwINCi0LDRiC3QmtGD0LzRi9GA!5e0!3m2!1sru!2skg!4v1582645987788!5m2!1sru!2skg" 
                    width={1000} height={450} frameBorder={0} 
                    border= {0}
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacts;