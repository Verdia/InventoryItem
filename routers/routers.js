var controllers = require("../controllers/controllers"),
    express = require('express'),
    app = express();

app
  .route("/registration")
  .post(controllers.regist);

app.route("/login")
   .post(controllers.login);

app.route("/api/data/user")
   .get(controllers.listUser);

app.route("/insert")
   .post(controllers.insertData);

app.route("/api/data/item")
   .get(controllers.listItem);

module.exports = app