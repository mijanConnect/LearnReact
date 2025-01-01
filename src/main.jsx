import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'milligram/dist/milligram.css'
import App from './App';
import "./assets/css/style.css"

createRoot(document.getElementById('root')).render(

    <App/>

)