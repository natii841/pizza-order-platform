import { PizzaGrid } from '../features/pizzas/components/PizzaGrid'
import { pizzas } from '../features/pizzas/data'

export function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider">
            Fresh • Fast • Delicious
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Pizza made for your cravings.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose your favorite pizza, customize it your way,
            and get it delivered fresh to your door.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Popular pizzas
          </h2>

          <p className="mt-2 text-gray-600">
            Start with one of our customer favorites.
          </p>
        </div>

        <PizzaGrid pizzas={pizzas} />
      </section>
    </main>
  )
}