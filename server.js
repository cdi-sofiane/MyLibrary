import { } from "./src/config/env.js";
import express from "express";
import dashboard from "./src/route/dashbord.js";
import session from "express-session";


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

app.use('/dashboard', dashboard);
app.listen(port, () => {
    console.log(`serveur lancer sur l\'addresse ${host + port}`);
});
