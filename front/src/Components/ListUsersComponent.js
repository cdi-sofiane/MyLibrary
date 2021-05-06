import React, { Component } from 'react'

export class ListUsersComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { users: [], isLogged: this.props.isLogged }
    }
    componentDidMount() {
        (async () => {
            try {

                let result = await fechedUserData()
                let listUsers = result.listUsers
                console.log({ result});
                if (!result.isLogged) {
                    // return (<Redirect to={{ pathname: '/' }}></Redirect>)
                    return this.props.history.push('/')
                }

                this.setState({ users: listUsers })
                // this.setState({ isLogged: result.isLogged })

                return result
            } catch (error) {
                console.log(error);
            }
        })()

    }

    render() {
        return <>

            {this.state.users.map(user =>
                <span key={user.id}>{user.id} </span>

            )}

        </>
    }
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