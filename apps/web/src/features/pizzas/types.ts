export type PizzaSize = {
  id: string
  name: string
  price: number
}

export type Topping = {
  id: string
  name: string
  price: number
}

export type Pizza = {
  id: string
  name: string
  description: string
  image: string
  sizes: PizzaSize[]
  toppings: Topping[]
  available: boolean
}