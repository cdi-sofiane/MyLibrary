import { } from "../config/env.js";
import { AppUsers } from '../model/entity/AppUsers.js'


class ConnectionControlleur {

    async isSession(req, res) {
        let isLogged = { logged: req.session.logged }
        res.json(isLogged)
    }
    async login(req, res) {

        let isLogged = { logged: req.session.logged }
        res.json(isLogged)

    }
}
export default new ConnectionControlleur