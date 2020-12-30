
import { } from "./src/config/env.js";
import express from "express";
import connection from "./src/route/connection.js";
import dashboard from "./src/route/dashbord.js";
import session from "express-session";

import nameResolver from './src/helper/nameResolver.js';

const { host, port, secret } = process.env;
//library
const app = express();
app.disable('etag').disable('x-powered-by')
//middleware
app.use(session({
    key: "test",
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: { expires: 3600 * 60 * 1 * 100 },

}))
// var k = [];
// app.use('/', nameResolver, (req, res, next) => { var k = "roro" })

// console.log(k)
// app.use(Promise.resolve(nameResolver), Promise.resolve(nameResolver));
app.use('/dashboard', dashboard);
app.listen(port, () => {
    console.log(`serveur lancer sur l\'addresse ${host + port}`);
});
