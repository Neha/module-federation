import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button from 'Button/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
const HeaderComponent = React.lazy(() => import("Header/Header"));
const FooterComponent = React.lazy(() => import("Footer/Footer"));
// const ButtonComponent = React.lazy(() => import("Button/Button"));


root.render(
  <React.StrictMode>
    <App />
    <React.Suspense fallback="loading...">
      <HeaderComponent style={{ "fontSize": "32px" }}/>
      <Button value={5}/>
      <FooterComponent />
    </React.Suspense>  
  </React.StrictMode>
);


