import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'milligram/dist/milligram.css'
import HookUseEffectFetchAsync from './pages/HookUseEffectFetchAsync';

createRoot(document.getElementById('root')).render(

    <HookUseEffectFetchAsync/>

)