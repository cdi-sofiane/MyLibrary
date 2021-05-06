import { } from "./env.js";
const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME } = process.env;

import mysql from "mysql";
import session from "express-session";
import MySQLStore from "express-mysql-session";
const MySQLStoreSession = MySQLStore(session)

var options = {
    host: DB_HOST,
    port: 3306,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    charset: 'utf8mb4_bin',
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
}

export var connection = mysql.createConnection(options);
export var sessionStore = new MySQLStoreSession(options, connection);

