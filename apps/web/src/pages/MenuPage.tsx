import { PizzaGrid } from '../features/pizzas/components/PizzaGrid'
import { pizzas } from '../features/pizzas/data'

export function MenuPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider">
          Our menu
        </p>

        <h1 className="mt-2 md:text-6xl text-4xl font-bold tracking-tight">
          Choose your pizza
        </h1>

        <p className="mt-3 max-w-2xl text-gray-600">
          Pick a pizza and customize it exactly how you want.
        </p>
      </div>

      <PizzaGrid pizzas={pizzas} />
    </main>
  )
}