import router from "./default.js";
import dashboardController from "../controller/dashboardController.js";
import session from "express-session"


router.get("/", dashboardController.find_all);

// router.post("/id", dashboardController.find_one);
export default router;
