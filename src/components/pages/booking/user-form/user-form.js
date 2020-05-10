import React, { useState, useEffect } from 'react';
import dateformat from 'dateformat';
import { withRouter } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import './user-form.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import * as axios from 'axios';

// axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//     console.log(response);
// })
const FormUser = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo] = useState("")
    const [roomName, setRoomName] = useState("")
    const [special, setSpecial] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const { t } = useTranslation();

    useEffect(()=>{
        const date_from = dateformat(props.info.date_from, 'yyyy-mm-dd')
        const date_to = dateformat(props.info.date_to, 'yyyy-mm-dd')
        setDateFrom(date_from);
        setDateTo(date_to);
        setRoomName(props.info.room.name);
        console.log(props.info.date_from);
      }, []);
    
      //console.log(dateFrom, dateTo, roomName, firstName, lastName, email, number)

    async function handleClick(){
        if((firstName && lastName && number && email)){
                 await axios.post('https://neobis-booking.herokuapp.com/bookings/', {

                    "date_from": dateFrom,
                    "date_to": dateTo,
                    "comment": special,
                    "room": roomName,
                    "has_child": isChecked,
                    "clientName": firstName,
                    "clientSurname": lastName,
                    "clientEmail": email,
                    "clientPhone": number
             },
             {
                 header:{"Content-Type": 'application/json'}
                 
             })
                    .then((response) => {
                    console.log(response);
                    alert("Спасибо за бронирование!")
                }, (error) => {
                    console.log(error);
                    alert("К сожалению, на эти даты выбранный номер занят")
                });
                    }
                    else  return alert("Заполните обязательные поля");
                }

    return (
        <Form>
            <Label className="form-header">{t("guestDetails")}</Label>
            <FormGroup>
                <Label for="examplePassword">{t("name")}
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
                    className="input"
                />
            </FormGroup>

            <FormGroup>
                <Label for="examplePassword">{t("surname")}
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
                    className="input"
                />
            </FormGroup>

            <FormGroup>
                <Label for="examplePassword" >{t("phone")}
                    <span className="required">*</span>
                </Label>
                <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0]{1}[0-9]{3}[0-9]{3}[0-9]{3}"
                    placeholder="0xxxxxxxxx"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    required
                    className="input"
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
                    className="input"
                    />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" onChange={e => setIsChecked(!isChecked)}/>
                        {t("hasChild")}
                </Label>
            </FormGroup>
            <Label className="form-header">{t("extraInfo")}</Label>

            <FormGroup>
                <Label for="exampleText">{t("specialReq")}</Label>
                <Input 
                    type="textarea" 
                    name="text" 
                    id="exampleText"
                    value={special}
                    onChange={e => setSpecial(e.target.value)}
                    className="input"
                 />
            </FormGroup>

            <Button outline color="info" className="search-btn" type="button" onClick={handleClick}>
              <span>{t("submit")}</span>
            </Button>

        </Form>
    );
}

export default withRouter(FormUser);