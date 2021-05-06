import React, { useContext, useEffect } from 'react'
import { useRouteMatch } from 'react-router'
import { UserSessionContext } from '../Template/UserSessionContext'

export const ListChapterComponent = (props) => {
    console.log(props.location);
    const { setLogginIn } = useContext(UserSessionContext)

    console.log(useRouteMatch());
    useEffect(() => {
        (async () => {
            try {
                let result = await fechedUserData()
                console.log({ result });
                if (!result.isLogged) {
                    return this.props.history.push('/')
                }

            } catch (error) {
                console.log(error);
            }
        })()

    }, [])
    return (<div >
        <div className="card-container">
        </div>
    </div>)

}

const fechedUserData = async () => {
    let fetchedData = await fetch('/users', {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
    })
    console.log(fetchedData);
    return await fetchedData.json()
}