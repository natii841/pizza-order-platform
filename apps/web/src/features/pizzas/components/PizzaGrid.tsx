import type { Pizza } from '../types'
import { PizzaCard } from './PizzaCard'

type PizzaGridProps = {
  pizzas: Pizza[]
}

export function PizzaGrid({ pizzas }: PizzaGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  )
}