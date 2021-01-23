import auth from "../helper/auth.js";
import Dashboard from "../controller/Dashboard.js";
import express from "express";
let router = express.Router();


router.get("/", auth, Dashboard.findAll);

router.get("/:id", Dashboard.findOne);
export default router;
