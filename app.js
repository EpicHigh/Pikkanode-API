const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const cors = require("@koa/cors");

//API routes
const signup = require("./routes/api/auth/signup");
const signin = require("./routes/api/auth/signin");
const signout = require("./routes/api/auth/signout");
//config
const bodyparserConfig = require("./config/bodyparser");
const viewsConfig = require("./config/views");
const corsConfig = require("./config/cors");
// error handler
onerror(app);

// middlewares
app.use(bodyparser(bodyparserConfig));
app.use(cors(corsConfig));
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));
app.use(views(__dirname + "/views", viewsConfig));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});


app.use(signup);
app.use(signin);
app.use(signout);
app.use(router.allowedMethods());
// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
