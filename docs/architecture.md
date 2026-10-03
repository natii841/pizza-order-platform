# Architecture

## Initial architecture

Browser
-> React web app
-> Fastify API
-> PostgreSQL

The API owns business rules that must be trusted, including pricing, authorization, and order state transitions.

## Hybrid engineering principle

Use mature libraries for commodity concerns such as UI primitives, forms, validation, database access, and authentication.

Implement and test the business logic ourselves, especially pizza customization, pricing, order creation, and order lifecycle rules.
