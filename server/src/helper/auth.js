import express from "express";
import { AppUsers } from "../model/entity/AppUsers.js";
let router = express.Router();


export const accountLogin = async (req, res, next) => {

    req.session.logged = ''
    try {
        const { mail, password } = req.body
        let objAppUsers = new AppUsers();
        objAppUsers.setMail = mail
        objAppUsers.setPassword = password
        
        let objAppUserLogged = await objAppUsers.findOneByParams(objAppUsers);
        if (objAppUserLogged.length > 0) {

            req.session.logged = true
            req.session.user = { mail: objAppUserLogged[0].mail, pwd: objAppUserLogged[0].password }

            // await req.session.save()
            return next()
        } else {
            req.session.logged = false
            return next()
        }
    } catch (error) {
        console.log(error);
    }

}

export const auth = async (req, res, next) => {

    let isLogged = {}
    console.log(req.session);
    try {
        if (!req.session.logged) {
            req.session.logged = false
            isLogged = { logged: req.session.logged }
            return res.json(isLogged)
        }
        return next()

    } catch (error) {
        console.log(error);

    }


}

