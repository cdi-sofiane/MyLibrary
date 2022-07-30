import path from 'path'
import cors from 'cors'
import { } from "./src/config/env.js";
import { sessionStore } from "./src/config/db.js";
import express from "express";
import dashboard from "./src/route/dashbord.js";
import connection from "./src/route/connection.js";
import novels from "./src/route/novels.js";
import users from "./src/route/users.js";
import session from "express-session";
const __dirname = path.resolve();


const { host, port, secret, NODE_ENV ,key } = process.env;
const app = express();
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ["GET", "POST"],
  credentials: true,
}))
app.use(express.json())

app.disable('etag').disable('x-powered-by')



app.use(session({
  key: key,
  secret: secret,
  resave: false,
  store: sessionStore,
  saveUninitialized: true,
  cookie: { maxAge: 3600 * 60 * 1 },
}))
if (NODE_ENV == "production") {

  app.use(express.static('../front/build'));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../front/build/', 'index.html'));
  })
}

app.use('/', connection);
app.use('/users', users);
app.use('/dashboard', dashboard);
app.use('/novels', novels);



app.listen(port, () => {
  console.log(`serveur lancer sur l\'addresse ${host + port}`);
});
