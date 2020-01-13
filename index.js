//Calling Library
let express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  routers = require("./routers/routers"),
  next = require("next"),
  dev = process.env.NODE_ENV !== "production",
  Next = next({ dev }),
  handle = Next.getRequestHandler()

//setup server port
var port = process.env.PORT || 3000;

Next.prepare().then(() => {
  //configure bodyparser to handle post
  app.use(
    express.urlencoded({
      extended: true
    })
  );

  app.use(express.json());

  //Connect mongoose and set connect var
  mongoose.connect("mongodb://localhost/reg-login", {
    useNewUrlParser: true
  });

  var db = mongoose.connection;

  //Checking DB
  if (!db) console.log("Error connecting to Database");
  else console.log("Database Connected");

  //Set message to Default Localhost
  //app.get("/", (req, res) => res.send("API with express Succeded"));

  app.use("/", routers);
  app.get("*", (req, res) => {
      return handle(req, res);
})

  //launching app to listen specified port
  app.listen(port, function() {
    console.log("Running API from port " + port);
  });
});
