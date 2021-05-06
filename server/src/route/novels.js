import express from "express";
import { auth } from "../helper/auth.js";
import novelsController from "../controller/NovelsControlleur.js"
let router = express.Router();


router.post("/", auth, novelsController.findNovels);


router.get("/:id", auth, novelsController.findNovelChapters);

export default router;
