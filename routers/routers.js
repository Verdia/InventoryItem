var controllers = require("../controllers/controllers"),
    express = require('express'),
    app = express();

app
  .route("/registration")
  .post(controllers.regist)

app.route("/login").post(controllers.login);

app.route("/api/data/user")
   .get(controllers.listUser);

module.exports = app