import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import NewsletterThanks from './NewsletterThanks.jsx'
import AshesOfTheDamnedPage from './AshesOfTheDamnedPage.jsx'
import UntilTheFireDiesPage from './UntilTheFireDiesPage.jsx'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/newsletter-thanks" element={<NewsletterThanks />} />
        <Route path="/ashes-of-the-damned-the-forgotten-ward" element={<AshesOfTheDamnedPage />} />
        <Route path="/ashes-of-the-damned-the-forgotten-ward/" element={<AshesOfTheDamnedPage />} />
        <Route path="/until-the-fire-dies" element={<UntilTheFireDiesPage />} />
        <Route path="/until-the-fire-dies/" element={<UntilTheFireDiesPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)