# express-api-inializer

express-api-inializer used for generate Express js app


## Installing express-api-inializer

First, install express-api-inializer using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g express-api-inializer
```

Then generate your new project:

```bash
express-inializer new <app-name>
```
And  your app initialized like this:

app
 ┣ config
 ┣ src
 ┃ ┣ controllers
 ┃ ┃ ┗ users.controller.js
 ┃ ┣ middlewares
 ┃ ┃ ┣ error.middleware.js
 ┃ ┃ ┗ users.middleware.js
 ┃ ┣ models
 ┃ ┃ ┗ users.model.js
 ┃ ┣ routes
 ┃ ┃ ┗ users.route.js
 ┃ ┗ app.js
 ┣ index.js
 ┗ package.json


to generate Resources new project:

```bash
express-inializer g resource <resource-name> 
```
use Plural Nouns

to generate Controller new project:

```bash
express-inializer g controller <controller-name>
```

tto generate Model new project:

```bash
express-inializer g model <model-name>
```

to generate route new project:

```bash
express-inializer g route <route-name>
```

to generate Middleware new project:

```bash
express-inializer g middleware <middleware-name>
```


