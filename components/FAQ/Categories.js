import {AiOutlineHome, AiOutlineRight} from "react-icons/ai";

const icon = {
    'Category 1-dark': <AiOutlineHome size={26} color={'#121212'}/>,
    'Category 1-light': <AiOutlineHome size={26} color={'#ffffff'}/>,
    'Category 2-dark': <AiOutlineHome size={26} color={'#121212'}/>,
    'Category 2-light': <AiOutlineHome size={26} color={'#ffffff'}/>,
    'Category 3-dark': <AiOutlineHome size={26} color={'#121212'}/>,
    'Category 3-light': <AiOutlineHome size={26} color={'#ffffff'}/>,
    'Category 4-dark': <AiOutlineHome size={26} color={'#121212'}/>,
    'Category 4-light': <AiOutlineHome size={26} color={'#ffffff'}/>,
    'Category 5-dark': <AiOutlineHome size={26} color={'#121212'}/>,
    'Category 5-light': <AiOutlineHome size={26} color={'#ffffff'}/>,
    'Category 6-dark': <AiOutlineHome size={26} color={'#121212'}/>,
    'Category 6-light': <AiOutlineHome size={26} color={'#ffffff'}/>,
}

const Categories = ({categories, handleClick, selected}) => {

    return (
        <div>
            {categories.map(category => (
                <div
                    className={`my-4 p-4 flex justify-between items-center cursor-pointer transition duration-300 ease-out rounded-2xl ${category === selected ? 'bg-tyrian-purple' : ''}`}
                    key={category} onClick={() => handleClick(category)}>
                    <div className='flex'>
                        {icon[`${category}-${selected === category ? 'light' : 'dark'}`]}
                        <span
                            className={`text-lg ml-3 font-light ${category === selected ? 'text-white' : 'text-black'}`}>{category}</span>
                    </div>
                    <AiOutlineRight size={20} color={category === selected ? '#ffffff' : '#121212'}/>
                </div>
            ))}
        </div>
    )
}

export default Categories;