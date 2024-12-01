import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PropsPassingData from './pages/PropsPassingData'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PropsPassingData/>
  </StrictMode>,
)