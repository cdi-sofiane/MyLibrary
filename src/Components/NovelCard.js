
import "../../src/style.css"


const NovelCard = (props) => {
    const { id, name } = props;


    return <div className="card"     >
        <span>{id}</span>
        <span>{name}</span>
    </div>
}
export { NovelCard }