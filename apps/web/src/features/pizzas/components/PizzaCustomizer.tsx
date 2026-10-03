import { useMemo, useState } from 'react'
import type { Pizza } from '../types'

type PizzaCustomizerProps = {
  pizza: Pizza
}

export function PizzaCustomizer({
  pizza,
}: PizzaCustomizerProps) {
  const [selectedSizeId, setSelectedSizeId] = useState(
    pizza.sizes[0]?.id ?? '',
  )

  const [selectedToppingIds, setSelectedToppingIds] =
    useState<string[]>([])

  const [quantity, setQuantity] = useState(1)

  const selectedSize = pizza.sizes.find(
    (size) => size.id === selectedSizeId,
  )

  const selectedToppings = pizza.toppings.filter((topping) =>
    selectedToppingIds.includes(topping.id),
  )

  const total = useMemo(() => {
    const sizePrice = selectedSize?.price ?? 0

    const toppingsPrice = selectedToppings.reduce(
      (sum, topping) => sum + topping.price,
      0,
    )

    return (sizePrice + toppingsPrice) * quantity
  }, [selectedSize, selectedToppings, quantity])

  function toggleTopping(toppingId: string) {
    setSelectedToppingIds((current) =>
      current.includes(toppingId)
        ? current.filter((id) => id !== toppingId)
        : [...current, toppingId],
    )
  }

  return (
    <div className="space-y-8">
      {/* Size */}
      <section>
        <h2 className="mb-4 text-lg font-semibold">
          Choose your size
        </h2>

        <div className="grid gap-3 sm:grid-cols-3">
          {pizza.sizes.map((size) => (
            <button
              key={size.id}
              type="button"
              onClick={() => setSelectedSizeId(size.id)}
              className={`rounded-xl border p-4 text-left transition ${
                selectedSizeId === size.id
                  ? 'border-black bg-black text-white'
                  : 'hover:border-gray-400'
              }`}
            >
              <div className="font-medium">
                {size.name}
              </div>

              <div className="mt-1 text-sm opacity-80">
                ${size.price.toFixed(2)}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Toppings */}
      <section>
        <h2 className="mb-4 text-lg font-semibold">
          Extra toppings
        </h2>

        <div className="space-y-3">
          {pizza.toppings.map((topping) => {
            const selected = selectedToppingIds.includes(
              topping.id,
            )

            return (
              <label
                key={topping.id}
                className="flex cursor-pointer items-center justify-between rounded-xl border p-4"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() =>
                      toggleTopping(topping.id)
                    }
                  />

                  <span>{topping.name}</span>
                </div>

                <span className="text-sm text-gray-600">
                  +${topping.price.toFixed(2)}
                </span>
              </label>
            )
          })}
        </div>
      </section>

      {/* Quantity */}
      <section>
        <h2 className="mb-4 text-lg font-semibold">
          Quantity
        </h2>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() =>
              setQuantity((current) =>
                Math.max(1, current - 1),
              )
            }
            className="h-10 w-10 rounded-lg border"
          >
            -
          </button>

          <span className="w-8 text-center font-medium">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() =>
              setQuantity((current) => current + 1)
            }
            className="h-10 w-10 rounded-lg border"
          >
            +
          </button>
        </div>
      </section>

      {/* Summary */}
      <section className="rounded-2xl bg-gray-100 p-6">
        <div className="flex items-center justify-between">
          <span className="font-medium">Total</span>

          <span className="text-2xl font-bold">
            ${total.toFixed(2)}
          </span>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-xl bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
        >
          Add to cart
        </button>
      </section>
    </div>
  )
}