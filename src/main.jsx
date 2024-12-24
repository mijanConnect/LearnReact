import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'milligram/dist/milligram.css'
import HookUseEffectFetchAPI from './pages/HookUseEffectFetchAPI';

createRoot(document.getElementById('root')).render(

    <HookUseEffectFetchAPI/>

)