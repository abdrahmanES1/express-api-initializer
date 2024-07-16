# Express API Initializer

Express API Initializer is a tool designed to streamline the process of generating Express.js applications.

## Installation

Ensure you have [node.js](https://nodejs.org/)) installed, then install express-api-initializer globally using [npm](https://www.npmjs.com/):

```bash
npm install -g express-api-initializer
```

To create a new project, run:

```bash
express-initializer new <app-name>
```
Your app structure will be initialized as follows:

<pre>
📦 app
 ┣ 📂 config
 ┃ ┗ 📜 database.config.js
 ┣ 📂 src
 ┃ ┣ 📂 controllers
 ┃ ┃ ┗ 📜 users.controller.js
 ┃ ┣ 📂 middlewares
 ┃ ┃ ┣ 📜 error.middleware.js
 ┃ ┃ ┣ 📜 users.middleware.js
 ┃ ┃ ┗ 📜 validationMiddleware.middleware.js
 ┃ ┣ 📂 models
 ┃ ┃ ┗ 📜 users.model.js
 ┃ ┣ 📂 schemas
 ┃ ┃ ┗ 📜 users.schema.js
 ┃ ┣ 📂 routes
 ┃ ┃ ┗ 📜 users.route.js
 ┃ ┣ 📂 utils
 ┃ ┃ ┗ 📜 errorResponse.js
 ┃ ┗ 📜 app.js
 ┣ .env.example
 ┣ .env
 ┣ 📜 index.js
 ┗ 📜 package.json
</pre>

To start the app, navigate to the project directory and run:

```bash
node index.js

## Resource Generation

Generate resources using plural nouns:

```bash
express-initializer g resource <resource-name>
```

## Controller Generation

Generate controllers using:

```bash
express-initializer g controller <controller-name>
```

## Model Generation

Generate models using:

```bash
express-initializer g model <model-name>
```

## Validation Schema Generation

Generate schema using:

```bash
express-initializer g schema <model-name>
```

## Route Generation

Generate routes using:

```bash
express-initializer g route <route-name>
```
## Middleware Generation

Generate middleware using:

```bash
express-initializer g middleware <middleware-name>
```

## Configuration Generation

Generate configs using:

```bash
express-initializer g config <config-name>
```

Feel free to use these commands to efficiently scaffold and organize your Express.js applications.
