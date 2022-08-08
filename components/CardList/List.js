import styles from './CardList.module.css';
import Card from "./Card";

const List = ({list = [], type}) => {

    const getClassName = i => {
        return styles[`item${(i % 4) + 1}`];
    }

    return (
        <div className={styles.schoolsGrid}>
            {(list).map((data, i) => (
                <Card
                    type={type}
                    id={data.id}
                    className={getClassName(i)}
                    key={i} image={data.image}>
                    {data.name}
                </Card>
            ))}
        </div>
    )
}

export default List;