import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import HookUseRefCSS from './pages/HookUseRefCSS';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookUseRefCSS/>
  </StrictMode>,
) 