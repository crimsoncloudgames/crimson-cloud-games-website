import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import NewsletterThanks from './NewsletterThanks.jsx'
import { Analytics } from '@vercel/analytics/react'

const analyticsEnabled =
  typeof window !== 'undefined' && window.location.hostname === 'crimsoncloudgames.com'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/newsletter-thanks" element={<NewsletterThanks />} />
      </Routes>
      {analyticsEnabled ? <Analytics /> : null}
    </BrowserRouter>
  </StrictMode>,
)