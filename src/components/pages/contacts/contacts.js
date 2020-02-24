import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './contacts.css';
const address = "г. Жалал-Абад ул.Ленина д.65";
const phone = "+996 770 591 000";

const Contacts = () => {
    return (
        <div className="container">
            <div className="row contacts">
            <div className="info col-6">
                <div className="contact-header">Контактная информация</div>
                <div className="label">Наш адрес: {address}</div>
                <div className="label">Номер телефона: {phone}</div>
                <div className="label">Социальные сети: {phone}</div>
            </div>
            <div className="feedback col-4">
            <div className="contact-header">Напишите нам</div>
                <Form>
                    <FormGroup>
                        <Label for="examplePassword">Имя
                    <span className="required">*</span>
                        </Label>
                        <Input type="password" name="name" id="exampleName" placeholder="Имя" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Email
                    <span className="required">*</span>
                        </Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleText">Ваше сообщение</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>

                    <Button>Отправить</Button>
                </Form>
            </div>
            </div>
        </div>
    )
}

export default Contacts;