import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import HookUseStateObject from './pages/HookUseStateObject';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookUseStateObject/>
  </StrictMode>,
)