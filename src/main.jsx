import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormSubmit from './pages/FormSubmit'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormSubmit/>
  </StrictMode>,
)