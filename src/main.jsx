import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PropsPassingFunction from './pages/PropsPassingFunction'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PropsPassingFunction/>
  </StrictMode>,
)