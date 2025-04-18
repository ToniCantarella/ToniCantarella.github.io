import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NavigationProvider } from './ui/navigation/NavigationBar.tsx'
import './localization/i18n.ts'
import { ThemeProvider } from './ui/theme/theme-picker/ThemePicker.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </ThemeProvider>
  </StrictMode>,
)
