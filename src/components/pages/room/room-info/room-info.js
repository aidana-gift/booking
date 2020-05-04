import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Info = (props) => {
    const [room, setRoom] = useState();
    let facil = props.room.ru_facilities;
    let arr = []
    function getFacilities(){
        if(facil){
            facil.map((item) => {
                arr.push(item)
            })
        }
    }
if(facil){
    
     getFacilities()
}
console.log(arr)
    return (
        <div className="container">
            <div>
                <div className="room-info description">Описание</div>
                <div className="room-info">{props.room.ru_description}</div>
                <div className="room-info condition">Удобства</div>
                <table>
                    <tbody>
                        {arr.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item}</td>
                                </tr>
                            )
                        })}
                                
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Info;