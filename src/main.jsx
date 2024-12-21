import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import HookUseStateToDoList from './pages/HookUseStateToDoList';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookUseStateToDoList/>
  </StrictMode>,
)