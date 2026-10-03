import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}