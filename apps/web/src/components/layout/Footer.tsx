export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} PizzaHouse. All rights reserved.
        </p>
      </div>
    </footer>
  )
}