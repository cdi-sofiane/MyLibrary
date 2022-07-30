import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// let chapters = [{ 'chapter': "1", 'name': 'one' }, { 'chapter': "2", 'name': 'deux' }, { 'chapter': "3", 'name': 'trois' }, { 'chapter': "4", 'name': 'quatre' },]

const NovelChapter = (props) => {
    const novel = props.match.params.id;

    const [novelId, setNovelId] = useState(novel)
    const [listChapter, setListChapter] = useState([])
    useEffect(() => {
        (async () => {
            try {
                let result = await fetchNovelesChapter(novelId)
                let json = result.listchapter
                // JSON.stringify(listChapter)
                setListChapter(json)
            } catch (error) {

            }
        })()

    }, [novelId])

    return (
        <div>
            {listChapter.map((item, i) =>
                <Link key={i} to={`/${item.id}`} >{item.title}</Link>
            )}

        </div>
    )
}
let fetchNovelesChapter = async (id) => {

    const fetchedData = await fetch('/novels/' + id, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },

    })
    return fetchedData.json()


}

export default NovelChapter