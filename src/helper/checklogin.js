import router from "../route/default.js";
import { AppUser } from "../model/AppUser.js";

router.use(async (req, res, next) => {
    var objAppUser = new AppUser();
    var objRes = await objAppUser.findOneById(1);

    res.objAppUser = objRes;
    next();
});
router.get("/", (req, res, next) => {
    // console.log(res.objAppUser);
    if (!res.objAppUser) {
        res.send('http:free.fr')
    } else {
        req.session.User =  res.objAppUser 
        // console.log(req.session)
        next();
    }
});

export default router;
