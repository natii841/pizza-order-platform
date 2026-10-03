# Pizza Order Platform

A production-minded pizza ordering platform built with a hybrid approach: pragmatic tooling where it saves time, and professional engineering where correctness, security, and maintainability matter.

## Planned stack

- Web: React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- API: Node.js + TypeScript + Fastify
- Database: PostgreSQL + Prisma
- Validation: Zod
- Server state: TanStack Query
- Forms: React Hook Form
- Authentication: established auth library
- Deployment: managed frontend, API, and PostgreSQL services

## Monorepo structure

- `apps/web` - customer and admin frontend
- `apps/api` - backend API
- `packages/types` - shared TypeScript types
- `packages/config` - shared configuration
- `prisma` - database schema and seed data
- `docs` - architecture and API documentation

The project will be built incrementally, starting with the menu and ordering flow and adding authentication, authorization, order management, security, testing, and deployment.
