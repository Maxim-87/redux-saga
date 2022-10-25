import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router';

import store from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './pages/home';
import LatestNews from './pages/latest-news';
import PopularNews from './pages/popular-news';

import {history} from './redux/reducers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<ConnectedRouter history={history}>*/}
      <BrowserRouter>
        <App>
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/latest-news" element={ <LatestNews />}/>
            <Route path="/popular-news" element={ <PopularNews />}/>
          </Routes>
        </App>
      </BrowserRouter>
      {/*</ConnectedRouter>*/}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
