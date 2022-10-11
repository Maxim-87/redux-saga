import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import store from "./redux/store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, Router, Routes} from "react-router";
import Home from "./pages/home";
import LatestNews from "./pages/latest-news";
import PopularNews from "./pages/popular-news";
import {BrowserRouter} from 'react-router-dom';
import {ConnectedRouter} from "connected-react-router";
import {history} from "./redux/reducers";



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
