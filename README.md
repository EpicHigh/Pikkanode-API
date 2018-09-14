# Pikkanode API

## POST /api/v1/auth/signup

Sign up new user.

* Content-Type: application/json

```json
{
    "email": "test@example.com",
    "password": "password 1234 lol gg ezez!!!!",
}
```

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns created user id

```json
{
    "userId": 1099
}
```

### Example error response

* Status: 400
* Content-Type: application/json; charset=utf-8

Returns the error message if signup failed

```json
{
    "error": "email already used"
}
```

### Example error response

* Status: 400
* Content-Type: application/json; charset=utf-8

Returns the error message if email is invalid

```json
{
    "error": "invalid email"
}
```

### Example error response

* Status: 400
* Content-Type: application/json; charset=utf-8

Returns the error message if password length is less than 6 charactor

```json
{
    "error": "password too short"
}
```

---

## POST /api/v1/auth/signin

Sign in user.

* Content-Type: application/json

```json
{
    "email": "test@example.com",
    "password": "password 1234 lol gg ezez!!!!"
}
```

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object.

```json
{}
```

### Example error response

* Status: 400
* Content-Type: application/json; charset=utf-8

Returns the error message if sign in failed

```json
{
    "error": "wrong email or password"
}
```

---

## POST /api/v1/auth/signout

Sign out user.

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object.

```json
{}
```
---

## Built With

* [@koa/cors](https://github.com/koajs/cors) - Cross-Origin Resource Sharing(CORS) for koa
* [Debug](https://github.com/visionmedia/debug) - A tiny JavaScript debugging.
* [Dotenv](https://github.com/motdotla/dotenv) - Storing configuration in the environment separate from code.
* [Firebase](https://firebase.google.com/) - Realtime database.
* [Koa](https://firebase.google.com/) - A new web framework designed by the team behind Express.
* [Koa-Bodyparser](https://github.com/koajs/bodyparser) - A body parser for koa
* [Koa-Convert](https://www.npmjs.com/package/koa-convert) - Convert koa legacy ( 0.x & 1.x ) generator middleware to modern promise middleware ( 2.x ).
* [Koa-JSON](https://github.com/koajs/json) - JSON pretty-printed response middleware. Also converts node object streams to binary.
* [Koa-Logger](https://github.com/koajs/logger) - Development style logger middleware for koa.
* [Koa-Onerror](https://github.com/koajs/logger) - An error handler for koa, hack ctx.onerror.
* [Koa-Router](https://github.com/alexmingoia/koa-router) - Router middleware for koa.
* [Koa-Static](https://github.com/koajs/static) - Static file server middleware
* [Koa-Views](https://github.com/queckezz/koa-views) - Template rendering middleware for koa (hbs, swig, pug, anything! ✨)
* [Pug](https://pugjs.org/api/getting-started.html) - A high performance template engine.

## Authors

* **Prasit Tongpradit** - *Initial work* - [EpicHigh](https://github.com/EpicHigh)

See also the list of [contributors](https://github.com/EpicHigh/Pikkanode-API/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/EpicHigh/Pikkanode-API/blob/master/LICENSE) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Continuous development
* Inspiration
* Education
* etc
