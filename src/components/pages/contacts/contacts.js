import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './contacts.css';

const Contacts = () => {
    return (
        <div className="container user-form">
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

            <Button>Submit</Button>
        </Form>
        </div>
    )
}

export default Contacts;