import React, { useEffect, useState } from 'react';
import { NovelCard } from '../Components/NovelCard';
import { Footer } from './Footer';
import { Header } from './Header';

import '../../src/style.css';


export function Main() {
    const [novels, novelsState] = useState([])
    const [page, pageState] = useState('51')
    useEffect(() => {
        (async () => {
            try {
                let jsonRes = await fetchNoveles(page)
                // let objstate = [
                    pageState(jsonRes.page)
                    novelsState(jsonRes.listnovels)
                // ]

                // return objstate;
            } catch (error) {
                console.error(error)
            }

        })()
    }, [page])

    return <div className="body">
        <Header></Header>
        <div className="container" >
            <div className="card-container">

                {
                    novels.map(novel =>

                        <NovelCard key={novel.id} name={novel.name} id={novel.id}></NovelCard>
                    )
                }
            </div>
        </div>
        <Footer></Footer>
    </div>


}

let fetchNoveles = async (page) => {
    const fetchedData = await fetch('/dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page })
    })
    return await fetchedData.json()

}