import type { Pizza, Topping } from './types'

const toppings: Topping[] = [
  {
    id: 'extra-cheese',
    name: 'Extra Cheese',
    price: 2,
  },
  {
    id: 'mushrooms',
    name: 'Mushrooms',
    price: 1.5,
  },
  {
    id: 'jalapenos',
    name: 'Jalapeños',
    price: 1,
  },
  {
    id: 'olives',
    name: 'Olives',
    price: 1.5,
  },
  {
    id: 'chicken',
    name: 'Chicken',
    price: 3,
  },
]

export const pizzas: Pizza[] = [
  {
    id: 'margherita',
    name: 'Margherita',
    description:
      'Fresh tomato, mozzarella, basil, and olive oil.',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
    available: true,

    sizes: [
      {
        id: 'small',
        name: 'Small',
        price: 8,
      },
      {
        id: 'medium',
        name: 'Medium',
        price: 11,
      },
      {
        id: 'large',
        name: 'Large',
        price: 14,
      },
    ],

    toppings,
  },

  {
    id: 'pepperoni',
    name: 'Pepperoni',
    description:
      'Classic tomato sauce, mozzarella, and pepperoni.',
    image:
      'https://images.unsplash.com/photo-1628840042765-356cda07504e',
    available: true,

    sizes: [
      {
        id: 'small',
        name: 'Small',
        price: 10,
      },
      {
        id: 'medium',
        name: 'Medium',
        price: 13,
      },
      {
        id: 'large',
        name: 'Large',
        price: 16,
      },
    ],

    toppings,
  },

  {
    id: 'bbq-chicken',
    name: 'BBQ Chicken',
    description:
      'Grilled chicken, BBQ sauce, mozzarella, and red onion.',
    image:
      'https://images.unsplash.com/photo-1594007654729-407eedc4be65',
    available: true,

    sizes: [
      {
        id: 'small',
        name: 'Small',
        price: 11,
      },
      {
        id: 'medium',
        name: 'Medium',
        price: 14,
      },
      {
        id: 'large',
        name: 'Large',
        price: 17,
      },
    ],

    toppings,
  },
]