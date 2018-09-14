const Router = require("koa-router");
const router = new Router();
const signUp = require("../../../db/signup");

router.prefix("/api/v1/auth");

router.post("/signup", async (ctx, next) => {
  console.log(ctx.request.body);
  if (signUp.checkPassword(ctx.request.body)) {
    ctx.status = 400;
    ctx.body = { error: "password too short" };
  } else if (signUp.checkEmail(ctx.request.body)) {
    ctx.status = 400;
    ctx.body = { error: "invalid email" };
  } else if (await signUp.checkUser(ctx.request.body)) {
    ctx.status = 400;
    ctx.body = { error: "email already used" };
  } else {
    const ID = await signUp.register(ctx.request.body);
    ctx.status = 200;
    ctx.body = { userId: ID };
  }
  return await next();
});

module.exports = router.routes();
