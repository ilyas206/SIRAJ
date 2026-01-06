import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/app';
import { LanguageProvider } from './context/languageContext';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <LanguageProvider>
        <App/>
    </LanguageProvider>
)