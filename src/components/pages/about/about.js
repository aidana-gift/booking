import React from 'react';
import './about.css'
import { useTranslation } from 'react-i18next';
import ScrollToTopControlller from '../../sroll-to-top/scroll-to-top';

const About = () => {

    
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="row">
                <ScrollToTopControlller />
                <div className="col-12 about-label">{t("aboutUs")}</div>
                <img className="col-6 img-about" src="https://pix10.agoda.net/hotelImages/6165919/-1/de3402b5d997c2e3cc026212badd18ec.jpg?s=1024x768" alt="альтернативный текст" />
                <div className="col-6">{t("story")}</div>
                <div className="col-6">{t("story")}</div>
                <img className="col-6 img-about" src="https://greencitytrips.com/wp-content/uploads/2015/11/Corinthia-hotel-Lisbon-Reception.jpg" alt="альтернативный текст" />
            </div>
        </div>
    )
}

export default About;