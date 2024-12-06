import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import HookUseStateCounter from './pages/HookUseStateCounter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookUseStateCounter/>
  </StrictMode>,
)