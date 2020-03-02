import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import DatePicker from 'react-datepicker';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './edit.css';

const FormUser = (props) => {
    const [value, setValue] = useState()
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return (
        <div className="container edit">
            <Form>
                <Label className="form-header">Данные гостя</Label>
                <FormGroup>
                    <Label for="examplePassword">Имя
                </Label>
                    <Input type="password" name="name" id="exampleName" placeholder="Имя" />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Фамилия
                </Label>
                    <Input type="password" name="name" id="exampleName" placeholder="Фамилия" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleSelect">Пол</Label>
                    <Input type="select" name="select" id="exampleSelect" placeholder="Не знаю">
                        <option>Мужчина</option>
                        <option>Женщина</option>

                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword" >Номер телефона
                </Label>
                    <PhoneInput
                        placeholder="Номер телефона"
                        value={value}
                        onChange={setValue}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Email
                </Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                </FormGroup>

                <div className="container row">
                    <FormGroup className="datepicker">
                        <DatePicker
                            placeholderText="Въезд"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            selectsStart
                            minDate={new Date()}
                            startDate={startDate}
                            endDate={endDate}
                            className="form-control"
                        />
                    </FormGroup>

                    <FormGroup>
                        <DatePicker
                            placeholderText="Выезд"
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            className="form-control"
                        />
                    </FormGroup>
                </div>

                <FormGroup>
                    <input type="number" name="minSize" min="1" id="size" className="size-input form-control" placeholder="взрослые" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleSelect">Тип номера</Label>
                    <Input type="select" name="select" id="exampleSelect" placeholder="Не знаю">
                        <option>Одноместный стандарт</option>
                        <option>Дмухместный с одной кроватью</option>
                        <option>Двухместный с двумя кроватями</option>
                        <option>Люкс</option>
                    </Input>
                </FormGroup>


                <Button>Сохранить</Button>
                <Button>Отмена</Button>
            </Form>
        </div>
    );
}

export default FormUser;