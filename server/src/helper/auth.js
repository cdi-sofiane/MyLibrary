import express from "express";
import { AppUser } from "../model/AppUser.js";
let router = express.Router();

export default async (req, res, next) => {
    // console.log()
    var objAppUser = new AppUser(1);
    if (req.session.loggedIn == true) {
        console.log('logged');
        console.log(req.session.user);
        next()
    } else {


        let objRes = await objAppUser.findOneById(objAppUser.id);
        req.session.user = objRes
        console.log(objRes.length);
        if (objRes.length > 0) {
            
            req.session.loggedIn = true
            console.log('logged true');
            next()
            // return
        }else{

            console.log('logged false');
            res.redirect('dashboard/1');
        }
      
    }


};


// export default router;
