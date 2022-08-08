import gallery from '../../util/gallery.json';
import CardList from "../../components/CardList/CardList";

const Gallery = ({schools, lifeAtNUST}) => {
    return <CardList schools={schools} lifeAtNUST={lifeAtNUST} />
}

export const getStaticProps = async () => {
    return {
        props: gallery
    }
}

export default Gallery;