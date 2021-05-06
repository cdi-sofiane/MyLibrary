import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Header } from '../Template/Header.js'
import { UserSessionContext } from '../Template/UserSessionContext.js'
import "./protected-route.css"

function ProtectedRoute({ component: Component, ...rest }) {

    const { isLoggedIn, setLogginIn } = useContext(UserSessionContext)


    console.log({ isLoggedIn })
    if (!isLoggedIn) {
        return <Redirect to='/' />
    } else {
        return <>
            <Header />
            <div className="container">
                <Route {...rest} component={Component} />
            </div>
        </>
    }







}



export { ProtectedRoute }