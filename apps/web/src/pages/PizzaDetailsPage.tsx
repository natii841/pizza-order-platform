import { Link, useParams } from 'react-router-dom'
import { pizzas } from '../features/pizzas/data'
import { PizzaCustomizer } from '../features/pizzas/components/PizzaCustomizer'

export function PizzaDetailsPage() {
  const { pizzaId } = useParams()

  const pizza = pizzas.find(
    (pizza) => pizza.id === pizzaId,
  )

  if (!pizza) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-bold">
          Pizza not found
        </h1>

        <Link
          to="/menu"
          className="mt-4 inline-block underline"
        >
          Back to menu
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <Link
        to="/menu"
        className="text-sm text-gray-500 hover:text-black"
      >
        ← Back to menu
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div>
          <img
            src={pizza.image}
            alt={pizza.name}
            className="w-full rounded-3xl object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider">
            Customize your pizza
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {pizza.name}
          </h1>

          <p className="mt-4 leading-7 text-gray-600">
            {pizza.description}
          </p>

          <div className="mt-10">
            <PizzaCustomizer pizza={pizza} />
          </div>
        </div>
      </div>
    </main>
  )
}