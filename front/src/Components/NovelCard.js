import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../../src/style.css"
const NovelCard = ({ path, props, onCheckNovel }) => {
    const { id, name } = props;
    const history = path;
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

    return (
        <div className="card" >
            <div className="card-header">
                <img alt='some value' test={`chapter/${id}`} src={image} id={id} onClick={onCheckNovel} />
            </div>
            <div className="cardbody">
                <span>{name}</span>
            </div>
            <div className="cardfooter"></div>
        </div>
    )
}
// 
export { NovelCard }