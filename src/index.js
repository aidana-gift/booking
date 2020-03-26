import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import state from './redux/state';
import './i18n';

ReactDOM.render(
  <Suspense fallback={(<div>Loading</div>)}>
    <App state={state}/>
  </Suspense>,
  document.getElementById('root'));

