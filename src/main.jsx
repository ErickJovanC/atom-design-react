// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainInterface from './Main-Interface.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainInterface />
  </StrictMode>,
)