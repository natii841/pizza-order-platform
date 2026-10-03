import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight"
        >
          PizzaHouse
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/menu"
            className="text-sm font-medium text-gray-600 hover:text-black"
          >
            Menu
          </Link>

          <Link
            to="/orders"
            className="text-sm font-medium text-gray-600 hover:text-black"
          >
            Orders
          </Link>

          <Link
            to="/cart"
            className="relative"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={20} />
          </Link>
        </div>
      </nav>
    </header>
  )
}