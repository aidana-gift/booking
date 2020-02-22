import React from 'react';
import './about.css'

const aboutUs = "О нас";
const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 about-label">{aboutUs}</div>
                <div className="col-6 div-img"><img className="img-about" src="https://q-cf.bstatic.com/images/hotel/max1024x768/181/181647609.jpg" alt="альтернативный текст" /></div>
                <div className="col-6">Отель Таш-Кумыр — это отель, предоставляющий комфортные и уютные номера со всеми удобствами для своих посетителей. Наш отель спроектирован в светлых, ярких, красочных тонах с различными, креативными иллюстрациями об истории, культуре, достижениях выдяющихся людей Кыргызстана, которые воодушевляют, подбадривают к новых начинаниям и просто поднимают настроение наших посетителей.</div>
            </div>
        </div>
    )
}

export default About;