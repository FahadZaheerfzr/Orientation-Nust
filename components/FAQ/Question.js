import styles from "./faq.module.css";
import {BsChevronLeft} from "react-icons/bs";
import {useTheme} from "next-themes";

const Question = ({question, onClick, isSelected}) => {

    const {theme} = useTheme();

    return (
        <div className={`${styles.accordionItem} border border-gray`} style={{marginBottom: '-1px'}}
             onClick={onClick}>
            <h2 className="mb-0 flex py-4 px-5 cursor-pointer">
                <button
                    className={`font-semibold flex items-center w-full text-left rounded-none transition focus:outline-none ${theme === 'dark' ? 'text-white' : isSelected ? 'text-tyrian-purple' : 'text-black'}`}>
                    {question.question}
                </button>
                <div className={`transition duration-300 ease-out ${isSelected ? 'rotate-90' : '-rotate-90'}`}>
                    <BsChevronLeft size={26} color={theme === 'dark' ? '#ffffff' : isSelected ? '#720240' : '#121212'}/>
                </div>
            </h2>
            <div className={`${isSelected ? 'border-t border-gray h-auto' : 'h-0'}`}>
                <div
                    className={`py-4 px-5 ${isSelected ? 'block opacity-100 h-auto' : 'hidden opacity-0 h-0'}`}>
                    {question.answer}
                </div>
            </div>
        </div>
    )
}

export default Question;