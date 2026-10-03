# API

Planned REST endpoints:

## Pizzas
- GET /api/pizzas
- GET /api/pizzas/:id
- POST /api/pizzas
- PATCH /api/pizzas/:id
- DELETE /api/pizzas/:id

## Toppings
- GET /api/toppings
- POST /api/toppings
- PATCH /api/toppings/:id
- DELETE /api/toppings/:id

## Orders
- POST /api/orders
- GET /api/orders
- GET /api/orders/:id
- PATCH /api/orders/:id/status

The server is the source of truth for prices, authorization, and valid order status transitions.
