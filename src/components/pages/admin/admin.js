import React from 'react';
import { Table } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Button} from 'reactstrap';
import './admin.css';
const Admin = () => {
  return (
    // deleteItem = (id) => {
    //     this.setState (({items}) => {
    //             const idx = items.findIndex((el) => el.id === id);
                
    //             const before = items.slice(0, idx);
    //             const after = items.slice(idx + 1);
    //             const newArray = [...before, ...after];
    //             return {
    //                 items: newArray
    //             }
    //         })
    //     };
      <div className="container admin">
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
          <td> <Link to="/edit"><Button className="btn-new-style"><i class="fa fa-pencil-square-o btn btn-tbl-edit" aria-hidden="true"></i></Button></Link>
              <Link><Button className="btn-new-style"><i className="fa fa-trash-o btn btn-tbl-delete" aria-hidden="true"></i></Button></Link>
                </td>
        </tr>
        <tr>
        <th scope="row">2</th>
          <td>Mark Otto</td>
          <td>02/03/2020</td>
          <td>10/03/2020</td>
          <td>Оплачено</td>
          <td>0556342256</td>
          <td>11</td>
          <td><Link to="/edit"><Button className="btn-new-style"><i class="fa fa-pencil-square-o btn btn-tbl-edit" aria-hidden="true"></i></Button></Link>
              <Link><Button className="btn-new-style"><i className="fa fa-trash-o btn btn-tbl-delete" aria-hidden="true"></i></Button></Link></td>
        </tr>
        <tr>
        <th scope="row">3</th>
          <td>Mark Otto</td>
          <td>02/03/2020</td>
          <td>10/03/2020</td>
          <td>Оплачено</td>
          <td>0556342256</td>
          <td>11</td>
          <td><Link to="/edit"><Button className="btn-new-style"><i class="fa fa-pencil-square-o btn btn-tbl-edit" aria-hidden="true"></i></Button></Link>
              <Link><Button className="btn-new-style"><i className="fa fa-trash-o btn btn-tbl-delete" aria-hidden="true"></i></Button></Link></td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default Admin; 