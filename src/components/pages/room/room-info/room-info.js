import React from 'react';

const Info = () => {
    return (
        <div className="container">
            <div>
                <div className="room-info description">Описание</div>
                <div className="room-info">Чистый и уютный номер c кроватью king size</div>
                <div className="room-info condition">Удобства</div>
                <table>
                    <tbody>
                        <tr>
                            <td>Бесплатный Wi-Fi</td>
                        </tr>
                        <tr>
                            <td>Кондиционер</td>
                        </tr>
                        <tr>
                            <td>Большая парковка</td>
                        </tr>
                        <tr>
                            <td>Набор полотенец</td>
                        </tr>
                        <tr>
                            <td>Предметы гигиены</td>
                        </tr>
                        <tr>
                            <td>Кабельное ТВ</td>
                        </tr>
                        <tr>
                            <td>Холодильник</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Info;