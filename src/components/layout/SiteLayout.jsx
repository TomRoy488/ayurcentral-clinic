import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader.jsx'
import StickyBottomNav from './StickyBottomNav.jsx'
import SiteFooter from './SiteFooter.jsx'

function SiteLayout() {
  return (
    <div className="ayurAptayu-layout min-h-screen">
      <SiteHeader />

      <main className="ayurAptayu-main">
        <Outlet />
      </main>

      <SiteFooter />

      <StickyBottomNav />
    </div>
  )
}

export default SiteLayout
