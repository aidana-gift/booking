import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PhoneInput from 'react-phone-number-input';
import ScrollToTopControlller from '../../sroll-to-top/scroll-to-top';
import './contacts.css';

const address = "г. Жалал-Абад ул.Ленина д.65";
const phone = "+996 770 591 000";

const Contacts = () => {
    const [value, setValue] = useState()
    return (
        <div className="container">
            <div className="row contacts">
                <div className="info col-6">
                    <ScrollToTopControlller />
                    <div className="contact-header">Контактная информация</div>
                    <div className="label">Наш адрес:   {address}</div>
                    <div className="label">Телефон для связи:   {phone}</div>
                    <div className="label">Мы в соцсетях:
                        <Button className="img-icons-inst"></Button>
                        <Button className="img-icons-fb"></Button>
                    </div>

                </div>
                <div className="feedback col-4">
                    <div className="contact-header">Напишите нам</div>
                    <Form>
                        <FormGroup>
                            <Label for="examplePassword">Тема</Label>
                            <Input type="password" name="name" id="exampleName" placeholder="Тема" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleEmail">Email
                    <span className="required">*</span>
                            </Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="examplePassword" >Номер телефона</Label>
                            <PhoneInput
                                placeholder="Номер телефона"
                                value={value}
                                onChange={setValue}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleText">Ваше сообщение</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>

                        <Button>Отправить</Button>
                    </Form>
                </div>
                <div className="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.054578741603!2d72.22184015910717!3d41.34622197568572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2fb3399e58191a76!2z0LPQvtGB0YLQuNC90LjRhtCwINCi0LDRiC3QmtGD0LzRi9GA!5e0!3m2!1sru!2skg!4v1582645987788!5m2!1sru!2skg" 
                    width={1000} height={450} frameborder={0} 
                    border= {0}
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacts;