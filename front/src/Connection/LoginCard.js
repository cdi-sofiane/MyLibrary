import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';

import { UserSessionContext } from '../Template/UserSessionContext';


export function LoginCard(props) {

    // this.state = { mail: '', password: '', isLogged: false };
    // const [isLogged, setIsLogged] = useState('')
    const [mail, setmail] = useState('')
    const history = useHistory()
    const [password, setpassword] = useState('')
    const { setLogginIn } = useContext(UserSessionContext)
    const handleChangeMail = (e) => {
        console.log(e.target.value);
        setmail(e.target.value)
        return mail
    }
    const handleChangePassword = (e) => {
        console.log(e.target.value);
        setpassword(e.target.value)
        return password
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        (async () => {

            let result = await fetch('/login', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mail, password })
            })
            let isAutentified = await result.json()

            setLogginIn(isAutentified.logged)
            // console.log(isAutentified.logged);
            localStorage.setItem('isLoggedIn', isAutentified.logged)
            if (!isAutentified.logged) {
                return history.push('/')
            } else {
                return history.push('/dashboard')
            }

        })()
    }


    return <>

        <div className="login-form-card ">
            <form onSubmit={handleSubmit}>
                <div className="login-card">
                    <div className="login-input">
                        <div className="labes">
                            <label>
                                Email :
                                </label>
                            <input type="text" name="mail" mail={mail.value} onChange={handleChangeMail} />
                        </div>
                        <div className="labes">
                            <label>
                                Password :
                                </label>
                            <input type="text" name="password" password={password} onChange={handleChangePassword} />
                        </div>
                    </div>
                    <input className="btn btn-submit" type="submit" value="Envoyer" />
                </div>
            </form>
        </div>

    </>


}