import express from "express";
let router = express.Router();

router.use('/', (req, res, next) => {
    console.log(req.url);
    //  req._resolverName =
    return {
        s: req.url
    };

})

export default router;