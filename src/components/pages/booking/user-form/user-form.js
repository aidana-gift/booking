import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import './user-form.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import * as axios from 'axios';

// axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//     console.log(response);
// })
const FormUser = (props) => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [number, setNumber] = useState()
    const [email, setEmail] = useState()
    const [time, setTime] = useState()
    const [special, setSpecial] = useState()

    function handleClick(){
        if((firstName && lastName && number && email)){
             alert("Спасибо за бронирование!");
        }
        else  return alert("Заполните обязательные поля");
      }

    return (
        <Form>
            <Label className="form-header">Данные гостя</Label>
            <FormGroup>
                <Label for="examplePassword">Имя
                    <span className="required">*</span>
                </Label>

                <Input 
                    type="name" 
                    name="name" 
                    id="exampleName" 
                    placeholder="Имя" 
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label for="examplePassword">Фамилия
                    <span className="required">*</span>
                </Label>
                <Input 
                    type="name" 
                    name="name" 
                    id="exampleName" 
                    placeholder="Фамилия"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)} 
                    required
                />
            </FormGroup>

            <FormGroup>
                <Label for="examplePassword" >Номер телефона
                    <span className="required">*</span>
                </Label>
                <PhoneInput
                    placeholder="Номер телефона"
                    value={number}
                    onChange={setNumber}
                    required
                         />
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
                    onChange={e => setEmail(e.target.value)}
                    required
                    />
            </FormGroup>
            <Label className="form-header">Дополнительная информация</Label>
            <FormGroup>
                <Label for="exampleSelect">Примерное время прибытия</Label>
                <Input 
                    type="select" 
                    name="select" 
                    id="exampleSelect" 
                    placeholder="Не знаю"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                >
                    <option>Не знаю</option>
                    <option>00:00</option>
                    <option>01:00</option>
                    <option>02:00</option>
                    <option>03:00</option>
                    <option>04:00</option>
                    <option>05:00</option>
                    <option>06:00</option>
                    <option>07:00</option>
                    <option>08:00</option>
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                    <option>23:00</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="exampleText">Special requests</Label>
                <Input 
                    type="textarea" 
                    name="text" 
                    id="exampleText"
                    value={special}
                    onChange={e => setSpecial(e.target.value)}
                 />
            </FormGroup>

            <Button outline color="info" className="search-btn" type="button" onClick={handleClick}>
              <span>Отправить</span>
            </Button>

        </Form>
    );
}

export default FormUser;