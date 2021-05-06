import { React, useContext, useState } from 'react'
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import { ListChapterComponent } from '../Components/ListChapterComponent';
import { UserSessionContext } from '../Template/UserSessionContext'

export function Dashboard() {

    const { isLoggedIn, setLogginIn } = useContext(UserSessionContext)
    const { url, path } = useRouteMatch();
    const history = useHistory()
    const [href, setHref] = useState(url)
  
    return (

        < Switch >
            {/* { console.log(href)} */}
            {/* <Route exact path={path} component={listnovel}></Route> */}
            <Route path={`${path}/${href}`} component={ListChapterComponent} />
        </Switch >
    )


}
