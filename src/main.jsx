import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HookUseRefInputElement from './pages/HookUseRefInputElement'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookUseRefInputElement/>
  </StrictMode>,
) 