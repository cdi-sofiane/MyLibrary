import React, { useContext, useEffect, useState } from 'react'
import { Route, Switch, useHistory, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { NovelCard } from '../Components/NovelCard'
import { UserSessionContext } from '../Template/UserSessionContext'
import NovelChapter from './NovelChapter'


export const NovelCatalogs = (props) => {
    const history = useHistory()
    const { url, path } = useRouteMatch()
    const { isLoggedin, setIsloggedIn } = useContext(UserSessionContext)
    const [books, setBooks] = useState([])
    const [currentPath, setCurrentPath] = useState(path)
    let linkPath
    console.log(
        { 'location': history.location.pathname },
        { 'currentPath': currentPath },
        { 'url': url },
        { 'path': path }
    )

    useEffect(() => {
        (async () => {
            try {
                let result = await fetchNoveles()
                if (!result.logged) {
                    return history.push('/')
                }
                const json = result.listnovels;
                setBooks(json)
                localStorage.setItem('isLoggedIn', result.logged)
                return result

            } catch (error) {
                console.log(error);
            }
        })()
        setCurrentPath(linkPaths => history.location.pathname)
    }, [history])
    const handlePath = (e) => {
        linkPath = e.target.id
        setCurrentPath(linkPaths => path + '/' + linkPath)

    }
    const ListNovel = () => {

        return (

            books.map(novel =>
                <Link to={`${path}/${novel.id}`} key={novel.id} onClick={handlePath}>
                    <NovelCard props={novel} path={history}  ></NovelCard>
                </Link>
            )


        )
    }
    return (
        <div className="card-container">

            <Switch>
                <Route exact path={`${path}`} component={ListNovel} />
                <Route exact path={`${path}/:id`} component={NovelChapter} props={props} />
                <Route path='*' component={() => "404 page not found"} />
            </Switch>
        </div>
    )
}
let fetchNoveles = async () => {
    const fetchedData = await fetch('/novels', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },

    })
    return fetchedData.json()


}