import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './ui/theme-picker/ThemePicker.tsx'
import { NavigationProvider } from './ui/navigation/NavigationBar.tsx'
import './localization/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </ThemeProvider>
  </StrictMode>,
)
