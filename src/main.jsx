import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'milligram/dist/milligram.css'
import HookUseStateForm from './pages/HookUseStateForm';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookUseStateForm/>
  </StrictMode>,
)