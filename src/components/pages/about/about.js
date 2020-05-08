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
                <img className="col-6 img-about" src="https://industry.ehl.edu/hubfs/HI_Blog%20Header%20Pictures/Hotel-design.jpg" alt="альтернативный текст" />
                <div className="col-6">{t("story")}</div>
                <div className="col-6">{t("story")}</div>
                <img className="col-6 img-about" src="https://q-cf.bstatic.com/images/hotel/max1024x768/181/181647609.jpg" alt="альтернативный текст" />
            </div>
        </div>
    )
}

export default About;