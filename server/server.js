import { } from "./src/config/env.js";
import express from "express";
import dashboard from "./src/route/dashbord.js";
import session from "express-session";
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
const __dirname = path.resolve();


const { host, port, secret } = process.env;
//library
const app = express();
app.use(cors())

app.use(bodyParser.json())

app.disable('etag').disable('x-powered-by')

app.use(session({
  key: "test",
  secret: secret,
  resave: false,
  saveUninitialized: false,
  cookie: { expires: 3600 * 60 * 1 * 100 },

}))
app.use(express.static('../front/build'));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname, '../front/build/static/', 'index.html'));
});

app.use('/dashboard', dashboard);

app.listen(port, () => {
  console.log(`serveur lancer sur l\'addresse ${host + port}`);
});
