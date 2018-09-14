const database = require("../config/firebase");

async function checkUser({ email }) {
  const user = await database
    .ref("/users")
    .orderByChild("email")
    .equalTo(email)
    .once("value");
  return user.val() !== null;
}

async function register({ email, password }) {
  const { key } = await database.ref("/users").push({ email, password });
  return key;
}

function checkPassword({ password }) {
  console.log(`${password} will be return ${!(String(password).length > 6)}`);
  return !(String(password).length > 6);
}

function checkEmail({ email }) {
  return !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

module.exports = { checkUser, checkPassword, checkEmail, register };
