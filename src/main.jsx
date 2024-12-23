import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'milligram/dist/milligram.css'
import HookUseEffect from './pages/HookUseEffect';

createRoot(document.getElementById('root')).render(

    <HookUseEffect/>

)