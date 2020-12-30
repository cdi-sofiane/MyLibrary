import express from "express";
let router = express.Router();

router.get("/", (req, res) => {

  res.send('test');
});

export default router;
