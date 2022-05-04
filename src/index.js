import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './FOOD WEB/header';
import Middle from './FOOD WEB/middle';
import Cards from './FOOD WEB/Cards';
import Headline from './FOOD WEB/headline';
import Footer from './FOOD WEB/footer';
import Copy from './FOOD WEB/copy';
import Nav from './Nav';
import store from './store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
  <Provider store={store}>
    <Header/>
    <Nav/>
    <App />
    <Middle/>
    <Headline/>
    <Cards/>
    <Footer/>
    <Copy/>
    </Provider>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
