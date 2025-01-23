# {{projectName}}

A production-ready Node.js backend server with TypeScript, Express, and best practices.

## Features

- 🚀 **TypeScript** - Type safety and better developer experience
- 📝 **Express** - Fast, unopinionated, minimalist web framework
- 📚 **Swagger/OpenAPI** - API documentation
- 🔒 **Helmet** - Security middleware
- 📊 **OpenTelemetry** - Observability and tracing
- 🐛 **Sentry** - Error tracking
- 📝 **Winston/Pino** - Logging
- ✨ **ESLint & Prettier** - Code formatting and linting
- 🧪 **Jest** - Testing
- 🪝 **Husky** - Git hooks
- 🔄 **CI/CD** - GitHub Actions workflow
- 📦 **Docker** - Containerization

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd {{projectName}}
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Copy the environment variables:
\`\`\`bash
cp .env.example .env
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

### Scripts

- \`npm run dev\` - Start the development server
- \`npm run build\` - Build for production
- \`npm start\` - Start the production server
- \`npm test\` - Run tests
- \`npm run lint\` - Run ESLint
- \`npm run format\` - Format code with Prettier
- \`npm run docs\` - Generate documentation

## Project Structure

\`\`\`
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Express middleware
├── models/         # Data models
├── routes/         # Route definitions
├── services/       # Business logic
├── types/          # TypeScript types
├── utils/          # Utility functions
└── index.ts        # Application entry point
\`\`\`

## API Documentation

API documentation is available at \`/docs\` when the server is running.

## Testing

Run tests with:

\`\`\`bash
npm test
\`\`\`

For test coverage:

\`\`\`bash
npm run test:coverage
\`\`\`

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Shuvam Kumar**
- GitHub: [@shuvamk](https://github.com/shuvamk)