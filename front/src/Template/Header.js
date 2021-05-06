import React from 'react';
import {ListNavComponent}  from '../Components/ListNavComponent';
import './header.css'


export class Header extends React.Component {
    render() {

        return <div className="nav-bar">
            <ListNavComponent></ListNavComponent>

        </div>

    }


}

