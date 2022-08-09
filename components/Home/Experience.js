import Image from "next/image";

const Experience = () => {
    return (
        <div className='grid grid-cols-2 my-12 mb-36'>
            <div className='justify-self-start self-center ml-8'>
                <h1 className='font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-tyrian-purple'>How was
                    your <br/> Orientation <br/> experience?</h1>
            </div>
            <div className='justify-self-center relative scale-110'>
                <Image src='/experience.png' width={500} height={448} alt='experience'/>
                <div
                    className='p-6 scale-150 rounded-2xl bg-tyrian-purple absolute -left-8 -bottom-4 shadow-tyrian-purple shadow-md'>
                    <p className='font-normal text-lg mb-4 text-white text-center'>Tell us?</p>
                    <p className='text-xl flex justify-around items-center -mt-2 mb-2'>
                        {['😡', '😢', '😊', '😃', '😘'].map((emoji, i) => (
                            <span key={i} className='mx-2 cursor-pointer'>{emoji}</span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience;