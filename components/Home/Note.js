import Image from "next/image";

const Note = ({message}) => {
    return (
            <div
                className='mt-20 max-w-6xl block lg:flex items-center justify-center cursor-all-scroll mx-auto'>
                <Image height={500} width={343} src={message.image} alt='client'
                       className='h-2/5 mx-auto mb-4 lg:m-0 lg:h-full lg:mr-0 lg:ml0'/>
                <div className='w-full md:w-2/4 mx-auto'>
                    <div className='h-0.5 bg-tyrian-purple rounded-full mr-2 mb-12'
                         style={{width: '110%', transform: 'translateX(-5%)'}}/>

                    <p className='font-normal opacity-80 text-xl'>
                        {message.comment}
                    </p>
                    <h1 className='font-black text-3xl mt-12'>{message.name}</h1>
                    <div className='flex mt-1 items-center'>
                        <div className='w-10 h-0.5 bg-tyrian-purple rounded-full mr-2'/>
                        <p className='font-normal text-lg'>{message.program}</p>
                    </div>

                    <div className='h-0.5 bg-tyrian-purple rounded-full mr-2 mt-12'
                         style={{width: '110%', transform: 'translateX(-5%)'}}/>
                </div>
            </div>
    )
}

export default Note;