import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import i18n from './i18n/i18n';
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
  <Suspense fallback={(<div>Loading...</div>)}>
    <Router>
      <App/>
    </Router>
  </Suspense>
  </I18nextProvider>,
  document.getElementById('root'));

