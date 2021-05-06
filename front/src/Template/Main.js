import React, { useEffect, useMemo, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { LoginCard } from '../Connection/LoginCard';
import { Dashboard } from '../Dashboard/Dashboard';
import { NovelCatalogs } from '../Novels/NovelCatalogs';
import { ProtectedRoute } from '../Components/ProtectedRoute';
import { ListUsersComponent } from '../Components/ListUsersComponent';


import '../../src/style.css';
import { UserSessionContext } from './UserSessionContext';



function Main() {

    const [isLoggedIn, setLogginIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')))
    const value = useMemo(() => ({ isLoggedIn, setLogginIn }), [isLoggedIn, setLogginIn])


    useEffect(() => {
        (async () => {
            try {
                let result = await fetchSessionUser()
                localStorage.setItem('isLoggedIn', result.logged)
                setLogginIn(JSON.parse(localStorage.getItem('isLoggedIn')))
                return result
            } catch (error) {
                console.log(error);
            }
        })()

    }, [isLoggedIn])



    return <div className="body">
        <UserSessionContext.Provider value={value}  >
            <Switch>
                <Route exact path='/' component={LoginCard} />
                <ProtectedRoute path='/dashboard' component={Dashboard} />
                <ProtectedRoute path='/novel' component={NovelCatalogs} />
                <ProtectedRoute path='/users' component={ListUsersComponent} />
                <Route path='*' component={() => "404 page not found"} />

            </Switch>
        </UserSessionContext.Provider>

    </div >



}

let fetchSessionUser = async () => {
    let result = await fetch('/checksession', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
    })
    return await result.json()
}
export { Main }

