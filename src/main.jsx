import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PropsPassingData from './pages/PropsPassingData'
import PropsPassingObjects from './pages/PropsPassingObjects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PropsPassingObjects/>
  </StrictMode>,
)