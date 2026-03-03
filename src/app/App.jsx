import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from '../components/layout/SiteLayout.jsx'
import HomePage from '../pages/home/HomePage.jsx'
import AboutPage from '../pages/about/AboutPage.jsx'
import ContactPage from '../pages/contact/ContactPage.jsx'
import TreatmentPage from '../pages/treatment/TreatmentPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/treatment" element={<TreatmentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
