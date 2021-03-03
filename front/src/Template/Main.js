import React, { useEffect, useState } from 'react';
import { NovelCard } from '../Components/NovelCard';
import { Footer } from './Footer';
import { Header } from './Header';

import '../../src/style.css';


export function Main() {
    const [novels, novelsState] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const fetchedData = await fetch('/dashboard')
                let jsonRes = await fetchedData.json()
                return novelsState(jsonRes.listnovels)
            } catch (error) {
                console.error(error)
            }

        })()
    }, [])

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

