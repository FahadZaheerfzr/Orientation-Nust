import Image from "next/image";

const Note = ({message}) => {
    return (
        <div className='bg-ultra-red p-8 rounded-lg flex flex-col justify-between'>
            <p className='text-lg text-white opacity-80'>{message.comment}</p>
            <div>
                <h2 className='font-semibold mt-4 text-white'>{message.name}</h2>
                <p className='font-light -mt-1 text-white opacity-60'>{message.program}</p>
            </div>
        </div>
    )
}

export default Note;