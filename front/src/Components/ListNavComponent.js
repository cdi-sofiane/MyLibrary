import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class ListNavComponent extends Component {

    render() {
        return <>
            <ul>
                <li> <Link to={"/dashboard"} label="dashboard">Dashboard</Link></li>
                <li> <Link to={"/novel"} label="novel">Novel</Link></li>
                <li> <Link to={"/users"} label="users">Users</Link></li>
                <li> <Link to={"/"} label="users">login</Link></li>
            </ul>

        </>
    }
}