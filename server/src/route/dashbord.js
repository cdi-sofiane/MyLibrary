import auth from "../helper/auth.js";
import Dashboard from "../controller/Dashboard.js";
import express from "express";
let router = express.Router();


router.get("/", Dashboard.findNovels);

router.get("/:id", Dashboard.findAllNovels);
export default router;
