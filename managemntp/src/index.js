import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import EventList from './components/EventList';
import CreateEventForm from './components/CreateEventForm'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RegistrationForm />
    <LoginForm />
    <EventList />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
