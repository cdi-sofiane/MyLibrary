import express from "express";
import { auth } from "../helper/auth.js";
import dashboardController from "../controller/DashboardControlleur.js"
let router = express.Router();


router.post("/", auth, dashboardController.findNovels);


router.get("/:id", auth, dashboardController.findAllNovels);
export default router;
