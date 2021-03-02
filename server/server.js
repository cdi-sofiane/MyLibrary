import { } from "./src/config/env.js";
import express from "express";
import dashboard from "./src/route/dashbord.js";
import session from "express-session";
import path from 'path'
import cors from 'cors'
const __dirname = path.resolve();



const { host, port, secret } = process.env;
//library
const app = express();
app.use(cors())
// app.set('view engine', 'ejs');
console.log(express.static(path.join(__dirname, './front/build')));
app.disable('etag').disable('x-powered-by')
//middleware
app.use(session({
    key: "test",
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: { expires: 3600 * 60 * 1 * 100 },

}))
app.get('/', (req, res) => {
    const listnovels = [
        { "id": 1, "name": "Leanne Graham" },
        { "id": 2, "name": "Ervin Howell" },
        { "id": 3, "name": "Clementine Bauch" },
        { "id": 4, "name": "Patricia Lebsack" }
    ]
    // console.log();
    // res.set('Content-type', 'application/json')

    res.json({userlist :['user1','user2']})
})
app.use('/dashboard', dashboard);
app.listen(port, () => {
    console.log(`serveur lancer sur l\'addresse ${host + port}`);
});
