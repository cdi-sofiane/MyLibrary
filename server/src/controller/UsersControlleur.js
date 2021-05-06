
import { } from "../config/env.js";
import { AppUsers } from '../model/AppUsers.js'


class UsersController {

    async loadUsers(req, res) {

        try {
            let appUser = new AppUsers()
            let ListAppUsers = await appUser.findUsersAll()
          
            let isLogged = req.session.logged
            res.json({ listUsers: ListAppUsers, isLogged })
        } catch (error) {
            res.json({ listUsers: [], isLogged: false })

        }

    }

}

export default new UsersController