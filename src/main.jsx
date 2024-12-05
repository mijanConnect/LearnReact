import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import HookUseRefCachingAPIcall from './pages/HookUseRefCachingAPIcall';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookUseRefCachingAPIcall/>
  </StrictMode>,
) 