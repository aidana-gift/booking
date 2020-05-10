import React from 'react';
import Filter from '../../filter/filter';
import { withRouter } from 'react-router-dom';
import ScrollToTopControlller from '../../sroll-to-top/scroll-to-top';
import RenderRooms from '../../renderRooms/renderRooms';
import { useTranslation } from 'react-i18next';

const Results = (props) => {
  const { t } = useTranslation();
  return (
      <div className="container">
        <ScrollToTopControlller />
          <Filter/>
          <h3 className="card-label">{t("results")}</h3>
        <RenderRooms />
      </div>
  );
};

export default withRouter(Results);