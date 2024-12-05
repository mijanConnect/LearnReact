import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import HookUseRefPersistedMutable from './pages/HookUseRefPersistedMutable';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookUseRefPersistedMutable/>
  </StrictMode>,
) 