# Event.OS - Coming Soon Landing Page

## Overview

Event.OS is a "coming soon" landing page for an event planning platform. The project is built as a modern single-page application featuring a warm, paper-like aesthetic inspired by contemporary SaaS landing pages. Currently, the application displays a minimalist hero section with animated elements announcing the upcoming launch of the Event.OS platform.

The application uses a full-stack TypeScript architecture with React on the frontend and Express on the backend, though the backend is minimal as this is primarily a static landing page experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Implemented with Wouter, a minimal client-side router. The application currently has a single route that displays the coming soon hero component.

**UI Component Library**: Built on shadcn/ui (Radix UI primitives) with extensive customization. The design system includes:
- Custom color palette centered around warm, earthy tones (#F7F0E6 cream backgrounds, #261711 deep brown text)
- Tailwind CSS for styling with custom theme extensions
- Component variants using class-variance-authority for consistent styling patterns

**State Management**: React Query (@tanstack/react-query) is configured for server state management, though currently unused in the static landing page.

**Animation**: Framer Motion for smooth entrance animations and micro-interactions on the hero section.

**Design System**: The application follows a carefully defined design system documented in `design_guidelines.md`:
- Typography scale with specific font weights and letter spacing
- Consistent spacing units using Tailwind primitives (p-4, p-6, p-8, etc.)
- Gradient-based primary CTA buttons (#F47B3D to #F15C23)
- Border radius of 24px for cards, rounded-full for buttons

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Development vs Production**: 
- Development mode uses Vite's middleware mode with HMR (Hot Module Replacement) over WebSocket
- Production serves pre-built static assets from the `dist/public` directory
- Build process bundles server code with esbuild for optimized cold starts

**Storage Interface**: Abstract storage interface defined with in-memory implementation (MemStorage). The interface supports basic user CRUD operations but is currently unused for the landing page. This architecture allows for easy database integration when the application evolves beyond the coming soon phase.

**Build Optimization**: Server dependencies are selectively bundled (allowlist in build script) to reduce file system syscalls and improve cold start performance. External dependencies that don't benefit from bundling remain as external modules.

### Data Layer

**ORM**: Drizzle ORM configured for PostgreSQL with the Neon serverless driver.

**Schema**: Minimal user schema defined with:
- UUID primary keys (using PostgreSQL's `gen_random_uuid()`)
- Username and password fields
- Zod validation schemas generated from Drizzle tables

**Database**: Configured for PostgreSQL via environment variable `DATABASE_URL`. The schema uses Drizzle's type-safe query builder and migration system (migrations output to `./migrations` directory).

**Design Decision**: Drizzle was chosen over traditional ORMs for its lightweight footprint, excellent TypeScript support, and ability to work with serverless PostgreSQL providers like Neon. The storage interface abstraction allows the application to start with in-memory storage and seamlessly transition to database-backed persistence.

### Build and Development Workflow

**TypeScript Configuration**: Monorepo-style setup with path aliases:
- `@/*` maps to client source files
- `@shared/*` maps to shared code between client and server
- `@assets/*` maps to attached assets directory

**Build Process**:
1. Client builds with Vite (React app bundled to `dist/public`)
2. Server builds with esbuild (Node app bundled to `dist/index.cjs`)
3. Selective dependency bundling to optimize bundle size and startup time

**Development Experience**: 
- Replit-specific plugins for error overlay, cartographer, and dev banner
- Hot module replacement for instant client updates
- Server restart on changes via tsx watch mode

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of unstyled, accessible React components (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe variant API for component styling
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Lucide React**: Icon library

### Backend and Data
- **@neondatabase/serverless**: Serverless PostgreSQL client for Neon database
- **Drizzle ORM**: TypeScript ORM with PostgreSQL dialect
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation
- **connect-pg-simple**: PostgreSQL session store (configured but unused in current implementation)

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: JavaScript bundler for server code
- **tsx**: TypeScript execution environment for Node.js
- **Replit plugins**: Runtime error modal, cartographer, and dev banner for Replit IDE integration

### Utility Libraries
- **wouter**: Lightweight client-side router
- **zod**: TypeScript-first schema validation
- **date-fns**: Date utility library
- **clsx & tailwind-merge**: Utility functions for conditional CSS classes

### Form Handling
- **react-hook-form**: Forms with built-in validation
- **@hookform/resolvers**: Resolvers for schema-based validation with Zod

The application is designed with future extensibility in mind—the authentication scaffolding, database layer, and storage interfaces are in place to support the full Event.OS platform when development continues beyond the landing page phase.