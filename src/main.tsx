import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import App from './App.tsx'
import './index.css'
import './localization/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
         <App />
     </BrowserRouter>
  </StrictMode>,
)
