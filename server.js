import express from "express";
import { } from "./src/config/env.js";
import checklogin from "./src/helper/checklogin.js";
import dashboard from "./src/route/dashbord.js";
import session from "express-session"


const { host, port ,secret} = process.env;
//library
const app = express();

//middleware
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}))
//route
app.use(checklogin, (req, res, next) => {
  next();
});
app.use("/dashboard", dashboard);
// c.end();
app.listen(port, () => {
  console.log(`serveur lancer sur l\'addresse ${host + port}`);
});
