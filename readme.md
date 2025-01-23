# Express TypeScript Starter

A production-ready Express.js starter template with TypeScript, featuring comprehensive tooling, security best practices, and monitoring capabilities.

## Features

- 🚀 **TypeScript** - Write better, more maintainable code
- 📊 **OpenTelemetry** - Distributed tracing out of the box
- 🔒 **Security** - Helmet, CORS, and rate limiting preconfigured
- 📝 **API Documentation** - Swagger/OpenAPI integration
- 🪵 **Logging** - Structured logging with Pino
- 🔍 **Error Tracking** - Sentry integration
- ⚡ **Performance** - Response compression
- 🧪 **Testing** - Jest setup for unit tests
- 💅 **Code Quality** - ESLint, Prettier, and Git hooks

## Quick Start

```bash
npx create-express-ts-starter my-app
cd my-app
npm install
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

See `.env.example` for all available options.

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Express middleware
├── models/         # Database models
├── routes/         # Route definitions
├── services/       # Business logic
├── types/          # TypeScript types
├── utils/          # Utility functions
└── index.ts        # App entry point
```

## API Documentation

Swagger documentation is available at `/api-docs` when running the server.

## Monitoring & Observability

### Sentry
Error tracking and performance monitoring. Configure via `SENTRY_DSN` in `.env`.

### OpenTelemetry
Distributed tracing enabled by default. Configure endpoint via `OTEL_EXPORTER_OTLP_ENDPOINT`.

## Security

- Helmet for security headers
- CORS protection
- Rate limiting
- Request validation

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit using conventional commits
4. Push to your branch
5. Create a pull request

## License

MIT