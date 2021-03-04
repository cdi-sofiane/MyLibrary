import { useState, useEffect } from 'react'
import "../../src/style.css"
const NovelCard = (props) => {
    const { id, name } = props;
    const [image, imageState] = useState('')

    useEffect(() => {
        try {
            const pathimg = require(`../assets/image/${id}.jpg`).default
            return imageState(pathimg)
        } catch (error) {
            const pathimg = require(`../assets/image/error_404.svg`).default
            return imageState(pathimg)
        }
    }, [id])
    return <div className="card">
        <div className="card-header">
            <img alt='some value' src={image} />
        </div>
        <div className="cardbody">
            <span>{name}</span>
        </div>
        <div className="cardfooter"></div>
    </div>
}
// 
export { NovelCard }