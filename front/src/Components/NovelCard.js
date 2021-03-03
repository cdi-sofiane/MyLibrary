
import "../../src/style.css"
// import imgs from  "../assets/image/evil-disciple.jpg"


// const images = require.context('../../server/assets/image/evil-disciple.jpg');
const NovelCard = (props) => {
    const { id, name } = props;

    // console.log(images);
    var loadImage = require.resolve("./src/assets/image/evil-disciple.jpg",true);
    return <div className="card"     >
        <img alt='some value' src={loadImage} />
        <span>{id}</span>
        <span>{name}</span>
    </div>
}
export { NovelCard }