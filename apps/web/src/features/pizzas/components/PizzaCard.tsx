import { Link } from 'react-router-dom'
import type { Pizza } from '../types'

type PizzaCardProps = {
  pizza: Pizza
}

export function PizzaCard({ pizza }: PizzaCardProps) {
  const startingPrice = Math.min(
    ...pizza.sizes.map((size) => size.price),
  )

  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">
            {pizza.name}
          </h3>

          <span className="whitespace-nowrap text-sm font-medium">
            From ${startingPrice}
          </span>
        </div>

        <p className="mb-5 text-sm leading-6 text-gray-600">
          {pizza.description}
        </p>

        <Link
          to={`/menu/${pizza.id}`}
          className="block w-full rounded-xl bg-black px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Customize
        </Link>
      </div>
    </article>
  )
}