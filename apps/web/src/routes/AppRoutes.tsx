import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout'
import { HomePage } from '../pages/HomePage'
import { MenuPage } from '../pages/MenuPage'
import { PizzaDetailsPage } from '../pages/PizzaDetailsPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />

        <Route
          path="/menu/:pizzaId"
          element={<PizzaDetailsPage />}
        />
      </Route>
    </Routes>
  )
}