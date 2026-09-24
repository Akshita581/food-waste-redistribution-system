import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { VolunteerProvider } from './context/VolunteerContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VolunteerProvider>
      <App />
    </VolunteerProvider>
  </StrictMode>,
)
