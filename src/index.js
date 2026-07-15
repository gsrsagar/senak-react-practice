import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Counter } from './Counter';
import { Home, Home1, Utility } from './Components';
import { Courses } from './Courses';
import { FormHillingWithEvents } from './FormFIlling';
import { CounterWIllUnMountExample } from './CounterWillUnMount';
import { UsersPageLoad } from './Hooks';
import { AppLayout } from './ContextExamples';
import { AppLayoutContext } from './ContextAPI';
import Card from './UI-Verse_References/Card-Day35';
import Loader from './UI-Verse_References/Loader-Day35';
import { RoutingExample } from './Routing/RouterHome';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { ControlledForm } from './Forms-API-Calls/ControlledForms';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <CookiesProvider>
       
      </CookiesProvider> */}
      {/* <ControlledForm /> */}
       <RoutingExample />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
