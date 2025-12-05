# Social Auth Unifier

A powerful and unified social authentication solution for Node.js and NestJS applications. This monorepo contains the core `social-auth-unifier` package and related applications.

## Monorepo Structure

This project is managed as a monorepo using [TurboRepo](https://turbo.build/repo).

*   **`packages/`**: Contains the core libraries.
    *   [`social-auth-unifier`](./packages/social-auth-unifier/README.md): The main package providing unified social authentication strategies (Google, Twitter, Facebook, LinkedIn, GitHub) for NestJS.
*   **`apps/`**: Contains example applications and services.
    *   `test-app`: A test application demonstrating the usage of `social-auth-unifier`.

## Key Features

*   **Unified Interface**: Consistent API for multiple OAuth providers.
*   **NestJS Integration**: Seamless integration with NestJS modules and guards.
*   **Multiple Strategies**: Supports Google, Twitter, Facebook, LinkedIn, and GitHub out of the box.
*   **Extensible**: logic is built on top of Passport.js.

## Installation
 
 To install the `social-auth-unifier` package in your application:
 
 ```bash
 npm install social-auth-unifier
 # or
 yarn add social-auth-unifier
 # or
 pnpm add social-auth-unifier
 ```
 
 ## Development


### Prerequisites

*   Node.js (>= 16)
*   npm or pnpm

### Workspace Installation
 
 To install dependencies for the entire monorepo:

```bash
npm install
```

### Running Locally

To start the development server for all apps/packages:

```bash
npm run dev
# or with turbo directly
npx turbo run dev
```

### Building

To build the project:

```bash
npm run build
```

## Documentation

For detailed usage instructions, configuration, and API reference, please visit the [social-auth-unifier package documentation](./packages/social-auth-unifier/README.md).

## Contributing

Contributions are welcome!

## License

This project is licensed under the [MIT License](./package.json).

## Author

*   **Mirza Saikat Ahmmed**
    *   Website: [saikat.com.bd](https://saikat.com.bd)
    *   Email: contact@saikat.com.bd
