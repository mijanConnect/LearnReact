import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HookUseRefInnerHTMLcng from './pages/HookUseRefInnerHTMLcng'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookUseRefInnerHTMLcng/>
  </StrictMode>,
) 