require("dotenv/config");

require("./db");

const express = require("express");

const hbs = require("hbs");

const helpers = require("handlebars-helpers");
hbs.registerHelper(helpers());

const app = express();

require("./config")(app);

const session = require("express-session");
const mongoStore = require("connect-mongo");
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      sameSite: true,
      httpOnly: true,
      maxAge: 600000,
    },
    rolling: true,
    store: new mongoStore({
      mongoUrl: process.env.MONGODB_URI,
      ttl: 60 * 60 * 24,
    }),
  })
);

function getCurrentLoggedUser(req, res, next) {
  if (req.session && req.session.currentUser) {
    app.locals.loggedInUser = req.session.currentUser;
  } else {
    app.locals.loggedInUser = "";
  }
  next();
}

app.use(getCurrentLoggedUser);


const projectName = "medicalDB";
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;


const index = require("./routes/index");
app.use("/", index);

const user = require("./routes/user");
app.use("/", user);

const auth = require("./routes/auth");
app.use("/", auth);

const pathology = require("./routes/pathology");
app.use("/", pathology);

const entity = require("./routes/entity");
app.use("/", entity);

const search = require('./routes/search');
app.use('/', search);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
