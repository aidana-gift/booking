import React from 'react';
import { Table } from 'reactstrap';

const Admin = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Заезд</th>
          <th>Выезд</th>
          <th>Статус</th>
          <th>Телефон</th>
          <th>Номер</th>
          <th>Изменить</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark Otto</td>
          <td>02/03/2020</td>
          <td>10/03/2020</td>
          <td>Оплачено</td>
          <td>0556342256</td>
          <td>11</td>
          <td>Изменить</td>
        </tr>
        <tr>
        <th scope="row">2</th>
          <td>Mark Otto</td>
          <td>02/03/2020</td>
          <td>10/03/2020</td>
          <td>Оплачено</td>
          <td>0556342256</td>
          <td>11</td>
          <td>Изменить</td>
        </tr>
        <tr>
        <th scope="row">3</th>
          <td>Mark Otto</td>
          <td>02/03/2020</td>
          <td>10/03/2020</td>
          <td>Оплачено</td>
          <td>0556342256</td>
          <td>11</td>
          <td>Изменить</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Admin;