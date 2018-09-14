const Router = require("koa-router");
const router = new Router();

router.prefix("/api/v1/auth");

router.post("/signout", async (ctx, next) => {
	ctx.status = 200;
	ctx.body = {};
	return await next()
});

module.exports = router.routes();