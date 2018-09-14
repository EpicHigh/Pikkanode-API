const Router = require("koa-router");
const router = new Router();
const signIn = require("../../../db/signin");

router.prefix("/api/v1/auth");

router.post("/signin", async (ctx, next) => {
  if (await signIn.checkUser(ctx.request.body)) {
    ctx.status = 200;
    ctx.body = {};
  } else {
    ctx.status = 400;
    ctx.body = { error: "wrong email or password" };
  }
  return await next();
});

module.exports = router.routes();
