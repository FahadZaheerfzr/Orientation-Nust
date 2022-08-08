import Title from "../Title";
import List from "./List";

const CardList = ({schools, lifeAtNUST}) => {
    return (
        <div id='cardList'>
            <Title>Gallery</Title>
            <h1 className='text-tyrian-purple text-6xl font-black my-12'>Schools</h1>
            <List list={schools} type='School'/>

            <h1 className='text-tyrian-purple text-6xl font-black my-12'>Life At NUST</h1>
            <List list={lifeAtNUST} type='Life at NUST'/>
        </div>
    )
}

export default CardList;