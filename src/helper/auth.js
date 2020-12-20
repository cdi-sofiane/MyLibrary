import express from "express";
import { AppUser } from "../model/AppUser.js";
let router = express.Router();

export default async (req, res, next) => {
    var objAppUser = new AppUser();
    if (req.session.loggedIn == true) {

        next()
    } else {

        let userId = objAppUser.setId(1);
        let objRes = await objAppUser.findOneById(userId);
        console.log('2');

        req.session.user = objRes
        req.session.loggedIn = true
        next()
    }


};


// export default router;
