
const createServer = require('./src/app.js')
const UsersRoute = require('./src/routes/users.route.js')
const errorMiddleware = require('./src/middlewares/error.middleware.js')


const app = createServer();

app.use("/api/users", UsersRoute);

app.use(errorMiddleware);

process.on('unhandledRejection', (err, promise) => {
    console.log(err);
    process.exit(1);
});
    
    
    