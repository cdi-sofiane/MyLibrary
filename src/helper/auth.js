import express from "express";
import { AppUser } from "../model/AppUser.js";
let router = express.Router();

export default async (req, res, next) => {
    var objAppUser = new AppUser(1);
    if (req.session.loggedIn == true) {
        console.log('1');

        next()
    } else {

       
        // console.log();
        let objRes = await objAppUser.findOneById(objAppUser._id);

        req.session.user = objRes
        req.session.loggedIn = true
        next()
    }


};


// export default router;
