import auth from "../helper/auth.js";
import Dashboard from "../controller/Dashboard.js";
import express from "express";
let router = express.Router();


router.post("/", Dashboard.findNovels);
// router.post("/", (req,res)=>{
//     // console.log(res);
//     console.log(req);
// });

router.get("/:id", Dashboard.findAllNovels);
export default router;
