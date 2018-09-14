const database = require("../config/firebase");

async function checkUser({ email: e, password: pw }) {
  try {
    const user = await database
      .ref("/users")
      .orderByChild("email")
      .equalTo(e)
      .once("value");
    const [[, { email, password }]] = Object.entries(user.val());
    return email === e && password === pw;
  } catch (e) {
    return false;
  }
}

module.exports = { checkUser };
