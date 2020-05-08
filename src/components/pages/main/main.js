import React, {useState, useEffect} from 'react';
import Slider from '../../slider/slider';
import CardItem from '../../card/card';
import Filter from '../../filter/filter';
import axios from 'axios';
import ScrollToTopControlller from '../../sroll-to-top/scroll-to-top';
import RenderRooms from '../../renderRooms/renderRooms';
import { useTranslation } from 'react-i18next';
import './main.css';

const Main = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <ScrollToTopControlller/>
      <Slider items={props.items}/>
      <div className="container">
        <Filter/>
        <h3 className="card-label" >{t("ourRoomsLabel")}</h3>
        <RenderRooms />
      </div>

    </div>
  );
};

export default Main;