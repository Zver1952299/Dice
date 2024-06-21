import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './components/pages/mainPage';

import './styles/_normalize.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
);
