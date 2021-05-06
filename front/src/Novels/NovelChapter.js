import React, { useEffect, useState } from 'react'


const NovelChapter = (props) => {
    const novel = props.match.params.id;
    console.log(novel);
    const [novelId, setNovelId] = useState(novel)
    useEffect(() => {
        (async () => {
            try {
                let listChapter = await fetchNovelesChapter(novelId)
            } catch (error) {

            }
        })()
        return () => {
            // cleanup
        }
    }, [novelId])

    return (
        <div>

        </div>
    )
}
let fetchNovelesChapter = async (id) => {
    console.log(id);
    const fetchedData = await fetch('/novels/' + id, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },

    })
    return fetchedData.json()


}

export default NovelChapter     