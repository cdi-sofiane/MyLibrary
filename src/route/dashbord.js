import auth from "../helper/auth.js";
import dashboardController from "../controller/dashboardController.js";
import express from "express";
let router = express.Router();


router.get("/", auth,dashboardController.findAll);

router.get("/:id", dashboardController.findOne);
export default router;
