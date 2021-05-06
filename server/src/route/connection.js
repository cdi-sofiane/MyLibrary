import express from "express";
let router = express.Router();
import { auth, accountLogin } from '../helper/auth.js'
import ConnectionControlleur from "../controller/ConnectionControlleur.js";

router.use("/checksession", auth, ConnectionControlleur.isSession);
router.use("/login", accountLogin, ConnectionControlleur.login);

export default router;
